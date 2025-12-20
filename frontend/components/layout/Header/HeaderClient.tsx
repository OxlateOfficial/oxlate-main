"use client";

import { usePathname } from "next/navigation";
import MainNavigation from "./MainNavigation";

export default function HeaderClient() {
  const pathname = usePathname();

  // Home page (including ?service=...)
  if (pathname === "/") {
    return null;
  }

  // All other pages
  return (
    <header className="w-full">
      <MainNavigation />
    </header>
  );
}
