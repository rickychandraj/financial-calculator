"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { CalcField, CalcOptions } from "@/components/calc";
import "./calc.css";

type Question = {
    id: number;
    text: string;
    subtext?: string;
    type: string;
    prefix?: string;
    suffix?: string;
    placeholder?: string;
    error?: string | null;
    options?: { value: string | number; display: string }[];
};

type Props = {
    href: string;
    title: string;
    questions: Question[];
    answers: Record<number, any>;
    currentStep: number;
    totalSteps: number;
    handleInputChange: (questionId: number, value: any) => void;
    handleSetCurrentStep: (update: (prev: number) => number) => void;
    handleGetResult: () => void;
    handleIsNextButtonDisabled: (questionId: number) => boolean;
    isResultReady: boolean;
    /** Extra questions shown under the current one (education fund: school details). */
    extra?: React.ReactNode;
};

const CalcPlainHeader = ({ href, onBack }: { href: string; onBack?: () => void }) => (
    <header className="home-nav">
        <div className="home-container home-nav-inner">
            <Link href="/" className="home-brand">
                <img src="/home/logo.png" alt="Mama BerUANG logo" width={40} height={36} className="home-brand-logo" />
                <span className="home-brand-name">Mama BerUANG</span>
                <span className="home-brand-sub">Kalkulator</span>
            </Link>
            <div className="home-nav-right">
                {onBack ? (
                    <button type="button" className="calc-back" onClick={onBack}>
                        <span aria-hidden="true">←</span>
                        <span className="calc-back-label">Kembali</span>
                    </button>
                ) : (
                    <Link href={href} className="calc-back">
                        <span aria-hidden="true">←</span>
                        <span className="calc-back-label">Kembali</span>
                    </Link>
                )}
            </div>
        </div>
    </header>
);

const PlainProgress = ({ title, step, total }: { title: string; step: number; total: number }) => {
    const pct = Math.round(((step - 1) / total) * 100);
    return (
        <div className="calc-progress">
            <div className="calc-progress-row">
                <span>
                    <strong>{title}</strong> · Pertanyaan {Math.min(step, total)} dari {total}
                </span>
                <span>{pct}%</span>
            </div>
            <div className="calc-progress-track">
                <div className="calc-progress-fill" style={{ width: `${Math.max(pct, 1.5)}%` }} />
            </div>
        </div>
    );
};

/** A notice shown before the first question (e.g. the education fund disclaimer), in the same layout. */
export const CalcNotice = ({
    href,
    title,
    totalSteps,
    heading,
    text,
    buttonLabel,
    onContinue,
}: {
    href: string;
    title: string;
    totalSteps: number;
    heading: string;
    text: string;
    buttonLabel: string;
    onContinue: () => void;
}) => (
    <div className="home-page calc-page">
        <CalcPlainHeader href={href}/>
        <main className="calc-main is-question">
            <PlainProgress title={title} step={1} total={totalSteps}/>
            <div className="calc-qgrid">
                <section className="calc-glass calc-qcard">
                    <div className="calc-qhead">
                        <h1 className="home-serif calc-qtitle">{heading}</h1>
                        <p className="calc-qsub calc-notice-text">{text}</p>
                    </div>
                </section>
                <div className="calc-nav is-end">
                    <button type="button" className="calc-btn" onClick={onContinue}>
                        {buttonLabel}
                    </button>
                </div>
            </div>
        </main>
    </div>
);

/**
 * Question pages in the new calculator design (same layout as Dana Darurat).
 * Drop-in replacement for FormHeader + FormQuestionCards: same props, same questions and behaviour.
 * These calculators are Indonesian only, so the header has no language switch.
 */
export const CalcQuestionFlow = ({
    href,
    title,
    questions,
    answers,
    currentStep,
    totalSteps,
    handleInputChange,
    handleSetCurrentStep,
    handleGetResult,
    handleIsNextButtonDisabled,
    isResultReady,
    extra,
}: Props) => {
    const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    useEffect(() => () => {
        if (advanceTimer.current) clearTimeout(advanceTimer.current);
    }, []);

    const question = questions.find((q) => q.id === currentStep);
    const isLast = currentStep === totalSteps;

    const goPrevious = () => {
        if (advanceTimer.current) clearTimeout(advanceTimer.current);
        handleSetCurrentStep((prev) => Math.max(prev - 1, 1));
    };
    const goNext = () => {
        if (!question) return;
        if (isLast) {
            if (isResultReady) handleGetResult();
            return;
        }
        if (handleIsNextButtonDisabled(question.id)) return;
        handleSetCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    };
    // Picking an option moves straight on, except on the last question where "Selesai" stays.
    const handleSelect = (value: string | number) => {
        if (!question) return;
        handleInputChange(question.id, value);
        if (isLast) return;
        if (advanceTimer.current) clearTimeout(advanceTimer.current);
        advanceTimer.current = setTimeout(() => handleSetCurrentStep((prev) => Math.min(prev + 1, totalSteps)), 300);
    };

    return (
        <div className="home-page calc-page">
            <CalcPlainHeader href={href}/>

            <main className="calc-main is-question">
                <PlainProgress title={title} step={currentStep} total={totalSteps}/>

                {question && (
                    <div className="calc-qgrid">
                        <section
                            key={question.id}
                            className="calc-glass calc-qcard"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    goNext();
                                }
                            }}
                        >
                            <span className="home-eyebrow">Pertanyaan {currentStep}</span>
                            <div className="calc-qhead">
                                <h1 className="home-serif calc-qtitle">{question.text}</h1>
                                {question.subtext && <p className="calc-qsub">{question.subtext}</p>}
                            </div>

                            {question.type === "text" && (
                                <label className="calc-field is-text">
                                    <input
                                        type="text"
                                        aria-label={question.text}
                                        placeholder={question.placeholder}
                                        value={answers[question.id] || ""}
                                        onChange={(e) => handleInputChange(question.id, e.target.value)}
                                    />
                                </label>
                            )}
                            {question.type === "currency" && (
                                <CalcField
                                    currency
                                    label={question.text}
                                    prefix={question.prefix}
                                    suffix={question.suffix}
                                    placeholder={question.placeholder}
                                    value={answers[question.id] || ""}
                                    onChange={(e) => handleInputChange(question.id, e.target.value)}
                                />
                            )}
                            {question.type === "number" && (
                                <CalcField
                                    label={question.text}
                                    prefix={question.prefix}
                                    suffix={question.suffix}
                                    placeholder={question.placeholder}
                                    value={answers[question.id] || ""}
                                    onChange={(e) => handleInputChange(question.id, e.target.value)}
                                />
                            )}
                            {question.type === "select" && (
                                <CalcOptions
                                    label={question.text}
                                    options={question.options ?? []}
                                    value={answers[question.id]}
                                    onSelect={handleSelect}
                                />
                            )}
                            {question.error && <p role="alert" className="calc-qerror">{question.error}</p>}
                        </section>

                        {extra && <section className="calc-glass calc-qcard calc-qextra">{extra}</section>}

                        <div className="calc-nav">
                            <button type="button" className="calc-btn-glass" disabled={currentStep === 1} onClick={goPrevious}>
                                ← Sebelumnya
                            </button>
                            {(question.type !== "select" || isLast) && (
                                <button
                                    type="button"
                                    className="calc-btn"
                                    disabled={isLast ? !isResultReady : handleIsNextButtonDisabled(question.id)}
                                    onClick={goNext}
                                >
                                    {isLast ? "Selesai" : "Selanjutnya →"}
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default CalcQuestionFlow;

/**
 * Result pages of the other calculators in the new design. The result content itself is unchanged;
 * calc.css restyles it under .calc-legacy-result (light cards, rows, notes).
 */
export const CalcResultShell = ({
    href,
    title,
    totalSteps,
    onBack,
    children,
}: {
    href: string;
    title: string;
    totalSteps?: number | null;
    /** Header back button runs this instead of linking to href (couple test match view). */
    onBack?: () => void;
    children: React.ReactNode;
}) => (
    <div className="home-page calc-page">
        <CalcPlainHeader href={href} onBack={onBack}/>
        <main className="calc-main calc-legacy-result">
            {totalSteps ? (
                <div className="calc-progress">
                    <div className="calc-progress-row">
                        <span>
                            <strong>{title}</strong> · Pertanyaan {totalSteps} dari {totalSteps}
                        </span>
                        <span>100%</span>
                    </div>
                    <div className="calc-progress-track">
                        <div className="calc-progress-fill" style={{ width: "100%" }} />
                    </div>
                </div>
            ) : (
                <div className="calc-progress">
                    <div className="calc-progress-row">
                        <span><strong>{title}</strong></span>
                    </div>
                </div>
            )}
            {children}
        </main>
    </div>
);
