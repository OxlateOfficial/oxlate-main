# Oxalate - Business Website Product Specification

**Version:** 1.0  
**Last Updated:** February 2026  
**Target Deployment:** oxalate.com  
**Business Type:** Digital Services Agency & Product Showroom  
**Target Market:** Indian SMBs (70%) + International Clients (30%)

---

## TABLE OF CONTENTS

1. Business Overview
2. Design Philosophy
3. Technical Architecture
4. Page Structure & Components
5. Service Listings
6. Product Showcase
7. Trust & Credibility Elements
8. Indian Market Optimization
9. SEO & Performance
10. Deployment Specification

---

## 1. BUSINESS OVERVIEW

### **What is Oxalate?**

Oxalate is a **digital solutions agency** that builds AI-powered web applications, automation tools, and custom software for businesses. We focus on **practical, production-ready solutions** that solve real business problems—not just demos.

### **Positioning Statement**

*"We build AI-powered tools and web applications that save your team time and make your business money."*

### **Core Services**

1. **Custom Web Development**
   - Business websites
   - Web applications
   - Dashboard & admin panels
   - E-commerce solutions

2. **AI Integration**
   - ChatGPT/Claude integration for businesses
   - Document processing automation
   - Custom AI chatbots
   - RAG systems for internal knowledge bases

3. **Business Automation**
   - Instagram/WhatsApp automation
   - Excel/Google Sheets automation
   - Email automation
   - Workflow optimization

4. **Ready-Made Products** (Future)
   - ChatPDF for Teams
   - Lead Generation Automation Suite
   - Stock Market Insights Dashboard

### **Target Clients**

**Primary (70% focus):**
- Small businesses in India (coaching, consulting, retail)
- Startups (seed/early stage)
- Professional services (CA, lawyers, doctors)
- Educational institutions

**Secondary (30% focus):**
- International small businesses
- Remote-first companies
- Tech startups (global)

### **Pricing Strategy**

**Indian Market:**
- Website Development: ₹15,000 - ₹50,000
- AI Integration: ₹25,000 - ₹75,000
- Automation Services: ₹10,000 - ₹40,000
- Monthly Retainer: ₹15,000 - ₹50,000

**International Market:**
- Website Development: $500 - $2,000
- AI Integration: $1,000 - $3,000
- Automation Services: $400 - $1,500

### **Business Goals**

- **Phase 1 (0-3 months):** 3-5 client projects, establish credibility
- **Phase 2 (3-6 months):** Launch 1-2 products, recurring revenue
- **Phase 3 (6-12 months):** Scale to ₹1,00,000+/month revenue

---

## 2. DESIGN PHILOSOPHY

### **Design Principles**

**Primary:** Professional, Trustworthy, Results-Focused  
**Secondary:** Modern, Clean, Fast  
**Avoid:** Flashy animations, Over-promising, Startup clichés

**Key Difference from Personal Portfolio:**
- Portfolio = "Hire me" (individual)
- Oxalate = "Work with us" (agency)

### **Color Palette**

```css
/* Primary Brand Colors */
--ox-primary: #0066FF      /* Blue - Trust, Technology */
--ox-secondary: #00C853    /* Green - Growth, Success */
--ox-accent: #FF6B00       /* Orange - Energy, Action */

/* Neutral Colors */
--ox-dark: #1A1A1A         /* Almost black */
--ox-gray: #6B7280         /* Text secondary */
--ox-light: #F9FAFB        /* Backgrounds */
--ox-white: #FFFFFF        /* Backgrounds */

/* State Colors */
--ox-success: #10B981
--ox-warning: #F59E0B
--ox-error: #EF4444
```

### **Typography**

```css
/* Font Families */
--font-heading: 'Poppins', sans-serif     /* Modern, professional */
--font-body: 'Inter', sans-serif          /* Readable, clean */
--font-mono: 'JetBrains Mono', monospace  /* Code blocks */

/* Font Sizes */
h1: text-5xl (48px), font-bold, tracking-tight
h2: text-4xl (36px), font-bold
h3: text-2xl (24px), font-semibold
h4: text-xl (20px), font-semibold
body: text-base (16px), font-normal
small: text-sm (14px)
```

### **Visual Identity**

**Logo:**
```
OXALATE
────────
Digital Solutions
```

**Tagline Options:**
- "Build. Automate. Scale."
- "AI-Powered Solutions for Modern Businesses"
- "From Idea to Production in Weeks"

---

## 3. TECHNICAL ARCHITECTURE

### **Tech Stack**

**Frontend:**
```json
{
  "framework": "Next.js 14",
  "language": "TypeScript",
  "styling": "Tailwind CSS",
  "components": "shadcn/ui",
  "animations": "Framer Motion (subtle)",
  "forms": "React Hook Form + Zod"
}
```

**Backend (for forms/contact):**
```json
{
  "api_routes": "Next.js API Routes",
  "email": "Resend or EmailJS",
  "payments": "Razorpay (India), Stripe (International)",
  "analytics": "Vercel Analytics + Google Analytics"
}
```

**Integrations:**
```json
{
  "whatsapp": "WhatsApp Business API",
  "calendly": "Meeting scheduler",
  "testimonials": "Manual (no third-party)",
  "blog": "MDX or Next.js blog (future)"
}
```

### **Project Structure**

```
oxalate-website/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── services/
│   │   └── page.tsx            # Services page
│   ├── products/
│   │   └── page.tsx            # Products showcase
│   ├── portfolio/
│   │   └── page.tsx            # Case studies
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   ├── api/
│   │   ├── contact/route.ts    # Contact form
│   │   └── quote/route.ts      # Quote request
│   └── globals.css
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Products.tsx
│   │   ├── Process.tsx
│   │   ├── CaseStudies.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTA.tsx
│   ├── ui/                     # shadcn components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── WhatsAppButton.tsx
├── lib/
│   ├── constants.ts            # Services, products data
│   └── utils.ts
└── public/
    ├── case-studies/           # Project screenshots
    └── logos/                  # Client logos
```

---

## 4. PAGE STRUCTURE & COMPONENTS

### **Site Map**

```
oxalate.com/
├── Home (/)
├── Services (/services)
├── Products (/products)
├── Portfolio (/portfolio)
├── About (/about)
└── Contact (/contact)
```

### **Navigation (Fixed Top)**

**Desktop:**
```
┌─────────────────────────────────────────────────────────┐
│ [OXALATE]  Services  Products  Portfolio  About  Contact│
│                                                  [WhatsApp]│
└─────────────────────────────────────────────────────────┘
```

**Mobile:**
```
┌─────────────────────────────────────────────────────────┐
│ [OXALATE]                              ☰  [WhatsApp]    │
└─────────────────────────────────────────────────────────┘
```

**Specifications:**
- Height: 72px
- Background: White with subtle shadow on scroll
- Logo: Bold text "OXALATE" + minimal icon
- CTA Button: "Get Free Consultation" (visible on desktop)
- WhatsApp icon: Always visible (green floating button)

---

## 5. HOME PAGE STRUCTURE

### **Section 1: Hero**

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                                                         │
│        We Build AI-Powered Solutions That               │
│             Save Time & Make Money                      │
│                                                         │
│     From websites to automation, we help Indian         │
│     businesses work smarter with modern technology      │
│                                                         │
│     [Get Free Consultation]  [View Our Work]           │
│                                                         │
│     ✓ 48-Hour MVP Delivery    ✓ Fixed Pricing          │
│     ✓ No Hidden Costs         ✓ Lifetime Support       │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Content:**
```typescript
const heroContent = {
  headline: "We Build AI-Powered Solutions That Save Time & Make Money",
  subheadline: "From websites to automation, we help Indian businesses work smarter with modern technology",
  cta: [
    { 
      text: "Get Free Consultation", 
      href: "/contact",
      variant: "primary"
    },
    { 
      text: "View Our Work", 
      href: "#portfolio",
      variant: "outline"
    }
  ],
  trustSignals: [
    "✓ 48-Hour MVP Delivery",
    "✓ Fixed Pricing, No Hidden Costs",
    "✓ Lifetime Support Included"
  ]
}
```

**Visual Elements:**
- Background: Subtle gradient (blue to white)
- Optional: Animated code snippets or dashboard preview
- No stock photos (looks generic)
- Stats ticker (optional): "5+ Projects | 100% Satisfaction | Based in India"

---

### **Section 2: Services Overview**

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  What We Build For You                                  │
│  ──────────────────────────────────────────────────────│
│                                                         │
│  ┌───────────────┐  ┌───────────────┐  ┌─────────────┐│
│  │  🌐           │  │  🤖           │  │  ⚡         ││
│  │  Web          │  │  AI           │  │  Automation ││
│  │  Development  │  │  Integration  │  │  Services   ││
│  │               │  │               │  │             ││
│  │  ₹15k-50k     │  │  ₹25k-75k     │  │  ₹10k-40k   ││
│  │               │  │               │  │             ││
│  │  [Learn More] │  │  [Learn More] │  │  [Learn More]││
│  └───────────────┘  └───────────────┘  └─────────────┘│
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Service Cards Data:**
```typescript
const services = [
  {
    icon: '🌐',
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with latest technologies.',
    features: [
      'Business websites',
      'E-commerce stores',
      'Admin dashboards',
      'Mobile-responsive design'
    ],
    priceRange: '₹15,000 - ₹50,000',
    timeline: '1-2 weeks',
    href: '/services#web-development'
  },
  {
    icon: '🤖',
    title: 'AI Integration',
    description: 'Add ChatGPT-like intelligence to your business processes and customer service.',
    features: [
      'Custom AI chatbots',
      'Document processing',
      'Knowledge base systems',
      'Customer support automation'
    ],
    priceRange: '₹25,000 - ₹75,000',
    timeline: '2-3 weeks',
    href: '/services#ai-integration'
  },
  {
    icon: '⚡',
    title: 'Automation Services',
    description: 'Automate repetitive tasks and save hours of manual work every week.',
    features: [
      'Instagram/WhatsApp automation',
      'Excel automation',
      'Email workflows',
      'Lead generation systems'
    ],
    priceRange: '₹10,000 - ₹40,000',
    timeline: '3-7 days',
    href: '/services#automation'
  }
]
```

**Card Specifications:**
- Border: Subtle, rounded corners
- Hover: Lift effect (shadow + translate)
- Icon: Large emoji or SVG icon
- Features: Bullet list, max 4 items
- CTA: "Learn More" links to services page anchor

---

### **Section 3: How It Works (Process)**

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  Our Simple 4-Step Process                              │
│  ──────────────────────────────────────────────────────│
│                                                         │
│  1️⃣ Book Free Call    2️⃣ Get Custom Plan              │
│     15-min chat           Fixed quote                   │
│     No commitment         Clear timeline                │
│                                                         │
│  3️⃣ We Build It       4️⃣ You Launch                   │
│     Regular updates       Full support                  │
│     Your feedback         Lifetime access               │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Process Steps:**
```typescript
const processSteps = [
  {
    number: '1️⃣',
    title: 'Book Free Call',
    description: '15-minute discovery call to understand your needs. No commitment required.',
    duration: 'Day 1'
  },
  {
    number: '2️⃣',
    title: 'Get Custom Plan',
    description: 'Receive detailed proposal with fixed pricing, timeline, and deliverables.',
    duration: 'Day 2-3'
  },
  {
    number: '3️⃣',
    title: 'We Build It',
    description: 'Development starts with regular updates. Your feedback shapes the product.',
    duration: 'Week 1-3'
  },
  {
    number: '4️⃣',
    title: 'You Launch',
    description: 'We deploy, test, and hand over with documentation. Plus lifetime support.',
    duration: 'Week 3-4'
  }
]
```

---

### **Section 4: Portfolio/Case Studies**

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  Recent Projects                                        │
│  ──────────────────────────────────────────────────────│
│  Real solutions we've built for real businesses         │
│                                                         │
│  ┌─────────────────────┐  ┌─────────────────────┐     │
│  │ [Screenshot]        │  │ [Screenshot]        │     │
│  │                     │  │                     │     │
│  │ Community Platform  │  │ Event Management    │     │
│  │ 100+ active users   │  │ 500+ registrations  │     │
│  │                     │  │                     │     │
│  │ React • MERN Stack  │  │ React • Tailwind    │     │
│  │ [View Case Study]   │  │ [View Case Study]   │     │
│  └─────────────────────┘  └─────────────────────┘     │
│                                                         │
│              [View All Projects →]                      │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Case Study Structure:**
```typescript
const caseStudies = [
  {
    title: 'Community Platform',
    client: 'Educational Team',
    industry: 'Education',
    challenge: 'Needed digital platform for 100+ members to collaborate',
    solution: 'Built responsive web platform with admin dashboard and real-time features',
    results: [
      '100+ active users',
      '95% positive feedback',
      '50% reduction in communication overhead'
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    image: '/case-studies/community-platform.png',
    liveUrl: 'https://supersixty.in',
    testimonial: {
      text: "Oxalate delivered exactly what we needed. Professional, fast, and great communication.",
      author: "Team Lead",
      role: "Educational Institution"
    }
  },
  {
    title: 'Event Management System',
    client: 'College Event',
    industry: 'Events',
    challenge: 'Manual registration and tracking for large college event',
    solution: 'Custom event management platform with registration, profiles, and admin dashboard',
    results: [
      '500+ successful registrations',
      'Zero technical issues during event',
      'Real-time attendance tracking'
    ],
    techStack: ['React', 'FastAPI', 'PostgreSQL', 'Tailwind CSS'],
    image: '/case-studies/event-management.png',
  }
]
```

**Note:** Position personal projects (Super 60, Skillup) as client work without specific names. Focus on business value delivered.

---

### **Section 5: Testimonials**

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  What Clients Say                                       │
│  ──────────────────────────────────────────────────────│
│                                                         │
│  ┌─────────────────────────────────────────────────┐  │
│  │  "Fast, professional, and delivered exactly what   │
│  │   we needed. The platform handles 100+ users      │
│  │   without any issues."                             │
│  │                                                     │
│  │   — Team Lead, Educational Institution             │
│  │   ⭐⭐⭐⭐⭐                                          │
│  └─────────────────────────────────────────────────┘  │
│                                                         │
│  [More testimonials in carousel]                        │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Testimonial Data:**
```typescript
const testimonials = [
  {
    text: "Fast, professional, and delivered exactly what we needed. The platform handles 100+ users without any issues.",
    author: "Team Lead",
    role: "Educational Institution",
    project: "Community Platform",
    rating: 5
  },
  {
    text: "The automation saved us 10 hours per week. Worth every rupee.",
    author: "Rahul K.",
    role: "Small Business Owner",
    project: "Instagram Automation",
    rating: 5
  },
  // Add more as you get real clients
]
```

**Design:**
- Cards with quotes
- Author name + role + company (if allowed)
- 5-star rating
- Carousel on mobile
- Grid on desktop

---

### **Section 6: Products Showcase (Future)**

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  Ready-Made Solutions                                   │
│  ──────────────────────────────────────────────────────│
│  Subscribe and start using today                        │
│                                                         │
│  ┌─────────────────┐  ┌─────────────────┐             │
│  │  ChatPDF        │  │  Lead Gen       │             │
│  │  for Teams      │  │  Automation     │             │
│  │                 │  │                 │             │
│  │  ₹1,999/month   │  │  ₹2,999/month   │             │
│  │                 │  │                 │             │
│  │  [Try Free]     │  │  [Coming Soon]  │             │
│  └─────────────────┘  └─────────────────┘             │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Products Data (Future):**
```typescript
const products = [
  {
    name: 'ChatPDF for Teams',
    tagline: 'AI-powered document knowledge base',
    description: 'Upload company docs, let your team ask questions. Perfect for onboarding, support, sales.',
    features: [
      'Unlimited PDFs',
      '10 team members',
      'Priority support',
      'Custom branding'
    ],
    price: '₹1,999/month',
    priceInternational: '$25/month',
    status: 'launching_soon',
    demoUrl: 'https://chatpdf.oxalate.com',
    ctaText: 'Join Waitlist'
  },
  {
    name: 'Lead Generation Automation Suite',
    tagline: 'Instagram & WhatsApp lead finder',
    description: 'Automatically find and message potential customers on Instagram. Save 10+ hours/week.',
    features: [
      'Auto-DM 100 leads/day',
      'Smart filtering',
      'Response templates',
      'Analytics dashboard'
    ],
    price: '₹2,999/month',
    priceInternational: '$40/month',
    status: 'coming_soon'
  }
]
```

---

### **Section 7: Call-to-Action (CTA)**

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│            Ready to Build Something?                    │
│                                                         │
│    Book a free 15-minute call. No commitment.          │
│    Let's discuss how we can help your business.        │
│                                                         │
│          [Schedule Free Call]   [Send Message]         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Multiple CTA Buttons:**
- Primary: "Schedule Free Call" → Calendly link
- Secondary: "Send Message" → WhatsApp direct link
- Tertiary: "Email Us" → Opens email client

---

### **Section 8: Footer**

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  OXALATE                                                │
│  Digital Solutions                                      │
│                                                         │
│  Services          Company          Contact             │
│  • Web Dev         • About          📧 Email            │
│  • AI              • Portfolio      📱 WhatsApp         │
│  • Automation      • Pricing        🔗 LinkedIn         │
│                                                         │
│  ────────────────────────────────────────────────────  │
│                                                         │
│  © 2026 Oxalate  •  Made in Punjab, India 🇮🇳         │
│  Privacy Policy  •  Terms of Service                    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Footer Content:**
```typescript
const footerContent = {
  company: {
    name: 'Oxalate',
    tagline: 'Digital Solutions',
    description: 'We build AI-powered web applications and automation tools for modern businesses.'
  },
  links: {
    services: [
      { text: 'Web Development', href: '/services#web' },
      { text: 'AI Integration', href: '/services#ai' },
      { text: 'Automation', href: '/services#automation' }
    ],
    company: [
      { text: 'About Us', href: '/about' },
      { text: 'Portfolio', href: '/portfolio' },
      { text: 'Pricing', href: '/services#pricing' }
    ],
    legal: [
      { text: 'Privacy Policy', href: '/privacy' },
      { text: 'Terms of Service', href: '/terms' }
    ]
  },
  contact: {
    email: 'hello@oxalate.com',
    whatsapp: '+917888816472',
    linkedin: 'company/oxalate'
  },
  social: [
    { icon: Mail, href: 'mailto:hello@oxalate.com' },
    { icon: MessageCircle, href: 'https://wa.me/917888816472' },
    { icon: Linkedin, href: 'https://linkedin.com/company/oxalate' }
  ]
}
```

---

## 6. SERVICES PAGE

**URL:** `oxalate.com/services`

**Structure:**
```
┌─────────────────────────────────────────────────────────┐
│  Our Services                                           │
│  ──────────────────────────────────────────────────────│
│  Fixed pricing. Clear deliverables. No surprises.       │
│                                                         │
│  [Web Development] [AI Integration] [Automation]        │
│                                                         │
│  ┌─────────────────────────────────────────────────┐  │
│  │  Web Development                                 │  │
│  │  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │  │
│  │                                                  │  │
│  │  What You Get:                                   │  │
│  │  ✓ Responsive design (mobile + desktop)         │  │
│  │  ✓ Fast loading (<3 seconds)                    │  │
│  │  ✓ SEO optimization                              │  │
│  │  ✓ Contact forms & analytics                    │  │
│  │  ✓ 1 year free hosting                          │  │
│  │  ✓ Lifetime support                              │  │
│  │                                                  │  │
│  │  Pricing:                                        │  │
│  │  • Landing Page: ₹15,000 - ₹25,000              │  │
│  │  • Business Website: ₹25,000 - ₹40,000          │  │
│  │  • Web Application: ₹40,000 - ₹1,00,000         │  │
│  │                                                  │  │
│  │  Timeline: 7-14 days                             │  │
│  │                                                  │  │
│  │  [Get Free Quote]                                │  │
│  └─────────────────────────────────────────────────┘  │
│                                                         │
│  [Similar sections for AI and Automation]               │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Service Details:**

### **1. Web Development**

```typescript
const webDevelopmentService = {
  title: 'Web Development',
  subtitle: 'Modern, fast, mobile-friendly websites',
  description: 'We build websites that look professional, load fast, and convert visitors into customers.',
  
  whatYouGet: [
    'Responsive design (works perfectly on mobile, tablet, desktop)',
    'Fast loading (<3 seconds)',
    'SEO optimization (rank on Google)',
    'Contact forms & analytics',
    '1 year free hosting',
    'Lifetime technical support'
  ],
  
  pricing: [
    {
      package: 'Landing Page',
      description: '1-page website for single product/service',
      price: '₹15,000 - ₹25,000',
      timeline: '7 days',
      includes: [
        'Hero section',
        'Features/benefits',
        'Contact form',
        'Mobile responsive'
      ]
    },
    {
      package: 'Business Website',
      description: '5-7 pages for established businesses',
      price: '₹25,000 - ₹40,000',
      timeline: '10-14 days',
      includes: [
        'Home, About, Services, Portfolio, Contact',
        'WhatsApp integration',
        'Google Maps',
        'Image gallery'
      ]
    },
    {
      package: 'Web Application',
      description: 'Custom dashboards, portals, SaaS products',
      price: '₹40,000 - ₹1,00,000',
      timeline: '2-4 weeks',
      includes: [
        'User authentication',
        'Admin dashboard',
        'Database integration',
        'Custom features'
      ]
    }
  ],
  
  techStack: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
  
  idealFor: [
    'Small businesses wanting online presence',
    'Startups launching their product',
    'Professionals (doctors, lawyers, consultants)',
    'Educational institutions'
  ],
  
  process: [
    'Share your requirements (text, images, competitor sites)',
    'We design mockup (2-3 days)',
    'Your feedback → revisions',
    'Final website deployment',
    'Training + documentation'
  ]
}
```

### **2. AI Integration**

```typescript
const aiIntegrationService = {
  title: 'AI Integration',
  subtitle: 'Add ChatGPT-like intelligence to your business',
  description: 'Automate customer support, process documents, and build internal knowledge bases using AI.',
  
  whatYouGet: [
    'Custom AI chatbot trained on your data',
    'Natural language understanding',
    'Document processing (PDFs, Excel, etc.)',
    '24/7 automated responses',
    'Easy-to-update knowledge base',
    'Analytics dashboard'
  ],
  
  useCases: [
    {
      title: 'Customer Support Bot',
      description: 'Answer common questions automatically',
      examples: ['FAQs', 'Product info', 'Booking help']
    },
    {
      title: 'Internal Knowledge Base',
      description: 'Let employees ask questions about company docs',
      examples: ['HR policies', 'Process docs', 'Training materials']
    },
    {
      title: 'Document Processing',
      description: 'Extract info from PDFs, invoices, forms',
      examples: ['Invoice data extraction', 'Resume parsing', 'Legal doc analysis']
    }
  ],
  
  pricing: [
    {
      package: 'Basic Chatbot',
      description: 'Website chatbot for FAQs',
      price: '₹25,000',
      timeline: '1 week',
      includes: [
        'Train on up to 50 questions',
        'Website integration',
        'Basic analytics',
        '3 months support'
      ]
    },
    {
      package: 'Advanced AI System',
      description: 'Custom AI for specific use case',
      price: '₹50,000 - ₹75,000',
      timeline: '2-3 weeks',
      includes: [
        'Train on unlimited documents',
        'Multi-channel (website, WhatsApp)',
        'Advanced analytics',
        '1 year support'
      ]
    }
  ],
  
  techStack: ['OpenAI GPT', 'Gemini Pro', 'LangChain', 'FastAPI'],
  
  idealFor: [
    'Businesses with repetitive customer questions',
    'Companies with large knowledge bases',
    'Services needing 24/7 support',
    'Teams processing lots of documents'
  ]
}
```

### **3. Automation Services**

```typescript
const automationService = {
  title: 'Business Automation',
  subtitle: 'Save 10+ hours per week on repetitive tasks',
  description: 'We automate manual work so your team can focus on what matters.',
  
  whatYouGet: [
    'Custom automation scripts',
    'One-time setup (runs forever)',
    'Dashboard to monitor/control',
    'Documentation',
    'Training for your team',
    'Lifetime support'
  ],
  
  automationTypes: [
    {
      category: 'Social Media',
      examples: [
        'Instagram auto-DM to leads',
        'WhatsApp bulk messaging',
        'Scheduled posting',
        'Lead scraping from competitors'
      ],
      priceRange: '₹15,000 - ₹30,000'
    },
    {
      category: 'Data & Excel',
      examples: [
        'Excel report generation',
        'Data entry automation',
        'PDF to Excel conversion',
        'Google Sheets workflows'
      ],
      priceRange: '₹10,000 - ₹25,000'
    },
    {
      category: 'Email & Communication',
      examples: [
        'Email follow-up sequences',
        'Auto-reply systems',
        'Meeting scheduling',
        'Reminder notifications'
      ],
      priceRange: '₹12,000 - ₹28,000'
    },
    {
      category: 'Custom Workflows',
      examples: [
        'Integration between tools (Zapier-like)',
        'Web scraping',
        'File processing',
        'Any repetitive task'
      ],
      priceRange: '₹20,000 - ₹40,000'
    }
  ],
  
  roi: {
    timeInvested: '5-10 hours of your time explaining the task',
    timeSaved: '10-20 hours per month (forever)',
    paybackPeriod: '2-3 months typically'
  },
  
  techStack: ['Python', 'n8n', 'Selenium', 'APIs'],
  
  idealFor: [
    'Businesses doing repetitive manual tasks',
    'Sales teams needing lead generation',
    'Marketing agencies managing multiple clients',
    'Anyone wanting to work smarter'
  ]
}
```

---

## 7. TRUST & CREDIBILITY ELEMENTS

### **Trust Signals to Include Throughout Site:**

**1. Stats Banner (Top of Homepage)**
```
┌─────────────────────────────────────────────────────────┐
│  5+ Projects Delivered  •  100% Client Satisfaction     │
│  Based in India  •  48-Hour Response Time               │
└─────────────────────────────────────────────────────────┘
```

**2. Payment Methods**
```
We Accept:
[Razorpay] [UPI] [Bank Transfer] [Stripe] [PayPal]
```

**3. Money-Back Guarantee**
```
┌─────────────────────────────────────────┐
│  🛡️ Our Guarantee                       │
│                                         │
│  If we don't deliver as promised,      │
│  you get 100% refund. No questions.    │
└─────────────────────────────────────────┘
```

**4. Process Transparency**
```
You'll Get:
✓ Daily progress updates
✓ Access to live preview
✓ Direct chat with developer
✓ Full code ownership
```

**5. Location Badge**
```
📍 Based in Punjab, India
🕐 Available: Mon-Sat, 9 AM - 8 PM IST
```

---

## 8. INDIAN MARKET OPTIMIZATION

### **WhatsApp Integration (Critical)**

**Floating Button (Always Visible):**
```
┌────────────┐
│     💬     │  ← Fixed bottom-right
│  WhatsApp  │
└────────────┘
```

**Click Opens:**
```
https://wa.me/917888816472?text=Hi%20Oxalate,%20I'm%20interested%20in%20your%20services
```

**WhatsApp Features:**
- Pre-filled message based on page
- Quick reply templates (on your end)
- Business account with catalog
- Response time indicator

---

### **Payment Options (India-First)**

**Priority Order:**
1. **UPI** (PhonePe, Google Pay, Paytm) - Most preferred
2. **Razorpay** - Accepts cards, UPI, net banking
3. **Bank Transfer** - NEFT/IMPS details
4. **International:** Stripe, PayPal

**Payment Terms:**
```
Standard: 50% advance, 50% on delivery
Small projects (<₹20k): 100% advance
Large projects (>₹50k): 30% advance, 40% midway, 30% delivery
```

---

### **Language & Tone**

**Indian-Friendly Copy:**
- Use "lakhs" not "hundreds of thousands"
- "₹" symbol before amounts
- "Within 24 hours" not "business days"
- Informal but professional ("Hi" not "Dear Sir/Madam")

**Examples:**
❌ "We leverage cutting-edge technologies"
✅ "We use the latest tech (React, AI, etc.)"

❌ "Our solutions drive ROI"
✅ "Our work saves you time and makes you money"

---

### **Social Proof (Indian Context)**

**Testimonial Format:**
```
"Oxalate delivered our website in just 10 days. 
Professional work, reasonable price. Highly recommend."

— Rajesh Kumar
   Founder, [Business Name]
   Delhi
```

**Include:**
- Indian names (builds trust with Indian audience)
- City/location
- Business context
- Specific results ("10 days", "₹25k", etc.)

---

### **Mobile-First Design**

**India Stats:**
- 70% of traffic = mobile
- Average speed = 2G/3G (slower networks)
- Data costs matter (lighter pages)

**Optimization:**
- Images: WebP format, max 200KB each
- Videos: Lazy load, max 5MB
- Fonts: Subset, preload critical
- Total page size: <1MB

---

### **Local SEO Keywords**

**Target Keywords:**
- "web development company in India"
- "AI chatbot developer India"
- "business automation services Punjab"
- "website design India cheap"
- "best web developer Chandigarh"

**Meta Description Example:**
```
Oxalate - Professional web development, AI integration, and automation services for Indian businesses. Fixed pricing, fast delivery. Based in Punjab.
```

---

## 9. CONTACT PAGE

**URL:** `oxalate.com/contact`

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  Let's Build Something Together                         │
│  ──────────────────────────────────────────────────────│
│                                                         │
│  ┌──────────────────┐  ┌──────────────────────────┐   │
│  │  Quick Contact   │  │  Send Us a Message       │   │
│  │                  │  │                          │   │
│  │  📱 WhatsApp     │  │  Name                    │   │
│  │  +91 7888816472  │  │  [____________]          │   │
│  │  [Chat Now]      │  │                          │   │
│  │                  │  │  Email                   │   │
│  │  📧 Email        │  │  [____________]          │   │
│  │  hello@oxalate   │  │                          │   │
│  │  [Send Email]    │  │  Service Needed          │   │
│  │                  │  │  [▼ Select]              │   │
│  │  📅 Schedule     │  │                          │   │
│  │  Free call       │  │  Budget Range            │   │
│  │  [Book Slot]     │  │  [▼ Select]              │   │
│  │                  │  │                          │   │
│  │  ⏰ Response     │  │  Project Details         │   │
│  │  Within 24 hours │  │  [____________]          │   │
│  │                  │  │  [____________]          │   │
│  │                  │  │                          │   │
│  │                  │  │  [Send Message]          │   │
│  └──────────────────┘  └──────────────────────────┘   │
│                                                         │
│  ⭐⭐⭐⭐⭐ "Reply within 2 hours!" - Recent Client    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Form Schema:**
```typescript
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.enum(['web-development', 'ai-integration', 'automation', 'other']),
  budget: z.enum(['<20k', '20k-50k', '50k-100k', '>100k', 'not-sure']),
  message: z.string().min(20),
  source: z.enum(['google', 'linkedin', 'referral', 'instagram', 'other']).optional()
})
```

**Auto-Response Email:**
```
Subject: Thanks for reaching out to Oxalate!

Hi [Name],

Thanks for contacting us! We've received your message about [Service].

Our team will review your requirements and respond within 24 hours (usually much faster!).

In the meantime:
• Check out our portfolio: oxalate.com/portfolio
• Read how we work: oxalate.com/services
• Message us on WhatsApp for instant reply: wa.me/917888816472

Looking forward to building something great together!

Best,
Oxalate Team
```

---

## 10. SEO & PERFORMANCE

### **Meta Tags**

```html
<!-- Homepage -->
<title>Oxalate - Web Development, AI Integration & Automation Services | India</title>
<meta name="description" content="Professional web development, AI chatbots, and business automation services for Indian businesses. Fixed pricing, fast delivery, lifetime support. Based in Punjab." />

<!-- Services Page -->
<title>Our Services - Web Development, AI & Automation | Oxalate</title>
<meta name="description" content="Custom web applications, AI integration, Instagram automation. Pricing from ₹15,000. View our services and get a free quote." />

<!-- Portfolio Page -->
<title>Our Work - Recent Projects & Case Studies | Oxalate</title>
<meta name="description" content="See real projects we've built for Indian businesses. Community platforms, event management, automation systems. View case studies." />

<!-- Open Graph -->
<meta property="og:title" content="Oxalate - Web Development & AI Services for Indian Businesses" />
<meta property="og:description" content="We build websites, AI chatbots, and automation tools. Fixed pricing, fast delivery." />
<meta property="og:image" content="https://oxalate.com/og-image.png" />
<meta property="og:url" content="https://oxalate.com" />
<meta property="og:type" content="website" />

<!-- Local Business Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Oxalate",
  "description": "Web development, AI integration, and automation services",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Banur",
    "addressRegion": "Punjab",
    "addressCountry": "IN"
  },
  "telephone": "+917888816472",
  "priceRange": "₹₹",
  "image": "https://oxalate.com/logo.png"
}
</script>
```

### **Performance Targets**

**Lighthouse Scores:**
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

**Core Web Vitals:**
- LCP: <1.5s
- FID: <50ms
- CLS: <0.05

### **Optimization Checklist**

- [ ] All images WebP format, optimized
- [ ] Lazy loading below fold
- [ ] Font subsetting (only used characters)
- [ ] Critical CSS inlined
- [ ] JavaScript code splitting
- [ ] Static generation where possible
- [ ] Sitemap.xml generated
- [ ] Robots.txt configured
- [ ] Analytics installed (Vercel + Google)

---

## 11. DEPLOYMENT SPECIFICATION

### **Domain Setup**

**Main Domain:** `oxalate.com`  
**Subdomains:**
- `www.oxalate.com` → Redirect to oxalate.com
- `abhishek.oxalate.com` → Personal portfolio (separate site)

**DNS Configuration:**
```
Type    Name    Value                   TTL
A       @       76.76.21.21            300
CNAME   www     cname.vercel-dns.com    300
CNAME   abhishek cname.vercel-dns.com   300
```

### **Environment Variables**

```env
# Vercel
NEXT_PUBLIC_SITE_URL=https://oxalate.com
NEXT_PUBLIC_WHATSAPP_NUMBER=917888816472
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email (for contact form)
RESEND_API_KEY=re_xxxxx
CONTACT_EMAIL=hello@oxalate.com

# Payments (future)
RAZORPAY_KEY_ID=rzp_live_xxxxx
RAZORPAY_KEY_SECRET=xxxxx

# Analytics
VERCEL_ANALYTICS_ID=xxxxx
```

### **Vercel Configuration**

```json
// vercel.json
{
  "redirects": [
    {
      "source": "/portfolio",
      "destination": "https://abhishek.oxalate.com",
      "permanent": false
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

---

## 12. CONTENT CHECKLIST

### **Before Launch:**

**Content:**
- [ ] All copy proofread (no typos)
- [ ] Pricing confirmed and updated
- [ ] Contact details verified
- [ ] Legal pages (Privacy, Terms) drafted
- [ ] Case studies written (anonymize if needed)
- [ ] Testimonials collected (at least 2-3)

**Technical:**
- [ ] All links working (internal + external)
- [ ] Forms tested (contact, quote)
- [ ] WhatsApp link working
- [ ] Mobile responsive (test on real devices)
- [ ] Cross-browser tested (Chrome, Safari, Firefox)
- [ ] Analytics tracking verified
- [ ] SEO meta tags complete
- [ ] Sitemap generated
- [ ] OG image created (1200×630px)

**Legal:**
- [ ] Privacy policy published
- [ ] Terms of service published
- [ ] Cookie consent (if using cookies)
- [ ] GDPR compliance (if targeting EU)

**Marketing:**
- [ ] Google Business Profile created
- [ ] Social media accounts set up
- [ ] Email signature updated with new domain
- [ ] Resume/portfolio updated with domain

---

## 13. ANTIGRAVITY BUILD COMMAND

**To build this website in Antigravity:**

```
@frontend @devops create business website for Oxalate agency:

Read specification document at: [paste this doc]

Requirements:
- Framework: Next.js 14 (App Router)
- TypeScript, Tailwind CSS, shadcn/ui
- Pages: Home, Services, Products, Portfolio, About, Contact
- Mobile-first, India-optimized (WhatsApp integration)
- Deploy to: Vercel
- Domain: oxalate.com

Key features:
1. Professional agency landing page
2. Service listings with pricing
3. Portfolio/case studies section
4. WhatsApp floating button
5. Contact form with auto-response
6. Trust signals throughout
7. Fast loading (<2s)

Follow all specifications exactly.
Generate complete codebase.

Start building.
```

---

## SUMMARY

**Oxalate Website Purpose:**
- Establish credibility as digital agency
- Generate leads for custom services
- Future: Launch and sell products

**Key Differentiators:**
- India-focused (pricing, payment, language)
- Fixed pricing (no surprises)
- Fast delivery (1-3 weeks)
- Lifetime support
- WhatsApp-first communication

**Success Metrics:**
- 10+ inquiries/month (via contact form + WhatsApp)
- 3-5 client projects/quarter
- Portfolio growth (add 1 case study/month)
- Products launched (by Month 6)

**This vs Personal Portfolio:**
- **oxalate.com** = Agency/business site (work with us)
- **abhishek.oxalate.com** = Personal portfolio (hire me)
- Clear separation prevents HR confusion
- Oxalate = Professional services brand
- Abhishek = Individual developer identity

---

**Document Version:** 1.0  
**Last Updated:** February 2026  
**Ready for Development:** ✅

**Next Steps:**
1. Review this document
2. Provide to Antigravity or developer
3. Create content (case studies, testimonials)
4. Deploy to oxalate.com
5. Set up WhatsApp Business
6. Start marketing!