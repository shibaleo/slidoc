// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNext from 'starlight-theme-next';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
	site: 'https://slidoc.vercel.app',
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
	integrations: [
		starlight({
			plugins: [starlightThemeNext()],
			title: 'Slidoc',
			description: 'Slide Presentation And Web Page Documentation',
			defaultLocale: 'root',
			locales: {
				root: {
					label: '日本語',
					lang: 'ja',
				},
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/shibaleo/slidoc' },
				{ icon: 'x.com', label: 'X', href: 'https://x.com/shibaleo' },
			],
			sidebar: [
				{
					label: '使い方',
					items: [
						{ label: '概要', link: '/howto/' },
						{ label: 'はじめに', link: '/howto/getting-started/' },
						{ label: '記事の書き方', link: '/howto/writing-articles/' },
						{ label: 'スライド記法', link: '/howto/slide-syntax/' },
						{ label: 'カスタマイズ', link: '/howto/customization/' },
						{ label: 'giscusの設定方法', link: '/howto/giscus-setup/' },
						{ label: '数式の書き方', link: '/howto/math-example/' },
						{ label: 'サンプル技術記事', link: '/howto/example/' },
					],
				},
				{
					label: 'Tech',
					items: [
						{ label: '概要', link: '/tech/' },
						{ label: 'アーキテクチャ', link: '/tech/architecture/' },
						{ label: 'プレゼンモード', link: '/tech/present-mode/' },
						{ label: 'テーマ連動', link: '/tech/theme-sync/' },
					],
				},
				{
					label: 'About',
					link: '/about/',
				},
			],
			editLink: {
				baseUrl: 'https://github.com/shibaleo/slidoc/edit/main/',
			},
			lastUpdated: true,
			customCss: ['./src/styles/custom.css'],
			components: {
				MarkdownContent: './src/components/CustomMarkdownContent.astro',
			},
		}),
	],
});
