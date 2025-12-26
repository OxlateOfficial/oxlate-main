"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const STATIC_NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-oxlate" },
  { label: "Pricing", href: "/pricing" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];


export const SERVICES = [
  { id: "web-development", label: "Web Development" },
  { id: "app-development", label: "App Development" },
  { id: "automation", label: "Automation" },
  { id: "software", label: "ERP / Software" },
  { id: "custom", label: "Custom Solution" },
] as const;

export default function MainNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="w-full">
      <nav className="mx-auto w-full px-4 py-4">
        {/* MOBILE HEADER */}
        <div className=" flex items-center justify-between md:hidden w-full gap-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/icons/Oxlate_logoX_blk.svg"
              alt="Oxlate"
              width={40}
              height={40}
              priority
            />
          </Link>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="p-2 -mr-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black flex items-center justify-center"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center justify-center gap-14">
          {STATIC_NAV.slice(0, 2).map((item) => (
            <NavLink key={item.href} {...item} pathname={pathname} />
          ))}

          {/* SERVICES DROPDOWN */}
          <div className="relative group">
            <button className="text-sm font-medium text-gray-700 hover:text-black transition">
              Services
            </button>

            <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-64 bg-white border rounded-xl shadow-lg
                            opacity-0 translate-y-1
                            group-hover:opacity-100 group-hover:translate-y-0
                            group-focus-within:opacity-100 group-focus-within:translate-y-0
                            transition-all duration-200">
              <div className="flex flex-col p-2">
                {SERVICES.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.id}`}
                    className="px-4 py-2 text-sm rounded-lg hover:bg-gray-100"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>


          {STATIC_NAV.slice(2).map((item) => (
            <NavLink key={item.href} {...item} pathname={pathname} />
          ))}
        </div>

        {open && (
          <div className="fixed inset-0 z-40 bg-white md:hidden">
            <div className="px-6 py-6 flex flex-col gap-6 bg-white border-black border-b">
              <button
                onClick={() => setOpen(false)}
                className="self-end text-sm text-gray-600"
              >
                Close
              </button>

              <Link href="/" onClick={() => setOpen(false)}>Home</Link>
              <Link href="/about-oxlate" onClick={() => setOpen(false)}>About</Link>

              <div>
                <button
                  onClick={() => setServicesOpen(v => !v)}
                  className="font-medium"
                >
                  Services
                </button>

                {servicesOpen && (
                  <div className="mt-3 ml-4 flex flex-col gap-3">
                    {SERVICES.map(service => (
                      <Link
                        key={service.id}
                        href={`/services/${service.id}`}
                        onClick={() => setOpen(false)}
                        className="text-sm text-gray-700"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
              <Link href="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link>
              <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
            </div>
          </div>
        )}

      </nav>
    </header>
  );
}

function NavLink({
  href,
  label,
  pathname,
}: {
  href: string;
  label: string;
  pathname: string;
}) {
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`text-sm font-medium transition ${
        isActive ? "text-black" : "text-gray-600 hover:text-black"
      }`}
    >
      {label}
    </Link>
  );
}