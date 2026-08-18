import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Onest, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: "italic",
});

export const metadata: Metadata = {
  title: "Finsyc — AI-Powered Fintech Platform",
  description:
    "Take full control of your finances with AI-powered insights. Automatically track spending, predict upcoming expenses, and make smarter financial decisions.",
  keywords: ["fintech", "AI", "finance", "money management", "spending tracker"],
  authors: [{ name: "Finsyc" }],
  openGraph: {
    title: "Finsyc — AI-Powered Fintech Platform",
    description:
      "Take full control of your finances with AI-powered insights.",
    url: "https://finsyc.com",
    siteName: "Finsyc",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${onest.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
