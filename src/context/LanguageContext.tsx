import { createContext, useContext, useState, useMemo } from "react"
import type { ReactNode } from "react"
import { translations } from "../i18n/translations"
import type { Translations, Language } from "../i18n/translations"

interface LanguageContextType {
    language: Language
    toggleLanguage: () => void
    t: Translations
}

const LanguageContext = createContext<LanguageContextType>({
    language: "en",
    toggleLanguage: () => { },
    t: translations.en,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("en")

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "en" ? "ko" : "en"))
    }

    const t = useMemo(() => translations[language], [language])

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    return useContext(LanguageContext)
}
