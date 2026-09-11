# OXLATE — HERO VISUAL ACCEPTANCE SPECIFICATION

Version: 1.0 RESET
Status: AUTHORITATIVE QA CRITERIA

--------------------------------------------------
01. PURPOSE
--------------------------------------------------
To prevent superficial claims of completion, every hero implementation gate must generate visual screenshots across viewports and compare them directly against reference standards before approval.

--------------------------------------------------
02. REFERENCE MAP
--------------------------------------------------
- Reference A (State 1 Arrival): [/reference/hero-state-01.jpg](file:///home/abhishek/Documents/C02/Oxlate/oxlate-main/oxlate/reference/hero-state-01.jpg)
- Reference B (State 3 Resolution): [/reference/hero-state-03.jpg](file:///home/abhishek/Documents/C02/Oxlate/oxlate-main/oxlate/reference/hero-state-03.jpg)

--------------------------------------------------
03. MANDATORY SCREENSHOT PROOF MATRIX
--------------------------------------------------

Every hero build phase must generate the following PNG captures inside `/qa/screenshots/`:

| Capture Filename | Target State / Viewport | Acceptance Criteria |
|:---|:---|:---|
| `hero-state-01.png` | State 1 Arrival (1440 × 900) | Giant X bleeds offset right field (~55% visible). H1 headline, subtitle, bronze CTA on left. Warm Ivory field, hairline CAD rules. |
| `hero-state-02.png` | State 2 Construction (1440 × 900) | Left text recedes. Giant X translates toward center. Horizontal/vertical axes and 42° diagonal arm lines extend. |
| `hero-state-03.png` | State 3 Resolution (1440 × 900) | Monolithic symmetrical center lock. Service rail threshold beam active. Resolved composition aligned. |
| `hero-mobile.png` | Mobile Monument (390 × 844) | Native vertical architectural monument. Oxlate mark crowns top, followed by H1, subtitle, bronze CTA. Zero touch scroll-jacking. |
| `hero-reduced-motion.png` | Reduced Motion (1440 × 900) | `prefers-reduced-motion: reduce` fallback. Renders instant static State 3 without scroll-jacking or animations. |

--------------------------------------------------
04. QA VERIFICATION MANDATE
--------------------------------------------------
The QA agent MUST inspect the generated PNG files visually. If the implementation fails to match the reference composition or exhibits card containers, font substitution, or improper proportions, the gate is FAILED.
