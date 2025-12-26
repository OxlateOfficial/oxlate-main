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
    <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <nav className="mx-auto max-w-6xl px-4 py-4 flex justify-center gap-12">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;

          return (
        <Link
          key={item.href}
          href={item.href}
          className={`text-sm font-medium transition ${
            isActive ? "text-black" : "text-gray-600 hover:text-black"
          }`}
        >
          {item.label}
        </Link>
          );
        })}
      </nav>
    </div>
  );
}