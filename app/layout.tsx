import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

// Load the "Baller" fonts
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: '--font-serif',
  display: 'swap',
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: '--font-sans',
  display: 'swap',
});

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
      <body className={`${playfair.variable} ${montserrat.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}