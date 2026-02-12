import type { Metadata } from 'next'
import { getWebPageJsonLd, getBreadcrumbListJsonLd } from '@/lib/schema-data'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const ogImageUrl = `${baseUrl}/og-image`
const contactDescription =
  'Contact Trailblaze Prep for questions about Salesforce certification prep, practice questions, and study guides for Admin, Developer, and Consultant exams.'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: contactDescription,
  alternates: { canonical: `${baseUrl}/contact` },
  openGraph: {
    title: 'Contact Us | Trailblaze Prep',
    description: contactDescription,
    type: 'website',
    url: `${baseUrl}/contact`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: 'Contact Us | Trailblaze Prep' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Trailblaze Prep',
    description: contactDescription,
    images: [ogImageUrl],
  },
}

const contactBreadcrumb = [{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact' }]

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  const webPageJsonLd = getWebPageJsonLd({
    name: 'Contact Us | Trailblaze Prep',
    description: contactDescription,
    path: '/contact',
    breadcrumbItems: contactBreadcrumb,
  })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(contactBreadcrumb)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {children}
    </>
  )
}
