/**
 * Central Site & SEO Configuration for Oxlate
 * Single Source of Truth for metadata, structured data, canonical URLs, and entity footprint.
 */

import servicesData from "@/data/services.json";

export const siteConfig = {
  name: "Oxlate",
  legalName: "Oxlate",
  domain: "oxlate.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://oxlate.com",
  alternateDomains: ["oxlate.in", "www.oxlate.com", "www.oxlate.in"],
  tagline: "Thoughtful web experiences and mobile applications.",
  title: "Oxlate — Web Development & Mobile Applications",
  titleTemplate: "%s | Oxlate",
  description:
    "Oxlate is a technology partner building custom websites, web applications, mobile products and bespoke business software with disciplined design and precision engineering.",
  locale: "en_US",
  foundingYear: 2025,
  releaseDate: "2026-09-11",

  location: {
    city: "Chandigarh",
    country: "India",
    countryCode: "IN",
    region: "Global",
  },

  contact: {
    email: "oxlateofficial@gmail.com",
    responseTime: "Within 24 hours",
  },

  social: {
    x: "https://x.com/OxlateOfficial",
    xHandle: "@OxlateOfficial",
    linkedin: "https://www.linkedin.com/company/oxlateofficial",
    github: "https://github.com/OxlateOfficial",
    alternateWebsite: "https://oxlate.in",
  },

  customerActions: {
    googleReview: "https://g.page/r/CYbNnrb42Up2EBI/review",
  },

  services: servicesData,

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
