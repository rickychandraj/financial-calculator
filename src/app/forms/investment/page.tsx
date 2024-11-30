"use client";

import React, {useEffect, useState} from "react";
import FormHeader from "@/components/ui/form-header";
import FormQuestionCards from "@/components/ui/form-question-card";


const InvestmentForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isResultReady, setIsResultReady] = useState(false);
    const [answers, setAnswers] = useState({
        1: null, // target amount
        2: null, // time period
        3: null, // current savings
        4: null, // saving frequency
        5: null, // saving timing
        6: null, // periodic investment amount
        7: "10", // default return rate
    });

    const questions = [
        {
            id: 1,
            text: "Jumlah uang yang ingin kamu capai",
            subtext: "Berapa banyak jumlah uang yang ingin kamu kumpulkan?",
            type: "currency",
            prefix: "Rp"
        },
        {
            id: 2,
            text: "Jumlah waktu untuk mengumpulkan uang tersebut",
            subtext: "Berapa lama waktu yang kamu inginkan untuk mencapai nominal targetmu?",
            type: "number",
            suffix: "tahun",
        },
        {
            id: 3,
            text: "Uang yang kamu miliki saat ini sebesar",
            subtext: "Jumlah uangmu saat ini yang kamu tabung khusus untuk target keuangan ini",
            type: "currency",
            prefix: "Rp",
        },
        {
            id: 4,
            text: "Kamu akan menabung setiap",
            type: "select",
            options: [
                { value: "yearly", display: "Tahun" },
                { value: "monthly", display: "Bulan" },
            ],
        },
        {
            id: 5,
            text: "Kamu akan menambahkan dana pada",
            type: "select",
            options: [
                { value: "begin", display: `Awal` },
                { value: "end", display: `Akhir` },
            ]
        },
        {
            id: 6,
            text: "Target investasimu setiap tahun sebesar",
            subtext: "Jumlah uang yang akan kamu tambahkan setiap periodenya. Contoh: kamu akan menambahkan dana setiap tahun pada awal tahun sebanyak 30 Juta. Maka masukan angka 30.000.000 pada kolom di bawah",
            type: "currency",
            prefix: "Rp",
        },
        {
            id: 7,
            text: "Kamu akan investasi di produk yang returnnya",
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

    // Calculate financial results
    const calculateResults = () => {
        const targetAmount = Number(answers[1]);
        const years = Number(answers[2]);
        const initialAmount = Number(answers[3]);
        const frequency = answers[4];
        const timing = answers[5];
        const periodicAmount = Number(answers[6]);
        const returnRate = Number(answers[7]) / 100;

        let totalAmount = initialAmount;
        const periodsPerYear = frequency === 'monthly' ? 12 : 1;
        const periodicReturn = returnRate / periodsPerYear;
        const totalPeriods = years * periodsPerYear;

        if (timing === 'begin') {
            totalAmount = initialAmount * Math.pow(1 + periodicReturn, totalPeriods) +
                periodicAmount * (Math.pow(1 + periodicReturn, totalPeriods) - 1) / periodicReturn * (1 + periodicReturn);
        } else {
            totalAmount = initialAmount * Math.pow(1 + periodicReturn, totalPeriods) +
                periodicAmount * (Math.pow(1 + periodicReturn, totalPeriods) - 1) / periodicReturn;
        }

        return {
            targetAmount,
            totalAmount,
            isTargetMet: totalAmount >= targetAmount
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
                        title={"Perencanaan Target Keuangan"}
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
                        title={"Perencanaan Target Keuangan"}
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
                                <h3 className="text-2xl mb-6">Hasil Perhitungan Target Keuangan</h3>

                                {/* Target Section */}
                                <div className="bg-[#1E2432] rounded-lg p-4 mb-4">
                                    <h4 className="text-xl mb-4">Target</h4>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span>Target Dana</span>
                                            <span>{`Rp${formatNumber(answers[1])}`}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Jangka Waktu</span>
                                            <span>{`${answers[2]} tahun`}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Investment Section */}
                                <div className="bg-[#3A4356] rounded-lg p-4 mb-4">
                                    <h4 className="text-xl mb-4">Investasi</h4>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span>Dana Awal</span>
                                            <span>{`Rp${formatNumber(answers[3])}`}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Periode Investasi</span>
                                            <span>{`${answers[4] === 'monthly' ? 'Bulanan' : 'Tahunan'} di ${answers[5] === 'begin' ? 'Awal' : 'Akhir'} periode`}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Nilai Investasi per Periode</span>
                                            <span>{`Rp${formatNumber(answers[6])}`}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Return Investasi</span>
                                            <span>{`${answers[7]}% per tahun`}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Results Section */}
                                {isResultReady && (
                                    <div className="bg-[#1E2432] rounded-lg p-4">
                                        <h4 className="text-xl mb-4">Hasil</h4>
                                        {(() => {
                                            const results = calculateResults();
                                            return (
                                                <div className="space-y-2">
                                                    <div className="flex justify-between">
                                                        <span>Total Dana Terkumpul</span>
                                                        <span>{`Rp${formatNumber(Math.round(results.totalAmount))}`}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>Status Target</span>
                                                        <span className={results.isTargetMet ? "text-green-400" : "text-red-400"}>
                                                            {results.isTargetMet ? "Target Tercapai" : "Target Belum Tercapai"}
                                                        </span>
                                                    </div>
                                                </div>
                                            );
                                        })()}
                                    </div>
                                )}
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

export default InvestmentForm;