import { browserFetch, getDirectusAssetUrl, pickTranslation } from "./client";

export interface RawHomePageTranslation {
    id: number;
    home_page_id: number;
    languages_code: string;
    hero_title: string | null;
    hero_subtitle: string | null;
}

export interface RawHomePage {
    id: number;
    stats_projects: string | null;
    stats_customers: string | null;
    review_score: string | null;
    review_count: string | null;
    hero_video: string | null;
    translations: RawHomePageTranslation[];
}

export interface HomePageData {
    heroTitle: string;
    heroSubtitle: string;
    heroVideoUrl: string | null;
    statsProjects: number;
    statsCustomers: number;
    reviewScore: string;
    reviewCount: number;
}

export const DEFAULT_HOME_PAGE: HomePageData = {
    heroTitle: "Expert Boat Solutions,",
    heroSubtitle: "Powered by Passion",
    heroVideoUrl: null,
    statsProjects: 103,
    statsCustomers: 47,
    reviewScore: "4.5",
    reviewCount: 32,
};

// === Home services (boat solutions section) ===

interface RawHomeServiceTranslation {
    languages_code: string;
    title: string | null;
}

export interface RawHomeServiceItem {
    id: number;
    sort: number | null;
    slug: string | null;
    tag: string | null;
    card_image: string | null;
    card_video: string | null;
    translations: RawHomeServiceTranslation[];
}

export interface HomeServiceItem {
    id: string;
    title: string;
    image: string;
    video: string;
    href: string;
}

export const DEFAULT_HOME_SERVICES: HomeServiceItem[] = [];

export async function fetchRawHomeServices(): Promise<RawHomeServiceItem[] | null> {
    return browserFetch<RawHomeServiceItem[]>(
        "/items/services?fields=id,sort,slug,tag,card_image,card_video,translations.languages_code,translations.title&sort[]=sort"
    );
}

export function deriveHomeServices(
    raw: RawHomeServiceItem[],
    language: "th" | "en"
): HomeServiceItem[] {
    return raw.map(item => {
        const tr = pickTranslation(item.translations, language);
        const tag = item.tag ?? "";
        const slug = item.slug ?? "";
        const href =
            tag === "engineering"
                ? `/services/engineering-solutions#${slug}`
                : `/services/aesthetic-solutions#${slug}`;
        return {
            id: String(item.id),
            title: tr?.title ?? "",
            image: getDirectusAssetUrl(item.card_image) ?? "",
            video: getDirectusAssetUrl(item.card_video) ?? "",
            href,
        };
    });
}

// === Home page singleton ===

export async function fetchRawHomePage(): Promise<RawHomePage | null> {
    return browserFetch<RawHomePage>("/items/home_page/1?fields=*,translations.*");
}

export function deriveHomePage(raw: RawHomePage, language: "th" | "en"): HomePageData {
    const tr = pickTranslation(raw.translations, language);
    return {
        heroTitle: tr?.hero_title ?? DEFAULT_HOME_PAGE.heroTitle,
        heroSubtitle: tr?.hero_subtitle ?? DEFAULT_HOME_PAGE.heroSubtitle,
        heroVideoUrl: getDirectusAssetUrl(raw.hero_video),
        statsProjects: parseInt(raw.stats_projects ?? "0", 10) || DEFAULT_HOME_PAGE.statsProjects,
        statsCustomers:
            parseInt(raw.stats_customers ?? "0", 10) || DEFAULT_HOME_PAGE.statsCustomers,
        reviewScore: raw.review_score ?? DEFAULT_HOME_PAGE.reviewScore,
        reviewCount: parseInt(raw.review_count ?? "0", 10) || DEFAULT_HOME_PAGE.reviewCount,
    };
}
