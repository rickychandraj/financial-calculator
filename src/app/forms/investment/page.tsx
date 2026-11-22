"use client";

import React, {useEffect, useState} from "react";
import CalcQuestionFlow, { CalcResultShell } from "@/components/calc/question-flow";
import { useLanguage } from "@/lib/i18n";
import { contributionNeeded, formatNumber } from "@/lib/calc/finance";


const InvestmentForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const { lang } = useLanguage();
    const L = (id: string, en: string) => (lang === "en" ? en : id);
    const fmt = (value: number | string) => formatNumber(value, lang);
    const [isResultReady, setIsResultReady] = useState(false);
    const [answers, setAnswers] = useState<Record<number, any>>({
        1: null, // target amount
        2: null, // time period
        3: null, // current savings
        4: null, // saving frequency
        5: null, // saving timing
        6: null, // return rate
    });

    let questions = [
        {
            id: 1,
            text: L("Jumlah uang yang ingin kamu capai", "The amount of money you want to reach"),
            subtext: L("Berapa banyak jumlah uang yang ingin kamu kumpulkan?", "How much money do you want to collect?"),
            type: "currency",
            prefix: "Rp"
        },
        {
            id: 2,
            text: L("Jumlah waktu untuk mengumpulkan uang tersebut", "Time to collect that money"),
            subtext: L("Berapa lama waktu yang kamu inginkan untuk mencapai nominal targetmu?", "How long do you want to take to reach your target amount?"),
            type: "number",
            suffix: L("tahun", "years"),
        },
        {
            id: 3,
            text: L("Uang yang kamu miliki saat ini sebesar", "The money you have now"),
            subtext: L("Jumlah uangmu saat ini yang kamu tabung khusus untuk target keuangan ini", "Money you have already saved just for this financial goal"),
            type: "currency",
            prefix: "Rp",
        },
        {
            id: 4,
            text: L("Kamu akan menabung setiap", "How often will you save?"),
            type: "select",
            options: [
                { value: "yearly", display: L("Tahun", "Year") },
                { value: "monthly", display: L("Bulan", "Month") },
            ],
        },
        {
            id: 5,
            text: L("Kamu akan menambahkan dana pada", "When will you add money?"),
            type: "select",
            options: [
                {
                    value: "begin",
                    display: L(`Awal ${answers[4] == "yearly" ? "tahun" : answers[4] == "monthly" ? "bulan" : ""}`, `At the start of each ${answers[4] == "yearly" ? "year" : answers[4] == "monthly" ? "month" : "period"}`)
                },
                {
                    value: "end",
                    display: L(`Akhir ${answers[4] == "yearly" ? "tahun" : answers[4] == "monthly" ? "bulan" : ""}`, `At the end of each ${answers[4] == "yearly" ? "year" : answers[4] == "monthly" ? "month" : "period"}`)
                },
            ]
        },
        {
            id: 6,
            text: L("Kamu akan investasi di produk yang return-nya?", "What return does the product you will invest in have?"),
            subtext: L("Dengan asumsi kamu akan menaruh uang tabunganmu pada instrumen investasi. Sebagai gambaran: untuk profil risiko konservatif, kamu cocok investasi di reksa dana pasar uang atau obligasi dengan return rata-rata 6% per tahun. Untuk profil risiko moderat, kamu cocok berinvestasi di obligasi atau reksa dana campuran dengan return rata-rata 10% per tahun. Untuk profil risiko agresif, kamu cocok berinvestasi di saham atau reksa dana saham dengan return rata-rata 15% per tahun.", "This assumes you put your savings in an investment product. As a guide: with a conservative risk profile, money market or bond mutual funds suit you, with an average return of 6% a year. With a moderate risk profile, bonds or balanced mutual funds suit you, with an average return of 10% a year. With an aggressive risk profile, stocks or equity mutual funds suit you, with an average return of 15% a year."),
            type: "number",
            suffix: L("% / tahun", "% / year"),
        }
    ];

    const totalSteps = questions.length;

    const handleInputChange = (questionId, value) => {
        // Remove existing separators and validate input
        const numericValue = value.replace(/,/g, "");

        // Check if it's a valid number
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
    };

    const handleGetResult = () => {
        setCurrentStep(prev => prev + 1);
    };

    // Calculate financial results
    const calculateResults = () => {
        const targetAmount = Number(answers[1]);
        const yearsToCollect = Number(answers[2]);
        const initialAmount = Number(answers[3]);
        const frequency = answers[4];
        const timing = answers[5];

        const returnRate = Number(answers[6]) / 100;

        const periodsPerYear = frequency == "monthly" ? 12 : 1;
        const periodicReturn = returnRate / periodsPerYear;

        const totalPeriods = yearsToCollect * periodsPerYear;

        const totalProjectedSavings = initialAmount * Math.pow(1 + returnRate, yearsToCollect)
        const totalAmountNeedToChase = Math.max(targetAmount - totalProjectedSavings, 0)

        const amountToSave = contributionNeeded(
            totalAmountNeedToChase,
            periodicReturn,
            totalPeriods,
            timing == "begin" ? "begin" : "end",
        );

        return {
            totalProjectedSavings,
            targetAmount,
            initialAmount,
            totalAmountNeedToChase,
            amountToSave,
        };
    };

    useEffect(() => {
        const allFieldsFilled = Object.values(answers).every(value => value !== null && value !== "");
        setIsResultReady(allFieldsFilled);
    }, [answers]);

    const handleIsNextButtonDisabled = (questionId) => {
        return !answers[questionId];
    };



    return (
        <div>
            {currentStep <= totalSteps && (
                <CalcQuestionFlow
                    href={"/"}
                    title={L("Perencanaan Investasi", "Investment Planning")}
                    questions={questions}
                    answers={answers}
                    currentStep={currentStep}
                    totalSteps={totalSteps}
                    handleInputChange={handleInputChange}
                    handleSetCurrentStep={setCurrentStep}
                    handleGetResult={handleGetResult}
                    handleIsNextButtonDisabled={handleIsNextButtonDisabled}
                    isResultReady={isResultReady}
                />
            )}

            {currentStep > totalSteps && (
                <CalcResultShell href={"/"} title={L("Perencanaan Investasi", "Investment Planning")} totalSteps={totalSteps}>
                    <div className="p-5">
                        {isResultReady && (() => {
                            const results = calculateResults();
                            return (
                            <div
                                className={`
                                    p-8 rounded-2xl bg-gradient-to-br
                                    transform
                                    text-white relative overflow-hidden
                                    mb-8
                                `}
                                style={{
                                    background: "linear-gradient(135deg, #252E64 50%, #12174F 100%)"
                                }}
                            >
                                <h3 className="text-2xl mb-6">{L("Hasil Perhitungan Simulasi Investasi", "Investment Simulation Result")}</h3>

                                {/* Target Section */}
                                <div className="bg-[#1E2432] rounded-lg p-4 mb-4">
                                    <h4 className="text-2xl mb-4">{L("Ringkasan Target Investasi", "Investment Target Summary")}</h4>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span>{L("Target jumlah dana", "Target amount")}</span>
                                            <span>{`Rp${fmt(answers[1])}`}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>{L("Jangka waktu pengumpulan dana", "Time to collect the money")}</span>
                                            <span>{L(`${answers[2]} tahun`, `${answers[2]} ${Number(answers[2]) === 1 ? "year" : "years"}`)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>{L("Total dana yang sudah terkumpul", "Total saved so far")}</span>
                                            <span>{`Rp${fmt(answers[3])}`}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>{L(`Proyeksi total dana yang sudah terkumpul ${answers[2]} tahun lagi`, `Projected value of your savings in ${answers[2]} ${Number(answers[2]) === 1 ? "year" : "years"}`)}</span>
                                            <span>{`Rp${fmt(Math.round(results.totalProjectedSavings))}`}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>{L("Periode investasi", "Investment timing")}</span>
                                            <span>{L(`Setiap ${answers[5] == "begin" ? "awal" : "akhir"} ${answers[4] == 'monthly' ? 'bulan' : 'tahun'}`, `At the ${answers[5] == "begin" ? "start" : "end"} of each ${answers[4] == 'monthly' ? 'month' : 'year'}`)}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Investment Section */}
                                <div className="bg-[#3A4356] rounded-lg p-4 mb-4">
                                    <h4 className="text-2xl mb-4">{L("Strategi", "Strategy")}</h4>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span>{L(`Jumlah dana yang harus diinvestasikan setiap ${answers[4] == "yearly" ? "tahun" : answers[4] == "monthly" ? "bulan" : ""}`, `Amount to invest every ${answers[4] == "yearly" ? "year" : answers[4] == "monthly" ? "month" : ""}`)}</span>
                                            <span>{`Rp${fmt(Math.round(results.amountToSave))}`}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })()}

                        <div className="flex justify-between mt-2">
                            <button
                                onClick={() => setCurrentStep(prev => Math.max(prev - 1, 1))}
                                className="rounded-lg"
                                style={{
                                    color: "#A51246",
                                    display: currentStep === 1 ? "none" : "block"
                                }}
                            >
                                {L("Kembali ke pertanyaan sebelumnya", "Back to the previous question")}
                            </button>
                        </div>
                    </div>
                </CalcResultShell>
            )}
        </div>
    );
}

export default InvestmentForm;