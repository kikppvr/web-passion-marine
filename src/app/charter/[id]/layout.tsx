import type { Metadata } from "next";
import { generateMetadata as createMetadata, getSiteUrl } from "@/lib/metadata";
import charterDataJson from "@/data/charter-data.json";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const charterItem = charterDataJson.charters.find(
        item => item.id === resolvedParams.id
    );
    
    const siteUrl = getSiteUrl();
    
    if (!charterItem) {
        return createMetadata();
    }

    const image = charterItem.mainImage 
        ? `${siteUrl}${charterItem.mainImage}` 
        : undefined;

    return createMetadata({
        title: charterItem.title,
        description: charterItem.description,
        image,
        url: `${siteUrl}/charter/${resolvedParams.id}`,
        type: 'website',
    });
}

export default function CharterDetailLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

