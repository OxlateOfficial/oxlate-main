# OXLATE V1 STATUS

Version: 7.0  
Last Updated: 2026-09-10  
Status: HERO V2 — STORYBOARD-TRUE REBUILD COMPLETE

---

## 1. What Was Rebuilt

**Hero V2** was rebuilt directly against the primary source material:
- `HeroRoughIdea.png` — visual sketch from owner
- `IMG_20260910_102011.jpg` — scroll storyboard
- `Website idea.md` — full narrative intention document

Previous implementations had 4 fundamental problems:
1. "Architecture Discipline" tag was offset — now exactly aligned on the logo strut at `rotate(-42deg)`
2. Side navigation was on the right — now on the LEFT with curved arc pill highlight (storyboard intent)
3. Random circles in background — replaced with datum lines that extend FROM the logo's structural arms
4. Logo not sufficiently right-bled in Frame 1 — now `x: 32vw` so only ~55% is visible

---

## 2. Hero 5-Frame Construction Architecture

- **Frame 1 (0.00 – 0.15):** Right-bleed logo (~55% visible) + left editorial H1, subtitle, bronze CTA + diagonal service bands
- **Frame 2 (0.15 – 0.48):** Left copy recedes, logo translates to center, datum rules draw in from edges, outer framing sharpens
- **Frame 3 (0.48 – 0.72):** Logo center-locked, diagonal arm lines extend from logo arms (42° geometry), callout labels resolve at arm terminations
- **Frame 4 (0.72 – 0.88):** Complete architectural plate locked, held for visitor absorption
- **Frame 5 (0.88 – 1.00):** Plate exits upward, threshold service band bridges into Section 02

---

## 3. Navigation Dial & Mobile Status Ticker
- **Desktop (≥ 1024px):** Fixed RIGHT gutter (`fixed right-6 xl:right-10`) with vertical index (`01 INTRO` to `06 CONTACT`) and active bronze indicator (`#A87445`).
- **Mobile (< 1024px):** Minimal floating status ticker (`01 / 06 • INTRO`) anchored at bottom-center with pulsing bronze indicator.
- **Hook:** Synced in real-time via `useActiveSection` with zero scroll performance overhead.

---

## 4. All Sections

- **01 // INTRO (Hero):** COMPLETE — V2 storyboard-true rebuild
- **02 // CAPABILITIES:** COMPLETE
- **03 // SELECTED WORK:** COMPLETE
- **04 // APPROACH:** COMPLETE
- **05 // ABOUT:** COMPLETE
- **06 // CONTACT:** COMPLETE
- **07 // FOOTER:** COMPLETE

---

## 5. Build Verification

- `npm run build` — ✅ Zero errors, Turbopack static generation
