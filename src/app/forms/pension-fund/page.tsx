"use client";

import React, { useEffect, useState } from "react";
import FormHeader from "@/components/ui/form-header";
import FormQuestionCards from "@/components/ui/form-question-card";
import NumberInput from "@/components/ui/number-input";
import CurrencyInput from "@/components/ui/currency-input";
import SelectOption from "@/components/ui/select-option";


const PensionFundForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [pensionStrategy, setPensionStrategy] = useState(null);
    const [isResultReady, setIsResultReady] = useState(false);
    const [answers, setAnswers] = useState({
        1: null, // monthly expenses
        2: null, // current age
        3: null, // retirement age
        4: "4", // default inflation rate
        5: null, // current pension savings
        6: null, // monthly investment target
        7: "10", // default investment return
    });

    const questions = [
        {
            id: 1,
            text: "Berapa pengeluaran kamu setiap bulan?",
            subtext: "Jumlah uang yang harus kamu keluarkan setiap bulannya untuk hidup, termasuk biaya sewa/kos, makan, dll",
            type: "currency",
            prefix: "Rp"
        },
        {
            id: 2,
            text: "Berapa usia kamu sekarang?",
            type: "number",
            suffix: "tahun",
        },
        {
            id: 3,
            text: "Kamu ingin pensiun di usia",
            subtext: "Target usia kamu saat kamu sudah tidak lagi bekerja",
            type: "number",
            suffix: "tahun",
        },
        {
            id: 4,
            text: "Asumsi inflasi tahunan",
            subtext: "Inflasi dapat diartikan sebagai kenaikan harga barang dan jasa secara umum dan terus menerus dalam jangka waktu tertentu",
            type: "number",
            suffix: "% / tahun",
        },
        {
            id: 5,
            text: "Dana pensiun yang telah tersedia sampai saat ini",
            subtext: "Jumlah tabungan untuk dana pensiun yang sudah terkumpul sampai dengan kamu mengisi form ini",
            type: "currency",
            prefix: "Rp",
        },
        {
            id: 6,
            text: "Target investasimu setiap bulan sebesar",
            subtext: "Jumlah dana yang akan kamu tambahkan setiap bulannya",
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

    // Calculate pension results
    const calculateResults = () => {
        const monthlyExpenses = Number(answers[1]);
        const currentAge = Number(answers[2]);
        const retirementAge = Number(answers[3]);
        const inflationRate = Number(answers[4]) / 100;
        const currentSavings = Number(answers[5]);
        const monthlyInvestment = Number(answers[6]);
        const returnRate = parseFloat(answers[7]) / 100;

        const yearsToRetirement = retirementAge - currentAge;
        const lifeExpectancy = 80; // Assumed life expectancy
        const yearsInRetirement = lifeExpectancy - retirementAge;

        // Calculate future monthly expenses considering inflation
        const futureMonthlyExpenses = monthlyExpenses * Math.pow(1 + inflationRate, yearsToRetirement);

        // Calculate total needed at retirement
        const monthlyReturnInRetirement = returnRate / 12;
        const monthsInRetirement = yearsInRetirement * 12;
        const totalNeeded = futureMonthlyExpenses * ((1 - Math.pow(1 + monthlyReturnInRetirement, -monthsInRetirement)) / monthlyReturnInRetirement);

        // Calculate future value of current savings
        const futureSavings = currentSavings * Math.pow(1 + returnRate, yearsToRetirement);

        // Calculate future value of monthly investments
        const monthlyReturn = returnRate / 12;
        const months = yearsToRetirement * 12;
        const futureInvestments = monthlyInvestment * ((Math.pow(1 + monthlyReturn, months) - 1) / monthlyReturn);

        const totalProjected = futureSavings + futureInvestments;

        // Calculate monthly pension available
        const monthlyPensionAvailable = (totalProjected * monthlyReturnInRetirement) / (1 - Math.pow(1 + monthlyReturnInRetirement, -monthsInRetirement));

        return {
            totalNeeded,
            currentGap: totalNeeded - currentSavings,
            totalProjected,
            isSufficient: totalProjected >= totalNeeded,
            monthlyPensionAvailable,
            futureMonthlyExpenses
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
                        title={"Perencanaan Dana Pensiun"}
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
                        title={"Perencanaan Dana Pensiun"}
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
                                <h3 className="text-2xl mb-6">Hasil Perhitungan Dana Pensiun</h3>

                                {/* Input Summary Section */}
                                <div className="bg-[#1E2432] rounded-lg p-4 mb-4">
                                    <h4 className="text-xl mb-4">Ringkasan Input</h4>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span>Usia Saat Ini</span>
                                            <span>{`${answers[2]} tahun`}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Usia Pensiun</span>
                                            <span>{`${answers[3]} tahun`}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Pengeluaran Bulanan Saat Ini</span>
                                            <span>{`Rp${formatNumber(answers[1])}`}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Dana Tersedia</span>
                                            <span>{`Rp${formatNumber(answers[5])}`}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Calculation Results */}
                                {isResultReady && (() => {
                                    const results = calculateResults();
                                    return (
                                        <>
                                            {/* Projected Needs Section */}
                                            <div className="bg-[#3A4356] rounded-lg p-4 mb-4">
                                                <h4 className="text-xl mb-4">Proyeksi Kebutuhan</h4>
                                                <div className="space-y-2">
                                                    <div className="flex justify-between">
                                                        <span>Kebutuhan Bulanan saat Pensiun</span>
                                                        <span>{`Rp${formatNumber(Math.round(results.futureMonthlyExpenses))}`}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Total Dana Pensiun yang Dibutuhkan</span>
                                                        <span>{`Rp${formatNumber(Math.round(results.totalNeeded))}`}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Gap dengan Dana Saat Ini</span>
                                                        <span>{`Rp${formatNumber(Math.round(results.currentGap))}`}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Projection Section */}
                                            <div className="bg-[#1E2432] rounded-lg p-4">
                                                <h4 className="text-xl mb-4">Hasil Proyeksi</h4>
                                                <div className="space-y-2">
                                                    <div className="flex justify-between">
                                                        <span>Total Dana Proyeksi saat Pensiun</span>
                                                        <span>{`Rp${formatNumber(Math.round(results.totalProjected))}`}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Proyeksi Dana Pensiun Bulanan</span>
                                                        <span>{`Rp${formatNumber(Math.round(results.monthlyPensionAvailable))}`}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Status Target</span>
                                                        <span className={results.isSufficient ? "text-green-400" : "text-red-400"}>
                                                            {results.isSufficient ? "Dana Mencukupi" : "Dana Belum Mencukupi"}
                                                        </span>
                                                    </div>
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
}

export default PensionFundForm;