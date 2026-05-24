import type { Metadata } from "next";
import { generateMetadata as createMetadata, getSiteUrl } from "@/lib/metadata";
import { fetchRawPortfolios, pickTranslation } from "@/lib/directus";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const allPortfolios = await fetchRawPortfolios();
    const portfolioItem = allPortfolios?.find(p => String(p.id) === resolvedParams.id);

    const siteUrl = getSiteUrl();

    if (!portfolioItem) {
        return createMetadata();
    }

    const tr = pickTranslation(portfolioItem.translations, "en");
    const imageUuid = portfolioItem.main_image ?? portfolioItem.cover_image;
    const image = imageUuid
        ? `${process.env.NEXT_PUBLIC_CMS_URL}/assets/${imageUuid}`
        : undefined;

    return createMetadata({
        title: tr?.title ?? undefined,
        description: tr?.description ?? undefined,
        image,
        url: `${siteUrl}/portfolio/${resolvedParams.id}`,
        type: "website",
    });
}

export default function PortfolioDetailLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
