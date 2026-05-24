import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "./translations";

export { translations } from "./translations";
export type { Language } from "./translations";

export function useTranslation() {
    const { language } = useLanguage();
    return translations[language];
}
