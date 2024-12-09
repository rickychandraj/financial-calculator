"use client";

import React, { useEffect, useState } from "react";
import FormHeader from "@/components/ui/form-header";
import FormQuestionCards from "@/components/ui/form-question-card";

const CoupleTestForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isResultReady, setIsResultReady] = useState(false);
    const [answers, setAnswers] = useState({
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
        7: null,
        8: null,
        9: null,
        10: null,
        11: null,
        12: null,
        13: null,
        14: null,
        15: null,
        16: null,
        17: null,
        18: null,
        19: null,
        20: null,
        21: null,
        22: null,
        23: null,
        24: null,
        25: null,
        26: null,
        27: null,
        28: null,
        29: null,
        30: null,
        31: null,
        32: null,
        33: null,
        34: null,
        35: null,
        36: null,
    });

    const questions = [
        {
            id: 1,
            text: "Saat belanja, saya menghabiskan uang lebih banyak dari yang direncanakan",
            type: "select",
            category: "Binger",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 2,
            text: "Saya tahu persis harga dari semua barang yang saya beli",
            type: "select",
            category: "Planner",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 3,
            text: "Saya susah untuk menolak ketika ditawarkan barang dengan diskon besar",
            type: "select",
            category: "Binger",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 4,
            text: "Saya tidak terlalu suka masak, jadi lebih sering beli makanan siap saji",
            type: "select",
            category: "Cannot Control Finances",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 5,
            text: "Saya suka ketika rumah terasa hangat dan nyaman",
            type: "select",
            category: "Orderly",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 6,
            text: "Saya tidak suka minta kembalian ketika membayar tunai",
            type: "select",
            category: "Cannot Control Finances",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 7,
            text: "Sebelum belanja, saya selalu pikirkan dengan baik apa saja yang dibutuhkan",
            type: "select",
            category: "Planner",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 8,
            text: "Ketika sedang beres-beres, saya menyadari bahwa saya banyak membeli barang yang sebenarnya tidak diperlukan",
            type: "select",
            category: "Cannot Control Finances",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 9,
            text: "Saya menikmati belanja bersama teman-teman",
            type: "select",
            category: "Binger",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 10,
            text: "Saya seringkali harus meminjam uang di akhir bulan",
            type: "select",
            category: "Economizer",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 11,
            text: "Saya selalu membuat daftar belanja sebelum pergi ke toko",
            type: "select",
            category: "Planner",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 12,
            text: "Saya biasanya memeriksa banyak pilihan terlebih dahulu sebelum membeli sesuatu",
            type: "select",
            category: "Planner",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 13,
            text: "Saya mencatat semua pengeluaran saya",
            type: "select",
            category: "Diligent",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 14,
            text: "Saya selalu membandingkan harga sebelum membeli barang apapun",
            type: "select",
            category: "Diligent",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 15,
            text: "Saya dapat mengatur uang agar cukup sampai akhir bulan",
            type: "select",
            category: "Diligent",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 16,
            text: "Bayar tagihan membuat saya sangat pusing",
            type: "select",
            category: "Economizer",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 17,
            text: "Saya menjaga keuangan rumah tangga tetap teratur",
            type: "select",
            category: "Orderly",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 18,
            text: "Saya tidak suka membuang barang yang masih bisa dipakai",
            type: "select",
            category: "Economizer",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 19,
            text: "Saya suka memberi hadiah untuk diri sendiri",
            type: "select",
            category: "Ups and Downs",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 20,
            text: "Saya lebih memilih untuk membuat makanan sendiri daripada membeli makan di kantin",
            type: "select",
            category: "Economizer",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 21,
            text: "Saya punya beberapa kebiasaan buruk yang membuat saya boros",
            type: "select",
            category: "Cannot Control Finances",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 22,
            text: "Saya menikmati ketika nongkrong bersama teman-teman",
            type: "select",
            category: "Ups and Downs",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 23,
            text: "Saya ingin anak-anak saya memiliki semua yang mereka butuhkan",
            type: "select",
            category: "Ups and Downs",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 24,
            text: "Saya suka barang-barang yang sedang trending",
            type: "select",
            category: "Orderly",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 25,
            text: "Saya terlambat bayar beberapa tagihan",
            type: "select",
            category: "Economizer",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 26,
            text: "Saya hanya berhemat ketika keadaan keuangan sedang kurang baik",
            type: "select",
            category: "Ups and Downs",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 27,
            text: "Saya selalu punya tabungan untuk keadaan darurat",
            type: "select",
            category: "Diligent",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 28,
            text: "Kalau sedang butuh uang lebih, saya mencari kerja sampingan",
            type: "select",
            category: "Diligent",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 29,
            text: "Kalau saya menyukai suatu barang, saya langsung membelinya",
            type: "select",
            category: "Binger",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 30,
            text: "Saya bingung uang saya habis ke mana",
            type: "select",
            category: "Binger",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 31,
            text: "Saya mengetahui persis jumlah uang yang saya punya di dompet dan rekening bank",
            type: "select",
            category: "Planner",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 32,
            text: "Ketika belanja bulanan, saya sering kaget dengan total yang harus dibayar",
            type: "select",
            category: "Binger",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 33,
            text: "Saya terjebak hutang yang bikin stres",
            type: "select",
            category: "Economizer",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 34,
            text: "Saya suka untuk mencoba keberuntungan saya",
            type: "select",
            category: "Ups and Downs",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 35,
            text: "Saya sering memberi kejutan untuk orang tercinta dengan hadiah buatan sendiri",
            type: "select",
            category: "Orderly",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        },
        {
            id: 36,
            text: "Saya menghabiskan banyak uang untuk makanan sehat dan air mineral",
            type: "select",
            category: "Orderly",
            options: [
                {value: 1, display: "Hampir tidak pernah"},
                {value: 2, display: "Jarang"},
                {value: 3, display: "Kadang-kadang"},
                {value: 4, display: "Sering"},
                {value: 5, display: "Hampir selalu"},
            ],
        }
    ]

    const totalSteps = questions.length;

    const handleInputChange = (questionId, value) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: value,
        }));
    };

    const handleGetResult = () => {
        setCurrentStep(prev => prev + 1);
    };

    // Determine the personality of the person
    const calculateResults = () => {
        let financePersona = "";
        let maxTotalPoint = 0;

        const economizerTotalPoint = Math.round((
            answers[10]
            + answers[16]
            + answers[18]
            + answers[20]
            + answers[25]
            + answers[33]
        ) / 6);
        if (economizerTotalPoint > maxTotalPoint) {
            maxTotalPoint = economizerTotalPoint;
            financePersona = "Economizer";
        }

        const diligentTotalPoint = Math.round((
            answers[13]
            + answers[14]
            + answers[15]
            + answers[27]
            + answers[28]
        ) / 5);
        if (diligentTotalPoint > maxTotalPoint) {
            maxTotalPoint = diligentTotalPoint;
            financePersona = "Diligent";
        }

        const bingerTotalPoint = Math.round((
            answers[1]
            + answers[3]
            + answers[9]
            + answers[29]
            + answers[30]
            + answers[32]
        ) / 6);
        if (bingerTotalPoint > maxTotalPoint) {
            maxTotalPoint = bingerTotalPoint;
            financePersona = "Binger";
        }

        const orderlyTotalPoint = Math.round((
            answers[5]
            + answers[17]
            + answers[24]
            + answers[35]
            + answers[36]
        ) / 5);
        if (orderlyTotalPoint > maxTotalPoint) {
            maxTotalPoint = orderlyTotalPoint;
            financePersona = "Orderly";
        }

        const cantControlFinanceTotalPoint = Math.round((
            answers[4]
            + answers[6]
            + answers[8]
            + answers[21]
        ) / 4);
        if (cantControlFinanceTotalPoint > maxTotalPoint) {
            maxTotalPoint = cantControlFinanceTotalPoint;
            financePersona = "Can't Control Finance"
        }

        const plannerTotalPoint = Math.round((
            answers[2]
            + answers[7]
            + answers[11]
            + answers[12]
            + answers[31]
        ) / 5);
        if (plannerTotalPoint > maxTotalPoint) {
            maxTotalPoint = plannerTotalPoint;
            financePersona = "Planner";
        }

        const upsAndDownsTotalPoint = Math.round((
            answers[19]
            + answers[22]
            + answers[23]
            + answers[26]
            + answers[34]
        ) / 5);
        if (upsAndDownsTotalPoint > maxTotalPoint) {
            maxTotalPoint = upsAndDownsTotalPoint;
            financePersona = "Ups and Downs";
        }

        return {
            maxTotalPoint,
            financePersona,
        }
    }

    useEffect(() => {
        console.log(answers);
        const allFieldsFilled = Object.values(answers).every(value => value !== null);
        setIsResultReady(allFieldsFilled);
        console.log(allFieldsFilled);
        console.log(currentStep);
        console.log(totalSteps);
    }, [answers]);

    const handleIsNextButtonDisabled = (questionId) => {
        return !answers[questionId];
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
                        title={"Tes Kecocokkan Pasangan"}
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
                        title={"Tes Kecocokkan Pasangan"}
                        currentStep={totalSteps}
                        totalSteps={totalSteps}
                    />
                    <div className="p-5">
                        {isResultReady && (() => {
                            const results = calculateResults();
                            return (
                                <>
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
                                        <h3 className="text-3xl mb-6">Hasil Tes Kecocokkan Pasangan</h3>
                                        <div className="blur-[8px] pointer-events-none">

                                        </div>
                                    </div>
                                    {/*Overlay with CTA*/}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 rounded-2xl">
                                        <p className="text-center text-white text-lg mb-6 px-4">
                                            Kamu harus mengisi beberapa data terlebih dahulu untuk melihat hasil lengkap tes ini
                                        </p>
                                        <a
                                            href={`/${results.financePersona}`}
                                            className="bg-[#A51246] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#8A0F3D] transition-colors"
                                        >
                                            Lihat Hasil Lengkap
                                        </a>
                                    </div>
                                </>
                            )
                        })()}
                    </div>
                </div>
            )}
        </div>
    )
}

export default CoupleTestForm;