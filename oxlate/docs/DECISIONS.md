# OXLATE — CONFLICT RESOLUTIONS & DECISION LOG

--------------------------------------------------
01. CONFLICT RESOLUTIONS
--------------------------------------------------

### RESOLUTION 01: Hero Logo Scale & Behavior
- **Conflict:** Early prompts proposed scaling down the hero logo into a small centered logo on scroll.
- **Owner Final Direction:** The giant Oxlate X is the dominant visual structure occupying most/all of the viewport. It does NOT shrink into a tiny centered logo.
- **Result:** Giant X remains dominant visual structure across 3 continuous states (Arrival -> Construction -> Resolution).

### RESOLUTION 02: Hero & Section Card UI
- **Conflict:** Previous implementation used SaaS feature cards (`capability-card.tsx`, `portfolio-card.tsx`) with floating white boxes.
- **Owner Final Direction:** Locked No-Card Rule. Generic cards in the hero and across the site are forbidden.
- **Result:** Purged card components. Information is rendered via typography, editorial fields, datum lines, rails, and structural annotations.

### RESOLUTION 03: Color Palette & Materials
- **Conflict:** Early design drafts contained metallic silver (`#D8DBD5`) and futuristic blue/neon accents.
- **Owner Final Direction:** Palette locked to Warm Ivory (`#F5F2EC`), Deep Black (`#111111`), Graphite (`#292929`), and Bronze (`#A87445`) strictly 2%–5% of UI area.
- **Result:** Silver metallic and neon palettes removed.

### RESOLUTION 04: Mobile Scroll Interaction
- **Conflict:** Prototype attempted desktop horizontal translation and scroll-pinning on mobile viewports.
- **Owner Final Direction:** Mobile viewports (< 768px) must use a native vertical architectural monument layout without sticky scroll traps.
- **Result:** Bifurcated layout system: Desktop 3-state continuous scroll sequence vs Mobile native vertical monument.

### RESOLUTION 05: Typography Scoping
- **Conflict:** Prototype used Orbitron font broadly across headings and UI text.
- **Owner Final Direction:** Orbitron is restricted ONLY to the brand mark and technical coordinate tags.
- **Result:** Geist Sans/Satoshi for interface/headings, Geist Mono for coordinates, Orbitron strictly for brand/tech tags.

--------------------------------------------------
02. CONTENT DECISION STATE TRACKER
--------------------------------------------------

| Content Item | Current Choice | Content State | Action / Requirement |
|:---|:---|:---|:---|
| **Primary Contact Email** | `oxlateofficial@gmail.com` | `PENDING OWNER` | Decide between `oxlateofficial@gmail.com` vs `hello@oxlate.dev` |
| **Portfolio Showcase Projects** | Independent Projects (1 to 3 items) | `PENDING OWNER` | Provide 1-3 project titles, short technical summaries, and captures |
| **Founder Bio in About** | Entity Narrative | `PENDING OWNER` | Decide whether to include founder sign-off vs corporate entity only |
| **Primary Brand Mark** | `Oxlate_logoX_blk.svg` | `APPROVED` | Ready in `/public/Oxlate_logoX_blk.svg` |
| **Palette Tokens** | Warm Ivory / Deep Black / Bronze | `APPROVED` | Defined in `/docs/design/01-THEME.md` |
| **Typography Loader** | Geist Sans, Geist Mono, Orbitron | `APPROVED` | Configured in `app/layout.tsx` for Gate 1 verification |
