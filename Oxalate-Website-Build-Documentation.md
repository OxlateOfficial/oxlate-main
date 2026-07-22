# Oxalate Website — Build Documentation
**For: Coding agent / frontend implementation**
**Scope: Static marketing site — Web Development + Mobile App Development + SEO Optimization services only**
**Stack: Next.js (App Router) + TypeScript + Tailwind CSS + shadcn/ui**

> Read this whole document before writing code. Section 7 (Design Tokens) is the single source of truth for all colors/spacing/type — never hardcode a raw hex or px value in a component; reference the token.

---

## 1. Scope Lock (do not deviate)

- **Services shown:** Web Development, Mobile App Development, SEO Optimization. Nothing else. Do not add automation, consulting, cloud, or product sections to this build.
- **No pricing anywhere.** Every price mention is replaced with a "Get a Quote" CTA. If a range is needed later, it goes in `lib/data/services.ts`, not hardcoded in a component.
- **Portfolio honesty:** Every project card must carry an explicit label — `"Independent Project"` or `"Founding Developer's Work"` — never presented as company client work. This is a data field (`label`), not a design afterthought — see Section 6.2.
- **No fabricated stats.** No client counts, no "X+ projects delivered" unless real. The proof section uses honest, non-client metrics instead (Section 5.3).

---

## 2. Page Structure

| Route | Purpose |
|---|---|
| `/` | Home — full pitch, all sections below |
| `/services` | Service detail — Web Dev, App Dev, SEO, each with its own anchor/section |
| `/work` | Portfolio grid — labeled personal/founder projects |
| `/about` | Team, positioning, "why Oxalate" |
| `/contact` | Quote request form |

No blog, no pricing page, no product/SaaS pages in this build.

---

## 3. Home Page — Section Order & Layout

Each section below maps directly to a component in `components/features/home/`.

### 3.1 Navbar
Sticky, transparent-on-hero → solid-on-scroll. Logo left, nav links (Services, Work, About, Contact), single CTA button "Get a Quote" right. See design doc §8.1 for full spec.

### 3.2 Hero
Asymmetric split, ~45% text / ~55% image. Two-line H1 with one accent-colored phrase. One-sentence subtext. Dual CTA: primary "Get a Quote" (filled), secondary "See Our Work" (text+icon, links to `/work`). No pricing, no "starting at" language in the hero.

### 3.3 Proof Bar (honest version — replaces fabricated stats)
4-column row, same visual treatment as reference stats bar, but content is real and non-client-dependent:
- Tech stack breadth (e.g. "Next.js · React Native · FastAPI")
- Response commitment (e.g. "Reply within 24 hours")
- Founder experience marker (e.g. "3+ years building production apps") — only if true
- "Quote turnaround" (e.g. "Custom quote in 48 hours")

Do not put a client count or project count here unless it's real and verifiable.

### 3.4 Services Preview
3-column card grid (collapses 1-col mobile): Web Development, Mobile App Development, SEO Optimization. Icon → title → 1-2 line description → "Learn more" link to `/services#anchor`. Data-driven from `lib/data/services.ts` — **never hardcode service copy directly in the component.**

### 3.5 Work / Portfolio Preview
2-column image grid, 2-3 featured projects pulled from `lib/data/portfolio.ts`. Each card **must** render its `label` field visibly (not hidden in alt text) — "Independent Project" or similar, styled as a small badge, not buried.

### 3.6 CTA Band
Centered, contrasting background. Short headline ("Have a project in mind?") → single "Get a Quote" button. No secondary CTA here — one clear action.

### 3.7 Footer
4-column: brand blurb, sitemap (Home/Services/Work/About/Contact), contact info, social links. No pricing, no fabricated legal/registration claims.

---

## 4. Feature-Based Folder Structure

Built for two people (you + teammate) to work without collision — each feature folder is a self-contained unit.

```
oxalate/
├── app/
│   ├── layout.tsx                    # Root layout, fonts, metadata
│   ├── page.tsx                      # Home page — composes home features only
│   ├── globals.css                   # Tailwind base + CSS custom properties (tokens)
│   ├── services/
│   │   └── page.tsx                  # Composes services features
│   ├── work/
│   │   └── page.tsx                  # Composes work features
│   ├── about/
│   │   └── page.tsx                  # Composes about features
│   └── contact/
│       └── page.tsx                  # Composes contact features
│
├── components/
│   ├── ui/                           # Shared primitives — the reusable design system
│   │   ├── Button.tsx                # variants: primary | secondary | ghost | text-link | icon
│   │   ├── Card.tsx                  # base card shell, all cards compose this
│   │   ├── Badge.tsx                 # variants: solid-tint | outline (used for portfolio labels)
│   │   ├── SectionHeader.tsx         # eyebrow + H2 + optional subtitle, used on every section
│   │   ├── Divider.tsx               # hairline horizontal/vertical
│   │   └── FormField.tsx             # text/textarea/select, used in contact form
│   │
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
│   └── features/
│       ├── home/
│       │   ├── Hero.tsx
│       │   ├── ProofBar.tsx
│       │   ├── ServicesPreview.tsx
│       │   ├── WorkPreview.tsx
│       │   └── CTABand.tsx
│       │
│       ├── services/
│       │   ├── ServiceCard.tsx       # used in home preview AND /services page
│       │   └── ServiceDetail.tsx     # full section per service on /services
│       │
│       ├── work/
│       │   ├── PortfolioCard.tsx     # renders image + label badge + caption
│       │   └── PortfolioGrid.tsx
│       │
│       ├── about/
│       │   └── TeamSection.tsx
│       │
│       └── contact/
│           └── QuoteForm.tsx
│
├── lib/
│   ├── data/
│   │   ├── services.ts               # Service objects: {id, title, description, icon, anchor}
│   │   ├── portfolio.ts              # Project objects: {id, title, image, label, caption, link}
│   │   └── nav.ts                    # Nav link list, single source for Navbar + Footer
│   │
│   └── types/
│       └── index.ts                  # Service, PortfolioItem, NavLink interfaces
│
├── public/
│   └── images/
│       ├── hero/
│       └── portfolio/
│
└── tailwind.config.ts                # Design tokens mapped here (Section 7)
```

**Collision-avoidance rule:** each person works within one `features/<name>/` folder at a time. Shared primitives (`components/ui/`) are the only place that requires a heads-up in chat before editing, since both features and pages depend on them.

---

## 5. Reusable Component Contracts

Build these once in `components/ui/`, then every page composes from them — never copy-paste a button or card markup again.

### 5.1 `Button.tsx`
```tsx
type ButtonProps = {
  variant: 'primary' | 'secondary' | 'ghost' | 'text-link' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  href?: string;        // renders as <Link> if present, else <button>
  onClick?: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode; // trailing icon, e.g. arrow
};
```
Primary = filled pill, accent background, trailing arrow icon, darkens on hover (150ms ease-out). Secondary = text + icon, no fill. Never restyle a button inline — add a variant if a new style is needed.

### 5.2 `Card.tsx`
```tsx
type CardProps = {
  children: React.ReactNode;
  hoverEffect?: boolean; // lift + shadow on hover, default true
  className?: string;
};
```
Base shell: `16px` radius, flat by default, `24-32px` padding. `ServiceCard` and `PortfolioCard` both wrap this — they don't redefine card styling themselves.

### 5.3 `Badge.tsx`
```tsx
type BadgeProps = {
  variant: 'solid-tint' | 'outline';
  children: React.ReactNode;
};
```
Used for the portfolio honesty label ("Independent Project") and any eyebrow tags. This is the component that carries the disclosure requirement from Section 1 — it must render visibly on every `PortfolioCard`, not be optional.

### 5.4 `SectionHeader.tsx`
```tsx
type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center'; // default left, per editorial tone
};
```
Every section (Services Preview, Work Preview, etc.) starts with this — never write a raw `<h2>` directly in a feature component.

### 5.5 Data-driven services (no hardcoded copy)
```ts
// lib/data/services.ts
export const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: '...',
    icon: 'Globe', // lucide-react icon name
    anchor: 'web-development',
  },
  {
    id: 'app-development',
    title: 'Mobile App Development',
    description: '...',
    icon: 'Smartphone',
    anchor: 'app-development',
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    description: '...',
    icon: 'TrendingUp',
    anchor: 'seo',
  },
];
```
`ServicesPreview.tsx` and `/services` both map over this array — adding a 4th service later means editing this file only, never touching a component.

### 5.6 Data-driven portfolio (honesty enforced at the type level)
```ts
// lib/types/index.ts
export interface PortfolioItem {
  id: string;
  title: string;
  image: string;
  label: 'Independent Project' | 'Founding Developer\'s Work'; // required, no default
  caption: string;
  link?: string;
}
```
Making `label` a required, constrained-value field means it's structurally impossible to add a project card without disclosing what it is.

---

## 6. Design Tokens (from approved design language doc — do not modify without discussing)

```
// Color
color.background      = #F7F2EA
color.surface          = #FFFFFF
color.text.primary     = #211C18
color.text.secondary   = #6B6560
color.border           = #E7E0D4
color.accent.primary   = #C15A2E
color.accent.hover     = #A84923
color.accent.tint      = #F3E2D8
color.dark.surface     = #1E1A17

// Typography
font.heading = "[Brand Display Sans]"   // e.g. Geist or Satoshi
font.body    = "[Brand Text Sans]"      // e.g. Inter, General Sans
font.numeric = "[Brand Technical/Mono]" // e.g. Space Mono, JetBrains Mono — stats only

font.size.h1 = 64px   font.size.h3 = 22px   font.size.caption = 13px
font.size.h2 = 40px   font.size.subtitle = 20px   font.size.label = 12px
font.size.body = 16px

// Spacing (8pt base grid)
space.1=4  space.4=16  space.10=40  space.20=80
space.2=8  space.5=20  space.12=48  space.24=96
space.3=12 space.6=24  space.16=64
                       space.8=32

// Radius
radius.sm=8px  radius.md=16px  radius.pill=999px

// Shadow
shadow.card.resting = 0 1px 2px rgba(0,0,0,0.04)
shadow.card.hover    = 0 8px 24px rgba(0,0,0,0.08)

// Motion
motion.fast     = 150ms ease-out   // button/nav hover
motion.standard = 200ms ease-out   // card hover
motion.reveal   = 450ms ease-out   // scroll reveals
```

Map all of these into `tailwind.config.ts` under `theme.extend` before writing any component — components reference `bg-background`, `text-text-primary`, `rounded-card`, etc., never raw hex/px.

---

## 7. Build Order (recommended)

1. `tailwind.config.ts` tokens + `globals.css`
2. `components/ui/` primitives (Button, Card, Badge, SectionHeader, Divider, FormField)
3. `components/layout/` (Navbar, Footer)
4. `lib/data/` + `lib/types/`
5. Home page features, in the order listed in Section 3
6. `/services`, `/work`, `/about`, `/contact` pages (these mostly reuse home components + new detail components)

---

## 8. Agent Prompt Block (paste this directly to your coding agent)

> Build the Oxalate marketing site using Next.js App Router, TypeScript, Tailwind CSS, and shadcn/ui, following the feature-based folder structure, component contracts, and design tokens specified in this document exactly. Do not add pricing anywhere — every commercial CTA must say "Get a Quote" and link to `/contact`. Do not add any service beyond Web Development, Mobile App Development, and SEO Optimization. Every portfolio card must render its `label` field (`"Independent Project"` or `"Founding Developer's Work"`) visibly as a badge — this is non-negotiable and enforced by the `PortfolioItem` type. Build shared primitives in `components/ui/` first, then compose feature components from them — never write one-off styled markup inside a feature component. Reference Tailwind config tokens for every color/spacing/radius value; never hardcode a hex or px value directly in a component.

---

*This document is scoped to the current build only (Web + App + SEO, no pricing, honest portfolio labeling). Automation services, teaching platform, and any other product ideas are explicitly out of scope for this build and should not appear in any component, route, or data file.*
