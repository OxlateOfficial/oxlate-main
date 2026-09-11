/**
 * Centralized Legacy URL Redirect Registry
 * Single Source of Truth for migration continuity from oxlate.com & oxlate.in
 * Consumed directly by next.config.ts
 */

export interface LegacyRedirectEntry {
  source: string;
  destination: string;
  reason: string;
  permanent: boolean;
}

export const LEGACY_REDIRECT_REGISTRY: LegacyRedirectEntry[] = [
  // 1. Static Pricing page removed in favor of direct consultation
  {
    source: "/pricing",
    destination: "/contact",
    reason: "Pricing page replaced by project consultation workflow",
    permanent: true,
  },
  // 2. Legacy Business Automation service consolidated into Custom Software
  {
    source: "/services/business-automation",
    destination: "/services#custom-software",
    reason: "Business automation consolidated into custom software engineering",
    permanent: true,
  },
  // 3. Legacy Website Development sub-route consolidated to anchor
  {
    source: "/services/website-development",
    destination: "/services#web-development",
    reason: "Individual service sub-routes consolidated into main capabilities catalog",
    permanent: true,
  },
  // 4. Legacy App Development sub-route consolidated to anchor
  {
    source: "/services/app-development",
    destination: "/services#app-development",
    reason: "Individual service sub-routes consolidated into main capabilities catalog",
    permanent: true,
  },
  // 5. Legacy Portfolio path renamed to work catalog
  {
    source: "/portfolio",
    destination: "/work",
    reason: "Legacy /portfolio path consolidated into architectural /work catalog",
    permanent: true,
  },
];

export interface HostRedirectEntry {
  source: string;
  has: Array<{
    type: "host";
    key?: string;
    value: string;
  }>;
  destination: string;
  permanent: boolean;
  reason: string;
}

export const HOST_REDIRECT_REGISTRY: HostRedirectEntry[] = [
  // Host-level direct 301 redirect from oxlate.in / *.oxlate.in to oxlate.com
  {
    source: "/:path*",
    has: [
      {
        type: "host",
        value: "(?<subdomain>.*\\.)?oxlate\\.in",
      },
    ],
    destination: "https://oxlate.com/:path*",
    permanent: true,
    reason: "Direct host-level consolidation of oxlate.in traffic to canonical oxlate.com with zero chains",
  },
];

