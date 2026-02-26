import Link from 'next/link'
import type { Metadata } from 'next'
import { CERTIFICATION_CATEGORIES } from '@/lib/certifications-data'
import { getWebPageJsonLd, getBreadcrumbListJsonLd } from '@/lib/schema-data'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = 'HTML Sitemap | Trailblaze Prep'
const pageDescription =
  'Browse all Trailblaze Prep pages, including Salesforce certification guides, role hubs, and key site pages.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${baseUrl}/html-sitemap` },
  openGraph: { url: `${baseUrl}/html-sitemap` },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'HTML Sitemap', url: '/html-sitemap' },
]

const corePages = [
  { name: 'All Certifications', href: '/certifications' },
  { name: 'Certification Path', href: '/certification-path' },
  { name: 'ADM-201 Exam Tips', href: '/adm-201-exam-tips-2026' },
  { name: 'ADM-201 vs App Builder', href: '/adm-201-vs-app-builder' },
  { name: 'About', href: '/about' },
  { name: 'Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
  { name: 'Terms of Use', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy' },
]

export default function HtmlSitemapPage() {
  const webPageJsonLd = getWebPageJsonLd({
    name: pageTitle,
    description: pageDescription,
    path: '/html-sitemap',
    breadcrumbItems,
  })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <h1 className="text-3xl font-bold text-gray-900 mb-4">HTML Sitemap</h1>
      <p className="text-gray-600 mb-8">
        Use this page to navigate all key site URLs and certification guides.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Core Pages</h2>
        <ul className="space-y-2">
          {corePages.map((page) => (
            <li key={page.href}>
              <Link href={page.href} className="text-salesforce-blue hover:underline">
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Certification Role Hubs and Guides</h2>
        <div className="space-y-8">
          {CERTIFICATION_CATEGORIES.map((category) => (
            <div key={category.slug}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                <Link href={`/certifications/role/${category.slug}`} className="text-salesforce-blue hover:underline">
                  {category.name} Hub
                </Link>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {category.items.map((item) => (
                  <li key={`${category.slug}-${item.href}`}>
                    <Link href={item.href} className="text-gray-700 hover:text-salesforce-blue hover:underline">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
