"use client";

import React, { useEffect, useState } from "react";
import FormHeader from "@/components/ui/form-header";
import FormQuestionCards from "@/components/ui/form-question-card";


const PensionFundForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isResultReady, setIsResultReady] = useState(false);
    const [answers, setAnswers] = useState({
        1: null, // monthly expenses
        2: null, // current age
        3: null, // retirement age
        4: null, // current pension savings
        5: null, // return rate
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
            text: "Dana pensiun yang telah tersedia sampai saat ini",
            subtext: "Jumlah tabungan untuk dana pensiun yang sudah terkumpul sampai dengan kamu mengisi form ini",
            type: "currency",
            prefix: "Rp",
        },
        {
            id: 5,
            text: "Kamu akan investasi di produk yang return-nya?",
            subtext: "Dengan asumsi kamu akan menaruh uang tabunganmu pada instrumen investasi. Sebagai gambaran: untuk profil risiko konservatif, kamu cocok investasi di reksadana pasar uang atau obligasi dengan return rata-rata 6% per tahun. Untuk profil risiko moderat, kamu cocok berinvestasi di obligasi atau reksadana campuran dengan return rata-rata 10% per tahun. Untuk profil risiko agresif, kamu cocok berinvestasi di saham atau reksadana saham dengan return rata-rata 15% per tahun.",
            type: "number",
            suffix: "% / tahun"
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
        const currentSavings = Number(answers[4]);

        const lifeExpectancy = 74; // Assumed life expectancy
        const inflationRate = Number("5.7") / 100;
        const returnRate = Number(answers[5]) / 100;
        const monthlyReturnRate = returnRate / 12;

        const yearsToRetirement = retirementAge - currentAge;
        const yearsInRetirement = lifeExpectancy - retirementAge;

        const totalProjectedSavings = currentSavings * Math.pow(1 + returnRate, yearsToRetirement);

        // Calculate future monthly expenses considering inflation
        const futureMonthlyExpenses = monthlyExpenses * Math.pow(1 + inflationRate, yearsToRetirement);

        // Calculate total needed at retirement
        const monthsInRetirement = yearsInRetirement * 12;

        console.log("futureMonthlyExpenses")
        console.log(futureMonthlyExpenses)
        console.log("yearlyExpenses")
        console.log(monthlyExpenses * 12 * Math.pow(1 + inflationRate, yearsToRetirement))
        console.log("monthlyReturnRate")
        console.log(monthlyReturnRate)
        console.log("yearsInRetirement")
        console.log(yearsInRetirement * 12)
        const totalNeeded = futureMonthlyExpenses * ((1 - (1 / Math.pow(1 + monthlyReturnRate, yearsInRetirement * 12))) / monthlyReturnRate);

        const futureAmountToSave = (totalNeeded - totalProjectedSavings)
        const totalAmountToSaveMonthly = (futureAmountToSave * monthlyReturnRate) / ((Math.pow(1 + monthlyReturnRate, yearsToRetirement * 12) - 1))

        return {
            totalNeeded,
            currentGap: totalNeeded - totalProjectedSavings,
            totalProjectedSavings,
            isSufficient: totalProjectedSavings >= totalNeeded,
            totalAmountToSaveMonthly,
            futureMonthlyExpenses,
            yearsToRetirement,
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
                    <div className="p-5">
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
                            <h3 className="text-3xl mb-1">Hasil Perhitungan Dana Pensiun</h3>
                            <p className="text-sm mb-6">Perhitungan ini menggunakan asumsi angka harapan hidup sampai dengan <span className={"font-bold"}> 74 tahun </span></p>

                            {/* Input Summary Section */}
                            <div className="bg-[#1E2432] rounded-lg p-4 mb-4">
                                <h4 className="text-2xl mb-4">Ringkasan Input</h4>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span>Usia saat ini</span>
                                        <span>{`${answers[2]} tahun`}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Usia saat pensiun</span>
                                        <span>{`${answers[3]} tahun`}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Pengeluaran bulanan saat ini</span>
                                        <span>{`Rp${formatNumber(answers[1])}`}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Dana yang telah terkumpul</span>
                                        <span>{`Rp${formatNumber(answers[4])}`}</span>
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
                                            <h4 className="text-2xl mb-4">Proyeksi Kebutuhan</h4>
                                            <div className="space-y-2">
                                                <div className="flex justify-between">
                                                    <span>Proyeksi nilai total dana yang terkumpul</span>
                                                    <span>{`Rp${formatNumber(Math.round(results.totalProjectedSavings))}`}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Proyeksi pengeluaran bulanan saat pensiun</span>
                                                    <span>{`Rp${formatNumber(Math.round(results.futureMonthlyExpenses))}`}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Proyeksi total dana pensiun yang dibutuhkan</span>
                                                    <span>{`Rp${formatNumber(Math.round(results.totalNeeded))}`}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Gap dengan dana saat ini</span>
                                                    <span>{`Rp${formatNumber(Math.round(results.currentGap))}`}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Projection Section */}
                                        <div className="bg-[#1E2432] rounded-lg p-4">
                                            <h4 className="text-2xl mb-4">Rekomendasi</h4>
                                            <div className="space-y-2">
                                                <div className="flex justify-between">
                                                    <span>Total uang yang harus ditabung selama {results.yearsToRetirement} tahun ke depan</span>
                                                    <span>{`Rp${formatNumber(Math.round(results.currentGap))}`}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Total uang yang harus ditabung setiap akhir bulan (per bulan ini)</span>
                                                    <span>{`Rp${formatNumber(Math.round(results.totalAmountToSaveMonthly))}`}</span>
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
            )}
        </div>
    );
}

export default PensionFundForm;