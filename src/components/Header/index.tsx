import React from "react";

export const Header = () => {

    return (
        <div className="w-full max-w-3xl mx-auto" style={{ fontFamily: 'system-ui, sans-serif' }}>
            <div className="relative">
                <div className="h-40 md:h-48" style={{
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

                <div className="relative px-4 md:px-6 pb-4 md:pb-6">
                    <div className="absolute -top-12 md:-top-16 left-4 md:left-6">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full" style={{
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

                    <div className="pt-16 md:pt-20">
                        <div>
                            <h1 className="text-xl md:text-2xl font-bold" style={{ color: '#12174F' }}>Brought to You by Ayu Sara Herlia-Hinch, SE, MBA, QWP™, CFP®, WMI
                            </h1>
                            <p className="text-sm md:text-base" style={{ color: '#252E64' }}>Your Online Money Mom</p>
                        </div>

                        <div className="mt-3 md:mt-4" style={{ color: '#252E64' }}>
                            <p className="text-sm md:text-base">Simplifying Money & Investments for Busy Lives 💅</p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {['CFP®', 'MBA', 'QWP™', 'WMI', '10+ yrs financial practitioner'].map((badge) => (
                                    <span
                                        key={badge}
                                        className="px-2 py-1 text-xs rounded-full"
                                        style={{ background: '#F0E6EA', color: '#A51246' }}
                                    >
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
