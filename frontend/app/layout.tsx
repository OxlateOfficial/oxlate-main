import Footer from "@/components/layout/Footer/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Orbitron } from "next/font/google";

const OrbitronFont = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});


export const metadata: Metadata = {
  title: "Oxlate — Strongly Modern Digital Solutions",
  description:
    "Oxlate builds modern websites, automations, ERP systems, and custom software tailored to your business.",
  keywords: [
    "Web Development",
    "Automation",
    "ERP Software",
    "Custom Software",
    "Oxlate",
  ],
  openGraph: {
    title: "Oxlate",
    description: "Strongly Modern Digital Solutions",
    url: "https://oxlate.in",
    siteName: "Oxlate",
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
        className={`${OrbitronFont.variable} antialiased bg-white text-black scroll-smooth`}
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
