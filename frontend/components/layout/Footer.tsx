import Link from "next/link"
import Image from "next/image"
import { Linkedin, Instagram, Twitter } from "lucide-react"
import { footerLinks } from "@/lib/data/nav"
import contactData from "@/lib/data/contact.json"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          {/* Brand column */}
          <div className="space-y-5 md:col-span-1">
            <Link href="/" aria-label="Oxlate — Home">
              <Image
                src="/icons/Oxlate_wht.svg"
                alt="Oxlate"
                width={96}
                height={24}
              />
            </Link>
            <p className="text-sm leading-relaxed text-secondary-foreground/70">
              We build digital solutions that actually work — websites, apps, and SEO for Indian businesses.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href={contactData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/50 transition-colors hover:text-secondary-foreground"
                aria-label="Oxlate on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href={contactData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/50 transition-colors hover:text-secondary-foreground"
                aria-label="Oxlate on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href={contactData.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/50 transition-colors hover:text-secondary-foreground"
                aria-label="Oxlate on X (Twitter)"
              >
                <Twitter className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-secondary-foreground/50">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 transition-colors hover:text-secondary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-secondary-foreground/50">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 transition-colors hover:text-secondary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-secondary-foreground/50">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li>
                <a
                  href={`mailto:${contactData.email}`}
                  className="transition-colors hover:text-secondary-foreground"
                >
                  {contactData.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactData.phone}`}
                  className="transition-colors hover:text-secondary-foreground"
                >
                  {contactData.phone}
                </a>
              </li>
              <li>{contactData.location}</li>
              <li className="pt-1">
                <a
                  href={contactData.googleReview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/60 underline decoration-secondary-foreground/20 underline-offset-4 transition-colors hover:text-secondary-foreground"
                >
                  Review us on Google ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-secondary-foreground/10 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-secondary-foreground/40">
            © {currentYear} Oxlate. All rights reserved.
          </p>
          <p className="text-xs text-secondary-foreground/40">
            Built with Next.js — Chandigarh, India
          </p>
        </div>
      </div>
    </footer>
  )
}
