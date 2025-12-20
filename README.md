# Slidoc

1つのMarkdownソースから、ドキュメントとスライドの両方を生成するプラットフォーム。

**Demo:** [https://slidoc.vercel.app](https://slidoc.vercel.app)

## Features

- **1ソース2出力** - 同じMarkdownファイルをドキュメントとしてもスライドとしても閲覧可能
- **スクロールスライド** - reveal.jsのscroll viewで快適なプレゼン体験
- **ダークモード対応** - システム設定に連動したテーマ切り替え
- **コメント機能** - giscusによるGitHub Discussions連携
- **シェア機能** - X (Twitter) とリンクコピー

## Quick Start

```bash
# リポジトリをクローン
git clone https://github.com/shibaleo/slidoc.git
cd slidoc

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

ブラウザで http://localhost:4321 を開く。

## 記事の書き方

`src/content/docs/` に `.mdx` ファイルを作成:

```markdown
---
title: 記事タイトル
description: 記事の説明
---

## スライド1

内容...

---

## スライド2

`---` で区切るとスライドが分かれます。
```

詳細は [記事の書き方ガイド](https://slidoc.vercel.app/tech/writing-articles/) を参照。

## ディレクトリ構成

```
slidoc/
├── src/
│   ├── content/docs/     # 記事ファイル (.mdx)
│   │   ├── tech/         # 技術記事
│   │   └── life/         # 生活・思想記事
│   ├── components/       # カスタムコンポーネント
│   ├── pages/present/    # プレゼンモード
│   └── styles/           # カスタムCSS
├── astro.config.mjs      # Astro設定
└── package.json
```

## デプロイ

### Vercel (推奨)

1. GitHubにリポジトリをプッシュ
2. [Vercel](https://vercel.com) でリポジトリをインポート
3. デフォルト設定のままデプロイ

### その他

```bash
npm run build
```

`dist/` フォルダを任意のホスティングサービスにデプロイ。

## カスタマイズ

### サイト情報

`astro.config.mjs` を編集:

```javascript
starlight({
  title: 'Your Site Name',
  site: 'https://your-domain.com',
  // ...
})
```

### giscus (コメント機能)

`src/components/Giscus.astro` を編集し、自分のリポジトリ情報を設定。

詳細は [giscusの設定方法](https://slidoc.vercel.app/tech/giscus-setup/) を参照。

## Tech Stack

- [Astro](https://astro.build/) - Static Site Generator
- [Starlight](https://starlight.astro.build/) - Documentation Theme
- [starlight-theme-next](https://github.com/HiDeoo/starlight-theme-next) - Next.js風ダークテーマ
- [reveal.js](https://revealjs.com/) - プレゼンテーションフレームワーク
- [giscus](https://giscus.app/) - コメントシステム
- [marked](https://marked.js.org/) - Markdownパーサー

## Acknowledgements

このプロジェクトは以下のオープンソースプロジェクトを利用しています:

| プロジェクト | ライセンス | 作者/組織 |
|-------------|-----------|----------|
| [Astro](https://astro.build/) | MIT | The Astro Technology Company |
| [Starlight](https://starlight.astro.build/) | MIT | The Astro Technology Company |
| [starlight-theme-next](https://github.com/HiDeoo/starlight-theme-next) | MIT | HiDeoo |
| [reveal.js](https://revealjs.com/) | MIT | Hakim El Hattab |
| [giscus](https://giscus.app/) | MIT | giscus contributors |
| [marked](https://marked.js.org/) | MIT | marked contributors |
| [Noto Sans JP](https://fonts.google.com/noto/specimen/Noto+Sans+JP) | OFL | Google |

## License

MIT License - See [LICENSE](LICENSE) for details.

## Author

[@shibaleo](https://github.com/shibaleo)
