"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { DEFAULT_LANG, dictionaries, type Dictionary, type Lang } from "./dictionary";
import { LANG_PENDING_ATTR, STORAGE_KEY } from "./boot";

type LanguageContextValue = { lang: Lang; t: Dictionary; setLang: (lang: Lang) => void };

const LanguageContext = createContext<LanguageContextValue | null>(null);

/** Indonesian by default; a visitor's choice is remembered in their browser. */
export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);
    const [restored, setRestored] = useState(false);

    useEffect(() => {
        try {
            const saved = window.localStorage.getItem(STORAGE_KEY);
            if (saved === "id" || saved === "en") setLangState(saved);
        } catch {
            // Storage unavailable (private mode etc.) — stay on the default.
        }
        setRestored(true);
    }, []);

    useEffect(() => {
        document.documentElement.lang = lang;
        // Reveal the page only after the saved language has been rendered.
        if (restored) document.documentElement.removeAttribute(LANG_PENDING_ATTR);
    }, [lang, restored]);

    const setLang = useCallback((next: Lang) => {
        setLangState(next);
        try {
            window.localStorage.setItem(STORAGE_KEY, next);
        } catch {
            // Ignore — the choice just won't persist.
        }
    }, []);

    return (
        <LanguageContext.Provider value={{ lang, t: dictionaries[lang], setLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
    return ctx;
};
