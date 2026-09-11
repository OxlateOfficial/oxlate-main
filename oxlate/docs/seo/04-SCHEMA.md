# STRUCTURED DATA (JSON-LD) — OXLATE V1

Version: 1.0  
Status: ACTIVE  
Last Updated: 2026-09-10

## Schema Types Implemented

### 1. `Organization`
Identifies Oxlate as a verified corporate entity:
- `@type`: `Organization`
- `name`: `Oxlate`
- `url`: `https://oxlate.com`
- `logo`: `https://oxlate.com/Oxlate_logoX_blk.svg`
- `description`: `Precision technology partner building thoughtful web experiences and mobile applications.`
- `foundingDate`: `2025`
- `sameAs`: [
    "https://x.com/OxlateOfficial",
    "https://www.linkedin.com/company/oxlateofficial",
    "https://www.instagram.com/oxlateofficial/",
    "https://www.facebook.com/profile.php?id=61585881831048"
  ]

### 2. `WebSite`
- `@type`: `WebSite`
- `name`: `Oxlate`
- `url`: `https://oxlate.com`

### 3. `Service`
- Embedded services matching the 3 capability columns:
  - `Web Development`
  - `Mobile Application Development`
  - `Custom Software Engineering`
- Note: Avoid deprecated `ProfessionalService` schema; use standard Schema.org `Service` mapped to `Organization`.
