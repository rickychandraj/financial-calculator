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
    });

    let questions = [
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
                {
                    value: "begin",
                    display: `Awal ${answers[4] == "yearly" ? "tahun" : answers[4] == "monthly" ? "bulan" : ""}`
                },
                {
                    value: "end",
                    display: `Akhir ${answers[4] == "yearly" ? "tahun" : answers[4] == "monthly" ? "bulan" : ""}`
                },
            ]
        },
        {
            id: 6,
            text: "Kamu akan investasi di produk yang returnnya?",
            subtext: "Dengan asumsi kamu akan menaruh uang tabunganmu pada instrumen investasi. Sebagai gambaran: untuk profil risiko konservatif, kamu cocok investasi di reksadana pasar uang atau obligasi dengan return rata-rata 6% per tahun. Untuk profil risiko moderat, kamu cocok berinvestasi di obligasi atau reksadana campuran dengan return rata-rata 10% per tahun. Untuk profil risiko agresif, kamu cocok berinvestasi di saham atau reksadana saham dengan return rata-rata 15% per tahun.",
            type: "number",
            suffix: "% / tahun",
        }
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
        const yearsToCollect = Number(answers[2]);
        const initialAmount = Number(answers[3]);
        const frequency = answers[4];
        const timing = answers[5];

        let amountToSave = 0;

        const returnRate = Number(answers[6]) / 100;

        const periodsPerYear = frequency == "monthly" ? 12 : 1;
        const periodicReturn = returnRate / periodsPerYear;

        const totalPeriods = yearsToCollect * periodsPerYear;

        const totalProjectedSavings = initialAmount * Math.pow(1 + returnRate, yearsToCollect)
        const totalAmountNeedToChase = Math.max(targetAmount - totalProjectedSavings, 0)

        if (timing == "begin") {
            amountToSave = totalAmountNeedToChase * periodicReturn / Math.pow((1 + periodicReturn), totalPeriods) - 1
        } else {
            amountToSave = (totalAmountNeedToChase * periodicReturn) / ((Math.pow(1 + periodicReturn, yearsToCollect * 12) - 1))
        }

        return {
            totalProjectedSavings,
            targetAmount,
            initialAmount,
            totalAmountNeedToChase,
            amountToSave,
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
                        title={"Perencanaan Investasi"}
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
                        title={"Perencanaan Investasi"}
                        currentStep={totalSteps}
                        totalSteps={totalSteps}
                    />
                    <div className="p-5">
                        {isResultReady && (() => {
                            const results = calculateResults();
                            return (
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
                                <h3 className="text-2xl mb-6">Hasil Perhitungan Simulasi Investasi</h3>

                                {/* Target Section */}
                                <div className="bg-[#1E2432] rounded-lg p-4 mb-4">
                                    <h4 className="text-2xl mb-4">Ringkasan Target Investasi</h4>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span>Target jumlah dana</span>
                                            <span>{`Rp${formatNumber(answers[1])}`}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Jangka waktu pengumpulan dana</span>
                                            <span>{`${answers[2]} tahun`}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Total dana yang sudah terkumpul</span>
                                            <span>{`Rp${formatNumber(answers[3])}`}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Proyeksi total dana yang sudah terkumpul {answers[2]} tahun lagi</span>
                                            <span>{`Rp${formatNumber(Math.round(results.totalProjectedSavings))}`}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Periode investasi</span>
                                            <span>{`Setiap ${answers[5] == "begin" ? "awal" : "akhir"} ${answers[4] == 'monthly' ? 'bulan' : 'tahun'}`}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Investment Section */}
                                <div className="bg-[#3A4356] rounded-lg p-4 mb-4">
                                    <h4 className="text-2xl mb-4">Strategi</h4>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span>Jumlah dana yang harus diinvestasikan setiap {answers[4] == "yearly" ? "tahun" : answers[4] == "monthly" ? "bulan" : ""}</span>
                                            <span>{`Rp${formatNumber(Math.round(results.amountToSave))}`}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })()}

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

export default InvestmentForm;