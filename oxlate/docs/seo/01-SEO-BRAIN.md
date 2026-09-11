# SEO STRATEGIC BRAIN & INFRASTRUCTURE DIRECTIVE — OXLATE

Version: 2.1  
Status: ACTIVE ARCHITECTURAL STANDARD  
Last Updated: 2026-09-11  

---

## 1. Core Philosophy & Doctrine

SEO at Oxlate is a **centralized, data-driven SEO infrastructure layer**, not an afterthought or marketing gimmick.
The core tenet: **FUTURE WEBSITE GROWTH MUST NEVER REQUIRE A REWRITE OF SEO LOGIC.**

The system is designed to evolve safely as Oxlate expands:
- Adding a project, service, product, insight, or team member is strictly a **data entry operation** across designated registries in `data/`.
- The SEO engine does not care about today's specific business shape (Web, Mobile, Custom Software vs. future AI Products, ERPs, Systems). It operates entirely on abstractions:
  `Content Type` + `Data Registry` + `Canonical Route` + `Indexability` + `Timestamps`.

### The Truth & Migration Contract
In accordance with Google's site move documentation:
- We **never** claim "zero-loss guaranteed" or "instant authority transfer" — Google's search algorithms take several weeks or months to recalculate link graphs, verify 301 signals, and update SERP positions.
- We **do not** claim structured data markup (e.g. `CreativeWork`) automatically boosts rankings. Schema markup provides clear machine disambiguation and semantic understanding. Genuine search ranking is earned through authentic first-party proof, deep technical explanation, real UI screenshots, and clean internal linking.
- Our commitment is **technical perfection**: zero broken links, 1:1 permanent 301 redirects for legacy footprints, clean Schema.org entity graphs, and complete canonical consistency.

---

## 2. Hardening & Scalability Directives

### Group A: Central Source of Truth & Entity Disambiguation
1. **Single Source of Truth (`siteConfig`):** All meta tags, JSON-LD graphs, OpenGraph cards, and robots directives read from `lib/config/site.ts`. No hardcoded domains or URLs across components.
2. **Canonical Domain Lock:** `https://oxlate.com` is the primary canonical domain.
3. **Structured Entity Graph:** Emits Schema.org `Organization`, `WebSite`, and `Service` interconnected via `@id` URIs (`https://oxlate.com/#organization`, etc.).
4. **Clean Identity in `sameAs`:** Only verified external identity pages (LinkedIn, GitHub, X, official Google Maps profile) are placed in `sameAs`. Customer action triggers (such as review submission links) are separated into `customerActions.googleReview`.

### Group B: Data Registries & Content Types
5. **Services Registry (`data/services.json`):** Service lines added via JSON automatically generate canonical anchors, schema entries, and metadata.
6. **Projects Registry (`data/projects.json`):** Dynamic portfolio items automatically generate `/work/[slug]` canonical routes, detailed project metadata, and dynamic sitemap entries.
7. **Products Registry (`data/products.json` & `data/products.data.ts`):** Future standalone software products are registered with `id`, `slug`, `name`, `description`, `status`, `technologies`, `features`, `publishedAt`, `updatedAt`, and `indexable`.
8. **Insights Registry (`data/insights.json` & `data/insights.data.ts`):** Technical essays and engineering articles are registered with author entity disambiguation (`author: { name, role, url, sameAs }`), `readingTime`, `tags`, `publishedAt`, and `updatedAt`.
9. **Automated Route Helpers (`lib/seo/routes.ts`):** All internal links and canonical targets must use route helpers (`routes.home()`, `routes.project(slug)`, `routes.product(slug)`, `routes.insight(slug)`) to eliminate trailing slash mismatches.

### Group C: Legacy URL Preservation & Domain Consolidation
10. **Central Redirect Registry (`lib/seo/legacy-url-map.ts`):** Every legacy indexed URL on `oxlate.com` and `oxlate.in` is mapped with a reason, destination, and permanent 301 status code.
11. **Direct Next.js Config Integration:** `next.config.ts` consumes `LEGACY_REDIRECT_REGISTRY` directly; no manual duplication between config files.
12. **Host-Level Secondary Domain Consolidation:** In `next.config.ts`, `HOST_REDIRECT_REGISTRY` captures inbound traffic on `oxlate.in` and `*.oxlate.in` (`has: [{ type: 'host', value: '(?<subdomain>.*\\.)?oxlate\\.in' }]`) and issues immediate 301 redirects to `https://oxlate.com/:path*`. Apex DNS/Vercel domain redirects should also be configured as edge pre-routing.
13. **Zero Redirect Chains:** Every legacy redirect targets the final canonical 200 destination directly (A → B, never A → B → C).
14. **Indefinite Redirect Lifespan:** Migration redirects must be maintained for at least 1–2 years (per Google guidelines) to guarantee complete link equity transfer.
15. **Comprehensive Audit Table (`docs/seo/09-MIGRATION-TABLE.md`):** Complete mapping of every historical indexed route.

### Group D: Sitemap & Indexability Governance
16. **Canonical 200 Only in Sitemap:** `app/sitemap.ts` contains only 200-OK, canonical, indexable routes. No redirects, no 404s, no noindex pages.
17. **Honest `lastModified` Timestamps:** Sitemaps and schemas use verified Git commit dates or JSON `updatedAt` / `publishedAt` timestamps. Never inject dynamic `new Date()` into static URLs.
18. **Granular Indexability Flag (`indexable: boolean`):** Any project, product, or insight can be flagged `indexable: false`. The system automatically generates `robots: { index: false, follow: false }` and removes the URL from `sitemap.xml`.
19. **Bot Directives (`app/robots.ts`):** Explicit rules granting full indexing access to standard search bots (`Googlebot`, `Bingbot`) and modern AI citation bots (`OAI-SearchBot`, `PerplexityBot`).

### Group E: Build-Time Invariant Validation Engine
20. **Active SEO State Validator (`lib/seo/validation.ts`):** Automatically executed during sitemap generation and build time. Immediately rejects builds violating:
    - Missing titles, descriptions, or summaries
    - Duplicate slugs within or across collections (projects, products, insights)
    - Redirect chains or circular redirects
    - Missing timestamps on indexable items
    - Canonical URL mismatches
    - Leaked draft or noindex URLs in sitemaps

### Group F: Social & Visual Entity Representation
21. **Programmatic OpenGraph Preview (`app/opengraph-image.tsx`):** Pre-rendered 1200x630 high-contrast architectural card containing entity branding, dynamic tagline, and geographic locator.
22. **Fallback Asset Redundancy:** Static fallback card at `/opengraph-image.png` configured in metadata for maximum third-party crawler compatibility.

---

## 3. How to Add New Content Without Breaking SEO

### Adding a New Project
1. Open `data/projects.json`.
2. Add project object (`id`, `title`, `slug`, `client`, `summary`, `technologies`, `publishedAt`, `updatedAt`, `indexable: true`).
3. Build runs `assertSeoArchitectureValid()`, verifies all invariants, and outputs `/work/[slug]`, canonical tags, and sitemap entries.

### Adding a New Product
1. Open `data/products.json`.
2. Add product object (`id`, `name`, `slug`, `tagline`, `description`, `status`, `technologies`, `features`, `publishedAt`, `updatedAt`, `indexable`).

### Adding a New Insight
1. Open `data/insights.json`.
2. Add insight object (`id`, `title`, `slug`, `excerpt`, `author: { name, role, url, sameAs }`, `readingTime`, `tags`, `publishedAt`, `updatedAt`, `indexable`).

