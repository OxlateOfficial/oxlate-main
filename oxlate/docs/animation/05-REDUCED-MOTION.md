# OXLATE — REDUCED MOTION SPECIFICATION

--------------------------------------------------
01. MANDATORY ACCESSIBILITY INVARIANT
--------------------------------------------------
Oxlate fully respects the `prefers-reduced-motion: reduce` browser media query.

--------------------------------------------------
02. FALLBACK BEHAVIOR
--------------------------------------------------
When reduced motion is requested by the OS or user:
- Scroll-driven transforms (`useScroll`, `useTransform`) fall back instantly to fixed State 3 (Resolved Architectural Composition).
- Continuous hero scroll-jacking is disabled.
- All drawing effects (`scaleX`, `scaleY`, line stroke animations) render at 100% completed state immediately.
- Hover transitions fall back to instant color shifts without spatial motion.
