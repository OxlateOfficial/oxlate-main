import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { SmoothScroll } from '@/components/ui/smooth-scroll'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Oxlate — Premium technology partner',
  description: 'Oxlate is a premium technology partner building thoughtful web experiences and mobile applications for ambitious teams.',
  generator: 'Oxlate',
  openGraph: {
    title: 'Oxlate — Premium technology partner',
    description: 'Thoughtful web experiences and mobile applications, built with care.',
    type: 'website',
    siteName: 'Oxlate',
  },
  icons: { icon: '/icon.svg' },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: 'oklch(0.965 0.018 88)',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${geist.variable} ${geistMono.variable}`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
