# OXLATE — WEBSITE STRUCTURE & ROUTE STRATEGY

--------------------------------------------------
01. V1 LAUNCH ROUTES (CONCRETE STRATEGY)
--------------------------------------------------
To prevent creating empty placeholder pages, the V1 public launch will comprise strictly:

- `/` (Homepage — Single-page continuous scroll narrative)
- `/services` (Service Overview)
- `/work` (Selected Independent Work Showcase)
- `/about` (Firm Identity & Standards)
- `/contact` (Direct Contact Flow)

Deeper dynamic routes (e.g., `/services/web-development`, `/work/[project-slug]`, `/insights/[slug]`) will be created ONLY when actual content and case study material justify them.

--------------------------------------------------
02. HOMEPAGE SECTION ARCHITECTURE (`/`)
--------------------------------------------------
1. **01 // INTRO (`#intro`):** 3-State Architectural Hero with dominant Oxlate X.
2. **03 // CAPABILITIES (`#capabilities`):** Diagonal service band threshold bridge & 3 core service pillars.
3. **03 // WORK (`#work`):** Editorial showcase for independent project work.
4. **04 // APPROACH (`#approach`):** 4 architectural engineering principles.
5. **05 // ABOUT (`#about`):** Firm identity, founding narrative & standards.
6. **06 // CONTACT (`#contact`):** Direct mailto CTA & verified social channels.
7. **GLOBAL FOOTER:** System status, copyright, and navigation links.

--------------------------------------------------
03. FEATURE DATA OWNERSHIP RULE (`content/data`)
--------------------------------------------------
Visual UI components MUST NOT contain piles of hardcoded copy arrays or inline content blocks.
Copy, arrays, and data objects live in dedicated feature data files next to their feature:

```text
features/home/hero/hero.data.ts
features/home/capabilities/capabilities.data.ts
features/home/work/work.data.ts
features/home/approach/approach.data.ts
features/home/about/about.data.ts
features/home/contact/contact.data.ts
features/home/nav/nav.constants.ts
```

This guarantees that headlines, subtitles, labels, and service content can evolve cleanly without mutating UI rendering logic.
