import React from "react";

import {
    Flame,
    User,
} from "lucide-react";


export const Header = () => {

    return (
        <div className="w-full max-w-3xl mx-auto" style={{ fontFamily: 'system-ui, sans-serif' }}>
            <div className="relative">
                <div className="h-48" style={{
                    background: "linear-gradient(135deg, #A51246 0%, #B71E54 50%, #12174F 100%)",
                    position: "relative",
                    overflow: "hidden",
                }}>
                    <div style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)"
                    }}></div>
                </div>

                <div className="relative px-6 pb-6">
                    <div className="absolute -top-16 left-6">
                        <div className="w-32 h-32 rounded-full" style={{
                            background: 'linear-gradient(45deg, #A51246, #B71E54)',
                            padding: '4px'
                        }}>
                            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                <User className="w-16 h-16" style={{ color: '#12174F' }} />
                            </div>
                        </div>
                    </div>

                    <div className="pt-20">
                        <div>
                            <h1 className="text-2xl font-bold" style={{ color: '#12174F' }}>Ayu Sara Herlia</h1>
                            <p style={{ color: '#252E64' }}>Your Online Money Mom</p>
                        </div>

                        <div className="mt-4" style={{ color: '#252E64' }}>
                            <p className="flex items-center">
                                Bantu atur uang, lunas utang & otw 100jt pertama
                                <Flame className="w-5 h-5 ml-1" style={{ color: '#A51246' }} />
                            </p>
                            <p className="mt-2">MBA, 9yrs+ praktisi literasi keuangan</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
