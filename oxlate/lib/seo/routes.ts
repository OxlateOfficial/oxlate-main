/**
 * Centralized Canonical Route Helpers
 * Enforces uniform, trailing-slash-safe internal routing across components, metadata, and sitemaps.
 */

import { siteConfig } from "@/lib/config/site";

export const routes = {
  // Relative path helpers
  home: () => "/",
  services: () => "/services",
  serviceAnchor: (id: string) => `/services#${id.replace(/^#/, "")}`,
  work: () => "/work",
  project: (slug: string) => `/work/${encodeURIComponent(slug)}`,
  products: () => "/products",
  product: (slug: string) => `/products/${encodeURIComponent(slug)}`,
  insights: () => "/insights",
  insight: (slug: string) => `/insights/${encodeURIComponent(slug)}`,
  about: () => "/about",
  contact: () => "/contact",

  // Absolute canonical URL helpers
  absolute: {
    home: () => `${siteConfig.url}/`,
    services: () => `${siteConfig.url}/services`,
    work: () => `${siteConfig.url}/work`,
    project: (slug: string) => `${siteConfig.url}/work/${encodeURIComponent(slug)}`,
    products: () => `${siteConfig.url}/products`,
    product: (slug: string) => `${siteConfig.url}/products/${encodeURIComponent(slug)}`,
    insights: () => `${siteConfig.url}/insights`,
    insight: (slug: string) => `${siteConfig.url}/insights/${encodeURIComponent(slug)}`,
    about: () => `${siteConfig.url}/about`,
    contact: () => `${siteConfig.url}/contact`,
    custom: (path: string) => `${siteConfig.url}/${path.replace(/^\//, "")}`,
  },
} as const;
