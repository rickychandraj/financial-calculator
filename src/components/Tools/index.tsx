import React from "react";
import Link from "next/link";
import {
    ArrowRight,
    BarChart,
    Building,
    Building2,
    Calculator,
    Car,
    CreditCard,
    GraduationCap,
    Heart,
    Home,
    LineChart,
    PiggyBank,
    Plane,
    ShoppingBag,
    Wallet,
} from "lucide-react";

const Tools = () => {
    const highlightedMenuItems = [
        {
            id: 1,
            icon: PiggyBank,
            title: "Cek Kondisi Keuangan",
            href: "/forms/financial-audit",
        },
        {
            id: 2,
            icon: CreditCard,
            title: "Pelunasan Kartu Kredit",
            href: "/forms/credit-card-simulation",
        },
        {
            id: 3,
            icon: Calculator,
            title: "Pelunasan Utang",
            href: "/forms/debt-simulation",
        },
    ]

    const menuItems = [
        {
            id: 1,
            icon: Wallet,
            title: "Dana Darurat",
            description: "Atur dana darurat",
            href: "/forms/emergency-fund",
            badge: "Hot",
        },
        {
            id: 2,
            icon: Building2,
            title: "Dana Pensiun",
            description: "Persiapkan masa depan",
            href: "/forms/pension-fund",
            badge: "Hot",
        },
        {
            id: 3,
            icon: GraduationCap,
            title: "Dana Pendidikan Anak",
            description: "Investasi pendidikan",
            href: "/forms/education-fund",
            badge: "Hot",
        },
        {
            id: 10,
            icon: LineChart,
            title: "Simulasi Investasi",
            description: "Mulai investasi",
            href: "/forms/investment",
        },
        {
            id: 13,
            icon: Building,
            title: "Simulasi KPR",
            description: "Hitung KPR",
            href: "/forms/kpr-simulation",
        },
        {
            id: 4,
            icon: Heart,
            title: "Umroh / Naik Haji",
            description: "Persiapkan ibadah",
            href: "/forms/umrah",
        },
        {
            id: 5,
            icon: Plane,
            title: "Liburan",
            description: "Rencanakan liburan",
            href: "/forms/holiday",
        },
        {
            id: 6,
            icon: ShoppingBag,
            title: "Barang",
            description: "Daftar pembelian",
            href: "/forms/item",
        },
        {
            id: 7,
            icon: Home,
            title: "DP Property",
            description: "Rencana DP rumah",
            href: "/forms/property-down-payment"
        },
        {
            id: 8,
            icon: Car,
            title: "Kendaraan",
            description: "Rencana kendaraan",
            href: "/forms/transportation"
        },
    ]

    return (
        <div className="p-4 w-full max-w-3xl mx-auto">
            <div
                className={`
                    p-8 rounded-2xl bg-gradient-to-br
                    transform transition-all duration-500
                    hover:scale-[1.02] hover:shadow-2xl
                    text-white relative overflow-hidden
                    mb-8
                `}
                style={{
                    background: "linear-gradient(135deg, #252E64 50%, #12174F 100%)"
                }}
            >
                <h3 className="text-2xl font-bold">Cek Finansial Kamu</h3>
                <p className="text-white/80 mb-4">Pahami kondisi finansial kamu terlebih dahulu</p>
                {highlightedMenuItems.map((item) => (
                    <Link
                        key={item.id}
                        href={item.href}
                        className="block"
                    >
                        {/*// eslint-disable-next-line react/jsx-key*/}
                        <div className="grid grid-cols-1">
                            <div
                                className="flex items-center bg-white/10 rounded-xl p-4 my-2
                            backdrop-blur-sm transform transition-all duration-300
                            hover:translate-x-2 cursor-pointer group/tool"
                            >
                                <div
                                    className="w-5 h-5 mr-3 transform "
                                    style={{
                                        background: "none",
                                        borderRadius: "10px",
                                        marginRight: "8px"
                                    }}
                                >
                                    <item.icon className="w-5 h-5" style={{ color: "white" }} />
                                </div>
                                <span className="font-medium">{item.title}</span>
                                <ArrowRight className="w-5 h-5 ml-auto opacity-0
                                    group-hover/tool:opacity-100 transform
                                    group-hover/tool:translate-x-1 transition-all duration-300"
                                />

                            </div>
                        </div>
                    </Link>
                ))}
                <div className="mt-6 flex items-center justify-between text-white/80">
                    <div className="flex items-center space-x-2">
                        <BarChart className="w-4 h-4" />
                        <span>1.8K Active Users</span>
                    </div>
                </div>
            </div>
            <h3 className="text-3xl font-bold mb-8 mt-8" style={{ color: "#A51246"}}>Kalkulator Mimpi ↓</h3>
            <div className="space-y-3">
                {menuItems.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className="block"
                    >
                        <div
                            className="flex items-center p-4 bg-white rounded-xl cursor-pointer"
                            style={{
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                            }}
                            onMouseOver={e => {
                                e.currentTarget.style.transform = "translateX(10px)";
                                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.1)";
                            }}
                            onMouseOut={e => {
                                e.currentTarget.style.transform = "translateX(0)";
                                e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.05)";
                            }}
                        >
                            <div style={{
                                background: "linear-gradient(135deg, #A51246, #B71E54)",
                                borderRadius: "10px",
                                padding: "10px",
                                marginRight: "16px"
                            }}>
                                <item.icon className="w-5 h-5" style={{ color: "white" }} />
                            </div>

                            <div className="flex-grow">
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-medium" style={{ color: "#12174F" }}>{item.title}</span>
                                    {item.badge && (
                                        <span style={{
                                            color: "#A51246",
                                            fontSize: "14px",
                                            fontWeight: "500"
                                        }}>{item.badge}</span>
                                    )}
                                </div>
                                <span className="text-sm" style={{ color: "#252E64" }}>{item.description}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Tools;
