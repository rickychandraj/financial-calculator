import type { Metadata } from "next";

export const siteName = "Kalkulator BerUANG";
export const siteDescription =
    "Kalkulator keuangan gratis dari Mama BerUANG by Ayu Sara. Hitung dana darurat, dana pensiun, pendidikan anak, DP properti, umroh, liburan, dan lainnya.";
const ogImage = { url: "/opengraph-image.png", width: 1200, height: 630, alt: "Kalkulator Keuangan Mama BerUANG by Ayu Sara" };

// Metadata for one calculator page: its own tab title and link preview,
// with the shared description and preview image.
export function calculatorMetadata(slug: string, title: string): Metadata {
    const fullTitle = `${title} | ${siteName}`;
    const url = `/forms/${slug}`;
    return {
        title,
        alternates: { canonical: url },
        openGraph: {
            type: "website",
            locale: "id_ID",
            siteName,
            url,
            title: fullTitle,
            description: siteDescription,
            images: [ogImage],
        },
        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description: siteDescription,
            images: [ogImage.url],
        },
    };
}
