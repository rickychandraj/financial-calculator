"use client";

import React, { useEffect, useState } from "react";
import FormHeader from "@/components/ui/form-header";
import FormQuestionCards from "@/components/ui/form-question-card";
import NumberInput from "@/components/ui/number-input";
import CurrencyInput from "@/components/ui/currency-input";
import SelectOption from "@/components/ui/select-option";

const HolidayPlanningForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [holidayStrategy, setHolidayStrategy] = useState(null);
    const [isResultReady, setIsResultReady] = useState(false);
    const [answers, setAnswers] = useState({
        1: null, // years until holiday
        2: null, // current trip cost
        3: null, // number of people
        4: "4", // default inflation rate
        5: null, // current savings
        6: null, // monthly savings target
        7: "10", // default investment return
    });

    const questions = [
        {
            id: 1,
            text: "Berapa lama lagi kamu ingin pergi liburan?",
            subtext: "Contoh: saat ini tahun 2024, dan kamu ingin pergi pada tahun 2026, berarti 2026 - 2024 = 2 tahun. Berarti kolom di bawah diisi dengan angka 2",
            type: "number",
            suffix: "tahun"
        },
        {
            id: 2,
            text: "Berapa perkiraan biaya liburan saat ini?",
            subtext: "Perkiraan total biaya termasuk transportasi, akomodasi, konsumsi, tiket wisata, dll",
            type: "currency",
            prefix: "Rp",
        },
        {
            id: 3,
            text: "Berapa jumlah orang yang akan berlibur?",
            subtext: "Jumlah orang yang akan ikut dalam perjalanan liburan ini",
            type: "number",
            suffix: "orang",
        },
        {
            id: 4,
            text: "Asumsi inflasi per tahun",
            subtext: "Inflasi dapat diartikan sebagai kenaikan harga barang dan jasa secara umum dan terus menerus dalam jangka waktu tertentu",
            type: "number",
            suffix: "% / tahun",
        },
        {
            id: 5,
            text: "Berapa dana liburan yang sudah kamu kumpulkan?",
            subtext: "Jumlah tabungan yang sudah kamu siapkan khusus untuk liburan ini",
            type: "currency",
            prefix: "Rp",
        },
        {
            id: 6,
            text: "Target menabung setiap bulan sebesar",
            subtext: "Berapa banyak jumlah uang yang akan kamu tabung setiap bulannya untuk liburan",
            type: "currency",
            prefix: "Rp",
        },
        {
            id: 7,
            text: "Target return investasi per tahun",
            subtext: "Dengan asumsi kamu akan menaruh uang tabunganmu pada instrumen investasi.\n\nSilakan masukkan data desimal dengan menggunakan titik, misal 5.75% atau 10.5%.\n\nContoh: Kamu ingin menaruh uangmu di RDPT X pada aplikasi Y, dan dituliskan bahwa return per-tahunnya adalah 5%, maka isikan angka 5 pada kolom di bawah",
            type: "number",
            suffix: "% / tahun",
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

    // Calculate holiday planning results
    const calculateResults = () => {
        const yearsUntilHoliday = parseFloat(answers[1]);
        const currentTripCost = parseFloat(answers[2]);
        const numberOfPeople = parseFloat(answers[3]);
        const inflationRate = parseFloat(answers[4]) / 100;
        const currentSavings = parseFloat(answers[5]);
        const monthlySavings = parseFloat(answers[6]);
        const returnRate = parseFloat(answers[7]) / 100;

        // Calculate future trip cost with inflation
        const futureTripCost = currentTripCost * Math.pow(1 + inflationRate, yearsUntilHoliday);

        // Calculate total cost for all people
        const totalCurrentCost = currentTripCost * numberOfPeople;
        const totalFutureCost = futureTripCost * numberOfPeople;

        // Calculate future value of current savings
        const futureSavings = currentSavings * Math.pow(1 + returnRate, yearsUntilHoliday);

        // Calculate future value of monthly savings
        const monthlyReturn = returnRate / 12;
        const months = yearsUntilHoliday * 12;
        const futureInvestments = monthlySavings * ((Math.pow(1 + monthlyReturn, months) - 1) / monthlyReturn);

        const totalProjectedSavings = futureSavings + futureInvestments;

        // Calculate if savings will meet the target
        const isTargetMet = totalProjectedSavings >= totalFutureCost;

        // Calculate additional monthly savings needed if there's a gap
        let additionalMonthlyNeeded = 0;
        if (!isTargetMet) {
            const gap = totalFutureCost - totalProjectedSavings;
            additionalMonthlyNeeded = gap * (monthlyReturn) / (Math.pow(1 + monthlyReturn, months) - 1);
        }

        return {
            currentCostPerPerson: currentTripCost,
            futureCostPerPerson: futureTripCost,
            totalCurrentCost,
            totalFutureCost,
            totalProjectedSavings,
            isTargetMet,
            additionalMonthlyNeeded,
            gap: Math.max(0, totalFutureCost - totalProjectedSavings)
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
                        title={"Perencanaan Dana Liburan"}
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
                        title={"Perencanaan Dana Liburan"}
                        currentStep={totalSteps}
                        totalSteps={totalSteps}
                    />
                    <div className="p-6">
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <div
                                className={`
                                    p-8 rounded-2xl bg-gradient-to-br
                                    transform transition-all duration-500
                                    hover:scale-[1.02] hover:shadow-2xl
                                    text-white relative overflow-hidden
                                    mb-8
                                `}
                                style={{
                                    background: "linear-gradient(135deg, #252E64 50%, #12174F 100%)"
                                }}
                            >
                                <h3 className="text-2xl mb-6">Hasil Perhitungan Dana Liburan</h3>

                                {/* Cost Analysis */}
                                <div className="bg-[#1E2432] rounded-lg p-4 mb-4">
                                    <h4 className="text-xl mb-4">Analisis Biaya</h4>
                                    <div className="space-y-2">
                                        {isResultReady && (() => {
                                            const results = calculateResults();
                                            return (
                                                <>
                                                    <div className="flex justify-between">
                                                        <span>Biaya per Orang (Saat Ini)</span>
                                                        <span>{`Rp${formatNumber(Math.round(results.currentCostPerPerson))}`}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Biaya per Orang (Proyeksi)</span>
                                                        <span>{`Rp${formatNumber(Math.round(results.futureCostPerPerson))}`}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Total Biaya untuk {answers[3]} Orang (Saat Ini)</span>
                                                        <span>{`Rp${formatNumber(Math.round(results.totalCurrentCost))}`}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Total Biaya untuk {answers[3]} Orang (Proyeksi)</span>
                                                        <span>{`Rp${formatNumber(Math.round(results.totalFutureCost))}`}</span>
                                                    </div>
                                                </>
                                            );
                                        })()}
                                    </div>
                                </div>

                                {/* Savings Progress */}
                                <div className="bg-[#3A4356] rounded-lg p-4 mb-4">
                                    <h4 className="text-xl mb-4">Progress Tabungan</h4>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span>Dana Saat Ini</span>
                                            <span>{`Rp${formatNumber(answers[5])}`}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Target Menabung Bulanan</span>
                                            <span>{`Rp${formatNumber(answers[6])}`}</span>
                                        </div>
                                        {isResultReady && (() => {
                                            const results = calculateResults();
                                            return (
                                                <>
                                                    <div className="flex justify-between">
                                                        <span>Proyeksi Dana Terkumpul</span>
                                                        <span>{`Rp${formatNumber(Math.round(results.totalProjectedSavings))}`}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Gap dengan Target</span>
                                                        <span className={results.isTargetMet ? "text-green-400" : "text-red-400"}>
                                                            {results.isTargetMet
                                                                ? "Dana Mencukupi"
                                                                : `Rp${formatNumber(Math.round(results.gap))}`}
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
                                            <h4 className="text-xl mb-4">Rekomendasi</h4>
                                            <div className="space-y-2">
                                                <div className="flex justify-between">
                                                    <span>Status Target</span>
                                                    <span className={results.isTargetMet ? "text-green-400" : "text-red-400"}>
                                                        {results.isTargetMet
                                                            ? "Target Tercapai"
                                                            : "Target Belum Tercapai"}
                                                    </span>
                                                </div>
                                                {!results.isTargetMet && (
                                                    <div className="flex justify-between">
                                                        <span>Tambahan Tabungan Bulanan yang Diperlukan</span>
                                                        <span>{`Rp${formatNumber(Math.round(results.additionalMonthlyNeeded))}`}</span>
                                                    </div>
                                                )}
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
                </div>
            )}
        </div>
    );
};

export default HolidayPlanningForm;