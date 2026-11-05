"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n/dictionary";

const LANGS: Lang[] = ["en", "id"];

export const Header = () => {
    const { lang, t, setLang } = useLanguage();

    const navItems = [
        { label: t.nav.whyItMatters, href: "#" },
        { label: t.nav.calculators, href: "#calculators" },
        { label: t.nav.onlineCourse, href: "#" },
        { label: t.nav.beruangGlobal, href: "https://beruang-global.com", external: true },
    ];

    return (
        <header className="home-nav">
            <div className="home-container home-nav-inner">
                <Link href="/" className="home-brand">
                    <img src="/home/logo.png" alt="Mama BerUANG logo" width={40} height={36} className="home-brand-logo" />
                    <span className="home-brand-name">Mama BerUANG</span>
                    <span className="home-brand-sub">{t.nav.brandSub}</span>
                </Link>
                <div className="home-nav-right">
                    <nav className="home-nav-links" aria-label={t.nav.mainMenu}>
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="home-nav-link"
                                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="home-lang" role="group" aria-label={t.nav.language}>
                        {LANGS.map((code) => (
                            <button
                                key={code}
                                type="button"
                                aria-pressed={lang === code}
                                className={`home-lang-btn${lang === code ? " is-active" : ""}`}
                                onClick={() => setLang(code)}
                            >
                                {code.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};
