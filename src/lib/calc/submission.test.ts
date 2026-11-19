import { test } from "node:test";
import assert from "node:assert/strict";
import { emergencyAnswers, leadPayload, PRIVACY_VERSION, statsPayload, validateBiodata, whatsappNumber } from "./submission.ts";

const filled = {
    name: "Budi", email: "budi@gmail.com", whatsapp: "0812-3456-7890", age: "30", gender: "pria" as const,
    occupation: "Karyawan", city: "Jakarta", consent: true, marketing_consent: false,
};

test("answers only carry the fields that belong to the status", () => {
    const base = { 1: "10000000", 2: "0", 4: "6000000", 5: "20000000", 100: null, 101: null, 102: null };
    assert.deepEqual(emergencyAnswers({ ...base, 3: "single" }), {
        income: 10_000_000, dependents: 0, status: "single", expense: 6_000_000, saved: 20_000_000,
    });
    assert.deepEqual(emergencyAnswers({ ...base, 3: "divorced", 100: "2" }), {
        income: 10_000_000, dependents: 0, status: "divorced", kids: 2, expense: 6_000_000, saved: 20_000_000,
    });
    assert.deepEqual(emergencyAnswers({ ...base, 3: "married", 100: "1", 101: "5000000", 102: null }), {
        income: 10_000_000, dependents: 0, status: "married", kids: 1, partner_income: 5_000_000,
        partner_dependents: 0, expense: 6_000_000, saved: 20_000_000,
    });
});

test("counts are whole numbers within what the server accepts", () => {
    const a = emergencyAnswers({ 1: "1", 2: "2.7", 3: "single", 4: "1", 5: "0" });
    assert.equal(a.dependents, 2);
    assert.equal(emergencyAnswers({ 1: "1", 2: "500", 3: "single", 4: "1", 5: "0" }).dependents, 100);
});

test("WhatsApp numbers are normalised like the server does", () => {
    for (const input of ["081234567890", "6281234567890", "+62 812-3456-7890", "812 3456 7890", "(0812) 3456.7890"]) {
        assert.equal(whatsappNumber(input), "6281234567890");
    }
    for (const input of ["", "021-5551234", "0812", "62812345678901234", "abc"]) {
        assert.equal(whatsappNumber(input), null, input);
    }
});

test("biodata validation", () => {
    assert.deepEqual(validateBiodata(filled), {});
    const empty = validateBiodata({ ...filled, name: " ", email: "x", whatsapp: "021", age: "14", gender: "", occupation: "", city: "a", consent: false });
    assert.deepEqual(Object.keys(empty).sort(), ["age", "city", "consent", "email", "gender", "name", "occupation", "whatsapp"]);
    assert.ok(validateBiodata({ ...filled, age: "30.5" }).age);
    assert.ok(validateBiodata({ ...filled, age: "101" }).age);
});

test("payloads", () => {
    const answers = emergencyAnswers({ 1: "10000000", 2: "0", 3: "single", 4: "6000000", 5: "20000000" });
    assert.deepEqual(Object.keys(statsPayload(answers, "id")).sort(), ["answers", "calculator", "lang", "type"]);
    const lead = leadPayload(answers, "en", { ...filled, name: "  Budi  " }, "");
    assert.equal(lead.lead.name, "Budi");
    assert.equal(lead.lead.whatsapp, "6281234567890");
    assert.equal(lead.lead.age, 30);
    assert.equal(lead.lead.privacy_version, PRIVACY_VERSION);
});
