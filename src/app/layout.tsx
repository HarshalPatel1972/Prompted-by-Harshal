import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

import { ScrollMeter } from "@/components/ScrollMeter";
import { BackgroundFlow } from "@/components/BackgroundFlow";

const inter = Inter_Tight({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prompted by Harshal 2.0 | Meta-Portfolio",
  description: "Built by Harshal + An Army of Autonomous Agents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        <ScrollMeter />
        <BackgroundFlow />
        {children}
      </body>

    </html>
  );
}

