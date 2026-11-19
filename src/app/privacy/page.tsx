"use client";

import React from "react";
import {LanguageProvider, useLanguage} from "@/lib/i18n";
import {CalcHeader} from "@/components/calc";
import {PRIVACY_VERSION} from "@/lib/calc/submission";

const PrivacyContent = () => {
    const {t} = useLanguage();
    const p = t.privacy;
    return (
        <div className="home-page calc-page">
            <CalcHeader backHref={"/"}/>
            <main className="calc-main calc-privacy">
                <article className="calc-glass calc-privacy-card">
                    <h1 className="home-serif">{p.title}</h1>
                    <p className="calc-privacy-meta">{p.subtitle} {PRIVACY_VERSION}</p>
                    {p.sections.map(([heading, body]) => (
                        <section key={heading}>
                            <h2>{heading}</h2>
                            <p>{body}</p>
                        </section>
                    ))}
                </article>
            </main>
        </div>
    );
};

const PrivacyPage = () => (
    <LanguageProvider>
        <PrivacyContent/>
    </LanguageProvider>
);

export default PrivacyPage;
