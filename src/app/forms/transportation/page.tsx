"use client";

import React, { useEffect, useState } from "react";
import FormHeader from "@/components/ui/form-header";
import FormQuestionCards from "@/components/ui/form-question-card";

const VehiclePurchaseForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [vehicleStrategy, setVehicleStrategy] = useState(null);
    const [isResultReady, setIsResultReady] = useState(false);
    const [answers, setAnswers] = useState({
        1: null, // years until purchase
        2: null, // current vehicle price
        3: null, // down payment percentage
        4: "5", // default inflation rate
        5: null, // current savings
        6: null, // monthly investment
        7: "10", // default investment return
    });

    const questions = [
        {
            id: 1,
            text: "Berapa lama lagi kamu ingin membeli kendaraan impianmu?",
            subtext: "Contoh: saat ini tahun 2022, dan kamu ingin membeli kendaraan pada tahun 2027, berarti 2027 - 2022 = 5 tahun. Berarti kolom di bawah diisi dengan angka 5",
            type: "number",
            suffix: "tahun"
        },
        {
            id: 2,
            text: "Berapa harga kendaraan impianmu saat ini?",
            subtext: "Harga kendaraan impianmu saat kamu mengisi form ini",
            type: "currency",
            prefix: "Rp",
        },
        {
            id: 3,
            text: "Berapa besar %DP (Down Payment) yang ingin kamu bayarkan?",
            subtext: "Kalau kamu berencana membeli rumah dengan sistem KKB, maka ada biaya awal yang harus kamu bayarkan, besaran DP biasanya berkisar antara 10-50%. Kalau kamu berencana membeli rumah secara cash, isi kolom di bawah dengan angka 100",
            type: "number",
            suffix: "%",
        },
        {
            id: 4,
            text: "Asumsi inflasi kendaraan adalah",
            subtext: "Inflasi dapat diartikan sebagai kenaikan harga barang dan jasa secara umum dan terus menerus dalam jangka waktu tertentu",
            type: "number",
            suffix: "% / tahun",
        },
        {
            id: 5,
            text: "Berapa uang yang kamu miliki saat ini untuk membeli kendaraan tersebut?",
            subtext: "Berapa banyak jumlah tabunganmu yang kamu sudah pisahkan hanya untuk beli kendaraan ini.",
            type: "currency",
            prefix: "Rp",
        },
        {
            id: 6,
            text: "Target investasimu setiap bulan sebesar",
            subtext: "Berapa banyak jumlah uang yang akan kamu tabung setiap bulannya untuk membeli kendaraan ini.",
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

    // Calculate vehicle purchase results
    const calculateResults = () => {
        const yearsUntilPurchase = parseFloat(answers[1]);
        const currentPrice = parseFloat(answers[2]);
        const downPaymentPercentage = parseFloat(answers[3]) / 100;
        const inflationRate = parseFloat(answers[4]) / 100;
        const currentSavings = parseFloat(answers[5]);
        const monthlyInvestment = parseFloat(answers[6]);
        const returnRate = parseFloat(answers[7]) / 100;

        // Calculate future vehicle price with inflation
        const futurePrice = currentPrice * Math.pow(1 + inflationRate, yearsUntilPurchase);

        // Calculate required down payment
        const requiredDownPayment = futurePrice * downPaymentPercentage;

        // Calculate loan amount needed
        const loanAmount = futurePrice - requiredDownPayment;

        // Calculate future value of current savings
        const futureSavings = currentSavings * Math.pow(1 + returnRate, yearsUntilPurchase);

        // Calculate future value of monthly investments
        const monthlyReturn = returnRate / 12;
        const months = yearsUntilPurchase * 12;
        const futureInvestments = monthlyInvestment * ((Math.pow(1 + monthlyReturn, months) - 1) / monthlyReturn);

        const totalProjectedSavings = futureSavings + futureInvestments;

        // Calculate if savings will meet down payment
        const isDownPaymentMet = totalProjectedSavings >= requiredDownPayment;

        // Calculate additional monthly investment needed if there's a gap
        let additionalMonthlyNeeded = 0;
        if (!isDownPaymentMet) {
            const gap = requiredDownPayment - totalProjectedSavings;
            additionalMonthlyNeeded = gap * (monthlyReturn) / (Math.pow(1 + monthlyReturn, months) - 1);
        }

        return {
            futurePrice,
            requiredDownPayment,
            loanAmount,
            totalProjectedSavings,
            isDownPaymentMet,
            additionalMonthlyNeeded,
            gap: Math.max(0, requiredDownPayment - totalProjectedSavings)
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
                        title={"Perencanaan Pembelian Kendaraan"}
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
                        title={"Perencanaan Pembelian Kendaraan"}
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
                                <h3 className="text-2xl mb-6">Hasil Perhitungan Dana Kendaraan</h3>

                                {/* Vehicle Cost Analysis */}
                                <div className="bg-[#1E2432] rounded-lg p-4 mb-4">
                                    <h4 className="text-xl mb-4">Analisis Biaya Kendaraan</h4>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span>Harga Kendaraan Saat Ini</span>
                                            <span>{`Rp${formatNumber(answers[2])}`}</span>
                                        </div>
                                        {isResultReady && (() => {
                                            const results = calculateResults();
                                            return (
                                                <>
                                                    <div className="flex justify-between">
                                                        <span>Proyeksi Harga Kendaraan</span>
                                                        <span>{`Rp${formatNumber(Math.round(results.futurePrice))}`}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Down Payment yang Dibutuhkan</span>
                                                        <span>{`Rp${formatNumber(Math.round(results.requiredDownPayment))}`}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Jumlah KKB yang Dibutuhkan</span>
                                                        <span>{`Rp${formatNumber(Math.round(results.loanAmount))}`}</span>
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
                                            <span>Target Investasi Bulanan</span>
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
                                                        <span>Gap dengan Target DP</span>
                                                        <span className={results.isDownPaymentMet ? "text-green-400" : "text-red-400"}>
                                                            {results.isDownPaymentMet
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
                                                    <span className={results.isDownPaymentMet ? "text-green-400" : "text-red-400"}>
                                                        {results.isDownPaymentMet
                                                            ? "Target Tercapai"
                                                            : "Target Belum Tercapai"}
                                                    </span>
                                                </div>
                                                {!results.isDownPaymentMet && (
                                                    <div className="flex justify-between">
                                                        <span>Tambahan Investasi Bulanan yang Diperlukan</span>
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

export default VehiclePurchaseForm;