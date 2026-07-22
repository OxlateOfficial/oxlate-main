import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // 301 redirects — preserve SEO for old URLs
  async redirects() {
    return [
      // Pricing page removed — redirect to contact
      {
        source: '/pricing',
        destination: '/contact',
        permanent: true,
      },
      // Business automation removed — out of scope
      {
        source: '/services/business-automation',
        destination: '/services',
        permanent: true,
      },
      // Old service sub-routes → new consolidated /services page with anchors
      {
        source: '/services/website-development',
        destination: '/services#web-development',
        permanent: true,
      },
      {
        source: '/services/app-development',
        destination: '/services#app-development',
        permanent: true,
      },
      // Portfolio route → /work
      {
        source: '/portfolio',
        destination: '/work',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
