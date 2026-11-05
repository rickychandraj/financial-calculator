import Link from "next/link";

const navItems = [
    { label: "Calculators", href: "#calculators" },
    { label: "Risk Profile Test", href: "#risk-profile" },
    { label: "Online Course", href: "#" },
    { label: "BerUANG Global", href: "https://beruang-global.com" },
];

export const Header = () => {
    return (
        <header className="home-nav">
            <div className="home-container home-nav-inner">
                <Link href="/" className="home-brand">
                    <img src="/home/logo.png" alt="Mama BerUANG logo" width={40} height={36} className="home-brand-logo" />
                    <span className="home-brand-name">Mama BerUANG</span>
                    <span className="home-brand-sub">Calculator</span>
                </Link>
                <nav className="home-nav-links" aria-label="Main menu">
                    {navItems.map((item) => (
                        <Link key={item.label} href={item.href} className="home-nav-link">
                            {item.label}
                        </Link>
                    ))}
                    <a
                        href="https://wa.me/6287777489515"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="home-btn home-btn-nav"
                    >
                        <span className="home-cta-long">Book a Consultation →</span>
                        <span className="home-cta-short">Consult →</span>
                    </a>
                </nav>
            </div>
        </header>
    );
};
