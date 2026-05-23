const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL ?? "";
const CMS_TOKEN = process.env.NEXT_PUBLIC_DIRECTUS_TOKEN ?? "";

export async function browserFetch<T>(path: string): Promise<T | null> {
    try {
        const res = await fetch(`${CMS_URL}${path}`, {
            headers: { Authorization: `Bearer ${CMS_TOKEN}` },
        });
        if (!res.ok) {
            console.error(`[Directus] ${res.status} ${path}`);
            return null;
        }
        const json = await res.json();
        return (json.data ?? json) as T;
    } catch (err) {
        console.error(`[Directus] fetch error ${path}:`, err);
        return null;
    }
}

export function getDirectusAssetUrl(uuid: string | null | undefined): string | null {
    if (!uuid?.trim()) return null;
    return `${CMS_URL}/assets/${uuid.trim()}`;
}

export function pickTranslation<T extends { languages_code: string }>(
    list: T[] | undefined,
    language: "th" | "en"
): T | undefined {
    const arr = list ?? [];
    return (
        arr.find(t => t.languages_code === language) ||
        arr.find(t => t.languages_code === "en") ||
        arr[0]
    );
}
