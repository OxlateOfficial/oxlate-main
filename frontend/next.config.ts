import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  images: {
    // add your allowed external image domains here
    domains: ["images.unsplash.com"],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    appDir: true,
    optimizeCss: true,
    scrollRestoration: true,
  },
  compiler: {
    styledComponents: true,
  },
  // Optional rewrites/redirects — keep/remove as needed
  async rewrites() {
    return [{ source: "/api/:path*", destination: "/api/:path*" }];
  },
  async redirects() {
    return [{ source: "/old-path", destination: "/new-path", permanent: true }];
  },
};

export default nextConfig;
