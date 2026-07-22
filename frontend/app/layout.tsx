import type { Metadata, Viewport } from 'next'
import { Inter, Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const spaceMono = Space_Mono({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Oxlate | Digital Solutions for Indian Businesses',
  description: 'Professional website development, mobile app development, and SEO optimization for Indian businesses. Fast delivery, transparent process, built to grow.',
  keywords: ['website development India', 'app development India', 'SEO optimization', 'digital agency India', 'Next.js development', 'React Native apps', 'Oxlate'],
  authors: [{ name: 'Oxlate' }],
  creator: 'Oxlate',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://oxlate.com',
    title: 'Oxlate | Digital Solutions for Indian Businesses',
    description: 'We build digital solutions that actually work — websites, apps, and SEO for Indian businesses.',
    siteName: 'Oxlate',
    images: [
      {
        url: 'https://www.oxlate.com/icons/Oxlate_blk.svg',
        width: 1200,
        height: 630,
        alt: 'Oxlate — Digital Solutions',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oxlate | Digital Solutions for Indian Businesses',
    description: 'We build digital solutions that actually work — websites, apps, and SEO.',
    creator: '@OxlateOfficial',
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  appleWebApp: {
    title: "Oxlate",
    capable: true,
    statusBarStyle: "default",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.oxlate.com',
  },
}

export const viewport: Viewport = {
  themeColor: '#C15A2E',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        {children}
        {/* Schema.org — LocalBusiness structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Oxlate",
              "url": "https://www.oxlate.com",
              "logo": "https://www.oxlate.com/icons/Oxlate_wht.svg",
              "telephone": "+91-7508317625",
              "email": "oxlateofficial@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chandigarh",
                "addressRegion": "Punjab",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://g.page/r/CYbNnrb42Up2EBI/review",
                "https://www.linkedin.com/company/oxlateofficial/",
                "https://www.instagram.com/oxlateofficial/",
                "https://x.com/OxlateOfficial"
              ],
              "description": "Professional website development, mobile app development, and SEO optimization for Indian businesses.",
              "priceRange": "₹₹",
              "knowsAbout": ["Web Development", "Mobile App Development", "SEO Optimization", "Next.js", "React Native"],
              "areaServed": {
                "@type": "Country",
                "name": "India"
              }
            })
          }}
        />
        <Analytics />
      </body>
    </html>
  )
}
