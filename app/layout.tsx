import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntroAnimation from "@/components/IntroAnimation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "B.Tech Eco Clean - Premium Eco-Friendly Cleaning Services",
  description: "Professional residential and commercial cleaning services using plant-based products. A calmer home. A sharper office. Serving Toronto and surrounding areas.",
  keywords: ["cleaning services", "eco-friendly cleaning", "residential cleaning", "commercial cleaning", "Toronto cleaning", "plant-based cleaning"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-cream-soft">
        <IntroAnimation />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
