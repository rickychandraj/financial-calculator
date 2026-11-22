"use client";

import React, { useEffect, useState } from "react";
import CalcQuestionFlow, { CalcResultShell } from "@/components/calc/question-flow";
import { useLanguage } from "@/lib/i18n";
import { formatNumber, monthlySavingNeeded } from "@/lib/calc/finance";


const UmrahPlanningForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const { lang } = useLanguage();
    const L = (id: string, en: string) => (lang === "en" ? en : id);
    const fmt = (value: number | string) => formatNumber(value, lang);
    const [isResultReady, setIsResultReady] = useState(false);
    const [answers, setAnswers] = useState<Record<number, any>>({
        1: null, // years until umroh
        2: null, // current package cost
        3: null, // number of people
        4: null, // current savings
        5: null, // return rate
    });

    const questions = [
        {
            id: 1,
            text: L("Berapa lama lagi kamu ingin pergi umroh?", "How many years from now do you want to go on umrah?"),
            subtext: L("Contoh: kalau kamu ingin pergi 2 tahun lagi, isi kolom di bawah dengan angka 2", "Example: if you want to go in 2 years, enter 2 in the field below"),
            type: "number",
            suffix: L("tahun", "years")
        },
        {
            id: 2,
            text: L("Berapa perkiraan biaya paket umroh PER ORANG saat ini?", "What is the estimated umrah package cost PER PERSON today?"),
            subtext: L("Perkiraan total biaya termasuk visa, transportasi, akomodasi, dan kebutuhan ibadah. Paket Umroh dengan travel Aji Maju Wisata dari @_SemogaSegeraUmroh_ dimulai dari 30 juta rupiah per orang", "Estimated total cost, including visa, transport, accommodation and worship needs. Umrah packages with the travel agent Aji Maju Wisata from @_SemogaSegeraUmroh_ start from 30 million rupiah per person"),
            type: "currency",
            prefix: "Rp",
        },
        {
            id: 3,
            text: L("Berapa jumlah orang yang akan pergi umroh?", "How many people are going on umrah?"),
            subtext: L("Jumlah orang yang akan ikut dalam perjalanan ibadah ini", "The number of people joining this pilgrimage"),
            type: "number",
            suffix: L("orang", "people"),
        },
        {
            id: 4,
            text: L("Berapa dana umroh yang sudah kamu kumpulkan?", "How much have you saved for umrah so far?"),
            subtext: L("Jumlah tabungan yang sudah kamu siapkan khusus untuk ibadah umroh. Jika belum sama sekali, masukkan 0.", "Savings you have set aside just for umrah. If you have none yet, enter 0."),
            type: "currency",
            prefix: "Rp",
        },
        {
            id: 5,
            text: L("Kamu akan investasi di produk yang return-nya?", "What return does the product you will invest in have?"),
            subtext: L("Dengan asumsi kamu akan menaruh uang tabunganmu pada instrumen investasi. Sebagai gambaran: untuk profil risiko konservatif, kamu cocok investasi di reksa dana pasar uang atau obligasi dengan return rata-rata 6% per tahun. Untuk profil risiko moderat, kamu cocok berinvestasi di obligasi atau reksa dana campuran dengan return rata-rata 10% per tahun. Untuk profil risiko agresif, kamu cocok berinvestasi di saham atau reksa dana saham dengan return rata-rata 15% per tahun.", "This assumes you put your savings in an investment product. As a guide: with a conservative risk profile, money market or bond mutual funds suit you, with an average return of 6% a year. With a moderate risk profile, bonds or balanced mutual funds suit you, with an average return of 10% a year. With an aggressive risk profile, stocks or equity mutual funds suit you, with an average return of 15% a year."),
            type: "number",
            suffix: L("% / tahun", "% / year"),
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

    // Calculate umroh planning results
    const calculateResults = () => {
        const yearsUntilUmrah = Number(answers[1]);
        const currentPackageCost = Number(answers[2]);
        const numberOfPeople = Number(answers[3]);
        const currentSavings = Number(answers[4]);

        const inflationRate = Number("5.7") / 100;
        const returnRate = Number(answers[5]) / 100;

        // Calculate future package cost with inflation
        const futurePackageCost = currentPackageCost * Math.pow(1 + inflationRate, yearsUntilUmrah);

        // Calculate total cost for all people
        const totalCurrentCost = currentPackageCost * numberOfPeople;
        const totalFutureCost = futurePackageCost * numberOfPeople;

        // Calculate future value of current savings
        const totalProjectedSavings = currentSavings * Math.pow(1 + returnRate, yearsUntilUmrah);

        // Calculate if savings will meet the target
        const isTargetMet = totalProjectedSavings >= totalFutureCost;

        const futureAmountToSave = Math.max(0, totalFutureCost - totalProjectedSavings);
        const totalAmountToSaveMonthly = monthlySavingNeeded(futureAmountToSave, returnRate, yearsUntilUmrah);

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
                    title={L("Perhitungan Rencana Umroh", "Umrah Plan Calculation")}
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
                <CalcResultShell href={"/"} title={L("Perhitungan Rencana Umroh", "Umrah Plan Calculation")} totalSteps={totalSteps}>
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
                            <h3 className="text-3xl mb-6">{L("Hasil Perhitungan Dana Umroh", "Umrah Fund Result")}</h3>

                            {/* Cost Analysis */}
                            <div className="bg-[#1E2432] rounded-lg p-4 mb-4">
                                <h4 className="text-2xl mb-4">{L("Analisis Biaya", "Cost Analysis")}</h4>
                                <div className="space-y-2">
                                    {isResultReady && (() => {
                                        const results = calculateResults();
                                        return (
                                            <>
                                                <div className="flex justify-between">
                                                    <span>{L("Biaya per orang (saat ini)", "Cost per person (today)")}</span>
                                                    <span>{`Rp${fmt(Math.round(results.currentCostPerPerson))}`}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>{L(`Proyeksi biaya per orang (${answers[1]} tahun lagi)`, `Projected cost per person (in ${answers[1]} ${Number(answers[1]) === 1 ? "year" : "years"})`)}</span>
                                                    <span>{`Rp${fmt(Math.round(results.futureCostPerPerson))}`}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>{L(`Total biaya untuk ${answers[3]} orang (saat ini)`, `Total cost for ${answers[3]} ${Number(answers[3]) === 1 ? "person" : "people"} (today)`)}</span>
                                                    <span>{`Rp${fmt(Math.round(results.totalCurrentCost))}`}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>{L(`Proyeksi total biaya untuk ${answers[3]} orang (${answers[1]} tahun lagi)`, `Projected total cost for ${answers[3]} ${Number(answers[3]) === 1 ? "person" : "people"} (in ${answers[1]} ${Number(answers[1]) === 1 ? "year" : "years"})`)}</span>
                                                    <span>{`Rp${fmt(Math.round(results.totalFutureCost))}`}</span>
                                                </div>
                                            </>
                                        );
                                    })()}
                                </div>
                            </div>

                            {/* Savings Progress */}
                            <div className="bg-[#3A4356] rounded-lg p-4 mb-4">
                                <h4 className="text-2xl mb-4">{L("Progres Tabungan", "Savings Progress")}</h4>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span>{L("Dana yang sudah terkumpul", "Funds saved so far")}</span>
                                        <span>{`Rp${fmt(answers[4])}`}</span>
                                    </div>
                                    {isResultReady && (() => {
                                        const results = calculateResults();
                                        return (
                                            <>
                                                <div className="flex justify-between">
                                                    <span>{L(`Proyeksi nilai dana terkumpul ${answers[1]} tahun lagi`, `Projected value of your savings in ${answers[1]} ${Number(answers[1]) === 1 ? "year" : "years"}`)}</span>
                                                    <span>{`Rp${fmt(Math.round(results.totalProjectedSavings))}`}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>{L("Selisih dengan target", "Gap to target")}</span>
                                                    <span className={results.isTargetMet ? "text-green-400" : "text-red-400"}>
                                                        {results.isTargetMet
                                                            ? L("Dana Mencukupi", "Fully funded")
                                                            : `Rp${fmt(Math.round(results.gapToTarget))}`}
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
                                        <h4 className="text-2xl mb-4">{L("Rekomendasi", "Recommendation")}</h4>
                                        <div className="space-y-2">
                                            <div className="flex justify-between">
                                                <span>{L(`Total uang yang harus ditabung hingga ${answers[1]} tahun lagi`, `Total amount to save over the next ${answers[1]} ${Number(answers[1]) === 1 ? "year" : "years"}`)}</span>
                                                <span>{`Rp${fmt(Math.round(results.futureAmountToSave))}`}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>{L("Total uang yang harus ditabung setiap akhir bulan (mulai bulan ini)", "Amount to save at the end of each month (starting this month)")}</span>
                                                <span>{`Rp${fmt(Math.round(results.totalAmountToSaveMonthly))}`}</span>
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
                                {L("Kembali ke pertanyaan sebelumnya", "Back to the previous question")}
                            </button>
                        </div>
                    </div>
                </CalcResultShell>
            )}
        </div>
    );
};

export default UmrahPlanningForm;