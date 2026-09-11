# OXLATE — START HERE

This repository contains the active single source of truth for the Oxlate website rebuild.

## READ IN THIS ORDER:

1. [/docs/00-BRAIN.md](file:///home/abhishek/Documents/C02/Oxlate/oxlate-main/oxlate/docs/00-BRAIN.md)
2. [/docs/01-GOALS.md](file:///home/abhishek/Documents/C02/Oxlate/oxlate-main/oxlate/docs/01-GOALS.md)
3. [/docs/02-STRUCTURE.md](file:///home/abhishek/Documents/C02/Oxlate/oxlate-main/oxlate/docs/02-STRUCTURE.md)
4. [/docs/03-GLOBAL-RULES.md](file:///home/abhishek/Documents/C02/Oxlate/oxlate-main/oxlate/docs/03-GLOBAL-RULES.md)
5. Relevant section specification ([/docs/sections/](file:///home/abhishek/Documents/C02/Oxlate/oxlate-main/oxlate/docs/sections/))
6. Relevant design specification ([/docs/design/](file:///home/abhishek/Documents/C02/Oxlate/oxlate-main/oxlate/docs/design/))
7. Relevant animation specification ([/docs/animation/](file:///home/abhishek/Documents/C02/Oxlate/oxlate-main/oxlate/docs/animation/))
8. Relevant asset specification ([/docs/assets/](file:///home/abhishek/Documents/C02/Oxlate/oxlate-main/oxlate/docs/assets/))
9. [/.agent/ACTIVE.md](file:///home/abhishek/Documents/C02/Oxlate/oxlate-main/oxlate/.agent/ACTIVE.md)
10. [/.agent/TASKS.md](file:///home/abhishek/Documents/C02/Oxlate/oxlate-main/oxlate/.agent/TASKS.md)
11. [/.agent/APPROVALS.md](file:///home/abhishek/Documents/C02/Oxlate/oxlate-main/oxlate/.agent/APPROVALS.md)

---

## CRITICAL EXECUTION RULES FOR ALL AGENTS:

- **DO NOT READ `/docs/archive/`** unless explicitly requested. The archive is historical reference only.
- **The current codebase does NOT define the intended design.** Documents drive code; code never overrides documents.
- **Owner decisions override all previous implementation assumptions.**
- **An agent MUST NOT advance beyond a gate marked PENDING in `/.agent/APPROVALS.md`.**
- **Design Invention Rule:** Agents must NOT invent new visual patterns, cards, colors, gradients, or components without explicit owner approval.
- **File Ownership Rule:** No two agents may modify the same file concurrently.
