import type { Metadata } from "next";
import { generateMetadata as createMetadata, getSiteUrl } from "@/lib/metadata";
import { fetchRawArticleById } from "@/lib/directus";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const resolvedParams = await params;
    const article = await fetchRawArticleById(resolvedParams.id);

    const siteUrl = getSiteUrl();

    if (!article) {
        return createMetadata();
    }

    const enTr = article.translations.find(t => t.languages_code === "en") ?? article.translations[0];
    const title = enTr?.title ?? undefined;
    const description = enTr?.description ?? undefined;
    const image = article.cover_image
        ? `${process.env.NEXT_PUBLIC_CMS_URL}/assets/${article.cover_image}`
        : undefined;

    return createMetadata({
        title,
        description,
        image,
        url: `${siteUrl}/news/${resolvedParams.id}`,
        type: "article",
    });
}

export default function NewsDetailLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
