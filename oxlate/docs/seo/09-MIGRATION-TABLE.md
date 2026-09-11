# URL MIGRATION & CONTINUITY TABLE — OXLATE

Version: 1.0  
Status: ACTIVE  
Last Updated: 2026-09-11

## 1. Migration Map Accounting

Every legacy URL indexed on `oxlate.com` and `oxlate.in` is permanently accounted for below:

| Legacy URL | New Destination | HTTP Status | Canonical URL | Indexable | In Sitemap | Redirect Reason / Notes |
|---|---|---|---|---|---|---|
| `https://oxlate.com/` | `/` | 200 | `https://oxlate.com/` | YES | YES | Primary brand and core services hub |
| `https://oxlate.in/*` | `https://oxlate.com/:path*` | 301 / 308 | `https://oxlate.com/:path*` | NO (redirect) | NO | Host header matching in next.config.ts routes all .in traffic to .com |
| `/pricing` | `/contact` | 301 | `https://oxlate.com/contact` | NO (redirect) | NO | Replaced by bespoke project consultation workflow |
| `/services/website-development` | `/services#web-development` | 301 | `https://oxlate.com/services` | NO (redirect) | NO | Consolidated into primary services capabilities catalog |
| `/services/app-development` | `/services#app-development` | 301 | `https://oxlate.com/services` | NO (redirect) | NO | Consolidated into primary services capabilities catalog |
| `/services/business-automation` | `/services#custom-software` | 301 | `https://oxlate.com/services` | NO (redirect) | NO | Consolidated under custom software engineering |
| `/portfolio` | `/work` | 301 | `https://oxlate.com/work` | NO (redirect) | NO | Replaced by architectural /work catalog |
| `/about` | `/about` | 200 | `https://oxlate.com/about` | YES | YES | Firm identity and standards |
| `/contact` | `/contact` | 200 | `https://oxlate.com/contact` | YES | YES | Project consultation inquiries |

---

## 2. Redirect Rules Enforcement
1. **Zero Redirect Chains**: Every legacy URL resolves directly in one hop (Old → Final 200).
2. **Host Header Redirection**: `oxlate.in` and `www.oxlate.in` are captured by `HOST_REDIRECT_REGISTRY` in `next.config.ts` (`has: [{ type: 'host', value: '(?<subdomain>.*\\.)?oxlate\\.in' }]`) to prevent two-hop chains.
3. **DNS/Edge Provider Apex Pre-Routing**: On Vercel / Cloudflare DNS, configure `oxlate.in` as an apex domain redirect directly to `oxlate.com` for zero-hop CDN edge processing.
4. **Canonical Final Destinations**: All destination pages return HTTP 200 and explicitly carry `<link rel="canonical">` matching `siteConfig.url`.
5. **Clean Sitemaps**: No 301 redirect or 404 URL is ever present in `/sitemap.xml`.
6. **Duration**: Redirects in `next.config.ts` will be maintained indefinitely (minimum 12–24 months per Google search guidelines).

