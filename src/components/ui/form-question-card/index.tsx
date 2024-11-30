"use client";

import React from "react";
import CurrencyInput from "@/components/ui/currency-input";
import NumberInput from "@/components/ui/number-input";
import TextInput from "@/components/ui/text-input";
import SelectOption from "@/components/ui/select-option";


const FormQuestionCards = ({
    questions,
    answers,
    currentStep,
    totalSteps,
    handleInputChange,
    handleSetCurrentStep,
    handleGetResult,
    isResultReady,
    handleIsNextButtonDisabled,
}) => {
    return (
        <div className="p-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
                {questions.map((question) => (
                    <div
                        key={question.id}
                        style={{ display: currentStep === question.id ? "block" : "none" }}
                    >
                        <h2 className="text-xl font-semibold mb-1" style={{ color: "#12174F" }}>{question.text}</h2>
                        {
                            question.subtext
                            && <p className="text-sm mb-4" style={{ color: "#252E64" }}>{question.subtext}</p>
                        }

                        {
                            question.type === "text"
                            && <TextInput
                                placeholder={question?.placeholder}
                                value={answers[question.id] || ""}
                                onChange={(e) => handleInputChange(question.id, e.target.value)}
                            />
                        }

                        {
                            question.type === "currency"
                            && <CurrencyInput
                                prefix={question?.prefix}
                                suffix={question?.suffix}
                                placeholder={question?.placeholder}
                                value={answers[question.id] || ""}
                                onChange={(e) => handleInputChange(question.id, e.target.value)}
                            />
                        }

                        {
                            question.type === "number"
                            && <NumberInput
                                placeholder={question?.placeholder}
                                value={answers[question.id] || ""}
                                suffix={question?.suffix}
                                onChange={(e) => handleInputChange(question.id, e.target.value)}
                            />
                        }

                        {
                            question.type === "select"
                            && (
                                <div className="space-y-3 mt-4">
                                    {question.options.map((option, optIndex) => (
                                        // <div
                                        //     key={optIndex}
                                        //     className="p-4 rounded-lg cursor-pointer"
                                        //     style={{
                                        //         border: "1px solid rgba(165, 18, 70, 0.2)",
                                        //         background: answers[question.id] === option.value ?
                                        //             "linear-gradient(135deg, rgba(165, 18, 70, 0.1), rgba(183, 30, 84, 0.1))" :
                                        //             "white"
                                        //     }}
                                        //     onClick={() => handleInputChange(question.id, option.value)}
                                        // >
                                        //     <span style={{ color: "#252E64" }}>{option.display}</span>
                                        // </div>
                                        <SelectOption
                                            key={optIndex}
                                            questionId={question.id}
                                            chosenValue={answers[question.id]}
                                            optionValue={option.value}
                                            optionDisplay={option.display}
                                            handleInputChange={() => handleInputChange(question.id, option.value)}
                                        />
                                    ))}
                                </div>
                            )
                        }

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-8">
                            <button
                                onClick={() => handleSetCurrentStep(prev => Math.max(prev - 1, 1))}
                                className="rounded-lg"
                                style={{
                                    color: "#A51246",
                                    display: currentStep === 1 ? "none" : "block"
                                }}
                            >
                                Sebelumnya
                            </button>
                            {
                                currentStep < totalSteps
                                && <button
                                    onClick={() => handleSetCurrentStep(prev => Math.min(prev + 1, totalSteps))}
                                    className="px-6 py-2 rounded-lg text-white"
                                    disabled={handleIsNextButtonDisabled(question.id)}
                                    style={{
                                        background: (
                                            handleIsNextButtonDisabled(question.id)
                                            ? "#6c757d"
                                            : "linear-gradient(135deg, #A51246, #B71E54)"
                                        ),
                                        marginLeft: "auto"
                                    }}
                                >
                                Selanjutnya
                                </button>
                            }
                            {
                                currentStep === totalSteps
                                && <button
                                onClick={() => handleGetResult()}
                                className="px-6 py-2 rounded-lg text-white"
                                disabled={!isResultReady}
                                style={{
                                    background: !isResultReady ? "#6c757d" : "linear-gradient(135deg, #A51246, #B71E54)",
                                    marginLeft: "auto",
                                }}
                              >
                                Selesai
                              </button>
                            }

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FormQuestionCards;
