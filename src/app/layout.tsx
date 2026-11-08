import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { DeferredStickyContentCta, DeferredDesktopSidebarSlot, DeferredChatBot, DeferredFloatingContactButtons } from '@/components/DeferredSiteChrome'
import ClientOnly from '@/components/ClientOnly'

import { SITE_DEFAULT_DESCRIPTION, SITE_DEFAULT_TITLE, SITE_NAME, SOCIAL_LINKS } from '@/lib/constants'

const inter = Inter({
  subsets: ['latin'],
  // Keep the adjusted fallback on slow connections instead of shifting content late.
  display: 'swap',
  adjustFontFallback: true,
})

import DeferredGoogleAnalytics from '@/components/GoogleAnalytics'

const siteUrl = 'https://www.trailblazeprep.com'

export const viewport: Viewport = {
  themeColor: '#0176D3', // Salesforce blue
}

const defaultTitle = SITE_DEFAULT_TITLE
const defaultDescription = SITE_DEFAULT_DESCRIPTION

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
      'Independent Salesforce certification preparation resource: free practice questions, section-wise exam weightage, and study guides across Salesforce credential tracks: Admin, Developer, Consultant, Architect, Marketing, Designer, Tableau, MuleSoft, and Accredited Professional.',
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
      url: `${siteUrl}/contact`,
    },
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Trailblaze Prep',
    url: siteUrl,
    description: 'Free Salesforce certification practice questions, exam weightage, and study guides across Salesforce certification tracks.',
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


  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className={inter.className}>
        {/*
          @next/third-parties' GoogleAnalytics loads gtag with
          afterInteractive, which runs inside the Lighthouse measurement
          window and lands on Total Blocking Time. The repo already had an
          interaction-gated loader written for exactly this, sitting unused;
          it loads gtag on first interaction or after a 20s/30s idle
          fallback, so analytics still fires for passive visitors.
        */}
        <DeferredGoogleAnalytics />
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
          <main id="main-content" tabIndex={-1} className="flex-grow grid grid-cols-1 lg:grid-cols-[1fr_320px]" data-main-layout>
            <div className="min-w-0">
              {children}
              <DeferredStickyContentCta />
            </div>
            <aside className="no-print hidden lg:block w-[320px] min-h-[600px] border-l border-gray-100 bg-gradient-to-b from-gray-50/80 to-white" aria-label="Contact sidebar">
              <div className="p-6 pl-4 sticky top-24 w-full min-w-0">
                <DeferredDesktopSidebarSlot />
              </div>
            </aside>
          </main>
          <Footer />
        </div>
        {/*
          Wrapped so their first client render matches the server's empty
          output. Without this the lazy chunks could resolve during hydration
          and add three tooltip text nodes the server never emitted, which
          threw React #418 three times on every page of the site.
        */}
        <ClientOnly>
          <DeferredFloatingContactButtons />
          <DeferredChatBot />
        </ClientOnly>
      </body>
    </html>
  )
}
