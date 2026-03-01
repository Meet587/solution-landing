import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/theme-provider";

import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Private AI Infrastructure | Enterprise AI Agents",
  description:
    "Private AI agents deployed on your infrastructure. No shared models. No data leakage. Full control. Built for regulated enterprises.",
  keywords: [
    "private AI",
    "enterprise AI",
    "AI infrastructure",
    "on-premises AI",
    "AI agents",
    "data privacy",
    "regulated industries",
  ],
  openGraph: {
    title: "Private AI Infrastructure | Enterprise AI Agents",
    description:
      "Private AI agents deployed on your infrastructure. No shared models. No data leakage. Full control.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
