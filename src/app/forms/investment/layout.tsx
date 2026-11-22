import { calculatorMetadata } from "@/lib/seo";

export const metadata = calculatorMetadata("investment", "Perencanaan Investasi");

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
