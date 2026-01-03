import type { Metadata, Viewport } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// <CHANGE> Added Inter and Orbitron fonts
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})



// <CHANGE> Updated metadata for Oxlate
export const metadata: Metadata = {
  title: 'Oxlate | Digital Solutions for Indian Businesses',
  description: 'Professional website development, app development, and business automation services for Indian SMBs. Clear pricing, fast delivery, built for India.',
  keywords: ['website development India', 'app development', 'business automation', 'digital services', 'SMB solutions'],
  authors: [{ name: 'Oxlate' }],
  creator: 'Oxlate',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://oxlate.com',
    title: 'Oxlate | Digital Solutions for Indian Businesses',
    description: 'We Build Digital Solutions That Actually Work',
    siteName: 'Oxlate',
  },
  manifest: "/manifest.json",
  icons: {
    // The primary icon for your site (e.g., in browser tabs).
    icon: "/icon.svg",
    // A fallback shortcut icon.
    shortcut: "/favicon.ico",
    // Icon for Apple devices when added to the home screen.
    apple: "/apple-icon.png",
  },

    appleWebApp: {
    title: "Oxlate", // Sets the <meta name="apple-mobile-web-app-title"> tag.
    capable: true,
    statusBarStyle: "default",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#1E40AF',
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
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
