import { browserFetch, getDirectusAssetUrl, pickTranslation } from "./client";

// === Raw types ===

interface RawPageTranslation {
    languages_code: string;
    heading: string | null;
    description: string | null;
}

export interface RawPageData {
    id: number;
    banner_image: string | null;
    translations: RawPageTranslation[];
}

interface RawStatTranslation {
    languages_code: string;
    title: string | null;
    description: string | null;
}

export interface RawServicesPageStat {
    id: number;
    sort: number | null;
    value: string | null;
    translations: RawStatTranslation[];
}

interface RawFeatureTranslation {
    languages_code: string;
    title: string | null;
    description: string | null;
}

export interface RawServicesPageFeature {
    id: number;
    sort: number | null;
    icon: string | null;
    translations: RawFeatureTranslation[];
}

interface RawServiceTranslation {
    languages_code: string;
    title: string | null;
    description: string | null;
}

interface RawServiceGallery {
    directus_files_id: string;
}

export interface RawServiceItem {
    id: number;
    sort: number | null;
    slug: string | null;
    tag: string | null;
    translations: RawServiceTranslation[];
    gallery: RawServiceGallery[];
}

// === App types ===

export interface ServicesPageData {
    heading: string;
    description: string;
    bannerImage: string | null;
}

export interface ServicesPageStat {
    id: string;
    value: string;
    title: string;
    description: string;
}

export interface ServicesPageFeature {
    id: string;
    iconUrl: string | null;
    title: string;
    description: string;
}

export interface ServiceSection {
    id: string;
    slug: string;
    title: string;
    description: string;
    gallery: Array<{ src: string; alt: string }>;
}

// === Defaults ===

export const DEFAULT_PAGE_DATA: ServicesPageData = {
    heading: "",
    description: "",
    bannerImage: null,
};
export const DEFAULT_SERVICES_PAGE_STATS: ServicesPageStat[] = [];
export const DEFAULT_SERVICES_PAGE_FEATURES: ServicesPageFeature[] = [];
export const DEFAULT_SERVICE_SECTIONS: ServiceSection[] = [];

// === Fetch functions ===

const PAGE_FIELDS = "fields=*,translations.*";

export async function fetchRawServicesPage(): Promise<RawPageData | null> {
    return browserFetch<RawPageData>(`/items/services_page/1?${PAGE_FIELDS}`);
}

export async function fetchRawEngineeringPage(): Promise<RawPageData | null> {
    return browserFetch<RawPageData>(`/items/engineering_page/1?${PAGE_FIELDS}`);
}

export async function fetchRawAestheticPage(): Promise<RawPageData | null> {
    return browserFetch<RawPageData>(`/items/aesthetic_page/1?${PAGE_FIELDS}`);
}

export async function fetchRawServicesPageStats(): Promise<RawServicesPageStat[] | null> {
    return browserFetch<RawServicesPageStat[]>(
        `/items/services_page_stats?fields=*,translations.*&sort[]=id`
    );
}

export async function fetchRawServicesPageFeatures(): Promise<RawServicesPageFeature[] | null> {
    return browserFetch<RawServicesPageFeature[]>(
        `/items/services_page_features?fields=*,translations.*&sort[]=id`
    );
}

export async function fetchRawServices(
    tag: "engineering" | "aesthetic"
): Promise<RawServiceItem[] | null> {
    return browserFetch<RawServiceItem[]>(
        `/items/services?fields=id,sort,slug,tag,translations.*,gallery.directus_files_id&filter[tag][_eq]=${tag}&sort[]=sort`
    );
}

// === Derive functions ===

export function derivePageData(raw: RawPageData, language: "th" | "en"): ServicesPageData {
    const tr = pickTranslation(raw.translations, language);
    return {
        heading: tr?.heading ?? "",
        description: tr?.description ?? "",
        bannerImage: getDirectusAssetUrl(raw.banner_image),
    };
}

export function deriveServicesPageStats(
    raw: RawServicesPageStat[],
    language: "th" | "en"
): ServicesPageStat[] {
    return raw.map(item => {
        const tr = pickTranslation(item.translations, language);
        return {
            id: String(item.id),
            value: item.value ?? "",
            title: tr?.title ?? "",
            description: tr?.description ?? "",
        };
    });
}

export function deriveServicesPageFeatures(
    raw: RawServicesPageFeature[],
    language: "th" | "en"
): ServicesPageFeature[] {
    return raw.map(item => {
        const tr = pickTranslation(item.translations, language);
        return {
            id: String(item.id),
            iconUrl: getDirectusAssetUrl(item.icon),
            title: tr?.title ?? "",
            description: tr?.description ?? "",
        };
    });
}

export function deriveServiceSections(
    raw: RawServiceItem[],
    language: "th" | "en"
): ServiceSection[] {
    return raw.map(item => {
        const tr = pickTranslation(item.translations, language);
        const title = tr?.title ?? "";
        return {
            id: String(item.id),
            slug: item.slug ?? "",
            title,
            description: tr?.description ?? "",
            gallery: item.gallery.map(g => ({
                src: getDirectusAssetUrl(g.directus_files_id) ?? "",
                alt: title,
            })),
        };
    });
}
