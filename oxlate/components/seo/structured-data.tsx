import React from "react";
import type { RootJsonLdGraph, OrganizationSchema, WebSiteSchema, ServiceItemSchema } from "@/lib/seo/schema";

interface StructuredDataProps {
  data: RootJsonLdGraph | OrganizationSchema | WebSiteSchema | ServiceItemSchema | Record<string, unknown>;
}

/**
 * Server-rendered JSON-LD structured data script
 * Injects clean Schema.org entity metadata directly into the initial HTML document.
 */
export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
