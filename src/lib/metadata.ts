import type { Metadata } from "next";
import { getEnvironment } from "./env";

/**
 * Get site URL based on environment
 */
function getSiteUrlFromEnv(): string {
    // Priority: NEXT_PUBLIC_SITE_URL > environment-based URL > fallback
    if (process.env.NEXT_PUBLIC_SITE_URL) {
        return process.env.NEXT_PUBLIC_SITE_URL;
    }

    try {
        const env = getEnvironment();

        switch (env) {
            case "development":
                // For local development, use dev URL or localhost
                return process.env.NEXT_PUBLIC_DEV_URL || "https://dev.passionmarine.co.th";
            case "staging":
                return "https://stg.passionmarine.co.th";
            case "production":
                return "https://passionmarine.co.th";
            default:
                return "https://passionmarine.co.th";
        }
    } catch {
        // Fallback if environment detection fails
        return process.env.NEXT_PUBLIC_SITE_URL || "https://passionmarine.co.th";
    }
}

const siteUrl = getSiteUrlFromEnv();
const siteName = "Passion Marine";
const defaultTitle = "Passion Marine - บริการทางทะเลมืออาชีพ";
const defaultDescription = "บริการทางทะเลครบวงจร รับรองคุณภาพและความปลอดภัย";
const defaultImage = `${siteUrl}/og-image.jpg`;

export interface MetadataProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: "website" | "article";
    locale?: string;
}

/**
 * Generate metadata with Open Graph and Twitter Card support
 * @param props - Metadata configuration options
 * @returns Next.js Metadata object
 */
export function generateMetadata({
    title = defaultTitle,
    description = defaultDescription,
    image = defaultImage,
    url = siteUrl,
    type = "website",
    locale = "th_TH",
}: MetadataProps = {}): Metadata {
    // If title is not the default, append site name
    const fullTitle = title === defaultTitle ? title : `${title} | ${siteName}`;

    return {
        title: fullTitle,
        description,
        metadataBase: new URL(siteUrl),
        alternates: {
            canonical: url,
        },
        openGraph: {
            type,
            locale,
            url,
            siteName,
            title,
            description,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
        icons: {
            icon: [{ url: "/favicon.png", sizes: "any", type: "image/png" }],
            shortcut: "/favicon.png",
            apple: "/favicon.png",
        },
    };
}

/**
 * Get the base site URL
 * Exported function to get site URL (can be called from other modules)
 */
export function getSiteUrl(): string {
    // If called from client-side, use the computed siteUrl
    // If called from server-side, recompute to ensure correct environment
    if (typeof window !== "undefined") {
        return siteUrl;
    }
    // Server-side: recompute to ensure correct environment
    return getSiteUrlFromEnv();
}

/**
 * Get default metadata values
 */
export function getDefaultMetadata() {
    return {
        siteUrl,
        siteName,
        defaultTitle,
        defaultDescription,
        defaultImage,
    };
}
