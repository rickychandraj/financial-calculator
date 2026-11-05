"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export const Footer = () => {
    const { t } = useLanguage();
    const f = t.footer;

    const columns = [
        {
            title: f.freeTools,
            links: [
                { label: f.financialCalculator, href: "#calculators" },
                { label: f.riskProfileTest, href: "#risk-profile" },
            ],
        },
        {
            title: f.ecosystem,
            links: [
                { label: "BerUANG Global", href: "https://beruang-global.com" },
                { label: f.book, href: "#" },
            ],
        },
        {
            title: f.contact,
            links: [
                { label: "WhatsApp +62 877-7748-9515", href: "https://wa.me/6287777489515" },
                { label: "@mamaber.uang", href: "https://www.instagram.com/mamaber.uang" },
            ],
        },
    ];

    return (
        <footer className="home-footer">
            <div className="home-container home-footer-grid">
                <div className="home-footer-brand">
                    <b>Mama BerUANG</b>
                    <p className="home-serif">
                        {f.taglineStart}<br /><em>{f.taglineEm}</em>
                    </p>
                    <span>{f.partOf}</span>
                </div>
                {columns.map((column) => (
                    <div key={column.title} className="home-footer-col">
                        <p>{column.title}</p>
                        {column.links.map((link) => {
                            const external = link.href.startsWith("http");
                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>
                ))}
            </div>
            <div className="home-container home-footer-bottom">{f.copyright}</div>
        </footer>
    );
};
