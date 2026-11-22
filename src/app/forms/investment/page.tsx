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
            text: L("Berapa target dana yang ingin kamu capai?", "How much money do you want to reach?"),
            subtext: L("Jumlah uang yang ingin kamu kumpulkan.", "The amount you want to collect."),
            type: "currency",
            prefix: "Rp"
        },
        {
            id: 2,
            text: L("Berapa lama kamu ingin mengumpulkan uang tersebut?", "How long do you want to take to collect it?"),
            subtext: L("Isi dalam hitungan tahun.", "Enter the number of years."),
            type: "number",
            suffix: L("tahun", "years"),
        },
        {
            id: 3,
            text: L("Berapa uang yang sudah kamu miliki untuk target ini?", "How much do you already have for this goal?"),
            subtext: L("Hitung hanya uang yang kamu tabung khusus untuk target ini.", "Count only the money saved just for this goal."),
            type: "currency",
            prefix: "Rp",
        },
        {
            id: 4,
            text: L("Seberapa sering kamu akan menabung?", "How often will you save?"),
            type: "select",
            options: [
                { value: "yearly", display: L("Setiap tahun", "Every year") },
                { value: "monthly", display: L("Setiap bulan", "Every month") },
            ],
        },
        {
            id: 5,
            text: L("Kapan kamu akan menambahkan dana?", "When will you add money?"),
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
            text: L("Berapa imbal hasil per tahun dari produk investasimu?", "What yearly return do you expect from your investment?"),
            subtext: L("Pakai gambaran ini sesuai profil risikomu. Konservatif (reksa dana pasar uang): sekitar 4% sampai 5%. Moderat (obligasi atau reksa dana pendapatan tetap): sekitar 6% sampai 7%. Agresif (saham atau reksa dana saham): sekitar 8% sampai 10% dalam jangka panjang, tapi bisa turun tajam dalam satu tahun. Angka ini rata-rata masa lalu, bukan jaminan.", "Use this guide for your risk profile. Conservative (money market funds): about 4% to 5%. Moderate (bonds or fixed income funds): about 6% to 7%. Aggressive (stocks or equity funds): about 8% to 10% over the long term, but it can drop sharply in a single year. These are past averages, not a guarantee."),
            type: "number",
            suffix: L("% per tahun", "% per year"),
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
                                <h3 className="text-2xl mb-6">{L("Hasil perhitungan simulasi investasi", "Investment Simulation Result")}</h3>

                                {/* Target Section */}
                                <div className="bg-[#1E2432] rounded-lg p-4 mb-4">
                                    <h4 className="text-2xl mb-4">{L("Ringkasan target investasi", "Investment Target Summary")}</h4>
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