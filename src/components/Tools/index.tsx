import React from "react";
import Link from "next/link";
import {
    ArrowRight,
    BarChart,
    Building,
    Building2,
    Car,
    CreditCard,
    BookHeart,
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
            icon: BookHeart,
            title: "Tes Kecocokan Pasangan",
            badge: "Hot",
            href: "/forms/couple-test",
        },
        {
            id: 2,
            icon: PiggyBank,
            title: "Cek Kondisi Keuangan",
            href: "/forms/financial-audit",
        },
        {
            id: 3,
            icon: CreditCard,
            title: "Pelunasan Kartu Kredit",
            href: "/forms/credit-card-simulation",
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
            title: "Investasi",
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
            id: 7,
            icon: Home,
            title: "DP Property",
            description: "Rencana DP rumah",
            href: "/forms/property-down-payment"
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
                    background: "linear-gradient(135deg, #252E64 30%, #12174F 70%)"
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
                                {/* New Badge */}
                                {item.badge && (
                                    <span
                                        className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-xs font-medium z-10"
                                        style={{
                                            background: '#A51246',
                                            color: 'white'
                                        }}
                                    >
                                        {item.badge}
                                    </span>
                                )}
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
            <div className="grid grid-cols-3 gap-12">
                {menuItems.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className="block"
                    >
                        <div className="flex flex-col items-center justify-center cursor-pointer group">
                            <div
                                className="w-16 h-16 rounded-full mb-3 flex items-center justify-center transform transition-all duration-300 group-hover:-translate-y-2"
                                style={{
                                    background: "linear-gradient(135deg, #A51246, #B71E54)",
                                }}
                            >
                                <item.icon className="w-8 h-8" style={{ color: "white" }} />
                            </div>
                            <span
                                className="text-center font-medium text-sm"
                                style={{ color: "#12174F" }}
                            >
                              {item.title}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="mt-8"></div>
        </div>
    )
}

export default Tools;
