"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import LogoX from "@/public/icons/Oxlate_blk.svg"
export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-18 items-center justify-center">
              <Image src={LogoX} alt="Oxlate Logo" width={80} height={20} />  
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-foreground transition-colors hover:text-primary">
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/services/website-development">Website Development</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/app-development">App Development</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/business-automation">Business Automation</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/about" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Pricing
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Contact
            </Link>

            <Button asChild size="sm">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-border py-4 md:hidden">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-semibold text-muted-foreground">Services</span>
                <Link
                  href="/services/website-development"
                  className="pl-4 text-sm font-medium text-foreground transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Website Development
                </Link>
                <Link
                  href="/services/app-development"
                  className="pl-4 text-sm font-medium text-foreground transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  App Development
                </Link>
                <Link
                  href="/services/business-automation"
                  className="pl-4 text-sm font-medium text-foreground transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Business Automation
                </Link>
              </div>

              <Link
                href="/about"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <Button asChild className="w-full">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
