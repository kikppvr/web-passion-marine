import { browserFetch, getDirectusAssetUrl, pickTranslation } from "./client";

interface RawPortfolioTranslation {
    id: number;
    portfolios_id: number;
    languages_code: string;
    title: string | null;
    description: string | null;
    content: string | null;
}

interface RawPortfolioServiceTranslation {
    id: number;
    portfolio_services_id: number;
    languages_code: string;
    title: string | null;
    description: string | null;
}

interface RawPortfolioService {
    id: number;
    icon: string | null;
    slug: string | null;
    translations: RawPortfolioServiceTranslation[];
}

interface RawPortfolioServiceItem {
    portfolio_services_id: RawPortfolioService;
}

interface RawBrandLogo {
    directus_files_id: { id: string };
}

interface RawGalleryItem {
    directus_files_id: { id: string };
}

export interface RawPortfolioItem {
    id: number;
    model: string | null;
    slug: string | null;
    cover_image: string | null;
    main_image: string | null;
    translations: RawPortfolioTranslation[];
    brand_logos: RawBrandLogo[];
    gallery: RawGalleryItem[];
    Relation: RawPortfolioServiceItem[];
}

export interface PortfolioItem {
    id: string;
    title: string;
    model: string;
    image: string;
    brandLogos: string[];
    href: string;
}

export interface PortfolioDetailItem {
    id: string;
    title: string;
    description: string;
    model: string;
    brandLogos: string[];
    mainImage: string;
    gallery: Array<{ src: string; alt: string }>;
    content: string;
    servicesProvided: Array<{ title: string; image: string }>;
    otherPortfolios: PortfolioItem[];
}

export const DEFAULT_PORTFOLIOS: PortfolioItem[] = [];

const PORTFOLIO_FIELDS = [
    "id", "model", "slug", "cover_image", "main_image",
    "translations.*",
    "brand_logos.directus_files_id.id",
    "gallery.directus_files_id.id",
    "Relation.portfolio_services_id.id",
    "Relation.portfolio_services_id.icon",
    "Relation.portfolio_services_id.slug",
    "Relation.portfolio_services_id.translations.*",
].join(",");

export async function fetchRawPortfolios(): Promise<RawPortfolioItem[] | null> {
    const params = new URLSearchParams({
        "filter[status][_eq]": "published",
        sort: "sort",
        fields: PORTFOLIO_FIELDS,
    });
    return browserFetch<RawPortfolioItem[]>(`/items/portfolios?${params.toString()}`);
}

export function derivePortfolioItem(raw: RawPortfolioItem, language: "th" | "en"): PortfolioItem {
    const tr = pickTranslation(raw.translations, language);
    return {
        id: String(raw.id),
        title: tr?.title ?? "",
        model: raw.model ?? "",
        image: getDirectusAssetUrl(raw.cover_image) ?? "",
        brandLogos: raw.brand_logos
            .map(bl => getDirectusAssetUrl(bl.directus_files_id.id) ?? "")
            .filter(url => url !== ""),
        href: `/portfolio/${raw.id}`,
    };
}

export function derivePortfolioDetail(
    raw: RawPortfolioItem,
    allRaw: RawPortfolioItem[],
    language: "th" | "en"
): PortfolioDetailItem {
    const tr = pickTranslation(raw.translations, language);
    const title = tr?.title ?? "";

    const servicesProvided = raw.Relation.map(rel => {
        const svc = rel.portfolio_services_id;
        const svcTr = pickTranslation(svc.translations, language);
        return {
            title: svcTr?.title ?? "",
            image: getDirectusAssetUrl(svc.icon) ?? "",
        };
    });

    const otherPortfolios = allRaw
        .filter(p => p.id !== raw.id)
        .slice(0, 3)
        .map(p => derivePortfolioItem(p, language));

    return {
        id: String(raw.id),
        title,
        description: tr?.description ?? "",
        model: raw.model ?? "",
        brandLogos: raw.brand_logos
            .map(bl => getDirectusAssetUrl(bl.directus_files_id.id) ?? "")
            .filter(url => url !== ""),
        mainImage: getDirectusAssetUrl(raw.main_image) ?? getDirectusAssetUrl(raw.cover_image) ?? "",
        gallery: raw.gallery
            .map(g => ({ src: getDirectusAssetUrl(g.directus_files_id.id) ?? "", alt: title }))
            .filter(g => g.src !== ""),
        content: tr?.content ?? "",
        servicesProvided,
        otherPortfolios,
    };
}
