import type { Metadata } from "next";
import { generateMetadata as createMetadata, getSiteUrl } from "@/lib/metadata";
import newsDetailDataJson from "@/data/news-detail-data.json";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const resolvedParams = await params;
    const newsItem = newsDetailDataJson.newsDetails.find(item => item.id === resolvedParams.id);

    const siteUrl = getSiteUrl();

    if (!newsItem) {
        return createMetadata();
    }

    const image = newsItem.mainImage ? `${siteUrl}${newsItem.mainImage}` : undefined;

    return createMetadata({
        title: newsItem.title,
        description: newsItem.description,
        image,
        url: `${siteUrl}/news/${resolvedParams.id}`,
        type: "article",
    });
}

export default function NewsDetailLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
