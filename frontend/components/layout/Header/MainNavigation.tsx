"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";

import { useServiceSelection } from "@/hooks/useServiceSelection";
import { SERVICES } from "@/lib/constants/services";
import { trackEvent } from "@/lib/analytics/events";
import { useTheme } from "@/components/layout/Providers";

const STATIC_NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-oxlate" },
  { label: "Pricing", href: "/pricing" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function ServiceSelector(): React.JSX.Element {
  const { service, setService } = useServiceSelection();
  const router = useRouter();
  const pathname = usePathname() || "/";
  const { theme, toggleTheme } = useTheme();

  const [open, setOpen] = useState(false);

  // close mobile menu on route change
  useEffect(() => {
    const handleRouteChange = () => setOpen(false);
    // next/navigation doesn't give an event API here — keep defensive
    // we will still close the menu if pathname changes
  }, [pathname]);

  // close on escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function handleServiceSelect(id: string) {
    setService(id);
    trackEvent?.("select_service", { service: id });
    router.push(`/services/${encodeURIComponent(id)}`, { scroll: false });
    setOpen(false);
  }

  return (
    <div className="sticky top-7 z-50 mx-4 sm:mx-0">
      <div className="max-w-7xl mx-auto">
        <div className="card bg-white/95 dark:bg-[#0b1220]/80 backdrop-blur-sm p-3 rounded-lg shadow-sm border border-(--color-border)">
          <nav className="flex items-center justify-between gap-4">
            {/* LEFT: logo + brand */}
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-neutral-900/90 dark:bg-white/5 flex items-center justify-center">
                  <Image
                    src="/images/icons/Oxlate_logoX_blk.svg"
                    alt="Oxlate"
                    width={20}
                    height={20}
                    className="invert dark:invert-0"
                  />
                </div>
              </Link>
            <div className="flex items-center gap-4">


              {/* Desktop nav links */}
              <div className="hidden md:flex items-center gap-6 ml-4">
                {STATIC_NAV.map((item) => (
                  <NavLink key={item.href} href={item.href} label={item.label} pathname={pathname} />
                ))}

                {/* Services dropdown */}
                <details className="relative group">
                  <summary className="list-none cursor-pointer text-sm font-medium flex items-center gap-2 px-2 py-1 rounded-md hover:text-primary transition">
                    Services
                    <span className="ml-1 text-xs opacity-70">⌄</span>
                  </summary>

                  <div className="absolute left-0 mt-2 w-56 p-3 card bg-white/95 dark:bg-[#071024]/90 border border-(--color-border) rounded-lg shadow-lg">
                    <div className="flex flex-col gap-2">
                      {SERVICES.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => handleServiceSelect(s.id)}
                          className={`text-sm text-left px-3 py-2 rounded hover:bg-soft transition ${service === s.id ? "bg-primary/10" : ""}`}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* RIGHT: actions */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-3">
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="w-9 h-9 rounded-lg border border-(--color-border) hover:bg-soft flex items-center justify-center transition"
                >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              </div>

              {/* Mobile actions */}
              <div className="md:hidden flex items-center gap-2">
                <button onClick={toggleTheme} aria-label="Toggle theme" className="w-9 h-9 rounded-lg border border-(--color-border) flex items-center justify-center">
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                </button>

                <button
                  onClick={() => setOpen((s) => !s)}
                  aria-expanded={open}
                  aria-controls="mobile-menu"
                  aria-label="Open menu"
                  className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-soft transition"
                >
                  {open ? <X size={18} /> : <Menu size={18} />}
                </button>
              </div>
            </div>
          </nav>

          {/* MOBILE MENU */}
          <div
            id="mobile-menu"
            className={`md:hidden mt-3 pt-3 border-t border-(--color-border) transition-all overflow-hidden ${open ? "max-h-125" : "max-h-0"}`}
          >
            <div className={`flex flex-col gap-3 pb-3`}>
              {STATIC_NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block text-sm font-medium px-2 py-2 rounded-md ${pathname === item.href ? "text-primary" : "text-secondary hover:text-primary"}`}
                >
                  {item.label}
                </Link>
              ))}

              <div>
                <p className="text-xs uppercase tracking-wide text-muted mb-2">Services</p>
                <div className="flex flex-wrap gap-2">
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => handleServiceSelect(s.id)}
                      className={`px-3 py-1.5 text-sm rounded-md ${service === s.id ? "bg-primary text-white" : "bg-soft"}`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavLink({ href, label, pathname }: { href: string; label: string; pathname: string }) {
  const isActive = pathname === href || pathname.startsWith(href + "/");
  return (
    <Link
      href={href}
      className={`text-sm font-medium transition px-2 py-1 rounded-md ${isActive ? "text-primary" : "text-secondary hover:text-primary"}`}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  );
}
