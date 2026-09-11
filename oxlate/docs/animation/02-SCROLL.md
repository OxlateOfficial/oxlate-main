# SCROLL BEHAVIOR — OXLATE V1

Version: 3.0  
Status: ACTIVE STRATEGIC AUTHORITY  
Last Updated: 2026-09-10

---

## 1. Smooth Scroll Engine (`DECIDED`)

- Powered by Lenis smooth scrolling (`components/ui/smooth-scroll.tsx`).
- Preserves natural scroll inertia without artificial snapping or aggressive scroll-jacking.

---

## 2. Scroll Progression Invariants (`DECIDED`)

- **Continuous Narrative:** Content unfolds naturally over the Warm Ivory background (`#F5F2EC`) without abrupt background color flips.
- **Datum Reveals:** Top section rules draw from left to right as a section intersects the viewport.
- **Text Entry:** Copy gently fades up 10px with 100% target opacity.
- **Section Index Tracking:** Persistent side index highlights the active section based on Intersection Observer thresholds.
- **Mobile Touch Invariant:** On viewports `< 768px`, disable sticky multi-stage scroll pinning to guarantee smooth touch scrolling.
