"use client";

import React, { Suspense, useEffect, useState } from "react";
import FormHeader from "@/components/ui/form-header";
import FormQuestionCards from "@/components/ui/form-question-card";
import { useSearchParams } from "next/navigation";
import {
    DESCRIPTION,
    MAPPINGS,
    REVERSE_MAPPINGS,
    SIMULATION_RESULT,
    CONFLICT_RESULT,
    SUGGESTION_RESULT,
    MOST_MATCH_MAPPINGS,
} from "@/app/forms/couple-test/constants";
import {ArrowLeft} from "lucide-react";


const CoupleTestForm = () => {
    const searchParams = useSearchParams();
    const resultParam = searchParams.get("code");
    const [isCheckingMatchScore, setIsCheckingMatchScore] = useState(false);
    const [resultQueryParam, _] = useState(resultParam);

    const [partnerPersonality, setPartnerPersonality] = useState(null);
    const partnerPersonalityOptions = [
        {value: "Economizer", display: "Economizer"},
        {value: "Diligent", display: "Diligent"},
        {value: "Binger", display: "Binger"},
        {value: "Orderly", display: "Orderly"},
        {value: "Can't Control Finance", display: "Can't Control Finance"},
        {value: "Planner", display: "Planner"},
        {value: "Ups and Downs", display: "Ups and Downs"},
    ]

    const [currentStep, setCurrentStep] = useState(1);
    const [resultPersona, setResultPersona] = useState(null);
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
        console.log(resultQueryParam);
        console.log(MAPPINGS["mbr1291"]);
        const allFieldsFilled = Object.values(answers).every(value => value !== null);
        setIsResultReady(allFieldsFilled);
    }, [answers]);

    const handleIsNextButtonDisabled = (questionId) => {
        return !answers[questionId];
    };

    const handlePartnerPersonalityChange = (value) => {
        setPartnerPersonality(value);
    }

    return (
        <div
            className="w-full max-w-3xl mx-auto min-h-screen"
            style={{
                fontFamily: "system-ui, sans-serif",
                backgroundColor: "#F9FAFB",
            }}
        >
            {currentStep <= totalSteps && !resultQueryParam && (
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
                                    {/*Overlay with CTA*/}
                                    <div className="absolute inset-0 bg-black/60 backdrop-blur-md backdrop-brightness-50 flex flex-col items-center justify-center bg-black/50 rounded-2xl">
                                        <p className="text-center text-white text-md mb-6 px-4">
                                            Kamu harus mengisi beberapa data terlebih dahulu untuk melihat hasil lengkap tes ini
                                        </p>
                                        <a
                                            href={`https://tribelio.page/couple-test-${REVERSE_MAPPINGS[results.financePersona]}/`}
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

            {
                resultQueryParam && !isCheckingMatchScore && (
                    <>
                        <div>
                            <FormHeader
                                href={"/"}
                                title={"Hasil Tes"}
                                currentStep={null}
                                totalSteps={null}
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
                                    <div className="bg-[#3A4356] rounded-lg p-4 mb-4">
                                        <div className="space-y-2">
                                            <div className="flex">
                                                <span className="font-semibold">Personality finansial kamu adalah <span className={"text-green-300 font-semibold"}>{MAPPINGS[resultQueryParam]}</span>!</span>
                                            </div>
                                            <div className="flex">
                                                <span>{DESCRIPTION[MAPPINGS[resultQueryParam]]}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-[#1E2432] rounded-lg p-4 mb-4">
                                        <div className="space-y-2">
                                            <div className="flex">
                                                <span className="font-semibold">Kamu paling cocok berpasangan dengan</span>
                                            </div>
                                            {MOST_MATCH_MAPPINGS[MAPPINGS[resultQueryParam]]}
                                        </div>
                                    </div>
                                </div>
                                <h2 className="text-xl font-semibold my-2 mt-12" style={{ color: "#12174F" }}>Apa kepribadian pasangan kamu?</h2>
                                <p className="text-center text-white text-md mb-6 px-4">
                                    Pasangan kamu harus mengambil tes kepribadian keuangan ini secara terpisah, yuk bagikan link ini: https://calculator.mamaberuang.com/forms/couple-test ke pasangan kamu. Kemudian, masukkan hasil tes kepribadian keuangan pasangan kamu dibawah ini
                                </p>
                                {partnerPersonalityOptions.map((option, optIndex) => (
                                    <div
                                        key={optIndex}
                                        className="p-4 my-4 rounded-lg cursor-pointer"
                                        style={{
                                            border: "1px solid rgba(165, 18, 70, 0.2)",
                                            background: partnerPersonality === option.value
                                                ? "linear-gradient(135deg, rgba(165, 18, 70, 0.1), rgba(183, 30, 84, 0.1))"
                                                : "white"
                                        }}
                                        onClick={() => handlePartnerPersonalityChange(option.value)}
                                    >
                                        <span style={{ color: "#252E64" }}>{option.display}</span>
                                    </div>
                                ))}
                                <button
                                    onClick={() => setIsCheckingMatchScore(true)}
                                    className="px-6 py-2 rounded-lg text-white"
                                    disabled={partnerPersonality === null}
                                    style={{
                                        background: (
                                            partnerPersonality === null
                                                ? "#6c757d"
                                                : "linear-gradient(135deg, #A51246, #B71E54)"
                                        ),
                                        marginLeft: "auto"
                                    }}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </>
                )
            }

            {
                isCheckingMatchScore && (
                    <>
                        <div>
                            <div style={{
                                background: "linear-gradient(135deg, #A51246 0%, #B71E54 50%, #12174F 100%)",
                                padding: "20px"
                            }}>
                                <div className="flex items-center text-white mb-4">
                                    <div onClick={() => setIsCheckingMatchScore(false)}>
                                        <ArrowLeft className="w-6 h-6 mr-2 cursor-pointer"/>
                                    </div>
                                    <h1 className="text-xl font-semibold">Hasil Tes Kecocokkan</h1>
                                </div>

                                {/* Progress Bar */}
                                {currentStep && totalSteps && (
                                    <>
                                        <div className="w-full bg-white/20 rounded-full h-2">
                                            <div
                                                className="h-full rounded-full"
                                                style={{
                                                    width: `${(totalSteps/totalSteps) * 100}%`,
                                                    background: "linear-gradient(to right, #fff, rgba(255,255,255,0.8))"
                                                }}
                                            />
                                        </div>
                                        <p className="text-white/90 text-sm mt-2">Pertanyaan {totalSteps} dari {totalSteps}</p>
                                    </>
                                )}
                            </div>
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
                                    <div className="bg-[#3A4356] rounded-lg p-4 mb-4">
                                        <div className="space-y-2">
                                            <div className="flex">
                                                <span className="font-semibold"><span className={"text-green-300 font-semibold"}>{MAPPINGS[resultQueryParam]}</span> x <span className={"text-green-300 font-semibold"}>{partnerPersonality}</span></span>
                                            </div>
                                            <div className="flex">
                                                <span>Berikut simulasi dan analisis kecocokan <span className={"text-green-300 font-semibold"}>{MAPPINGS[resultQueryParam]}</span> jika berpasangan dengan <span className={"text-green-300 font-semibold"}>{partnerPersonality}</span>:</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h1 className="text-xl font-semibold mb-4 mt-8">Simulasi</h1>
                                    <div className="bg-[#1E2432] rounded-lg p-4 mb-4">
                                        <div className="space-y-2">
                                            <div className="flex">
                                                <span className="text-gray-300 font-bold">Ekonomi dan Gaya Hidup</span>
                                            </div>
                                            <div className="flex">
                                                <span className="text-white-400 font-semibold">{SIMULATION_RESULT[`${MAPPINGS[resultQueryParam]} x ${partnerPersonality}`]["lifestyle"]}</span>
                                            </div>
                                            <div className="flex pt-8">
                                                <span className="text-gray-300 font-bold">Pengelolaan Keuangan</span>
                                            </div>
                                            <div className="flex">
                                                <span className="text-white-400 font-semibold">{SIMULATION_RESULT[`${MAPPINGS[resultQueryParam]} x ${partnerPersonality}`]["moneyManagement"]}</span>
                                            </div>
                                            <div className="flex pt-8">
                                                <span className="text-gray-300 font-bold">Target Masa Depan</span>
                                            </div>
                                            <div className="flex">
                                                <span className="text-white-400 font-semibold">{SIMULATION_RESULT[`${MAPPINGS[resultQueryParam]} x ${partnerPersonality}`]["futureTarget"]}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h1 className="text-xl font-semibold mb-4 mt-8">Potensi Konflik</h1>
                                    <div className="bg-[#1E2432] rounded-lg p-4 mb-4">
                                        <div className="space-y-2">
                                            <div className="flex">
                                                <span className="text-gray-300 font-bold">{CONFLICT_RESULT[`${MAPPINGS[resultQueryParam]} x ${partnerPersonality}`]["firstConflictTitle"]}</span>
                                            </div>
                                            <div className="flex">
                                                <span className="text-white-400 font-semibold">{CONFLICT_RESULT[`${MAPPINGS[resultQueryParam]} x ${partnerPersonality}`]["firstConflictDescription"]}</span>
                                            </div>
                                            <div className="flex pt-8">
                                                <span className="text-gray-300 font-bold">{CONFLICT_RESULT[`${MAPPINGS[resultQueryParam]} x ${partnerPersonality}`]["secondConflictTitle"]}</span>
                                            </div>
                                            <div className="flex">
                                                <span className="text-white-400 font-semibold">{CONFLICT_RESULT[`${MAPPINGS[resultQueryParam]} x ${partnerPersonality}`]["secondConflictDescription"]}</span>
                                            </div>
                                            <div className="flex pt-8">
                                                <span className="text-gray-300 font-bold">{CONFLICT_RESULT[`${MAPPINGS[resultQueryParam]} x ${partnerPersonality}`]["thirdConflictTitle"]}</span>
                                            </div>
                                            <div className="flex">
                                                <span className="text-white-400 font-semibold">{CONFLICT_RESULT[`${MAPPINGS[resultQueryParam]} x ${partnerPersonality}`]["thirdConflictDescription"]}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h1 className="text-xl font-semibold mb-4 mt-8">Saran</h1>
                                    <div className="bg-[#1E2432] rounded-lg p-4 mb-4">
                                        <div className="space-y-2">
                                            {SUGGESTION_RESULT[`${MAPPINGS[resultQueryParam]} x ${partnerPersonality}`].map((item, index) => (
                                                <div key={index}>
                                                    <div className="flex">
                                                        <span className="text-gray-300 font-bold">{item.title}</span>
                                                    </div>
                                                    <div className="flex pb-8">
                                                        {item.description}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default function Page() {
    return (
        <div>
            <Suspense fallback={<div>Loading form...</div>}>
                <CoupleTestForm />
            </Suspense>
        </div>
    )
};