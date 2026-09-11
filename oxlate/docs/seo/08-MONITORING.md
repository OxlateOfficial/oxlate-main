# POST-LAUNCH SEO MONITORING & INDEXING PLAYBOOK — OXLATE V1

Version: 1.0  
Status: ACTIVE  
Last Updated: 2026-09-11

## 1. Post-Deployment Verification Checklist

Immediately upon pushing to production (Vercel):

### Priority 1: Crawler Directives & Sitemap
- [ ] Visit `https://oxlate.com/robots.txt` and verify bots are allowed (`Googlebot`, `Bingbot`, `OAI-SearchBot`, `PerplexityBot`).
- [ ] Visit `https://oxlate.com/sitemap.xml` and verify:
  - All 5 core routes are present.
  - All dynamic `/work/[slug]` routes are present with accurate `<lastmod>` dates.
  - XML is valid and formatted properly.

### Priority 2: Google Search Console (GSC)
- [ ] Add domain property `oxlate.com` in Google Search Console.
- [ ] Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in Vercel environment variables (or DNS TXT record).
- [ ] Submit `https://oxlate.com/sitemap.xml` under Sitemaps tab.
- [ ] Run **URL Inspection** on:
  - `https://oxlate.com/`
  - `https://oxlate.com/services`
  - `https://oxlate.com/work`
- [ ] Request Indexing for the homepage to accelerate re-crawling.

### Priority 3: 301 Legacy Redirect Verification
Verify curl status returns HTTP `308` or `301` for legacy URLs:
- `curl -I https://oxlate.com/pricing` → Location: `/contact`
- `curl -I https://oxlate.com/services/website-development` → Location: `/services#web-development`
- `curl -I https://oxlate.com/services/app-development` → Location: `/services#app-development`
- `curl -I https://oxlate.com/services/business-automation` → Location: `/services`

### Priority 4: Rich Results & Schema Validation
- [ ] Test `https://oxlate.com/` in [Google Rich Results Test](https://search.google.com/test/rich-results).
- [ ] Confirm valid `Organization`, `WebSite`, and `Service` types detected with zero errors.

### Priority 5: Bing Webmaster Tools & IndexNow
- [ ] Import Google Search Console property into Bing Webmaster Tools.
- [ ] Submit sitemap in Bing.
- [ ] Enable IndexNow for real-time URL push notifications when projects are published or updated.

---

## 2. Weekly Health Metrics
1. **Coverage / Page Indexing:** Monitor for unexpected 404s or crawl anomalies.
2. **Core Web Vitals:** Ensure LCP < 1.8s and CLS = 0.00 across mobile & desktop.
3. **Branded Search Appearance:** Monitor queries for "Oxlate", "Oxlate web development", "Oxlate Chandigarh".
