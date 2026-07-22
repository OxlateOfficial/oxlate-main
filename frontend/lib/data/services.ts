import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "High-performance websites and web apps built with modern frameworks. From marketing sites to complex web platforms, we deliver fast, accessible, and SEO-ready products.",
    icon: "Globe",
    anchor: "web-development",
    features: [
      "Mobile-first responsive design",
      "SEO-optimized architecture",
      "Fast loading & Core Web Vitals",
      "CMS integration (if needed)",
      "Custom domain & hosting setup",
    ],
  },
  {
    id: "app-development",
    title: "Mobile App Development",
    description:
      "Native-quality iOS and Android apps built with React Native. A single codebase, two platforms — without compromising on performance or user experience.",
    icon: "Smartphone",
    anchor: "app-development",
    features: [
      "iOS & Android from one codebase",
      "Native device features (camera, GPS, etc.)",
      "Offline support & push notifications",
      "App Store & Play Store submission",
      "Backend API integration",
    ],
  },
  {
    id: "seo",
    title: "SEO Optimization",
    description:
      "Technical and content SEO that gets your business found. From site audits to structured data and LLM-readiness — we build visibility that compounds over time.",
    icon: "TrendingUp",
    anchor: "seo",
    features: [
      "Technical SEO audit & fixes",
      "On-page optimization",
      "Schema.org structured data",
      "Core Web Vitals improvement",
      "LLM / AI search readiness",
    ],
  },
];
