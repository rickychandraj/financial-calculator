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

    const calculateKPR = () => {
        const propertyPrice = Number(answers[1]);
        const downPaymentPercentage = Number(answers[2]);
        const tenorYears = Number(answers[3]);
        const interestRate = Number(answers[4]) / 100;
        const monthlyIncome = Number(answers[5]);
        const otherInstallments = Number(answers[6] || 0);

        // Calculate loan details
        const downPaymentAmount = propertyPrice * (downPaymentPercentage / 100);
        const loanAmount = propertyPrice - downPaymentAmount;
        const monthlyInterestRate = interestRate / 12;
        const totalPayments = tenorYears * 12;

        // Calculate monthly payment using PMT formula
        const monthlyPayment = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) /
            (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

        // Calculate additional costs
        const provisionFee = loanAmount * 0.01; // 1% from loan amount
        const notaryFee = propertyPrice * 0.001; // Estimated 0.1% from property price
        const administrationFee = 2500000; // Fixed administration fee
        const totalAdditionalCosts = provisionFee + notaryFee + administrationFee;

        // Calculate debt burden ratio
        const totalMonthlyInstallments = monthlyPayment + otherInstallments;
        const debtBurdenRatio = (totalMonthlyInstallments / monthlyIncome) * 100;

        // Calculate total interest paid
        const totalAmount = monthlyPayment * totalPayments;
        const totalInterest = totalAmount - loanAmount;

        return {
            loanDetails: {
                propertyPrice,
                downPaymentAmount,
                loanAmount,
                tenor: tenorYears,
                interestRate: interestRate * 100
            },
            monthlyPayments: {
                installment: monthlyPayment,
                principalInstallment: monthlyPayment - (loanAmount * monthlyInterestRate),
                interestInstallment: loanAmount * monthlyInterestRate
            },
            totalPayments: {
                totalAmount,
                totalInterest
            },
            additionalCosts: {
                provisionFee,
                notaryFee,
                administrationFee,
                totalAdditionalCosts
            },
            affordabilityAnalysis: {
                monthlyIncome,
                totalMonthlyInstallments,
                debtBurdenRatio,
                isAffordable: debtBurdenRatio <= 30,
                remainingIncome: monthlyIncome - totalMonthlyInstallments
            }
        };
    };

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
                        title={"Simulasi KPR"}
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
                        title={"Simulasi KPR"}
                        currentStep={totalSteps}
                        totalSteps={totalSteps}
                    />
                    <div className="p-6">
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <div
                                className="relative p-8 rounded-2xl bg-gradient-to-br transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl text-white overflow-hidden mb-8"
                                style={{
                                    background: "linear-gradient(135deg, #252E64 50%, #12174F 100%)"
                                }}
                            >
                                <div className="blur-[8px] pointer-events-none">
                                    {isResultReady && (() => {
                                        const results = calculateKPR();
                                        return (
                                            <>
                                                {/* Loan Summary */}
                                                <div className="bg-[#1E2432] rounded-lg p-4 mb-4">
                                                    <h4 className="text-xl mb-4">Ringkasan KPR</h4>
                                                    <div className="space-y-2">
                                                        <div className="flex justify-between">
                                                            <span>Harga Properti</span>
                                                            <span>Rp XXXXXXXX</span>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <span>Down Payment</span>
                                                            <span>Rp XXXXXXXX</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Monthly Payments */}
                                                <div className="bg-[#3A4356] rounded-lg p-4 mb-4">
                                                    <h4 className="text-xl mb-4">Cicilan per Bulan</h4>
                                                    <div className="space-y-2">
                                                        <div className="flex justify-between">
                                                            <span>Total Cicilan</span>
                                                            <span>Rp XXXXXXXX</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Additional Costs */}
                                                <div className="bg-[#1E2432] rounded-lg p-4">
                                                    <h4 className="text-xl mb-4">Biaya Tambahan</h4>
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
                                </div>

                                {/* Overlay with CTA */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 rounded-2xl">
                                    <p className="text-center text-white text-lg mb-6 px-4">
                                        Lihat hasil simulasi KPR lengkap dan analisis kemampuan finansialmu
                                    </p>
                                    <a
                                        href="/kpr-results"
                                        className="bg-[#A51246] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#8A0F3D] transition-colors"
                                    >
                                        Lihat Hasil Lengkap
                                    </a>
                                </div>
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

export default KPRSimulationForm;