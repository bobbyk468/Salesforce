import type { Metadata } from 'next'
import { getWebPageJsonLd, getBreadcrumbListJsonLd } from '@/lib/schema-data'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const contactTitle = 'Contact Trailblaze Prep | Salesforce Certification Prep'
const ogImageUrl = `${baseUrl}/og?t=${encodeURIComponent(contactTitle)}`
const contactDescription =
  'Contact Trailblaze Prep about Salesforce exams, practice questions, study guides, or certification resources.'

export const metadata: Metadata = {
  title: { absolute: contactTitle },
  description: contactDescription,
  alternates: { canonical: `${baseUrl}/contact` },
  openGraph: {
    title: contactTitle,
    description: contactDescription,
    type: 'website',
    url: `${baseUrl}/contact`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: contactTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: contactTitle,
    description: contactDescription,
    images: [{ url: ogImageUrl, alt: contactTitle }],
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
