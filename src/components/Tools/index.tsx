import Link from "next/link";

const checkItems = [
    {
        icon: "/home/icon-emergency.svg",
        title: "Emergency Fund",
        description: "How many months of expenses you should set aside",
        href: "/forms/emergency-fund",
    },
    {
        icon: "/home/icon-retirement.svg",
        title: "Financial Freedom & Retirement",
        description: "Your retirement target and how much to save each month",
        href: "/forms/pension-fund",
    },
    {
        icon: "/home/icon-couple.svg",
        title: "Couple Money Match",
        description: "How aligned the two of you are on managing money",
        href: "/forms/couple-test",
        badge: "Popular",
    },
];

const dreamItems = [
    { icon: "/home/icon-education.svg", title: "Children’s Education", description: "School and university fees", href: "/forms/education-fund" },
    { icon: "/home/icon-investing.svg", title: "Investing", description: "Reach a target amount", href: "/forms/investment" },
    { icon: "/home/icon-property.svg", title: "Property Down Payment", description: "Your first home", href: "/forms/property-down-payment" },
    { icon: "/home/icon-umrah.svg", title: "Umrah", description: "The trip and what to save", href: "/forms/umrah" },
    { icon: "/home/icon-holiday.svg", title: "Holiday", description: "Your next trip", href: "/forms/holiday" },
    { icon: "/home/icon-purchase.svg", title: "Big Purchase", description: "Gadgets, furniture and more", href: "/forms/item" },
    { icon: "/home/icon-vehicle.svg", title: "Vehicle", description: "A car or motorbike", href: "/forms/transportation" },
];

const comingSoon = ["Financial Health Check", "Debt Payoff"];

const ToolIcon = ({ src }: { src: string }) => (
    <span className="home-tool-icon">
        <img src={src} alt="" width={22} height={22} />
    </span>
);

const Tools = () => {
    return (
        <section id="calculators" className="home-section home-tools-section">
            <div className="home-container home-tools">
                <div className="home-group">
                    <p className="home-eyebrow">Check your finances</p>
                    <div className="home-grid-3">
                        {checkItems.map((item) => (
                            <Link key={item.href} href={item.href} className="home-card home-check-card">
                                <ToolIcon src={item.icon} />
                                <span className="home-check-title">
                                    {item.title}
                                    {item.badge && <span className="home-badge">{item.badge}</span>}
                                </span>
                                <span className="home-check-desc">{item.description}</span>
                                <span className="home-start">Start <span aria-hidden="true">→</span></span>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="home-group">
                    <p className="home-eyebrow">Dream goals</p>
                    <div className="home-grid-4">
                        {dreamItems.map((item) => (
                            <Link key={item.href} href={item.href} className="home-card home-dream-card">
                                <ToolIcon src={item.icon} />
                                <span className="home-dream-bottom">
                                    <span className="home-dream-text">
                                        <b>{item.title}</b>
                                        <span>{item.description}</span>
                                    </span>
                                    <span className="home-dream-arrow" aria-hidden="true">→</span>
                                </span>
                            </Link>
                        ))}
                        <div className="home-soon-card">
                            <p className="home-eyebrow">Coming soon</p>
                            <ul>
                                {comingSoon.map((label) => <li key={label}>{label}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tools;
