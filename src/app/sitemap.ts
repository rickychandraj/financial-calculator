import type { MetadataRoute } from "next";

const base = "https://calculator.mamaberuang.com";

// Only the calculators linked from the homepage. Debt simulation, financial
// audit and KPR simulation stay out until they are shown on the homepage.
const calculators = [
    "emergency-fund",
    "pension-fund",
    "couple-test",
    "education-fund",
    "investment",
    "property-down-payment",
    "umrah",
    "holiday",
    "item",
    "transportation",
];

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: base, changeFrequency: "monthly", priority: 1 },
        ...calculators.map((slug) => ({
            url: `${base}/forms/${slug}`,
            changeFrequency: "monthly" as const,
            priority: 0.8,
        })),
    ];
}
