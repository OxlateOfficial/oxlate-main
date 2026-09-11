Yes. Now we should treat SEO as part of the **website architecture**, not as something we bolt onto `layout.tsx` at the end.

And because Oxlate is a new company with very little external authority, I would be especially careful about one thing:

> **Do not try to “AI SEO” your way around the lack of authority. Build a site that search engines and AI systems can confidently understand, while we gradually build the external signals that establish Oxlate as a real entity.**

Google's current guidance is quite explicit: AI Overviews/AI Mode do not require a secret AI markup or special "GEO" trick. The same fundamentals—crawlability, indexability, useful original content, internal links, good page experience, text that systems can access, and structured data matching visible content—remain the foundation. Google also explicitly says not to waste effort on things like `llms.txt` as an AI-search hack. ([Google for Developers][1])

So let's build the **Oxlate SEO system** properly.

---

# 1. First: change the current SEO strategy

Your existing documentation is a decent technical starting point, but there are several things I would change.

### Current positioning

You currently have keywords like:

* Web application development
* React 19 & Next.js agency
* Mobile application development
* Custom software development company
* Premium full-stack web engineering
* Software design systems
* technical architecture

That's too much for the current company.

It risks producing a website that tells search engines:

> "We are an agency that does basically everything."

But our actual strategic position is narrower.

I'd make the semantic center:

### Primary

**Web development + mobile application development**

### Secondary

**Custom web applications + business software**

### Supporting technologies

React / Next.js / React Native / TypeScript / Node.js / PostgreSQL

Technology names should support the service proposition, not become the proposition.

For example:

> "We build custom web applications with React and Next.js."

is useful.

But:

> "React 19 / Next.js / TypeScript / Tailwind / GraphQL / Docker / PostgreSQL development agency"

is mostly developer-facing noise.

---

# 2. The real SEO architecture

Even if the visual site remains one scrolling page, I would architect the SEO/content system around these conceptual pages:

```text
/
├── /services
│   ├── /services/web-development
│   ├── /services/mobile-app-development
│   └── /services/custom-software
│
├── /work
│   └── /work/[project]
│
├── /about
│
├── /contact
│
└── /insights
    └── /insights/[slug]
```

But **I would not necessarily launch all of these immediately.**

Your public website can initially remain:

```text
/
```

with a very strong single-page experience.

Then you can create indexable supporting pages as the content and actual work justify them.

That's important because Google explicitly warns against manufacturing lots of low-value pages just to capture search variations. Their current AI-search guidance specifically cautions against creating pages for every query variation merely to manipulate search/AI results. ([Google for Developers][2])

---

# 3. Homepage SEO architecture

This is where your current design and SEO need to meet.

Your homepage should have a semantic structure roughly like:

```html
<header>
<nav>
</nav>
</header>

<main>

<section id="hero">
    <h1>...</h1>
</section>

<section id="capabilities">
    <h2>...</h2>
</section>

<section id="work">
    <h2>...</h2>
</section>

<section id="approach">
    <h2>...</h2>
</section>

<section id="about">
    <h2>...</h2>
</section>

<section id="contact">
    <h2>...</h2>
</section>

</main>

<footer>
</footer>
```

Visually you can make it look completely unconventional.

Search engines don't care that your design is unconventional.

They care that the underlying document is understandable.

Google specifically recommends semantic HTML where practical and stresses that important content needs to be available in textual form, including for generative AI search. ([Google for Developers][3])

---

# 4. HERO — SEO requirements

Your hero is visually going to be very artistic.

That's fine.

But the actual HTML underneath must be boringly clear.

## One H1 only

Something along the lines of:

> Web and mobile products, built with precision.

or

> Web development and mobile applications, built with precision.

I prefer the first from a brand perspective, while the second is more explicit for search.

Then immediately below:

A concise text paragraph explaining exactly what Oxlate does.

The important thing is that the visitor and crawler should understand the company **without interpreting animation**.

Don't put the primary message entirely into:

* SVG paths
* canvas
* WebGL
* animation text
* image text

The visible text itself needs to exist in HTML.

Google says important content should be available in textual form and that JavaScript sites need to follow normal JavaScript SEO best practices. ([Google for Developers][1])

---

# 5. HERO — metadata

Homepage:

### Title

I'd move away from:

> Oxlate — Premium Technology Partner

because it is elegant but not very descriptive.

Something closer to:

> **Oxlate — Web & Mobile Development Partner**

or:

> **Oxlate — Web Development & Mobile Applications**

Then the brand positioning can live in the description.

### Meta description

For example:

> Oxlate builds custom websites, web applications and mobile products for businesses and teams that need thoughtful design and disciplined engineering.

That's much more semantically useful.

Don't stuff:

> React Next.js Node TypeScript PostgreSQL agency India USA...

into the description.

---

# 6. HERO — OpenGraph

Create:

```text
/public/og/oxlate-default.png
```

1200 × 630.

But don't make it a generic:

> "Oxlate — Premium Technology Partner"

marketing graphic.

Make it visually consistent with your brand:

```text
Warm ivory
Huge black structural geometry
Oxlate mark
Small bronze detail
Short positioning line
```

One visual identity everywhere.

---

# 7. CAPABILITIES SECTION

This section is extremely important for SEO because it establishes **service entities**.

Don't make the page say only:

> Web / Mobile / Software

That's beautiful but semantically weak.

Instead the visible copy should clearly establish:

### Web Development

Custom websites and web applications designed around your business, users and operational needs.

### Mobile Application Development

Mobile applications for Android and cross-platform products built around real user workflows.

### Custom Software

Business applications, dashboards and internal systems built around processes that off-the-shelf software cannot properly support.

Now search engines have a much clearer understanding of what Oxlate actually sells.

---

# 8. Should these become separate pages?

Eventually: **yes**.

But only when there is enough legitimate content to justify them.

For example:

```text
/services/web-development
```

could eventually contain:

* what web development means
* what Oxlate builds
* website vs web application
* technology choices
* development process
* examples
* FAQs
* CTA

Likewise:

```text
/services/mobile-app-development
```

etc.

That allows Oxlate to rank for specific service intent without turning the homepage into an SEO document.

---

# 9. WORK / PORTFOLIO

This is probably your most important SEO/content section after the service section.

But remember your trust strategy.

Your site must explicitly distinguish:

### Client Work

from

### Independent Projects

At the current stage, use:

> **Independent Project**

or

> **Founding Developer's Work**

directly in the structured content and visible interface.

Don't create schema that implies clients exist when they don't.

---

# 10. Independent project pages

This is where I would eventually create pages like:

```text
/work/project-name
```

Each can have:

```text
Project title
Independent Project

What it is
What problem it explores
What was built
Architecture
Technologies
Screenshots
Technical decisions
What was learned
```

That's excellent SEO material because it is **first-party evidence of capability**.

And unlike fake case studies, it's honest.

For example:

> Independent project exploring real-time classroom infrastructure using React, Node.js and PostgreSQL.

That's extremely useful semantic information.

---

# 11. Image SEO becomes important here

Because your website is going to be highly visual.

Every meaningful image should have:

```html
alt="Oxlate independent project showing a real-time classroom dashboard"
```

not:

```html
alt="image"
```

and definitely not:

```html
alt="Oxlate premium technology partner"
```

for every image.

The alt text describes the **actual image**.

And filenames matter too.

Prefer:

```text
oxlate-real-time-classroom-dashboard.webp
```

over:

```text
img_4838.webp
```

Google's current AI-search guidance specifically recommends supporting textual content with high-quality relevant images and following normal image SEO practices. ([Google for Developers][1])

---

# 12. APPROACH section

This isn't primarily an SEO keyword section.

It's a **semantic trust section**.

You can establish ideas such as:

> Product thinking
> Technical architecture
> Design systems
> Direct engineering involvement
> Focused builds

This helps AI/search systems understand the difference between:

> Oxlate = software company

and:

> Oxlate = random freelancer who makes websites.

That's important.

---

# 13. ABOUT section

This is where we introduce the entity itself.

Something like:

> Oxlate is a technology company founded in 2025, focused on web development, mobile applications and custom business software.

This is much more useful than:

> We're a passionate group of creators...

You want clear factual entity statements.

For AI systems in particular, think:

> **Can a machine answer "What is Oxlate?" from this page without guessing?**

The answer should be yes.

---

# 14. ABOUT — entity consistency

This is where structured data becomes valuable.

Your Organization schema should eventually contain consistent:

```text
name
alternateName
url
logo
description
email
telephone
address if applicable
sameAs
foundingDate
```

Google's current Organization documentation recommends using relevant organizational information such as name, logo, URL and—where applicable—real-world presence information such as address or telephone. ([Google for Developers][4])

Don't fabricate any of it.

Especially:

* employee count
* offices
* awards
* clients
* ratings

---

# 15. BIG CHANGE TO YOUR CURRENT JSON-LD

Your current:

```typescript
'@type': 'Organization'
```

is correct.

I would **not** blindly change it to:

```text
ProfessionalService
```

The current Schema.org ecosystem has actually deprecated the generic `ProfessionalService` type because of ambiguity; `Service` is the more appropriate concept for representing an offered service. 

For Oxlate, I'd rather have:

```text
Organization
    ├── Service
    ├── Service
    └── Service
```

with the services matching the visible page content.

---

# 16. Service schema

Eventually you can have:

```json
{
  "@type": "Service",
  "name": "Web Development",
  "serviceType": "Web development",
  "provider": {
    "@id": "https://oxlate.com/#organization"
  }
}
```

Schema.org's `Service` type explicitly supports things like `serviceType`, `provider`, `areaServed`, and related properties. ([Schema.org][5])

But don't create ten imaginary services just because Schema.org permits it.

Three or four accurate services are better.

---

# 17. CONTACT section

This has two jobs.

### Conversion

Obviously.

### Entity reinforcement

You should expose legitimate contact information consistently.

For example:

```text
Email
Phone
Location
Business hours
LinkedIn
GitHub
```

Only publish what you actually want public.

And don't put a fake physical office location just because you think LocalBusiness schema will help.

---

# 18. Local SEO for India

This is a separate layer.

Because one of your target groups is Indian SMBs, we should eventually establish Oxlate's legitimate geographic footprint.

If Oxlate has a real eligible local presence, then:

* Google Business Profile
* consistent NAP information
* Google Maps presence
* local organization/business information
* location-specific landing content where genuinely useful

become important.

Google says LocalBusiness structured data can help it understand business details for businesses that qualify as local businesses. ([Google for Developers][6])

But:

> **Do not create fake city pages.**

Don't make:

```text
/web-development-delhi
/web-development-mumbai
/web-development-bangalore
/web-development-hyderabad
...
```

with basically identical copy.

That is exactly the kind of scaled, low-value strategy we should avoid.

---

# 19. International SEO

For international visitors, I wouldn't create:

```text
India page
USA page
UK page
Germany page
Australia page
```

yet.

The main website can simply communicate:

> Working with businesses and teams in India and internationally.

Later, actual market-specific pages can be created when there is real demand and useful differentiation.

---

# 20. AI SEO — the important part

There's a lot of garbage online about:

> LLM SEO
> GEO
> AEO
> AI SEO hacks
> llms.txt
> AI schema
> prompt optimization

We need to separate legitimate engineering from marketing hype.

Google's own current guidance says there are **no additional technical requirements or special schema required** for AI Overviews/AI Mode. It explicitly says you don't need to create AI text files such as `llms.txt` for Google AI-search visibility. ([Google for Developers][1])

So don't build Oxlate around an imaginary "AI SEO framework."

Instead optimize for:

```text
Crawlability
↓
Indexability
↓
Entity clarity
↓
Textual clarity
↓
Original content
↓
Internal linking
↓
Structured data
↓
External authority
```

That is the real AI-search foundation.

---

# 21. But there IS one additional AI consideration: crawler access

OpenAI currently documents `OAI-SearchBot` for search discovery and says sites should not block it if they want content to be discoverable in ChatGPT search. ([OpenAI Help Center][7])

So your robots strategy should be deliberate.

Something like:

```text
User-agent: *
Allow: /

User-agent: OAI-SearchBot
Allow: /

Sitemap: https://oxlate.com/sitemap.xml
```

And keep:

```text
/api/
```

blocked where appropriate.

You also need to make sure Cloudflare/WAF/bot protection doesn't accidentally return 403 to legitimate crawlers; OpenAI explicitly calls this out. ([OpenAI Help Center][8])

---

# 22. Do we need llms.txt?

For this project:

### No.

I would not make it a dependency.

You could technically publish one as an experimental machine-readable document, but I would not put engineering effort into it as an SEO requirement.

Google's current guidance specifically lists unnecessary AI text files like `llms.txt` among tactics you can ignore for Google Search AI features. ([Google for Developers][2])

Our better investment is:

> excellent HTML + excellent content + excellent structured data + external entity signals.

---

# 23. The website needs an entity graph

This is something I would deliberately build into Oxlate.

Think of search/AI understanding like:

```text
                  OXLATE
                    │
          ┌─────────┼──────────┐
          │         │          │
      Organization Services   Website
          │         │
          │    ┌────┼────┐
          │    │    │    │
          │   Web Mobile Software
          │
       Founded 2025
          │
       Founder
          │
     Independent Work
```

And then external sources reinforce the same entity:

```text
Oxlate website
     ↕
LinkedIn
     ↕
GitHub
     ↕
Google Business Profile (if applicable)
     ↕
Bing Webmaster
     ↕
directories / publications / genuine mentions
```

That's much more valuable long-term than stuffing "web development company India" 47 times onto a page.

---

# 24. External "registries" you should actually do

This is what I think you mean by the **registry layer**.

I'd divide them into three levels.

## Essential

### Google Search Console

Verify the domain and submit:

```text
/sitemap.xml
```

Google explicitly recommends submitting the sitemap via Search Console and using URL Inspection to verify how Google sees pages. ([Google Help][9])

### Bing Webmaster Tools

Verify the domain.

It now includes SEO/GEO tools, search performance, site scanning and diagnostics. ([Search - Microsoft Bing][10])

### Bing IndexNow

Worth implementing once the site has actual pages/content changing over time.

Bing recommends IndexNow for efficient URL-change notification. ([Search - Microsoft Bing][11])

### Google Analytics

For conversion/behavior measurement.

---

# 25. Brand/entity registrations

These are not all "SEO tools."

They're **entity establishment**.

Depending on what actually exists and is legitimate:

* LinkedIn company page
* GitHub organization
* Google Business Profile
* Bing Places
* relevant business directory profiles
* official company registration information
* social profiles using exactly the same company name/logo/domain

The key word is **consistency**.

Don't have:

```text
Oxlate
Oxlate Technologies
Oxlate Labs
Oxlate Digital
Oxlate Software
```

randomly across platforms.

Pick the actual legal/public brand identity.

---

# 26. `sameAs` needs discipline

Your current:

```typescript
sameAs: [
  'https://twitter.com/oxlate',
  'https://github.com/oxlate',
  'https://linkedin.com/company/oxlate',
]
```

is good **only if all three are real and controlled by Oxlate**.

Do not include placeholder social profiles.

A fake or dead profile is worse than no profile.

And for each external profile:

```text
Oxlate
same logo
same domain
same description
same basic company facts
```

That creates consistency.

---

# 27. Search Console becomes your SEO command center

Once live, don't just submit the sitemap and forget it.

Watch:

```text
Indexing
Search queries
Pages
Impressions
Clicks
CTR
Core Web Vitals
Manual actions
Enhancements
```

Google's current AI guidance also says AI-feature visibility is measured within Search Console, including a Generative AI performance report. ([Google for Developers][2])

That's important for us.

We can eventually see whether Oxlate is being surfaced in generative search experiences rather than guessing.

---

# 28. Bing is now particularly relevant for "AI SEO"

Bing isn't just giving you classic search analytics anymore.

Its current Webmaster Tools positioning explicitly includes **SEO/GEO tools**, keyword research, backlinks, SEO/GEO reporting and Site Scan. ([Search - Microsoft Bing][10])

So after launch I'd absolutely verify Oxlate there.

---

# 29. Technical SEO checklist for your Next.js app

Your current audit says:

> Lighthouse 95+

Good target, but don't reduce SEO to Lighthouse.

I would establish these hard requirements:

### Crawl

```text
200 status
robots allows crawling
no accidental auth
no bot-blocking
```

### Index

```text
indexable HTML
canonical URL
no accidental noindex
```

### Rendering

```text
important text server-rendered / accessible
JS doesn't hide core content
```

### URLs

```text
stable
lowercase
clean
canonical
```

### Internal links

```text
real <a href>
not only JS click handlers
```

### Images

```text
alt
dimensions
appropriate format
lazy loading where appropriate
priority loading for hero/LCP image
```

### Performance

```text
LCP
INP
CLS
```

### Mobile

```text
responsive
readable typography
touch targets
no horizontal overflow
```

Google's generative-AI guidance explicitly continues to emphasize crawlability, internal linking, page experience, textual content and JavaScript SEO. ([Google for Developers][3])

---

# 30. One major concern with YOUR design

This is where SEO and the visual concept collide.

Your hero architecture is likely going to use:

* SVG
* animation
* transforms
* oversized elements
* parallax
* perhaps canvas
* possibly image layers

That's fine.

But **never make the actual information architecture dependent on animation state**.

For example, don't do:

```text
JS animation finishes
→ title gets injected
→ service text appears
```

Instead:

```html
<h1>...</h1>
<p>...</p>
```

already exists.

Animation merely changes:

```text
opacity
transform
position
scale
```

That way:

**user sees animation**

while:

**crawler sees a normal document.**

That is exactly the kind of architecture I want for Oxlate.

---

# 31. Structured data should eventually look like one graph

Instead of throwing several unrelated JSON-LD blocks everywhere, I'd prefer a connected graph:

```text
@graph

Organization
     │
     ├── WebSite
     │
     ├── Service: Web Development
     │
     ├── Service: Mobile Development
     │
     └── Service: Custom Software
```

And project pages can have their own appropriate structured data where supported/appropriate.

This isn't about getting a magic rich snippet.

The main value is **machine-readable clarity**.

Google says structured data can help it understand an organization and recommends that structured data accurately represent the visible content. ([Google for Developers][4])

---

# 32. Don't waste time on FAQ schema

This is an important update to your old documentation.

Your audit appears to treat FAQ schema as something worth considering.

Google has now deprecated the FAQ rich result feature; it stopped appearing in Google Search starting **May 7, 2026**. ([Google for Developers][12])

We can still write FAQs because they're useful to humans.

But:

> **Don't build the SEO strategy around FAQ rich results.**

---

# 33. Sitemap

Your current sitemap approach is fine for one page.

But once we add real pages:

```text
/
 /services
 /services/web-development
 /services/mobile-app-development
 /work
 /work/project-a
 /about
 /contact
 /insights/...
```

the sitemap should represent actual canonical public URLs.

Don't put:

```text
/api/*
/_internal/*
/preview/*
/draft/*
```

into it.

And don't set:

```text
changeFrequency: 'weekly'
```

just because it sounds good.

The values should reflect actual content behavior.

---

# 34. Robots

Your current:

```typescript
disallow: ['/api/']
```

is reasonable.

But I would think about robots in terms of **specific crawlers**, not just:

```text
User-agent: *
```

especially because AI/search crawlers are now part of your discovery strategy.

We need to test:

```text
Googlebot
Bingbot
OAI-SearchBot
```

and make sure the infrastructure doesn't independently block them.

---

# 35. Canonicals

Every indexable page should have one.

For example:

```text
https://oxlate.com/
https://oxlate.com/services/web-development
https://oxlate.com/work/project-name
```

Avoid:

```text
/?utm_source=x
/?ref=x
/?campaign=x
```

becoming canonical pages.

Next.js metadata makes this easy.

---

# 36. Breadcrumbs

Not necessary on your initial single-page homepage.

Once you have nested pages:

```text
Home
→ Services
→ Web Development
```

then breadcrumbs become useful.

Google supports `BreadcrumbList` structured data for this purpose and recommends testing structured data through its tooling. ([Google for Developers][13])

---

# 37. The content strategy is actually more important than the metadata

This is the biggest thing.

Your website can have perfect:

```text
title
description
schema
sitemap
robots
canonical
OG
favicon
```

and still be invisible.

Because you're a new domain with essentially no authority.

So the next phase after the website should be:

### First-party authority

Independent project pages.

Technical writeups.

Original engineering explanations.

Actual product screenshots.

Actual demonstrations.

### External authority

Legitimate company profiles.

Mentions.

Links.

Founder/company presence.

Relevant communities/publications where genuine.

Google's current AI guidance specifically emphasizes unique, useful, non-commodity content and warns against generating huge volumes of low-value content just to capture AI/search queries. ([Google for Developers][14])

---

# 38. Your "AI SEO" content should answer real buyer questions

Not:

> What is React?

That's not going to establish Oxlate.

Instead:

> How much does a business website actually need to do?

> When should a business build a custom web application instead of using SaaS?

> What should an SMB prepare before building its first website?

> Website vs web application: what's the difference?

> How does an Android application connect to an existing business system?

Those pieces can eventually attract the exact people you're targeting.

And crucially:

**they can demonstrate expertise without pretending to have client case studies.**

---

# 39. This gives us a very strong long-term architecture

I'd structure Oxlate's public SEO universe as:

```text
                         OXLATE
                           │
              ┌────────────┴────────────┐
              │                         │
           HOMEPAGE                 ENTITY
              │                         │
      ┌───────┼────────┐         LinkedIn/GitHub/etc
      │       │        │
     WEB    MOBILE   SOFTWARE
      │       │        │
      └───────┼────────┘
              │
          INDEPENDENT
            WORK
              │
          ENGINEERING
           INSIGHTS
              │
        EXTERNAL SIGNALS
              │
      SEARCH + AI DISCOVERY
```

That is the system I'd build.

---

# 40. What I would actually implement right now

Don't try to do everything at once.

## Phase 1 — before launch

```text
[ ] Final title
[ ] Final description
[ ] Canonical
[ ] OG image
[ ] Twitter/X card
[ ] Favicon
[ ] Apple icon
[ ] One H1
[ ] Correct H2 hierarchy
[ ] Semantic HTML
[ ] Image alt
[ ] Image filenames
[ ] robots.ts
[ ] sitemap.ts
[ ] Organization JSON-LD
[ ] WebSite JSON-LD
[ ] Service JSON-LD
[ ] sameAs verified
[ ] metadataBase
[ ] 200 response
[ ] no accidental noindex
[ ] mobile
[ ] Core Web Vitals
```

## Phase 2 — registration

```text
[ ] Google Search Console
[ ] Bing Webmaster Tools
[ ] Bing IndexNow
[ ] Google Analytics
[ ] LinkedIn company
[ ] GitHub organization
[ ] Google Business Profile, if eligible
[ ] other legitimate profiles
```

## Phase 3 — authority

```text
[ ] Independent project pages
[ ] Founder/developer profile
[ ] Technical articles
[ ] Original engineering content
[ ] Genuine backlinks / mentions
```

---

# 41. And page-by-page, this is how I want us to work

Rather than trying to implement all SEO from the current document immediately, I suggest we now design the site **one page/section at a time** with a fixed SEO contract.

For every section we'll specify:

```text
SECTION
↓
Visual purpose
↓
User purpose
↓
SEO purpose
↓
H tag
↓
Visible text requirements
↓
Internal links
↓
Images + alt
↓
Schema
↓
Metadata
↓
AI/search interpretation
↓
Technical implementation
```

For the homepage, that becomes:

```text
HOME
├── Hero
├── Capabilities
├── Independent Work
├── Approach
├── About
├── Contact
└── Footer
```

And then separately:

```text
GLOBAL SEO
├── metadata
├── robots
├── sitemap
├── canonical
├── JSON-LD
├── favicons
├── OG
├── crawler access
├── Search Console
├── Bing
└── analytics
```

**That is the right next step.**

Because now we have two systems that need to fit together:

**the visual Oxlate experience you designed**
and
**the machine-readable Oxlate underneath it.**

The goal isn't to make the page look SEO-friendly. It is to make the beautiful page **technically honest, semantically legible, crawlable, and entity-consistent**. That will serve Google Search, AI search, Bing, and future agentic browsers without sacrificing the visual identity. ([Google for Developers][1])

### Our immediate next move

We should start with **`/` Homepage → Hero**, and I would define it completely: exact H1/H2 structure, metadata, semantic HTML structure, JSON-LD relationship, image/animation SEO rules, internal-anchor strategy, OpenGraph treatment, and what the AI/search engine should be able to conclude from that first section.

[1]: https://developers.google.com/search/docs/appearance/ai-features?kgs=aa0bcc3d152ed142&utm_source=chatgpt.com "AI Features and Your Website | Google Search Central  |  Documentation  |  Google for Developers"
[2]: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?authuser=4&hl=en&utm_source=chatgpt.com "Google's Guide to Optimizing for Generative AI Features on Google Search | Google Search Central  |  Documentation  |  Google for Developers"
[3]: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?utm_source=chatgpt.com "Google's Guide to Optimizing for Generative AI Features on Google Search | Google Search Central  |  Documentation  |  Google for Developers"
[4]: https://developers.google.com/search/docs/appearance/structured-data/organization?authuser=19&utm_source=chatgpt.com "Organization Schema Markup | Google Search Central  |  Documentation  |  Google for Developers"
[5]: https://schema.org/Service?utm_source=chatgpt.com "Service - Schema.org Type"
[6]: https://developers.google.com/search/docs/appearance/structured-data/local-business?utm_source=chatgpt.com "Local Business (LocalBusiness) Structured Data | Google Search Central  |  Documentation  |  Google for Developers"
[7]: https://help.openai.com/en/articles/12627856-publishers-and-developers-faq%23%3A~%3Atext%3DChatGPT%20automatically%20includes%20the%20UTM%20parameter%20utm_source%3Dchatgpt.com%20in%20referral%20URLs%2C%20enabling%20clear%20tracking%20and%20analysis%20of%20inbound%20traffic%20from%20ChatGPT%20search%20results?utm_source=chatgpt.com "Publishers and Developers - FAQ | OpenAI Help Center"
[8]: https://help.openai.com/en/articles/20001243-advertiser-guidance-for-allowing-openai-web-crawlers?utm_source=chatgpt.com "Advertiser Guidance for Allowing OpenAI Web Crawlers | OpenAI Help Center"
[9]: https://support.google.com/webmasters/answer/7451001?hl=en&utm_source=chatgpt.com "Sitemaps report - Search Console Help"
[10]: https://www.bing.com/webmasters/about?lang=en&utm_source=chatgpt.com "Bing Webmaster Tools"
[11]: https://www.bing.com/indexnow?utm_source=chatgpt.com "Why IndexNow | Bing Webmaster Tools"
[12]: https://developers.google.com/search/updates?utm_source=chatgpt.com "Latest Google Search Documentation Updates | Google Search Central  |  What's new  |  Google for Developers"
[13]: https://developers.google.com/search/docs/appearance/structured-data/breadcrumb?utm_source=chatgpt.com "How To Add Breadcrumb (BreadcrumbList) Markup | Google Search Central  |  Documentation  |  Google for Developers"
[14]: https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search?hl=en&utm_source=chatgpt.com "Top ways to ensure your content performs well in Google's AI experiences on Search  |  Google Search Central Blog  |  Google for Developers"
Yes. Now we should treat SEO as part of the **website architecture**, not as something we bolt onto `layout.tsx` at the end.

And because Oxlate is a new company with very little external authority, I would be especially careful about one thing:

> **Do not try to “AI SEO” your way around the lack of authority. Build a site that search engines and AI systems can confidently understand, while we gradually build the external signals that establish Oxlate as a real entity.**

Google's current guidance is quite explicit: AI Overviews/AI Mode do not require a secret AI markup or special "GEO" trick. The same fundamentals—crawlability, indexability, useful original content, internal links, good page experience, text that systems can access, and structured data matching visible content—remain the foundation. Google also explicitly says not to waste effort on things like `llms.txt` as an AI-search hack. ([Google for Developers][1])

So let's build the **Oxlate SEO system** properly.

---

# 1. First: change the current SEO strategy

Your existing documentation is a decent technical starting point, but there are several things I would change.

### Current positioning

You currently have keywords like:

* Web application development
* React 19 & Next.js agency
* Mobile application development
* Custom software development company
* Premium full-stack web engineering
* Software design systems
* technical architecture

That's too much for the current company.

It risks producing a website that tells search engines:

> "We are an agency that does basically everything."

But our actual strategic position is narrower.

I'd make the semantic center:

### Primary

**Web development + mobile application development**

### Secondary

**Custom web applications + business software**

### Supporting technologies

React / Next.js / React Native / TypeScript / Node.js / PostgreSQL

Technology names should support the service proposition, not become the proposition.

For example:

> "We build custom web applications with React and Next.js."

is useful.

But:

> "React 19 / Next.js / TypeScript / Tailwind / GraphQL / Docker / PostgreSQL development agency"

is mostly developer-facing noise.

---

# 2. The real SEO architecture

Even if the visual site remains one scrolling page, I would architect the SEO/content system around these conceptual pages:

```text
/
├── /services
│   ├── /services/web-development
│   ├── /services/mobile-app-development
│   └── /services/custom-software
│
├── /work
│   └── /work/[project]
│
├── /about
│
├── /contact
│
└── /insights
    └── /insights/[slug]
```

But **I would not necessarily launch all of these immediately.**

Your public website can initially remain:

```text
/
```

with a very strong single-page experience.

Then you can create indexable supporting pages as the content and actual work justify them.

That's important because Google explicitly warns against manufacturing lots of low-value pages just to capture search variations. Their current AI-search guidance specifically cautions against creating pages for every query variation merely to manipulate search/AI results. ([Google for Developers][2])

---

# 3. Homepage SEO architecture

This is where your current design and SEO need to meet.

Your homepage should have a semantic structure roughly like:

```html
<header>
<nav>
</nav>
</header>

<main>

<section id="hero">
    <h1>...</h1>
</section>

<section id="capabilities">
    <h2>...</h2>
</section>

<section id="work">
    <h2>...</h2>
</section>

<section id="approach">
    <h2>...</h2>
</section>

<section id="about">
    <h2>...</h2>
</section>

<section id="contact">
    <h2>...</h2>
</section>

</main>

<footer>
</footer>
```

Visually you can make it look completely unconventional.

Search engines don't care that your design is unconventional.

They care that the underlying document is understandable.

Google specifically recommends semantic HTML where practical and stresses that important content needs to be available in textual form, including for generative AI search. ([Google for Developers][3])

---

# 4. HERO — SEO requirements

Your hero is visually going to be very artistic.

That's fine.

But the actual HTML underneath must be boringly clear.

## One H1 only

Something along the lines of:

> Web and mobile products, built with precision.

or

> Web development and mobile applications, built with precision.

I prefer the first from a brand perspective, while the second is more explicit for search.

Then immediately below:

A concise text paragraph explaining exactly what Oxlate does.

The important thing is that the visitor and crawler should understand the company **without interpreting animation**.

Don't put the primary message entirely into:

* SVG paths
* canvas
* WebGL
* animation text
* image text

The visible text itself needs to exist in HTML.

Google says important content should be available in textual form and that JavaScript sites need to follow normal JavaScript SEO best practices. ([Google for Developers][1])

---

# 5. HERO — metadata

Homepage:

### Title

I'd move away from:

> Oxlate — Premium Technology Partner

because it is elegant but not very descriptive.

Something closer to:

> **Oxlate — Web & Mobile Development Partner**

or:

> **Oxlate — Web Development & Mobile Applications**

Then the brand positioning can live in the description.

### Meta description

For example:

> Oxlate builds custom websites, web applications and mobile products for businesses and teams that need thoughtful design and disciplined engineering.

That's much more semantically useful.

Don't stuff:

> React Next.js Node TypeScript PostgreSQL agency India USA...

into the description.

---

# 6. HERO — OpenGraph

Create:

```text
/public/og/oxlate-default.png
```

1200 × 630.

But don't make it a generic:

> "Oxlate — Premium Technology Partner"

marketing graphic.

Make it visually consistent with your brand:

```text
Warm ivory
Huge black structural geometry
Oxlate mark
Small bronze detail
Short positioning line
```

One visual identity everywhere.

---

# 7. CAPABILITIES SECTION

This section is extremely important for SEO because it establishes **service entities**.

Don't make the page say only:

> Web / Mobile / Software

That's beautiful but semantically weak.

Instead the visible copy should clearly establish:

### Web Development

Custom websites and web applications designed around your business, users and operational needs.

### Mobile Application Development

Mobile applications for Android and cross-platform products built around real user workflows.

### Custom Software

Business applications, dashboards and internal systems built around processes that off-the-shelf software cannot properly support.

Now search engines have a much clearer understanding of what Oxlate actually sells.

---

# 8. Should these become separate pages?

Eventually: **yes**.

But only when there is enough legitimate content to justify them.

For example:

```text
/services/web-development
```

could eventually contain:

* what web development means
* what Oxlate builds
* website vs web application
* technology choices
* development process
* examples
* FAQs
* CTA

Likewise:

```text
/services/mobile-app-development
```

etc.

That allows Oxlate to rank for specific service intent without turning the homepage into an SEO document.

---

# 9. WORK / PORTFOLIO

This is probably your most important SEO/content section after the service section.

But remember your trust strategy.

Your site must explicitly distinguish:

### Client Work

from

### Independent Projects

At the current stage, use:

> **Independent Project**

or

> **Founding Developer's Work**

directly in the structured content and visible interface.

Don't create schema that implies clients exist when they don't.

---

# 10. Independent project pages

This is where I would eventually create pages like:

```text
/work/project-name
```

Each can have:

```text
Project title
Independent Project

What it is
What problem it explores
What was built
Architecture
Technologies
Screenshots
Technical decisions
What was learned
```

That's excellent SEO material because it is **first-party evidence of capability**.

And unlike fake case studies, it's honest.

For example:

> Independent project exploring real-time classroom infrastructure using React, Node.js and PostgreSQL.

That's extremely useful semantic information.

---

# 11. Image SEO becomes important here

Because your website is going to be highly visual.

Every meaningful image should have:

```html
alt="Oxlate independent project showing a real-time classroom dashboard"
```

not:

```html
alt="image"
```

and definitely not:

```html
alt="Oxlate premium technology partner"
```

for every image.

The alt text describes the **actual image**.

And filenames matter too.

Prefer:

```text
oxlate-real-time-classroom-dashboard.webp
```

over:

```text
img_4838.webp
```

Google's current AI-search guidance specifically recommends supporting textual content with high-quality relevant images and following normal image SEO practices. ([Google for Developers][1])

---

# 12. APPROACH section

This isn't primarily an SEO keyword section.

It's a **semantic trust section**.

You can establish ideas such as:

> Product thinking
> Technical architecture
> Design systems
> Direct engineering involvement
> Focused builds

This helps AI/search systems understand the difference between:

> Oxlate = software company

and:

> Oxlate = random freelancer who makes websites.

That's important.

---

# 13. ABOUT section

This is where we introduce the entity itself.

Something like:

> Oxlate is a technology company founded in 2025, focused on web development, mobile applications and custom business software.

This is much more useful than:

> We're a passionate group of creators...

You want clear factual entity statements.

For AI systems in particular, think:

> **Can a machine answer "What is Oxlate?" from this page without guessing?**

The answer should be yes.

---

# 14. ABOUT — entity consistency

This is where structured data becomes valuable.

Your Organization schema should eventually contain consistent:

```text
name
alternateName
url
logo
description
email
telephone
address if applicable
sameAs
foundingDate
```

Google's current Organization documentation recommends using relevant organizational information such as name, logo, URL and—where applicable—real-world presence information such as address or telephone. ([Google for Developers][4])

Don't fabricate any of it.

Especially:

* employee count
* offices
* awards
* clients
* ratings

---

# 15. BIG CHANGE TO YOUR CURRENT JSON-LD

Your current:

```typescript
'@type': 'Organization'
```

is correct.

I would **not** blindly change it to:

```text
ProfessionalService
```

The current Schema.org ecosystem has actually deprecated the generic `ProfessionalService` type because of ambiguity; `Service` is the more appropriate concept for representing an offered service. 

For Oxlate, I'd rather have:

```text
Organization
    ├── Service
    ├── Service
    └── Service
```

with the services matching the visible page content.

---

# 16. Service schema

Eventually you can have:

```json
{
  "@type": "Service",
  "name": "Web Development",
  "serviceType": "Web development",
  "provider": {
    "@id": "https://oxlate.com/#organization"
  }
}
```

Schema.org's `Service` type explicitly supports things like `serviceType`, `provider`, `areaServed`, and related properties. ([Schema.org][5])

But don't create ten imaginary services just because Schema.org permits it.

Three or four accurate services are better.

---

# 17. CONTACT section

This has two jobs.

### Conversion

Obviously.

### Entity reinforcement

You should expose legitimate contact information consistently.

For example:

```text
Email
Phone
Location
Business hours
LinkedIn
GitHub
```

Only publish what you actually want public.

And don't put a fake physical office location just because you think LocalBusiness schema will help.

---

# 18. Local SEO for India

This is a separate layer.

Because one of your target groups is Indian SMBs, we should eventually establish Oxlate's legitimate geographic footprint.

If Oxlate has a real eligible local presence, then:

* Google Business Profile
* consistent NAP information
* Google Maps presence
* local organization/business information
* location-specific landing content where genuinely useful

become important.

Google says LocalBusiness structured data can help it understand business details for businesses that qualify as local businesses. ([Google for Developers][6])

But:

> **Do not create fake city pages.**

Don't make:

```text
/web-development-delhi
/web-development-mumbai
/web-development-bangalore
/web-development-hyderabad
...
```

with basically identical copy.

That is exactly the kind of scaled, low-value strategy we should avoid.

---

# 19. International SEO

For international visitors, I wouldn't create:

```text
India page
USA page
UK page
Germany page
Australia page
```

yet.

The main website can simply communicate:

> Working with businesses and teams in India and internationally.

Later, actual market-specific pages can be created when there is real demand and useful differentiation.

---

# 20. AI SEO — the important part

There's a lot of garbage online about:

> LLM SEO
> GEO
> AEO
> AI SEO hacks
> llms.txt
> AI schema
> prompt optimization

We need to separate legitimate engineering from marketing hype.

Google's own current guidance says there are **no additional technical requirements or special schema required** for AI Overviews/AI Mode. It explicitly says you don't need to create AI text files such as `llms.txt` for Google AI-search visibility. ([Google for Developers][1])

So don't build Oxlate around an imaginary "AI SEO framework."

Instead optimize for:

```text
Crawlability
↓
Indexability
↓
Entity clarity
↓
Textual clarity
↓
Original content
↓
Internal linking
↓
Structured data
↓
External authority
```

That is the real AI-search foundation.

---

# 21. But there IS one additional AI consideration: crawler access

OpenAI currently documents `OAI-SearchBot` for search discovery and says sites should not block it if they want content to be discoverable in ChatGPT search. ([OpenAI Help Center][7])

So your robots strategy should be deliberate.

Something like:

```text
User-agent: *
Allow: /

User-agent: OAI-SearchBot
Allow: /

Sitemap: https://oxlate.com/sitemap.xml
```

And keep:

```text
/api/
```

blocked where appropriate.

You also need to make sure Cloudflare/WAF/bot protection doesn't accidentally return 403 to legitimate crawlers; OpenAI explicitly calls this out. ([OpenAI Help Center][8])

---

# 22. Do we need llms.txt?

For this project:

### No.

I would not make it a dependency.

You could technically publish one as an experimental machine-readable document, but I would not put engineering effort into it as an SEO requirement.

Google's current guidance specifically lists unnecessary AI text files like `llms.txt` among tactics you can ignore for Google Search AI features. ([Google for Developers][2])

Our better investment is:

> excellent HTML + excellent content + excellent structured data + external entity signals.

---

# 23. The website needs an entity graph

This is something I would deliberately build into Oxlate.

Think of search/AI understanding like:

```text
                  OXLATE
                    │
          ┌─────────┼──────────┐
          │         │          │
      Organization Services   Website
          │         │
          │    ┌────┼────┐
          │    │    │    │
          │   Web Mobile Software
          │
       Founded 2025
          │
       Founder
          │
     Independent Work
```

And then external sources reinforce the same entity:

```text
Oxlate website
     ↕
LinkedIn
     ↕
GitHub
     ↕
Google Business Profile (if applicable)
     ↕
Bing Webmaster
     ↕
directories / publications / genuine mentions
```

That's much more valuable long-term than stuffing "web development company India" 47 times onto a page.

---

# 24. External "registries" you should actually do

This is what I think you mean by the **registry layer**.

I'd divide them into three levels.

## Essential

### Google Search Console

Verify the domain and submit:

```text
/sitemap.xml
```

Google explicitly recommends submitting the sitemap via Search Console and using URL Inspection to verify how Google sees pages. ([Google Help][9])

### Bing Webmaster Tools

Verify the domain.

It now includes SEO/GEO tools, search performance, site scanning and diagnostics. ([Search - Microsoft Bing][10])

### Bing IndexNow

Worth implementing once the site has actual pages/content changing over time.

Bing recommends IndexNow for efficient URL-change notification. ([Search - Microsoft Bing][11])

### Google Analytics

For conversion/behavior measurement.

---

# 25. Brand/entity registrations

These are not all "SEO tools."

They're **entity establishment**.

Depending on what actually exists and is legitimate:

* LinkedIn company page
* GitHub organization
* Google Business Profile
* Bing Places
* relevant business directory profiles
* official company registration information
* social profiles using exactly the same company name/logo/domain

The key word is **consistency**.

Don't have:

```text
Oxlate
Oxlate Technologies
Oxlate Labs
Oxlate Digital
Oxlate Software
```

randomly across platforms.

Pick the actual legal/public brand identity.

---

# 26. `sameAs` needs discipline

Your current:

```typescript
sameAs: [
  'https://twitter.com/oxlate',
  'https://github.com/oxlate',
  'https://linkedin.com/company/oxlate',
]
```

is good **only if all three are real and controlled by Oxlate**.

Do not include placeholder social profiles.

A fake or dead profile is worse than no profile.

And for each external profile:

```text
Oxlate
same logo
same domain
same description
same basic company facts
```

That creates consistency.

---

# 27. Search Console becomes your SEO command center

Once live, don't just submit the sitemap and forget it.

Watch:

```text
Indexing
Search queries
Pages
Impressions
Clicks
CTR
Core Web Vitals
Manual actions
Enhancements
```

Google's current AI guidance also says AI-feature visibility is measured within Search Console, including a Generative AI performance report. ([Google for Developers][2])

That's important for us.

We can eventually see whether Oxlate is being surfaced in generative search experiences rather than guessing.

---

# 28. Bing is now particularly relevant for "AI SEO"

Bing isn't just giving you classic search analytics anymore.

Its current Webmaster Tools positioning explicitly includes **SEO/GEO tools**, keyword research, backlinks, SEO/GEO reporting and Site Scan. ([Search - Microsoft Bing][10])

So after launch I'd absolutely verify Oxlate there.

---

# 29. Technical SEO checklist for your Next.js app

Your current audit says:

> Lighthouse 95+

Good target, but don't reduce SEO to Lighthouse.

I would establish these hard requirements:

### Crawl

```text
200 status
robots allows crawling
no accidental auth
no bot-blocking
```

### Index

```text
indexable HTML
canonical URL
no accidental noindex
```

### Rendering

```text
important text server-rendered / accessible
JS doesn't hide core content
```

### URLs

```text
stable
lowercase
clean
canonical
```

### Internal links

```text
real <a href>
not only JS click handlers
```

### Images

```text
alt
dimensions
appropriate format
lazy loading where appropriate
priority loading for hero/LCP image
```

### Performance

```text
LCP
INP
CLS
```

### Mobile

```text
responsive
readable typography
touch targets
no horizontal overflow
```

Google's generative-AI guidance explicitly continues to emphasize crawlability, internal linking, page experience, textual content and JavaScript SEO. ([Google for Developers][3])

---

# 30. One major concern with YOUR design

This is where SEO and the visual concept collide.

Your hero architecture is likely going to use:

* SVG
* animation
* transforms
* oversized elements
* parallax
* perhaps canvas
* possibly image layers

That's fine.

But **never make the actual information architecture dependent on animation state**.

For example, don't do:

```text
JS animation finishes
→ title gets injected
→ service text appears
```

Instead:

```html
<h1>...</h1>
<p>...</p>
```

already exists.

Animation merely changes:

```text
opacity
transform
position
scale
```

That way:

**user sees animation**

while:

**crawler sees a normal document.**

That is exactly the kind of architecture I want for Oxlate.

---

# 31. Structured data should eventually look like one graph

Instead of throwing several unrelated JSON-LD blocks everywhere, I'd prefer a connected graph:

```text
@graph

Organization
     │
     ├── WebSite
     │
     ├── Service: Web Development
     │
     ├── Service: Mobile Development
     │
     └── Service: Custom Software
```

And project pages can have their own appropriate structured data where supported/appropriate.

This isn't about getting a magic rich snippet.

The main value is **machine-readable clarity**.

Google says structured data can help it understand an organization and recommends that structured data accurately represent the visible content. ([Google for Developers][4])

---

# 32. Don't waste time on FAQ schema

This is an important update to your old documentation.

Your audit appears to treat FAQ schema as something worth considering.

Google has now deprecated the FAQ rich result feature; it stopped appearing in Google Search starting **May 7, 2026**. ([Google for Developers][12])

We can still write FAQs because they're useful to humans.

But:

> **Don't build the SEO strategy around FAQ rich results.**

---

# 33. Sitemap

Your current sitemap approach is fine for one page.

But once we add real pages:

```text
/
 /services
 /services/web-development
 /services/mobile-app-development
 /work
 /work/project-a
 /about
 /contact
 /insights/...
```

the sitemap should represent actual canonical public URLs.

Don't put:

```text
/api/*
/_internal/*
/preview/*
/draft/*
```

into it.

And don't set:

```text
changeFrequency: 'weekly'
```

just because it sounds good.

The values should reflect actual content behavior.

---

# 34. Robots

Your current:

```typescript
disallow: ['/api/']
```

is reasonable.

But I would think about robots in terms of **specific crawlers**, not just:

```text
User-agent: *
```

especially because AI/search crawlers are now part of your discovery strategy.

We need to test:

```text
Googlebot
Bingbot
OAI-SearchBot
```

and make sure the infrastructure doesn't independently block them.

---

# 35. Canonicals

Every indexable page should have one.

For example:

```text
https://oxlate.com/
https://oxlate.com/services/web-development
https://oxlate.com/work/project-name
```

Avoid:

```text
/?utm_source=x
/?ref=x
/?campaign=x
```

becoming canonical pages.

Next.js metadata makes this easy.

---

# 36. Breadcrumbs

Not necessary on your initial single-page homepage.

Once you have nested pages:

```text
Home
→ Services
→ Web Development
```

then breadcrumbs become useful.

Google supports `BreadcrumbList` structured data for this purpose and recommends testing structured data through its tooling. ([Google for Developers][13])

---

# 37. The content strategy is actually more important than the metadata

This is the biggest thing.

Your website can have perfect:

```text
title
description
schema
sitemap
robots
canonical
OG
favicon
```

and still be invisible.

Because you're a new domain with essentially no authority.

So the next phase after the website should be:

### First-party authority

Independent project pages.

Technical writeups.

Original engineering explanations.

Actual product screenshots.

Actual demonstrations.

### External authority

Legitimate company profiles.

Mentions.

Links.

Founder/company presence.

Relevant communities/publications where genuine.

Google's current AI guidance specifically emphasizes unique, useful, non-commodity content and warns against generating huge volumes of low-value content just to capture AI/search queries. ([Google for Developers][14])

---

# 38. Your "AI SEO" content should answer real buyer questions

Not:

> What is React?

That's not going to establish Oxlate.

Instead:

> How much does a business website actually need to do?

> When should a business build a custom web application instead of using SaaS?

> What should an SMB prepare before building its first website?

> Website vs web application: what's the difference?

> How does an Android application connect to an existing business system?

Those pieces can eventually attract the exact people you're targeting.

And crucially:

**they can demonstrate expertise without pretending to have client case studies.**

---

# 39. This gives us a very strong long-term architecture

I'd structure Oxlate's public SEO universe as:

```text
                         OXLATE
                           │
              ┌────────────┴────────────┐
              │                         │
           HOMEPAGE                 ENTITY
              │                         │
      ┌───────┼────────┐         LinkedIn/GitHub/etc
      │       │        │
     WEB    MOBILE   SOFTWARE
      │       │        │
      └───────┼────────┘
              │
          INDEPENDENT
            WORK
              │
          ENGINEERING
           INSIGHTS
              │
        EXTERNAL SIGNALS
              │
      SEARCH + AI DISCOVERY
```

That is the system I'd build.

---

# 40. What I would actually implement right now

Don't try to do everything at once.

## Phase 1 — before launch

```text
[ ] Final title
[ ] Final description
[ ] Canonical
[ ] OG image
[ ] Twitter/X card
[ ] Favicon
[ ] Apple icon
[ ] One H1
[ ] Correct H2 hierarchy
[ ] Semantic HTML
[ ] Image alt
[ ] Image filenames
[ ] robots.ts
[ ] sitemap.ts
[ ] Organization JSON-LD
[ ] WebSite JSON-LD
[ ] Service JSON-LD
[ ] sameAs verified
[ ] metadataBase
[ ] 200 response
[ ] no accidental noindex
[ ] mobile
[ ] Core Web Vitals
```

## Phase 2 — registration

```text
[ ] Google Search Console
[ ] Bing Webmaster Tools
[ ] Bing IndexNow
[ ] Google Analytics
[ ] LinkedIn company
[ ] GitHub organization
[ ] Google Business Profile, if eligible
[ ] other legitimate profiles
```

## Phase 3 — authority

```text
[ ] Independent project pages
[ ] Founder/developer profile
[ ] Technical articles
[ ] Original engineering content
[ ] Genuine backlinks / mentions
```

---

# 41. And page-by-page, this is how I want us to work

Rather than trying to implement all SEO from the current document immediately, I suggest we now design the site **one page/section at a time** with a fixed SEO contract.

For every section we'll specify:

```text
SECTION
↓
Visual purpose
↓
User purpose
↓
SEO purpose
↓
H tag
↓
Visible text requirements
↓
Internal links
↓
Images + alt
↓
Schema
↓
Metadata
↓
AI/search interpretation
↓
Technical implementation
```

For the homepage, that becomes:

```text
HOME
├── Hero
├── Capabilities
├── Independent Work
├── Approach
├── About
├── Contact
└── Footer
```

And then separately:

```text
GLOBAL SEO
├── metadata
├── robots
├── sitemap
├── canonical
├── JSON-LD
├── favicons
├── OG
├── crawler access
├── Search Console
├── Bing
└── analytics
```

**That is the right next step.**

Because now we have two systems that need to fit together:

**the visual Oxlate experience you designed**
and
**the machine-readable Oxlate underneath it.**

The goal isn't to make the page look SEO-friendly. It is to make the beautiful page **technically honest, semantically legible, crawlable, and entity-consistent**. That will serve Google Search, AI search, Bing, and future agentic browsers without sacrificing the visual identity. ([Google for Developers][1])

### Our immediate next move

We should start with **`/` Homepage → Hero**, and I would define it completely: exact H1/H2 structure, metadata, semantic HTML structure, JSON-LD relationship, image/animation SEO rules, internal-anchor strategy, OpenGraph treatment, and what the AI/search engine should be able to conclude from that first section.

[1]: https://developers.google.com/search/docs/appearance/ai-features?kgs=aa0bcc3d152ed142&utm_source=chatgpt.com "AI Features and Your Website | Google Search Central  |  Documentation  |  Google for Developers"
[2]: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?authuser=4&hl=en&utm_source=chatgpt.com "Google's Guide to Optimizing for Generative AI Features on Google Search | Google Search Central  |  Documentation  |  Google for Developers"
[3]: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?utm_source=chatgpt.com "Google's Guide to Optimizing for Generative AI Features on Google Search | Google Search Central  |  Documentation  |  Google for Developers"
[4]: https://developers.google.com/search/docs/appearance/structured-data/organization?authuser=19&utm_source=chatgpt.com "Organization Schema Markup | Google Search Central  |  Documentation  |  Google for Developers"
[5]: https://schema.org/Service?utm_source=chatgpt.com "Service - Schema.org Type"
[6]: https://developers.google.com/search/docs/appearance/structured-data/local-business?utm_source=chatgpt.com "Local Business (LocalBusiness) Structured Data | Google Search Central  |  Documentation  |  Google for Developers"
[7]: https://help.openai.com/en/articles/12627856-publishers-and-developers-faq%23%3A~%3Atext%3DChatGPT%20automatically%20includes%20the%20UTM%20parameter%20utm_source%3Dchatgpt.com%20in%20referral%20URLs%2C%20enabling%20clear%20tracking%20and%20analysis%20of%20inbound%20traffic%20from%20ChatGPT%20search%20results?utm_source=chatgpt.com "Publishers and Developers - FAQ | OpenAI Help Center"
[8]: https://help.openai.com/en/articles/20001243-advertiser-guidance-for-allowing-openai-web-crawlers?utm_source=chatgpt.com "Advertiser Guidance for Allowing OpenAI Web Crawlers | OpenAI Help Center"
[9]: https://support.google.com/webmasters/answer/7451001?hl=en&utm_source=chatgpt.com "Sitemaps report - Search Console Help"
[10]: https://www.bing.com/webmasters/about?lang=en&utm_source=chatgpt.com "Bing Webmaster Tools"
[11]: https://www.bing.com/indexnow?utm_source=chatgpt.com "Why IndexNow | Bing Webmaster Tools"
[12]: https://developers.google.com/search/updates?utm_source=chatgpt.com "Latest Google Search Documentation Updates | Google Search Central  |  What's new  |  Google for Developers"
[13]: https://developers.google.com/search/docs/appearance/structured-data/breadcrumb?utm_source=chatgpt.com "How To Add Breadcrumb (BreadcrumbList) Markup | Google Search Central  |  Documentation  |  Google for Developers"
[14]: https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search?hl=en&utm_source=chatgpt.com "Top ways to ensure your content performs well in Google's AI experiences on Search  |  Google Search Central Blog  |  Google for Developers"
