import { calculatorMetadata } from "@/lib/seo";

export const metadata = calculatorMetadata("kpr-simulation", "Perhitungan Simulasi KPR");

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
