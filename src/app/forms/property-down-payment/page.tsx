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
        const monthlyReturnRate = returnRate / 12;

        // Calculate future vehicle price with inflation
        const futurePrice = propertyPrice * Math.pow(1 + inflationRate, yearsToCollect);

        // Calculate total DP needed
        const totalDPNeeded = (propertyPrice * Math.pow(1 + inflationRate, yearsToCollect)) * dpPercentage;

        // Calculate future value of current savings
        const totalProjectedSavings = currentSavings * Math.pow(1 + returnRate, yearsToCollect);

        // Calculate future value of monthly savings
        const gapToTarget = totalDPNeeded - totalProjectedSavings;

        const futureAmountToSave = (totalDPNeeded - totalProjectedSavings)
        const totalAmountToSaveMonthly = (futureAmountToSave * monthlyReturnRate) / ((Math.pow(1 + monthlyReturnRate, yearsToCollect * 12) - 1))


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
                        title={"Simulasi DP Properti"}
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
                        title={"Simulasi DP Properti"}
                        currentStep={totalSteps}
                        totalSteps={totalSteps}
                    />
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
                                        <h3 className="text-3xl mb-6">Hasil Perhitungan DP Properti</h3>

                                        {/* Target Summary */}
                                        <div className="bg-[#1E2432] rounded-lg p-4 mb-4">
                                            <h4 className="text-2xl mb-4">Ringkasan Target DP</h4>
                                            <div className="space-y-2">
                                                <div className="flex justify-between">
                                                    <span>Harga properti saat ini</span>
                                                    <span>{`Rp${formatNumber(answers[1])}`}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Proyeksi harga properti {answers[2]} tahun lagi</span>
                                                    <span>{`Rp${formatNumber(Math.round(results.futurePrice))}`}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Proyeksi total DP yang dibutuhkan {answers[2]} tahun lagi</span>
                                                    <span>{`Rp${formatNumber(Math.round(results.dpNeeded))}`}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-[#3A4356] rounded-lg p-4 mb-4">
                                            <h4 className="text-2xl mb-4">Proyeksi {answers[2]} Tahun</h4>
                                            <div className="space-y-2">
                                                <div className="flex justify-between">
                                                    <span>Dana yang sudah terkumpul</span>
                                                    <span>{`Rp${formatNumber(answers[4])}`}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Proyeksi nilai dana yang sudah terkumpul {answers[2]} tahun lagi</span>
                                                    <span>{`Rp${formatNumber(Math.round(results.totalProjectedSavings))}`}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Gap dengan target</span>
                                                    <span className={results.isTargetMet ? "text-green-400" : "text-red-400"}>
                                                        {results.isTargetMet
                                                            ? "Target Tercapai"
                                                            : `Rp${formatNumber(Math.round(results.gapToTarget))}`
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {!results.isTargetMet && (
                                            <div className="bg-[#1E2432] rounded-lg p-4">
                                                <h4 className="text-2xl mb-4">Rekomendasi</h4>
                                                <div className="space-y-2">
                                                    <div className="flex justify-between">
                                                        <span>Total uang yang harus ditabung hingga {answers[2]} tahun lagi</span>
                                                        <span>{`Rp${formatNumber(Math.round(results.futureAmountToSave))}`}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Total uang yang harus ditabung setiap akhir bulan (per bulan ini)</span>
                                                        <span>{`Rp${formatNumber(Math.round(results.totalAmountToSaveMonthly))}`}</span>
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
                                Kembali ke pertanyaan sebelumnya
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DPPropertyForm;