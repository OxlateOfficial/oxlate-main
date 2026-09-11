# WEBSITE STRUCTURE & ARCHITECTURE — OXLATE V1

Version: 3.0  
Status: ACTIVE STRATEGIC AUTHORITY  
Last Updated: 2026-09-10

---

## 1. Single Continuous Architectural Composition (`DECIDED`)

The website is engineered as a **single unfolding continuous page**, not a set of disconnected marketing blocks.

- **Atmosphere:** An unfolding architectural monograph or digital product presentation.
- **Continuity:** The Warm Ivory background (`#F5F2EC`) flows continuously from top to bottom. Sections are demarcated by hairline scoring rules (`#D9D4CC`), generous whitespace, typographic rhythm, and chapter indicators.
- **No Abrupt Color Flips:** Dark-mode sections or abrupt color jumps are avoided to preserve spatial calmness.

---

## 2. Indexed Core Section Flow (`DECIDED`)

The page is organized into an indexed progression:

- **01 // INTRO (`#intro`):** Primary visual statement, brand mark sequence, semantic H1, positioning subtitle, and initial CTA.
- **02 // CAPABILITIES (`#capabilities`):** Direct, concrete spectrum of capabilities (Web & Web Applications, Mobile Applications, Custom Software & Internal Tools).
- **03 // WORK (`#work`):** Transparent showcase of independent engineering and design systems (strictly labeled `Independent Project` or `Founding Developer's Work`).
- **04 // APPROACH (`#approach`):** Four core engineering principles explaining why direct founder involvement delivers superior software.
- **05 // ABOUT (`#about`):** Factual entity narrative (founded in 2025, dedicated technology partner).
- **06 // CONTACT (`#contact`):** Low-friction conversation anchor ("Have something worth building?").
- **07 // FOOTER (`#footer`):** Grounded architectural baseline containing social signals, entity metadata, navigation anchors, and legal lines.

---

## 3. Persistent Navigation & Orientation Systems (`DECIDED`)

- **Top Architectural Header (`Navbar`):** Fixed minimal top bar with authentic vector mark (`Oxlate_logoX_blk.svg`), section anchors, and direct CTA.
- **Side Index Dial / Ticker:**
  - *Desktop (`≥ 1024px`):* Vertical monospace index (`01 INTRO` to `06 CONTACT`) in the right margin with magnetic scroll tracking.
  - *Mobile (`< 768px`):* Minimal floating status pill or top breadcrumb ticker (`01 / 06 • INTRO`) that updates silently as sections pass, leaving 100% of body width available for reading.

---

## 4. Future Page Architecture (`EXPLORATION`)

While V1 launches as a unified single-page experience, the site is architected so supporting deep pages can emerge naturally as content and client work scale:

```text
/
├── /services
│   ├── /services/web-development
│   ├── /services/mobile-app-development
│   └── /services/custom-software
├── /work
│   └── /work/[slug]
├── /about
├── /contact
└── /insights
    └── /insights/[slug]
```
