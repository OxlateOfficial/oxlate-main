import type { Metadata, Viewport } from "next";
import { Orbitron } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { DEFAULT_SITE_METADATA } from "@/lib/seo/metadata";
import { StructuredData } from "@/components/seo/structured-data";
import { generateRootJsonLdGraph } from "@/lib/seo/schema";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = DEFAULT_SITE_METADATA;

export const viewport: Viewport = {
  themeColor: "#F5F2EC",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const rootJsonLd = generateRootJsonLdGraph();

  return (
    <html lang="en">
      <head>
        <StructuredData data={rootJsonLd} />
      </head>
      <body
        className={`min-h-screen bg-[#F5F2EC] text-[#111111] antialiased selection:bg-[#A87445] selection:text-[#FFFFFF] ${orbitron.variable}`}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
