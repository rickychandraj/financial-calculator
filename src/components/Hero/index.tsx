"use client";

import Link from "next/link";
import { PhoneFrame } from "@/components/PhoneFrame";
import { useLanguage } from "@/lib/i18n";

const EmergencyFundScreen = () => {
    const { t } = useLanguage();
    const p = t.efPhone;
    return (
        <div className="phone-screen phone-screen-light">
            <div className="ef-top">
                <div className="ef-top-row">
                    <span className="ef-round">←</span>
                    <span className="ef-title">{p.title}</span>
                    <span className="ef-done">{p.done}</span>
                </div>
                <span className="ef-need">{p.need}</span>
                <span className="ef-amount">{p.amount}<small>{p.amountUnit}</small></span>
                <span className="ef-note">{p.note}</span>
            </div>
            <div className="ef-spacer" />
            <div className="ef-table">
                {p.rows.map(([label, value]) => (
                    <div key={label} className="ef-table-row">
                        <span>{label}</span>
                        <b>{value}</b>
                    </div>
                ))}
            </div>
            <div className="ef-steps">
                <b>{p.nextSteps}</b>
                {p.steps.map((step) => (
                    <div key={step} className="ef-step">
                        <span className="ef-check">✓</span>
                        <span>{step}</span>
                    </div>
                ))}
            </div>
            <div className="ef-actions">
                <span className="ef-btn-light">{p.recalculate}</span>
                <span className="ef-btn-primary">{p.planNext}</span>
            </div>
            <div className="ef-saved">
                <div className="ef-saved-row">
                    <span>{p.saved}</span>
                    <b>{p.savedValue}</b>
                </div>
                <div className="ef-bar">
                    <div className="ef-bar-fill" />
                    <div className="ef-bar-mark" />
                </div>
                <div className="ef-saved-row ef-saved-scale">
                    <span>0</span>
                    <span className="ef-scale-min">{p.scaleMin}</span>
                    <span>{p.scaleIdeal}</span>
                </div>
            </div>
        </div>
    );
};

export const Hero = () => {
    const { t } = useLanguage();
    const h = t.hero;
    return (
        <section className="home-section home-hero-section">
            <div className="home-container">
                <div className="home-hero">
                    <div className="home-hero-copy">
                        <p className="home-eyebrow">{h.eyebrow}</p>
                        <h1 className="home-serif home-hero-title">
                            {h.titleStart}<em>{h.titleEm}</em>
                        </h1>
                        <p className="home-hero-text">{h.text}</p>
                        <div className="home-byline">
                            <span className="home-byline-photo">
                                <img src="/home/ayu.png" alt="Ayu Sara Herlia-Hinch" width={58} height={83} />
                            </span>
                            <span>
                                {h.builtBy} <b>Ayu Sara Herlia-Hinch</b> · SE, MBA, QWP™, CFP®, WMI
                            </span>
                        </div>
                        <Link href="/forms/emergency-fund" className="home-btn home-btn-lg">
                            {h.cta}
                        </Link>
                    </div>
                    <div className="home-hero-visual" aria-hidden="true">
                        <div className="home-hero-phone">
                            <PhoneFrame>
                                <EmergencyFundScreen />
                            </PhoneFrame>
                        </div>
                        <div className="home-float-card home-hero-card">
                            <span>{h.floatLabel}</span>
                            <b>{h.floatValue}</b>
                        </div>
                        <div className="home-float-icon home-hero-icon-list">
                            <img src="/home/float-1.svg" alt="" width={21} height={20} />
                        </div>
                        <div className="home-float-icon home-hero-icon-shield">
                            <img src="/home/float-2.svg" alt="" width={21} height={22} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
