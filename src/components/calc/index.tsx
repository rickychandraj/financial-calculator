"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n/dictionary";
import "./calc.css";

const LANGS: Lang[] = ["en", "id"];

/** Calculator top bar: brand on the left; back link and EN/ID switch on the right. */
export const CalcHeader = ({ backHref = "/" }: { backHref?: string }) => {
    const { lang, t, setLang } = useLanguage();
    return (
        <header className="home-nav">
            <div className="home-container home-nav-inner">
                <Link href="/" className="home-brand">
                    <img src="/home/logo.png" alt="Mama BerUANG logo" width={40} height={36} className="home-brand-logo" />
                    <span className="home-brand-name">Mama BerUANG</span>
                    <span className="home-brand-sub">{t.nav.brandSub}</span>
                </Link>
                <div className="home-nav-right">
                    <Link href={backHref} className="calc-back">
                        <span aria-hidden="true">←</span>
                        <span className="calc-back-label">{t.calc.back}</span>
                    </Link>
                    <div className="home-lang" role="group" aria-label={t.nav.language}>
                        {LANGS.map((code) => (
                            <button
                                key={code}
                                type="button"
                                aria-pressed={lang === code}
                                className={`home-lang-btn${lang === code ? " is-active" : ""}`}
                                onClick={() => setLang(code)}
                            >
                                {code.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

export const CalcProgress = ({ title, step, total, done = false }: { title: string; step: number; total: number; done?: boolean }) => {
    const { t } = useLanguage();
    const pct = done ? 100 : Math.round(((step - 1) / total) * 100);
    return (
        <div className="calc-progress">
            <div className="calc-progress-row">
                <span>
                    <strong>{title}</strong> · {t.calc.question} {Math.min(step, total)} {t.calc.of} {total}
                </span>
                <span>{pct}%</span>
            </div>
            <div className="calc-progress-track">
                <div className="calc-progress-fill" style={{ width: `${Math.max(pct, 1.5)}%` }} />
            </div>
        </div>
    );
};

const formatNumber = (num: string | number) => {
    const cleanNum = num.toString().replace(/[^\d.]/g, "");
    const [integerPart, decimalPart] = cleanNum.split(".");
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return decimalPart !== undefined ? `${formattedInteger}.${decimalPart}` : formattedInteger;
};

type FieldProps = {
    prefix?: string;
    suffix?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    currency?: boolean;
    compact?: boolean;
    label?: string;
};

/** Number / currency input. Same behaviour as the old inputs: digits only, thousands separated with commas. */
export const CalcField = ({ prefix, suffix, placeholder, value, onChange, currency = false, compact = false, label }: FieldProps) => (
    <label className={`calc-field${compact ? " is-compact" : ""}`}>
        {prefix && <span className="calc-field-pre">{prefix}</span>}
        <input
            type="text"
            inputMode="numeric"
            aria-label={label}
            placeholder={placeholder}
            value={currency ? (value ? formatNumber(value) : "") : value}
            onChange={onChange}
            onKeyPress={(e) => {
                if (!/\d/.test(e.key)) e.preventDefault();
            }}
            onKeyDown={(e) => {
                if (e.key === "ArrowUp" || e.key === "ArrowDown") e.preventDefault();
            }}
        />
        {suffix && <span className="calc-field-suf">{suffix}</span>}
    </label>
);

export const CalcOptions = ({
    label,
    options,
    value,
    onSelect,
}: {
    label: string;
    options: { value: string; display: string }[];
    value: string | null;
    onSelect: (value: string) => void;
}) => (
    <div className="calc-options" role="radiogroup" aria-label={label}>
        {options.map((option, i) => {
            const on = value === option.value;
            return (
                <button
                    key={option.value}
                    type="button"
                    role="radio"
                    aria-checked={on}
                    className={`calc-opt${on ? " is-on" : ""}`}
                    onClick={() => onSelect(option.value)}
                >
                    <b>{on ? "✓" : "ABCDEFG"[i]}</b>
                    <span>{option.display}</span>
                </button>
            );
        })}
    </div>
);

export type SummaryRow = { label: string; value: string; state?: "current" | "later" };

export const CalcSummary = ({ rows }: { rows: SummaryRow[] }) => {
    const { t } = useLanguage();
    return (
        <aside className="calc-glass calc-summary">
            <span className="home-eyebrow">{t.calc.yourAnswers}</span>
            {rows.map((row) => (
                <div key={row.label} className={`calc-sumrow${row.state ? ` is-${row.state}` : ""}`}>
                    <span>{row.label}</span>
                    <b>{row.value}</b>
                </div>
            ))}
        </aside>
    );
};

/** Progress ring: share of a target that is already saved. */
export const CalcRing = ({ ratio, title, caption, note }: { ratio: number; title: string; caption: string; note: string }) => {
    const r = 78;
    const c = 2 * Math.PI * r;
    const f = Math.max(0, Math.min(1, ratio));
    const pct = Math.round(f * 100);
    return (
        <div className="calc-glass calc-ring">
            <span className="home-eyebrow">{title}</span>
            <svg viewBox="0 0 200 200" width="180" height="180" role="img" aria-label={`${pct}% ${caption}`}>
                <circle cx="100" cy="100" r={r} fill="none" stroke="#F3D7E2" strokeWidth="18" />
                <circle
                    cx="100" cy="100" r={r} fill="none" stroke="#A51246" strokeWidth="18" strokeLinecap="round"
                    strokeDasharray={`${(c * f).toFixed(1)} ${c.toFixed(1)}`} transform="rotate(-90 100 100)"
                />
                <text x="100" y="104" textAnchor="middle" fontFamily="Times New Roman, Tinos, serif" fontSize="44" fill="#0D1B3E">{pct}%</text>
                <text x="100" y="128" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#5B6178">{caption}</text>
            </svg>
            <span className="calc-ring-note">{note}</span>
        </div>
    );
};
