import { browserFetch, pickTranslation } from "./client";

// --- Raw Directus types (exported for page-level useMemo) ---

interface RawContactTranslation {
    id: number;
    contact_info_id: number;
    languages_code: string;
    company_name: string | null;
    address: string | null;
}

interface RawContactPhoneTranslation {
    id: number;
    contact_phones_id: number;
    languages_code: string;
    label: string | null;
}

interface RawContactPhone {
    id: number;
    status: string;
    number: string | null;
    contact_info_id: number;
    translations: RawContactPhoneTranslation[];
}

interface RawContactEmailTranslation {
    id: number;
    contact_emails_id: number;
    languages_code: string;
    label: string | null;
}

interface RawContactEmail {
    id: number;
    status: string;
    email: string | null;
    contact_info_id: number;
    translations: RawContactEmailTranslation[];
}

export interface RawContactInfo {
    id: number;
    line_id: string | null;
    line_oa_url: string | null;
    facebook_url: string | null;
    google_maps_url: string | null;
    instagram_url: string | null;
    google_maps_embed_url: string | null;
    banner_image: string | null;
    translations: RawContactTranslation[];
    phones: RawContactPhone[];
    emails: RawContactEmail[];
}

// --- App types ---

export interface ContactPhone {
    number: string;
    label: string;
}

export interface ContactEmail {
    email: string;
    label: string;
}

export interface ContactInfo {
    companyName: string;
    address: string;
    phones: ContactPhone[];
    emails: ContactEmail[];
    googleMapsUrl: string | null;
    googleMapsEmbedUrl: string | null;
    instagramUrl: string | null;
    lineOaUrl: string | null;
}

export const DEFAULT_CONTACT_INFO: ContactInfo = {
    companyName: "Passion Marine Company Limited",
    address: "113/14, Moo 5, Chiang Rak Yai, Sam Khok, Pathum Thani 12160",
    phones: [
        { number: "087-259-9158", label: "Phone" },
        { number: "087-585-1656", label: "Phone" },
    ],
    emails: [
        { email: "info@passionmarine.co.th", label: "For General Inquiries" },
        {
            email: "athinee@passionmarine.co.th",
            label: "For Corporate and Business Inquiries",
        },
    ],
    googleMapsUrl:
        "https://www.google.com/maps/place/Passion+Marine+Co.,Ltd./@14.0579515,100.5729664,17z",
    googleMapsEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.123456789!2d100.5729664!3d14.0579515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27f6e657ab7f1%3A0xccbc7d7df24a6f44!2sPassion%20Marine%20Co.%2CLtd.!5e0!3m2!1sen!2sth!4v1234567890123!5m2!1sen!2sth",
    instagramUrl: "https://instagram.com/passion.marine",
    lineOaUrl: "https://line.me/ti/p/@passionmarine",
};

// --- Query ---

const CONTACT_INFO_FIELDS = [
    "*",
    "translations.*",
    "phones.*",
    "phones.translations.*",
    "emails.*",
    "emails.translations.*",
].join(",");

const CONTACT_INFO_PATH = `/items/contact_info/1?fields=${CONTACT_INFO_FIELDS}`;

// --- Functions ---

export async function fetchRawContactInfo(): Promise<RawContactInfo | null> {
    return browserFetch<RawContactInfo>(CONTACT_INFO_PATH);
}

export function deriveContactInfo(raw: RawContactInfo, language: "th" | "en"): ContactInfo {
    const translation = pickTranslation(raw.translations, language);

    const phones: ContactPhone[] = (raw.phones ?? [])
        .filter(p => p.status === "published" && p.number)
        .map(p => ({
            number: p.number!,
            label: pickTranslation(p.translations, language)?.label ?? "",
        }));

    const emails: ContactEmail[] = (raw.emails ?? [])
        .filter(e => e.status === "published" && e.email)
        .map(e => ({
            email: e.email!,
            label: pickTranslation(e.translations, language)?.label ?? "",
        }));

    return {
        companyName: translation?.company_name ?? DEFAULT_CONTACT_INFO.companyName,
        address: translation?.address ?? DEFAULT_CONTACT_INFO.address,
        phones: phones.length ? phones : DEFAULT_CONTACT_INFO.phones,
        emails: emails.length ? emails : DEFAULT_CONTACT_INFO.emails,
        googleMapsUrl: raw.google_maps_url ?? DEFAULT_CONTACT_INFO.googleMapsUrl,
        googleMapsEmbedUrl: raw.google_maps_embed_url ?? DEFAULT_CONTACT_INFO.googleMapsEmbedUrl,
        instagramUrl: raw.instagram_url ?? DEFAULT_CONTACT_INFO.instagramUrl,
        lineOaUrl: raw.line_oa_url ?? DEFAULT_CONTACT_INFO.lineOaUrl,
    };
}
