import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactSidebar from '@/components/ContactSidebar'
import { SITE_NAME } from '@/lib/constants'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://trailblazeprep.com'

export const viewport: Viewport = {
  themeColor: '#0176D3', // Salesforce blue
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `Salesforce Certification Practice Questions & Study Guides | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Prepare for every Salesforce certification with practice questions, section-wise exam weightage, and study guides. Know where to focus and when you\'re ready—browse by role and start free. Admin, Developer, Consultant, Architect & more.',
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
    title: `Salesforce Certification Practice Questions & Study Guides | ${SITE_NAME}`,
    description:
      'Prepare for every Salesforce certification with practice questions, section-wise exam weightage, and study guides. Know where to focus—browse by role and start free.',
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: SITE_NAME,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Trailblaze Prep - Salesforce Certification Practice Questions & Study Guides',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salesforce Certification Practice Questions & Study Guides',
    description: 'Practice questions, exam weightage, and study guides for all Salesforce certifications. Browse by role and start free.',
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'article:published_time': '2025-01-01T00:00:00Z',
    'article:modified_time': '2025-01-30T00:00:00Z',
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
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'km.krishnamohan25@gmail.com',
    },
  }

  return (
    <html lang="en">
      <head>
        {/* Preconnect to external resources for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className={inter.className}>
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
        <SpeedInsights />
      </body>
    </html>
  )
}
