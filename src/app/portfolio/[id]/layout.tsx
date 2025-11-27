import type { Metadata } from "next";
import { generateMetadata as createMetadata, getSiteUrl } from "@/lib/metadata";
import portfolioDetailDataJson from "@/data/portfolio-detail-data.json";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const portfolioItem = portfolioDetailDataJson.portfolioDetails.find(
        item => item.id === resolvedParams.id
    );
    
    const siteUrl = getSiteUrl();
    
    if (!portfolioItem) {
        return createMetadata();
    }

    const image = portfolioItem.mainImage 
        ? `${siteUrl}${portfolioItem.mainImage}` 
        : undefined;

    return createMetadata({
        title: portfolioItem.title,
        description: portfolioItem.description,
        image,
        url: `${siteUrl}/portfolio/${resolvedParams.id}`,
        type: 'website',
    });
}

export default function PortfolioDetailLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

