import type { NextConfig } from 'next'
import path from 'path'
import { LEGACY_REDIRECT_REGISTRY, HOST_REDIRECT_REGISTRY } from './lib/seo/legacy-url-map'

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Production security & crawler headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  // 301 redirects — centralized legacy URL preservation and host consolidation
  async redirects() {
    return [
      ...HOST_REDIRECT_REGISTRY.map((entry) => ({
        source: entry.source,
        has: entry.has,
        destination: entry.destination,
        permanent: entry.permanent,
      })),
      ...LEGACY_REDIRECT_REGISTRY.map((entry) => ({
        source: entry.source,
        destination: entry.destination,
        permanent: entry.permanent,
      })),
    ]
  },
}

export default nextConfig
