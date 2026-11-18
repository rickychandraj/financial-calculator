import { calculatorMetadata } from "@/lib/seo";

export const metadata = calculatorMetadata("financial-audit", "Cek Kesehatan Keuangan");

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
