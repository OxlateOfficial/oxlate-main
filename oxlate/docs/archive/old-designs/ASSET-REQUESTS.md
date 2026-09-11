# ASSET REQUESTS — OXLATE V1

Version: 3.0  
Status: ACTIVE STRATEGIC AUTHORITY  
Last Updated: 2026-09-10

This document catalogs every custom asset required for Oxlate V1. No arbitrary stock images or unapproved assets may be introduced without an entry in this registry.

---

## 1. Approved Existing Assets

| Asset ID | Type | File Path | Used In | Status |
|:---|:---|:---|:---|:---|
| `BRAND-LOGO-01` | SVG | `/Oxlate_logoX_blk.svg` | Hero, Header, Footer | APPROVED / READY |
| `BRAND-ICON-01` | SVG | `/public/icon.svg` | Favicon & Manifest | APPROVED / READY |

---

## 2. Asset Requests & Specifications

### Asset ID: `HERO-SVG-01`
* **Asset Type:** SVG (Scalable Vector Graphics)
* **Purpose:** Provides subtle architectural construction linework, alignment crosshairs, and geometric framing for the hero background layer (L1).
* **Where Used:** Section 01 Intro (`01 — Hero`)
* **Visual Description:** Ultra-fine hairline CAD drafting lines. A horizontal datum axis intersected by vertical coordinate guides with micro crosshair ticks at intersection points.
* **Dimensions / Format:** Responsive SVG, ViewBox `0 0 1440 900`, vector paths only, zero embedded raster textures or fonts.
* **Art Direction:** Deep Black / Graphite linework (`#111111` / `#292929`), 0.5px to 1px stroke at 10–18% opacity, Warm Ivory environment (`#F5F2EC`).
* **Generation Prompt:** `Minimal architectural blueprint elevation lines, ultra-fine 1px vector hairline construction grid, subtle crosshairs and coordinate markers, clean geometric drafting layout on off-white parchment background, technical precision, CAD schematic aesthetics, no text, no heavy blocks, pure hairline structure.`
* **Status:** PENDING CREATION (Developer fallback: inline SVG blueprint component)

---

### Asset ID: `OG-IMAGE-01`
* **Asset Type:** PNG Image
* **Purpose:** Official OpenGraph and Twitter card social sharing preview banner.
* **Where Used:** Next.js Metadata (`app/layout.tsx` -> `openGraph.images`, `twitter.images`)
* **Visual Description:** Warm Ivory background (`#F5F2EC`) featuring the bold black Oxlate mark (`Oxlate_logoX_blk.svg`), hairline CAD datum rules, bronze micro-accent dot, and positioning text: "Web & Mobile Development Partner — Built with intent."
* **Dimensions / Format:** 1200 × 630px, PNG format, `/public/og/oxlate-default.png`.
* **Art Direction:** Aligned strictly with brand tokens: `#F5F2EC` background, `#111111` logo, `#A87445` bronze dot.
* **Generation Prompt:** `Minimalist 1200x630 graphic design banner, warm ivory background, centered bold geometric black Oxlate logo mark, delicate fine architectural datum lines, subtle bronze accent dot, clean editorial typography 'OXLATE — Web & Mobile Development Partner', quiet luxury, high resolution.`
* **Status:** PENDING CREATION

---

### Asset ID: `WORK-ASSET-SLOT-01`
* **Asset Type:** WEBP / PNG Image
* **Purpose:** Visual media capture for Project Showcase 01.
* **Where Used:** Section 03 Work Showcase
* **Visual Description:** High-resolution capture of authentic web or desktop application interface framed within a clean parchment container.
* **Dimensions / Format:** 1600 × 1000px (16:10 aspect ratio), optimized WEBP, `/public/assets/work-slot-01.webp`.
* **Art Direction:** Warm parchment tones, clean typography, subtle border dividers, natural daylight shadows, editorial feel.
* **Status:** PENDING OWNER SELECTION

---

### Asset ID: `WORK-ASSET-SLOT-02`
* **Asset Type:** WEBP / PNG Image
* **Purpose:** Visual media capture for Project Showcase 02.
* **Where Used:** Section 03 Work Showcase
* **Visual Description:** High-resolution capture of authentic mobile application interface framed within a clean parchment container.
* **Dimensions / Format:** 1200 × 1200px or 1600 × 1000px, WEBP format, `/public/assets/work-slot-02.webp`.
* **Art Direction:** Clean mobile UI hierarchy, warm neutral environment, matte framing.
* **Status:** PENDING OWNER SELECTION
