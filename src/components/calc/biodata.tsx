"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { validateBiodata, type Biodata, type BiodataErrors } from "@/lib/calc/submission";
import "./calc.css";

export const EMPTY_BIODATA: Biodata = {
    name: "",
    email: "",
    whatsapp: "",
    age: "",
    gender: "",
    occupation: "",
    city: "",
    consent: false,
    marketing_consent: false,
};

type Props = {
    initial: Biodata;
    onSubmit: (biodata: Biodata, website: string) => Promise<void>;
    onBack: () => void;
};

type TextKey = "name" | "email" | "whatsapp" | "age" | "occupation" | "city";

/** Biodata step shown between the last question and the result, laid out like the risk profile test. */
export const CalcBiodata = ({ initial, onSubmit, onBack }: Props) => {
    const { t } = useLanguage();
    const b = t.biodata;
    const [form, setForm] = useState<Biodata>(initial);
    const [errors, setErrors] = useState<BiodataErrors>({});
    const [website, setWebsite] = useState("");
    const [busy, setBusy] = useState(false);

    const set = <K extends keyof Biodata>(key: K, value: Biodata[K]) => {
        setForm((prev) => ({ ...prev, [key]: value }));
        if (errors[key as keyof BiodataErrors]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (busy) return;
        const found = validateBiodata(form);
        setErrors(found);
        const first = Object.keys(found)[0];
        if (first) {
            document.getElementById(`bio-${first}`)?.focus();
            return;
        }
        setBusy(true);
        await onSubmit(form, website);
        setBusy(false);
    };

    const field = (key: TextKey, opts: { type?: string; inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"]; autoComplete: string; full?: boolean }) => (
        <div className={`calc-bio-field${opts.full ? " is-full" : ""}`}>
            <label htmlFor={`bio-${key}`}>
                {b[key]} <span aria-hidden="true">*</span>
            </label>
            <input
                id={`bio-${key}`}
                name={key}
                type={opts.type ?? "text"}
                inputMode={opts.inputMode}
                autoComplete={opts.autoComplete}
                placeholder={b[`${key}Placeholder` as const]}
                value={form[key]}
                maxLength={key === "email" ? 255 : key === "whatsapp" ? 30 : key === "age" ? 3 : 100}
                aria-invalid={!!errors[key]}
                aria-describedby={errors[key] ? `bio-${key}-error` : undefined}
                onChange={(e) => set(key, e.target.value)}
            />
            {errors[key] && <p id={`bio-${key}-error`} className="calc-bio-error">{b.errors[key]}</p>}
        </div>
    );

    return (
        <div className="calc-qgrid">
            <section className="calc-glass calc-qcard calc-bio">
                <p className="calc-bio-purpose">
                    <Lock size={16} aria-hidden="true" />
                    {b.purpose}
                </p>
                <div className="calc-qhead">
                    <h1 className="home-serif calc-qtitle">
                        {b.titleStart}
                        <em>{b.titleEm}</em>
                    </h1>
                    <p className="calc-qsub">{b.text}</p>
                </div>

                <form id="calc-bio-form" className="calc-bio-form" noValidate onSubmit={handleSubmit}>
                    <div className="calc-bio-fields">
                        {field("name", { autoComplete: "name", full: true })}
                        {field("email", { type: "email", inputMode: "email", autoComplete: "email" })}
                        {field("whatsapp", { type: "tel", inputMode: "tel", autoComplete: "tel" })}
                        {field("age", { inputMode: "numeric", autoComplete: "off" })}
                        <div className="calc-bio-field">
                            <label htmlFor="bio-gender">
                                {b.gender} <span aria-hidden="true">*</span>
                            </label>
                            <select
                                id="bio-gender"
                                name="gender"
                                className={form.gender ? undefined : "is-empty"}
                                value={form.gender}
                                aria-invalid={!!errors.gender}
                                aria-describedby={errors.gender ? "bio-gender-error" : undefined}
                                onChange={(e) => set("gender", e.target.value as Biodata["gender"])}
                            >
                                <option value="" disabled>{b.genderPlaceholder}</option>
                                <option value="pria">{b.male}</option>
                                <option value="wanita">{b.female}</option>
                            </select>
                            {errors.gender && <p id="bio-gender-error" className="calc-bio-error">{b.errors.gender}</p>}
                        </div>
                        {field("city", { autoComplete: "address-level2" })}
                        {field("occupation", { autoComplete: "organization-title" })}
                    </div>

                    {/* Honeypot: hidden from people, bots tend to fill it in. */}
                    <div className="calc-bio-hp" aria-hidden="true">
                        <label htmlFor="bio-website">Website</label>
                        <input id="bio-website" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
                    </div>

                    <div className="calc-bio-consent">
                        <p className="calc-bio-notice">{b.notice}</p>
                        <label className="calc-bio-check">
                            <input
                                id="bio-consent"
                                type="checkbox"
                                checked={form.consent}
                                aria-invalid={!!errors.consent}
                                aria-describedby={errors.consent ? "bio-consent-error" : undefined}
                                onChange={(e) => set("consent", e.target.checked)}
                            />
                            <span>
                                {b.consentStart}
                                <Link href="/privacy" target="_blank" rel="noopener noreferrer">{b.consentLink}</Link>
                                {b.consentEnd} <span aria-hidden="true">*</span>
                            </span>
                        </label>
                        {errors.consent && <p id="bio-consent-error" className="calc-bio-error">{b.errors.consent}</p>}
                        <label className="calc-bio-check">
                            <input
                                type="checkbox"
                                checked={form.marketing_consent}
                                onChange={(e) => set("marketing_consent", e.target.checked)}
                            />
                            <span>
                                {b.marketing} <em className="calc-bio-optional">({b.optional})</em>
                            </span>
                        </label>
                    </div>
                </form>
            </section>
            <div className="calc-nav">
                <button type="button" className="calc-btn-glass" disabled={busy} onClick={onBack}>
                    ← {t.calc.previous}
                </button>
                <button type="submit" form="calc-bio-form" className="calc-btn" disabled={busy}>
                    {busy ? b.submitting : b.submit}
                    {!busy && <ArrowRight size={18} aria-hidden="true" />}
                </button>
            </div>
        </div>
    );
};
