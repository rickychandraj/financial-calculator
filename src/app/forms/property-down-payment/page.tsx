// @ts-nocheck
"use client";

import React, { useEffect, useState } from "react";
import CalcQuestionFlow, { CalcResultShell } from "@/components/calc/question-flow";
import { useLanguage } from "@/lib/i18n";
import { formatNumber, monthlySavingNeeded } from "@/lib/calc/finance";


const DPPropertyForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const { lang } = useLanguage();
    const L = (id: string, en: string) => (lang === "en" ? en : id);
    const fmt = (value: number | string) => formatNumber(value, lang);
    const [isResultReady, setIsResultReady] = useState(false);
    const [answers, setAnswers] = useState<Record<number, any>>({
        1: null, // property price
        2: null, // years to collect
        3: "20", // default DP percentage
        4: null, // current savings
    });

    const questions = [
        {
            id: 1,
            text: L("Berapa harga properti yang ingin kamu beli?", "What is the price of the property you want to buy?"),
            subtext: L("Masukkan harga properti sesuai yang tertera pada brosur atau info dari developer/penjual", "Enter the property price shown in the brochure or given by the developer/seller"),
            type: "currency",
            prefix: "Rp"
        },
        {
            id: 2,
            text: L("Berapa lama target waktu kamu untuk mengumpulkan DP?", "How long do you plan to take to save the down payment?"),
            subtext: L("Berapa tahun dari sekarang kamu merencanakan untuk membayar DP", "How many years from now you plan to pay the down payment"),
            type: "number",
            suffix: L("tahun", "years")
        },
        {
            id: 3,
            text: L("Berapa persen DP yang ingin kamu siapkan?", "What down payment percentage do you want to prepare?"),
            subtext: L("Minimal DP untuk KPR biasanya 10-20% dari harga properti. Semakin besar DP, semakin kecil cicilan KPR-mu nanti", "The minimum down payment for a mortgage (KPR) is usually 10-20% of the property price. The bigger the down payment, the smaller your mortgage instalments later"),
            type: "number",
            suffix: "%"
        },
        {
            id: 4,
            text: L("Berapa uang yang sudah kamu siapkan untuk DP saat ini?", "How much have you saved for the down payment so far?"),
            subtext: L("Jumlah uang yang sudah kamu kumpulkan khusus untuk DP properti ini", "Money you have saved just for this property's down payment"),
            type: "currency",
            prefix: "Rp"
        },
    ];

    const totalSteps = questions.length;

    const handleInputChange = (questionId, value) => {
        const numericValue = value.toString().replace(/,/g, "");
        if (numericValue === "" || /^\d*\.?\d*$/.test(numericValue)) {
            setAnswers(prev => ({
                ...prev,
                [questionId]: numericValue,
            }));
        }
    };

    const calculateDPProjection = () => {
        const propertyPrice = Number(answers[1]);
        const yearsToCollect = Number(answers[2]);
        const dpPercentage = Number(answers[3]) / 100;
        const currentSavings = Number(answers[4]);

        const inflationRate = Number("4") / 100;
        const returnRate = Number("6") / 100;

        // Calculate future vehicle price with inflation
        const futurePrice = propertyPrice * Math.pow(1 + inflationRate, yearsToCollect);

        // Calculate total DP needed
        const totalDPNeeded = (propertyPrice * Math.pow(1 + inflationRate, yearsToCollect)) * dpPercentage;

        // Calculate future value of current savings
        const totalProjectedSavings = currentSavings * Math.pow(1 + returnRate, yearsToCollect);

        // Calculate future value of monthly savings
        const gapToTarget = totalDPNeeded - totalProjectedSavings;

        const futureAmountToSave = Math.max(0, totalDPNeeded - totalProjectedSavings);
        const totalAmountToSaveMonthly = monthlySavingNeeded(futureAmountToSave, returnRate, yearsToCollect);


        return {
            dpNeeded: totalDPNeeded,
            futurePrice,
            totalProjectedSavings,
            gapToTarget,
            futureAmountToSave,
            totalAmountToSaveMonthly,
            isTargetMet: totalProjectedSavings >= totalDPNeeded,
        };
    };

    const handleGetResult = () => {
        setCurrentStep(prev => prev + 1);
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
                    title={L("Simulasi DP Properti", "Property Down Payment Simulation")}
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
                <CalcResultShell href={"/"} title={L("Simulasi DP Properti", "Property Down Payment Simulation")} totalSteps={totalSteps}>
                    <div className="p-5">
                        <div
                            className="p-8 rounded-2xl bg-gradient-to-br transform text-white"
                            style={{
                                background: "linear-gradient(135deg, #252E64 50%, #12174F 90%)"
                            }}
                        >
                            {isResultReady && (() => {
                                const results = calculateDPProjection();
                                return (
                                    <>
                                        <h3 className="text-3xl mb-6">{L("Hasil Perhitungan DP Properti", "Property Down Payment Result")}</h3>

                                        {/* Target Summary */}
                                        <div className="bg-[#1E2432] rounded-lg p-4 mb-4">
                                            <h4 className="text-2xl mb-4">{L("Ringkasan Target DP", "Down Payment Target Summary")}</h4>
                                            <div className="space-y-2">
                                                <div className="flex justify-between">
                                                    <span>{L("Harga properti saat ini", "Property price today")}</span>
                                                    <span>{`Rp${fmt(answers[1])}`}</span>
                                                </div>
                                                <br/>
                                                <div className="flex justify-between">
                                                    <span>{L(`Proyeksi harga properti ${answers[2]} tahun lagi`, `Projected property price in ${answers[2]} ${Number(answers[2]) === 1 ? "year" : "years"}`)}</span>
                                                    <span>{`Rp${fmt(Math.round(results.futurePrice))}`}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span><b>{L("(Asumsi: Tingkat Inflasi = 4% / tahun)", "(Assumption: inflation rate = 4% / year)")}</b></span>
                                                    <span></span>
                                                </div>
                                                <br/>
                                                <div className="flex justify-between">
                                                    <span>{L(`Proyeksi total DP yang dibutuhkan ${answers[2]} tahun lagi`, `Projected down payment needed in ${answers[2]} ${Number(answers[2]) === 1 ? "year" : "years"}`)}</span>
                                                    <span>{`Rp${fmt(Math.round(results.dpNeeded))}`}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-[#3A4356] rounded-lg p-4 mb-4">
                                            <h4 className="text-2xl mb-4">{L(`Proyeksi ${answers[2]} Tahun`, `${answers[2]}-Year Projection`)}</h4>
                                            <div className="space-y-2">
                                                <div className="flex justify-between">
                                                    <span>{L("Dana yang sudah terkumpul", "Funds saved so far")}</span>
                                                    <span>{`Rp${fmt(answers[4])}`}</span>
                                                </div>
                                                <br/>
                                                <div className="flex justify-between">
                                                    <span>{L(`Proyeksi nilai dana yang sudah terkumpul ${answers[2]} tahun lagi `, `Projected value of your savings in ${answers[2]} ${Number(answers[2]) === 1 ? "year" : "years"} `)}</span>
                                                    <span>{`Rp${fmt(Math.round(results.totalProjectedSavings))}`}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span><b>{L("(Asumsi: Imbal Balik Investasi = 6% / tahun)", "(Assumption: investment return = 6% / year)")}</b></span>
                                                    <span></span>
                                                </div>
                                                <br/>
                                                <div className="flex justify-between">
                                                    <span>{L("Gap dengan target", "Gap to target")}</span>
                                                    <span className={results.isTargetMet ? "text-green-400" : "text-red-400"}>
                                                        {results.isTargetMet
                                                            ? L("Target Tercapai", "Target reached")
                                                            : `Rp${fmt(Math.round(results.gapToTarget))}`
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {!results.isTargetMet && (
                                            <div className="bg-[#1E2432] rounded-lg p-4">
                                                <h4 className="text-2xl mb-4">{L("Rekomendasi", "Recommendation")}</h4>
                                                <div className="space-y-2">
                                                    <div className="flex justify-between">
                                                        <span>{L(`Total uang yang harus ditabung hingga ${answers[2]} tahun lagi`, `Total amount to save over the next ${answers[2]} ${Number(answers[2]) === 1 ? "year" : "years"}`)}</span>
                                                        <span>{`Rp${fmt(Math.round(results.futureAmountToSave))}`}</span>
                                                    </div>
                                                    <br/>
                                                    <div className="flex justify-between">
                                                        <span>{L("Total uang yang harus ditabung setiap akhir bulan (per bulan ini)", "Amount to save at the end of each month (starting this month)")}</span>
                                                        <span>{`Rp${fmt(Math.round(results.totalAmountToSaveMonthly))}`}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span><b>{L("(Asumsi: Imbal Balik Investasi = 6% / tahun)", "(Assumption: investment return = 6% / year)")}</b></span>
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                );
                            })()}
                        </div>

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
};

export default DPPropertyForm;