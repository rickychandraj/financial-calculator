"use client";

import React, {useEffect, useState} from "react";
import FormHeader from "@/components/ui/form-header";
import FormQuestionCards from "@/components/ui/form-question-card";
import NumberInput from "@/components/ui/number-input";
import CurrencyInput from "@/components/ui/currency-input";


const FinancialAuditForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [emergencyFund, setEmergencyFund] = useState("");
    const [isResultReady, setIsResultReady] = useState(false);
    const [answers, setAnswers] = useState({
        1: null, // total income
        2: null, // dependents
        3: null, // status
        4: null, // total expense
        5: null, // current emergency fund collected
        100: null, // total children
        101: null, // total income of partner
        102: null, // total dependents of partner
    });

    const questions = [
        {
            id: 1,
            text: "Berapa total gaji / pemasukan kamu saat ini?",
            subtext: "Hitung besarnya total pemasukan bersih bulanan kamu",
            type: "currency",
            placeholder: "Contoh: 50,000,000",
            prefix: "Rp"
        },
        {
            id: 2,
            text: "Berapa jumlah tanggungan kamu setiap bulan?",
            subtext: "Berapa banyak orang yang bergantung pada penghasilanmu? Contoh : orang tua",
            type: "number",
            placeholder: "Contoh: 2",
        },
        {
            id: 3,
            text: "Apa status kamu saat ini?",
            type: "select",
            options: [
                {value: "single", display: "Lajang"},
                {value: "married", display: "Menikah"},
                {value: "divorced", display: "Cerai Hidup"},
                {value: "widowed", display: "Cerai Mati"},
            ]
        },
        {
            id: 4,
            text: "Berapa pengeluaran pokok keluarga kamu setiap bulan?",
            subtext: "Hitung besarnya pengeluaran pokok bulanan kamu. Contoh : Bayar kos 3jt, listrik 1jt, pulsa 150k, transport 1jt. Berarti kolom ini diisi 5,150,000",
            type: "currency",
            placeholder: "Contoh: 20,000,000",
            prefix: "Rp"
        },
        {
            id: 5,
            text: "Berapa jumlah dana darurat yang kamu miliki saat ini?",
            subtext: "Contoh: saat ini kamu punya uang 5 juta, tapi yang dialokasikan untuk dana darurat hanya 1 juta; maka, masukkan angka 1,000,000 pada kolom ini. Apabila belum memiliki dana darurat, tulis 0",
            type: "currency",
            placeholder: "Contoh: 100,000,000",
            prefix: "Rp",
        },
    ];

    const totalSteps = questions.length;

    const formatNumber = (num) => {
        // Remove any non-digit characters except decimal point
        const cleanNum = num.toString().replace(/[^\d.]/g, '');

        // Split into integer and decimal parts
        const [integerPart, decimalPart] = cleanNum.split('.');

        // Add thousand separators to integer part
        const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        // Return formatted number with decimal part if it exists
        return decimalPart !== undefined
            ? `${formattedInteger}.${decimalPart}`
            : formattedInteger;
    };

    useEffect(() => {
        console.log("Updated answers:", answers);
        setEmergencyFund("");

        const monthlyIncome = answers[1] ? Number(answers[1]) : null;
        const totalDependents = answers[2] ? Number(answers[2]) : null;
        const status = answers[3] ? answers[3] : null;
        const monthlyExpense = answers[4] ? Number(answers[4]) : null;
        const currentEmergencyFund = answers[5] ? Number(answers[5]) : null;

        const isSandwichGeneration = totalDependents ? Number(totalDependents) > 0 : null;

        const totalKids = answers[100] ? Number(answers[100]) : 0;
        const totalPartnerIncome = answers[101] ? Number(answers[101]) : 0;
        const totalPartnerDependents = answers[102] ? Number(answers[102]) : 0;

        const isPartnerSandwichGeneration = totalPartnerDependents && (totalPartnerDependents > 0);
        const isHavingKids = totalKids && (totalKids > 0);

        const totalMonthlyIncome = monthlyIncome + totalPartnerIncome;

        if (
            monthlyIncome === null
            || totalDependents === null
            || status === null
            || monthlyExpense === null
            || currentEmergencyFund === null
        ) {
            console.log("Updated emergencyFund:", emergencyFund);
            return;
        }

        if (status === "single") {
            if (isSandwichGeneration) {
                // Single, sandwich generation
                setEmergencyFund(`Rp${formatNumber(monthlyIncome * 3)} - Rp${formatNumber(monthlyIncome * 6)}`)
            } else {
                // Single, non-sandwich generation
                setEmergencyFund(`Rp${formatNumber(monthlyExpense * 3)} - Rp${formatNumber(Math.max(monthlyExpense * 6, monthlyIncome * 3))}`)
            }
        }

        if (status === "married") {
            if (isHavingKids) {
                // Nikah, sudah punya anak, sandwich generation (9x gaji bulanan - 12x gaji bulanan)
                if (isSandwichGeneration || isPartnerSandwichGeneration) {
                    setEmergencyFund(`Rp${formatNumber(monthlyIncome * 9)} - Rp${formatNumber(monthlyIncome * 12)}`);
                }
                // Nikah, sudah punya anak, non-sandwich generation (6x gaji bulanan - 9x gaji bulanan)
                else {
                    setEmergencyFund(`Rp${formatNumber(monthlyIncome * 6)} - Rp${formatNumber(monthlyIncome * 9)}`);
                }
            } else {
                // Nikah, belum punya anak, sandwich generation (6x pengeluaran bulanan - 9x pengeluaran bulanan)
                if (isSandwichGeneration || isPartnerSandwichGeneration) {
                    setEmergencyFund(`Rp${formatNumber(monthlyExpense * 6)} - Rp${formatNumber(monthlyExpense * 9)}`);
                }
                // Nikah, belum punya anak, non-sandwich generation (6x pengeluaran bulanan - 6x pengeluaran bulanan)
                else {
                    setEmergencyFund(`Rp${formatNumber(monthlyExpense * 6)} - Rp${formatNumber(monthlyExpense * 6)}`);
                }
            }
        }

        setIsResultReady(true);
        console.log("Updated emergencyFund:", emergencyFund);
    }, [answers, emergencyFund]);

    const handleInputChange = (questionId, value) => {
        // Remove existing separators and validate input
        const numericValue = value.replace(/,/g, "");

        // Check if it"s a valid number
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

        if (questionId === 3 && value === "single") {
            setAnswers(prev => ({
                ...prev,
                [100]: null,
            }));
            setAnswers(prev => ({
                ...prev,
                [101]: null,
            }));
            setAnswers(prev => ({
                ...prev,
                [102]: null,
            }));
        }

        if (questionId === 3 && (value === "divorced" || value === "widowed")) {
            setAnswers(prev => ({
                ...prev,
                [101]: null,
            }));
            setAnswers(prev => ({
                ...prev,
                [102]: null,
            }));
        }
    };

    const handleGetResult = () => {
        setCurrentStep(prev => prev + 1);
    }

    const handleIsNextButtonDisabled = (questionId) => {
        return (
            !(answers[questionId]) ||
            // Sudah menikah, tapi belum jawab pertanyaan tambahannya
            questionId === 3
            && answers[questionId] === "yes"
            && !(
                answers[questionId]
                && answers[100]
                && answers[101]
                && answers[102]
            )
        )
    }

    return (
        <div
            className="w-full max-w-3xl mx-auto min-h-screen"
            style={{
                fontFamily: "system-ui, sans-serif",
                backgroundColor: "#F9FAFB",
            }}
        >
            {
                currentStep <= totalSteps &&
                (
                    <div>
                        <FormHeader
                            href={"/"}
                            title={"Perhitungan Dana Darurat"}
                            currentStep={currentStep}
                            totalSteps={totalSteps}
                        />
                        <FormQuestionCards
                            questions={questions}
                            answers={answers}
                            currentStep={currentStep}
                            totalSteps={totalSteps}
                            handleInputChange={(questionId, questionValue) => handleInputChange(questionId, questionValue)}
                            handleSetCurrentStep={(step) => setCurrentStep(step)}
                            handleGetResult={() => handleGetResult()}
                            isResultReady={isResultReady}
                            handleIsNextButtonDisabled={(questionId) => handleIsNextButtonDisabled(questionId)}
                        />
                    </div>
                )
            }

            {
                currentStep > totalSteps &&
                (
                    <div>
                        <FormHeader
                            href={"/"}
                            title={"Perhitungan Dana Darurat"}
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
                                    <h3 className="text-2xl">Total dana darurat yang kamu butuhkan:</h3>
                                    <h3 className="text-2xl text-white/80 my-2 font-bold">{emergencyFund}</h3>
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
                )
            }

            {
                currentStep === 3
                && (
                    answers[currentStep] === "married" || answers[currentStep] === "divorced" || answers[currentStep] === "widowed"
                )
                && (
                    <div className="p-6">
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h2 className="text-xl font-semibold my-2" style={{ color: "#12174F" }}>Berapa jumlah anak yang kamu miliki saat ini?</h2>
                            <NumberInput
                                placeholder={"Contoh: 2"}
                                value={answers[100] || ""}
                                onChange={(e) => handleInputChange(100, e.target.value)}
                            />
                            {answers[3] == "married" &&
                              <>
                                <h2 className="text-xl font-semibold my-2 mt-8" style={{ color: "#12174F" }}>Berapa total pemasukan pasangan kamu saat ini?</h2>
                                <CurrencyInput
                                    prefix={"Rp"}
                                    placeholder={"Contoh: 50,000,000"}
                                    value={answers[101] || ""}
                                    onChange={(e) => handleInputChange(101, e.target.value)}
                                />
                              </>
                            }
                            {answers[3] == "married" &&
                              <>
                                <h2 className="text-xl font-semibold mt-8" style={{color: "#12174F"}}>Berapa jumlah
                                  tanggungan pasangan kamu setiap bulan?</h2>
                                <p className="text-sm mb-2" style={{color: "#252E64"}}>Berapa banyak orang yang
                                  bergantung pada penghasilan pasangan kamu? Contoh : orang tua</p>
                                <NumberInput
                                  placeholder={"Contoh: 2"}
                                  value={answers[102] || ""}
                                  onChange={(e) => handleInputChange(102, e.target.value)}
                                />
                              </>
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default FinancialAuditForm;