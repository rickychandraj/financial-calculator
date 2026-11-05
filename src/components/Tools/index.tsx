"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

const checkItems = [
    { key: "emergency", icon: "/home/icon-emergency.svg", href: "/forms/emergency-fund" },
    { key: "retirement", icon: "/home/icon-retirement.svg", href: "/forms/pension-fund" },
    { key: "couple", icon: "/home/icon-couple.svg", href: "/forms/couple-test", popular: true },
] as const;

const dreamItems = [
    { key: "education", icon: "/home/icon-education.svg", href: "/forms/education-fund" },
    { key: "investing", icon: "/home/icon-investing.svg", href: "/forms/investment" },
    { key: "property", icon: "/home/icon-property.svg", href: "/forms/property-down-payment" },
    { key: "umrah", icon: "/home/icon-umrah.svg", href: "/forms/umrah" },
    { key: "holiday", icon: "/home/icon-holiday.svg", href: "/forms/holiday" },
    { key: "purchase", icon: "/home/icon-purchase.svg", href: "/forms/item" },
    { key: "vehicle", icon: "/home/icon-vehicle.svg", href: "/forms/transportation" },
] as const;

const ToolIcon = ({ src }: { src: string }) => (
    <span className="home-tool-icon">
        <img src={src} alt="" width={22} height={22} />
    </span>
);

const Tools = () => {
    const { t } = useLanguage();
    const tt = t.tools;
    return (
        <section id="calculators" className="home-section home-tools-section">
            <div className="home-container home-tools">
                <div className="home-group">
                    <p className="home-eyebrow">{tt.checkEyebrow}</p>
                    <div className="home-grid-3">
                        {checkItems.map((item) => {
                            const [title, description] = tt.check[item.key];
                            return (
                                <Link key={item.href} href={item.href} className="home-card home-check-card">
                                    <ToolIcon src={item.icon} />
                                    <span className="home-check-title">
                                        {title}
                                        {"popular" in item && <span className="home-badge">{tt.popular}</span>}
                                    </span>
                                    <span className="home-check-desc">{description}</span>
                                    <span className="home-start">{tt.start} <span aria-hidden="true">→</span></span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <div className="home-group">
                    <p className="home-eyebrow">{tt.dreamEyebrow}</p>
                    <div className="home-grid-4">
                        {dreamItems.map((item) => {
                            const [title, description] = tt.dream[item.key];
                            return (
                                <Link key={item.href} href={item.href} className="home-card home-dream-card">
                                    <ToolIcon src={item.icon} />
                                    <span className="home-dream-bottom">
                                        <span className="home-dream-text">
                                            <b>{title}</b>
                                            <span>{description}</span>
                                        </span>
                                        <span className="home-dream-arrow" aria-hidden="true">→</span>
                                    </span>
                                </Link>
                            );
                        })}
                        <div className="home-soon-card">
                            <p className="home-eyebrow">{tt.comingSoon}</p>
                            <ul>
                                {tt.soon.map((label) => <li key={label}>{label}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tools;
