import rss from '@astrojs/rss';
import fs from 'node:fs';
import path from 'node:path';

export async function GET(context) {
  const docsDir = path.join(process.cwd(), 'src/content/docs');
  const items = [];

  function scanDir(dir, prefix = '') {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        scanDir(fullPath, prefix ? `${prefix}/${file}` : file);
      } else if (file.endsWith('.mdx') || file.endsWith('.md')) {
        const slug = prefix ? `${prefix}/${file.replace(/\.(mdx?|md)$/, '')}` : file.replace(/\.(mdx?|md)$/, '');
        // Skip index and about
        if (slug === 'index' || slug === 'about') continue;

        const content = fs.readFileSync(fullPath, 'utf-8');
        const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
        let title = slug;
        let description = '';

        if (frontmatterMatch) {
          const frontmatter = frontmatterMatch[1];
          const titleMatch = frontmatter.match(/title:\s*["']?([^"'\n]+)["']?/);
          const descMatch = frontmatter.match(/description:\s*["']?([^"'\n]+)["']?/);
          if (titleMatch) title = titleMatch[1];
          if (descMatch) description = descMatch[1];
        }

        items.push({
          title,
          description,
          link: `/${slug}/`,
          pubDate: stat.mtime,
        });
      }
    }
  }

  scanDir(docsDir);

  return rss({
    title: 'slidoc',
    description: '考えを広めるためのドキュメント＆スライドサイト',
    site: context.site,
    items,
    customData: `<language>ja</language>`,
  });
}
