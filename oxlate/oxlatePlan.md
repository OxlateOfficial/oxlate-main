Recurring motif: two lines converge from the outer edges toward a low center point — a valley/mountain-range shape — and this pattern repeats as a structural device across multiple sections, not just once in the hero.

Homepage, section by section:

Navbar — logo/mark centered, nav links split to both sides (services one side, other nav items the other side).
Hero — two-line headline carrying the full pitch.
Centerpiece — a device mockup (phone or laptop, built as a swappable component so either can be used), flanked left/right by the declining-line motif. Floating cards orbit the device, showing small trust/capability tags — not fake client counts, generic capability markers a new site can honestly claim. Slight motion/parallax on scroll.
Four-card staircase — below the device: two cards higher with more gap between them, two lower with less gap, forming a stepped visual shape. Each card is a compressed summary of a full section (About, Goals, etc.) that expands on hover and collapses on unhover — the whole site's content compressed into interactive cards.
Logo/tech row — dotted row of companies/technologies worked with.
Portfolio — three projects on staggered pillars: first and second at one height, third set lower — pedestal-style staggered presentation.
Footer.

That's an accurate read of the sketch. Now the full spec, in writing, for the agent/model:

Oxlate — Homepage Design Specification
Brand Foundation

Oxlate positions as a premium, precision-focused technology partner — not a typical dev agency, not a freelancer portfolio, not a colorful SaaS dashboard. The feeling on landing: "this company builds premium digital products with exceptional attention to detail." Confidence comes from restraint and craft, not loud color or heavy effects.

Note: the source vision doc's "Target Companies" section (seed-funded startups, ₹10cr+ revenue businesses) is internal north-star language, not homepage copy. At zero real clients, claiming that audience literally on the live site overclaims — keep that framing for pitch decks/internal docs, not the public site.

Color System
Primary background — Warm Ivory 
#F5F2EC
Secondary background — Stone White 
#EFEAE2
Card background — Pure White 
#FFFFFF
Primary text — Rich Black 
#171717
Secondary text — Slate Gray 
#666862
Accent — Premium Bronze 
#A87445, hover 
#C18A57
Borders — Warm Gray 
#DDD8CF
Metallic highlight — Soft Silver 
#D8DBD5
Metallic reflection — 
#BEC3BB
Light reflection — 
#F3F4F0

(This supersedes the earlier terracotta/ivory palette I drafted before — this PDF is the real brand theme now.)

Typography

Heading + body: Satoshi/Inter or Geist/Geist (either pairing approved). Numbers/stats only: Orbitron — never for paragraphs or major headings.

Visual Language

Generous whitespace, thin borders, soft shadows, 12–18px rounded corners, large confident typography, high-quality architectural/premium photography, minimal color usage — color used sparingly, not as decoration.

Motion

Fade in, smooth reveal, soft scale, slight elevation on hover, smooth page transitions, parallax on hero imagery, gentle button hover, floating card motion. Nothing flashy or attention-grabbing — motion supports calm, doesn't perform.

Imagery

Modern architecture, premium interiors, luxury materials, minimal workspaces, abstract engineering visuals. Avoid: generic stock office photos, handshake photos, people pointing at laptops, cartoon illustrations.

Icons

Thin stroke, minimal, rounded, elegant, consistent sizing throughout — one icon family only.

Signature Structural Motif

A recurring converging-line pattern: two lines enter from the left and right edges of a section and slope downward to meet at a low center point, forming a valley/mountain silhouette. This motif reappears at multiple points in the page (hero backdrop, flanking the device centerpiece) as the site's visual signature — the thing that makes it feel architecturally designed rather than templated.

Section Layout

1. Navbar
Centered logo mark (Oxlate wordmark or "X" mark). Nav links split across both sides of the logo — one side can hold primary nav, the other services/secondary links, or both sides split evenly.

2. Hero
Two-line headline that fully communicates the pitch on its own. Sits above the device centerpiece.

3. Device Centerpiece
A single component that renders as either a phone or laptop mockup (swappable, not two hardcoded versions). Flanked left and right by the converging-line motif at a declining angle. Floating cards surround the device — small, orbiting, with subtle scroll-triggered movement — displaying honest capability/trust tags appropriate for a company without a client track record yet (tech stack, turnaround commitment, etc., not fabricated numbers).

4. Four-Card Staircase Section
Four cards directly below the centerpiece, arranged in a stepped composition: two upper cards spaced further apart, two lower cards spaced closer together, forming a visual staircase/decline shape. Each card represents a compressed summary of a full page section (About, Goals, etc.). On hover, a card expands and reveals more content; on unhover it collapses back. This is the mechanism that lets the whole site's depth live in a compact, interactive homepage block.

5. Logo/Tech Row
A horizontal dotted row representing companies or technologies worked with — quiet, small-scale, sits between the staircase section and portfolio.

6. Portfolio — Staggered Pillars
Three projects shown on staggered "pedestals" — first and second positioned at one height, third set lower — echoing the site's architectural, structural visual language rather than a flat grid.

7. Footer
Standard sitemap/contact close, consistent with the calm, minimal tone throughout.




Build the homepage for Oxlate, a premium technology partner (web + mobile app development), using Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion for animation. The attached image is a color and visual reference only — match its palette, material feel (warm ivory, bronze accent, soft metallic highlights), and general premium/architectural aesthetic. Do not copy its literal content or layout unless it matches the structure specified below.

Architecture requirements (non-negotiable):

Feature-based folder structure: components/ui/ for shared primitives (Button, Card, Badge, SectionHeader), components/features/home/ for page-specific sections, lib/data/ for any array-driven content (services, portfolio items), lib/types/ for shared interfaces.
All colors defined once as CSS custom properties in globals.css / Tailwind theme config — every component references a token (bg-background, text-accent, etc.), never a raw hex value. Changing the brand color later should mean editing one file, not hunting through components.
Every repeated UI element (buttons, cards, badges) is a single reusable component with variants — never duplicated/copy-pasted markup across sections.
Animation via Framer Motion, not manual CSS keyframes — subtle, premium, purposeful: fade-in, soft scale, gentle elevation on hover, smooth scroll-reveals with slight stagger. Nothing bouncy, nothing attention-seeking. Respect prefers-reduced-motion.

Color tokens (define these as the single source of truth):

background: 
#F5F2EC (warm ivory)
background-secondary: 
#EFEAE2 (stone white)
surface: 
#FFFFFF (card background)
text-primary: 
#171717
text-secondary: 
#666862
accent: 
#A87445 (bronze), accent-hover: 
#C18A57
border: 
#DDD8CF
metallic-highlight: 
#D8DBD5
metallic-reflection: 
#BEC3BB
light-reflection: 
#F3F4F0

Typography: Heading + body in Satoshi/Inter or Geist/Geist (either pairing works). Numbers/stats only in Orbitron — never for headings or body copy.

Visual language: Generous whitespace, thin borders, soft shadows, 12–18px rounded corners, minimal color usage — bronze accent reserved for CTAs, hover states, and small emphasis moments only, never large fills.

Page sections, in order:

Navbar — centered logo mark, nav links split across both sides.
Hero — two-line headline that fully carries the value proposition on its own, no filler subtext needed beyond one short supporting line. Primary CTA: "Get a Quote" (no pricing anywhere on the site).
Signature motif — a recurring visual device: two lines enter from the left and right edges and slope downward to converge at a low center point (valley/mountain-silhouette shape). Use this as a background/structural element behind the hero and flanking the device centerpiece below — this is the site's visual signature, should feel architectural and intentional.
Device centerpiece — a single swappable mockup component (renders as phone or laptop depending on a prop, not two separate hardcoded versions) with the converging-line motif flanking it at a declining angle. Floating cards orbit the device with subtle scroll-triggered motion, each showing a short honest capability tag (tech stack, response time, turnaround commitment) — no fabricated client numbers.
Four-card staircase section — four cards in a stepped layout: two upper cards spaced further apart, two lower cards spaced closer together, forming a staircase silhouette. Each card is a compressed preview of a page topic (About, Goals, Approach, etc.) that expands smoothly on hover to reveal more content and collapses on unhover. Build this as one reusable ExpandableCard component driven by a content array, not four separate hardcoded cards.
Tech/logo row — a quiet horizontal row of dots/logos representing technologies or tools used, small-scale, understated.
Portfolio — staggered pillars — three project cards on staggered pedestals: first and second at one height, third positioned lower, echoing the architectural motif. Each card must visibly display a label — "Independent Project" or "Founding Developer's Work" — this is real, not framed as company client work, and the label must render as a visible badge on the card, not hidden.
Footer — sitemap, contact, social — consistent minimal tone.