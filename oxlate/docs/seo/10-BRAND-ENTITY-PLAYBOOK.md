# BRAND ENTITY DISAMBIGUATION & SEARCH IDENTITY PLAYBOOK — OXLATE

**Document**: `docs/seo/10-BRAND-ENTITY-PLAYBOOK.md`  
**Version**: 1.0  
**Status**: ACTIVE STANDARD  
**Last Updated**: 2026-09-11  

---

## 1. Executive Summary & The Disambiguation Challenge

### The Problem
When users search for the brand **"Oxlate"**, Google's search algorithms and Knowledge Graph frequently encounter a disambiguation challenge:
- **"Oxalate"** (with an "a") is a centuries-old chemical entity with millions of scientific papers, Wikipedia/Wikidata entries, medical guides (kidney stones, dietary oxalates), and FDA references.
- **"Oxlate"** (without an "a") is an independent technology and software engineering firm founded in 2025 in Chandigarh, India.
- Due to character-level Levenshtein distance (1 edit distance) and phonetic similarity, search engine spell-check systems may interpret queries for `Oxlate` as misspelled searches for `Oxalate`, triggering *"Did you mean: Oxalate?"* or elevating chemical information unless accompanied by industry context (e.g. `Oxlate web development`).

### The Objective
Establish **"Oxlate"** as an unmistakable, independent technological entity in Google's Knowledge Graph, Bing Entity Index, and AI knowledge bases without resorting to manipulative SEO hacks or poisoning the site's semantic vector space.

---

## 2. On-Site Technical Architecture

### A. Exact Tokenization in Crawlable HTML
Search engine parsers tokenize HTML text. Formatting brand names with physical whitespace (e.g. `O X L A T E`) fragments the token into single characters (`O`, `X`, `L`, `A`, `T`, `E`), which destroys brand entity recognition.

* **Rule**: The brand must always be rendered as a contiguous token `"OXLATE"` or `"Oxlate"`.
* **Styling**: Visual letter-spacing must be achieved exclusively via CSS (e.g., `tracking-[0.35em]`), never through whitespace in the HTML text node.
* **Anchor Fallbacks**: All graphic logo links must include crawlable text or an explicit `aria-label="Oxlate Home"`.

### B. Crawlable Entity Fact Triples (SSR)
Search engine Natural Language Processing (NLP) models extract entity facts via Subject–Predicate–Object triples from raw SSR HTML.

The primary entity declarations are physically rendered in server-side markup:
```html
<!-- Homepage About Section Entity Declaration -->
<p>
  Founded in 2025 in Chandigarh, India, Oxlate is a compact, founder-led technology firm specializing in web applications, mobile products, and custom business software.
</p>
```
Extracted Triples:
1. `(Oxlate, isA, Technology Firm)`
2. `(Oxlate, foundedIn, 2025)`
3. `(Oxlate, basedIn, Chandigarh, India)`
4. `(Oxlate, specializesIn, Web Applications)`
5. `(Oxlate, specializesIn, Mobile Products)`
6. `(Oxlate, specializesIn, Custom Business Software)`

### C. Linked Schema.org Graph
Our root layout injects an interconnected JSON-LD `@graph`:
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://oxlate.com/#organization",
      "name": "Oxlate",
      "legalName": "Oxlate",
      "alternateName": "Oxlate",
      "url": "https://oxlate.com",
      "logo": "https://oxlate.com/Oxlate_logoX_blk.svg",
      "foundingDate": "2025",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chandigarh",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://x.com/OxlateOfficial",
        "https://www.linkedin.com/company/oxlateofficial",
        "https://github.com/OxlateOfficial",
        "https://oxlate.in"
      ],
      "knowsAbout": [
        "Web Development",
        "Mobile Applications",
        "Custom Software Engineering",
        "Full-Stack Development"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://oxlate.com/#website",
      "name": "Oxlate",
      "alternateName": "Oxlate",
      "url": "https://oxlate.com",
      "publisher": {
        "@id": "https://oxlate.com/#organization"
      }
    }
  ]
}
```

---

## 3. Strict Anti-Patterns & Prohibitions

1. **NEVER create an "Oxlate vs Oxalate" page**:
   Creating comparison pages or writing *"We are not the chemical oxalate"* introduces chemical/medical keywords into your website's embedding vectors. This confuses Google's topical classifiers and reinforces the very connection we are decoupling.
2. **NEVER use keyword stuffing**:
   Repeating "Oxlate" 100 times in hidden spans or footer blocks triggers spam penalties (SpamBrain) and delays entity verification.
3. **NEVER vary the official brand spelling**:
   Do not spell the brand as "Ox-late", "Ox Late", or "O-X-L-A-T-E" in copy or metadata.

---

## 4. Off-Site Entity Corroboration Playbook

Google's Knowledge Graph builds trust by reconciling information across independent web sources. The website alone cannot validate an entity; external corroboration is required.

### 1. Google Search Console & Domain Property
- **Action**: Add and verify the Domain Property `oxlate.com` (DNS verification via TXT record).
- **Sitemap**: Submit `https://oxlate.com/sitemap.xml`.
- **Inspection**: Request URL indexing for `https://oxlate.com/` immediately post-deployment.

### 2. Google Business Profile (Local Entity Grounding)
- **Profile Name**: `Oxlate` (exact match, no extra keywords).
- **Primary Category**: *Software Company* or *Website Designer*.
- **Address**: Verified physical/commercial presence in Chandigarh, India.
- **Website URL**: `https://oxlate.com` (with canonical trailing slash).
- **Significance**: A verified Google Business Profile creates an immediate authoritative Knowledge Graph node associated with the exact name "Oxlate".

### 3. External Verified Entity Profiles (`sameAs`)
Ensure all external company profiles use the **identical name, logo, founding year, and description**:
- **LinkedIn**: `https://www.linkedin.com/company/oxlateofficial` (Company name: **Oxlate**, Industry: IT Services and IT Consulting).
- **GitHub**: `https://github.com/OxlateOfficial` (Profile name: **Oxlate**, Organization profile linking to `https://oxlate.com`).
- **X (Twitter)**: `https://x.com/OxlateOfficial` (Display name: **Oxlate**, bio stating *"Technology partner building custom web and mobile products"*).
- **Crunchbase / Product Hunt / Clutch**: Create verified company profiles for **Oxlate** with headquarters in Chandigarh, India.

---

## 5. Google Search Console Branded Query Monitoring Protocol

### Weekly Tracking Metric
In Google Search Console -> **Performance** -> **Search Results**:
1. Filter by Queries containing:
   - Query: `oxlate`
   - Query: `oxlate web development`
   - Query: `oxlate official`
2. Track:
   - **Impressions**: Are impressions for bare `oxlate` climbing?
   - **Average Position**: Is `oxlate.com` moving towards Position 1 for bare `oxlate`?
   - **CTR**: Are users clicking the technology listing when searching the brand?

### Timeline & Expectation Management
- **Weeks 1–3**: Google re-crawls canonical routes, processes 301 redirects from legacy URLs, and indexes new SSR entity statements.
- **Weeks 4–8**: Knowledge Graph correlates `sameAs` social profiles and Google Business listing with `https://oxlate.com/#organization`.
- **Weeks 8–12+**: As query volume and search click-throughs accumulate for `Oxlate`, Google's spelling correction confidence shifts, suppressing the *"Did you mean: Oxalate?"* prompt in favor of the technology firm.
