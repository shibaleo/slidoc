/**
 * URL生成ユーティリティ
 * すべてのURL生成を一元管理
 */

import { isCategory } from '../config/categories';

export const SITE_URL = 'https://slidoc.vercel.app';

/**
 * パスを正規化する
 * - 先頭・末尾のスラッシュを削除
 * - 連続スラッシュを正規化
 */
export function normalizeSlug(pathname: string): string {
  return pathname
    .replace(/^\/+/, '')
    .replace(/\/+$/, '')
    .replace(/\/+/g, '/')
    .trim();
}

/**
 * 通常ページのURLを取得
 * @example getPageUrl('howto/getting-started') => '/howto/getting-started/'
 */
export function getPageUrl(slug: string): string {
  const normalized = normalizeSlug(slug);
  if (!normalized) return '/';
  return `/${normalized}/`;
}

/**
 * スライドページのURLを取得
 * @example getSlideUrl('howto/getting-started') => '/howto/getting-started/slide/'
 * @example getSlideUrl('howto') => '/howto/slide/' (カテゴリindex)
 */
export function getSlideUrl(slug: string): string {
  const normalized = normalizeSlug(slug);
  if (!normalized) return '/';
  return `/${normalized}/slide/`;
}

/**
 * スライドURLから通常ページURLを取得
 * @example getPageUrlFromSlide('howto/getting-started') => '/howto/getting-started/'
 * @example getPageUrlFromSlide('howto/index') => '/howto/'
 */
export function getPageUrlFromSlide(slug: string): string {
  const normalized = normalizeSlug(slug);
  // index付きのslugは親カテゴリにリダイレクト
  const pageSlug = normalized.endsWith('/index')
    ? normalized.replace(/\/index$/, '')
    : normalized;
  return getPageUrl(pageSlug);
}

/**
 * フルURLを取得（シェア用など）
 */
export function getFullUrl(slug: string): string {
  return `${SITE_URL}${getPageUrl(slug)}`;
}

/**
 * プレゼンリンクを表示すべきかどうかを判定
 */
export function shouldShowSlideLink(slug: string): boolean {
  const normalized = normalizeSlug(slug);
  // ホームページ、空、カテゴリindexでは非表示
  return normalized !== '' && normalized !== 'index' && !normalized.endsWith('/index');
}
