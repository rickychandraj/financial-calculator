import Link from "next/link";

const columns = [
    {
        title: "Free tools",
        links: [
            { label: "Financial Calculator", href: "#calculators" },
            { label: "Risk Profile Test", href: "#risk-profile" },
        ],
    },
    {
        title: "Ecosystem",
        links: [
            { label: "BerUANG Global", href: "https://beruang-global.com" },
            { label: "Mindset Ber-UANG book", href: "#" },
        ],
    },
    {
        title: "Contact",
        links: [
            { label: "WhatsApp +62 877-7748-9515", href: "https://wa.me/6287777489515" },
            { label: "@mamaber.uang", href: "https://www.instagram.com/mamaber.uang" },
        ],
    },
];

export const Footer = () => {
    return (
        <footer className="home-footer">
            <div className="home-container home-footer-grid">
                <div className="home-footer-brand">
                    <b>Mama BerUANG</b>
                    <p className="home-serif">
                        Empowering lives through<br /><em>financial literacy</em>
                    </p>
                    <span>Part of BerUANG Global · PT BerUANG Global Grup Sejahtera</span>
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
            <div className="home-container home-footer-bottom">
                © 2024–2026 BerUANG Global. All rights reserved.
            </div>
        </footer>
    );
};
