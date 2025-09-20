'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

export type Language = 'th' | 'en'

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>('en')

    // Load language from localStorage on mount
    useEffect(() => {
        // Clear localStorage to reset to default English
        localStorage.removeItem('language')

        // Set default to English
        setLanguageState('en')
        document.body.className = document.body.className.replace(
            'font-th',
            'font-en'
        )
    }, [])

    // Save language to localStorage when it changes
    const setLanguage = (lang: Language) => {
        setLanguageState(lang)
        localStorage.setItem('language', lang)

        // Update document language attribute
        document.documentElement.lang = lang

        // Update body class for font switching
        if (lang === 'th') {
            document.body.className = document.body.className.replace(
                'font-en',
                'font-th'
            )
        } else {
            document.body.className = document.body.className.replace(
                'font-th',
                'font-en'
            )
        }
    }

    const toggleLanguage = () => {
        const newLanguage = language === 'th' ? 'en' : 'th'
        setLanguage(newLanguage)
    }

    return (
        <LanguageContext.Provider
            value={{ language, setLanguage, toggleLanguage }}
        >
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}
