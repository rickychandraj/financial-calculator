"use client";

import React, { useEffect, useState } from "react";
import FormHeader from "@/components/ui/form-header";
import FormQuestionCards from "@/components/ui/form-question-card";

const ItemPurchaseForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isResultReady, setIsResultReady] = useState(false);
    const [answers, setAnswers] = useState({
        1: null, // years until purchase
        2: null, // current item price
        3: null, // current savings
    });

    const questions = [
        {
            id: 1,
            text: "Berapa lama lagi kamu ingin membeli barang impianmu?",
            subtext: "Contoh: saat ini tahun 2022, dan kamu ingin membeli barang pada tahun 2023, berarti 2023 - 2022 = 1 tahun. Berarti kolom di bawah diisi dengan angka 1",
            type: "number",
            suffix: "tahun"
        },
        {
            id: 2,
            text: "Berapa harga barang impianmu saat ini?",
            subtext: "Harga barang impianmu saat kamu mengisi form ini",
            type: "currency",
            prefix: "Rp",
        },
        {
            id: 3,
            text: "Berapa uang yang kamu miliki saat ini untuk membeli barang tersebut?",
            subtext: "Berapa banyak jumlah tabunganmu yang kamu sudah pisahkan hanya untuk beli barang ini.",
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
        const monthlyReturnRate = returnRate / 12;

        // Calculate future vehicle price with inflation
        const futurePrice = currentPrice * Math.pow(1 + inflationRate, yearsUntilPurchase);

        // Calculate loan amount needed
        const loanAmount = futurePrice;

        // Calculate future value of current savings
        const totalProjectedSavings = currentSavings * Math.pow(1 + returnRate, yearsUntilPurchase);

        // Calculate total amount you need to save each month to be able to purchase
        const futureAmountToSave = (futurePrice - totalProjectedSavings)
        const totalAmountToSaveMonthly = (futureAmountToSave * monthlyReturnRate) / ((Math.pow(1 + monthlyReturnRate, yearsUntilPurchase * 12) - 1))

        return {
            futurePrice,
            loanAmount,
            totalProjectedSavings,
            futureAmountToSave,
            totalAmountToSaveMonthly,
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
                        title={"Perencanaan Pembelian Barang"}
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
                        title={"Perencanaan Pembelian Barang"}
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
                            <h3 className="text-3xl mb-6">Hasil Perhitungan Dana Barang</h3>

                            {/* Vehicle Cost Analysis */}
                            <div className="bg-[#1E2432] rounded-lg p-4 mb-4">
                                <h4 className="text-2xl mb-4">Analisis Biaya Barang</h4>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span>Harga barang saat ini</span>
                                        <span>{`Rp${formatNumber(answers[2])}`}</span>
                                    </div>
                                    {isResultReady && (() => {
                                        const results = calculateResults();
                                        return (
                                            <>
                                                <div className="flex justify-between">
                                                    <span>Proyeksi harga barang {answers[1]} tahun lagi</span>
                                                    <span>{`Rp${formatNumber(Math.round(results.futurePrice))}`}</span>
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
                                    {isResultReady && (() => {
                                        const results = calculateResults();
                                        return (
                                            <>
                                                <div className="flex justify-between">
                                                    <span>Dana yang sudah terkumpul</span>
                                                    <span>{`Rp${formatNumber(answers[3])}`}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Proyeksi nilai dana yang sudah terkumpul {answers[1]} tahun lagi</span>
                                                    <span>{`Rp${formatNumber(Math.round(results.totalProjectedSavings))}`}</span>
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

export default ItemPurchaseForm;