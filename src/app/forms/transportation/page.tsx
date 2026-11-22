"use client";

import React, { useEffect, useState } from "react";
import CalcQuestionFlow, { CalcResultShell } from "@/components/calc/question-flow";
import { useLanguage } from "@/lib/i18n";
import { formatNumber, monthlySavingNeeded } from "@/lib/calc/finance";

const VehiclePurchaseForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const { lang } = useLanguage();
    const L = (id: string, en: string) => (lang === "en" ? en : id);
    const fmt = (value: number | string) => formatNumber(value, lang);
    const [isResultReady, setIsResultReady] = useState(false);
    const [answers, setAnswers] = useState<Record<number, any>>({
        1: null, // years until purchase
        2: null, // current vehicle price
        3: null, // down payment percentage
        4: null, // current savings
    });

    const questions = [
        {
            id: 1,
            text: L("Berapa lama lagi kamu ingin membeli kendaraan impianmu?", "How many years from now do you want to buy your dream vehicle?"),
            subtext: L("Contoh: kalau kamu ingin membeli kendaraan 5 tahun lagi, isi kolom di bawah dengan angka 5", "Example: if you want to buy the vehicle in 5 years, enter 5 in the field below"),
            type: "number",
            suffix: L("tahun", "years")
        },
        {
            id: 2,
            text: L("Berapa harga kendaraan impianmu saat ini?", "How much does your dream vehicle cost today?"),
            subtext: L("Harga kendaraan impianmu saat kamu mengisi form ini", "The price of your dream vehicle as you fill in this form"),
            type: "currency",
            prefix: "Rp",
        },
        {
            id: 3,
            text: L("Berapa besar %DP (Down Payment) yang ingin kamu bayarkan?", "What down payment (DP) percentage do you want to pay?"),
            subtext: L("Kalau kamu berencana membeli kendaraan dengan sistem KKB, maka ada biaya awal yang harus kamu bayarkan, besaran DP biasanya berkisar antara 10-50%. Kalau kamu berencana membeli kendaraan secara cash, isi kolom di bawah dengan angka 100", "If you plan to buy the vehicle with a car loan (KKB), you pay an upfront amount first; the down payment is usually 10-50%. If you plan to pay in cash, enter 100 in the field below"),
            type: "number",
            suffix: "%",
        },
        {
            id: 4,
            text: L("Berapa uang yang kamu miliki saat ini untuk membeli kendaraan tersebut?", "How much money do you have now for buying this vehicle?"),
            subtext: L("Jumlah tabunganmu yang kamu sudah pisahkan saat ini untuk membeli kendaraan ini", "Savings you have already set aside for this vehicle"),
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
        const downPaymentPercentage = Number(answers[3]) / 100;
        const currentSavings = Number(answers[4]);

        const inflationRate = Number("4") / 100;
        const returnRate = Number("6") / 100;

        // Calculate future vehicle price with inflation
        const futurePrice = currentPrice * Math.pow(1 + inflationRate, yearsUntilPurchase);

        // Calculate required down payment
        const requiredDownPayment = futurePrice * downPaymentPercentage;

        // Calculate loan amount needed
        const loanAmount = futurePrice - requiredDownPayment;

        // Calculate future value of current savings
        const totalProjectedSavings = currentSavings * Math.pow(1 + returnRate, yearsUntilPurchase);

        // Calculate if savings will meet down payment
        const isDownPaymentMet = totalProjectedSavings >= requiredDownPayment;

        // The saving target is the down payment (same as the property DP calculator), not the full price
        const futureAmountToSave = Math.max(0, requiredDownPayment - totalProjectedSavings);
        const totalAmountToSaveMonthly = monthlySavingNeeded(futureAmountToSave, returnRate, yearsUntilPurchase);

        return {
            futurePrice,
            requiredDownPayment,
            loanAmount,
            totalProjectedSavings,
            isDownPaymentMet,
            futureAmountToSave,
            totalAmountToSaveMonthly,
            downPaymentGap: Math.max(0, requiredDownPayment - totalProjectedSavings)
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
                    title={L("Perencanaan Pembelian Kendaraan", "Vehicle Purchase Planning")}
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
                <CalcResultShell href={"/"} title={L("Perencanaan Pembelian Kendaraan", "Vehicle Purchase Planning")} totalSteps={totalSteps}>
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
                            <h3 className="text-3xl mb-6">{L("Hasil Perhitungan Dana Kendaraan", "Vehicle Fund Result")}</h3>

                            {/* Vehicle Cost Analysis */}
                            <div className="bg-[#1E2432] rounded-lg p-4 mb-4">
                                <h4 className="text-2xl mb-4">{L("Analisis Biaya Kendaraan", "Vehicle Cost Analysis")}</h4>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span>{L("Harga kendaraan saat ini", "Vehicle price today")}</span>
                                        <span>{`Rp${fmt(answers[2])}`}</span>
                                    </div>
                                    <br/>
                                    {isResultReady && (() => {
                                        const results = calculateResults();
                                        return (
                                            <>
                                                <div className="flex justify-between">
                                                    <span>{L(`Proyeksi harga kendaraan ${answers[1]} tahun lagi`, `Projected vehicle price in ${answers[1]} ${Number(answers[1]) === 1 ? "year" : "years"}`)}</span>
                                                    <span>{`Rp${fmt(Math.round(results.futurePrice))}`}</span>
                                                </div>
                                                <br/>
                                                <div className="flex justify-between">
                                                    <span>{L("Proyeksi total DP yang dibutuhkan", "Projected down payment needed")}</span>
                                                    <span>{`Rp${fmt(Math.round(results.requiredDownPayment))}`}</span>
                                                </div>
                                                <br/>
                                                <div className="flex justify-between">
                                                    <span>{L("Proyeksi sisa harga setelah DP (dibayar lewat kredit)", "Projected remaining amount (after the down payment)")}</span>
                                                    <span>{`Rp${fmt(Math.round(results.loanAmount))}`}</span>
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
                                <h4 className="text-2xl mb-4">{L("Progres Tabungan", "Savings Progress")}</h4>
                                <div className="space-y-2">
                                    {isResultReady && (() => {
                                        const results = calculateResults();
                                        return (
                                            <>
                                                <div className="flex justify-between">
                                                    <span>{L("Dana yang sudah terkumpul", "Funds saved so far")}</span>
                                                    <span>{`Rp${fmt(answers[4])}`}</span>
                                                </div>
                                                <br/>
                                                <div className="flex justify-between">
                                                    <span>{L(`Proyeksi nilai dana yang sudah terkumpul ${answers[1]} tahun lagi`, `Projected value of your savings in ${answers[1]} ${Number(answers[1]) === 1 ? "year" : "years"}`)}</span>
                                                    <span>{`Rp${fmt(Math.round(results.totalProjectedSavings))}`}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="italic"><b>{L("(Asumsi: Imbal Hasil Investasi = 6% / tahun)", "(Assumption: investment return = 6% / year)")}</b></span>
                                                    <span></span>
                                                </div>
                                                <br/>
                                                <div className="flex justify-between">
                                                    <span>{L("Selisih dengan target DP", "Gap to down payment target")}</span>
                                                    <span className={results.isDownPaymentMet ? "text-green-400" : "text-red-400"}>
                                                        {results.isDownPaymentMet
                                                            ? L("Dana Mencukupi", "Fully funded")
                                                            : `Rp${fmt(Math.round(results.downPaymentGap))}`}
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
                                                <span>{L("Total uang yang harus ditabung setiap akhir bulan (mulai bulan ini)", "Amount to save at the end of each month (starting this month)")}</span>
                                                <span>{`Rp${fmt(Math.round(results.totalAmountToSaveMonthly))}`}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="italic"><b>{L("(Asumsi: Imbal Hasil Investasi = 6% / tahun)", "(Assumption: investment return = 6% / year)")}</b></span>
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

export default VehiclePurchaseForm;