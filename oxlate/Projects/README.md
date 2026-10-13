# Projects Directory & Automation System

This folder is the central staging area for Oxlate projects. Any project added here automatically synchronizes with the website.

---

## How to Add a New Project

To add a new project to the website:

1. **Create a new folder** inside `Projects/`:
   ```bash
   Projects/<your-project-slug>/
   ```
   *(e.g., `Projects/healthcare-portal/` or `Projects/ecommerce-app/`)*

2. **Drop your screenshots or photos** into that folder:
   - Supported extensions: `.jpg`, `.jpeg`, `.png`, `.webp`, `.svg`, `.gif`
   - Naming recommendation: `01-hero.jpg`, `02-dashboard.jpg`, etc.

3. **Add a `project.json`** inside the folder (copy from `Projects/_template/project.json`):
   ```json
   {
     "id": "project-05",
     "slug": "my-project-slug",
     "priority": 5,
     "featuredInHero": false,
     "featuredOnHome": true,
     "badge": "Client Work",
     "title": "My Awesome Project",
     "subtitle": "Full-Stack Web System",
     "category": "Web Architecture // Application Platform",
     "headline": "A short 1-line headline explaining what was built.",
     "summary": "Full project summary including team role and outcomes.",
     "whatWasBuilt": "Detailed breakdown of features and architecture.",
     "technicalChallenge": "Engineering constraints or bottlenecks solved.",
     "architecturalSolution": "How the solution was built technically.",
     "highlights": [
       "Key milestone or metric",
       "Type-safe API contract",
       "Production deployment SLA"
     ],
     "techStack": ["Next.js", "React", "TypeScript", "Tailwind CSS"],
     "schematicType": "platform",
     "images": [],
     "liveUrl": "https://example.com"
   }
   ```
   *Note: If you leave `"images": []` empty, the automated sync script automatically scans the images in your folder, copies them to `public/work/<slug>/`, and fills in the image paths for you!*

4. **Sync the project**:
   Run:
   ```bash
   npm run sync:projects
   ```
   *(Or simply run `npm run dev` or `npm run build` — the sync script automatically executes before both!)*

---

## Badge Options
- `"Client Work"` — Commercial client projects (e.g., Mentor Krish)
- `"Founding Developer's Work"` — Projects by founding engineers from past companies (e.g., Lemniska)
- `"Independent Project"` — Internal or independent Oxlate platforms

## Schematic Types
- `"platform"` — For web platforms, SaaS dashboards, and backend services
- `"mobile"` — For cross-platform mobile apps (React Native / iOS / Android)
