import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Infrastructure | Hyper-Personalized AI Agents for Enterprise",
  description: "Enterprise-grade AI agents trained exclusively on your private data, deployed on your own servers. Total control. Total privacy. Zero compromise.",
  keywords: ["AI agents", "enterprise AI", "private AI", "on-premises AI", "AI infrastructure", "data privacy"],
  openGraph: {
    title: "AI Infrastructure | Hyper-Personalized AI Agents for Enterprise",
    description: "Enterprise-grade AI agents trained exclusively on your private data, deployed on your own servers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pt-16`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

