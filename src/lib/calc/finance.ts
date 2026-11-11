/** Shared money maths for the calculators. Rates are decimals (0.06 = 6%). */

export type ContributionTiming = "begin" | "end";

/** Value of `amount` after `years` of yearly compounding. */
export const futureValue = (amount: number, annualRate: number, years: number): number =>
    amount * Math.pow(1 + annualRate, years);

/**
 * Level contribution per period that grows to `target` after `periods` periods.
 * Returns 0 when there is nothing left to save, and the whole target when there is no time left.
 */
export function contributionNeeded(
    target: number,
    ratePerPeriod: number,
    periods: number,
    timing: ContributionTiming = "end",
): number {
    if (!(target > 0)) return 0;
    if (!(periods > 0)) return target;
    if (ratePerPeriod === 0) return target / periods;

    const growth = (Math.pow(1 + ratePerPeriod, periods) - 1) / ratePerPeriod;
    return target / (timing === "begin" ? growth * (1 + ratePerPeriod) : growth);
}

/** Monthly saving (paid at the end of each month) that grows to `target` in `years`. */
export const monthlySavingNeeded = (target: number, annualRate: number, years: number): number =>
    contributionNeeded(target, annualRate / 12, years * 12);

/** Lump sum that funds `payment` per period for `periods` periods while earning `ratePerPeriod`. */
export function annuityPresentValue(payment: number, ratePerPeriod: number, periods: number): number {
    if (!(periods > 0)) return 0;
    if (ratePerPeriod === 0) return payment * periods;
    return payment * (1 - Math.pow(1 + ratePerPeriod, -periods)) / ratePerPeriod;
}

/** "1234567.5" -> "1,234,567.5". Keeps a leading minus; anything that is not a number becomes "0". */
export function formatNumber(value: number | string): string {
    const text = String(value);
    const cleaned = text.replace(/[^\d.]/g, "");
    if (cleaned === "" || text === "Infinity" || text === "-Infinity") return "0";

    const [integerPart, decimalPart] = cleaned.split(".");
    const grouped = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const sign = text.trim().startsWith("-") && Number(cleaned) !== 0 ? "-" : "";
    return sign + (decimalPart !== undefined ? `${grouped}.${decimalPart}` : grouped);
}
