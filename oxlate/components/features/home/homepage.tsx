'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Menu, X, Sparkles, ChevronRight, MessageSquareQuote } from 'lucide-react'
import { capabilities, portfolioItems, staircaseCards, technologies } from '@/lib/data/home'
import { Motif } from '@/components/ui/motif'
import { DeviceMockup } from '@/components/ui/device-mockup'
import { ExpandableStaircase } from '@/components/ui/expandable-staircase'
import { PortfolioPillars } from '@/components/ui/portfolio-pillars'

const easeOutConfig = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...easeOutConfig, delay }}
    >
      {children}
    </motion.div>
  )
}

function LogoMark() {
  return (
    <a
      href="#top"
      className="group flex items-center gap-1.5 font-mono text-base font-bold tracking-tight text-foreground transition-opacity hover:opacity-80"
      aria-label="Oxlate Home"
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-foreground text-background font-black text-sm group-hover:bg-bronze transition-colors">
        X
      </span>
      <span>
        OX<span className="text-bronze">/</span>LATE
      </span>
    </a>
  )
}

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = ['home', 'device', 'approach', 'portfolio', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -50% 0px' }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const leftNavLinks = [
    { id: 'approach', label: 'About & Goals' },
    { id: 'device', label: 'Capabilities' },
  ]

  const rightNavLinks = [
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-8">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-foreground/15 bg-background/90 px-6 py-3 shadow-sm backdrop-blur-md"
        aria-label="Main Navigation"
      >
        {/* Left Nav Options */}
        <div className="hidden items-center gap-6 md:flex">
          {leftNavLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`eyebrow transition-colors hover:text-bronze ${
                activeSection === link.id ? 'text-bronze font-bold' : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Center Oxlate Logo */}
        <div className="flex justify-center">
          <LogoMark />
        </div>

        {/* Right Nav Options & CTA */}
        <div className="hidden items-center gap-6 md:flex">
          {rightNavLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`eyebrow transition-colors hover:text-bronze ${
                activeSection === link.id ? 'text-bronze font-bold' : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="flex items-center gap-1.5 rounded-full border border-bronze bg-bronze px-4 py-1.5 font-mono text-xs font-semibold text-background transition-transform duration-300 hover:scale-105 hover:bg-bronze-hover"
          >
            Get a Quote <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1 text-foreground md:hidden"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-2 flex max-w-7xl flex-col gap-4 rounded-2xl border border-foreground/15 bg-card p-6 shadow-xl md:hidden"
          >
            {[...leftNavLinks, ...rightNavLinks].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="eyebrow text-foreground hover:text-bronze"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-bronze py-2.5 font-mono text-xs font-bold text-background"
            >
              Get a Quote <ArrowUpRight size={14} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default function Homepage() {
  const heroSectionRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <Navbar />
      <main id="top">
        {/* ========================================================================= */}
        {/* STICKY PINNED HERO & LAPTOP UNFOLDING SHOWCASE CONTAINER                  */}
        {/* ========================================================================= */}
        <section ref={heroSectionRef} id="home" className="relative w-full h-[220vh]">
          {/* Sticky Pinning Viewport Frame */}
          <div className="sticky top-0 flex h-screen w-full flex-col justify-between overflow-hidden px-4 pb-2 pt-20 md:px-8 md:pt-24">
            {/* Signature Valley/Mountain Line Background Motif */}
            <Motif className="inset-0 z-0 opacity-60" variant="hero" />

            {/* Hero Headline & Call to Action (Top Portion of Sticky Viewport) */}
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-bronze/40 bg-card/90 px-3.5 py-1 shadow-sm backdrop-blur-sm">
                  <Sparkles size={12} className="text-bronze" />
                  <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-bronze">
                    PREMIUM TECHNOLOGY PARTNER
                  </span>
                </div>
                <h1 className="mt-2 text-2xl font-extrabold tracking-tight md:text-4xl lg:text-5xl text-balance">
                  Thoughtful web experiences <br className="hidden sm:inline" />
                  <span className="text-bronze">and mobile applications.</span>
                </h1>
                <p className="mt-1.5 text-xs text-muted-foreground md:text-sm max-w-xl mx-auto text-pretty">
                  Oxlate is a precision technology partner building software with calm, architectural discipline.
                </p>
                <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="#contact"
                    className="flex items-center gap-2 rounded-full bg-bronze px-5 py-2 font-mono text-xs font-bold text-background shadow-md transition-all duration-300 hover:bg-bronze-hover hover:shadow-lg"
                  >
                    Get a Quote <ArrowUpRight size={14} />
                  </a>
                  <a
                    href="#approach"
                    className="flex items-center gap-2 rounded-full border border-foreground/20 bg-card px-5 py-2 font-mono text-xs font-semibold text-foreground transition-all duration-300 hover:border-bronze hover:text-bronze"
                  >
                    Explore Framework <ChevronRight size={14} />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Pinned 3D Unfolding Laptop Centerpiece */}
            <div id="device" className="relative z-10 w-full flex-1 flex items-center justify-center overflow-visible">
              <DeviceMockup capabilities={capabilities} targetRef={heroSectionRef} />
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4-CARD STEPPED EXPANDABLE SECTION (COMPRESSION / EXPANSION MECHANISM)      */}
        {/* ========================================================================= */}
        <section id="approach" className="relative border-t border-foreground/10 bg-background-secondary/40 px-5 py-20 md:px-10 md:py-32">
          <Motif className="inset-0 z-0 opacity-20" variant="subtle" />

          <div className="relative z-10 mx-auto max-w-7xl">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <p className="eyebrow text-bronze">COMPRESSED SECTION ARCHITECTURE</p>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-5xl">
                  Entire site depth, <br />
                  <span className="text-bronze">compressed into four cards.</span>
                </h2>
                <p className="mt-3 text-sm text-muted-foreground md:text-base">
                  Hover over any card to expand its full content module.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 md:mt-16">
              <ExpandableStaircase cards={staircaseCards} />
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* LOGO / TECH ROW                                                          */}
        {/* ========================================================================= */}
        <section className="relative border-t border-foreground/10 py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-5 text-center">
            <p className="eyebrow text-muted-foreground">ENGINEERED WITH MODERN STANDARDS</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {technologies.map((tech, idx) => (
                <div key={idx} className="flex items-center gap-2 font-mono text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-bronze" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PORTFOLIO — STAGGERED PILLARS                                            */}
        {/* ========================================================================= */}
        <section id="portfolio" className="relative border-t border-foreground/10 px-5 py-24 md:px-10 md:py-36">
          <Motif className="inset-0 z-0 opacity-15" variant="subtle" />

          <div className="relative z-10 mx-auto max-w-7xl">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <p className="eyebrow text-bronze">SELECTED CASE STUDIES</p>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-5xl">
                  Architectural craft in production.
                </h2>
                <p className="mt-4 text-sm text-muted-foreground md:text-base">
                  Staggered pillar showcase of recent engineering work.
                </p>
              </div>
            </Reveal>

            <div className="mt-16 md:mt-24">
              <PortfolioPillars items={portfolioItems} />
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FOOTER                                                                    */}
        {/* ========================================================================= */}
        <footer id="contact" className="relative border-t border-foreground/15 bg-card/60 px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
            <div>
              <LogoMark />
              <p className="mt-3 max-w-xs font-mono text-xs text-muted-foreground">
                Precision web & mobile engineering. Built with restrained typography and clean code architecture.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 md:items-end">
              <a
                href="mailto:hello@oxlate.dev"
                className="font-mono text-lg font-bold text-foreground transition-colors hover:text-bronze"
              >
                hello@oxlate.dev
              </a>
              <p className="font-mono text-[10px] text-muted-foreground">
                © {new Date().getFullYear()} OXLATE DEV STUDIO. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
