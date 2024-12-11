"use client";

import React, { useEffect, useState } from "react";
import FormHeader from "@/components/ui/form-header";
import FormQuestionCards from "@/components/ui/form-question-card";


const KPRSimulationForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isResultReady, setIsResultReady] = useState(false);
    const [answers, setAnswers] = useState({
        1: null, // property price
        2: null, // down payment percentage
        3: null, // tenor
        4: "10", // default interest rate
        5: null, // monthly income
        6: null, // other installments
    });

    const questions = [
        {
            id: 1,
            text: "Berapa harga properti yang ingin kamu beli?",
            subtext: "Masukkan harga properti sesuai yang tertera pada brosur atau info dari developer/penjual",
            type: "currency",
            prefix: "Rp"
        },
        {
            id: 2,
            text: "Berapa uang muka (DP) yang akan kamu bayarkan?",
            subtext: "Minimal DP untuk KPR adalah 10% dari harga properti",
            type: "number",
            suffix: "%"
        },
        {
            id: 3,
            text: "Berapa lama tenor KPR yang kamu inginkan?",
            subtext: "Semakin lama tenor, semakin kecil cicilan bulanan tapi total bunga yang dibayar akan lebih besar",
            type: "select",
            options: [
                {value: "5", display: "5 tahun"},
                {value: "10", display: "10 tahun"},
                {value: "15", display: "15 tahun"},
                {value: "20", display: "20 tahun"},
                {value: "25", display: "25 tahun"},
                {value: "30", display: "30 tahun"},
            ]
        },
        {
            id: 4,
            text: "Berapa perkiraan suku bunga KPR?",
            subtext: "Rata-rata suku bunga KPR saat ini berkisar 5-12% per tahun. Silakan cek suku bunga bank yang kamu tuju",
            type: "number",
            suffix: "% / tahun"
        },
        {
            id: 5,
            text: "Berapa penghasilan tetap kamu setiap bulan?",
            subtext: "Jumlah gaji atau pendapatan rutin bulanan sebelum dipotong pajak",
            type: "currency",
            prefix: "Rp",
            suffix: "/ bulan"
        },
        {
            id: 6,
            text: "Berapa total cicilan lain yang kamu bayar setiap bulan?",
            subtext: "Jumlah cicilan kartu kredit, pinjaman, atau cicilan lainnya. Isi 0 jika tidak ada",
            type: "currency",
            prefix: "Rp",
            suffix: "/ bulan"
        }
    ];

    const totalSteps = questions.length;

    const handleInputChange = (questionId, value) => {
        // Remove existing separators and validate input
        const numericValue = value.toString().replace(/,/g, "");

        // Check if it's a valid number
        if (numericValue === "" || /^\d*\.?\d*$/.test(numericValue)) {
            setAnswers(prev => ({
                ...prev,
                [questionId]: numericValue,
            }));
        }
    };

    const calculateResults = () => {
        const totalCostNeeded = Number(answers[1]);
        const downPaymentPercentage = Number(answers[2]) / 100;
        const totalYearsTenor = Number(answers[3]);
        const kprInterestRate = Number(answers[4]) / 100;
        const monthlyIncome = Number(answers[5]);
        const monthlyExpense = Number[answers[6]];
        const monthlySavings = Math.max(0, monthlyIncome - monthlyExpense);



        // Calculate required down payment
        const requiredDownPayment = totalCostNeeded * downPaymentPercentage;

        return {
            totalYearsTenor,
            totalCostNeeded,
            requiredDownPayment,
            monthlySavings,
        }
    }

    const handleGetResult = () => {
        setCurrentStep(prev => prev + 1);
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
                        title={"Perhitungan Simulasi KPR"}
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
                        title={"Perhitungan Simulasi KPR"}
                        currentStep={totalSteps}
                        totalSteps={totalSteps}
                    />
                    <div className="p-5">
                        <div
                            className="relative p-8 rounded-2xl bg-gradient-to-br transform text-white overflow-hidden mb-8"
                            style={{
                                background: "linear-gradient(135deg, #252E64 50%, #12174F 90%)"
                            }}
                        >
                            {isResultReady && (() => {
                                const results = calculateResults();
                                return (
                                    <>
                                        {/* Loan Summary */}
                                        <div className="bg-[#1E2432] rounded-lg p-4 mb-4">
                                            <h4 className="text-2xl mb-4">Ringkasan KPR</h4>
                                            <div className="space-y-2">
                                                <div className="flex justify-between">
                                                    <span>Harga properti</span>
                                                    <span>{`Rp ${formatNumber(results.totalCostNeeded)}`}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Total DP</span>
                                                    <span>{`Rp ${formatNumber(results.requiredDownPayment)}`}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Tenor pembayaran</span>
                                                    <span>{`${results.totalYearsTenor} tahun`}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Total uang yang bisa disimpan setiap tahun</span>
                                                    <span>{`${results.monthlySavings} / tahun`}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Monthly Payments */}
                                        <div className="bg-[#3A4356] rounded-lg p-4 mb-4">
                                            <h4 className="text-2xl mb-4">Progress Tabungan</h4>
                                            <div className="space-y-2">
                                                <div className="flex justify-between">
                                                    <span>Total Cicilan</span>
                                                    <span>Rp XXXXXXXX</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Additional Costs */}
                                        <div className="bg-[#1E2432] rounded-lg p-4">
                                            <h4 className="text-2xl mb-4">Biaya Tambahan</h4>
                                            <div className="space-y-2">
                                                <div className="flex justify-between">
                                                    <span>Total Biaya</span>
                                                    <span>Rp XXXXXXXX</span>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })()}

                            {/* Overlay with CTA */}
                            {/*<div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 rounded-2xl">*/}
                            {/*    <p className="text-center text-white text-lg mb-6 px-4">*/}
                            {/*        Lihat hasil simulasi KPR lengkap dan analisis kemampuan finansialmu*/}
                            {/*    </p>*/}
                            {/*    <a*/}
                            {/*        href="/kpr-results"*/}
                            {/*        className="bg-[#A51246] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#8A0F3D] transition-colors"*/}
                            {/*    >*/}
                            {/*        Lihat Hasil Lengkap*/}
                            {/*    </a>*/}
                            {/*</div>*/}
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

export default KPRSimulationForm;