"use client";

import React, { useEffect, useState } from "react";
import CalcQuestionFlow, { CalcResultShell } from "@/components/calc/question-flow";
import { useLanguage } from "@/lib/i18n";
import { formatNumber, monthlySavingNeeded } from "@/lib/calc/finance";


const HolidayPlanningForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const { lang } = useLanguage();
    const L = (id: string, en: string) => (lang === "en" ? en : id);
    const fmt = (value: number | string) => formatNumber(value, lang);
    const [isResultReady, setIsResultReady] = useState(false);
    const [answers, setAnswers] = useState<Record<number, any>>({
        1: null, // years until holiday
        2: null, // current trip cost
        3: null, // number of people
        4: null, // current savings
    });

    const questions = [
        {
            id: 1,
            text: L("Berapa lama lagi kamu ingin pergi liburan?", "How many years from now do you want to go on holiday?"),
            subtext: L("Contoh: saat ini tahun 2024, dan kamu ingin pergi pada tahun 2026, berarti 2026 - 2024 = 2 tahun. Berarti kolom di bawah diisi dengan angka 2", "Example: it is 2024 now and you want to go in 2026, so 2026 - 2024 = 2 years. Enter 2 in the field below"),
            type: "number",
            suffix: L("tahun", "years")
        },
        {
            id: 2,
            text: L("Berapa perkiraan biaya liburan PER ORANG saat ini?", "What is the estimated holiday cost PER PERSON today?"),
            subtext: L("Perkiraan total biaya termasuk transportasi, akomodasi, konsumsi, tiket wisata, dll", "Estimated total cost, including transport, accommodation, food, attraction tickets, etc."),
            type: "currency",
            prefix: "Rp",
        },
        {
            id: 3,
            text: L("Berapa jumlah orang yang akan berlibur?", "How many people are going on the holiday?"),
            subtext: L("Jumlah orang yang akan ikut dalam perjalanan liburan ini", "The number of people joining this trip"),
            type: "number",
            suffix: L("orang", "people"),
        },
        {
            id: 4,
            text: L("Berapa dana liburan yang sudah kamu kumpulkan?", "How much have you saved for this holiday so far?"),
            subtext: L("Jumlah tabungan yang sudah kamu siapkan khusus untuk liburan ini", "Savings you have set aside just for this holiday"),
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

    // Calculate holiday planning results
    const calculateResults = () => {
        const yearsUntilHoliday = Number(answers[1]);
        const currentTripCost = Number(answers[2]);
        const numberOfPeople = Number(answers[3]);
        const currentSavings = Number(answers[4]);

        const inflationRate = Number("4") / 100;
        const returnRate = Number("6") / 100;

        // Calculate future trip cost with inflation
        const futureTripCost = currentTripCost * Math.pow(1 + inflationRate, yearsUntilHoliday);

        // Calculate total cost for all people
        const totalCurrentCost = currentTripCost * numberOfPeople;
        const totalFutureCost = futureTripCost * numberOfPeople;

        // Calculate future value of current savings
        const totalProjectedSavings = currentSavings * Math.pow(1 + returnRate, yearsUntilHoliday);

        // Calculate if savings will meet the target
        const isTargetMet = totalProjectedSavings >= totalFutureCost;

        const futureAmountToSave = Math.max(0, totalFutureCost - totalProjectedSavings);
        const totalAmountToSaveMonthly = monthlySavingNeeded(futureAmountToSave, returnRate, yearsUntilHoliday);

        return {
            currentCostPerPerson: currentTripCost,
            futureCostPerPerson: futureTripCost,
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
                    title={L("Perencanaan Dana Liburan", "Holiday Fund Planning")}
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
                <CalcResultShell href={"/"} title={L("Perencanaan Dana Liburan", "Holiday Fund Planning")} totalSteps={totalSteps}>
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
                            <h3 className="text-3xl mb-6">{L("Hasil Perhitungan Dana Liburan", "Holiday Fund Result")}</h3>

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
                                                <br/>
                                                <div className="flex justify-between">
                                                    <span>{L(`Proyeksi biaya per orang (${answers[1]} tahun lagi)`, `Projected cost per person (in ${answers[1]} ${Number(answers[1]) === 1 ? "year" : "years"})`)}</span>
                                                    <span>{`Rp${fmt(Math.round(results.futureCostPerPerson))}`}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="italic"><b>{L("(Asumsi: Tingkat Inflasi = 4% / tahun)", "(Assumption: inflation rate = 4% / year)")}</b></span>
                                                    <span></span>
                                                </div>
                                                <br/>
                                                <div className="flex justify-between">
                                                    <span>{L(`Total biaya untuk ${answers[3]} orang (saat ini)`, `Total cost for ${answers[3]} ${Number(answers[3]) === 1 ? "person" : "people"} (today)`)}</span>
                                                    <span>{`Rp${fmt(Math.round(results.totalCurrentCost))}`}</span>
                                                </div>
                                                <br/>
                                                <div className="flex justify-between">
                                                    <span>{L(`Proyeksi total biaya untuk ${answers[3]} orang (${answers[1]} tahun lagi)`, `Projected total cost for ${answers[3]} ${Number(answers[3]) === 1 ? "person" : "people"} (in ${answers[1]} ${Number(answers[1]) === 1 ? "year" : "years"})`)}</span>
                                                    <span>{`Rp${fmt(Math.round(results.totalFutureCost))}`}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="italic"><b>{L("(Asumsi: Tingkat Inflasi = 4% / tahun)", "(Assumption: inflation rate = 4% / year)")}</b></span>
                                                    <span></span>
                                                </div>
                                            </>
                                        );
                                    })()}
                                </div>
                            </div>

                            {/* Savings Progress */}
                            <div className="bg-[#3A4356] rounded-lg p-4 mb-4">
                                <h4 className="text-2xl mb-4">{L("Progress Tabungan", "Savings Progress")}</h4>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span>{L("Dana yang sudah terkumpul", "Funds saved so far")}</span>
                                        <span>{`Rp${fmt(answers[4])}`}</span>
                                    </div>
                                    <br/>
                                    {isResultReady && (() => {
                                        const results = calculateResults();
                                        return (
                                            <>
                                                <div className="flex justify-between">
                                                    <span>{L(`Proyeksi nilai dana terkumpul ${answers[1]} tahun lagi`, `Projected value of your savings in ${answers[1]} ${Number(answers[1]) === 1 ? "year" : "years"}`)}</span>
                                                    <span>{`Rp${fmt(Math.round(results.totalProjectedSavings))}`}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="italic"><b>{L("(Asumsi: Imbal Balik Investasi = 6% / tahun)", "(Assumption: investment return = 6% / year)")}</b></span>
                                                    <span></span>
                                                </div>
                                                <br/>
                                                <div className="flex justify-between">
                                                    <span>{L("Gap dengan target", "Gap to target")}</span>
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
                                            <br/>
                                            <div className="flex justify-between">
                                                <span>{L("Total uang yang harus ditabung setiap akhir bulan (per bulan ini)", "Amount to save at the end of each month (starting this month)")}</span>
                                                <span>{`Rp${fmt(Math.round(results.totalAmountToSaveMonthly))}`}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="italic"><b>{L("(Asumsi: Imbal Balik Investasi = 6% / tahun)", "(Assumption: investment return = 6% / year)")}</b></span>
                                                <span></span>
                                            </div>
                                            <br/>
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

export default HolidayPlanningForm;