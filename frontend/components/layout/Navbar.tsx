"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"
import { navLinks, serviceAnchors } from "@/lib/data/nav"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={[
        "sticky top-0 z-50 w-full transition-all duration-200",
        scrolled
          ? "bg-surface/95 backdrop-blur border-b border-border shadow-[0_1px_0_var(--border)]"
          : "bg-background/80 backdrop-blur"
      ].join(" ")}
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Oxlate — Home">
            <Image
              src="/icons/Oxlate_blk.svg"
              alt="Oxlate"
              width={96}
              height={24}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {/* Services dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 text-sm font-medium text-foreground transition-colors duration-150 hover:text-primary"
                onClick={() => setServicesOpen(!servicesOpen)}
                onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
                aria-expanded={servicesOpen}
                aria-haspopup="menu"
                id="services-btn"
              >
                Services
                <ChevronDown
                  className={["h-3.5 w-3.5 transition-transform duration-150", servicesOpen ? "rotate-180" : ""].join(" ")}
                />
              </button>

              {servicesOpen && (
                <div
                  role="menu"
                  aria-labelledby="services-btn"
                  className="absolute left-0 top-full mt-2 w-56 rounded-[var(--radius-sm)] border border-border bg-surface p-1 shadow-md"
                >
                  {serviceAnchors.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      className="block rounded-sm px-4 py-2.5 text-sm text-foreground transition-colors duration-150 hover:bg-muted hover:text-primary"
                      onClick={() => setServicesOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground transition-colors duration-150 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}

            {/* Primary CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-pill bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all duration-150 hover:bg-[#A84923] hover:gap-3"
            >
              Get a Quote
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-sm text-foreground transition-colors hover:bg-muted md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen
              ? <X className="h-5 w-5" />
              : <Menu className="h-5 w-5" />
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-surface px-6 py-6 md:hidden">
          <div className="flex flex-col gap-1">
            {/* Services group */}
            <p className="mb-1 px-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Services
            </p>
            {serviceAnchors.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="my-2 h-px w-full bg-border" />

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-sm px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-4">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 rounded-pill bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[#A84923]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
