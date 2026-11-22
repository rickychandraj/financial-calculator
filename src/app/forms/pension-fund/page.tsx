"use client";

import React, { useEffect, useState } from "react";
import CalcQuestionFlow, { CalcResultShell } from "@/components/calc/question-flow";
import { useLanguage } from "@/lib/i18n";
import { annuityPresentValue, formatNumber, futureValue, monthlySavingNeeded } from "@/lib/calc/finance";

const LIFE_EXPECTANCY = 74; // Assumed life expectancy, in years


const PensionFundForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const { lang } = useLanguage();
    const L = (id: string, en: string) => (lang === "en" ? en : id);
    const fmt = (value: number | string) => formatNumber(value, lang);
    const [isResultReady, setIsResultReady] = useState(false);
    const [answers, setAnswers] = useState<Record<number, any>>({
        1: null, // monthly expenses
        2: null, // current age
        3: null, // retirement age
        4: null, // current pension savings
        5: null, // return rate
    });

    // The maths needs: current age < retirement age < life expectancy.
    const currentAge = Number(answers[2]);
    const retirementAge = Number(answers[3]);
    const ageError = answers[2] && currentAge >= LIFE_EXPECTANCY - 1
        ? L(`Perhitungan ini hanya berlaku untuk usia di bawah ${LIFE_EXPECTANCY - 1} tahun`, `This calculation only works for ages under ${LIFE_EXPECTANCY - 1}`)
        : null;
    const retirementAgeError = !answers[3]
        ? null
        : retirementAge <= currentAge
            ? L("Usia pensiun harus lebih besar dari usia kamu sekarang", "Your retirement age must be higher than your current age")
            : retirementAge >= LIFE_EXPECTANCY
                ? L(`Usia pensiun harus di bawah ${LIFE_EXPECTANCY} tahun (asumsi angka harapan hidup)`, `Your retirement age must be under ${LIFE_EXPECTANCY} (assumed life expectancy)`)
                : null;

    const questions = [
        {
            id: 1,
            text: L("Berapa pengeluaran kamu setiap bulan?", "How much do you spend each month?"),
            subtext: L("Jumlah uang yang harus kamu keluarkan setiap bulannya untuk hidup, termasuk biaya sewa/kos, makan, dll", "The money you need to live each month, including rent, food, etc."),
            type: "currency",
            prefix: "Rp"
        },
        {
            id: 2,
            text: L("Berapa usia kamu sekarang?", "How old are you now?"),
            type: "number",
            suffix: L("tahun", "years"),
            error: ageError,
        },
        {
            id: 3,
            text: L("Kamu ingin pensiun di usia", "You want to retire at age"),
            subtext: L("Target usia kamu saat kamu sudah tidak lagi bekerja", "The age at which you plan to stop working"),
            type: "number",
            suffix: L("tahun", "years"),
            error: retirementAgeError,
        },
        {
            id: 4,
            text: L("Dana pensiun yang telah tersedia sampai saat ini", "Retirement savings you have so far"),
            subtext: L("Jumlah tabungan untuk dana pensiun yang sudah terkumpul sampai dengan kamu mengisi form ini", "Retirement savings you have built up as of filling in this form"),
            type: "currency",
            prefix: "Rp",
        },
        {
            id: 5,
            text: L("Kamu akan investasi di produk yang return-nya?", "What return does the product you will invest in have?"),
            subtext: L("Dengan asumsi kamu akan menaruh uang tabunganmu pada instrumen investasi. Sebagai gambaran: untuk profil risiko konservatif, kamu cocok investasi di reksadana pasar uang atau obligasi dengan return rata-rata 6% per tahun. Untuk profil risiko moderat, kamu cocok berinvestasi di obligasi atau reksadana campuran dengan return rata-rata 10% per tahun. Untuk profil risiko agresif, kamu cocok berinvestasi di saham atau reksadana saham dengan return rata-rata 15% per tahun.", "This assumes you put your savings in an investment product. As a guide: with a conservative risk profile, money market or bond mutual funds suit you, with an average return of 6% a year. With a moderate risk profile, bonds or balanced mutual funds suit you, with an average return of 10% a year. With an aggressive risk profile, stocks or equity mutual funds suit you, with an average return of 15% a year."),
            type: "number",
            suffix: L("% / tahun", "% / year")
        },
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

    // Calculate pension results
    const calculateResults = () => {
        const monthlyExpenses = Number(answers[1]);
        const currentSavings = Number(answers[4]);

        const inflationRate = Number("5.7") / 100;
        const returnRate = Number(answers[5]) / 100;

        const yearsToRetirement = retirementAge - currentAge;
        const yearsInRetirement = LIFE_EXPECTANCY - retirementAge;

        const totalProjectedSavings = futureValue(currentSavings, returnRate, yearsToRetirement);

        // Calculate future monthly expenses considering inflation
        const futureMonthlyExpenses = futureValue(monthlyExpenses, inflationRate, yearsToRetirement);

        // Calculate total needed at retirement
        const totalNeeded = annuityPresentValue(futureMonthlyExpenses, returnRate / 12, yearsInRetirement * 12);

        const currentGap = Math.max(0, totalNeeded - totalProjectedSavings);
        const totalAmountToSaveMonthly = monthlySavingNeeded(currentGap, returnRate, yearsToRetirement);

        return {
            totalNeeded,
            currentGap,
            totalProjectedSavings,
            isSufficient: totalProjectedSavings >= totalNeeded,
            totalAmountToSaveMonthly,
            futureMonthlyExpenses,
            yearsToRetirement,
        };
    };

    useEffect(() => {
        const allFieldsFilled = Object.values(answers).every(value => value !== null && value !== "");
        setIsResultReady(allFieldsFilled && !ageError && !retirementAgeError);
    }, [answers, ageError, retirementAgeError]);

    const handleIsNextButtonDisabled = (questionId) => {
        if (questionId === 2 && ageError) return true;
        if (questionId === 3 && retirementAgeError) return true;
        return !answers[questionId];
    };



    return (
        <div>
            {currentStep <= totalSteps && (
                <CalcQuestionFlow
                    href={"/"}
                    title={L("Financial Freedom/Dana Pensiun", "Financial Freedom/Retirement Fund")}
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
            )}

            {currentStep > totalSteps && (
                <CalcResultShell href={"/"} title={L("Financial Freedom/Dana Pensiun", "Financial Freedom/Retirement Fund")} totalSteps={totalSteps}>
                    <div className="p-5">
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
                            <h3 className="text-3xl mb-1">{L("Hasil Perhitungan Dana Pensiun", "Retirement Fund Result")}</h3>
                            <p className="text-sm mb-6">{L("Perhitungan ini menggunakan asumsi angka harapan hidup sampai dengan ", "This calculation assumes a life expectancy of ")}<span className={"font-bold"}> {LIFE_EXPECTANCY} {L("tahun", "years")} </span></p>

                            {/* Input Summary Section */}
                            <div className="bg-[#1E2432] rounded-lg p-4 mb-4">
                                <h4 className="text-2xl mb-4">{L("Ringkasan Input", "Your Inputs")}</h4>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span>{L("Usia saat ini", "Current age")}</span>
                                        <span>{L(`${answers[2]} tahun`, `${answers[2]} ${Number(answers[2]) === 1 ? "year" : "years"}`)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>{L("Usia saat pensiun", "Retirement age")}</span>
                                        <span>{L(`${answers[3]} tahun`, `${answers[3]} ${Number(answers[3]) === 1 ? "year" : "years"}`)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>{L("Pengeluaran bulanan saat ini", "Current monthly spending")}</span>
                                        <span>{`Rp${fmt(answers[1])}`}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>{L("Dana yang telah terkumpul", "Savings so far")}</span>
                                        <span>{`Rp${fmt(answers[4])}`}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Calculation Results */}
                            {isResultReady && (() => {
                                const results = calculateResults();
                                return (
                                    <>
                                        {/* Projected Needs Section */}
                                        <div className="bg-[#3A4356] rounded-lg p-4 mb-4">
                                            <h4 className="text-2xl mb-4">{L("Proyeksi Kebutuhan", "Projected Needs")}</h4>
                                            <div className="space-y-2">
                                                <div className="flex justify-between">
                                                    <span>{L("Proyeksi nilai total dana yang terkumpul", "Projected value of your savings")}</span>
                                                    <span>{`Rp${fmt(Math.round(results.totalProjectedSavings))}`}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>{L("Proyeksi pengeluaran bulanan saat pensiun", "Projected monthly spending in retirement")}</span>
                                                    <span>{`Rp${fmt(Math.round(results.futureMonthlyExpenses))}`}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>{L("Proyeksi total dana pensiun yang dibutuhkan", "Projected retirement fund needed")}</span>
                                                    <span>{`Rp${fmt(Math.round(results.totalNeeded))}`}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>{L("Gap dengan dana saat ini", "Gap from your current savings")}</span>
                                                    <span>{`Rp${fmt(Math.round(results.currentGap))}`}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Projection Section */}
                                        <div className="bg-[#1E2432] rounded-lg p-4">
                                            <h4 className="text-2xl mb-4">{L("Rekomendasi", "Recommendation")}</h4>
                                            <div className="space-y-2">
                                                <div className="flex justify-between">
                                                    <span>{L(`Total uang yang harus ditabung selama ${results.yearsToRetirement} tahun ke depan`, `Total amount to save over the next ${results.yearsToRetirement} ${Number(results.yearsToRetirement) === 1 ? "year" : "years"}`)}</span>
                                                    <span>{`Rp${fmt(Math.round(results.currentGap))}`}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>{L("Total uang yang harus ditabung setiap akhir bulan (per bulan ini)", "Amount to save at the end of each month (starting this month)")}</span>
                                                    <span>{`Rp${fmt(Math.round(results.totalAmountToSaveMonthly))}`}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
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
                                {L("Kembali ke pertanyaan sebelumnya", "Back to the previous question")}
                            </button>
                        </div>
                    </div>
                </CalcResultShell>
            )}
        </div>
    );
}

export default PensionFundForm;