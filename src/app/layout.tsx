import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactSidebar from '@/components/ContactSidebar'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { SITE_NAME, SOCIAL_LINKS } from '@/lib/constants'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

export const viewport: Viewport = {
  themeColor: '#0176D3', // Salesforce blue
}

// Homepage/default title kept concise to avoid SERP truncation.
const defaultTitle = `Salesforce Certification Practice Questions | ${SITE_NAME}`
const defaultDescription =
  'Prepare for Salesforce certifications with free practice questions, exam weightage, and study guides for Admin, Developer, Consultant, and Architect.'

export const metadata: Metadata = {
  // Hardcode metadataBase for stability (per Gemini recommendation)
  // Prevents issues if NEXT_PUBLIC_SITE_URL is undefined during build
  metadataBase: new URL('https://www.trailblazeprep.com'),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: defaultDescription,
  keywords:
    'Salesforce certification, Salesforce practice questions, Salesforce exam weightage, ADM-201, Platform Administrator, Sales Cloud, Service Cloud, Marketing Cloud, Salesforce study guide',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: SITE_NAME,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Trailblaze Prep - Salesforce certification practice questions and study guides',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'AYiD5uBX-IrXU2ct31djzowDhOENDWAtm8NBBn0P01o',
  },
  other: {
    'article:published_time': '2025-01-01T00:00:00Z',
    'article:modified_time': '2026-02-12T00:00:00Z',
    'msvalidate.01': 'C988188920AE8258DD5A37CE98DE4B96', // Bing Webmaster Tools
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Trailblaze Prep',
    url: siteUrl,
    description:
      'Independent Salesforce certification preparation resource: practice questions, section-wise exam weightage, and study guides for Admin, Developer, Consultant, Architect, and more.',
    logo: `${siteUrl}/logo.png`,
    sameAs: SOCIAL_LINKS.filter(Boolean),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'km.krishnamohan25@gmail.com',
    },
  }

  return (
    <html lang="en">
      <head>
        {/* Ahrefs Web Analytics monitor */}
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="pZm0c/nF2eh+3+9rhHMPQg"
          async
        />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow flex">
            <div className="flex-1 min-w-0">
              {children}
            </div>
            <div className="hidden lg:block border-l border-gray-100 bg-gradient-to-b from-gray-50/80 to-white min-h-[60vh]">
              <div className="p-6 pl-4 sticky top-24">
                <ContactSidebar />
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
