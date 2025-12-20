import Footer from "@/components/layout/Footer/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import Analytics from "@/components/performance/GoogleAnalytics";
import HeaderClient from "@/components/layout/Header/HeaderClient";

const OrbitronFont = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Oxlate | Web Development, Automation & Custom Software",
    template: "%s | Oxlate"
  },
  description:
    "Oxlate is a modern web development and automation company providing fast, mobile-first websites, ERP systems, and custom software solutions for businesses in India.",
  keywords: [
    "Oxlate",
    "Web Development Company",
    "Website Development India",
    "Automation Services",
    "Custom Software Development",
    "ERP Development",
    "Mobile-first websites"
  ],
  alternates: {
    canonical: "https://www.oxlate.com"
  },
  openGraph: {
    title: "Oxlate | Strongly Modern Digital Solutions",
    description:
      "Modern web development, automation, ERP and custom software solutions built for performance and scalability.",
    url: "https://www.oxlate.com",
    siteName: "Oxlate",
    type: "website"
  }
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
        <HeaderClient/>
        {children}
        <Analytics />
        <Footer/>
      </body>
    </html>
  );
}
