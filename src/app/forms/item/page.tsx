"use client";

import React, { useEffect, useState } from "react";
import CalcQuestionFlow, { CalcResultShell } from "@/components/calc/question-flow";
import { useLanguage } from "@/lib/i18n";
import { formatNumber, monthlySavingNeeded } from "@/lib/calc/finance";

const ItemPurchaseForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const { lang } = useLanguage();
    const L = (id: string, en: string) => (lang === "en" ? en : id);
    const fmt = (value: number | string) => formatNumber(value, lang);
    const [isResultReady, setIsResultReady] = useState(false);
    const [answers, setAnswers] = useState<Record<number, any>>({
        1: null, // years until purchase
        2: null, // current item price
        3: null, // current savings
    });

    const questions = [
        {
            id: 1,
            text: L("Berapa lama lagi kamu ingin membeli barang impianmu?", "How many years from now do you want to buy your dream item?"),
            subtext: L("Contoh: saat ini tahun 2022, dan kamu ingin membeli barang pada tahun 2023, berarti 2023 - 2022 = 1 tahun. Berarti kolom di bawah diisi dengan angka 1", "Example: it is 2022 now and you want to buy the item in 2023, so 2023 - 2022 = 1 year. Enter 1 in the field below"),
            type: "number",
            suffix: L("tahun", "years")
        },
        {
            id: 2,
            text: L("Berapa harga barang impianmu saat ini?", "How much does your dream item cost today?"),
            subtext: L("Harga barang impianmu saat kamu mengisi form ini", "The price of your dream item as you fill in this form"),
            type: "currency",
            prefix: "Rp",
        },
        {
            id: 3,
            text: L("Berapa uang yang kamu miliki saat ini untuk membeli barang tersebut?", "How much money do you have now for buying this item?"),
            subtext: L("Berapa banyak jumlah tabunganmu yang kamu sudah pisahkan hanya untuk beli barang ini.", "How much of your savings you have already set aside just for this item."),
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

    // Calculate vehicle purchase results
    const calculateResults = () => {
        const yearsUntilPurchase = Number(answers[1]);
        const currentPrice = Number(answers[2]);
        const currentSavings = Number(answers[3]);

        const inflationRate = Number("4") / 100;
        const returnRate = Number("6") / 100;

        // Calculate future vehicle price with inflation
        const futurePrice = currentPrice * Math.pow(1 + inflationRate, yearsUntilPurchase);

        // Calculate loan amount needed
        const loanAmount = futurePrice;

        // Calculate future value of current savings
        const totalProjectedSavings = currentSavings * Math.pow(1 + returnRate, yearsUntilPurchase);

        // Calculate total amount you need to save each month to be able to purchase
        const futureAmountToSave = Math.max(0, futurePrice - totalProjectedSavings);
        const totalAmountToSaveMonthly = monthlySavingNeeded(futureAmountToSave, returnRate, yearsUntilPurchase);

        return {
            futurePrice,
            loanAmount,
            totalProjectedSavings,
            futureAmountToSave,
            totalAmountToSaveMonthly,
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
                    title={L("Perencanaan Pembelian Barang", "Item Purchase Planning")}
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
                <CalcResultShell href={"/"} title={L("Perencanaan Pembelian Barang", "Item Purchase Planning")} totalSteps={totalSteps}>
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
                            <h3 className="text-3xl mb-6">{L("Hasil Perhitungan Dana Barang", "Item Fund Result")}</h3>

                            {/* Vehicle Cost Analysis */}
                            <div className="bg-[#1E2432] rounded-lg p-4 mb-4">
                                <h4 className="text-2xl mb-4">{L("Analisis Biaya Barang", "Item Cost Analysis")}</h4>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span>{L("Harga barang saat ini", "Item price today")}</span>
                                        <span>{`Rp${fmt(answers[2])}`}</span>
                                    </div>
                                    <br/>
                                    {isResultReady && (() => {
                                        const results = calculateResults();
                                        return (
                                            <>
                                                <div className="flex justify-between">
                                                    <span>{L(`Proyeksi harga barang ${answers[1]} tahun lagi`, `Projected item price in ${answers[1]} ${Number(answers[1]) === 1 ? "year" : "years"}`)}</span>
                                                    <span>{`Rp${fmt(Math.round(results.futurePrice))}`}</span>
                                                </div>
                                                <div className="flex justify-between ">
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
                                    {isResultReady && (() => {
                                        const results = calculateResults();
                                        return (
                                            <>
                                                <div className="flex justify-between">
                                                    <span>{L("Dana yang sudah terkumpul", "Funds saved so far")}</span>
                                                    <span>{`Rp${fmt(answers[3])}`}</span>
                                                </div>
                                                <br/>
                                                <div className="flex justify-between">
                                                    <span>{L(`Proyeksi nilai dana yang sudah terkumpul ${answers[1]} tahun lagi`, `Projected value of your savings in ${answers[1]} ${Number(answers[1]) === 1 ? "year" : "years"}`)}</span>
                                                    <span>{`Rp${fmt(Math.round(results.totalProjectedSavings))}`}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="italic"><b>{L("(Asumsi: Imbal Balik Investasi = 6% / tahun)", "(Assumption: investment return = 6% / year)")}</b></span>
                                                    <span></span>
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

export default ItemPurchaseForm;