import { calculatorMetadata } from "@/lib/seo";

export const metadata = calculatorMetadata("transportation", "Perencanaan Pembelian Kendaraan");

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
