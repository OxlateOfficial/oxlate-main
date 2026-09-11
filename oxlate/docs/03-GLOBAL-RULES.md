# OXLATE — GLOBAL SYSTEM RULES (INVARIANTS)

--------------------------------------------------
01. THE DESIGN INVENTION RULE (STRICT INVARIANT)
--------------------------------------------------
Agents may implement documented decisions.
Agents may refine technical implementation.
Agents may NOT introduce a new visual pattern because they believe it looks better.
New visual patterns require explicit owner approval.

Examples requiring owner approval:
- New card type or container style
- New background treatment or gradient
- New color token
- New animation language or easing
- New navigation pattern
- New typography treatment
- New architectural motif

--------------------------------------------------
02. THE SITE-WIDE NO-CARD RULE
--------------------------------------------------
Do NOT use generic card UI anywhere in the primary Oxlate visual system.
Forbidden patterns:
- Floating white cards
- SaaS cards / feature cards
- Dashboard panels / info boxes
- Rounded information containers (16–24px)
- "Who is Oxlate" card / "Why Oxlate" card

Information must be expressed using typography, editorial blocks, annotations, rails, structural labels, section markers, datum lines, measurement marks, architectural callouts, and aligned information fields.
A rectangle is allowed only when it has a genuine architectural/editorial purpose.

--------------------------------------------------
03. THE TRUTH RULE
--------------------------------------------------
Never invent client names, testimonials, awards, fake metrics, enterprise logos, partnerships, or user counts.
All work items must be explicitly labeled:
- "Independent Project" or "Founding Developer's Work"

--------------------------------------------------
04. COLOR PALETTE RESTRICTIONS
--------------------------------------------------
- Environment: Warm Ivory (`#F5F2EC`)
- Primary Structure: Deep Black (`#111111`)
- Secondary Tone: Graphite (`#292929`)
- Accent: Restrained Bronze (`#A87445`) strictly 2%–5% of UI area.
- Hairline Dividers: Pale Stone (`#D9D4CC`, 1px stroke)
- Parchment Field: Pure Parchment (`#FAF8F5`)
- Forbidden: Blue/purple futuristic gradients, neon highlights, glassmorphism, heavy metallic silver.

--------------------------------------------------
05. TYPOGRAPHY SCOPING
--------------------------------------------------
- Orbitron: Strictly for brand mark and technical coordinate tags. Orbitron must NOT become default website font.
- Display & Body: Geist Sans (or Satoshi).
- Monospace: Geist Mono for CAD tags, indices, time, and coordinates.

--------------------------------------------------
06. MOBILE ERGONOMICS & TOUCH
--------------------------------------------------
On viewports < 768px, disable scroll-pinning. Render a native vertical monument layout with zero touch scroll-jacking.

--------------------------------------------------
07. PERFORMANCE BUDGET TARGETS
--------------------------------------------------
- LCP (Largest Contentful Paint): Target < 2.5s
- CLS (Cumulative Layout Shift): Target < 0.1
- INP (Interaction to Next Paint): Target < 200ms
- Bundle: Lean initial JS bundle, optimized SVGs, zero unthrottled animation loops.

--------------------------------------------------
08. FILE OWNERSHIP & PARALLEL EXECUTION RULE
--------------------------------------------------
No two subagents may modify the same file concurrently:
- Hero Architect: `features/home/hero/`
- Design System: `styles/`, `tokens/`, `components/ui/`
- SEO Agent: `app/sitemap.ts`, `app/robots.ts`, `lib/seo/`
- Content Agent: `features/home/content/`
