"use client";

import { usePathname } from "next/navigation";
import MainNavigation from "./MainNavigation";

export default function HeaderClient() {
  const pathname = usePathname();

  // Home page: no global header
  if (pathname === "/") return null;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200">
      <MainNavigation />
    </header>
  );
}
