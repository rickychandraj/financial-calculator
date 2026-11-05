import Link from "next/link";
import { PhoneFrame } from "@/components/PhoneFrame";

const EmergencyFundScreen = () => (
    <div className="phone-screen phone-screen-light">
        <div className="ef-top">
            <div className="ef-top-row">
                <span className="ef-round">←</span>
                <span className="ef-title">Emergency Fund</span>
                <span className="ef-done">Done</span>
            </div>
            <span className="ef-need">You need</span>
            <span className="ef-amount">IDR 30–60<small>M</small></span>
            <span className="ef-note">3–6× your monthly income</span>
        </div>
        <div className="ef-spacer" />
        <div className="ef-table">
            {[
                ["Monthly income", "IDR 10,000,000"],
                ["Minimum (3×)", "IDR 30,000,000"],
                ["Ideal (6×)", "IDR 60,000,000"],
            ].map(([label, value]) => (
                <div key={label} className="ef-table-row">
                    <span>{label}</span>
                    <b>{value}</b>
                </div>
            ))}
        </div>
        <div className="ef-steps">
            <b>Next steps</b>
            {["Keep it in a separate, easy-to-access account", "Top it up before you start investing"].map((step) => (
                <div key={step} className="ef-step">
                    <span className="ef-check">✓</span>
                    <span>{step}</span>
                </div>
            ))}
        </div>
        <div className="ef-actions">
            <span className="ef-btn-light">Recalculate</span>
            <span className="ef-btn-primary">Plan my next goal →</span>
        </div>
        <div className="ef-saved">
            <div className="ef-saved-row">
                <span>Saved so far</span>
                <b>IDR 20M · 67% of minimum</b>
            </div>
            <div className="ef-bar">
                <div className="ef-bar-fill" />
                <div className="ef-bar-mark" />
            </div>
            <div className="ef-saved-row ef-saved-scale">
                <span>0</span>
                <span className="ef-scale-min">Min 30M</span>
                <span>Ideal 60M</span>
            </div>
        </div>
    </div>
);

export const Hero = () => {
    return (
        <section className="home-section home-hero-section">
            <div className="home-container">
                <div className="home-hero">
                    <div className="home-hero-copy">
                        <p className="home-eyebrow">Free financial calculators</p>
                        <h1 className="home-serif home-hero-title">
                            Do the math, <em>then decide</em>
                        </h1>
                        <p className="home-hero-text">
                            Start with your emergency fund, then plan for every goal. Answer a few questions and see the
                            number you need
                        </p>
                        <div className="home-byline">
                            <img src="/home/ayu.png" alt="Ayu Sara Herlia-Hinch" width={30} height={30} />
                            <span>
                                Built by <b>Ayu Sara Herlia-Hinch</b> · SE, MBA, QWP™, CFP®, WMI
                            </span>
                        </div>
                        <Link href="/forms/emergency-fund" className="home-btn home-btn-lg">
                            Start with the Emergency Fund →
                        </Link>
                    </div>
                    <div className="home-hero-visual" aria-hidden="true">
                        <div className="home-hero-phone">
                            <PhoneFrame>
                                <EmergencyFundScreen />
                            </PhoneFrame>
                        </div>
                        <div className="home-float-card home-hero-card">
                            <span>Emergency fund check</span>
                            <b>5 quick questions</b>
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
