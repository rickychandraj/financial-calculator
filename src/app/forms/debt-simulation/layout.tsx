import { calculatorMetadata } from "@/lib/seo";

export const metadata = calculatorMetadata("debt-simulation", "Simulasi Pelunasan Utang");

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
