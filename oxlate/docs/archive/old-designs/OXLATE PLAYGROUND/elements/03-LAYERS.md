# COMPOSITION LAYERS — OXLATE V1

Version: 3.0  
Status: ACTIVE STRATEGIC AUTHORITY  
Last Updated: 2026-09-10

---

## 1. Z-Layer Hierarchy (`DECIDED`)

All visual elements strictly belong to an explicit z-layer to maintain architectural depth and prevent occlusion:

| Layer | Name | Z-Index | Description / Contents |
|:---|:---|:---|:---|
| **L0** | Canvas Atmosphere | `z-0` | Base Warm Ivory environment (`#F5F2EC`). |
| **L1** | Architectural Grid | `z-1` | Hairline datum lines, coordinate crosshairs (`HERO-SVG-01`). |
| **L2** | Brand Geometry | `z-10` | Oxlate vector mark paths and structural strut geometry. |
| **L3** | Media & Visuals | `z-20` | High-resolution interface captures and architectural mockups. |
| **L4** | UI Surfaces | `z-30` | Parchment cards, structural panels, metadata boxes. |
| **L5** | Primary Content | `z-40` | Semantic headlines (H1, H2), lead paragraphs, body copy. |
| **L6** | Motion Overlay | `z-45` | Transition wipes and scroll-linked datum beams (if any). |
| **L7** | Navigation & Controls | `z-50` | Fixed top navbar, side scroll dial, mobile status ticker. |

---

## 2. Occlusion & Ergonomics Rules (`DECIDED`)

- Content (L5) must never be occluded or rendered unreadable by Brand Geometry (L2) or CAD linework (L1).
- All interactive controls (buttons, links, nav tabs) must exist in L4, L5, or L7 with pointer events completely uninhibited.
