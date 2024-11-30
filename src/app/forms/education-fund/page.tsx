"use client";

import React, {useEffect, useState} from "react";
import FormHeader from "@/components/ui/form-header";
import FormQuestionCards from "@/components/ui/form-question-card";
import NumberInput from "@/components/ui/number-input";
import CurrencyInput from "@/components/ui/currency-input";
import SelectOption from "@/components/ui/select-option";

const EducationForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [educationFundStrategy, setEducationFundStrategy] = useState(null);
    const [kidName, setKidName] = useState("");
    const [isResultReady, setIsResultReady] = useState(false);
    const [answers, setAnswers] = useState({
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: "15",
        100: null,
        101: null,
        102: null,
        103: null,
        104: "10",
    })

    const EDUCATION_RANGE_MAPPING = {
        sd: "SD/MI",
        smp: "SMP/MTs",
        sma: "SMA/SMK/MA",
        s1: "S1/D4",
    }

    const SCHOOL_REGION_OPTIONS = [
        {value: "jakarta", display: "Jakarta"},
        {value: "java", display: "Pulau Jawa (di luar Jakarta)"},
        {value: "non_java", display: "Luar Pulau Jawa"},
        {value: "abroad", display: "Luar Negeri"},
    ]

    const SCHOOL_CATEGORY_OPTIONS = [
        {value: "negeri", display: "Negeri"},
        {value: "swasta", display: "Swasta"},
        {value: "national", display: "Nasional Plus"},
        {value: "international", display: "Internasional"},
    ]

    const UANG_PANGKAL_MAPPING = {
        sd: {
            jakarta: {
                negeri: "0",
                swasta: "23000000",
                national: "43000000",
                international: "57000000",
            },
            java: {
                negeri: "0",
                swasta: "22500000",
                national: "38000000",
                international: "57000000",
            },
            non_java: {
                negeri: "0",
                swasta: "12000000",
                national: "15000000",
                international: "30000000",
            },
            abroad: {
                general: "17000000",
            }
        },
        smp: {
            jakarta: {
                negeri: "0",
                swasta: "30000000",
                national: "32000000",
                international: "43000000",
            },
            java: {
                negeri: "0",
                swasta: "18500000",
                national: "27000000",
                international: "33000000",
            },
            non_java: {
                negeri: "0",
                swasta: "10000000",
                national: "18000000",
                international: "30000000",
            },
            abroad: {
                general: "17000000",
            }
        },
        sma: {
            jakarta: {
                negeri: "0",
                swasta: "22000000",
                national: "32000000",
                international: "54000000",
            },
            java: {
                negeri: "0",
                swasta: "12000000",
                national: "25000000",
                international: "33000000",
            },
            non_java: {
                negeri: "0",
                swasta: "11000000",
                national: "20000000",
                international: "27000000",
            },
            abroad: {
                general: "17000000",
            }
        },
        s1: {
            jakarta: {
                negeri: "12000000",
                swasta: "35000000",
            },
            java: {
                negeri: "30000000",
                swasta: "29000000",
            },
            non_java: {
                negeri: "0",
                swasta: "2700000",
            },
            abroad: {
                general: "0",
            }
        }
    };

    const UANG_SEKOLAH_MAPPING = {
        sd: {
            jakarta: {
                negeri: "0",
                swasta: "2000000",
                national: "2750000",
                international: "18000000",
            },
            java: {
                negeri: "0",
                swasta: "1600000",
                national: "3500000",
                international: "4500000",
            },
            non_java: {
                negeri: "0",
                swasta: "1000000",
                national: "1000000",
                international: "10800000",
            },
            abroad: {
                general: "17000000",
            }
        },
        smp: {
            jakarta: {
                negeri: "0",
                swasta: "2400000",
                national: "2500000",
                international: "22000000",
            },
            java: {
                negeri: "0",
                swasta: "1000000",
                national: "4000000",
                international: "8400000",
            },
            non_java: {
                negeri: "0",
                swasta: "1000000",
                national: "1800000",
                international: "13000000",
            },
            abroad: {
                general: "21000000",
            }
        },
        sma: {
            jakarta: {
                negeri: "0",
                swasta: "1800000",
                national: "2700000",
                international: "22000000",
            },
            java: {
                negeri: "0",
                swasta: "1000000",
                national: "4500000",
                international: "9000000",
            },
            non_java: {
                negeri: "0",
                swasta: "1000000",
                national: "1800000",
                international: "14000000",
            },
            abroad: {
                general: "26000000",
            }
        },
        s1: {
            jakarta: {
                negeri: "7000000",
                swasta: "20000000",
            },
            java: {
                negeri: "15000000",
                swasta: "12000000",
            },
            non_java: {
                negeri: "7000000",
                swasta: "6000000",
            },
            abroad: {
                general: "250000000",
            }
        }
    };

    const questions = [
        {
            id: 1,
            text: "Nama anak",
            subtext: "Catatan: informasi ini hanya akan digunakan untuk kebutuhan survey",
            type: "text",
        },
        {
            id: 2,
            text: `Usia ${kidName} saat ini`,
            subtext: "Catatan: informasi ini hanya akan digunakan untuk kebutuhan survey",
            type: "number",
            suffix: "tahun",
        },
        {
            id: 3,
            text: `Rencana pendidikan untuk ${kidName}`,
            subtext: "Pilih rencana jenjang awal pendidikan",
            type: "select",
            options: [
                {value: "sd", display: "SD/MI"},
                {value: "smp", display: "SMP/MTs"},
                {value: "sma", display: "SMA/SMK/MA"},
                {value: "s1", display: "S1/D4"},
            ],
        },
        {
            id: 4,
            text: "Penghasilan orang tua saat ini",
            type: "currency",
            placeholder: "Contoh: 50,000,000",
            prefix: "Rp",
            suffix: "/ bulan"
        },
        {
            id: 5,
            text: `Dana pendidikan ${kidName} yang sudah terkumpul saat ini`,
            type: "currency",
            placeholder: "Contoh: 10,000,000",
            prefix: "Rp",
        },
        {
            id: 6,
            text: "Inflasi biaya pendidikan",
            type: "number",
            suffix: "% / tahun",
        },
    ]

    const totalSteps = questions.length;

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
    };

    const handleGetResult = () => {
        setCurrentStep(prev => prev + 1);
    }
    useEffect(() => {
        console.log("Updated answers:", answers);
        setEducationFundStrategy(null);

        const educationRange = answers[3] ?? null;
        const currentParentsIncome = answers[4] ?? null;
        const educationFundCollected = answers[5] ?? null;
        const educationFundInflation = answers[6] ?? null;
        const schoolRegion = answers[100] ?? null;
        const schoolCategory = answers[101] ?? null;

        if (
            educationRange
            && currentParentsIncome
            && educationFundCollected
            && educationFundInflation
            && schoolRegion
            && schoolCategory
        ) {
            setIsResultReady(true);
        }

        console.log("Updated educationFundStrategy:", educationFundStrategy);

    }, [answers[102], answers[103], answers[104]])

    const handleIsNextButtonDisabled = (questionId) => {
        return (
            !(answers[questionId]) ||
            // Sudah menikah, tapi belum jawab pertanyaan tambahannya
            questionId === 3
            && answers[questionId]
            && !(
                answers[questionId]
                && answers[100]
                && answers[101]
                && answers[102]
                && answers[103]
                && answers[104]
            )
        )
    }

    useEffect(() => {
        console.log("Updated answers:", answers);
        setEducationFundStrategy(null);
        setKidName(answers[1]);

        const educationRange = answers[3] ?? null;
        const currentParentsIncome = answers[4] ?? null;
        const educationFundCollected = answers[5] ?? null;
        const educationFundInflation = answers[6] ?? null;
        const schoolRegion = answers[100] ?? null;
        const schoolCategory = answers[101] ?? null;

        // Only update answers if these values have changed
        if (educationRange && schoolRegion && schoolCategory) {
            const newUangPangkal = UANG_PANGKAL_MAPPING[educationRange][schoolRegion][schoolCategory];
            const newUangSekolah = UANG_SEKOLAH_MAPPING[educationRange][schoolRegion][schoolCategory];

            // Only update if values are different
            if (answers[102] !== newUangPangkal || answers[103] !== newUangSekolah) {
                setAnswers(prev => ({
                    ...prev,
                    102: newUangPangkal,
                    103: newUangSekolah,
                }));
            }

            if (
                (schoolRegion !== "abroad" && schoolCategory === "general")
                || (schoolRegion === "abroad" && schoolCategory !== "general")
            ) {
                setAnswers(prev => ({
                    ...prev,
                    101: null,
                    102: null,
                    103: null,
                }));
            }
        }

        if (currentParentsIncome && educationFundCollected && educationFundInflation) {
            setIsResultReady(true);
        }

        console.log("Updated educationFundStrategy:", educationFundStrategy);
    }, [answers[1], answers[3], answers[4], answers[5], answers[6], answers[100], answers[101]]) // Only depend on the input values

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
                            title={"Perhitungan Rencana Pendidikan Anak"}
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
                            handleIsNextButtonDisabled={(questionId) => handleIsNextButtonDisabled(questionId)}
                            isResultReady={isResultReady}
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
                            title={"Perhitungan Rencana Pendidikan Anak"}
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
                                    <h3 className="text-2xl">Rincian biaya pendidikan:</h3>
                                    <div className="w-full max-w-2xl rounded-lg overflow-hidden mt-4">
                                        {/* Header */}
                                        <div className="bg-[#A51246] p-4 text-center">
                                            <h2 className="text-xl font-semibold text-[#FFFFFF]">SD</h2>
                                        </div>

                                        {/* Cost Breakdown */}
                                        <div className="divide-y divide-gray-700">
                                            {/* Uang Pangkal */}
                                            <div className="bg-[#1E2432] p-4 flex justify-between items-center">
                                                <span className="text-white text-lg">Uang Pangkal</span>
                                                <span className="text-white text-lg font-semibold">{`Rp${formatNumber(answers[102])}`}</span>
                                            </div>

                                            {/* SPP */}
                                            <div className="bg-[#3A4356] p-4 flex justify-between items-center">
                                                <span className="text-white text-lg">SPP</span>
                                                <span className="text-white text-lg font-semibold">Rp50,000,000</span>
                                            </div>

                                            {/* Biaya Lain */}
                                            <div className="bg-[#1E2432] p-4 flex justify-between items-center">
                                                <span className="text-white text-lg">Biaya Lain</span>
                                                <span className="text-white text-lg font-semibold">Rp50,000,000</span>
                                            </div>

                                            {/* Total */}
                                            <div className="bg-[#3A4356] p-4 flex justify-between items-center">
                                                <span className="text-white text-lg">Total</span>
                                                <span className="text-white text-lg font-semibold">Rp50,000,000</span>
                                            </div>
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
                )
            }

            {
                currentStep === 3
                && answers[currentStep]
                && (
                    <div className="p-6">
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h2 className="text-xl font-semibold my-2" style={{ color: "#12174F" }}>Jenjang sekolah</h2>
                            <h2 className="text-md font-bold my-2" style={{ color: "#A51246" }}>{EDUCATION_RANGE_MAPPING[answers[3]]}</h2>
                            <h2 className="text-xl font-semibold my-2 mt-8" style={{ color: "#12174F" }}>Daerah sekolah</h2>
                            <div className="space-y-3 mt-4">
                                {SCHOOL_REGION_OPTIONS.map((option, optIndex) => (
                                    <SelectOption
                                        key={optIndex}
                                        questionId={100}
                                        chosenValue={answers[100]}
                                        optionValue={option.value}
                                        optionDisplay={option.display}
                                        handleInputChange={() => handleInputChange(100, option.value)}
                                    />
                                ))}
                            </div>
                            <h2 className="text-xl font-semibold my-2 mt-12" style={{ color: "#12174F" }}>Jenis sekolah</h2>
                                {answers[100] !== "abroad" && SCHOOL_CATEGORY_OPTIONS.map((option, optIndex) => (
                                    <SelectOption
                                        key={optIndex}
                                        questionId={101}
                                        chosenValue={answers[101]}
                                        optionValue={option.value}
                                        optionDisplay={option.display}
                                        handleInputChange={() => handleInputChange(101, option.value)}
                                    />
                                ))}
                                {answers[100] === "abroad" &&
                                    <SelectOption
                                        questionId={101}
                                        chosenValue={answers[101]}
                                        optionValue={"general"}
                                        optionDisplay={"General"}
                                        handleInputChange={() => handleInputChange(101, "general")}
                                    />
                                }
                            <h2 className="text-xl font-semibold my-2 mt-12" style={{ color: "#12174F" }}>Perkiraan uang pangkal</h2>
                            <CurrencyInput
                                prefix={"Rp"}
                                placeholder={""}
                                value={answers[102] || ""}
                                onChange={(e) => handleInputChange(102, e.target.value)}
                            />
                            <h2 className="text-xl font-semibold my-2 mt-12" style={{ color: "#12174F" }}>Perkiraan uang sekolah</h2>
                            <CurrencyInput
                                prefix={"Rp"}
                                suffix={"/ bulan"}
                                placeholder={""}
                                value={answers[103] || ""}
                                onChange={(e) => handleInputChange(103, e.target.value)}
                            />
                            <h2 className="text-xl font-semibold my-2 mt-12" style={{ color: "#12174F" }}>Perkiraan biaya lain-lain</h2>
                            <NumberInput
                                placeholder={""}
                                suffix={"%"}
                                value={answers[104] || ""}
                                onChange={(e) => handleInputChange(104, e.target.value)}
                            />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default EducationForm;