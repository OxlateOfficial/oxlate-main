import Link from "next/link"
import { Linkedin, Instagram, Twitter } from "lucide-react"
import LogoX from "@/public/icons/Oxlate_wht.svg"
import Image from "next/image"
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-20 items-center justify-center">
              <Image src={LogoX} alt="Oxlate Logo" width={80} height={20} />  
            </div>
          </Link>
            <p className="text-sm text-secondary-foreground/80">We Build Digital Solutions That Actually Work</p>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/oxlateofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 transition-colors hover:text-secondary-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/oxlateofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 transition-colors hover:text-secondary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://x.com/OxlateOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 transition-colors hover:text-secondary-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/website-development"
                  className="text-sm text-secondary-foreground/80 transition-colors hover:text-secondary-foreground"
                >
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/app-development"
                  className="text-sm text-secondary-foreground/80 transition-colors hover:text-secondary-foreground"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/business-automation"
                  className="text-sm text-secondary-foreground/80 transition-colors hover:text-secondary-foreground"
                >
                  Business Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-secondary-foreground/80 transition-colors hover:text-secondary-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-secondary-foreground/80 transition-colors hover:text-secondary-foreground"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-secondary-foreground/80 transition-colors hover:text-secondary-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Get in Touch</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>
                <a href="mailto:oxlateofficial@gmail.com" className="transition-colors hover:text-secondary-foreground">
                  oxlateofficial@gmail.com
                </a>
              </li>
              <li>Metro Station, A62, Gali Number 6, near Dwarka Mod, Block A, Sewak Park, Nawada, New Delhi, Delhi, 110059</li>
              <li>Response time: 24 hours</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-secondary-foreground/10 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/60">© {currentYear-1} Oxlate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
