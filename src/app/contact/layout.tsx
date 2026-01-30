import type { Metadata } from 'next'
import { getWebPageJsonLd, getBreadcrumbListJsonLd } from '@/lib/schema-data'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Trailblaze Prep for questions about practice questions, study guides, or certification prep. We respond to inquiries about Admin, Developer, Consultant, and other Salesforce credentials.',
}

const contactBreadcrumb = [{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact' }]

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  const webPageJsonLd = getWebPageJsonLd({
    name: 'Contact Us | Trailblaze Prep',
    description:
      'Contact Trailblaze Prep for questions about practice questions, study guides, or certification prep. We respond to inquiries about Admin, Developer, Consultant, and other Salesforce credentials.',
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
