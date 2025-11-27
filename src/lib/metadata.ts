import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://passionmarine.co.th';
const siteName = 'Passion Marine';
const defaultTitle = 'Passion Marine - บริการทางทะเลมืออาชีพ';
const defaultDescription = 'บริการทางทะเลครบวงจร รับรองคุณภาพและความปลอดภัย';
const defaultImage = `${siteUrl}/images/og-image.jpg`;

export interface MetadataProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article';
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
    type = 'website',
    locale = 'th_TH',
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
            card: 'summary_large_image',
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
 */
export function getSiteUrl(): string {
    return siteUrl;
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

