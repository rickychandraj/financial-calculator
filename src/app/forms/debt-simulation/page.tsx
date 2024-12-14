"use client";

import React, {useEffect, useState} from "react";
import FormHeader from "@/components/ui/form-header";
import FormQuestionCards from "@/components/ui/form-question-card";

const DebtSimulation = () => {
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

    const [currentStep, setCurrentStep] = useState(1);
    const [simulationTable, setSimulationTable] = useState([
        {
            period: 1,
            cicilanPerBulan: "664809",
            bungaPerBulan: "75000",
            penguranganPokokUtang: "589809",
            sisaUtang: "15000000"
        }
    ]);

    const [totalMinimumPaymentMonthly, setTotalMinimumPaymentMonthly] = useState(0);
    const [isResultReady, setIsResultReady] = useState(false);
    const [answers, setAnswers] = useState({
        1: null, // debt name
        2: null, // total debt
        3: null, // % interest rate per month
        4: null, // % minimum payment per month
        5: null, // how much money do you want to pay?
    });

    const questions = [
        {
            id: 1,
            text: "Apa nama utang kamu?",
            type: "text",
            placeholder: "Contoh: Renovasi Rumah",
        },
        {
            id: 2,
            text: "Berapa total utang kamu?",
            type: "currency",
            prefix: "Rp",
        },
        {
            id: 3,
            text: "Berapa bunga per bulan?",
            type: "number",
            placeholder: "Contoh: 5%",
            suffix: "%",
        },
        {
            id: 4,
            text: "Berapa % pembayaran minimum perbulan?",
            subtext: "Biasanya ini merupakan ketentuan dari Bank / pihak peminjam. Ada minimal pembayaran yang perlu dipenuhi setiap bulannya",
            type: "number",
            suffix: "%",
        },
        {
            id: 5,
            text: "Rencananya, kamu mau membayar berapa per bulan nya untuk utang ini?",
            subtext: `Pastikan jumlahnya di atas jumlah pembayaran minimum per bulan, yaitu Rp${formatNumber(totalMinimumPaymentMonthly)}`,
            type: "currency",
            prefix: "Rp",
        },
    ]

    useEffect(() => {
        if (isResultReady) {
            let sisaUtang = Number(answers[2]);
            let updatedSimulationTable = [];

            let periodTemp = 1

            while (sisaUtang > 0) {
                let cicilanPerBulanTemp = Number(answers[5]);
                let bungaPerBulanTemp = Number(answers[3]) / 100 * sisaUtang;
                let penguranganPokokUtangTemp = cicilanPerBulanTemp - bungaPerBulanTemp;
                let sisaUtangTemp = sisaUtang - penguranganPokokUtangTemp;

                console.log(sisaUtang)

                if (sisaUtang < cicilanPerBulanTemp) {
                    penguranganPokokUtangTemp = sisaUtang;
                    sisaUtangTemp = 0;
                    cicilanPerBulanTemp = penguranganPokokUtangTemp + bungaPerBulanTemp;
                }

                updatedSimulationTable.push(
                    {
                        period: periodTemp,
                        cicilanPerBulan: cicilanPerBulanTemp,
                        bungaPerBulan: bungaPerBulanTemp,
                        penguranganPokokUtang: penguranganPokokUtangTemp,
                        sisaUtang: sisaUtangTemp,
                    }
                )
                sisaUtang = sisaUtangTemp;
                periodTemp = periodTemp + 1;
            }

            setSimulationTable(updatedSimulationTable);
        }
    }, [isResultReady])

    useEffect(() => {
        setTotalMinimumPaymentMonthly((Number(answers[4]) / 100) * Number(answers[2]));
    }, [answers[4]])

    useEffect(() => {
        const allFieldsFilled = Object.values(answers).every(value => value !== null);
        setIsResultReady(allFieldsFilled);

        if (answers[5] && Number(answers[5]) < Number(totalMinimumPaymentMonthly)) {
            setIsResultReady(false);
        }
    }, [answers])

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

    const handleIsNextButtonDisabled = (questionId) => {
        return !answers[questionId];
    };

    const handleGetResult = () => {
        setCurrentStep(prev => prev + 1);
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
                            title={"Simulasi Pelunasan Utang"}
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
                            title={"Simulasi Pelunasan Utang"}
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
                                <h3 className="text-3xl">Rincian simulasi pelunasan kartu kredit:</h3>
                                <table className="w-full text-left border-spacing-y-2 mt-4">
                                    <thead className="text-sm font-semibold text-white text-left">
                                        <tr className="bg-[#1E2432]">
                                            <th className="text-white text-xs font-semibold">Bulan ke-</th>
                                            <th className="text-white text-xs font-semibold">Cicilan</th>
                                            <th className="text-white text-xs font-semibold">Bunga</th>
                                            <th className="text-white text-xs font-semibold">Pengurangan pokok utang</th>
                                            <th className="text-white text-xs font-semibold">Sisa utang</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-[#1E2432]">
                                            <td className="text-white text-xs font-semibold">0</td>
                                            <td className="text-white text-xs font-semibold"></td>
                                            <td className="text-white text-xs font-semibold"></td>
                                            <td className="text-white text-xs font-semibold"></td>
                                            <td className="text-white text-xs font-semibold">{`Rp${formatNumber(answers[2])}`}</td>
                                        </tr>
                                        {simulationTable.map((item) => (
                                        <tr className="bg-[#1E2432]">
                                            <td className="text-white text-xs font-semibold">{item.period}</td>
                                            <td className="text-white text-xs font-semibold">{`Rp${formatNumber(Math.round(Number(item.cicilanPerBulan)))}`}</td>
                                            <td className="text-white text-xs font-semibold">{`Rp${formatNumber(Math.round(Number(item.bungaPerBulan)))}`}</td>
                                            <td className="text-white text-xs font-semibold">{`Rp${formatNumber(Math.round(Number(item.penguranganPokokUtang)))}`}</td>
                                            <td className="text-white text-xs font-semibold">{`Rp${formatNumber(Math.round(Math.max(Number(item.sisaUtang), 0)))}`}</td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
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
        </div>
    )
}

export default DebtSimulation;