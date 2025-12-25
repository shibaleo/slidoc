/**
 * カテゴリ設定の一元管理
 */
export const CATEGORIES = {
  howto: {
    label: '使い方',
    slug: 'howto',
  },
  tech: {
    label: 'Tech',
    slug: 'tech',
  },
} as const;

export type CategoryKey = keyof typeof CATEGORIES;

export const CATEGORY_SLUGS = Object.values(CATEGORIES).map((c) => c.slug);

/**
 * 指定されたslugがカテゴリかどうかを判定
 */
export function isCategory(slug: string): boolean {
  return CATEGORY_SLUGS.includes(slug);
}
