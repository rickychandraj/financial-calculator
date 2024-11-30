"use client";

import React, { useEffect, useState } from "react";
import FormHeader from "@/components/ui/form-header";
import FormQuestionCards from "@/components/ui/form-question-card";


const FinancialHealthForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isResultReady, setIsResultReady] = useState(false);
    const [answers, setAnswers] = useState({
        1: null, // fixed income
        2: null, // additional income
        3: null, // essential expenses
        4: null, // lifestyle expenses
        5: null, // total savings
        6: null, // total investments
        7: null, // monthly installments
        8: null, // dependents
        9: null, // monthly savings
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
            text: "Berapa penghasilan tambahan kamu setiap bulan?",
            subtext: "Contoh: hasil jualan online, proyek freelance, atau pendapatan tidak rutin lainnya. Kalau tidak ada, isi dengan angka 0",
            type: "currency",
            prefix: "Rp",
            suffix: "/ bulan"
        },
        {
            id: 3,
            text: "Berapa biaya wajib yang harus kamu bayar tiap bulan?",
            subtext: "Termasuk cicilan KPR/sewa kos, listrik, air, internet, pulsa, transportasi, dan kebutuhan makan sehari-hari",
            type: "currency",
            prefix: "Rp",
            suffix: "/ bulan"
        },
        {
            id: 4,
            text: "Berapa biaya gaya hidup kamu setiap bulan?",
            subtext: "Termasuk belanja baju, nonton, jalan-jalan, hobi, atau kebutuhan yang sifatnya tidak wajib",
            type: "currency",
            prefix: "Rp",
            suffix: "/ bulan"
        },
        {
            id: 5,
            text: "Berapa total tabungan yang kamu miliki saat ini?",
            subtext: "Jumlah uang di rekening tabungan atau cash yang kamu simpan",
            type: "currency",
            prefix: "Rp"
        },
        {
            id: 6,
            text: "Berapa total nilai investasi kamu saat ini?",
            subtext: "Jumlah nilai dari reksadana, saham, emas, atau investasi lainnya. Kalau belum punya, isi dengan angka 0",
            type: "currency",
            prefix: "Rp"
        },
        {
            id: 7,
            text: "Berapa total cicilan yang harus kamu bayar setiap bulan?",
            subtext: "Termasuk cicilan KPR, KTA, kartu kredit, atau pinjaman lainnya. Kalau tidak punya cicilan, isi dengan angka 0",
            type: "currency",
            prefix: "Rp",
            suffix: "/ bulan"
        },
        {
            id: 8,
            text: "Berapa orang yang menjadi tanggungan kamu?",
            subtext: "Jumlah anggota keluarga yang biayanya kamu tanggung, termasuk diri kamu sendiri",
            type: "number",
            suffix: "orang"
        },
        {
            id: 9,
            text: "Berapa banyak kamu bisa menabung tiap bulan?",
            subtext: "Rata-rata jumlah uang yang bisa kamu sisihkan untuk ditabung setiap bulan",
            type: "currency",
            prefix: "Rp",
            suffix: "/ bulan"
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
                                <div className="relative">
                                    <div className="blur-[8px] pointer-events-none">
                                        <h3 className="text-2xl mb-6">Hasil Analisis Keuangan</h3>

                                        {/* Monthly Summary Preview */}
                                        <div className="bg-[#1E2432] rounded-lg p-4 mb-4">
                                            <h4 className="text-xl mb-4">Ringkasan Keuangan Bulanan</h4>
                                            <div className="space-y-2">
                                                <div className="flex justify-between">
                                                    <span>Total Pemasukan</span>
                                                    <span>Rp XX,XXX,XXX</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Total Pengeluaran</span>
                                                    <span>Rp XX,XXX,XXX</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Status Preview */}
                                        <div className="bg-[#3A4356] rounded-lg p-4 mb-4">
                                            <h4 className="text-xl mb-4">Status Kesehatan Keuangan</h4>
                                            <div className="space-y-2">
                                                <div className="flex justify-between">
                                                    <span>Dana Darurat</span>
                                                    <span>XXX</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Rasio Cicilan</span>
                                                    <span>XXX</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Recommendations Preview */}
                                        <div className="bg-[#1E2432] rounded-lg p-4">
                                            <h4 className="text-xl mb-4">Rekomendasi Prioritas</h4>
                                            <div className="space-y-2">
                                                <div className="flex items-start">
                                                    <span className="mr-2">•</span>
                                                    <span>XXXXX XXXXX XXXXX</span>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="mr-2">•</span>
                                                    <span>XXXXX XXXXX XXXXX</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Overlay with CTA */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 rounded-2xl">
                                        <p className="text-center text-white text-lg mb-6 px-4">
                                            Lihat hasil analisis lengkap dan dapatkan rekomendasi personal untuk kesehatan keuanganmu
                                        </p>
                                        <a
                                            href="/results"
                                            className="bg-[#A51246] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#8A0F3D] transition-colors"
                                        >
                                            Lihat Hasil Lengkap
                                        </a>
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
                </div>
            )}
        </div>
    );
};

export default FinancialHealthForm;
