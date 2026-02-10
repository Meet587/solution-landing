import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

