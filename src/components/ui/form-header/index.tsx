"use client";

import React from "react";
import {ArrowLeft} from "lucide-react";
import {ArrowRight} from "lucide-react";
import Link from "next/link";


const FormHeader = ({
    href,
    title,
    currentStep,
    totalSteps,
}) => {
    return (
        <div className="calculator-form-header">
            <div className="calculator-form-header-surface px-4 py-5 md:p-5" style={{
                background: "linear-gradient(135deg, #A51246 0%, #B71E54 50%, #12174F 100%)",
            }}>
                <div className="relative flex items-center justify-center text-white mb-4">
                    <Link href={href} className="absolute left-0 flex items-center gap-1 text-sm">
                        <ArrowLeft className="w-4 h-4" />
                        <span className="hidden sm:inline">Kembali</span>
                    </Link>
                    <h1 className="text-base md:text-lg font-semibold text-center px-8">{title}</h1>
                </div>

                {/* Progress Bar */}
                {currentStep && totalSteps && (
                    <>
                        <div className="w-full bg-white/20 rounded-full h-2">
                            <div
                                className="h-full rounded-full"
                                style={{
                                    width: `${(currentStep/totalSteps) * 100}%`,
                                    background: "linear-gradient(to right, #fff, rgba(255,255,255,0.8))"
                                }}
                            />
                        </div>
                        <p className="text-white/90 text-sm mt-2">Pertanyaan {currentStep} dari {totalSteps}</p>
                    </>
                )}
            </div>
        </div>
    )
}

export default FormHeader;
