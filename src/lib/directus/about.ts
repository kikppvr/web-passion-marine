import { browserFetch, getDirectusAssetUrl, pickTranslation } from "./client";

// ─── Raw types (Directus response shape) ────────────────────────────────────

interface RawAboutPageTranslation {
    id: number;
    about_page_id: number;
    languages_code: string;
    vision_label: string | null;
    vision_heading: string | null;
    vision_body: string | null;
    mission_label: string | null;
    mission_body: string | null;
    milestones_label: string | null;
}

export interface RawAboutPage {
    id: number;
    status: string;
    banner_image: string | null;
    translations: RawAboutPageTranslation[];
}

interface RawMissionCardTranslation {
    id: number;
    mission_cards_id: number;
    languages_code: string;
    title: string | null;
    description: string | null;
}

export interface RawMissionCard {
    id: number;
    sort: number | null;
    image: string | null;
    translations: RawMissionCardTranslation[];
}

interface RawMilestoneTranslation {
    id: number;
    milestones_id: number;
    languages_code: string;
    title: string | null;
    description: string | null;
}

export interface RawMilestone {
    id: number;
    sort: number | null;
    year: string | null;
    translations: RawMilestoneTranslation[];
}

// ─── App types (what the component uses) ────────────────────────────────────

export interface AboutPageData {
    bannerImage: string | null;
    visionLabel: string;
    visionHeading: string;
    visionBody: string;
    missionLabel: string;
    missionBody: string;
    milestonesLabel: string;
}

export interface MissionCardItem {
    id: string;
    image: string;
    title: string;
    description: string;
}

export interface MilestoneItem {
    id: string;
    year: string;
    subtitle: string;
    description: string;
}

// ─── Default states ──────────────────────────────────────────────────────────

export const DEFAULT_ABOUT_PAGE: AboutPageData = {
    bannerImage: "/images/banner/about-us.webp",
    visionLabel: "Vision",
    visionHeading: "PASSION DRIVES PERFECTION",
    visionBody: "",
    missionLabel: "Mission",
    missionBody: "",
    milestonesLabel: "Milestones",
};

export const DEFAULT_MISSION_CARDS: MissionCardItem[] = [];
export const DEFAULT_MILESTONES: MilestoneItem[] = [];

// ─── Fetch functions ─────────────────────────────────────────────────────────

export async function fetchRawAboutPage(): Promise<RawAboutPage | null> {
    return browserFetch<RawAboutPage>("/items/about_page/1?fields=*,translations.*");
}

export async function fetchRawMissionCards(): Promise<RawMissionCard[] | null> {
    return browserFetch<RawMissionCard[]>(
        "/items/mission_cards?fields=*,translations.*&sort[]=sort"
    );
}

export async function fetchRawMilestones(): Promise<RawMilestone[] | null> {
    return browserFetch<RawMilestone[]>(
        "/items/milestones?fields=*,translations.*&sort[]=sort"
    );
}

// ─── Derive functions ────────────────────────────────────────────────────────

export function deriveAboutPage(
    raw: RawAboutPage,
    language: "th" | "en"
): AboutPageData {
    const tr = pickTranslation(raw.translations, language);
    return {
        bannerImage: getDirectusAssetUrl(raw.banner_image) ?? "/images/banner/about-us.webp",
        visionLabel: tr?.vision_label ?? "Vision",
        visionHeading: tr?.vision_heading ?? "PASSION DRIVES PERFECTION",
        visionBody: tr?.vision_body ?? "",
        missionLabel: tr?.mission_label ?? "Mission",
        missionBody: tr?.mission_body ?? "",
        milestonesLabel: tr?.milestones_label ?? "Milestones",
    };
}

export function deriveMissionCards(
    raw: RawMissionCard[],
    language: "th" | "en"
): MissionCardItem[] {
    return raw.map(item => {
        const tr = pickTranslation(item.translations, language);
        return {
            id: String(item.id),
            image:
                getDirectusAssetUrl(item.image) ??
                `/images/about-us/mission-0${item.id}.webp`,
            title: tr?.title ?? "",
            description: tr?.description ?? "",
        };
    });
}

export function deriveMilestones(
    raw: RawMilestone[],
    language: "th" | "en"
): MilestoneItem[] {
    return raw.map(item => {
        const tr = pickTranslation(item.translations, language);
        return {
            id: String(item.id),
            year: item.year ?? "",
            subtitle: tr?.title ?? "",
            description: tr?.description ?? "",
        };
    });
}
