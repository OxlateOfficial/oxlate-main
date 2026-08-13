import { Capability, PortfolioItem, StaircaseCard } from '../types/home'

export const capabilities: Capability[] = [
  {
    label: 'Client Fast & Quick',
    subtext: 'Agile & Responsive Delivery',
    position: 'top-left',
  },
  {
    label: 'Modern TypeScript',
    subtext: 'End-to-End Type Safety',
    position: 'top-right',
  },
  {
    label: 'Direct Founder Access',
    subtext: 'No Account Manager Friction',
    position: 'bottom-left',
  },
  {
    label: 'Zero Tech Debt Guarantee',
    subtext: 'Production Ready Codebase',
    position: 'bottom-right',
  },
]

export const technologies = [
  'TypeScript',
  'React 19',
  'Next.js 16',
  'React Native',
  'Tailwind CSS',
  'Node.js',
  'PostgreSQL',
  'Framer Motion',
  'GraphQL',
  'Docker',
]

export const staircaseCards: StaircaseCard[] = [
  {
    id: 'about-us',
    number: '01',
    category: 'WHO WE ARE',
    title: 'About Oxlate',
    shortSummary: 'A tight-knit technology partner building thoughtful web applications with precision and craftsmanship.',
    fullBody: 'Oxlate was founded to eliminate the friction between product strategy and engineering execution. We operate as your dedicated technology wing—delivering high-performing web and mobile products without agency bloat or unnecessary overhead.',
    highlights: ['Direct Senior Developer Communication', '100% In-House Craftsmanship', 'Architectural Focus on Longevity'],
  },
  {
    id: 'our-goals',
    number: '02',
    category: 'OUR MISSION',
    title: 'Our Core Goals',
    shortSummary: 'Elevating digital standards through restrained design, clean code architecture, and speed.',
    fullBody: 'Our mission is to give ambitious startups and companies a decisive competitive edge. We transform complex software requirements into intuitive, elegant digital products that load fast, scale gracefully, and wow users at first glance.',
    highlights: ['Sub-100ms Page Load Targets', 'Modular & Scalable Component Systems', 'Zero-Jank Micro Animations'],
  },
  {
    id: 'our-approach',
    number: '03',
    category: 'HOW WE WORK',
    title: 'Engineering Approach',
    shortSummary: 'First-principles software development backed by rapid prototyping and rigorous automated testing.',
    fullBody: 'Every feature earns its place. We start by mapping core user flows before writing code. Utilizing Next.js App Router, React 19, and Tailwind, we construct modular design systems that remain easy to maintain and expand for years.',
    highlights: ['Feature-First Folder Architecture', 'Comprehensive Automated Testing', 'Clean Hand-off Documentation'],
  },
  {
    id: 'our-services',
    number: '04',
    category: 'WHAT WE OFFER',
    title: 'Services & Solutions',
    shortSummary: 'Full-stack web engineering, cross-platform mobile apps, design systems, and code performance audits.',
    fullBody: 'From greenfield MVP development to revamping complex legacy web applications, Oxlate delivers end-to-end technical execution. We handle frontend UI engineering, backend API integration, and cloud deployment pipelines.',
    highlights: ['Web Application Development', 'iOS & Android Mobile Apps', 'Performance & Security Audits'],
  },
]

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'quiet-space',
    title: 'A Quiet Place to Think',
    type: 'Independent Project',
    description: 'A focused digital workspace designed for deep work, collecting references, and structured note-taking without noise.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    stats: '99/100 Lighthouse Score',
  },
  {
    id: 'field-notes',
    title: 'Field Notes Mobile',
    type: "Founding Developer's Work",
    description: 'A tactile, offline-first mobile app for field observations, voice memo transcription, and geographic tagging.',
    tags: ['React Native', 'Node.js', 'SQLite'],
    stats: '60 FPS Native Performance',
  },
  {
    id: 'common-ground',
    title: 'Common Ground Directory',
    type: 'Independent Project',
    description: 'An interactive community platform connecting local makers with accessible resources and shared spaces.',
    tags: ['React', 'PostgreSQL', 'Framer Motion'],
    stats: 'Interactive Map & Fast Search',
  },
]
