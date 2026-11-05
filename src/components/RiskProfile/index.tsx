import Link from "next/link";
import { PhoneFrame } from "@/components/PhoneFrame";

const options = [
    { key: "A", text: "IDR 98M → I’d panic right away" },
    { key: "B", text: "IDR 90M → I’d start to feel uneasy" },
    { key: "C", text: "IDR 80M → I can still hold on", selected: true },
    { key: "D", text: "IDR 60M → I stay calm for the long run" },
];

const RiskQuizScreen = () => (
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
        <p className="rq-question">If your total investment is IDR 100 million and in 6 months it drops to:</p>
        {options.map((option) => (
            <div key={option.key} className={`rq-option${option.selected ? " is-selected" : ""}`}>
                <span className="rq-key">{option.selected ? "✓" : option.key}</span>
                <span>{option.text}</span>
            </div>
        ))}
        <div className="rq-nav">
            <span>← Previous</span>
            <span>Next →</span>
        </div>
    </div>
);

const RiskProfile = () => {
    return (
        <section id="risk-profile" className="home-section home-risk-section">
            <div className="home-container home-risk-wrap">
                <p className="home-eyebrow">Ready to invest? Know your risk profile first</p>
                <div className="home-risk">
                    <div className="home-risk-copy">
                        <span className="home-pill">15 questions</span>
                        <h2 className="home-serif home-risk-title">
                            Risk Profile <em>Test</em>
                        </h2>
                        <p className="home-risk-text">
                            Find out how much investment risk you can take, without disrupting your finances or peace of
                            mind, before choosing an instrument.
                        </p>
                        <Link href="#" className="home-btn home-btn-lg">Start the Test →</Link>
                    </div>
                    <div className="home-risk-visual" aria-hidden="true">
                        <div className="home-risk-phone">
                            <PhoneFrame>
                                <RiskQuizScreen />
                            </PhoneFrame>
                        </div>
                        <div className="home-float-card home-risk-profile-card">
                            <span>Your profile</span>
                            <b className="is-accent">Moderate</b>
                        </div>
                        <div className="home-float-icon home-risk-icon-gauge">
                            <img src="/home/float-3.svg" alt="" width={21} height={18} />
                        </div>
                        <div className="home-float-card home-risk-time-card">
                            <span>Estimated time</span>
                            <b>3–5 minutes</b>
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
