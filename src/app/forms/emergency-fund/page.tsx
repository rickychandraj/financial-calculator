"use client";

import React, {useEffect, useRef, useState} from "react";
import {LanguageProvider, useLanguage} from "@/lib/i18n";
import {CalcHeader, CalcProgress, CalcField, CalcOptions, CalcRing} from "@/components/calc";
import {CalcBiodata, EMPTY_BIODATA} from "@/components/calc/biodata";
import {emergencyAnswers, leadPayload, statsPayload, submit, type Biodata} from "@/lib/calc/submission";

type CalcQuestion = {
    id: number;
    text: string;
    subtext?: string;
    type: string;
    suffix?: string;
    placeholder?: string;
    prefix?: string;
    options?: { value: string; display: string }[];
};

const EmergencyFundForm = () => {
    const {t, lang} = useLanguage();
    const ef = t.emergencyFund;
    const [stepIndex, setStepIndex] = useState(0);
    // Biodata is asked once, after the last question and before the result.
    const [biodata, setBiodata] = useState<Biodata>(EMPTY_BIODATA);
    const [biodataDone, setBiodataDone] = useState(false);
    const lastStats = useRef("");
    const resultRef = useRef<HTMLDivElement | null>(null);
    const [pdfBusy, setPdfBusy] = useState(false);
    const [pdfError, setPdfError] = useState(false);
    const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [emergencyFund, setEmergencyFund] = useState("");
    const [minEmergencyFund, setMinEmergencyFund] = useState(0);
    const [isResultReady, setIsResultReady] = useState(false);
    const [answers, setAnswers] = useState<Record<number, any>>({
        1: null, // total income
        2: null, // dependents
        3: null, // status
        4: null, // total expense
        5: null, // current emergency fund collected
        100: null, // total children
        101: null, // total income of partner
        102: null, // total dependents of partner
    });

    const questions = [
        {
            id: 1,
            text: ef.q1.text,
            subtext: ef.q1.subtext,
            type: "currency",
            suffix: ef.q1.suffix,
            placeholder: ef.q1.placeholder,
            prefix: "Rp"
        },
        {
            id: 2,
            text: ef.q2.text,
            subtext: ef.q2.subtext,
            type: "number",
            suffix: ef.q2.suffix,
            placeholder: ef.q2.placeholder,
        },
        {
            id: 3,
            text: ef.q3.text,
            type: "select",
            options: [
                {value: "single", display: ef.q3.options.single},
                {value: "married", display: ef.q3.options.married},
                {value: "divorced", display: ef.q3.options.divorced},
                {value: "widowed", display: ef.q3.options.widowed},
            ]
        },
        {
            id: 4,
            text: ef.q4.text,
            subtext: ef.q4.subtext,
            type: "currency",
            placeholder: ef.q4.placeholder,
            prefix: "Rp"
        },
        {
            id: 5,
            text: ef.q5.text,
            subtext: ef.q5.subtext,
            type: "currency",
            placeholder: ef.q5.placeholder,
            prefix: "Rp",
        },
    ];

    // Follow-up questions for status 3, each shown on its own page.
    const kidsQuestion = {
        id: 100,
        text: ef.q3.kids.text,
        type: "number",
        suffix: ef.q3.kids.suffix,
        placeholder: ef.q3.kids.placeholder,
    };
    const partnerIncomeQuestion = {
        id: 101,
        text: ef.q3.partnerIncome.text,
        type: "currency",
        placeholder: ef.q3.partnerIncome.placeholder,
        prefix: "Rp",
    };
    const partnerDependentsQuestion = {
        id: 102,
        text: ef.q3.partnerDependents.text,
        subtext: ef.q3.partnerDependents.subtext,
        type: "number",
        suffix: ef.q3.partnerDependents.suffix,
        placeholder: ef.q3.partnerDependents.placeholder,
    };

    const formatNumber = (num) => {
        // Remove any non-digit characters except decimal point
        const cleanNum = num.toString().replace(/[^\d.]/g, '');

        // Split into integer and decimal parts
        const [integerPart, decimalPart] = cleanNum.split('.');

        // Add thousand separators to integer part
        const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        // Return formatted number with decimal part if it exists
        return decimalPart !== undefined
            ? `${formattedInteger}.${decimalPart}`
            : formattedInteger;
    };

    useEffect(() => {
        setEmergencyFund("");

        const monthlyIncome: any = answers[1] ? Number(answers[1]) : null;
        const totalDependents = answers[2] ? Number(answers[2]) : null;
        const status = answers[3] ? answers[3] : null;
        const monthlyExpense: any = answers[4] ? Number(answers[4]) : null;
        const currentEmergencyFund = answers[5] ? Number(answers[5]) : null;

        const isSandwichGeneration = totalDependents ? Number(totalDependents) > 0 : null;

        const totalKids = answers[100] ? Number(answers[100]) : 0;
        const totalPartnerIncome = answers[101] ? Number(answers[101]) : 0;
        const totalPartnerDependents = answers[102] ? Number(answers[102]) : 0;

        const isPartnerSandwichGeneration = totalPartnerDependents && (totalPartnerDependents > 0);
        const isHavingKids = totalKids && (totalKids > 0);

        const totalMonthlyIncome = monthlyIncome + totalPartnerIncome;

        if (
            monthlyIncome === null
            || totalDependents === null
            || status === null
            || monthlyExpense === null
            || currentEmergencyFund === null
        ) {
            return;
        }

        if (status === "single") {
            if (isSandwichGeneration) {
                // Single, sandwich generation
                // setEmergencyFund(`Rp${formatNumber(monthlyExpense * 6)} - Rp${formatNumber(monthlyExpense * 12)}`)
                setEmergencyFund(`Rp${formatNumber((Number(answers[1]) + Number(answers[101])) * 3)} - Rp${formatNumber((Number(answers[1]) + Number(answers[101])) * 6)}`)
                setMinEmergencyFund((Number(answers[1]) + Number(answers[101])) * 3)
            } else {
                // Single, non-sandwich generation
                // setEmergencyFund(`Rp${formatNumber(monthlyExpense * 3)} - Rp${formatNumber(monthlyExpense * 6)}`)
                setEmergencyFund(`Rp${formatNumber(monthlyExpense * 3)} - Rp${formatNumber((Number(answers[1]) + Number(answers[101])) * 3)}`)
                setMinEmergencyFund(monthlyExpense * 3)
            }
        }

        if (status === "married") {
            if (isHavingKids) {
                // Nikah, sudah punya anak, sandwich generation (9x gaji bulanan - 12x gaji bulanan)
                if (isSandwichGeneration || isPartnerSandwichGeneration) {
                    // setEmergencyFund(`Rp${formatNumber(monthlyExpense * 18)} - Rp${formatNumber(monthlyExpense * 36)}`);
                    setEmergencyFund(`Rp${formatNumber((Number(answers[1]) + Number(answers[101])) * 9)} - Rp${formatNumber((Number(answers[1]) + Number(answers[101])) * 12)}`);
                    setMinEmergencyFund((Number(answers[1]) + Number(answers[101])) * 9)
                }
                // Nikah, sudah punya anak, non-sandwich generation (6x gaji bulanan - 9x gaji bulanan)
                else {
                    // setEmergencyFund(`Rp${formatNumber(monthlyExpense * 9)} - Rp${formatNumber(monthlyExpense * 12)}`);
                    setEmergencyFund(`Rp${formatNumber((Number(answers[1]) + Number(answers[101])) * 6)} - Rp${formatNumber((Number(answers[1]) + Number(answers[101])) * 9)}`);
                    setMinEmergencyFund((Number(answers[1]) + Number(answers[101])) * 6)
                }
            } else {
                // Nikah, belum punya anak, sandwich generation (6x pengeluaran bulanan - 9x gaji bulanan)
                if (isSandwichGeneration || isPartnerSandwichGeneration) {
                    setEmergencyFund(`Rp${formatNumber(monthlyExpense * 6)} - Rp${formatNumber((Number(answers[1]) + Number(answers[101])) * 9)}`);
                    // setEmergencyFund(`Rp${formatNumber(monthlyExpense * 12)} - Rp${formatNumber(monthlyExpense * 24)}`);
                    setMinEmergencyFund(monthlyExpense * 6)
                }
                // Nikah, belum punya anak, non-sandwich generation (6x pengeluaran bulanan - 6x gaji bulanan)
                else {
                    // setEmergencyFund(`Rp${formatNumber(monthlyExpense * 6)} - Rp${formatNumber(monthlyExpense * 9)}`);
                    setEmergencyFund(`Rp${formatNumber(monthlyExpense * 6)} - Rp${formatNumber((Number(answers[1]) + Number(answers[101])) * 6)}`);
                    setMinEmergencyFund(monthlyExpense * 6)
                }
            }
        }

        setIsResultReady(true);
    }, [answers, emergencyFund]);

    const handleInputChange = (questionId, value) => {
        // Remove existing separators and validate input
        const numericValue = value.replace(/,/g, "");

        // Check if it"s a valid number
        if (numericValue === "" || /^\d*\.?\d*$/.test(numericValue)) {
            setAnswers(prev => ({
                ...prev,
                [questionId]: numericValue,
            }));
        } else {
            setAnswers(prev => ({
                ...prev,
                [questionId]: value,
            }));
        }

        if (questionId === 3 && value === "single") {
            setAnswers(prev => ({
                ...prev,
                [100]: null,
            }));
            setAnswers(prev => ({
                ...prev,
                [101]: null,
            }));
            setAnswers(prev => ({
                ...prev,
                [102]: null,
            }));
        }

        if (questionId === 3 && (value === "divorced" || value === "widowed")) {
            setAnswers(prev => ({
                ...prev,
                [101]: null,
            }));
            setAnswers(prev => ({
                ...prev,
                [102]: null,
            }));
        }
    };

    const handleGetResult = () => {
        setStepIndex(totalSteps);
    }

    const calculateResults = () => {
        const monthlyIncome: any = answers[1] ? Number(answers[1]) : null;
        const totalDependents = answers[2] ? Number(answers[2]) : null;
        const status = answers[3] ? answers[3] : null;
        const monthlyExpense: any = answers[4] ? Number(answers[4]) : null;
        const currentEmergencyFund = answers[5] ? Number(answers[5]) : null;

        const isSandwichGeneration = totalDependents ? Number(totalDependents) > 0 : null;

        const totalKids = answers[100] ? Number(answers[100]) : 0;
        const totalPartnerIncome = answers[101] ? Number(answers[101]) : 0;
        const totalPartnerDependents = answers[102] ? Number(answers[102]) : 0;

        const isPartnerSandwichGeneration = totalPartnerDependents && (totalPartnerDependents > 0);
        const isHavingKids = totalKids && (totalKids > 0);

        const totalMonthlyIncome = monthlyIncome + totalPartnerIncome;

        let descriptionTemp = ""
        let additionalDescription = ""

        if (status == "single") {
            if (isSandwichGeneration) {
                // descriptionTemp = "Saran Mama berUANG: Kamu setidaknya harus memiliki dana darurat 3-6x dari pendapatan bulanan kamu"
                descriptionTemp = ef.advice.singleDependents
                if (monthlyIncome < monthlyExpense) {
                    additionalDescription = ef.advice.raiseIncome
                }
            } else {
                // descriptionTemp = "Saran Mama berUANG: Kamu setidaknya harus memiliki dana darurat 3x pengeluaran bulanan - 6x pengeluaran bulanan kamu. "
                descriptionTemp = ef.advice.singleNoDependents
                if (monthlyIncome < monthlyExpense) {
                    additionalDescription = ef.advice.raiseIncome
                }
            }
        } else {
            if (isHavingKids) {
                if (isSandwichGeneration) {
                    descriptionTemp = ef.advice.kidsDependents
                    if (monthlyIncome < monthlyExpense) {
                        additionalDescription = ef.advice.raiseIncome
                    }
                } else {
                    descriptionTemp = ef.advice.kidsNoDependents
                    if (monthlyIncome < monthlyExpense) {
                        additionalDescription = ef.advice.raiseIncome
                    }
                }
            } else {
                if (isSandwichGeneration) {
                    descriptionTemp = ef.advice.noKidsDependents
                    if (monthlyIncome < monthlyExpense) {
                        additionalDescription = ef.advice.raiseIncome
                    }
                } else {
                    descriptionTemp = ef.advice.noKidsNoDependents
                    if (monthlyIncome < monthlyExpense) {
                        additionalDescription = ef.advice.raiseIncome
                    }
                }
            }
        }

        return {
            description: (
                <ul>
                    <li>{descriptionTemp}</li>
                    {additionalDescription && <li>{additionalDescription}</li>}
                </ul>
            )
        }
    }

    const status = answers[3];
    const hasKidsField = status === "married" || status === "divorced" || status === "widowed";
    const steps: CalcQuestion[] = [
        questions[0],
        questions[1],
        questions[2],
        ...(hasKidsField ? [kidsQuestion] : []),
        ...(status === "married" ? [partnerIncomeQuestion, partnerDependentsQuestion] : []),
        questions[3],
        questions[4],
    ];
    const totalSteps = steps.length;
    const atEnd = stepIndex >= totalSteps;
    const showBiodata = atEnd && !biodataDone;
    const isDone = atEnd && biodataDone;
    const question = isDone ? null : steps[stepIndex];
    const isLastStep = stepIndex === totalSteps - 1;
    const canGoNext = !!question && !!answers[question.id];

    const goNext = () => {
        if (!canGoNext) return;
        if (isLastStep) {
            if (isResultReady) handleGetResult();
            return;
        }
        setStepIndex(prev => prev + 1);
    };
    const goPrevious = () => {
        if (advanceTimer.current) clearTimeout(advanceTimer.current);
        setStepIndex(prev => Math.max(prev - 1, 0));
    };
    // Picking an option moves straight on to the next question.
    const handleSelect = (questionId, value) => {
        handleInputChange(questionId, value);
        if (advanceTimer.current) clearTimeout(advanceTimer.current);
        advanceTimer.current = setTimeout(() => setStepIndex(prev => prev + 1), 300);
    };

    const savedNow = Number(answers[5]) || 0;
    const isCovered = answers[5] > minEmergencyFund;

    // Anonymous statistics: sent once per set of answers when the questions are finished.
    useEffect(() => {
        if (!showBiodata) return;
        const payload = statsPayload(emergencyAnswers(answers), lang);
        const key = JSON.stringify(payload.answers);
        if (key === lastStats.current) return;
        lastStats.current = key;
        void submit(payload);
    }, [showBiodata, answers, lang]);

    useEffect(() => {
        if (atEnd) window.scrollTo({top: 0});
    }, [atEnd, biodataDone]);

    // The result is shown even if saving fails or takes too long.
    const handleBiodataSubmit = async (form: Biodata, website: string) => {
        setBiodata(form);
        await submit(leadPayload(emergencyAnswers(answers), lang, form, website));
        setBiodataDone(true);
    };

    const downloadPdf = async () => {
        const el = resultRef.current;
        if (!el || pdfBusy) return;
        setPdfBusy(true);
        setPdfError(false);
        try {
            const [{default: html2canvas}, {jsPDF}] = await Promise.all([import("html2canvas"), import("jspdf")]);
            // Draw the result at desktop width so the PDF looks the same on every device.
            const canvas = await html2canvas(el, {scale: 2, backgroundColor: "#f7f7f9", windowWidth: 1200, logging: false});
            const pdf = new jsPDF({unit: "mm", format: "a4"});
            const pageW = pdf.internal.pageSize.getWidth();
            const pageH = pdf.internal.pageSize.getHeight();
            const margin = 12;
            const top = 32;
            const date = new Date().toLocaleDateString(lang === "id" ? "id-ID" : "en-GB", {day: "numeric", month: "long", year: "numeric"});

            pdf.setFont("helvetica", "bold");
            pdf.setFontSize(15);
            pdf.setTextColor(13, 27, 62);
            pdf.text("Mama BerUANG", margin, 17);
            pdf.setFont("helvetica", "normal");
            pdf.setFontSize(10);
            pdf.setTextColor(91, 97, 120);
            pdf.text(`${ef.title} · ${biodata.name.trim()} · ${date}`, margin, 24);

            let w = pageW - margin * 2;
            let h = (canvas.height * w) / canvas.width;
            const maxH = pageH - top - 16;
            if (h > maxH) {
                w = (w * maxH) / h;
                h = maxH;
            }
            pdf.addImage(canvas.toDataURL("image/jpeg", 0.92), "JPEG", (pageW - w) / 2, top, w, h);
            pdf.setFontSize(9);
            pdf.text("calculator.mamaberuang.com", margin, pageH - 8);
            pdf.save(lang === "id" ? "dana-darurat-mama-beruang.pdf" : "emergency-fund-mama-beruang.pdf");
        } catch {
            setPdfError(true);
        } finally {
            setPdfBusy(false);
        }
    };

    return (
        <div className="home-page calc-page">
            <CalcHeader backHref={"/"}/>
            <main className={`calc-main${isDone ? "" : " is-question"}`}>
                <CalcProgress
                    title={ef.title}
                    step={atEnd ? totalSteps : stepIndex + 1}
                    total={totalSteps}
                    done={atEnd}
                    label={showBiodata ? t.calc.done : undefined}
                />

                {showBiodata && (
                    <CalcBiodata
                        initial={biodata}
                        onSubmit={handleBiodataSubmit}
                        onBack={() => setStepIndex(totalSteps - 1)}
                    />
                )}

                {!atEnd && question && (
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
                            <span className="home-eyebrow">{t.calc.question} {stepIndex + 1}</span>
                            <div className="calc-qhead">
                                <h1 className="home-serif calc-qtitle">{question.text}</h1>
                                {question.subtext && <p className="calc-qsub">{question.subtext}</p>}
                            </div>

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
                                    onSelect={(value) => handleSelect(question.id, value)}
                                />
                            )}

                        </section>
                        <div className="calc-nav">
                            <button
                                type="button"
                                className="calc-btn-glass"
                                disabled={stepIndex === 0}
                                onClick={goPrevious}
                            >
                                ← {t.calc.previous}
                            </button>
                            {question.type !== "select" && (
                                <button
                                    type="button"
                                    className="calc-btn"
                                    disabled={!canGoNext || (isLastStep && !isResultReady)}
                                    onClick={goNext}
                                >
                                    {isLastStep ? t.calc.finish : `${t.calc.next} →`}
                                </button>
                            )}
                        </div>
                    </div>
                )}

                {isDone && (
                    <>
                        <div ref={resultRef} className="calc-result-capture">
                        <section className="calc-hero">
                            <div className="calc-hero-copy">
                                <span className="home-eyebrow">{ef.title}</span>
                                <span className="calc-hero-label">{ef.result.need}</span>
                                <h1 className="home-serif calc-hero-big">{emergencyFund}</h1>
                            </div>
                            {minEmergencyFund > 0 && (
                                <CalcRing
                                    ratio={savedNow / minEmergencyFund}
                                    title={t.calc.alreadySaved}
                                    caption={t.calc.ofMinimum}
                                    note={`Rp${formatNumber(savedNow)} / Rp${formatNumber(minEmergencyFund)}`}
                                />
                            )}
                        </section>

                        <div className="calc-rgrid">
                            <section className="calc-glass calc-section">
                                <h2 className="home-serif">{ef.result.description}</h2>
                                {isResultReady && calculateResults().description}
                            </section>
                            <section className="calc-glass calc-section">
                                <h2 className="home-serif">{ef.result.summary}</h2>
                                <div>
                                    <div className="calc-row">
                                        <span>{ef.result.income}</span>
                                        <strong>{`Rp${formatNumber(Number(answers[1]) + Number(answers[101]))}`}</strong>
                                    </div>
                                    <div className="calc-row">
                                        <span>{ef.result.expense}</span>
                                        <strong>{`Rp${formatNumber(answers[4])}`}</strong>
                                    </div>
                                    <div className="calc-row">
                                        <span>{ef.result.saved}</span>
                                        <strong>{`Rp${formatNumber(answers[5])}`}</strong>
                                    </div>
                                    <div className="calc-row">
                                        <span>{ef.result.gap}</span>
                                        <strong className={isCovered ? "is-ok" : "is-short"}>
                                            {isCovered ? ef.result.covered : `${ef.result.shortPrefix}Rp${formatNumber(minEmergencyFund - answers[5])}${ef.result.shortSuffix}`}
                                        </strong>
                                    </div>
                                </div>
                            </section>
                        </div>
                        </div>

                        <div className="calc-result-actions">
                            <button
                                type="button"
                                className="calc-btn"
                                disabled={pdfBusy}
                                onClick={downloadPdf}
                            >
                                {pdfBusy ? t.calc.creatingPdf : t.calc.downloadPdf}
                            </button>
                            <button
                                type="button"
                                className="calc-btn-glass"
                                onClick={() => setStepIndex(totalSteps - 1)}
                            >
                                ← {t.calc.backToPrevious}
                            </button>
                            {pdfError && <p className="calc-pdf-error" role="alert">{t.calc.pdfFailed}</p>}
                        </div>
                    </>
                )}
            </main>
        </div>
    );
}

const EmergencyFundPage = () => (
    <LanguageProvider>
        <EmergencyFundForm/>
    </LanguageProvider>
);

export default EmergencyFundPage;
