# 01 — HERO / INTRO SECTION — OXLATE V1

Version: 3.0  
Status: ACTIVE STRATEGIC AUTHORITY  
Last Updated: 2026-09-10  
Reference: Owner Storyboard (`IMG_20260910_102011.jpg`) & Rough Sketch (`HeroRoughIdea.png`)

---

## 1. Purpose
Primary brand statement and value anchor. Communicates identity, craftsmanship, and core positioning within the first 5–10 seconds of viewport engagement.

---

## 2. Intended User Feeling
Quiet authority, technical precision, and calm confidence. The visitor should immediately feel:
> *"This company cares deeply about spatial composition and software engineering discipline."*

---

## 3. Information Hierarchy
1. **Brand Identity & Entry Signal:** The bold black Oxlate mark (`Oxlate_logoX_blk.svg`) and fixed architectural header.
2. **Primary Value Statement (H1):** Declarative headline establishing web & mobile product capabilities.
3. **Positioning Subtitle:** Concise 1-sentence statement framing Oxlate as a precision technology partner.
4. **Primary Conversion Action:** Rectangular bronze CTA button ("Contact" / "Start a conversation").
5. **Technical Context:** Monospace chapter tag (`01 // INTRO`) and hairline CAD drafting linework.

---

## 4. Visual Direction (`DECIDED` on Desktop, `RECOMMENDATION` on Mobile)
- **Atmosphere:** Warm Ivory background (`#F5F2EC`) with hairline CAD drafting lines (`#D9D4CC`).
- **Desktop (≥ 1024px) Staging:**
  - 4-stage scroll sequence from storyboard (`IMG_20260910_102011.jpg`):
    - *Stage 1:* Left headline + right bleed of Oxlate mark.
    - *Stage 2:* Mark translates horizontally toward center on scroll while text fades cleanly.
    - *Stage 3:* Monolithic symmetrical center lock.
    - *Stage 4:* Mark translates upward as hero unpins smoothly into Section 02.
- **Mobile (< 768px) Staging (`RECOMMENDATION`):**
  - Vertical architectural monument: Oxlate mark crowns the top center, followed by semantic H1, subtitle, and full-width bronze CTA. Natural vertical scrolling with zero scroll-jacking.

---

## 5. Possible Elements
- Vector Oxlate mark (`Oxlate_logoX_blk.svg`)
- Hairline CAD grid & datum lines (`HERO-SVG-01`)
- Primary Bronze CTA button (`#A87445`)
- Monospace chapter coordinate tag (`01 // INTRO`)
- Fixed top architectural navbar with logo, links, and CTA

---

## 6. Animation Intention
- **Desktop:** Scroll-velocity linked horizontal translation via Lenis. Easing: quiet mechanical (`cubic-bezier(0.16, 1, 0.3, 1)`), 200–300ms micro-timings, zero rubber-band bounce.
- **Mobile:** Static layout with soft fade-in reveal (), zero sticky scroll traps.
- **Reduced Motion:** Instant static layout resolution if `prefers-reduced-motion` is enabled.

---

## 7. SEO Requirements
- Strictly single semantic `<h1>` tag containing core keywords ("Web and mobile products, built with precision.").
- Copy must exist directly as plain HTML text (never embedded in SVG paths, canvas, or WebGL).
- Fast LCP (< 1.8s) with static initial server rendering.

---

## 8. Open Creative Questions (`UNDECIDED`)
- **Diagonal Service Band:** Shown in `HeroRoughIdea.png`. Flagged in `Visual and Theme.md` as competing visual noise in initial hero. Recommendation: Defer to Section 02 as a threshold bridge. (Status: `UNDECIDED`, tracked in `DECISION-002`).
- **Exact H1 Phrasing:** "Thoughtful web experiences and mobile applications." vs "Web and mobile products, built with intent." (Status: `EXPLORATION`).
