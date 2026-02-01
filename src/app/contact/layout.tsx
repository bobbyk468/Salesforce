import type { Metadata } from 'next'
import { getWebPageJsonLd, getBreadcrumbListJsonLd } from '@/lib/schema-data'

const contactDescription =
  'Contact Trailblaze Prep for questions about Salesforce certification prep, practice questions, and study guides for Admin, Developer, and Consultant exams.'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: contactDescription,
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
