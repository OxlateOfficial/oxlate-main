# CREATIVE RECOMMENDATIONS — OXLATE V1

Status: PROPOSED FOR OWNER REVIEW  
Date: 2026-09-10  
Author: Creative Direction & Architecture

---

## 1. Hero Mobile Composition: Decouple Mobile from Desktop Scroll-Pinning

### Existing Idea
A single scroll-pinned desktop stage where the Oxlate mark begins offset at 50vw (right edge bleed) and translates horizontally to center on scroll, then transitions the site into view.

### Problem
This mechanism breaks on a narrow mobile portrait screen (360–430px). Shrinking the desktop view causes horizontal text clipping or scroll-jacking traps where touch scrolling feels broken.

### Better Direction (`RECOMMENDATION`)
**Bifurcated Architectural Composition by Form-Factor:**
- **Desktop (`≥ 1024px`):** Maintain the full 4-stage cinematic sequence from the storyboard (`IMG_20260910_102011.jpg`): right-edge entry -> horizontal translation -> centered monolith lock -> upward exit.
- **Mobile (`< 768px`):** Native vertical architectural monument. The Oxlate mark sits as a bold architectural crown at the top center of the hero. Semantic H1, positioning subtitle, and bronze CTA take immediate typographic command with natural vertical touch scrolling—zero scroll-jacking traps.

### Why
Mobile visitors evaluate a modern technology partner on speed, responsiveness, and immediate clarity. A dedicated mobile-native composition shows higher engineering maturity than a desktop layout forced into a phone screen.

### Impact
Hero component (`components/features/home/hero-section.tsx`), Lenis controller settings, mobile breakpoint rules.

---

## 2. The Diagonal Service Band: Threshold Datum Beam vs Hero Clutter

### Existing Idea
A diagonal grey band with service titles cutting across the lower hero (as sketched in `HeroRoughIdea.png`).

### Problem
In the initial 100vh viewport, the diagonal band fights for visual attention against the primary H1 headline and the bold black Oxlate mark. Having headline + subtitle + CTA + giant mark + diagonal band in one frame creates visual noise rather than serene authority.

### Better Direction (`RECOMMENDATION`)
**Position as the Threshold Bridge to Capabilities:**
- Keep the first hero viewport clean and powerful: Warm Ivory, authoritative headline, restrained bronze CTA, and the entering Oxlate mark.
- As the user scrolls past the hero into `02 // CAPABILITIES`, the diagonal band acts as a **dynamic architectural datum beam** that cuts across the section boundary, introducing the service disciplines (`Web Development • Mobile Applications • Custom Systems`) at the exact moment the user transitions into that content.

### Why
Restraint in the opening frame creates maximum dramatic contrast. Introducing the architectural band at the section boundary gives it purpose as a structural bridge.

### Impact
Hero exit animation and Section 02 entrance divider.

---

## 3. Side Scroll Navigation: Monospace Gutter Ticker on Desktop, Status Pill on Mobile

### Existing Idea
A static vertical text list on the margin (`1 Intro`, `2 Build`, `3 Work`, `4 Approach`, `5 Contact`) with magnetic pull.

### Problem
On desktop, a fixed text list can clash with wide content if margins aren't guarded. On mobile, a vertical text list consumes up to 30% of screen width, ruining body text readability.

### Better Direction (`RECOMMENDATION`)
- **Desktop (`≥ 1024px`):** Subtle, ultra-refined monospace ticker (`01 INTRO` -> `06 CONTACT`) in the right architectural gutter. Active state features a 12px bronze indicator rule; inactive states sit in Neutral Slate (`#6C6B66`).
- **Tablet (768px–1023px):** Monospace numeric dots (`01`–`06`) expanding on hover to reveal section titles.
- **Mobile (`< 768px`):** Minimal floating status pill or top breadcrumb ticker (`01 / 06 • INTRO`) that updates silently as sections pass, leaving 100% of reading width dedicated to content.

### Why
Delivers exact spatial orientation without sacrificing mobile reading width.

### Impact
Side navigation component (`components/layout/side-dial.tsx`).

---

## 4. Work Section Strategy: Editorial Archetype vs Fabricated Projects

### Existing Idea
Hardcoding fictional project names ("A Quiet Place to Think", "Field Notes Mobile") or fabricated client metrics into design specifications.

### Problem
Oxlate is a newly founded technology partner (2025). Fabricating client claims or hardcoding temporary project names into design rules pollutes the design system and violates **The Truth Rule**.

### Better Direction (`RECOMMENDATION`)
Define the **Editorial Work Item Archetype**:
- Disclosure Badge: Strict requirement for `Independent Project` or `Founding Developer's Work`.
- Visual Media Slot: Architectural framing for high-resolution interface captures.
- Technical Anatomy Slot: Stack chips, architectural rationale, and system challenge.
- Actual project selection and captures remain `UNDECIDED` until selected by the owner.

### Why
Separates design architecture from content inventory, allowing the showcase to scale from 1 to 10 projects without breaking the design system.

### Impact
`sections/03-WORK.md`, `content/03-COPY-STRUCTURE.md`.

---

## 5. Architectural Motifs: CAD Schematics vs Heavy 3D GLB Models

### Existing Idea
Considering heavy 3D GLB laptops or generic 3D agency graphics.

### Problem
3D models introduce high bundle sizes (10–30MB), battery drain, WebGL context losses, and look like off-the-shelf templates.

### Better Direction (`RECOMMENDATION`)
Double down on **Precision 2D Vector CAD / Drafting Schematics**:
- Hairline dimension markers (`|← 1280px →|`).
- Monospace section coordinate markers (`SEC-01 // 37.7749° N`).
- Grid intersections with fine crosshair ticks (`+`).
- High-contrast typography and deep black structural solids.

### Why
Creates an unmistakable bespoke identity ("Editorial Technology Architecture") that loads in sub-seconds and scales cleanly to 4K displays and mobile phones alike.

### Impact
`elements/04-ARCHITECTURAL-MOTIFS.md`, `assets/01-SVGS.md`.

---

## 6. Direct Low-Friction Conversion

### Existing Idea
Multi-step booking calendars or complex quote questionnaires.

### Problem
Complex forms on a first-time agency site create conversion friction and feel like a generic agency funnel.

### Better Direction (`RECOMMENDATION`)
Simple, confident invitation: "Have something worth building? Tell us what you are trying to build." Trigger direct mailto communication (`oxlateofficial@gmail.com` / `hello@oxlate.dev`) or a single inline email input.

### Why
Restrained conversion invitations match the quiet, confident luxury positioning of the brand.

### Impact
Section 06 Contact (`sections/06-CONTACT.md`).
