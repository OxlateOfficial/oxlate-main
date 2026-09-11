# TECHNICAL SEO & CRAWLABILITY — OXLATE V1

Version: 1.0  
Status: ACTIVE  
Last Updated: 2026-09-10

## Core Web Vitals Targets
- **Largest Contentful Paint (LCP):** < 1.8s (ensure Hero text renders statically in initial HTML).
- **Cumulative Layout Shift (CLS):** 0.00 (enforce explicit dimensions for images, SVGs, and fonts).
- **Interaction to Next Paint (INP):** < 100ms (zero blocking main-thread calculations or unnecessary WebGL loops).

## App Router Implementation
- Dynamic Sitemap: `app/sitemap.ts` serving valid `sitemap.xml`.
- Dynamic Robots: `app/robots.ts` serving clean crawler directives.
- OpenGraph & Twitter Cards configured via Next.js metadata object in `app/layout.tsx`.
