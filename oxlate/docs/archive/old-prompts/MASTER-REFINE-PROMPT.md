# OXLATE — SCALABLE FOLDER STRUCTURE & CODE REFINEMENT MASTER PROMPT

> **How to use this document:**  
> - Section 1: The target folder architecture (where everything should live)  
> - Section 2: Copy-paste the master prompt into any agent session to trigger a full code refinement run

---

## SECTION 1 — TARGET FEATURE-BASED FOLDER STRUCTURE

### Rule: One responsibility per file. Max ~120 lines per file. No file is a dump.

```
oxlate/
│
├── app/
│   ├── layout.tsx              ← Root layout, metadata, fonts, JSON-LD
│   ├── page.tsx                ← Just imports Homepage, nothing else
│   ├── sitemap.ts
│   └── robots.ts
│
├── features/                   ← ★ FEATURE ROOT (each feature owns its full slice)
│   │
│   └── home/                  ← The homepage feature
│       │
│       ├── index.ts            ← Barrel export for everything in this feature
│       │
│       ├── homepage.tsx        ← Orchestrator only — imports sections, no logic
│       │
│       ├── hero/
│       │   ├── hero-section.tsx         ← Sticky container + scroll orchestration only
│       │   ├── hero-desktop.tsx         ← Desktop composition layout
│       │   ├── hero-mobile.tsx          ← Mobile vertical monument layout
│       │   ├── hero-logo.tsx            ← Animated logo mark with strut tag
│       │   ├── hero-copy.tsx            ← H1 + subtitle + CTA block
│       │   ├── hero-construction.tsx    ← Datum lines + arm extensions (Frame 2-3)
│       │   ├── hero-threshold-band.tsx  ← Diagonal service band at bottom
│       │   └── hero.constants.ts        ← All scroll keyframe values (tunable)
│       │
│       ├── nav/
│       │   ├── navbar.tsx               ← Top architectural header beam
│       │   ├── nav-links.tsx            ← Desktop nav link list
│       │   ├── nav-mobile-drawer.tsx    ← Mobile menu drawer
│       │   ├── side-dial.tsx            ← Right-side vertical scroll dial
│       │   ├── mobile-status-ticker.tsx ← Mobile floating section indicator
│       │   └── nav.constants.ts         ← Section list (single source of truth)
│       │
│       ├── capabilities/
│       │   ├── capabilities-section.tsx ← Section shell + threshold bridge
│       │   ├── capability-card.tsx      ← Single pillar card
│       │   └── capabilities.data.ts     ← The 3 capability objects
│       │
│       ├── work/
│       │   ├── portfolio-section.tsx    ← Section shell + grid
│       │   ├── portfolio-card.tsx       ← Single project card
│       │   └── portfolio.data.ts        ← Project data (moved from lib/data)
│       │
│       ├── approach/
│       │   ├── approach-section.tsx     ← Section shell
│       │   └── approach-principle.tsx   ← Single principle row
│       │
│       ├── about/
│       │   └── about-section.tsx        ← Small, stays single file
│       │
│       ├── contact/
│       │   └── contact-section.tsx      ← Small, stays single file
│       │
│       └── footer/
│           └── footer-section.tsx       ← Small, stays single file
│
├── components/
│   └── ui/                     ← Pure, reusable, stateless UI primitives
│       ├── button.tsx           ← Bronze / ghost button variants
│       ├── section-tag.tsx      ← Monospace "01 // INTRO" index tag
│       ├── datum-line.tsx       ← Hairline 1px architectural rule
│       ├── crosshair.tsx        ← The + tick mark
│       ├── bronze-dot.tsx       ← 4-6px bronze pip
│       ├── smooth-scroll.tsx    ← Lenis provider
│       └── reveal.tsx           ← Scroll-triggered fade-in wrapper
│
├── lib/
│   ├── hooks/
│   │   ├── use-active-section.ts   ← Viewport focal-line section tracker
│   │   └── use-scroll-progress.ts  ← useScroll wrapper with clamped output
│   ├── types/
│   │   └── home.ts                 ← Shared TypeScript interfaces
│   └── utils.ts                    ← cn() and any pure utilities
│
└── public/
    ├── Oxlate_logoX_blk.svg
    └── icon.svg
```

---

### Key Structural Rules

| Rule | Reason |
|:---|:---|
| `features/home/hero/` splits the 337-line `hero-section.tsx` into 7 focused files | Each file has one job — easier to edit, debug, and hand to a separate agent |
| `nav.constants.ts` is the single source of truth for section IDs | Currently `SECTIONS` is copy-pasted in `side-dial.tsx`, `mobile-status-ticker.tsx`, `navbar.tsx` — 3 places |
| `hero.constants.ts` holds all scroll keyframe numbers | Tuning `[0, 0.15, 0.48]` in one place instead of hunting through 300 lines |
| Data files live next to the feature that owns them | `capabilities.data.ts` → `features/home/capabilities/` not `lib/data/` |
| `components/ui/` only has stateless, reusable atoms | No section logic, no scroll state, no feature coupling |

---

## SECTION 2 — MASTER CODE REFINEMENT PROMPT

Copy and paste this entire block into any agent session to trigger a full refinement pass:

---

```
# OXLATE CODE REFINEMENT — MASTER PROMPT

## ROLE
You are a senior frontend engineer performing a structured code refinement pass 
on the Oxlate Next.js 16 codebase (App Router, TypeScript, Tailwind CSS v4, Framer Motion).

Read the Next.js 16 docs in `node_modules/next/dist/docs/` before touching any 
routing, metadata, or image optimization code.

## OBJECTIVES
Perform the following in order. Do not skip any step.

---

### STEP 1 — AUDIT (read only, no edits yet)

Scan every file in:
- `components/features/home/`
- `components/ui/`
- `lib/`
- `app/`

For each file, report in a table:
| File | Lines | Problems Found |

Problems to flag:
- File exceeds 150 lines
- Component mixes data + layout + animation in one file
- Same constant (e.g. SECTIONS array) duplicated across multiple files
- Hardcoded scroll keyframe values buried inside JSX
- Dead / unused components imported but not rendered
- Inline data arrays that belong in a `.data.ts` file
- Missing TypeScript types (implicit `any`, missing return types on hooks)

---

### STEP 2 — PLAN THE SPLIT

For every file flagged in Step 1, propose a split:

Format:
ORIGINAL FILE: hero-section.tsx (337 lines)
SPLIT INTO:
  - hero-section.tsx       ← sticky container + scroll orchestration (~60 lines)
  - hero-desktop.tsx       ← desktop layout JSX only (~80 lines)
  - hero-mobile.tsx        ← mobile layout JSX only (~50 lines)
  - hero-logo.tsx          ← animated logo mark (~50 lines)
  - hero.constants.ts      ← all scroll keyframe tuning values (~30 lines)

Do not start editing until the plan is confirmed by the USER.

---

### STEP 3 — DEDUPLICATE CONSTANTS

Find all arrays / constants defined more than once (e.g. SECTIONS, NAV_ITEMS).

Create a single source of truth file for each:
- Section list → `features/home/nav/nav.constants.ts`
- Scroll keyframes → `features/home/hero/hero.constants.ts`
- Capability data → `features/home/capabilities/capabilities.data.ts`
- Portfolio data → `features/home/work/portfolio.data.ts`

Update all imports to use the new source.

---

### STEP 4 — EXECUTE SPLITS (one file at a time)

For each split agreed in Step 2:
1. Create the new sub-files with clean, focused content
2. Update the parent file to import from the new sub-files
3. Delete any dead code
4. Run `npm run build` after EACH split to confirm zero errors

Do not batch multiple splits before testing.

---

### STEP 5 — UI PRIMITIVE EXTRACTION

Check `components/ui/` for atoms that are currently inline in section files.

Extract these into standalone primitives if they are used in more than one place:
- Bronze dot pip → `components/ui/bronze-dot.tsx`
- Monospace section tag → `components/ui/section-tag.tsx`
- Hairline datum rule → `components/ui/datum-line.tsx`
- Crosshair tick mark → `components/ui/crosshair.tsx`
- Scroll-reveal wrapper → already exists at `reveal.tsx`

Each primitive must:
- Be stateless (no hooks, no state)
- Accept only typed props
- Be under 40 lines

---

### STEP 6 — TYPESCRIPT HYGIENE

Fix every TypeScript issue found in Step 1:
- Add return types to all custom hooks
- Replace `any` with proper types
- Ensure all data files export typed arrays using the interfaces in `lib/types/home.ts`

---

### STEP 7 — FINAL VERIFICATION

After all changes:
1. Run `npm run build` — must exit code 0 with zero errors
2. Confirm no horizontal overflow (check transforms, SVGs, sticky containers)
3. Confirm single `<h1>` tag on the page
4. Confirm no `console.error` React warnings in dev mode

---

### CONSTRAINTS (never violate these)

- Max 150 lines per file (data files and constants exempt if well-commented)
- Never duplicate a constant — one place, re-exported everywhere else
- Never hardcode scroll keyframe numbers inside JSX — they belong in `.constants.ts`
- Preserve all existing behavior exactly — this is refactor, not redesign
- Every new file gets a JSDoc comment at the top explaining its responsibility
- Do NOT touch `OXLATE PLAYGROUND/`, `Rough Idea/`, or any `.md` documentation files
- Do NOT upgrade dependencies as part of this task
```

---

## HOW TO USE THIS PROMPT

1. Open a new agent session
2. Paste the entire block from `# OXLATE CODE REFINEMENT` to the end
3. The agent will audit, plan, and execute splits step by step
4. You can stop after Step 2 to review the plan before any edits happen

The `STEP 2 — PLAN THE SPLIT` gate means the agent always shows you what it intends to do before touching code.
