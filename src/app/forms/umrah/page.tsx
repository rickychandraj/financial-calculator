"use client";

import React, { useEffect, useState } from "react";
import FormHeader from "@/components/ui/form-header";
import FormQuestionCards from "@/components/ui/form-question-card";


const UmrahPlanningForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isResultReady, setIsResultReady] = useState(false);
    const [answers, setAnswers] = useState({
        1: null, // years until umrah
        2: null, // current package cost
        3: null, // number of people
        4: null, // current savings
    });

    const questions = [
        {
            id: 1,
            text: "Berapa lama lagi kamu ingin pergi umrah?",
            subtext: "Contoh: saat ini tahun 2024, dan kamu ingin pergi pada tahun 2026, berarti 2026 - 2024 = 2 tahun. Berarti kolom di bawah diisi dengan angka 2",
            type: "number",
            suffix: "tahun"
        },
        {
            id: 2,
            text: "Berapa perkiraan biaya paket umrah saat ini?",
            subtext: "Perkiraan total biaya termasuk visa, transportasi, akomodasi, dan kebutuhan ibadah",
            type: "currency",
            prefix: "Rp",
        },
        {
            id: 3,
            text: "Berapa jumlah orang yang akan pergi umrah?",
            subtext: "Jumlah orang yang akan ikut dalam perjalanan ibadah ini",
            type: "number",
            suffix: "orang",
        },
        {
            id: 4,
            text: "Berapa dana umrah yang sudah kamu kumpulkan?",
            subtext: "Jumlah tabungan yang sudah kamu siapkan khusus untuk ibadah umrah",
            type: "currency",
            prefix: "Rp",
        },
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

    // Calculate umrah planning results
    const calculateResults = () => {
        const yearsUntilUmrah = Number(answers[1]);
        const currentPackageCost = Number(answers[2]);
        const numberOfPeople = Number(answers[3]);
        const currentSavings = Number(answers[4]);

        const inflationRate = Number("4") / 100;
        const returnRate = Number("6") / 100;
        const monthlyReturnRate = returnRate / 12;

        // Calculate future package cost with inflation
        const futurePackageCost = currentPackageCost * Math.pow(1 + inflationRate, yearsUntilUmrah);

        // Calculate total cost for all people
        const totalCurrentCost = currentPackageCost * numberOfPeople;
        const totalFutureCost = futurePackageCost * numberOfPeople;

        // Calculate future value of current savings
        const totalProjectedSavings = currentSavings * Math.pow(1 + returnRate, yearsUntilUmrah);

        // Calculate if savings will meet the target
        const isTargetMet = totalProjectedSavings >= totalFutureCost;

        const futureAmountToSave = (totalFutureCost - totalProjectedSavings)
        const totalAmountToSaveMonthly = (futureAmountToSave * monthlyReturnRate) / ((Math.pow(1 + monthlyReturnRate, yearsUntilUmrah * 12) - 1))

        return {
            currentCostPerPerson: currentPackageCost,
            futureCostPerPerson: futurePackageCost,
            totalCurrentCost,
            totalFutureCost,
            totalProjectedSavings,
            isTargetMet,
            futureAmountToSave,
            totalAmountToSaveMonthly,
            gapToTarget: Math.max(0, totalFutureCost - totalProjectedSavings)
        };
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
                        title={"Perencanaan Dana Umrah"}
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
                        title={"Perencanaan Dana Umrah"}
                        currentStep={totalSteps}
                        totalSteps={totalSteps}
                    />
                    <div className="p-5">
                        <div
                            className={`
                                p-8 rounded-2xl bg-gradient-to-br
                                transform
                                text-white relative overflow-hidden
                                mb-8
                            `}
                            style={{
                                background: "linear-gradient(135deg, #252E64 50%, #12174F 90%)"
                            }}
                        >
                            <h3 className="text-3xl mb-6">Hasil Perhitungan Dana Umrah</h3>

                            {/* Cost Analysis */}
                            <div className="bg-[#1E2432] rounded-lg p-4 mb-4">
                                <h4 className="text-2xl mb-4">Analisis Biaya</h4>
                                <div className="space-y-2">
                                    {isResultReady && (() => {
                                        const results = calculateResults();
                                        return (
                                            <>
                                                <div className="flex justify-between">
                                                    <span>Biaya per orang (saat ini)</span>
                                                    <span>{`Rp${formatNumber(Math.round(results.currentCostPerPerson))}`}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Proyeksi biaya per orang ({answers[1]} tahun lagi)</span>
                                                    <span>{`Rp${formatNumber(Math.round(results.futureCostPerPerson))}`}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Total biaya untuk {answers[3]} orang (saat ini)</span>
                                                    <span>{`Rp${formatNumber(Math.round(results.totalCurrentCost))}`}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Proyeksi total biaya untuk {answers[3]} orang ({answers[1]} tahun lagi)</span>
                                                    <span>{`Rp${formatNumber(Math.round(results.totalFutureCost))}`}</span>
                                                </div>
                                            </>
                                        );
                                    })()}
                                </div>
                            </div>

                            {/* Savings Progress */}
                            <div className="bg-[#3A4356] rounded-lg p-4 mb-4">
                                <h4 className="text-2xl mb-4">Progress Tabungan</h4>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span>Dana yang sudah terkumpul</span>
                                        <span>{`Rp${formatNumber(answers[4])}`}</span>
                                    </div>
                                    {isResultReady && (() => {
                                        const results = calculateResults();
                                        return (
                                            <>
                                                <div className="flex justify-between">
                                                    <span>Proyeksi nilai dana terkumpul {answers[1]} tahun lagi</span>
                                                    <span>{`Rp${formatNumber(Math.round(results.totalProjectedSavings))}`}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Gap dengan target</span>
                                                    <span className={results.isTargetMet ? "text-green-400" : "text-red-400"}>
                                                        {results.isTargetMet
                                                            ? "Dana Mencukupi"
                                                            : `Rp${formatNumber(Math.round(results.gapToTarget))}`}
                                                    </span>
                                                </div>
                                            </>
                                        );
                                    })()}
                                </div>
                            </div>

                            {/* Recommendation Section */}
                            {isResultReady && (() => {
                                const results = calculateResults();
                                return (
                                    <div className="bg-[#1E2432] rounded-lg p-4">
                                        <h4 className="text-2xl mb-4">Rekomendasi</h4>
                                        <div className="space-y-2">
                                            <div className="flex justify-between">
                                                <span>Total uang yang harus ditabung hingga {answers[1]} tahun lagi</span>
                                                <span>{`Rp${formatNumber(Math.round(results.futureAmountToSave))}`}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Total uang yang harus ditabung setiap akhir bulan (per bulan ini)</span>
                                                <span>{`Rp${formatNumber(Math.round(results.totalAmountToSaveMonthly))}`}</span>
                                            </div>
                                        </div>
                                    </div>
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

export default UmrahPlanningForm;