# 01 — HERO SECTION SPECIFICATION — OXLATE

Version: 2.0
Status: AUTHORITATIVE SINGLE SOURCE OF TRUTH
Reference: `reference/hero.md` & Owner Storyboard

--------------------------------------------------
01. HERO MODEL
--------------------------------------------------
The hero consists of exactly:
- STATE 01 — ARRIVAL (0.00 – 0.20 scroll)
- STATE 02 — TRANSITION / CONSTRUCTION (0.20 – 0.70 scroll)
- STATE 03 — RESOLUTION (0.70 – 1.00 scroll)

There are no additional hero states. The transition between the states is continuous, driven by user scroll in a pinned viewport container (`300vh` on desktop).

--------------------------------------------------
02. GLOBAL SCREEN ZONES
--------------------------------------------------
1. **LEFT ZONE (Permanent Sidebar):**
   - Position: Fixed LEFT EDGE (width: 72–120px desktop).
   - Navigation: `01 INTRO`, `02 CAPABILITIES`, `03 WORK`, `04 APPROACH`, `05 ABOUT`, `06 CONTACT`.
   - Active section receives bronze indicator (`01 INTRO ●`). Inactive items in Neutral Slate (`#6C6B66`).
   - Remains structurally stable during hero transformation.
2. **RIGHT ZONE (Content & Architecture Field, 70–85% viewport width):**
   - Center/Right: Giant Oxlate X monument.
   - Upper/Right: Editorial H1 headline, supporting text, bronze CTA button.
   - Center/Lower: Transitional structural plane (Orange/Bronze stripe) that transforms into the diagonal service rail.

--------------------------------------------------
03. STATE 01 — ARRIVAL
--------------------------------------------------
- Giant X: Dominant architectural monument (65–95% of visible hero area), positioned center/right.
- Editorial Content:
  - Section Tag: `01 // INTRO`
  - H1: `Thoughtful web experiences and mobile applications.`
  - Paragraph: `Oxlate is a precision technology partner building software with calm, architectural discipline.`
  - CTA Button: Tectonic bronze `Contact` button.
- Sidebar: Anchored on the left edge.
- No cards, no white boxes, no floating panels.

--------------------------------------------------
04. STATE 02 — TRANSITION (THE ORANGE STRIPE)
--------------------------------------------------
- **Transitional Structural Plane:**
  - Enters as a full-width (100vw), ~12–16vh horizontal orange/bronze band (`#D96B27` / `#A87445`) centered vertically at Y = 50%, crossing the Giant X.
  - As scroll advances: The plane thins, rotates (+12° to +20°), contracts, and reveals its internal typography (`WEB DEVELOPMENT • MOBILE APPLICATIONS • CUSTOM SYSTEMS`).
  - It becomes the diagonal service rail connected structurally to the lower-middle / right architecture.
- **Giant X:** Retains dominance, shifting into the right architectural frame.
- **Construction Elements:** Horizontal and vertical datum lines draw in; crosshairs (`+`) anchor arm intersections.

--------------------------------------------------
05. STATE 03 — RESOLUTION
--------------------------------------------------
- LEFT: Permanent sidebar anchored.
- CENTER/RIGHT: Large architectural X integrated.
- RIGHT: Resolved intro content.
- LOWER: Diagonal service rail (`WEB DEVELOPMENT • MOBILE APPLICATIONS • CUSTOM SYSTEMS`) intersecting the X like a structural beam.
- Seamless unpinning into Section 02 Capabilities.

--------------------------------------------------
06. MOBILE ARCHITECTURE (< 768PX)
--------------------------------------------------
- Compact edge navigation / floating bottom ticker (`01 / 06 • INTRO`).
- Oxlate mark crowns top center in native vertical monument.
- Zero touch-scroll traps (standard natural touch scrolling).
