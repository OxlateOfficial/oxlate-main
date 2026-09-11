# OXLATE — GLOBAL MOTION ENGINE

--------------------------------------------------
01. MOTION PHILOSOPHY
--------------------------------------------------
Motion in Oxlate is architectural construction, not visual decoration.
Elements enter with mechanical precision, settle into position with zero overshoot bounce, and respond strictly to scroll progress or deliberate user focus.

--------------------------------------------------
02. INDEPENDENT ANIMATION OWNERSHIP
--------------------------------------------------
Major hero and section elements have independent animation ownership:
- Giant X: Controlled scale, stroke drawing, and spatial placement.
- Architectural Axes & Lines: Independent horizontal/vertical draw-in (`scaleX`, `scaleY`).
- Datum Numbers & Coordinates: Sequential opacity resolve.
- Service Rail: Horizontal translation and threshold boundary pinning.
- Micro-elements & Crosshairs: Independent rotation and stroke entry.

--------------------------------------------------
03. INTERACTION & HOVER STATES
--------------------------------------------------
Hover states must remain subtle (2%–5% bronze highlight, 1px lift, or hairline opacity shift). Interactive elements never wiggle, bounce, or rotate randomly.
