/**
 * JSON-LD Schema Generator for Oxlate V1
 * Specification: /docs/seo/04-SCHEMA.md
 * Driven by central siteConfig (Single Source of Truth)
 */

import { siteConfig } from '@/lib/config/site'

export const SITE_URL = siteConfig.url

export interface PostalAddressSchema {
  '@type': 'PostalAddress'
  addressLocality: string
  addressCountry: string
}

export interface OrganizationSchema {
  '@context'?: string
  '@type': 'Organization'
  '@id': string
  name: string
  legalName?: string
  alternateName?: string
  url: string
  logo: string
  description: string
  email?: string
  foundingDate: string
  address?: PostalAddressSchema
  sameAs: string[]
  knowsAbout?: string[]
}

export interface WebSiteSchema {
  '@context'?: string
  '@type': 'WebSite'
  '@id': string
  name: string
  alternateName?: string
  url: string
  publisher: {
    '@id': string
  }
}

export interface ServiceItemSchema {
  '@type': 'Service'
  '@id': string
  name: string
  serviceType: string
  description: string
  provider: {
    '@id': string
  }
}

export interface RootJsonLdGraph {
  '@context': 'https://schema.org'
  '@graph': Array<OrganizationSchema | WebSiteSchema | ServiceItemSchema>
}

/**
 * Generates official Organization schema for Oxlate
 */
export function generateOrganizationSchema(): OrganizationSchema {
  return {
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/Oxlate_logoX_blk.svg`,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    foundingDate: String(siteConfig.foundingYear),
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location.city,
      addressCountry: siteConfig.location.countryCode,
    },
    sameAs: [
      siteConfig.social.x,
      siteConfig.social.linkedin,
      siteConfig.social.github,
      siteConfig.social.alternateWebsite,
    ],
    knowsAbout: [
      "Web Development",
      "Mobile Applications",
      "Custom Software Engineering",
      "Full-Stack Development",
    ],
  }
}

/**
 * Generates WebSite schema for Oxlate
 */
export function generateWebSiteSchema(): WebSiteSchema {
  return {
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    publisher: {
      '@id': `${siteConfig.url}/#organization`,
    },
  }
}

/**
 * Generates Service schemas matching the 3 capability disciplines
 */
export function generateServicesSchema(): ServiceItemSchema[] {
  const orgId = `${siteConfig.url}/#organization`
  return siteConfig.services.map((s) => ({
    '@type': 'Service' as const,
    '@id': `${siteConfig.url}/#${s.id}`,
    name: s.name,
    serviceType: s.serviceType,
    description: s.shortDescription,
    provider: {
      '@id': orgId,
    },
  }))
}

/**
 * Generates complete JSON-LD @graph structure for root layout
 */
export function generateRootJsonLdGraph(): RootJsonLdGraph {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      generateOrganizationSchema(),
      generateWebSiteSchema(),
      ...generateServicesSchema(),
    ],
  }
}
