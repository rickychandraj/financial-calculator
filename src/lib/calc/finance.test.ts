import { test } from "node:test";
import assert from "node:assert/strict";
import {
    annuityPresentValue,
    contributionNeeded,
    formatNumber,
    futureValue,
    monthlySavingNeeded,
} from "./finance.ts";

const near = (actual: number, expected: number, tolerance = 1) =>
    assert.ok(Math.abs(actual - expected) <= tolerance, `${actual} is not within ${tolerance} of ${expected}`);

test("futureValue compounds yearly", () => {
    near(futureValue(10_000_000, 0.04, 2), 10_816_000);
    assert.equal(futureValue(5_000_000, 0.06, 0), 5_000_000);
});

test("contributionNeeded: yearly, end of period", () => {
    // Rp100m in 10 years at 6%: 100m * 0.06 / (1.06^10 - 1)
    near(contributionNeeded(100_000_000, 0.06, 10, "end"), 7_586_796);
});

test("contributionNeeded: paying at the start of the period needs less", () => {
    near(contributionNeeded(100_000_000, 0.06, 10, "begin"), 7_157_355);
});

test("contributionNeeded: contributions really reach the target", () => {
    const perMonth = monthlySavingNeeded(50_000_000, 0.06, 3);
    let balance = 0;
    for (let month = 0; month < 36; month++) balance = balance * (1 + 0.06 / 12) + perMonth;
    near(balance, 50_000_000);
});

test("contributionNeeded: nothing to save once the target is met", () => {
    assert.equal(contributionNeeded(0, 0.005, 24), 0);
    assert.equal(contributionNeeded(-45_364_000, 0.005, 24), 0);
});

test("contributionNeeded: zero return splits the target evenly", () => {
    assert.equal(contributionNeeded(120_000_000, 0, 120), 1_000_000);
});

test("contributionNeeded: no time left means the whole target is due now", () => {
    assert.equal(contributionNeeded(20_000_000, 0.005, 0), 20_000_000);
    assert.equal(contributionNeeded(20_000_000, 0.005, -12), 20_000_000);
});

test("annuityPresentValue", () => {
    // 12 monthly payments of 1m at 0.5%/month
    near(annuityPresentValue(1_000_000, 0.005, 12), 11_618_932);
    assert.equal(annuityPresentValue(1_000_000, 0, 12), 12_000_000);
    assert.equal(annuityPresentValue(1_000_000, 0.005, 0), 0);
    assert.equal(annuityPresentValue(1_000_000, 0.005, -72), 0);
});

test("formatNumber", () => {
    assert.equal(formatNumber(1234567), "1,234,567");
    assert.equal(formatNumber("50000000"), "50,000,000");
    assert.equal(formatNumber("1234.5"), "1,234.5");
    assert.equal(formatNumber(-45364000), "-45,364,000");
    assert.equal(formatNumber(0), "0");
    assert.equal(formatNumber(-0), "0");
    assert.equal(formatNumber(NaN), "0");
    assert.equal(formatNumber(Infinity), "0");
});
