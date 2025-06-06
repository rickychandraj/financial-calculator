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
        <div>
            <div style={{
                background: "linear-gradient(135deg, #A51246 0%, #B71E54 50%, #12174F 100%)",
                padding: "20px"
            }}>
                <div className="flex items-center justify-between text-white mb-4">
                    <Link href={href}>
                        <span className="cursor-pointer"><p>← Kembali ke Menu Utama</p></span>
                    </Link>
                    <h1 className="text-xl font-semibold">{title}</h1>
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
