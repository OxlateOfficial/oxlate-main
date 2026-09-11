# OXLATE V1 — MASTER AGENT EXECUTION PROMPT & BRIEF

> **Use this prompt for any coding agent working on Oxlate V1.**  
> It contains the complete architectural context, locked decisions, structural hierarchy, and execution instructions.

---

```markdown
# OXLATE V1 — MASTER EXECUTION PROMPT

You are building Oxlate V1.

## 01 — THE COMPANY & INTENT
Oxlate is a precision technology partner building thoughtful web experiences, web applications, and mobile products with calm, architectural discipline.
The website is NOT a generic agency site, not a SaaS marketing funnel, not a freelance portfolio, and not an AI startup template.
It is an architectural monograph: quiet, confident, restrained, and meticulously crafted.
Confidence comes from proportion, generous whitespace, typography, and clean alignment—not decorative noise or gimmicks.

## 02 — THE TRUTH RULE (INVARIANT)
1. Never invent clients, testimonials, enterprise logos, or awards.
2. Never invent commercial impact metrics (e.g. "+43% conversion", "10k users").
3. All work is labeled strictly as "Independent Project" (or "Founding Developer's Work").
4. Never assume or claim unverified team sizes, office addresses, or company history beyond: Founded in 2025 as a focused technology partner for web and mobile.

## 03 — VISUAL SYSTEM & DESIGN TOKENS
- Environment / Background: Warm Ivory (`#F5F2EC`). Carries continuously down the entire page.
- Secondary Surface: Soft Cream (`#ECE8E1`).
- Card Fill: Pure Parchment (`#FAF8F5`).
- Primary Typography / Solids: Deep Black (`#111111`).
- Linework & Secondary Text: Graphite (`#292929`) and Neutral Slate (`#6C6B66`).
- Hairline Dividers: Pale Stone (`#D9D4CC`, 1px stroke).
- Accent Material: Restrained Bronze (`#A87445`, hover `#B98250`) — strictly 2% to 5% of visible UI area.
- Corner Radii: Tectonic & sharp (`0px` on sections, `2px–6px` on cards, `2px–4px` on buttons). No bubble/pill cards (16–24px).
- Typography: Geist Sans (Display & Body), Geist Mono (coordinates, tags, time), Orbitron (strictly for brand mark / technical numbering).

## 04 — LOCKED ARCHITECTURAL DECISIONS
1. **Navigable Sections:** Exactly 6 indexed sections. The Footer is global and outside the index.
   - 01 // INTRO (`#intro`)
   - 02 // CAPABILITIES (`#capabilities`)
   - 03 // WORK (`#work`)
   - 04 // APPROACH (`#approach`)
   - 05 // ABOUT (`#about`)
   - 06 // CONTACT (`#contact`)
2. **Hero Staging by Viewport:**
   - Desktop (≥ 1024px): 4-stage cinematic sequence based on `IMG_20260910_102011.jpg`:
     Stage 1: Left text + right bleed of the authentic Oxlate mark (`Oxlate_logoX_blk.svg`).
     Stage 2: Scroll translates the mark horizontally to center with subtle CAD linework.
     Stage 3: Symmetrical monolith lock in dead center.
     Stage 4: Upward exit as the sticky frame unpins into Section 02.
   - Mobile (< 768px): Native vertical architectural monument. Oxlate mark crowns the top center, followed by the semantic H1 and full-width bronze CTA. Natural touch scrolling, ZERO scroll-jacking traps.
3. **Capabilities Threshold Bridge:** The Diagonal Service Band from `HeroRoughIdea.png` acts as an architectural transition bridge at the boundary between Section 01 and Section 02 (`Web Development • Mobile Applications • Custom Systems`).
4. **Side Scroll Navigation Dial:**
   - Desktop (≥ 1024px): Vertical index in the right gutter (`01 INTRO` to `06 CONTACT`) with active section indicator.
   - Mobile (< 768px): Minimal floating status ticker (`01 / 06 • INTRO`).
5. **Contact Channel:** Direct `mailto:oxlateofficial@gmail.com` (or `mailto:hello@oxlate.dev`) triggered directly from the CTA.
6. **Social Signals:**
   - X: https://x.com/OxlateOfficial
   - LinkedIn: https://www.linkedin.com/company/oxlateofficial
   - Instagram: https://www.instagram.com/oxlateofficial/
   - Facebook: https://www.facebook.com/profile.php?id=61585881831048

## 05 — SOURCE OF TRUTH & AUTHORITY HIERARCHY
1. `ORIGINAL PROJECT INTENT`
2. `EXPLICIT OWNER DECISIONS` (`DECISIONS-REQUIRED.md`)
3. `OXLATE PLAYGROUND/` (v2.2: `00-BRAIN.md`, `design/`, `elements/`, `animation/`, `sections/`, `content/`, `seo/`)
4. `AGENT RECOMMENDATIONS` (`CREATIVE-RECOMMENDATIONS.md`)
5. `EXISTING CODEBASE` (Implementation reference only)

## 06 — MULTI-AGENT & IMPLEMENTATION SAFETY
- Another agent may be active. Do NOT delete or overwrite existing prototype components (`components/ui/kinetic-x/`, `approach-section.tsx`, etc.) until new implementations are verified.
- Build new V1 components in modular files and connect them cleanly in `components/features/home/homepage.tsx`.
- Use clearly marked structural placeholders for assets until the owner reviews the rendered UI and generates final production assets.

## 07 — THE VISUAL VALIDATION LOOP
For every section:
BUILD → RENDER → VISUALLY INSPECT (Desktop & Mobile) → CRITIQUE in `DESIGN-REVIEW.md` → IMPROVE → VERIFY (`npm run build`).
Do not consider a section done simply because TypeScript passes. It must look and feel like premium Oxlate.

## 08 — IMMEDIATE NEXT ACTION
Begin Gate 1 (Fixed top Navbar + Desktop Side Dial + Mobile Status Ticker) and Gate 2 (Hero V1 desktop sequence & mobile vertical monument).
```
