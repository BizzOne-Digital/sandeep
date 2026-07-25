import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "@/components/ConditionalLayout";

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
  description: "Professional residential and commercial cleaning services using plant-based products. A calmer home. A sharper office. Serving Edmonton and surrounding areas.",
  keywords: ["cleaning services", "eco-friendly cleaning", "residential cleaning", "commercial cleaning", "Edmonton cleaning", "plant-based cleaning"],
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
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
