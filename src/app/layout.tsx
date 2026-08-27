import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DesktopSidebarSlot from '@/components/DesktopSidebarSlot'
import StickyContentCta from '@/components/StickyContentCta'

import { SITE_NAME, SOCIAL_LINKS } from '@/lib/constants'
import { RELEASE_CURRENT } from '@/lib/release-data'
import dynamic from 'next/dynamic'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: true,
})

const DeferredStickyContentCta = dynamic(() => import('@/components/StickyContentCta'), { ssr: false })
const DeferredDesktopSidebarSlot = dynamic(() => import('@/components/DesktopSidebarSlot'), { ssr: false })
const DeferredChatBot = dynamic(() => import('@/components/ChatBot'), { ssr: false })
const DeferredFloatingContactButtons = dynamic(() => import('@/components/FloatingContactButtons'), { ssr: false })
import { GoogleAnalytics } from '@next/third-parties/google'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

export const viewport: Viewport = {
  themeColor: '#0176D3', // Salesforce blue
}

const defaultTitle = `Free Salesforce Practice Exams (${RELEASE_CURRENT}) | ${SITE_NAME}`
const defaultDescription =
  `Free Salesforce certification prep: ${RELEASE_CURRENT} exam weightage, 4,200+ practice questions, and study guides for Admin, Developer, Consultant & Architect.`

export const metadata: Metadata = {
  // Hardcode metadataBase for stability (per Gemini recommendation)
  // Prevents issues if NEXT_PUBLIC_SITE_URL is undefined during build
  metadataBase: new URL('https://www.trailblazeprep.com'),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: defaultDescription,
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
        url: `${siteUrl}/og?t=${encodeURIComponent(defaultTitle)}`,
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
    images: [`${siteUrl}/og?t=${encodeURIComponent(defaultTitle)}`],
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
    '@id': `${siteUrl}/#organization`,
    name: 'Trailblaze Prep',
    url: siteUrl,
    description:
      'Independent Salesforce certification preparation resource: free practice questions, section-wise exam weightage, and study guides for all 90 Salesforce credentials — Admin, Developer, Consultant, Architect, Marketing, Designer, Tableau, MuleSoft, and Accredited Professional.',
    logo: `${siteUrl}/logo.png`,
    sameAs: SOCIAL_LINKS.filter(Boolean),
    foundingDate: '2025',
    areaServed: 'Worldwide',
    knowsAbout: [
      'Salesforce certification preparation',
      'Salesforce ADM-201 exam',
      'Salesforce Platform Developer I',
      'Salesforce Platform Developer II',
      'Salesforce App Builder',
      'Salesforce Sales Cloud Consultant',
      'Salesforce Service Cloud Consultant',
      'Salesforce Marketing Cloud',
      'Salesforce Architect certifications',
      'Salesforce practice questions',
      'Salesforce exam study guides',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'km.krishnamohan25@gmail.com',
    },
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Trailblaze Prep',
    url: siteUrl,
    description: 'Free Salesforce certification practice questions, exam weightage, and study guides for all 90 certifications.',
    publisher: { '@type': 'Organization', name: 'Trailblaze Prep', url: siteUrl },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/certifications?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const criticalLayoutCSS = `
@media (min-width: 1024px) {
  [data-main-layout] { display: grid; grid-template-columns: 1fr 320px; }
}
@media (max-width: 1023px) {
  [data-critical-header] {
    min-height: 4rem;
    background: #fff;
    border-bottom: 1px solid #f3f4f6;
    position: sticky;
    top: 0;
    z-index: 50;
  }
  [data-critical-content] {
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto;
    padding: 2rem 1rem;
    position: relative;
    z-index: 10;
  }
  [data-lcp-hero] {
    background: linear-gradient(to bottom right, #0176D3, #1B96FF, #0176D3);
    padding: 1.5rem;
    color: #fff;
    border-radius: 0.75rem;
    margin-bottom: 1.5rem;
  }
  [data-lcp-hero] h1 { font-size: 1.25rem; font-weight: 700; line-height: 1.3; color: #fff; margin-bottom: 0.75rem; }
  [data-lcp-hero] p { color: rgba(255,255,255,0.9); margin-bottom: 0.5rem; }
  [data-lcp-hero] p:first-of-type { color: rgba(255,255,255,0.8); font-size: 0.875rem; font-weight: 500; margin-bottom: 0.5rem; }
  .cert-page-intro > p:first-of-type { color: #374151; line-height: 1.625; margin-bottom: 0.75rem; font-size: 0.875rem; }
}
@media (min-width: 640px) and (max-width: 1023px) {
  [data-lcp-hero] h1 { font-size: 1.5rem; }
  [data-lcp-hero] p { font-size: 1rem; }
  .cert-page-intro > p:first-of-type { font-size: 1rem; }
  /* LCP header for article/study guide pages (light background) */
  [data-lcp-header] { margin-bottom: 2.5rem; }
  [data-lcp-header] h1 { font-size: 1.875rem; font-weight: 700; line-height: 1.3; color: #111; }
  [data-lcp-header] p { color: #4b5563; line-height: 1.625; }
}
@media (min-width: 640px) and (max-width: 1023px) {
  [data-lcp-header] h1 { font-size: 2.25rem; }
}
`

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <style dangerouslySetInnerHTML={{ __html: criticalLayoutCSS }} />
      </head>
      <body className={inter.className}>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow grid grid-cols-1 lg:grid-cols-[1fr_320px]" data-main-layout>
            <div className="min-w-0">
              {children}
              <DeferredStickyContentCta />
            </div>
            <aside className="no-print hidden lg:block w-[320px] min-h-[600px] border-l border-gray-100 bg-gradient-to-b from-gray-50/80 to-white" aria-label="Contact sidebar">
              <div className="p-6 pl-4 sticky top-24 w-[320px] min-w-0">
                <DeferredDesktopSidebarSlot />
              </div>
            </aside>
          </main>
          <Footer />
        </div>
        <DeferredFloatingContactButtons />
        <DeferredChatBot />
      </body>
    </html>
  )
}
