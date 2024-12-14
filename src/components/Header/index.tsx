import React from "react";

export const Header = () => {

    return (
        <div className="w-full max-w-3xl mx-auto" style={{ fontFamily: 'system-ui, sans-serif' }}>
            <div className="relative">
                <div className="h-48" style={{
                    backgroundImage: "url('background.png')",
                    backgroundSize: "cover",  // This ensures the image covers the container
                    backgroundPosition: "center",  // Centers the image
                    position: "relative",
                    overflow: "hidden",
                }}>
                    <div style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)"
                    }}></div>
                </div>

                <div className="relative px-6 pb-6">
                    <div className="absolute -top-16 left-6">
                        <div className="w-32 h-32 rounded-full" style={{
                            background: 'linear-gradient(45deg, #A51246, #B71E54)',
                            padding: '4px'
                        }}>
                            <div
                                className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden"
                            >
                                <div
                                    className="w-full h-full"
                                    style={{
                                        backgroundImage: "url('/profile.JPG')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                />
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
                            </p>
                            <p className="mt-2">MBA, 9yrs+ praktisi literasi keuangan</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
