import { useState, useEffect } from "react";

import React from "react";
import Link from "next/link";
import {
    ArrowRight,
    BarChart,
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
    const baseUsers = 899; // starting point: 1.8K users
    const dailyGrowth = 0.01; // 2% per day
    const startDate = new Date("2025-10-6"); // adjust to your launch date

    const [users, setUsers] = useState(baseUsers);

    useEffect(() => {
        const today = new Date();
        const daysPassed = Math.floor(
            (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
        );

        const grownUsers = Math.round(baseUsers * Math.pow(1 + dailyGrowth, daysPassed));
        setUsers(grownUsers);
    }, []);

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
            icon: Wallet,
            title: "Hitung Dana Darurat",
            description: "Atur dana darurat",
            href: "/forms/emergency-fund",
        },
        {
            id: 3,
            icon: Building2,
            title: "Financial Freedom/Dana Pensiun",
            description: "Persiapkan masa depan",
            href: "/forms/pension-fund",
        },
    ]

    const menuItems = [

        {
            id: 1,
            icon: GraduationCap,
            title: "Pendidikan Anak",
            description: "Investasi pendidikan",
            href: "/forms/education-fund",
            badge: "Hot",
            disabled: false,
        },
        {
            id: 2,
            icon: LineChart,
            title: "Investasi",
            description: "Mulai investasi",
            href: "/forms/investment",
            disabled: false,
        },
        {
            id: 3,
            icon: Home,
            title: "DP Properti",
            description: "Rencana DP rumah",
            href: "/forms/property-down-payment",
            disabled: false,
        },
        {
            id: 4,
            icon: Heart,
            title: "Umroh",
            description: "Persiapkan ibadah",
            // href: "https://tribelio.page/semoga-segera-umroh",
            href: "/forms/umrah",
            disabled: false,
        },
        {
            id: 5,
            icon: Plane,
            title: "Liburan",
            description: "Rencanakan liburan",
            href: "/forms/holiday",
            disabled: false,
        },
        {
            id: 6,
            icon: ShoppingBag,
            title: "Barang",
            description: "Daftar pembelian",
            href: "/forms/item",
            disabled: false,
        },
        {
            id: 7,
            icon: Car,
            title: "Kendaraan",
            description: "Rencana kendaraan",
            href: "/forms/transportation",
            disabled: false,
        },
        {
            id: 8,
            icon: PiggyBank,
            title: "Cek Kondisi Keuangan",
            href: "/forms/financial-audit",
            badge: "Coming Soon",
            disabled: true,
        },
        {
            id: 9,
            icon: CreditCard,
            title: "Pelunasan Utang",
            href: "/forms/debt-simulation",
            badge: "Coming Soon",
            disabled: true,
        },
    ]

    return (
        <div className="calculator-tools">
            <section className="calculator-feature" aria-labelledby="financial-heading">
                <h2 id="financial-heading">Cek Finansial Kamu</h2>
                <p>Pahami kondisi finansial kamu terlebih dahulu</p>
                <div className="calculator-feature-list">
                    {highlightedMenuItems.map((item) => (
                        <Link key={item.id} href={item.href} className="calculator-feature-link">
                            <item.icon aria-hidden="true" className="calculator-feature-icon" />
                            <span>{item.title}</span>
                            {item.badge && <span className="calculator-hot">{item.badge}</span>}
                            <ArrowRight aria-hidden="true" className="calculator-feature-arrow" />
                        </Link>
                    ))}
                </div>
                <div className="calculator-users">
                    <BarChart aria-hidden="true" className="w-4 h-4" />
                    <span>{Intl.NumberFormat("en-US", { notation: "compact" }).format(users)} Active Users</span>
                </div>
            </section>
            <section className="calculator-dream" aria-labelledby="dream-heading">
                <h2 id="dream-heading">Kalkulator Mimpi ↓</h2>
                <div className="calculator-grid">
                    {menuItems.map((item) => (
                        <Link
                            key={item.id}
                            href={item.disabled ? "#" : item.href}
                            aria-disabled={item.disabled || undefined}
                            tabIndex={item.disabled ? -1 : undefined}
                            className={`calculator-tile glass-surface${item.disabled ? " calculator-tile-disabled" : ""}`}
                        >
                            <span className="calculator-tile-icon">
                                <item.icon aria-hidden="true" />
                            </span>
                            <span className="calculator-tile-title">{item.title}</span>
                            {item.disabled && <span className="calculator-soon">Coming Soon</span>}
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Tools;
