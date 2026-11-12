# ON-PAGE SEO SPECIFICATIONS — OXLATE STUDIO

Version: 2.2  
Status: ACTIVE  
Last Updated: 2026-11-12

---

## 1. Homepage Metadata (`DECIDED`)
- **Title:** `Oxlate — Web & Mobile Software Studio`
- **Meta Description:** `Oxlate is a founder-led software studio building fast, reliable websites, mobile apps, and custom internal tools. Work directly with senior builders—no middlemen, 100% code ownership.`
- **Canonical URL:** `https://oxlate.com/`
- **Robots Directives:** `index, follow, max-image-preview:large, max-snippet:-1`

---

## 2. Heading Architecture (`DECIDED`)
- **`<h1>` (Strictly 1 on page):**  
  `We build fast, reliable websites and mobile apps for growing businesses.`
- **`<h2>` Section Headings (Mapped to Navigable Index):**  
  - `02 // CAPABILITIES`: "Software built to solve real business problems."
  - `03 // WORK`: "Real software. Real business results."
  - `04 // APPROACH`: "How we work with you."
  - `05 // ABOUT`: "Work directly with the builders."
  - `06 // CONTACT`: "Have a project in mind? Let's talk."
- **`<h3>` Item Headings:** Service disciplines and project titles.

---

## 3. Standalone Route Single H1 Invariant (`DECIDED`)
Every top-level standalone route renders strictly ONE semantic `<h1>` tag in initial HTML payload:
- `/services`: `Software Engineering Services & Capabilities.`
- `/work`: `Selected Work & Systems.`
- `/about`: `About Oxlate — Founder-Led Software Studio.`
- `/contact`: `Start a Project — Direct Founder Consultation.`
- `/work/[slug]`: `[Project Title]`

---

## 4. Image & Crawlability Requirements (`DECIDED`)
- All images must include descriptive `alt` text with contextual captions.
- Core textual content must exist directly in HTML without requiring JavaScript execution or animation completion.
