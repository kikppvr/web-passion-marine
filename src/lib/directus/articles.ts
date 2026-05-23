import { browserFetch, getDirectusAssetUrl, pickTranslation } from "./client";

export interface RawArticleTranslation {
    id: number;
    articles_id: number;
    languages_code: string;
    title: string | null;
    description: string | null;
    content: string | null;
}

export interface RawArticleGallery {
    id: number;
    articles_id: number;
    directus_files_id: string;
}

export interface RawArticleItem {
    id: number;
    status: string;
    sort: number | null;
    slug: string | null;
    cover_image: string | null;
    category: string | null;
    author: string | null;
    date_start: string | null;
    date_end: string | null;
    translations: RawArticleTranslation[];
    gallery: RawArticleGallery[];
}

export interface NewsItem {
    id: string;
    title: string;
    description: string;
    image: string;
    date: string;
    category: string;
    href: string;
}

export interface NewsDetailItem {
    id: string;
    title: string;
    description: string;
    category: string;
    date: string;
    author: string;
    mainImage: string;
    gallery: Array<{ src: string; alt: string }>;
    content: string;
}

export const DEFAULT_NEWS: NewsItem[] = [];
export const DEFAULT_NEWS_DETAIL: NewsDetailItem | null = null;

const ARTICLE_FIELDS = "fields=*,translations.*,gallery.*";
const PUBLISHED_FILTER = "filter[status][_eq]=published";

function formatArticleDate(start: string | null, end: string | null): string {
    if (!start) return "";
    const fmt = (d: string) =>
        new Date(d).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    return end ? `${fmt(start)} – ${fmt(end)}` : fmt(start);
}

export async function fetchRawArticles(): Promise<RawArticleItem[] | null> {
    return browserFetch<RawArticleItem[]>(
        `/items/articles?${ARTICLE_FIELDS}&${PUBLISHED_FILTER}&sort[]=sort`
    );
}

export async function fetchRawArticleById(id: string): Promise<RawArticleItem | null> {
    const data = await browserFetch<RawArticleItem[]>(
        `/items/articles?${ARTICLE_FIELDS}&filter[id][_eq]=${id}&${PUBLISHED_FILTER}&limit=1`
    );
    return data?.[0] ?? null;
}

export function deriveNewsItem(raw: RawArticleItem, language: "th" | "en"): NewsItem {
    const tr = pickTranslation(raw.translations, language);
    return {
        id: String(raw.id),
        title: tr?.title ?? "",
        description: tr?.description ?? "",
        image: getDirectusAssetUrl(raw.cover_image) ?? "",
        date: formatArticleDate(raw.date_start, raw.date_end),
        category: raw.category ?? "",
        href: `/news/${raw.id}`,
    };
}

export function deriveNewsDetailItem(raw: RawArticleItem, language: "th" | "en"): NewsDetailItem {
    const tr = pickTranslation(raw.translations, language);
    return {
        id: String(raw.id),
        title: tr?.title ?? "",
        description: tr?.description ?? "",
        category: raw.category ?? "",
        date: formatArticleDate(raw.date_start, raw.date_end),
        author: raw.author ?? "",
        mainImage: getDirectusAssetUrl(raw.cover_image) ?? "",
        gallery: raw.gallery.map(g => ({
            src: getDirectusAssetUrl(g.directus_files_id) ?? "",
            alt: tr?.title ?? "",
        })),
        content: tr?.content ?? "",
    };
}
