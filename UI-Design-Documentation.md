# UI Design Documentation
### A Design Language Specification for a Modern B2B Technology Website
**Version 1.0 — Prepared for Design & Frontend Teams**

> **Scope note:** This document analyzes and codifies a *design language* — visual system, layout logic, typography, color, spacing, and interaction principles — observed in a reference interface. It does **not** reproduce any brand name, logo, or copy from that reference. Every token, rule, and component spec below is written for reuse on an original brand. Values that could not be measured exactly from the reference are explicitly marked **(estimated)**.

---

## Table of Contents

1. Design Philosophy
2. Overall Layout
3. Page Structure
4. Typography System
5. Color System
6. Spacing System
7. Grid System
8. Components
9. Button System
10. Navigation System
11. Hero Section
12. Cards
13. Icons
14. Images
15. Motion Design
16. Accessibility
17. Responsive Design
18. Design Tokens
19. Component Inventory
20. UI Principles
21. Frontend Implementation Notes
22. Design System Summary

---

## 1. Design Philosophy

**Personality:** Confident, understated, architectural. The reference reads as a studio that builds tangible outcomes, not a flashy startup selling hype. It borrows visual cues from architecture and editorial print (warm neutrals, structural photography, generous negative space) rather than from generic "SaaS gradient" design.

**Tone:** Direct and declarative. Headlines state an outcome ("We build X that drives Y") rather than asking a question or leading with a slogan. Supporting copy is short, plainspoken, and free of jargon.

**Branding style:** Warm-neutral + single accent. Instead of a multi-color brand palette, the system relies on one warm, saturated accent color used sparingly and consistently, set against a near-monochrome neutral field. This is a **restraint-based** brand system: the accent's rarity is what gives it meaning.

**Emotional feeling:** Calm, premium, trustworthy, grounded. The warm cream background avoids the coldness of pure white or the aggression of near-black tech sites. It signals craftsmanship and permanence — closer to an architecture or design studio than a typical SaaS dashboard.

**Modern design principles used:**

| Principle | How it shows up |
|---|---|
| Restraint | One accent color, used only for CTAs, icons, and emphasis words |
| Editorial hierarchy | Type-driven hierarchy over color-driven or box-driven hierarchy |
| Structural photography | Architectural/geometric imagery reinforces "we build things" positioning |
| Generous whitespace | Wide margins, large line-heights, uncluttered stat bar |
| Human-centered proof | Stats bar humanizes the numbers (clients, satisfaction, projects) directly under the pitch |
| Quiet confidence | No exclamation points, no gradients, no emoji — confidence expressed through space and typography, not noise |

**Why this works:** B2B buyers evaluating a technical partner are reassured by visual maturity. A warm-neutral, low-chroma palette with one disciplined accent reads as "we have taste and won't overcomplicate your project" — which is exactly the trust signal a services/product studio needs before a sales conversation even starts.

---

## 2. Overall Layout

| Property | Value | Notes |
|---|---|---|
| Max content width | `1280px` (estimated) | Comfortable reading width for editorial-style hero copy |
| Outer page gutter (desktop) | `64–80px` | Generous side margin reinforces the "premium" feel |
| Section vertical spacing | `96–128px` between major sections | Large rhythm gives each section room to breathe |
| Hero internal padding | `~64px` top, `48px` bottom before stat bar | |
| Grid | 12-column, `24px` gutter (estimated) | Standard for asymmetric hero splits (e.g. 5/7 or 6/6) |
| Content alignment | Left-aligned text blocks throughout | No centered marketing-site clichés; reinforces editorial tone |
| Vertical rhythm baseline | `8px` | All spacing values are multiples of 8 |

**Responsive breakpoints (recommended):**

| Breakpoint | Width | Columns |
|---|---|---|
| Mobile | `< 640px` | 4 |
| Tablet | `640–1024px` | 8 |
| Laptop | `1024–1440px` | 12 |
| Desktop | `> 1440px` | 12 (content still capped at max-width, extra space becomes margin) |

**Why this works:** Capping content width while letting the background extend full-bleed keeps long-form marketing copy readable (60–75 characters per line) without the page feeling boxed in on large monitors.

---

## 3. Page Structure

The reference shows the top of a homepage; the structure below extrapolates the *system* to a full page using the same logic, since a documentation of this kind must specify sections beyond what's visible.

### 3.1 Navigation Bar
- **Purpose:** Persistent wayfinding + primary conversion action.
- **Layout:** Logo left, text nav links centered/left-of-center, single CTA button right.
- **Spacing:** `24px` vertical padding, `64–80px` horizontal padding matching page gutter.
- **Hierarchy:** Logo > CTA > nav links (nav links are lowest visual weight — plain text, no boxes).
- **Interaction:** Underline or color-shift on hover; CTA has filled background at all times.

### 3.2 Hero
- **Purpose:** Communicate the single value proposition within 3 seconds.
- **Layout:** Asymmetric split — text block ~45% left, image block ~55% right.
- **Spacing:** Large gap (`48–64px`) between text and image columns.
- **Hierarchy:** Headline (largest) → accent line → subtext → dual CTA.
- **Expected content:** 2-line headline with one accent-colored line, 2-sentence subtext, primary + secondary CTA.
- **Interaction:** CTAs have hover states; image may have subtle parallax or static treatment.

### 3.3 Proof / Stats Bar
- **Purpose:** Immediate credibility reinforcement directly beneath the pitch.
- **Layout:** 4-column row, equal width, separated by hairline vertical dividers.
- **Spacing:** Sits inside a bordered container directly below the hero, `32–40px` internal padding.
- **Hierarchy:** Icon (accent color) → large number → small muted label.
- **Expected content:** 3–5 stats max; numbers should be short ("25+", "99%") not paragraphs.
- **Interaction:** Static; optionally count-up animation on scroll-into-view.

### 3.4 Services / Features
- **Purpose:** Explain what the company does, broken into digestible units.
- **Layout:** 3-column card grid on desktop, collapsing to 1 column on mobile.
- **Spacing:** `32px` card gutters, `24px` internal card padding.
- **Hierarchy:** Icon → title → 1–2 line description.
- **Interaction:** Card lift/border-color shift on hover.

### 3.5 Work / Portfolio
- **Purpose:** Show outcomes via case studies or project thumbnails.
- **Layout:** 2-column large image grid, editorial captions below each.
- **Spacing:** Large gutter (`40px`) so each project reads as its own "exhibit."
- **Interaction:** Image scale-up on hover, cursor affordance for "view case study."

### 3.6 Testimonials
- **Purpose:** Social proof in the client's own words.
- **Layout:** Single large quote (editorial) or 3-card carousel.
- **Hierarchy:** Quote (large, often serif or accent-weight) → attribution (small, muted).

### 3.7 CTA Band
- **Purpose:** Secondary conversion moment before the footer.
- **Layout:** Centered, full-width band, often on a contrasting (darker or accent-tinted) background.
- **Hierarchy:** Short headline → single button.

### 3.8 Footer
- **Purpose:** Sitemap, legal, secondary contact points.
- **Layout:** 4-column layout (brand blurb, sitemap links, resources, contact/social).
- **Spacing:** `64–96px` top padding to separate from body content; hairline top border.

---

## 4. Typography System

The reference materials explicitly test **type pairings** as brand decisions — a strong signal that type *is* the primary carrier of brand personality in this system (more than color or imagery).

**Pairing options observed:**

| Option | Headings | Body | Numbers/Stats |
|---|---|---|---|
| A | Geist | Geist | Orbitron |
| B | Satoshi | Inter | Orbitron |

**Design rationale:** Both pairings use a **geometric, humanist sans-serif** for headings and body (clean, neutral, highly legible at small and large sizes), paired with a **distinct monospace/technical display face (Orbitron)** exclusively for numerals. This creates a subtle "instrument panel" feeling for statistics — numbers feel measured and precise, distinct from the conversational prose around them, without needing a color change to do it.

**Recommendation for a new brand:** Keep the *structure* (one sans for headings+body, one geometric/technical face reserved only for data), but choose faces that are licensed and distinct to the new brand — e.g. pairing a neutral grotesk (Inter, Söhne, General Sans) for text with a technical/monospace face (Space Mono, JetBrains Mono, IBM Plex Mono) for statistics.

### Type Scale

| Role | Size (desktop) | Size (mobile) | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| H1 / Hero headline | 56–64px | 32–36px | 600–700 | 1.05–1.1 | −0.02em |
| H2 / Section title | 36–40px | 26–28px | 600 | 1.15 | −0.01em |
| H3 / Card title | 20–22px | 18px | 600 | 1.3 | 0 |
| Subtitle | 18–20px | 16px | 400–500 | 1.4 | 0 |
| Body / Paragraph | 16px | 15px | 400 | 1.6 | 0 |
| Caption / Muted label | 13–14px | 12–13px | 500 | 1.4 | 0.01em |
| Label (eyebrow / badge) | 12px | 11px | 600 | 1.2 | 0.08em uppercase |
| Button text | 15–16px | 15px | 500–600 | 1 | 0 |
| Navigation link | 15px | — | 500 | 1 | 0 |
| Statistic number | 32–40px | 26px | 500 (technical face) | 1 | 0 |

**Why this works:** A large gap between H1 (64px) and body (16px) creates unmistakable hierarchy at a glance — the reader's eye knows exactly where to land first. The tightened letter-spacing on large headlines corrects for the optical looseness that appears at big sizes; body text stays at default spacing for maximum reading comfort.

---

## 5. Color System

Extracted / estimated palette. **All hex values are estimates** derived from visual inspection of the reference, since no design files were provided.

| Token | Hex (estimated) | Usage |
|---|---|---|
| `color.background` | `#F7F2EA` | Page background — warm ivory, not pure white |
| `color.surface` | `#FFFFFF` | Cards, stat-bar container, elevated panels |
| `color.text.primary` | `#211C18` | Headlines, primary body copy — warm near-black, not pure `#000` |
| `color.text.secondary` | `#6B6560` | Supporting/muted copy, captions |
| `color.border` | `#E7E0D4` | Hairline dividers, card borders, stat-bar separators |
| `color.accent.primary` | `#C15A2E` | Terracotta/burnt-orange — CTAs, icons, emphasis text, badges |
| `color.accent.hover` | `#A8492352` `#A84923` | Darker terracotta for hover/pressed states |
| `color.accent.tint` | `#F3E2D8` | Light accent background (badges, subtle highlights) |
| `color.dark.surface` | `#1E1A17` | Optional dark CTA band / footer background |

**Usage rules:**
- The accent color (`accent.primary`) is used for **exactly one emphasis word or phrase per headline**, all primary buttons, all icon strokes in the stats bar, and small badges/labels. It is never used as a large background fill — this is what keeps it feeling premium rather than loud.
- Text always sits on `background` or `surface`; the accent is never used as body-text color at length (fails both contrast and taste — reserve saturated color for short, high-impact instances).
- Borders are always low-contrast hairlines (`border` token), never heavy black rules — this preserves the "quiet" tone.

**Contrast check (WCAG):**
- `text.primary` (#211C18) on `background` (#F7F2EA): contrast ratio ≈ 15.8:1 — passes AAA.
- White text on `accent.primary` (#C15A2E): contrast ratio ≈ 3.1:1 — **passes for large text/button labels ≥18px bold or ≥24px regular (WCAG AA large-text threshold)**, but designers should darken the accent slightly (or bump button label weight/size) if used for smaller body text, to be safe for AA at small sizes.

---

## 6. Spacing System

An 8-point base grid, matching the vertical rhythm described in Section 2.

| Token | Value | Typical use |
|---|---|---|
| `space.1` | 4px | Icon-to-label micro gaps |
| `space.2` | 8px | Tight inline spacing (badge padding) |
| `space.3` | 12px | Form field internal padding |
| `space.4` | 16px | Default component padding |
| `space.5` | 20px | Card internal padding (compact) |
| `space.6` | 24px | Card internal padding (standard), nav vertical padding |
| `space.8` | 32px | Grid gutters, card-to-card spacing |
| `space.10` | 40px | Stat-bar internal padding |
| `space.12` | 48px | Hero column gap, sub-section spacing |
| `space.16` | 64px | Page horizontal gutter, section top padding |
| `space.20` | 80px | Large section spacing |
| `space.24` | 96px | Major section-to-section spacing |

**Rules:**
- **Component spacing** (inside a button, card, badge): `space.2`–`space.6`.
- **Card spacing** (between cards in a grid): `space.6`–`space.8`.
- **Section spacing** (hero to stats, stats to features): `space.16`–`space.24`.
- **Container spacing** (page edge to content): `space.16` desktop, `space.6` mobile.
- **Text spacing** (heading to subtext, subtext to CTA row): `space.4`–`space.6`.
- **Button spacing** (horizontal padding inside button): `space.6` left/right, `space.3` top/bottom.

---

## 7. Grid System

| Breakpoint | Columns | Gutter | Margin |
|---|---|---|---|
| Desktop (≥1440px) | 12 | 24px | Auto (content capped at 1280px) |
| Laptop (1024–1439px) | 12 | 24px | 64px |
| Tablet (640–1023px) | 8 | 20px | 32px |
| Mobile (<640px) | 4 | 16px | 20px |

**Responsive behavior:**
- Hero's 5/7 asymmetric split collapses to a single stacked column below 1024px (text first, image second).
- The 4-column stat bar becomes a 2×2 grid on tablet and a single stacked column on mobile, each stat retaining its icon-number-label horizontal alignment.
- The 3-column service/feature grid collapses to 2 columns on tablet, 1 column on mobile.
- Navigation links collapse into a hamburger-triggered off-canvas or dropdown menu below 1024px; the CTA button typically remains visible in the collapsed bar.

---

## 8. Components

### 8.1 Navigation Bar
- **Purpose:** Global wayfinding and primary CTA access.
- **Anatomy:** Logo mark + wordmark | nav link group | primary CTA button.
- **Variants:** Transparent-on-hero vs. solid-on-scroll (sticky).
- **Spacing:** `24px` vertical, `64–80px` horizontal (desktop); `16–20px` (mobile).
- **States:** Default; sticky (adds background + subtle shadow on scroll); mobile-open (off-canvas panel).
- **Accessibility:** Nav is a `<nav>` landmark; current page indicated via `aria-current="page"`.

### 8.2 Buttons
See Section 9 for full system.

### 8.3 Cards
See Section 12 for full system.

### 8.4 Statistic Block
- **Purpose:** Compress a proof point into an instantly scannable unit.
- **Anatomy:** Icon (accent, outline style) → Number (technical/mono face, large) → Label (muted, small, below number).
- **Variants:** Horizontal (icon left of number) as seen in reference; stacked (icon above number) for narrow containers.
- **Spacing:** `space.3` between icon and number; `space.1` between number and label.
- **States:** Static by default; optional count-up-on-scroll animation.

### 8.5 Icons
See Section 13.

### 8.6 Images
See Section 14.

### 8.7 Badge / Eyebrow Label
- **Purpose:** Small contextual tag (e.g. category, status, "New").
- **Anatomy:** Uppercase text, letter-spaced, inside a rounded-pill or rectangular container with accent-tint background.
- **Spacing:** `space.2` vertical, `space.4` horizontal padding inside pill.
- **States:** Static; optionally interactive as a filter chip (adds hover/selected state).

### 8.8 Footer
- **Purpose:** Sitemap, legal, and closing brand statement.
- **Anatomy:** Brand column (logo + 1-line mission) | 2–3 link columns | newsletter or social column.
- **Spacing:** `space.24` top padding, hairline top border, `space.16` between columns.

### 8.9 CTA Band
- **Purpose:** Second, lower-commitment or higher-commitment conversion moment.
- **Anatomy:** Centered headline + single button, optionally on a dark or accent-tinted background for contrast against the rest of the (light) page.

---

## 9. Button System

| Variant | Background | Text | Border | Use case |
|---|---|---|---|---|
| Primary | `accent.primary` fill | White | None | Main conversion action ("Book a Consultation") |
| Secondary | Transparent | `text.primary` | None (text + icon only) | Lower-commitment action ("View Our Work") |
| Ghost | Transparent | `text.primary` | 1px `border` token | Tertiary actions, filters |
| Text link | Transparent | `accent.primary` or `text.primary` | Underline on hover | Inline/contextual links |
| Icon button | Transparent or `surface` | Icon only | Optional 1px border | Compact actions (nav icons, carousel controls) |

**Anatomy (Primary button):**
- Radius: fully rounded / pill (`999px`) — reinforces the "soft, human, approachable" quality against otherwise sharp architectural imagery.
- Padding: `space.6` horizontal, `space.3` vertical.
- Icon: trailing arrow (↗), `space.2` gap from label, rotates or shifts slightly on hover.
- Font: button-weight (500–600), 15–16px.

**States:**
- **Hover:** Background darkens ~10% (`accent.hover`), icon nudges up-right 2px.
- **Pressed:** Background darkens further, slight scale-down (0.98) for tactile feedback.
- **Focus:** 2px outline in `accent.primary` (or a distinct focus color) with 2px offset — must remain visible even though the button itself is a solid color.
- **Disabled:** 40% opacity, no hover/pointer events, cursor `not-allowed`.
- **Loading:** Label replaced or accompanied by a small spinner; button remains same width to avoid layout shift.

**Animation:** 150–200ms ease-out on background-color and transform. Nothing longer — buttons should feel immediate.

---

## 10. Navigation System

- **Desktop navbar:** Single row, logo left, links center-left or centered, CTA right. No mega-menus visible in reference — keep top-level nav shallow (4–6 items max) to preserve the calm, uncluttered tone.
- **Sticky behavior:** On scroll, navbar gains a `surface` background (if hero is transparent/on-image) and a subtle `0 1px 0 border` bottom rule or soft shadow. Transition over 200ms.
- **Logo:** Positioned with generous left padding matching page gutter; vertically centered in navbar.
- **Links:** Plain text, `text.primary`, hover transitions to `accent.primary` or gains an underline; active/current page may use `accent.primary` permanently.
- **CTA:** Always the primary button variant, positioned far right, never wrapped into the link group.
- **Dropdown behavior (if needed):** Simple single-level dropdown, `surface` background, `8px` radius, drop shadow, fade+slide-down transition (150ms).
- **Mobile menu:** Hamburger icon replaces link group below the tablet breakpoint; tapping opens a full-height off-canvas panel (slide-in from right, 250ms ease) with stacked links at larger touch-friendly size (≥44px tap targets) and the CTA button repeated at the bottom.

---

## 11. Hero Section

- **Heading hierarchy:** Two-line H1, with the second line's key phrase set in the accent color — this is the single most important hierarchy device in the whole page, directing the eye to the value proposition's "payoff" word.
- **Supporting text:** One short paragraph (2 sentences max), `text.secondary`, positioned directly under the headline with tight spacing (`space.4`–`space.6`).
- **CTA placement:** Dual CTA row directly under supporting text — primary (filled) + secondary (text+icon) side by side, `space.6` gap.
- **Image balance:** The hero image occupies the remaining ~55% of the row, treated with rounded corners and (in the reference) an angular/faceted crop that echoes architectural geometry — an example of the "signature element" a brand can use to feel distinctive rather than default.
- **Whitespace:** Ample top padding above the headline (clears the navbar by `space.12`–`space.16`) and bottom padding before the stats bar.
- **Composition:** Classic asymmetric split (text-heavy left, image-heavy right) — a well-tested pattern because it lets dense information (headline, copy, two buttons) sit beside a single strong visual anchor without competing for attention.
- **Visual weight:** Balanced by making the image large enough to counter the text block's density, and by keeping the text block's own internal contrast (H1 weight vs. body weight) very high.
- **Alignment:** Left-aligned text, consistent with the whole page's editorial, non-centered posture.
- **Responsive adaptation:** Stacks vertically below 1024px — headline first, then supporting text, then CTAs, then image (image can be cropped closer to square to keep the fold reasonable on mobile).

---

## 12. Cards

*(Extrapolated for feature/portfolio sections, following the system's established visual logic — no card component is directly visible in the reference crop, so all values here are estimated from the surrounding system's radius/spacing/shadow language.)*

| Property | Value (estimated) |
|---|---|
| Border | 1px `color.border`, or borderless with shadow-only elevation |
| Radius | `16px` (matches hero image radius) |
| Padding | `24–32px` |
| Elevation | Flat by default; `0 1px 2px rgba(0,0,0,0.04)` resting, `0 8px 24px rgba(0,0,0,0.08)` on hover |
| Hover | Subtle lift (`translateY(-4px)`) + shadow increase, 200ms ease |
| Image placement | Top of card, full-bleed within the card's rounded top corners |
| Text spacing | `space.4` between image and title, `space.2` between title and description |
| Interaction | Entire card clickable; cursor pointer; focus-visible outline on the card itself for keyboard users |

---

## 13. Icons

- **Style:** Outline/line icons (not filled/solid) — consistent with the calm, architectural tone; filled icons would read heavier and more "app-like" than the brand's editorial positioning wants.
- **Stroke weight:** `1.5px` (estimated) — thin enough to feel refined, thick enough to stay legible at small sizes.
- **Size:** `20–24px` standard (nav/inline), `28–32px` in the stats bar.
- **Weight relationship to type:** Icon stroke weight should optically match the weight of adjacent body text (regular/400–500), not the bold weight of headlines.
- **Spacing:** Minimum `space.2` clear space around every icon before adjacent text or edges.
- **Consistency:** Use a single icon set/library throughout (e.g. Phosphor, Lucide, Feather) — never mix outline styles from different families, as stroke-radius and corner treatment differ subtly between sets and will look "off" if mixed.
- **Usage rules:** Icons always carry the `accent.primary` color when paired with stats/proof points; icons in navigation or utility contexts (menu, search, close) use `text.primary` or `text.secondary` instead, reserving accent color for emphasis only.

---

## 14. Images

- **Aspect ratio:** Hero image ≈ 4:3 to 5:4 (tall enough to balance a two-line headline); portfolio/case-study images 16:9 or 3:2 for a more cinematic, "documentation" feel.
- **Cropping:** Architectural/product photography should be cropped to emphasize diagonal or geometric lines — this reference's signature move (an angular facet cut into the image container) is a good candidate "signature element" a new brand could reinterpret with its own subject matter (e.g. a diagonal cut echoing a product's actual shape).
- **Border radius:** Matches card radius (`16px`) on the outer container; inner faceted cropping (if used) should align to the same radius language at each facet edge.
- **Alignment:** Images align to the same column grid as text — no images should float arbitrarily outside the 12-column system.
- **Scaling:** Use `object-fit: cover` with a fixed-ratio container to prevent layout shift; provide 1x/2x/3x sources (responsive `srcset`) for high-density displays.
- **Lazy loading:** All below-the-fold images should use native `loading="lazy"`; hero image should be eagerly loaded and preloaded (`<link rel="preload">`) since it's the LCP (Largest Contentful Paint) element.

---

## 15. Motion Design

| Interaction | Animation | Duration | Easing |
|---|---|---|---|
| Button hover | Background color shift + icon nudge | 150ms | ease-out |
| Card hover | Lift (translateY) + shadow increase | 200ms | ease-out |
| Nav link hover | Underline grow or color fade | 150ms | ease |
| Sticky nav appear | Background fade-in + shadow | 200ms | ease-in-out |
| Section scroll reveal | Fade + slight translateY (16px) | 400–500ms | ease-out, staggered 60–80ms per item |
| Stat counter | Count-up from 0 to final value | 1200–1500ms | ease-out, triggered once on intersection |
| Mobile menu open | Slide-in from right + backdrop fade | 250ms | ease-in-out |
| Page load hero | Optional staged fade-up of headline → subtext → CTA → image | 600–800ms total | ease-out, 100ms stagger |

**Principle:** Motion should always *support* the calm tone — no bouncy/elastic easing, no large-scale transforms, nothing that draws attention to itself. Respect `prefers-reduced-motion` by disabling scroll-reveals and counters (show final state immediately) for users who request it.

---

## 16. Accessibility

- **Color contrast:** All body text must meet WCAG AA (4.5:1 for normal text, 3:1 for large text ≥18px/24px-bold). The primary text/background pairing in this system (≈15.8:1) comfortably exceeds this; double-check any accent-on-accent or accent-on-white-button-label combinations individually.
- **Keyboard navigation:** All interactive elements (nav links, buttons, cards if clickable, form fields) must be reachable via Tab in visual/logical order, with no keyboard traps.
- **Focus states:** Every focusable element needs a visible focus ring — recommend a 2px outline in a color distinct from the accent's hover state, with a 2px offset, never `outline: none` without a replacement.
- **ARIA recommendations:** `<nav>` for navigation with `aria-label` if multiple navs exist; `aria-expanded`/`aria-controls` on the mobile hamburger toggle; `aria-current="page"` for active nav link; stat numbers should have accessible text equivalents (e.g. "25 plus projects delivered") since screen readers may not parse "+" cleanly.
- **Screen readers:** Decorative images (hero background, icon glyphs used purely for style) get `alt=""`; meaningful images (portfolio thumbnails) get descriptive `alt` text.
- **Touch targets:** Minimum `44×44px` for all tappable elements on mobile, including nav hamburger and card CTAs.
- **Minimum font sizes:** Never below `13px` for any real content; body copy should default to `16px` to avoid mobile browser auto-zoom on form focus.
- **WCAG target:** Design and build to **WCAG 2.1 AA** as the floor for a B2B site.

---

## 17. Responsive Design

| Breakpoint | Layout changes | Typography scaling | Navigation | Grid |
|---|---|---|---|---|
| Desktop (≥1440px) | Full asymmetric hero split, 3–4 column grids | Full scale (H1 64px) | Full horizontal nav | 12 col |
| Laptop (1024–1439px) | Same layout, tighter margins | Slight scale-down (H1 ~56px) | Full horizontal nav | 12 col |
| Tablet (640–1023px) | Hero stacks or narrows image; grids drop to 2 col | H1 ~40px, body 16px | Hamburger appears | 8 col |
| Mobile (<640px) | Full stack, single column everywhere, stat bar becomes vertical list or 2×2 | H1 ~32px, body 15px | Hamburger + off-canvas | 4 col |

**Spacing adaptation:** Section spacing compresses from `space.24` (96px) on desktop to `space.16` (64px) on tablet and `space.12` (48px) on mobile, keeping rhythm proportional rather than uniform.

---

## 18. Design Tokens

```
// Color
color.background         = #F7F2EA
color.surface             = #FFFFFF
color.text.primary        = #211C18
color.text.secondary      = #6B6560
color.border              = #E7E0D4
color.accent.primary      = #C15A2E
color.accent.hover        = #A84923
color.accent.tint         = #F3E2D8
color.dark.surface        = #1E1A17

// Typography
font.heading              = "[Brand Display Sans]"
font.body                 = "[Brand Text Sans]"
font.numeric              = "[Brand Technical/Mono]"
font.size.h1              = 64px
font.size.h2              = 40px
font.size.h3              = 22px
font.size.subtitle        = 20px
font.size.body            = 16px
font.size.caption         = 13px
font.size.label           = 12px
font.weight.regular       = 400
font.weight.medium        = 500
font.weight.semibold      = 600

// Spacing
spacing.1 = 4px    spacing.6  = 24px
spacing.2 = 8px    spacing.8  = 32px
spacing.3 = 12px   spacing.10 = 40px
spacing.4 = 16px   spacing.12 = 48px
spacing.5 = 20px   spacing.16 = 64px
                   spacing.20 = 80px
                   spacing.24 = 96px

// Radius
radius.sm    = 8px
radius.md    = 16px
radius.pill  = 999px

// Shadow
shadow.card.resting = 0 1px 2px rgba(0,0,0,0.04)
shadow.card.hover    = 0 8px 24px rgba(0,0,0,0.08)
shadow.nav.sticky    = 0 1px 0 color.border

// Border
border.hairline = 1px solid color.border

// Animation
motion.fast     = 150ms ease-out
motion.standard = 200ms ease-out
motion.reveal   = 450ms ease-out
```

**Naming convention:** `category.property.variant` (e.g. `color.accent.hover`, `spacing.6`, `radius.pill`) — dot-notation namespacing keeps tokens greppable and maps directly onto Tailwind's `theme.extend` config or CSS custom properties (`--color-accent-primary`).

---

## 19. Component Inventory

| Component | Variants |
|---|---|
| Navbar | Transparent, Solid/Sticky, Mobile (off-canvas) |
| Hero | Split (text+image), Centered (fallback for image-less pages) |
| Button | Primary, Secondary, Ghost, Text Link, Icon |
| Statistic Block | Horizontal, Stacked |
| Icon Card / Feature Card | Default, Hover |
| Section Header | Eyebrow + H2 + optional subtitle |
| Portfolio / Work Card | Image-forward, with caption overlay or below-image caption |
| Testimonial | Single quote, Carousel card |
| CTA Band | Light, Dark |
| Footer | Full (4-column), Minimal (single row) |
| Badge / Eyebrow | Solid-tint, Outline |
| Divider | Hairline horizontal, hairline vertical (used in stat bar) |
| Form Field | Text input, Textarea, Select (for a Contact section) |

---

## 20. UI Principles

- **Consistency:** One accent color, one icon family, one radius language (pill for buttons, `16px` for containers/images) applied everywhere without exception.
- **Hierarchy:** Established through type scale and color rarity, not through boxes/borders — let size and weight do the work before reaching for a container.
- **Alignment:** Everything sits on the 12-column grid; nothing floats off-grid except intentional signature elements (e.g. the faceted hero image edge).
- **Contrast:** Reserve high-contrast, saturated color for the smallest, most important elements (a CTA button, a stat icon, one emphasis word) — the rest of the page stays low-contrast and quiet so those elements pop.
- **Whitespace:** Generous, consistent, multiplies of 8px — whitespace is treated as a design material, not "leftover space."
- **Readability:** Body copy never exceeds ~75 characters per line; line-height of 1.6 for paragraphs.
- **Visual rhythm:** Section spacing follows a consistent scale (`space.16` → `space.24`) so the page has a predictable, comfortable cadence when scrolling.

---

## 21. Frontend Implementation Notes

**CSS architecture:** Token-first. Define all values in Section 18 as CSS custom properties (or a Tailwind theme config) before writing any component CSS — components should only ever reference tokens, never raw hex/px values.

**Tailwind mapping (example):**
```js
// tailwind.config.js (excerpt)
theme: {
  extend: {
    colors: {
      background: '#F7F2EA',
      surface: '#FFFFFF',
      'text-primary': '#211C18',
      'text-secondary': '#6B6560',
      border: '#E7E0D4',
      accent: { DEFAULT: '#C15A2E', hover: '#A84923', tint: '#F3E2D8' },
    },
    borderRadius: { pill: '999px', card: '16px' },
    fontFamily: {
      heading: ['var(--font-heading)', 'sans-serif'],
      body: ['var(--font-body)', 'sans-serif'],
      numeric: ['var(--font-numeric)', 'monospace'],
    },
    spacing: { '18': '4.5rem' }, // fill gaps not in default scale as needed
  }
}
```

**Responsive utilities:** Use Tailwind's `sm:` `md:` `lg:` `xl:` prefixes mapped to the breakpoints in Section 17; avoid custom one-off media queries where a token-based utility will do.

**Reusable components:** Build as a small shared library (`Button`, `Card`, `StatBlock`, `SectionHeader`, `Badge`, `Navbar`) before building pages — every page should compose from this set rather than writing bespoke markup per section.

**Grid implementation:** CSS Grid for page-level 12-column layout (`grid-template-columns: repeat(12, 1fr)`); Flexbox for component-internal layout (button icon+label, stat icon+number+label).

**Naming conventions:** BEM-style or utility-first (Tailwind) — pick one and apply consistently; do not mix. For a design-token-driven system, utility-first (Tailwind) pairs more naturally since tokens map 1:1 to utility classes.

**Animation strategy:** Centralize timing/easing as tokens (Section 18) and apply via a small set of transition utility classes; avoid ad hoc `transition: all 0.3s` which causes unintended animations on unrelated property changes.

**Performance considerations:** Preload hero image and heading font; self-host or subset variable fonts to reduce payload; lazy-load all below-the-fold imagery; keep the icon set as an SVG sprite or individual inlined SVGs rather than an icon font (icon fonts fail accessibility and PostCSS tree-shaking).

**Accessibility checklist (pre-launch):**
- [ ] All interactive elements keyboard reachable and operable
- [ ] Visible focus states on every focusable element
- [ ] Color contrast verified for every text/background and text/accent pairing
- [ ] All images have appropriate `alt` text (or `alt=""` if decorative)
- [ ] Reduced-motion variants implemented for all scroll/hover animations
- [ ] Semantic HTML landmarks (`nav`, `main`, `footer`) present
- [ ] Form fields (if any) have associated `<label>` elements

---

## 22. Design System Summary (One-Page Reference)

| Category | Key Rule |
|---|---|
| **Typography** | One sans for headings+body; one technical/mono face reserved for numerals only. H1 64px/600, body 16px/400/1.6 line-height. |
| **Colors** | Warm ivory background (`#F7F2EA`), near-black warm text (`#211C18`), single terracotta accent (`#C15A2E`) used sparingly for CTAs, icons, and one emphasis phrase per headline. |
| **Spacing** | 8pt base grid; component spacing 4–24px, section spacing 64–96px. |
| **Radius** | Pill (`999px`) for buttons; `16px` for cards/images; nothing sharp, nothing over-rounded. |
| **Buttons** | Primary = filled pill + trailing arrow icon; Secondary = text + icon, no fill; hover = darken + icon nudge, 150ms ease-out. |
| **Cards** | `16px` radius, flat by default, lift + shadow on hover, 24–32px internal padding. |
| **Icons** | Thin outline style, 1.5px stroke, accent color for proof-points, neutral for utility. |
| **Grids** | 12 col desktop / 8 tablet / 4 mobile, 24px gutters, content capped at 1280px. |
| **Components** | Navbar, Hero, Button, StatBlock, FeatureCard, PortfolioCard, Testimonial, CTA Band, Footer, Badge, Divider. |
| **Responsive rules** | Asymmetric layouts stack to single column below 1024px; type scale compresses ~20–25% from desktop to mobile; nav collapses to off-canvas hamburger below 1024px. |
| **Motion** | Fast (150ms) for micro-interactions, medium (400–500ms) for scroll reveals; always ease-out; always respects `prefers-reduced-motion`. |
| **Accessibility** | WCAG 2.1 AA floor; visible focus rings; 44px touch targets; semantic landmarks; alt text discipline. |

---

*End of documentation. All colors, spacing values, and dimensions not directly measurable from the source material are estimates intended as a defensible, professional starting point — the design and frontend teams should treat Section 18 (Design Tokens) as the single source of truth and adjust values there as the new brand's identity is finalized.*
