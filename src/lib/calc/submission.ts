// Sends Dana Darurat answers to the submit-calculator Edge Function.
// The function turns money into ranges before anything is stored.

export const SUBMIT_URL = "https://zynzbcbaobhrhmeckjrx.supabase.co/functions/v1/submit-calculator";
// Must match PRIVACY_VERSION in submit-calculator and the date on /privacy.
export const PRIVACY_VERSION = "2026-11-18";

const TIMEOUT_MS = 8000;

export type Status = "single" | "married" | "divorced" | "widowed";

export type EmergencyAnswers = {
    income: number;
    dependents: number;
    status: Status;
    kids?: number;
    partner_income?: number;
    partner_dependents?: number;
    expense: number;
    saved: number;
};

export type Biodata = {
    name: string;
    email: string;
    whatsapp: string;
    age: string;
    gender: "" | "pria" | "wanita";
    occupation: string;
    city: string;
    consent: boolean;
    marketing_consent: boolean;
};

export type BiodataErrors = Partial<Record<"name" | "email" | "whatsapp" | "age" | "gender" | "occupation" | "city" | "consent", true>>;

const money = (v: unknown) => {
    const n = Number(v);
    return Number.isFinite(n) && n >= 0 ? n : 0;
};
// People only type whole numbers here; keep within what the function accepts.
const count = (v: unknown) => Math.min(Math.max(Math.trunc(Number(v)) || 0, 0), 100);

/** Turns the page's answers (keyed by question id) into the shape the function expects. */
export function emergencyAnswers(raw: Record<number, unknown>): EmergencyAnswers {
    const status = raw[3] as Status;
    const answers: EmergencyAnswers = {
        income: money(raw[1]),
        dependents: count(raw[2]),
        status,
        expense: money(raw[4]),
        saved: money(raw[5]),
    };
    if (status !== "single") answers.kids = count(raw[100]);
    if (status === "married") {
        answers.partner_income = money(raw[101]);
        answers.partner_dependents = count(raw[102]);
    }
    return answers;
}

/** Same rule as submit-calculator: Indonesian mobile, returned as 628... */
export function whatsappNumber(v: string): string | null {
    if (v.length > 30) return null;
    let digits = v.trim().replace(/[\s\-().]/g, "");
    if (digits.startsWith("+")) digits = digits.slice(1);
    if (digits.startsWith("0")) digits = "62" + digits.slice(1);
    else if (digits.startsWith("8")) digits = "62" + digits;
    return /^628[0-9]{7,11}$/.test(digits) ? digits : null;
}

const okText = (v: string) => {
    const t = v.trim();
    return t.length >= 2 && t.length <= 100 && !/[\u0000-\u001f\u007f]/.test(t);
};

/** Mirrors the checks in submit-calculator, so a form that passes here is accepted there. */
export function validateBiodata(b: Biodata): BiodataErrors {
    const errors: BiodataErrors = {};
    if (!okText(b.name)) errors.name = true;
    const email = b.email.trim();
    if (email.length < 3 || email.length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = true;
    if (!whatsappNumber(b.whatsapp)) errors.whatsapp = true;
    const age = Number(b.age);
    if (!/^\d+$/.test(b.age.trim()) || age < 15 || age > 100) errors.age = true;
    if (b.gender !== "pria" && b.gender !== "wanita") errors.gender = true;
    if (!okText(b.occupation)) errors.occupation = true;
    if (!okText(b.city)) errors.city = true;
    if (!b.consent) errors.consent = true;
    return errors;
}

export function statsPayload(answers: EmergencyAnswers, lang: "id" | "en") {
    return { type: "stats", calculator: "emergency_fund", lang, answers };
}

export function leadPayload(answers: EmergencyAnswers, lang: "id" | "en", b: Biodata, website: string) {
    return {
        type: "lead",
        calculator: "emergency_fund",
        lang,
        answers,
        lead: {
            name: b.name.trim(),
            email: b.email.trim(),
            whatsapp: whatsappNumber(b.whatsapp) ?? b.whatsapp,
            age: Number(b.age),
            gender: b.gender,
            occupation: b.occupation.trim(),
            city: b.city.trim(),
            consent: b.consent,
            marketing_consent: b.marketing_consent,
            privacy_version: PRIVACY_VERSION,
        },
        website,
    };
}

const newId = () => (typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : undefined);

/** Posts a payload. Never throws: returns true only when the row was stored. */
export async function submit(payload: object, submissionId = newId()): Promise<boolean> {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
        const res = await fetch(SUBMIT_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...(submissionId ? { "x-submission-id": submissionId } : {}),
            },
            body: JSON.stringify(payload),
            signal: controller.signal,
        });
        return res.status === 201;
    } catch {
        return false;
    } finally {
        clearTimeout(timer);
    }
}
