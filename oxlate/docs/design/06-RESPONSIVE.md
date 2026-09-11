# RESPONSIVE ARCHITECTURE & MOBILE COMPOSITION — OXLATE V1

Version: 3.0  
Status: ACTIVE STRATEGIC AUTHORITY  
Last Updated: 2026-09-10

---

## 1. Core Responsive Invariant (`DECIDED`)

**Desktop and mobile are distinct architectural compositions sharing one unified design grammar.**
Mobile portrait is never a shrunken desktop view; it is a dedicated vertical architectural monument.

---

## 2. Mobile Phone Ergonomics & Solutions (`RECOMMENDATION`)

### The Mobile Screen Trap (`360px – 430px`)
Scaling down desktop multi-stage scroll pinning or wide horizontal translations causes clipped text, overlapping elements, or frustrating touch-scroll traps.

### The Architectural Mobile Solution
On mobile viewports (`< 768px`):
1. **Vertical Architectural Monument:**
   - The Oxlate mark crowns the top center of the hero viewport.
   - Headline (H1), subtitle, and bronze CTA take immediate typographic priority below it.
2. **Native Vertical Scroll (Zero Scroll Traps):**
   - Eliminate heavy multi-stage scroll pinning on mobile. The page scrolls smoothly and naturally with standard touch physics.
3. **Side Dial Collapse:**
   - The desktop side index collapses into a sleek minimal floating status pill or top breadcrumb ticker (`01 / 06 • INTRO`), leaving 100% of reading width available for content.
4. **Touch Targets:**
   - Primary CTAs expand to full-width or comfortable touch targets with a minimum height of `48px`.
   - Card grids stack cleanly into single-column architectural blocks.

---

## 3. Breakpoint Matrix (`DECIDED`)

| Breakpoint | Target Width | Hero Staging | Navigation | Grid Columns |
|:---|:---|:---|:---|:---|
| **Mobile** | `< 768px` | Vertical architectural monument; natural touch scroll; zero pinning traps. | Compact top header + minimal status ticker. | 1 column |
| **Tablet** | `768px – 1023px` | Proportional translation; responsive mark scaling. | Top header + numeric dot ticker. | 2 columns |
| **Desktop** | `≥ 1024px` | Full 4-stage cinematic sequence from storyboard (`IMG_20260910_102011.jpg`). | Fixed top header + vertical magnetic side dial. | 3 to 12 columns |
