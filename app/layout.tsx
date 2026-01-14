import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"], variable: '--font-serif' });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "600"], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Beatrice Onyango | Beyond The Horizon",
  description: "Curated hiking stories and adventures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable} font-sans`}>{children}</body>
    </html>
  );
}