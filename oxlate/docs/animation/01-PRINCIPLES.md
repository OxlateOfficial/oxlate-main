# ANIMATION PRINCIPLES — OXLATE V1

Version: 3.0  
Status: ACTIVE STRATEGIC AUTHORITY  
Last Updated: 2026-09-10

---

## 1. Motion Philosophy (`DECIDED`)

- **Quiet Mechanical Precision:** Motion feels like solid architectural components sliding and locking into place—weighted, deliberate, and calm.
- **Supportive, Never Obstructive:** Motion must never delay the reader from accessing content or interactive controls.
- **Zero Rubber-Band Bounce:** Bouncy springs, elastic curves, and playful easing are strictly banned.
- **Easing Curve:** Quiet mechanical easing (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Micro-timings:** 150ms to 250ms for micro-interactions; smooth velocity-linked scroll progression via Lenis.
- **Reduced Motion:** If `prefers-reduced-motion` is active, all animations resolve instantly to static layouts with zero delay.
