// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNext from 'starlight-theme-next';

// https://astro.build/config
export default defineConfig({
	site: 'https://slidoc.vercel.app',
	integrations: [
		starlight({
			plugins: [starlightThemeNext()],
			title: 'Slidoc',
			description: '考えを広めるためのドキュメント＆スライドサイト',
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
