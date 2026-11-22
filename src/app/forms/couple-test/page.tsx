"use client";

import React, { Suspense, useEffect, useState } from "react";
import CalcQuestionFlow, { CalcResultShell } from "@/components/calc/question-flow";
import { useLanguage } from "@/lib/i18n";
import { useSearchParams } from "next/navigation";
import {
    DESCRIPTION,
    DESCRIPTION_EN,
    MAPPINGS,
    REVERSE_MAPPINGS,
    SIMULATION_RESULT,
    CONFLICT_RESULT,
    SUGGESTION_RESULT,
    MOST_MATCH_MAPPINGS,
} from "@/app/forms/couple-test/constants";
import Link from "next/link";


const CoupleTestForm = () => {
    const searchParams = useSearchParams();
    const resultParam = searchParams.get("code");
    const cleanedResultParam = resultParam?.replace(/\?+$/, ''); // Remove trailing "?" characters
    // Only accept codes we actually issue; anything else (typos, "__proto__", …) falls back to the test itself.
    const validResultParam =
        cleanedResultParam && Object.prototype.hasOwnProperty.call(MAPPINGS, cleanedResultParam)
            ? cleanedResultParam
            : null;
    const [isCheckingMatchScore, setIsCheckingMatchScore] = useState(false);
    const [resultQueryParam, _] = useState(validResultParam);

    const [partnerPersonality, setPartnerPersonality] = useState<string | null>(null);
    const partnerPersonalityOptions = [
        {value: "Economizer", display: "Economizer"},
        {value: "Diligent", display: "Diligent"},
        {value: "Binger", display: "Binger"},
        {value: "Orderly", display: "Orderly"},
        {value: "Can't Control Finance", display: "Can't Control Finance"},
        {value: "Planner", display: "Planner"},
        {value: "Ups and Downs", display: "Ups and Downs"},
    ]

    const [currentStep, setCurrentStep] = useState(1);
    const { lang } = useLanguage();
    const L = (id: string, en: string) => (lang === "en" ? en : id);
    const [resultPersona, setResultPersona] = useState<any>(null);
    const [isResultReady, setIsResultReady] = useState(false);
    const [answers, setAnswers] = useState<Record<number, any>>({
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
        7: null,
        8: null,
        9: null,
        10: null,
        11: null,
        12: null,
        13: null,
        14: null,
        15: null,
        16: null,
        17: null,
        18: null,
        19: null,
        20: null,
        21: null,
        22: null,
        23: null,
        24: null,
        25: null,
        26: null,
        27: null,
        28: null,
        29: null,
        30: null,
        31: null,
        32: null,
        33: null,
        34: null,
        35: null,
        36: null,
    });

    const questions = [
        {
            id: 1,
            text: L("Saat belanja, saya menghabiskan uang lebih banyak dari yang direncanakan", "When I shop, I spend more than I planned"),
            type: "select",
            category: "Binger",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 2,
            text: L("Saya tahu persis harga dari semua barang yang saya beli", "I know exactly how much everything I buy costs"),
            type: "select",
            category: "Planner",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 3,
            text: L("Saya susah untuk menolak ketika ditawarkan barang dengan diskon besar", "I find it hard to say no to a big discount"),
            type: "select",
            category: "Binger",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 4,
            text: L("Saya tidak terlalu suka masak, jadi lebih sering beli makanan siap saji", "I don't really like cooking, so I usually buy ready-made food"),
            type: "select",
            category: "Cannot Control Finances",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 5,
            text: L("Saya suka ketika rumah terasa hangat dan nyaman", "I like my home to feel warm and cosy"),
            type: "select",
            category: "Orderly",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 6,
            text: L("Saya tidak suka minta kembalian ketika membayar tunai", "I don't like asking for change when I pay in cash"),
            type: "select",
            category: "Cannot Control Finances",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 7,
            text: L("Sebelum belanja, saya selalu pikirkan dengan baik apa saja yang dibutuhkan", "Before I shop, I always think carefully about what I need"),
            type: "select",
            category: "Planner",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 8,
            text: L("Ketika sedang beres-beres, saya menyadari bahwa saya banyak membeli barang yang sebenarnya tidak diperlukan", "When I tidy up, I notice I have bought a lot of things I didn't really need"),
            type: "select",
            category: "Cannot Control Finances",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 9,
            text: L("Saya menikmati belanja bersama teman-teman", "I enjoy shopping with friends"),
            type: "select",
            category: "Binger",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 10,
            text: L("Saya sering kali harus meminjam uang di akhir bulan", "I often have to borrow money at the end of the month"),
            type: "select",
            category: "Economizer",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 11,
            text: L("Saya selalu membuat daftar belanja sebelum pergi ke toko", "I always make a shopping list before I go to the shop"),
            type: "select",
            category: "Planner",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 12,
            text: L("Saya biasanya memeriksa banyak pilihan terlebih dahulu sebelum membeli sesuatu", "I usually check lots of options before I buy something"),
            type: "select",
            category: "Planner",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 13,
            text: L("Saya mencatat semua pengeluaran saya", "I keep track of all my spending"),
            type: "select",
            category: "Diligent",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 14,
            text: L("Saya selalu membandingkan harga sebelum membeli barang apa pun", "I always compare prices before I buy anything"),
            type: "select",
            category: "Diligent",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 15,
            text: L("Saya dapat mengatur uang agar cukup sampai akhir bulan", "I can make my money last until the end of the month"),
            type: "select",
            category: "Diligent",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 16,
            text: L("Bayar tagihan membuat saya sangat pusing", "Paying bills gives me a real headache"),
            type: "select",
            category: "Economizer",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 17,
            text: L("Saya menjaga keuangan rumah tangga tetap teratur", "I keep our household finances in order"),
            type: "select",
            category: "Orderly",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 18,
            text: L("Saya tidak suka membuang barang yang masih bisa dipakai", "I don't like throwing away things that can still be used"),
            type: "select",
            category: "Economizer",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 19,
            text: L("Saya suka memberi hadiah untuk diri sendiri", "I like treating myself to gifts"),
            type: "select",
            category: "Ups and Downs",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 20,
            text: L("Saya lebih memilih untuk membuat makanan sendiri daripada membeli makan di kantin", "I'd rather make my own food than buy a meal at the canteen"),
            type: "select",
            category: "Economizer",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 21,
            text: L("Saya punya beberapa kebiasaan buruk yang membuat saya boros", "I have a few bad habits that make me overspend"),
            type: "select",
            category: "Cannot Control Finances",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 22,
            text: L("Saya menikmati ketika nongkrong bersama teman-teman", "I enjoy hanging out with friends"),
            type: "select",
            category: "Ups and Downs",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 23,
            text: L("Saya ingin anak-anak saya memiliki semua yang mereka butuhkan", "I want my children to have everything they need"),
            type: "select",
            category: "Ups and Downs",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 24,
            text: L("Saya suka barang-barang yang sedang trending", "I like things that are trending"),
            type: "select",
            category: "Orderly",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 25,
            text: L("Saya terlambat bayar beberapa tagihan", "I pay some bills late"),
            type: "select",
            category: "Economizer",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 26,
            text: L("Saya hanya berhemat ketika keadaan keuangan sedang kurang baik", "I only cut back when money is tight"),
            type: "select",
            category: "Ups and Downs",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 27,
            text: L("Saya selalu punya tabungan untuk keadaan darurat", "I always have savings for emergencies"),
            type: "select",
            category: "Diligent",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 28,
            text: L("Kalau sedang butuh uang lebih, saya mencari kerja sampingan", "When I need extra money, I look for a side job"),
            type: "select",
            category: "Diligent",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 29,
            text: L("Kalau saya menyukai suatu barang, saya langsung membelinya", "When I like something, I buy it straight away"),
            type: "select",
            category: "Binger",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 30,
            text: L("Saya bingung uang saya habis ke mana", "I can't tell where my money goes"),
            type: "select",
            category: "Binger",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 31,
            text: L("Saya mengetahui persis jumlah uang yang saya punya di dompet dan rekening bank", "I know exactly how much money I have in my wallet and bank account"),
            type: "select",
            category: "Planner",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 32,
            text: L("Ketika belanja bulanan, saya sering kaget dengan total yang harus dibayar", "When I do the monthly shopping, the total often surprises me"),
            type: "select",
            category: "Binger",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 33,
            text: L("Saya terjebak utang yang bikin stres", "I'm stuck in debt that stresses me out"),
            type: "select",
            category: "Economizer",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 34,
            text: L("Saya suka untuk mencoba keberuntungan saya", "I like to try my luck"),
            type: "select",
            category: "Ups and Downs",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 35,
            text: L("Saya sering memberi kejutan untuk orang tercinta dengan hadiah buatan sendiri", "I often surprise my loved ones with homemade gifts"),
            type: "select",
            category: "Orderly",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        },
        {
            id: 36,
            text: L("Saya menghabiskan banyak uang untuk makanan sehat dan air mineral", "I spend a lot of money on healthy food and bottled water"),
            type: "select",
            category: "Orderly",
            options: [
                {value: 1, display: L("Hampir tidak pernah", "Almost never")},
                {value: 2, display: L("Jarang", "Rarely")},
                {value: 3, display: L("Kadang-kadang", "Sometimes")},
                {value: 4, display: L("Sering", "Often")},
                {value: 5, display: L("Hampir selalu", "Almost always")},
            ],
        }
    ]

    const totalSteps = questions.length;

    const handleInputChange = (questionId, value) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: value,
        }));
    };

    const handleGetResult = () => {
        setCurrentStep(prev => prev + 1);
    };

    // Determine the personality of the person
    const calculateResults = () => {
        let financePersona = "";
        let maxTotalPoint = 0;

        const economizerTotalPoint = Math.round((
            answers[10]
            + answers[16]
            + answers[18]
            + answers[20]
            + answers[25]
            + answers[33]
        ) / 6);
        if (economizerTotalPoint > maxTotalPoint) {
            maxTotalPoint = economizerTotalPoint;
            financePersona = "Economizer";
        }

        const diligentTotalPoint = Math.round((
            answers[13]
            + answers[14]
            + answers[15]
            + answers[27]
            + answers[28]
        ) / 5);
        if (diligentTotalPoint > maxTotalPoint) {
            maxTotalPoint = diligentTotalPoint;
            financePersona = "Diligent";
        }

        const bingerTotalPoint = Math.round((
            answers[1]
            + answers[3]
            + answers[9]
            + answers[29]
            + answers[30]
            + answers[32]
        ) / 6);
        if (bingerTotalPoint > maxTotalPoint) {
            maxTotalPoint = bingerTotalPoint;
            financePersona = "Binger";
        }

        const orderlyTotalPoint = Math.round((
            answers[5]
            + answers[17]
            + answers[24]
            + answers[35]
            + answers[36]
        ) / 5);
        if (orderlyTotalPoint > maxTotalPoint) {
            maxTotalPoint = orderlyTotalPoint;
            financePersona = "Orderly";
        }

        const cantControlFinanceTotalPoint = Math.round((
            answers[4]
            + answers[6]
            + answers[8]
            + answers[21]
        ) / 4);
        if (cantControlFinanceTotalPoint > maxTotalPoint) {
            maxTotalPoint = cantControlFinanceTotalPoint;
            financePersona = "Can't Control Finance"
        }

        const plannerTotalPoint = Math.round((
            answers[2]
            + answers[7]
            + answers[11]
            + answers[12]
            + answers[31]
        ) / 5);
        if (plannerTotalPoint > maxTotalPoint) {
            maxTotalPoint = plannerTotalPoint;
            financePersona = "Planner";
        }

        const upsAndDownsTotalPoint = Math.round((
            answers[19]
            + answers[22]
            + answers[23]
            + answers[26]
            + answers[34]
        ) / 5);
        if (upsAndDownsTotalPoint > maxTotalPoint) {
            maxTotalPoint = upsAndDownsTotalPoint;
            financePersona = "Ups and Downs";
        }

        return {
            maxTotalPoint,
            financePersona,
        }
    }

    useEffect(() => {
        const allFieldsFilled = Object.values(answers).every(value => value !== null && value !== "");
        setIsResultReady(allFieldsFilled);
    }, [answers]);

    // Clean up URL if it has trailing "?" from Mayar redirect
    useEffect(() => {
        if (typeof window !== 'undefined' && window.location.search.endsWith('?')) {
            const url = new URL(window.location.href);
            url.search = url.search.replace(/\?+$/, '');
            window.history.replaceState({}, '', url.toString());
        }
    }, []);

    const handleIsNextButtonDisabled = (questionId) => {
        return !answers[questionId];
    };

    const handlePartnerPersonalityChange = (value) => {
        setPartnerPersonality(value);
    }


    return (
        <div>
            {currentStep <= totalSteps && !resultQueryParam && (
                <CalcQuestionFlow
                    href={"/"}
                    title={L("Tes Kecocokan Pasangan", "Couple Compatibility Test")}
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
                <CalcResultShell href={"/"} title={L("Tes Kecocokan Pasangan", "Couple Compatibility Test")} totalSteps={totalSteps}>
                    <div className="p-5">
                        {isResultReady && (() => {
                            const results = calculateResults();
                            return (
                                <>
                                    {/*Overlay with CTA*/}
                                    <div className="absolute inset-0 bg-black/60 backdrop-blur-md backdrop-brightness-50 flex flex-col items-center justify-center bg-black/50 rounded-2xl">
                                        <p className="text-center text-white text-md mb-6 px-4">
                                            {L("Kamu harus mengisi beberapa data terlebih dahulu untuk melihat hasil lengkap tes ini", "Fill in a few details first to see the full result of this test")}
                                        </p>
                                        <a
                                            href={`https://mamaberuang.myr.id/lp/couple-test-${REVERSE_MAPPINGS[results.financePersona]}/`}
                                            className="bg-[#A51246] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#8A0F3D] transition-colors"
                                        >
                                            {L("Lihat hasil lengkap", "See Full Result")}
                                        </a>
                                    </div>
                                </>
                            )
                        })()}
                    </div>
                </CalcResultShell>
            )}

            {
                resultQueryParam && !isCheckingMatchScore && (
                    <>
                        <CalcResultShell href={"/"} title={L("Hasil Tes", "Test Result")} totalSteps={null}>
                            <div className="p-5">
                                <div
                                    className={`
                                        p-8 rounded-2xl bg-gradient-to-br
                                        transform
                                        text-white relative overflow-hidden
                                        mb-8
                                    `}
                                    style={{
                                        background: "linear-gradient(135deg, #252E64 50%, #12174F 90%)"
                                    }}
                                >
                                    <div className="bg-[#3A4356] rounded-lg p-4 mb-4">
                                        <div className="space-y-2">
                                            <div className="flex">
                                                <span className="font-semibold">{L("Kepribadian finansial kamu adalah ", "Your financial personality is ")}<span className={"text-green-300 font-semibold"}>{MAPPINGS[resultQueryParam]}</span>!</span>
                                            </div>
                                            <div className="flex">
                                                <span>{(lang === "en" ? DESCRIPTION_EN : DESCRIPTION)[MAPPINGS[resultQueryParam]]}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-[#1E2432] rounded-lg p-4 mb-4">
                                        <div className="space-y-2">
                                            <div className="flex">
                                                <span className="font-semibold">{L("Kamu paling cocok berpasangan dengan", "You are most compatible with")}</span>
                                            </div>
                                            {MOST_MATCH_MAPPINGS[MAPPINGS[resultQueryParam]]}
                                        </div>
                                    </div>
                                </div>
                                <h2 className="text-xl font-semibold my-2 mt-12" style={{ color: "#12174F" }}>{L("Apa kepribadian pasangan kamu?", "What is your partner's personality?")}</h2>
                                <p className="text-left text-black text-md mb-6 px-4">
                                    {lang === "en" ? <>Your partner needs to take this financial personality test separately. Share this link with your partner: <Link href={"https://calculator.mamaberuang.com/forms/couple-test"} className="text-blue-600 underline hover:text-blue-800">https://calculator.mamaberuang.com/forms/couple-test</Link>. Then choose your partner's financial personality result below</> : <>Pasangan kamu harus mengambil tes kepribadian keuangan ini secara terpisah, yuk bagikan link ini: <Link href={"https://calculator.mamaberuang.com/forms/couple-test"} className="text-blue-600 underline hover:text-blue-800">https://calculator.mamaberuang.com/forms/couple-test</Link> ke pasangan kamu. Kemudian, masukkan hasil tes kepribadian keuangan pasangan kamu di bawah ini</>}
                                </p>
                                {partnerPersonalityOptions.map((option, optIndex) => (
                                    <div
                                        key={optIndex}
                                        className="p-4 my-4 rounded-lg cursor-pointer"
                                        style={{
                                            border: "1px solid rgba(165, 18, 70, 0.2)",
                                            background: partnerPersonality === option.value
                                                ? "linear-gradient(135deg, rgba(165, 18, 70, 0.1), rgba(183, 30, 84, 0.1))"
                                                : "white"
                                        }}
                                        onClick={() => handlePartnerPersonalityChange(option.value)}
                                    >
                                        <span style={{ color: "#252E64" }}>{option.display}</span>
                                    </div>
                                ))}
                                <button
                                    onClick={() => setIsCheckingMatchScore(true)}
                                    className="px-6 py-2 rounded-lg text-white"
                                    disabled={partnerPersonality === null}
                                    style={{
                                        background: (
                                            partnerPersonality === null
                                                ? "#6c757d"
                                                : "linear-gradient(135deg, #A51246, #B71E54)"
                                        ),
                                        marginLeft: "auto"
                                    }}
                                >
                                    {L("Lihat hasil kecocokan", "See Compatibility Result")}
                                </button>
                            </div>
                        </CalcResultShell>
                    </>
                )
            }

            {
                isCheckingMatchScore && (
                    <>
                        <CalcResultShell href={"/"} title={L("Hasil Tes Kecocokan", "Compatibility Result")} totalSteps={totalSteps} onBack={() => setIsCheckingMatchScore(false)}>
                            <div className="p-5">
                                <div
                                    className={`
                                        p-8 rounded-2xl bg-gradient-to-br
                                        transform
                                        text-white relative overflow-hidden
                                        mb-8
                                    `}
                                    style={{
                                        background: "linear-gradient(135deg, #252E64 50%, #12174F 90%)"
                                    }}
                                >
                                    <div className="bg-[#3A4356] rounded-lg p-4 mb-4">
                                        <div className="space-y-2">
                                            <div className="flex">
                                                <span className="font-semibold"><span className={"text-green-300 font-semibold"}>{MAPPINGS[resultQueryParam as string]}</span> x <span className={"text-green-300 font-semibold"}>{partnerPersonality}</span></span>
                                            </div>
                                            <div className="flex">
                                                <span>{L("Berikut simulasi dan analisis kecocokan ", "Here is the simulation and compatibility analysis for ")}<span className={"text-green-300 font-semibold"}>{MAPPINGS[resultQueryParam as string]}</span>{L(" jika berpasangan dengan ", " paired with ")}<span className={"text-green-300 font-semibold"}>{partnerPersonality}</span>:</span>
                                            </div>
                                        </div>
                                    </div>

                                    {lang === "en" && (
                                        <p className="text-sm mb-4">The detailed analysis below is in Indonesian for now.</p>
                                    )}
                                    <h1 className="text-xl font-semibold mb-4 mt-8">{L("Simulasi", "Simulation")}</h1>
                                    <div className="bg-[#1E2432] rounded-lg p-4 mb-4">
                                        <div className="space-y-2">
                                            <div className="flex">
                                                <span className="text-gray-300 font-bold">{L("Ekonomi dan gaya hidup", "Finances and Lifestyle")}</span>
                                            </div>
                                            <div className="flex">
                                                <span className="text-white-400 font-semibold">{SIMULATION_RESULT[`${MAPPINGS[resultQueryParam as string]} x ${partnerPersonality}`]["lifestyle"]}</span>
                                            </div>
                                            <div className="flex pt-8">
                                                <span className="text-gray-300 font-bold">{L("Pengelolaan keuangan", "Money Management")}</span>
                                            </div>
                                            <div className="flex">
                                                <span className="text-white-400 font-semibold">{SIMULATION_RESULT[`${MAPPINGS[resultQueryParam as string]} x ${partnerPersonality}`]["moneyManagement"]}</span>
                                            </div>
                                            <div className="flex pt-8">
                                                <span className="text-gray-300 font-bold">{L("Target masa depan", "Future Goals")}</span>
                                            </div>
                                            <div className="flex">
                                                <span className="text-white-400 font-semibold">{SIMULATION_RESULT[`${MAPPINGS[resultQueryParam as string]} x ${partnerPersonality}`]["futureTarget"]}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h1 className="text-xl font-semibold mb-4 mt-8">{L("Potensi konflik", "Possible Conflicts")}</h1>
                                    <div className="bg-[#1E2432] rounded-lg p-4 mb-4">
                                        <div className="space-y-2">
                                            <div className="flex">
                                                <span className="text-gray-300 font-bold">{CONFLICT_RESULT[`${MAPPINGS[resultQueryParam as string]} x ${partnerPersonality}`]["firstConflictTitle"]}</span>
                                            </div>
                                            <div className="flex">
                                                <span className="text-white-400 font-semibold">{CONFLICT_RESULT[`${MAPPINGS[resultQueryParam as string]} x ${partnerPersonality}`]["firstConflictDescription"]}</span>
                                            </div>
                                            <div className="flex pt-8">
                                                <span className="text-gray-300 font-bold">{CONFLICT_RESULT[`${MAPPINGS[resultQueryParam as string]} x ${partnerPersonality}`]["secondConflictTitle"]}</span>
                                            </div>
                                            <div className="flex">
                                                <span className="text-white-400 font-semibold">{CONFLICT_RESULT[`${MAPPINGS[resultQueryParam as string]} x ${partnerPersonality}`]["secondConflictDescription"]}</span>
                                            </div>
                                            <div className="flex pt-8">
                                                <span className="text-gray-300 font-bold">{CONFLICT_RESULT[`${MAPPINGS[resultQueryParam as string]} x ${partnerPersonality}`]["thirdConflictTitle"]}</span>
                                            </div>
                                            <div className="flex">
                                                <span className="text-white-400 font-semibold">{CONFLICT_RESULT[`${MAPPINGS[resultQueryParam as string]} x ${partnerPersonality}`]["thirdConflictDescription"]}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h1 className="text-xl font-semibold mb-4 mt-8">{L("Saran", "Suggestions")}</h1>
                                    <div className="bg-[#1E2432] rounded-lg p-4 mb-4">
                                        <div className="space-y-2">
                                            {SUGGESTION_RESULT[`${MAPPINGS[resultQueryParam as string]} x ${partnerPersonality}`].map((item, index) => (
                                                <div key={index}>
                                                    <div className="flex">
                                                        <span className="text-gray-300 font-bold">{item.title}</span>
                                                    </div>
                                                    <div className="flex pb-8">
                                                        {item.description}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CalcResultShell>
                    </>
                )
            }
        </div>
    )
}

export default function Page() {
    return (
        <div>
            <Suspense fallback={<div>Loading form...</div>}>
                <CoupleTestForm />
            </Suspense>
        </div>
    )
};