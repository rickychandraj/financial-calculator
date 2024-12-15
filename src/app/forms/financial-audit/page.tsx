"use client";

import React, { useEffect, useState } from "react";
import FormHeader from "@/components/ui/form-header";
import FormQuestionCards from "@/components/ui/form-question-card";


const FinancialHealthForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isResultReady, setIsResultReady] = useState(false);
    const [answers, setAnswers] = useState({
        1: null, // total income
        2: null, // total expense
        3: null, // total asset
        4: null, // dependents
    });

    const questions = [
        {
            id: 1,
            text: "Berapa penghasilan tetap kamu setiap bulan?",
            subtext: "Contoh: gaji bulanan atau pendapatan rutin dari usaha/bisnis",
            type: "currency",
            prefix: "Rp",
            suffix: "/ bulan"
        },
        {
            id: 2,
            text: "Berapa pengeluaran kamu setiap bulan?",
            subtext: "Termasuk kebutuhan sehari-hari ataupun kebutuhan yang sifatnya tidak wajib",
            type: "currency",
            prefix: "Rp",
            suffix: "/ bulan"
        },
        {
            id: 3,
            text: "Berapa total asset yang kamu miliki saat ini?",
            subtext: "Termasuk uang di rekening tabungan, cash yang kamu simpan, maupun investasi lainnya (reksa dana, saham, emas, atau lainnya)",
            type: "currency",
            prefix: "Rp"
        },
        {
            id: 4,
            text: "Berapa orang yang menjadi tanggungan kamu?",
            subtext: "Jumlah anggota keluarga yang biayanya kamu tanggung, termasuk diri kamu sendiri",
            type: "number",
            suffix: "orang"
        },
    ];

    const totalSteps = questions.length;

    const handleInputChange = (questionId, value) => {
        if (questionId === 10) {
            // Handle multiselect
            setAnswers(prev => ({
                ...prev,
                [questionId]: Array.isArray(value) ? value : [value],
            }));
            return;
        }

        // For currency and number inputs
        const numericValue = value.toString().replace(/,/g, "");
        if (numericValue === "" || /^\d*\.?\d*$/.test(numericValue)) {
            setAnswers(prev => ({
                ...prev,
                [questionId]: numericValue,
            }));
        }
    };

    const handleGetResult = () => {
        setCurrentStep(prev => prev + 1);
    };

    useEffect(() => {
        const allFieldsFilled = Object.keys(answers).every(key => {
            if (key === '10') return true; // Skip insurance check
            return answers[key] !== null;
        });
        setIsResultReady(allFieldsFilled);
    }, [answers]);

    const handleIsNextButtonDisabled = (questionId) => {
        return !answers[questionId] && questionId !== 10;
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
                        title={"Cek Kesehatan Keuangan"}
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
                        title={"Cek Kesehatan Keuangan"}
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
                            <div className="relative">
                                <h3 className="text-3xl mb-6">Hasil Cek Kesehatan Keuangan</h3>

                                {/* Monthly Summary Preview */}
                                <div className="bg-[#1E2432] rounded-lg p-4 mb-4">
                                    <h4 className="text-2xl mb-4">Ringkasan Keuangan</h4>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span>Total pemasukan per bulan</span>
                                            <span>{`Rp ${formatNumber(answers[1])}`}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Total pengeluaran per bulan</span>
                                            <span>{`Rp ${formatNumber(answers[2])}`}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Total asset yang dimiliki saat ini</span>
                                            <span>{`Rp ${formatNumber(answers[3])}`}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Status Preview */}
                                <div className="bg-[#3A4356] rounded-lg p-4 mb-4">
                                    <h4 className="text-xl mb-4">Status Kesehatan Keuangan</h4>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span className={answers[1] > answers[2] ? "text-green-400" : "text-red-400"}>
                                                {answers[1] > answers[2] ? "Sehat" : Math.max(0, (answers[1] - answers[2]) * 6) < answers[3] ? "Sehat" : "Tidak Sehat"}
                                            </span>
                                        </div>

                                    </div>
                                </div>

                                <div className="bg-[#1E2432] rounded-lg p-4">
                                    <h4 className="text-xl mb-4">Deskripsi</h4>
                                    <ul className="list-disc ml-6 space-y-1">
                                        <li>
                                            {answers[1] > answers[2] ? "Pemasukan bulanan kamu sudah LEBIH BESAR dari pengeluaran bulanan" : "Kamu perlu menambah pemasukan bulanan kamu sekurang-kurangnya hingga LEBIH DARI pengeluaran bulanan kamu"}
                                        </li>
                                        <li>
                                            {Math.max(0, (answers[1] - answers[2]) * 6) < answers[3] ? "Dana darurat sudah tercukupi" : "Pastikan kamu memiliki dana darurat sekurang-kurangnya 6x pengeluaran bulanan saat ini"}
                                        </li>
                                    </ul>
                                </div>
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
            )}
        </div>
    );
};

export default FinancialHealthForm;
