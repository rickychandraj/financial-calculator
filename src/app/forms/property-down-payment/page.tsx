// @ts-nocheck
"use client";

import React, { useEffect, useState } from "react";
import FormHeader from "@/components/ui/form-header";
import FormQuestionCards from "@/components/ui/form-question-card";


const DPPropertyForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isResultReady, setIsResultReady] = useState(false);
    const [answers, setAnswers] = useState({
        1: null, // property price
        2: null, // years to collect
        3: "20", // default DP percentage
        4: null, // current savings
        5: null, // monthly savings target
        6: "10", // default investment return
    });

    const questions = [
        {
            id: 1,
            text: "Berapa harga properti yang ingin kamu beli?",
            subtext: "Masukkan harga properti sesuai yang tertera pada brosur atau info dari developer/penjual",
            type: "currency",
            prefix: "Rp"
        },
        {
            id: 2,
            text: "Berapa lama target waktu kamu untuk mengumpulkan DP?",
            subtext: "Berapa tahun dari sekarang kamu merencanakan untuk membayar DP",
            type: "number",
            suffix: "tahun"
        },
        {
            id: 3,
            text: "Berapa persen DP yang ingin kamu siapkan?",
            subtext: "Minimal DP untuk KPR biasanya 10-20% dari harga properti. Semakin besar DP, semakin kecil cicilan KPR-mu nanti",
            type: "number",
            suffix: "%"
        },
        {
            id: 4,
            text: "Berapa uang yang sudah kamu siapkan untuk DP saat ini?",
            subtext: "Jumlah uang yang sudah kamu kumpulkan khusus untuk DP properti ini",
            type: "currency",
            prefix: "Rp"
        },
        {
            id: 5,
            text: "Target menabung setiap bulan sebesar",
            subtext: "Berapa banyak uang yang akan kamu sisihkan setiap bulan untuk DP",
            type: "currency",
            prefix: "Rp",
            suffix: "/ bulan"
        },
        {
            id: 6,
            text: "Target return investasi per tahun",
            subtext: "Dengan asumsi kamu akan menaruh uang tabunganmu pada instrumen investasi.\n\nSilakan masukkan data desimal dengan menggunakan titik, misal 5.75% atau 10.5%",
            type: "number",
            suffix: "% / tahun"
        }
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
        const monthlySavings = Number(answers[5]);
        const investmentReturn = Number(answers[6]) / 100;

        // Calculate total DP needed
        const totalDPNeeded = propertyPrice * dpPercentage;

        // Calculate future value of current savings
        const futureSavings = currentSavings * Math.pow(1 + investmentReturn, yearsToCollect);

        // Calculate future value of monthly savings
        const monthlyReturn = investmentReturn / 12;
        const months = yearsToCollect * 12;
        const futureMonthlySavings = monthlySavings * ((Math.pow(1 + monthlyReturn, months) - 1) / monthlyReturn) * (1 + monthlyReturn);

        const totalProjectedSavings = futureSavings + futureMonthlySavings;
        const gap = totalDPNeeded - totalProjectedSavings;

        // Calculate required monthly savings to meet target
        const requiredMonthlySavings = gap > 0 ?
            (gap * monthlyReturn) / ((Math.pow(1 + monthlyReturn, months) - 1)) :
            0;

        return {
            dpNeeded: totalDPNeeded,
            currentProgress: (currentSavings / totalDPNeeded) * 100,
            projectedProgress: (totalProjectedSavings / totalDPNeeded) * 100,
            futureSavings,
            futureMonthlySavings,
            totalProjectedSavings,
            gap,
            isTargetMet: totalProjectedSavings >= totalDPNeeded,
            additionalMonthlySavingsNeeded: requiredMonthlySavings,
            monthlyMilestones: Array.from({ length: months }, (_, i) => {
                const monthsSoFar = i + 1;
                const savingsSoFar = currentSavings * Math.pow(1 + monthlyReturn, monthsSoFar) +
                    monthlySavings * ((Math.pow(1 + monthlyReturn, monthsSoFar) - 1) / monthlyReturn) * (1 + monthlyReturn);
                return {
                    month: monthsSoFar,
                    amount: savingsSoFar,
                    percentage: (savingsSoFar / totalDPNeeded) * 100
                };
            })
        };
    };

    const handleGetResult = () => {
        setCurrentStep(prev => prev + 1);
    };

    useEffect(() => {
        const allFieldsFilled = Object.values(answers).every(value => value !== null);
        setIsResultReady(allFieldsFilled);
    }, [answers]);

    const handleIsNextButtonDisabled = (questionId) => {
        return !answers[questionId];
    };

    const formatNumber = (num) => {
        const cleanNum = num.toString().replace(/[^\d.]/g, '');
        const [integerPart, decimalPart] = cleanNum.split('.');
        const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return decimalPart !== undefined
            ? `${formattedInteger}.${decimalPart}`
            : formattedInteger;
    };

    return (
        <div
            className="w-full max-w-3xl mx-auto min-h-screen"
            style={{
                fontFamily: "system-ui, sans-serif",
                backgroundColor: "#F9FAFB",
            }}
        >
            {currentStep <= totalSteps && (
                <div>
                    <FormHeader
                        href={"/"}
                        title={"Simulasi Dana DP Properti"}
                        currentStep={currentStep}
                        totalSteps={totalSteps}
                    />
                    <FormQuestionCards
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
                </div>
            )}

            {currentStep > totalSteps && (
                <div>
                    <FormHeader
                        href={"/"}
                        title={"Simulasi Dana DP Properti"}
                        currentStep={totalSteps}
                        totalSteps={totalSteps}
                    />
                    <div className="p-6">
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <div
                                className="p-8 rounded-2xl bg-gradient-to-br transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl text-white"
                                style={{
                                    background: "linear-gradient(135deg, #252E64 50%, #12174F 100%)"
                                }}
                            >
                                {isResultReady && (() => {
                                    const results = calculateDPProjection();
                                    return (
                                        <>
                                            {/* Target Summary */}
                                            <div className="bg-[#1E2432] rounded-lg p-4 mb-4">
                                                <h4 className="text-xl mb-4">Ringkasan Target DP</h4>
                                                <div className="space-y-2">
                                                    <div className="flex justify-between">
                                                        <span>Harga Properti</span>
                                                        <span>{`Rp${formatNumber(answers[1])}`}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Total DP yang Dibutuhkan</span>
                                                        <span>{`Rp${formatNumber(Math.round(results.dpNeeded))}`}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Progress Saat Ini</span>
                                                        <span>{`${Math.round(results.currentProgress)}%`}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Projection Results */}
                                            <div className="bg-[#3A4356] rounded-lg p-4 mb-4">
                                                <h4 className="text-xl mb-4">Hasil Proyeksi {answers[2]} Tahun</h4>
                                                <div className="space-y-2">
                                                    <div className="flex justify-between">
                                                        <span>Proyeksi Dana Terkumpul</span>
                                                        <span>{`Rp${formatNumber(Math.round(results.totalProjectedSavings))}`}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Progress yang Akan Dicapai</span>
                                                        <span>{`${Math.round(results.projectedProgress)}%`}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Status Target</span>
                                                        <span className={results.isTargetMet ? "text-green-400" : "text-red-400"}>
                                                            {results.isTargetMet ? "Target Tercapai" : "Target Belum Tercapai"}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Gap Analysis */}
                                            <div className="bg-[#1E2432] rounded-lg p-4 mb-4">
                                                <h4 className="text-xl mb-4">Analisis Kesenjangan</h4>
                                                <div className="space-y-2">
                                                    <div className="flex justify-between">
                                                        <span>Gap dengan Target</span>
                                                        <span className={results.gap <= 0 ? "text-green-400" : "text-red-400"}>
                                                            {`Rp${formatNumber(Math.round(Math.abs(results.gap)))}`}
                                                        </span>
                                                    </div>
                                                    {results.gap > 0 && (
                                                        <div className="flex justify-between">
                                                            <span>Tambahan Tabungan Bulanan yang Diperlukan</span>
                                                            <span>{`Rp${formatNumber(Math.round(results.additionalMonthlySavingsNeeded))}`}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Year Milestones */}
                                            <div className="bg-[#3A4356] rounded-lg p-4">
                                                <h4 className="text-xl mb-4">Target Tahunan</h4>
                                                <div className="space-y-2">
                                                    {Array.from({ length: Number(answers[2]) }, (_, i) => {
                                                        const yearMilestone = results.monthlyMilestones[(i + 1) * 12 - 1];
                                                        return (
                                                            <div key={i} className="flex justify-between">
                                                                <span>{`Target Tahun ${i + 1}`}</span>
                                                                <span>{`Rp${formatNumber(Math.round(yearMilestone.amount))} (${Math.round(yearMilestone.percentage)}%)`}</span>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
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
                                    Kembali ke pertanyaan sebelumnya
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DPPropertyForm;