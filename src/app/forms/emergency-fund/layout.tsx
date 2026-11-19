import { calculatorMetadata } from "@/lib/seo";

export const metadata = calculatorMetadata("emergency-fund", "Perhitungan Dana Darurat");

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
