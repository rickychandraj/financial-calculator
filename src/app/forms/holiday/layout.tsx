import { calculatorMetadata } from "@/lib/seo";

export const metadata = calculatorMetadata("holiday", "Perencanaan Dana Liburan");

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
