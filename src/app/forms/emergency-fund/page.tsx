"use client";

import React, {useEffect, useState} from "react";
import {LanguageProvider, useLanguage} from "@/lib/i18n";
import {CalcHeader, CalcProgress, CalcField, CalcOptions, CalcSummary, CalcRing, type SummaryRow} from "@/components/calc";


const EmergencyFundForm = () => {
    const {t} = useLanguage();
    const ef = t.emergencyFund;
    const [currentStep, setCurrentStep] = useState(1);
    const [emergencyFund, setEmergencyFund] = useState("");
    const [minEmergencyFund, setMinEmergencyFund] = useState(0);
    const [isResultReady, setIsResultReady] = useState(false);
    const [answers, setAnswers] = useState({
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

    const totalSteps = questions.length;

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
        console.log("Updated answers:", answers);
        setEmergencyFund("");

        const monthlyIncome = answers[1] ? Number(answers[1]) : null;
        const totalDependents = answers[2] ? Number(answers[2]) : null;
        const status = answers[3] ? answers[3] : null;
        const monthlyExpense = answers[4] ? Number(answers[4]) : null;
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
            console.log("Updated emergencyFund:", emergencyFund);
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
        console.log("Updated emergencyFund:", emergencyFund);
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
        setCurrentStep(prev => prev + 1);
    }

    const handleIsNextButtonDisabled = (questionId) => {
        return (
            !(answers[questionId]) ||
            // Sudah menikah, tapi belum jawab pertanyaan tambahannya
            questionId === 3
            && (
                (
                    answers[questionId] === "married"
                    && !(
                        answers[questionId]
                        && answers[100]
                        && answers[101]
                        && answers[102]
                    )
                )
                || (
                    answers[questionId] === "divorced"
                    && !(answers[questionId] && answers[100])
                )
                || (
                    answers[questionId] === "widowed"
                    && !(answers[questionId] && answers[100])
                )
            )
        )
    }

    const calculateResults = () => {
        const monthlyIncome = answers[1] ? Number(answers[1]) : null;
        const totalDependents = answers[2] ? Number(answers[2]) : null;
        const status = answers[3] ? answers[3] : null;
        const monthlyExpense = answers[4] ? Number(answers[4]) : null;
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

    const question = questions.find((q) => q.id === currentStep);
    const isDone = currentStep > totalSteps;
    const status = answers[3];
    const hasKidsField = status === "married" || status === "divorced" || status === "widowed";

    const show = (value, kind, suffix = "") => {
        if (value === null || value === undefined || value === "") return "—";
        if (kind === "currency") return `Rp${formatNumber(value)}`;
        if (kind === "status") return ef.q3.options[value] || "—";
        return `${value} ${suffix}`.trim();
    };
    const rowState = (step): SummaryRow["state"] => (
        isDone ? undefined : step === currentStep ? "current" : step > currentStep ? "later" : undefined
    );
    const summaryRows: SummaryRow[] = [
        {label: ef.q1.short, value: show(answers[1], "currency"), state: rowState(1)},
        {label: ef.q2.short, value: show(answers[2], "number", ef.q2.suffix), state: rowState(2)},
        {label: ef.q3.short, value: show(answers[3], "status"), state: rowState(3)},
        ...(hasKidsField ? [{label: ef.q3.kids.short, value: show(answers[100], "number", ef.q3.kids.suffix), state: rowState(3)}] : []),
        ...(status === "married" ? [
            {label: ef.q3.partnerIncome.short, value: show(answers[101], "currency"), state: rowState(3)},
            {label: ef.q3.partnerDependents.short, value: show(answers[102], "number", ef.q3.partnerDependents.suffix), state: rowState(3)},
        ] : []),
        {label: ef.q4.short, value: show(answers[4], "currency"), state: rowState(4)},
        {label: ef.q5.short, value: show(answers[5], "currency"), state: rowState(5)},
    ];

    const savedNow = Number(answers[5]) || 0;
    const isCovered = answers[5] > minEmergencyFund;

    return (
        <div className="home-page calc-page">
            <CalcHeader backHref={"/"}/>
            <main className="calc-main">
                <CalcProgress title={ef.title} step={isDone ? totalSteps : currentStep} total={totalSteps} done={isDone}/>

                {!isDone && question && (
                    <div className="calc-qgrid">
                        <section className="calc-glass calc-qcard">
                            <span className="home-eyebrow">{t.calc.question} {currentStep}</span>
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
                                    options={question.options}
                                    value={answers[question.id]}
                                    onSelect={(value) => handleInputChange(question.id, value)}
                                />
                            )}

                            {currentStep === 3 && hasKidsField && (
                                <div className="calc-subfield">
                                    <h3>{ef.q3.kids.text}</h3>
                                    <CalcField
                                        compact
                                        label={ef.q3.kids.text}
                                        placeholder={ef.q3.kids.placeholder}
                                        suffix={ef.q3.kids.suffix}
                                        value={answers[100] || ""}
                                        onChange={(e) => handleInputChange(100, e.target.value)}
                                    />
                                </div>
                            )}
                            {currentStep === 3 && status === "married" && (
                                <>
                                    <div className="calc-subfield">
                                        <h3>{ef.q3.partnerIncome.text}</h3>
                                        <CalcField
                                            compact
                                            currency
                                            label={ef.q3.partnerIncome.text}
                                            prefix={"Rp"}
                                            placeholder={ef.q3.partnerIncome.placeholder}
                                            value={answers[101] || ""}
                                            onChange={(e) => handleInputChange(101, e.target.value)}
                                        />
                                    </div>
                                    <div className="calc-subfield">
                                        <h3>{ef.q3.partnerDependents.text}</h3>
                                        <p>{ef.q3.partnerDependents.subtext}</p>
                                        <CalcField
                                            compact
                                            label={ef.q3.partnerDependents.text}
                                            placeholder={ef.q3.partnerDependents.placeholder}
                                            suffix={ef.q3.partnerDependents.suffix}
                                            value={answers[102] || ""}
                                            onChange={(e) => handleInputChange(102, e.target.value)}
                                        />
                                    </div>
                                </>
                            )}

                            <div className="calc-nav">
                                <button
                                    type="button"
                                    className={`calc-btn-glass${currentStep === 1 ? " calc-hidden" : ""}`}
                                    onClick={() => setCurrentStep(prev => Math.max(prev - 1, 1))}
                                >
                                    ← {t.calc.previous}
                                </button>
                                {currentStep < totalSteps && (
                                    <button
                                        type="button"
                                        className="calc-btn"
                                        disabled={handleIsNextButtonDisabled(question.id)}
                                        onClick={() => setCurrentStep(prev => Math.min(prev + 1, totalSteps))}
                                    >
                                        {t.calc.next} →
                                    </button>
                                )}
                                {currentStep === totalSteps && (
                                    <button
                                        type="button"
                                        className="calc-btn"
                                        disabled={!isResultReady}
                                        onClick={() => handleGetResult()}
                                    >
                                        {t.calc.finish}
                                    </button>
                                )}
                            </div>
                        </section>
                        <CalcSummary rows={summaryRows}/>
                    </div>
                )}

                {isDone && (
                    <>
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

                        <div className="calc-result-actions">
                            <button
                                type="button"
                                className="calc-btn-glass"
                                onClick={() => setCurrentStep(prev => Math.max(prev - 1, 1))}
                            >
                                ← {t.calc.backToPrevious}
                            </button>
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
