"use client";

import React, {useEffect, useState} from "react";
import CalcQuestionFlow, { CalcResultShell, CalcNotice } from "@/components/calc/question-flow";
import { contributionNeeded, formatNumber } from "@/lib/calc/finance";
import { CalcField, CalcOptions } from "@/components/calc";

const EducationForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [educationFundStrategy, setEducationFundStrategy] = useState<any>(null);
    const [kidName, setKidName] = useState("");
    const [isResultReady, setIsResultReady] = useState(false);
    const [isAnnouncementAcknowledged, setIsAnnouncementAcknowledged] = useState(false);
    const [answers, setAnswers] = useState<Record<number, any>>({
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
                national: "0",
                international: "0",
            },
            java: {
                negeri: "20000000",
                swasta: "35000000",
                national: "0",
                international: "0",
            },
            non_java: {
                negeri: "20000000",
                swasta: "35000000",
                national: "0",
                international: "0",
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
                national: "0",
                international: "0",
            },
            java: {
                negeri: "1200000",
                swasta: "2000000",
                national: "0",
                international: "0",
            },
            non_java: {
                negeri: "1300000",
                swasta: "4000000",
                national: "0",
                international: "0",
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
            subtext: "",
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

    const handleSetIsAcknowledged = () => {
        setIsAnnouncementAcknowledged(true);
    }

    const calculateResults = () => {
        const inflationRate = Number("4") / 100;

        const educationLevel = answers[3];
        const childrenAge = Number(answers[2]);

        let finishedAt = 0;
        let startedAt = 0;

        let yearsUntil = 0;
        if (educationLevel == "sd") {
            yearsUntil = 6;
            startedAt = 6;
            finishedAt = 12;
        } else if (educationLevel == "smp") {
            yearsUntil = 3;
            startedAt = 12;
            finishedAt = 15;
        } else if (educationLevel == "sma") {
            yearsUntil = 3;
            startedAt = 15;
            finishedAt = 18
        } else if (educationLevel == "s1") {
            yearsUntil = 4;
            startedAt = 18;
            finishedAt = 22
        }


        const uangPangkal = Number(answers[102]) * Math.pow(1 + inflationRate, Math.max(startedAt - Number(answers[2]), 0));
        const spp = Number(answers[103]) * Math.pow(1 + inflationRate, Math.max(finishedAt - Number(answers[2]), 0)) * 12 * yearsUntil;
        const biayaLainLain = (Number(answers[104]) / 100) * (spp + uangPangkal);
        const total = uangPangkal + spp + biayaLainLain;

        const futureAmountToSave = total
        const totalAmountToSaveMonthly = contributionNeeded(total, 0, (startedAt - childrenAge) * 12);

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


    }, [answers[102], answers[103], answers[104]])

    const handleIsNextButtonDisabled = (questionId) => {
        return (
            !(answers[questionId]) ||
            // Sudah menikah, tapi belum jawab pertanyaan tambahannya
            (
                questionId === 3
                && answers[questionId]
                && answers[100]
                && answers[101]
                && answers[102]
                && answers[103]
                && answers[104]
            )
        )
    }

    useEffect(() => {
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

    }, [answers[1], answers[3], answers[4], answers[100], answers[101]]) // Only depend on the input values



    return (
        <div
        >
            {
                currentStep === 1 && !isAnnouncementAcknowledged &&
                (
                    <CalcNotice
                        href={"/"}
                        title={"Perhitungan Rencana Pendidikan Anak"}
                        totalSteps={totalSteps}
                        heading={"DISCLAIMER ⚠️"}
                        text={"Gunakan kalkulator ini sebelum anak masuk jenjang pendidikan yang dituju agar hasil perhitungan lebih relevan untuk perencanaan ke depan."}
                        buttonLabel={"Baik, saya mengerti"}
                        onContinue={() => handleSetIsAcknowledged()}
                    />
                )
            }
            {
                currentStep <= totalSteps && isAnnouncementAcknowledged &&
                (
                    <CalcQuestionFlow
                        href={"/"}
                        title={"Perhitungan Rencana Pendidikan Anak"}
                        questions={questions}
                        answers={answers}
                        currentStep={currentStep}
                        totalSteps={totalSteps}
                        handleInputChange={(questionId, questionValue) => handleInputChange(questionId, questionValue)}
                        handleSetCurrentStep={(step) => setCurrentStep(step)}
                        handleGetResult={() => handleGetResult()}
                        handleIsNextButtonDisabled={(questionId) => handleIsNextButtonDisabled(questionId)}
                        isResultReady={isResultReady}
                        extra={currentStep === 3 && answers[currentStep] ? (
                            <>
                                <div className="calc-qextra-item">
                                    <h2 className="home-serif calc-qextra-title">Jenjang sekolah</h2>
                                    <p className="calc-qextra-chosen">{EDUCATION_RANGE_MAPPING[answers[3]]}</p>
                                </div>
                                <div className="calc-qextra-item">
                                    <h2 className="home-serif calc-qextra-title">Daerah sekolah</h2>
                                    <CalcOptions
                                        label={"Daerah sekolah"}
                                        options={SCHOOL_REGION_OPTIONS}
                                        value={answers[100]}
                                        onSelect={(value) => handleInputChange(100, value)}
                                    />
                                </div>
                                <div className="calc-qextra-item">
                                    <h2 className="home-serif calc-qextra-title">Jenis sekolah</h2>
                                    <CalcOptions
                                        label={"Jenis sekolah"}
                                        options={answers[100] === "abroad" ? [{value: "general", display: "General"}] : SCHOOL_CATEGORY_OPTIONS}
                                        value={answers[101]}
                                        onSelect={(value) => handleInputChange(101, value)}
                                    />
                                </div>
                                <div className="calc-qextra-item">
                                    <h2 className="home-serif calc-qextra-title">Perkiraan uang pangkal</h2>
                                    <p className="calc-qsub">Masukkan estimasi biaya masuk (uang pangkal) yang dibayarkan <b>saat pertama kali</b> mendaftarkan anak ke sekolah tersebut.</p>
                                    <CalcField
                                        currency
                                        compact
                                        label={"Perkiraan uang pangkal"}
                                        prefix={"Rp"}
                                        placeholder={""}
                                        value={answers[102] || ""}
                                        onChange={(e) => handleInputChange(102, e.target.value)}
                                    />
                                </div>
                                <div className="calc-qextra-item">
                                    <h2 className="home-serif calc-qextra-title">Perkiraan uang sekolah</h2>
                                    <p className="calc-qsub">Masukkan estimasi biaya sekolah bulanan (SPP) <b>yang dibayarkan secara rutin setiap bulan.</b></p>
                                    <CalcField
                                        currency
                                        compact
                                        label={"Perkiraan uang sekolah"}
                                        prefix={"Rp"}
                                        suffix={"/ bulan"}
                                        placeholder={""}
                                        value={answers[103] || ""}
                                        onChange={(e) => handleInputChange(103, e.target.value)}
                                    />
                                </div>
                                <div className="calc-qextra-item">
                                    <h2 className="home-serif calc-qextra-title">Perkiraan biaya lain-lain</h2>
                                    <p className="calc-qsub">Masukkan estimasi <b>biaya tambahan</b> seperti buku, seragam, kegiatan ekstrakurikuler, transportasi, atau study tour. Masukkan dalam bentuk <b>persen</b>. <br/><br/><b><i>Berapa persen dari total biaya tahunan (uang sekolah + uang pangkal)?</i></b>. <br/><br/>Contoh: Jika total biaya tahunan = <b>Rp100.000.000</b> dan biaya tambahan <b>Rp20.000.000</b>, maka biaya tambahan adalah <b>20% dari total biaya tahunan</b> → masukkan angka <b>20.</b></p>
                                    <CalcField
                                        compact
                                        label={"Perkiraan biaya lain-lain"}
                                        suffix={"%"}
                                        placeholder={""}
                                        value={answers[104] || ""}
                                        onChange={(e) => handleInputChange(104, e.target.value)}
                                    />
                                </div>
                            </>
                        ) : null}
                    />
                )
            }

            {
                currentStep > totalSteps &&
                (
                    <CalcResultShell href={"/"} title={"Perhitungan Rencana Pendidikan Anak"} totalSteps={totalSteps}>
                        <div className="p-5">
                            <div className="calc-result-capture">
                                {isResultReady && (() => {
                                    const results = calculateResults();
                                    return (
                                        <>
                                            <section className="calc-hero">
                                                <h1 className="home-serif calc-edu-title">RINCIAN BIAYA PENDIDIKAN:</h1>
                                            </section>
                                            <div className="calc-rgrid">
                                                <section className="calc-glass calc-section">
                                                    <div className="calc-row"><span>Jenjang Pendidikan</span><strong>{EDUCATION_RANGE_MAPPING[answers[3]]}</strong></div>
                                                    <div className="calc-row"><span>Daerah Sekolah</span><strong>{SCHOOL_REGION_MAPPING[answers[100]]}</strong></div>
                                                    <div className="calc-row"><span>Jenis Sekolah</span><strong>{SCHOOL_CATEGORY_MAPPING[answers[101]]}</strong></div>
                                                    <div className="calc-row"><span>Perkiraan Uang Pangkal</span><strong>{`Rp${formatNumber(answers[102])}`}</strong></div>
                                                    <div className="calc-row"><span>Perkiraan Uang Sekolah</span><strong>{`Rp${formatNumber(answers[103])}`}</strong></div>
                                                    <div className="calc-row"><span>Perkiraan Biaya Lain-lain</span><strong>{answers[104]}%</strong></div>
                                                </section>
                                                <section className="calc-glass calc-section">
                                                    <h2 className="home-serif">{EDUCATION_RANGE_MAPPING[answers[3]]}</h2>
                                                    <div>
                                                        <div className="calc-row"><span>Uang Pangkal</span><strong>{`Rp${formatNumber(Math.round(results.uangPangkal))}`}</strong></div>
                                                        <div className="calc-row"><span>SPP</span><strong>{`Rp${formatNumber(Math.round(results.spp))}`}</strong></div>
                                                        <div className="calc-row"><span>Biaya Lain</span><strong>{`Rp${formatNumber(Math.round(results.biayaLainLain))}`}</strong></div>
                                                        <div className="calc-row"><span>Total biaya pendidikan (setelah memperhitungkan inflasi)</span><strong className="is-short">{`Rp${formatNumber(Math.round(results.total))}`}</strong></div>
                                                    </div>
                                                </section>
                                                <section className="calc-glass calc-section is-wide">
                                                    <h2 className="home-serif">Strategi</h2>
                                                    <div>
                                                        <div className="calc-row"><span>Jumlah tabungan yang harus terkumpul sebelum anak masuk {EDUCATION_RANGE_MAPPING[answers[3]]}</span><strong>{`Rp${formatNumber(Math.round(results.total))}`}</strong></div>
                                                        <div className="calc-row"><span>Jumlah uang yang harus ditabung setiap akhir bulan</span><strong>{`Rp${formatNumber(Math.round(results.totalAmountToSaveMonthly))}`}</strong></div>
                                                    </div>
                                                    <p className="calc-edu-note"><b>(Asumsi: Tidak ada imbal balik investasi)</b></p>
                                                </section>
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
                    </CalcResultShell>
                )
            }

        </div>
    )
}

export default EducationForm;