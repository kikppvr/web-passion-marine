"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className='flex items-center gap-2'>
            <button
                onClick={() => setLanguage("th")}
                className={`rounded-md px-3 py-1 text-sm font-medium transition-colors ${
                    language === "th"
                        ? "bg-blue-500 text-white"
                        : "bg-grey-100 text-grey-700 hover:bg-grey-200"
                }`}>
                ไทย
            </button>
            <button
                onClick={() => setLanguage("en")}
                className={`rounded-md px-3 py-1 text-sm font-medium transition-colors ${
                    language === "en"
                        ? "bg-blue-500 text-white"
                        : "bg-grey-100 text-grey-700 hover:bg-grey-200"
                }`}>
                EN
            </button>
        </div>
    );
}

export function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className='flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-600'>
            <span className='text-lg'>{language === "th" ? "🇹🇭" : "🇺🇸"}</span>
            <span>{language === "th" ? "ไทย" : "English"}</span>
        </button>
    );
}
