"use client";

import Link from "next/link";
import { PhoneFrame } from "@/components/PhoneFrame";
import { useLanguage } from "@/lib/i18n";

const OPTION_KEYS = ["A", "B", "C", "D"];
const SELECTED = 2;

const RiskQuizScreen = () => {
    const { t } = useLanguage();
    const r = t.risk;
    return (
        <div className="phone-screen rq-screen">
            <div className="rq-head">
                <span className="rq-logo">
                    <img src="/home/risk-logo.png" alt="" width={18.5} height={18} />
                </span>
                <span className="rq-count">1 / 15</span>
            </div>
            <div className="rq-progress"><div /></div>
            <div className="rq-dots">
                {Array.from({ length: 15 }, (_, i) => <span key={i} className={i === 0 ? "is-active" : undefined} />)}
            </div>
            <p className="rq-question">{r.question}</p>
            {r.options.map((text, i) => (
                <div key={OPTION_KEYS[i]} className={`rq-option${i === SELECTED ? " is-selected" : ""}`}>
                    <span className="rq-key">{i === SELECTED ? "✓" : OPTION_KEYS[i]}</span>
                    <span>{text}</span>
                </div>
            ))}
            <div className="rq-nav">
                <span>{r.previous}</span>
                <span>{r.next}</span>
            </div>
        </div>
    );
};

const RiskProfile = () => {
    const { t } = useLanguage();
    const r = t.risk;
    return (
        <section id="risk-profile" className="home-section home-risk-section">
            <div className="home-container home-risk-wrap">
                <p className="home-eyebrow">{r.eyebrow}</p>
                <div className="home-risk">
                    <div className="home-risk-copy">
                        <span className="home-pill">{r.pill}</span>
                        <h2 className="home-serif home-risk-title">
                            {r.titleStart}<em>{r.titleEm}</em>
                        </h2>
                        <p className="home-risk-text">{r.text}</p>
                        <Link href="#" className="home-btn home-btn-lg">{r.cta}</Link>
                    </div>
                    <div className="home-risk-visual" aria-hidden="true">
                        <div className="home-risk-phone">
                            <PhoneFrame>
                                <RiskQuizScreen />
                            </PhoneFrame>
                        </div>
                        <div className="home-float-card home-risk-profile-card">
                            <span>{r.profileLabel}</span>
                            <b className="is-accent">{r.profileValue}</b>
                        </div>
                        <div className="home-float-icon home-risk-icon-gauge">
                            <img src="/home/float-3.svg" alt="" width={21} height={18} />
                        </div>
                        <div className="home-float-card home-risk-time-card">
                            <span>{r.timeLabel}</span>
                            <b>{r.timeValue}</b>
                        </div>
                        <div className="home-float-icon home-risk-icon-clock">
                            <img src="/home/float-4.svg" alt="" width={22} height={22} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RiskProfile;
