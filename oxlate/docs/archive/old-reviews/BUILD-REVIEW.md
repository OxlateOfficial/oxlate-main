# BUILD REVIEW — OXLATE V1

Version: 1.0  
Status: ACTIVE  
Last Updated: 2026-09-10

---

## Current State

The current codebase is an experimental hybrid implementing a 240vh scroll-pinned hero with a massive 210vh SVG monolith (`LogoMonolith`), interactive canvas drawing pad with pen cursor (`BlueprintPad`), simulated real-time telemetry metrics (`ChamberA`), and tech stack category switchers (`ChamberB`). Below the hero sits an expandable accordion staircase (`ApproachSection`) attempting to compress the entire company narrative into four hover cards, a generic marquee tech belt (`TechBeltSection`), and a staggered pillar portfolio showcase (`PortfolioSection`). 

While the warm ivory foundation and vector mark exist, the visual execution suffers from severe over-decoration, conflicting animations, simulated data metrics (e.g. "99.9% uptime", "sub-50ms latency"), and excessive card rounding that directly violates the calm, disciplined architectural editorial vision documented in `Rough Idea/` and `ThinkLikeThis.md`.

---

## Keep

* **Warm Ivory Environment:** The base palette token (`--background`: `#F5F2EC` / `oklch(0.965 0.018 88)`) and high-contrast deep black (`#111111`) typographic foundation.
* **Oxlate Official Brand Mark:** The authentic vector paths from `Oxlate_logoX_blk.svg` as the core brand mark.
* **Restrained Bronze Palette:** Bronze (`#A87445`) reserved strictly as an accent material (2–5% visible UI area) for indicators, active borders, and key anchors.
* **Smooth Scrolling Infrastructure:** Lenis smooth scrolling configuration in `app/layout.tsx` and `components/ui/smooth-scroll.tsx`.
* **Core Font Stack:** Next.js font loading for `Geist` (primary interface/body) and `Geist Mono` (code/metadata tags).
* **Honest Work Positioning Rule:** Clear classification of work as `Independent Project` or `Founding Developer's Work`.

---

## Change

* **Hero Composition & Scaling:** Replace the 210vh overwhelming SVG monolith with a balanced architectural hero where the Oxlate mark holds physical presence without suffocating the content or creating layout shifts.
* **Scroll Animation Paradigm:** Transition from complex, multi-stage pinned chamber fades to a clean, calm scroll progression where the logo travels into place and architectural construction lines establish the page layout.
* **Navigation Bar:** Shift from the bulky floating pill navbar to a minimal, high-precision architectural header with section indexing that locks seamlessly into view.
* **Container Geometry:** Reduce excessive border-radii (`12–18px` rounded cards) to sharp, disciplined architectural geometry (`0–6px` borders/containers).
* **Approach & Capabilities Presentation:** Unpack the hidden hover-dependent expandable staircase into open, readable architectural columns that search engines and human visitors can immediately read without hunting.
* **Copy Tone:** Strip out marketing hype and exaggerated metrics ("ACTIVE 60 FPS", "99.9% Uptime Standard") in favor of calm, declarative statements of craftsmanship.

---

## Remove

* **Interactive Blueprint Drawing Canvas:** The canvas drawing pad with simulated drafting pen cursor in `ChamberA` (gimmicky interaction that contradicts serious technology positioning).
* **Chamber A & B Split Cards:** Over-designed floating telemetry boxes and tabbed tech stack switchers.
* **Engraved SVG Coordinate Text:** Hardcoded labels embedded directly inside SVG vector paths.
* **Tech Belt Marquee:** The drifting marquee ticker in `TechBeltSection` (feels like a generic template agency pattern).
* **Compressed Staircase Accordion:** The hover-dependent hidden cards in `ExpandableStaircase`.
* **Fabricated Metrics & SLA Tickers:** All unverified claims ("99.9% Uptime", "Sub-50ms latency target", "100% Type-Safe guarantee").

---

## Rebuild

* **01 — Hero Section:** An editorial composition with ivory whitespace, prominent Oxlate black mark, semantic `H1`, restrained positioning paragraph, primary CTA, and subtle architectural construction lines.
* **02 — Capabilities Section:** Three or four structured architectural columns (Web Development, Mobile Applications, Custom Software / Business Systems) with clear service entities for both human conviction and SEO crawlability.
* **03 — Work / Selected Projects Section:** An editorial project showcase highlighting genuine capability, labeled strictly as `Independent Project` / `Founding Developer's Work` with real architecture descriptions and no fake metrics.
* **04 — Approach Section:** Four calm principles of engineering discipline ("Understand the problem", "Design before overbuilding", "Build only what the product needs", "Keep the system understandable").
* **05 — About Section:** Clear factual entity statement establishing Oxlate as a focused technology partner founded in 2025.
* **06 — Contact / Conversion Section:** Minimal, confident conversion statement ("Have something worth building? Start a conversation") with direct contact points and zero marketing friction.
* **07 — Footer Section:** Grounded, architectural baseline with copyright, direct communication links, and legal/entity markers.
* **Persistent Architectural Index:** A subtle, vertical section index (01 INTRO, 02 CAPABILITIES, 03 WORK, 04 APPROACH, 05 ABOUT, 06 CONTACT) providing orientation without clutter.

---

## Missing

* **Architectural SVG System Assets:** Precise, minimal geometric construction lines and frames that represent architectural structure rather than decorative clutter.
* **Project Interface Mockup Visuals:** Clean editorial screenshots/visuals for independent projects (replacing generic placeholder graphics).
* **SEO Metadata & OpenGraph Image:** Production-ready `app/sitemap.ts`, `app/robots.ts`, JSON-LD `Organization` and `Service` schemas, and `/public/og/oxlate-default.png` (1200x630px).
* **Section Index Tracker Component:** A dedicated architectural indicator showing current scroll position and section progression.

---

## Risks

* **Scroll Pinned Viewport Fragility:** Overly aggressive scroll pinning can cause mobile viewport jank or trap users. Mobile must adopt an intentional native flow rather than forced desktop pinning.
* **Asset Availability vs Implementation Velocity:** Delay in acquiring final project screenshots or architectural SVGs could stall progress if placeholders are not cleanly isolated.
* **Information Concealment:** Relying on Framer Motion opacities could inadvertently hide semantic content from search engine crawlers if rendered conditionally or initialized off-screen.

---

## Proposed V1 Structure

1. **Header / Navigation:** Minimal fixed architectural frame with logo, text links, and current section indicator.
2. **01 — Hero:** Prominent Oxlate mark, single semantic `H1`, concise introductory statement, primary action, structural grid lines.
3. **02 — Capabilities:** Three core columns (Websites & Web Apps, Mobile Applications, Custom Business Systems).
4. **03 — Work (Selected Projects):** Editorial project presentations with architectural breakdown and honest independent labeling.
5. **04 — Approach:** Four foundational engineering principles emphasizing attention, craftsmanship, and longevity.
6. **05 — About:** Factual entity introduction (founded 2025, small dedicated team, direct founder involvement).
7. **06 — Contact:** Direct conversion anchor ("Have something worth building?").
8. **07 — Footer:** Clean technical baseline with entity metadata and navigation anchors.
