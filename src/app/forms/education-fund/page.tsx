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
        1: null, // nama anak
        2: null, // usia anak
        3: null, // jenjang pendidikan
        100: null, // school region
        101: null, // school category
        102: null, // estimasi uang pangkal
        103: null, // estimasi SPP
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

    const SCHOOL_REGION_MAPPING = {
        jakarta: "Jakarta",
        java: "Pulau Jawa (di luar Jakarta)",
        non_java: "Luar Pulau Jawa",
        abroad: "Luar Negeri",
    }

    const SCHOOL_CATEGORY_OPTIONS = [
        {value: "negeri", display: "Negeri"},
        {value: "swasta", display: "Swasta"},
        {value: "national", display: "Nasional Plus"},
        {value: "international", display: "Internasional"},
    ]

    const SCHOOL_CATEGORY_MAPPING = {
        negeri: "Negeri",
        swasta: "Swasta",
        national: "Nasional Plus",
        international: "Internasional",
    }

    const UANG_PANGKAL_MAPPING = {
        sd: {
            jakarta: {
                negeri: "0",
                swasta: "20000000",
                national: "35000000",
                international: "60000000",
            },
            java: {
                negeri: "0",
                swasta: "15000000",
                national: "25000000",
                international: "50000000",
            },
            non_java: {
                negeri: "0",
                swasta: "12000000",
                national: "15000000",
                international: "30000000",
            },
            abroad: {
                general: "18000000",
            }
        },
        smp: {
            jakarta: {
                negeri: "0",
                swasta: "35000000",
                national: "40000000",
                international: "43000000",
            },
            java: {
                negeri: "0",
                swasta: "20000000",
                national: "22000000",
                international: "40000000",
            },
            non_java: {
                negeri: "0",
                swasta: "15000000",
                national: "17000000",
                international: "40000000",
            },
            abroad: {
                general: "18000000",
            }
        },
        sma: {
            jakarta: {
                negeri: "0",
                swasta: "25000000",
                national: "45000000",
                international: "58000000",
            },
            java: {
                negeri: "0",
                swasta: "25000000",
                national: "30000000",
                international: "55000000",
            },
            non_java: {
                negeri: "0",
                swasta: "25000000",
                national: "30000000",
                international: "55000000",
            },
            abroad: {
                general: "20000000",
            }
        },
        s1: {
            jakarta: {
                negeri: "15000000",
                swasta: "40000000",
            },
            java: {
                negeri: "20000000",
                swasta: "35000000",
            },
            non_java: {
                negeri: "20000000",
                swasta: "35000000",
            },
            abroad: {
                general: "1000000000",
            }
        }
    };

    const UANG_SEKOLAH_MAPPING = {
        sd: {
            jakarta: {
                negeri: "100000",
                swasta: "1500000",
                national: "3000000",
                international: "10000000",
            },
            java: {
                negeri: "100000",
                swasta: "1000000",
                national: "2000000",
                international: "6000000",
            },
            non_java: {
                negeri: "100000",
                swasta: "1000000",
                national: "1000000",
                international: "10800000",
            },
            abroad: {
                general: "18000000",
            }
        },
        smp: {
            jakarta: {
                negeri: "300000",
                swasta: "2000000",
                national: "3000000",
                international: "15000000",
            },
            java: {
                negeri: "300000",
                swasta: "1000000",
                national: "1200000",
                international: "15000000",
            },
            non_java: {
                negeri: "300000",
                swasta: "1000000",
                national: "1200000",
                international: "15000000",
            },
            abroad: {
                general: "25000000",
            }
        },
        sma: {
            jakarta: {
                negeri: "500000",
                swasta: "2000000",
                national: "3300000",
                international: "25000000",
            },
            java: {
                negeri: "0",
                swasta: "1000000",
                national: "4500000",
                international: "9000000",
            },
            non_java: {
                negeri: "350000",
                swasta: "2500000",
                national: "3200000",
                international: "16000000",
            },
            abroad: {
                general: "30000000",
            }
        },
        s1: {
            jakarta: {
                negeri: "2000000",
                swasta: "22000000",
            },
            java: {
                negeri: "1200000",
                swasta: "2000000",
            },
            non_java: {
                negeri: "1300000",
                swasta: "4000000",
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
            subtext: "Catatan: informasi ini hanya akan digunakan untuk kebutuhan penamaan perhitungan",
            type: "text",
        },
        {
            id: 2,
            text: `Usia ${kidName} saat ini`,
            subtext: "Catatan: informasi ini hanya akan digunakan untuk kebutuhan penamaan perhitungan",
            type: "number",
            suffix: "tahun",
        },
        {
            id: 3,
            text: `Rencana pendidikan untuk ${kidName}`,
            subtext: "Silakan pilih salah satu jenjang pendidikan yang ingin kamu ketahui estimasi biayanya.",
            type: "select",
            options: [
                {value: "sd", display: "SD/MI"},
                {value: "smp", display: "SMP/MTs"},
                {value: "sma", display: "SMA/SMK/MA"},
                {value: "s1", display: "S1/D4"},
            ],
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

    const calculateResults = () => {
        console.log("Calculate Results...")
        const inflationRate = Number("10") / 100;

        const educationLevel = answers[3];
        const childrenAge = Number(answers[2]);

        let yearsUntil = 0;
        if (educationLevel == "sd") {
            yearsUntil = 6;
        } else if (educationLevel == "smp") {
            yearsUntil = 3;
        } else if (educationLevel == "sma") {
            yearsUntil = 3;
        } else if (educationLevel == "s1") {
            yearsUntil = 4;
        }

        console.log(answers[102]);
        console.log(answers[103]);
        console.log(answers[104]);
        console.log("childrenAge");
        console.log(childrenAge);

        const uangPangkal = Number(answers[102]) * Math.pow(1 + inflationRate, yearsUntil);
        const spp = Number(answers[103]) * Math.pow(1 + inflationRate, yearsUntil) * 12 * yearsUntil;
        const biayaLainLain = inflationRate * (spp + uangPangkal);
        const total = uangPangkal + spp + biayaLainLain;

        const futureAmountToSave = total * ((1 - (1 / Math.pow(1 + inflationRate, yearsUntil))) / inflationRate);
        const totalAmountToSaveMonthly = (futureAmountToSave * inflationRate / 12) / ((Math.pow(1 + inflationRate/12, yearsUntil * 12) - 1))

        return {
            uangPangkal,
            spp,
            biayaLainLain,
            total,
            futureAmountToSave,
            totalAmountToSaveMonthly,
        };
    };

    useEffect(() => {
        console.log("Updated answers:", answers);
        setEducationFundStrategy(null);

        const educationRange = answers[3] ?? null;
        const schoolRegion = answers[100] ?? null;
        const schoolCategory = answers[101] ?? null;

        if (
            educationRange
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

        if (educationRange && schoolRegion && schoolCategory) {
            setIsResultReady(true);
        }

        console.log("Updated educationFundStrategy:", educationFundStrategy);
    }, [answers[1], answers[3], answers[4], answers[100], answers[101]]) // Only depend on the input values

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
                                {isResultReady && (() => {
                                    const results = calculateResults();
                                    return (
                                        <>
                                            <b><h1 className="text-3xl text-bold">RINCIAN BIAYA PENDIDIKAN:</h1></b>
                                            <br/>
                                            <h5 className="text-2xl">Jenjang Pendidikan</h5>
                                            <h3 className="text-md">{EDUCATION_RANGE_MAPPING[answers[3]]}</h3>
                                            <br/>
                                            <h3 className="text-2xl">Daerah Sekolah</h3>
                                            <h3 className="text-md">{SCHOOL_REGION_MAPPING[answers[100]]}</h3>
                                            <br/>
                                            <h3 className="text-2xl">Jenis Sekolah</h3>
                                            <h3 className="text-md">{SCHOOL_CATEGORY_MAPPING[answers[101]]}</h3>
                                            <br/>
                                            <h3 className="text-2xl">Perkiraan Uang Pangkal</h3>
                                            <h3 className="text-md">{`Rp${formatNumber(answers[102])}`}</h3>
                                            <br/>
                                            <h3 className="text-2xl">Perkiraan Uang Sekolah</h3>
                                            <h3 className="text-md">{`Rp${formatNumber(answers[103])}`}</h3>
                                            <br/>
                                            <h3 className="text-2xl">Perkiraan Biaya Lain-lain</h3>
                                            <h3 className="text-md">{answers[104]}%</h3>
                                            <br/>
                                            <div className="w-full max-w-2xl rounded-lg overflow-hidden mt-4">
                                                {/* Header */}
                                                <div className="bg-[#A51246] p-4 text-center">
                                                    <h2 className="text-xl font-semibold text-[#FFFFFF]">{EDUCATION_RANGE_MAPPING[answers[3]]}</h2>
                                                </div>

                                                {/* Cost Breakdown */}
                                                <div className="divide-y divide-gray-700">
                                                    {/* Uang Pangkal */}
                                                    <div className="bg-[#1E2432] p-4 flex justify-between items-center">
                                                        <span className="text-white text-lg">Uang Pangkal</span>
                                                        <span className="text-white text-lg font-semibold">{`Rp${formatNumber(Math.round(results.uangPangkal))}`}</span>
                                                    </div>

                                                    {/* SPP */}
                                                    <div className="bg-[#3A4356] p-4 flex justify-between items-center">
                                                        <span className="text-white text-lg">SPP</span>
                                                        <span className="text-white text-lg font-semibold">{`Rp${formatNumber(Math.round(results.spp))}`}</span>
                                                    </div>

                                                    {/* Biaya Lain */}
                                                    <div className="bg-[#1E2432] p-4 flex justify-between items-center">
                                                        <span className="text-white text-lg">Biaya Lain</span>
                                                        <span className="text-white text-lg font-semibold">{`Rp${formatNumber(Math.round(results.biayaLainLain))}`}</span>
                                                    </div>

                                                    {/* Total */}
                                                    <div className="bg-[#3A4356] p-4 flex justify-between items-center">
                                                        <span className="text-white text-lg">Total</span>
                                                        <span className="text-white text-lg font-semibold">{`Rp${formatNumber(Math.round(results.total))}`}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-[#1E2432] rounded-lg p-4 mt-8">
                                                <h4 className="text-2xl mb-4">Strategi</h4>
                                                <div className="space-y-2">
                                                    <div className="flex justify-between">
                                                        <span>Jumlah uang yang harus ditabung sampai {answers[1]} <b>LULUS</b> sekolah</span>
                                                        <span>{`Rp${formatNumber(Math.round(results.futureAmountToSave))}`}</span>
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <div className="flex justify-between">
                                                        <span>Jumlah uang yang ditabung setiap akhir bulan (per bulan ini) </span>
                                                        <span>{`Rp${formatNumber(Math.round(results.totalAmountToSaveMonthly))}`}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })()}
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
                            <p className="text-sm mb-4" style={{ color: "#252E64" }}>Masukkan estimasi biaya masuk (uang pangkal) yang dibayarkan <b>saat pertama kali</b> mendaftarkan anak ke sekolah tersebut.</p>
                            <CurrencyInput
                                prefix={"Rp"}
                                placeholder={""}
                                value={answers[102] || ""}
                                onChange={(e) => handleInputChange(102, e.target.value)}
                            />
                            <h2 className="text-xl font-semibold my-2 mt-12" style={{ color: "#12174F" }}>Perkiraan uang sekolah</h2>
                            <p className="text-sm mb-4" style={{ color: "#252E64" }}>Masukkan estimasi biaya sekolah bulanan (SPP) <b>yang dibayarkan secara rutin setiap bulan.</b></p>
                            <CurrencyInput
                                prefix={"Rp"}
                                suffix={"/ bulan"}
                                placeholder={""}
                                value={answers[103] || ""}
                                onChange={(e) => handleInputChange(103, e.target.value)}
                            />
                            <h2 className="text-xl font-semibold my-2 mt-12" style={{ color: "#12174F" }}>Perkiraan biaya lain-lain</h2>
                            <p className="text-sm mb-4" style={{ color: "#252E64" }}>Masukkan estimasi <b>biaya tambahan</b> seperti buku, seragam, kegiatan ekstrakurikuler, transportasi, atau study tour. Masukkan dalam bentuk <b>persen</b>. <br/><br/><b><i>Berapa persen dari total biaya tahunan (uang sekolah + uang pangkal per tahun)?</i></b>. <br/><br/>Contoh: Jika total biaya tahunan = <b>Rp100.000.000</b> dan biaya tambahan <b>Rp20.000.000</b>, maka biaya tambahan adalah <b>20% dari total biaya tahunan</b> → masukkan angka <b>20.</b></p>
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