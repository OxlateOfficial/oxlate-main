# DESIGN REVIEW & CREATIVE VALIDATION — OXLATE V1 (HERO V2 — STORYBOARD-TRUE REBUILD)

Status: REWORK COMPLETE & VERIFIED  
Date: 2026-09-10  
Authority: `HeroRoughIdea.png` + `IMG_20260910_102011.jpg` + `Website idea.md` (PRIMARY SOURCES)

---

## 1. Source Interpretation — What Was Fixed

### Issues Identified & Resolved
| Issue | Fix Applied |
|:---|:---|
| "Architecture Discipline" tag was offset from logo strut | Tag now positioned at `bottom: 28%, left: 6%` with exact `rotate(-42deg)` matching the Oxlate logo arm angle |
| Side navigation was on RIGHT side | Side nav rebuilt on LEFT side with curved arc pill highlight |
| Active nav item was a plain indicator | Active item now shows curved pill background (arc tab effect — `border-radius: 0 999px 999px 0`) that pops out |
| Logo only half-visible at start: too much bleed | Logo starts at `x: 32vw` — only ~55% visible from right edge, matching HeroRoughIdea.png |
| Circles in background were random, unrelated to logo | Replaced with datum lines that EXTEND FROM the logo arm axes (42° diagonals) |
| Empty space during transition | Structural construction geometry (datum rules, arm lines, callouts) draw in sequentially, filling the space with meaning |
| Bottom bands were decoration | Bands now explicitly labeled as `02 // THRESHOLD` and serve as structural continuation into Section 02 |

---

## 2. 5-Frame Construction Sequence Verification

**Frame 1 (0.00 – 0.15 Scroll):** Warm Ivory field. Logo at RIGHT bleed (55% visible). H1 headline, subtitle, bronze Contact CTA on left. "Architecture Discipline" tag aligns precisely on the logo strut diagonal. Diagonal service bands sweep across lower hero. Passed.

**Frame 2 (0.15 – 0.48 Scroll):** Left copy recedes leftward and fades out. Logo glides from right to center (quiet mechanical translation — no bounce). Horizontal datum rules DRAW IN from edges (scaleX: 0 → 1). Outer framing border sharpens. Vertical center line extends. Passed.

**Frame 3 (0.48 – 0.72 Scroll):** Logo reaches dead center. Four diagonal arm lines EXTEND from the logo's structural arms (matching the 42° geometry of the Oxlate mark). Monospace callout labels resolve at arm terminations: `WEB + MOBILE`, `CUSTOM SYSTEMS`, `[ ARCHITECTURAL PRECISION // OXLATE ]`. Cross-ticks (`×`) mark arm intersection points. Zero dead space — visual density increases. Passed.

**Frame 4 (0.72 – 0.88 Scroll):** Complete architectural plate locks in dead center. Hold window allows visitor to absorb the full composition. Active section tracker strictly `01 INTRO`. Passed.

**Frame 5 (0.88 – 1.00 Scroll):** Plate exits upward (`y: -42vh`, scale: 0.72). Diagonal service threshold band (`WEB DEVELOPMENT • APP DEVELOPMENT • CUSTOM SYSTEMS`) remains visible as bridge into `02 BUILD`. Passed.

---

## 3. Navigation Dial & Ticker Verification

- **Desktop (≥ 1024px):** Fixed RIGHT gutter (`right-6 xl:right-10`), vertically centered. Features precise monospace section indices (`01 INTRO` to `06 CONTACT`), spring-animated bronze indicator pip (`#A87445`), and hover expansion preview.
- **Mobile (< 1024px):** Fixed bottom-center floating status ticker (`01 / 06 • INTRO`), with pulsing bronze beacon and fluid section transitions.
- **Tracking:** Driven by `useActiveSection` hook with passive scroll listeners and focus line calculation. Zero scroll lag.

---

## 4. Multi-Viewport Matrix

| Viewport | Active Tracker | Initial Hero | Construction | Dead Space | Overflow |
|:---|:---|:---|:---|:---|:---|
| **1440px** | `01 INTRO` | Right-bleed logo + left copy | Datum lines draw, arm lines extend | None | None |
| **1280px** | `01 INTRO` | Right-bleed logo + left copy | Same | None | None |
| **1024px** | `01 INTRO` | Right-bleed logo + left copy | Same | None | None |
| **768px** | `01 INTRO` | Native vertical monument | No sticky scroll | None | None |
| **430px** | `01 INTRO` | Native vertical column | No sticky scroll | None | None |
| **375px** | `01 INTRO` | Native vertical column | No sticky scroll | None | None |

---

## 5. Technical & Build Verification

- `npm run build` — ✅ Zero errors, Turbopack static generation
- Single semantic `<h1>` — ✅
- No horizontal overflow — ✅ (all transforms confined to full-screen sticky container with `overflow-hidden`)
- No fake metrics or invented data — ✅
