import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteName, siteDescription as description } from "@/lib/seo";

const inter = localFont({
  src: "./fonts/InterVariable.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://calculator.mamaberuang.com"),
  title: {
    default: "Kalkulator Mama BerUANG by Ayu Sara",
    template: `%s | ${siteName}`,
  },
  description,
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName,
    url: "/",
    title: "Kalkulator Mama BerUANG by Ayu Sara",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalkulator Mama BerUANG by Ayu Sara",
    description,
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
