# AI SEARCH & MACHINE CRAWLABILITY — OXLATE V1

Version: 1.0  
Status: ACTIVE  
Last Updated: 2026-09-10

## AI Search Guidelines
- **Google AI Overviews / AI Mode:** Follow Google's official guidance—no secret markup or "GEO" tricks required. Ensure high-quality factual textual content, clean semantic HTML, fast page experience, and valid structured data.
- **`llms.txt` Decision:** Omitted from V1 requirements as unnecessary according to Google's search documentation.
- **AI Crawler Directives:** Ensure `app/robots.ts` explicitly allows legitimate search crawlers (e.g. Googlebot, Bingbot, and OpenAI's `OAI-SearchBot`) without Cloudflare or WAF 403 blocks.
- **Entity Answering:** Structure the About and Capabilities copy so an LLM can unambiguously answer "What is Oxlate?", "What does Oxlate build?", and "When was Oxlate founded?".
