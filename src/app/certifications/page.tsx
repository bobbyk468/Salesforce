import Link from 'next/link'
import { Award, ArrowRight } from 'lucide-react'
import { Metadata } from 'next'
import { CERTIFICATION_CATEGORIES } from '@/lib/certifications-data'
import { getWebPageJsonLd, getBreadcrumbListJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const indexTitle = `All Salesforce Certifications (${RELEASE_CURRENT}) | Free Practice`
const indexDescription =
  `Browse Salesforce certifications by role with ${RELEASE_CURRENT} study guides, free practice questions, and exam weightage. Pick your path and start practicing now.`
const ogImageUrl = `${baseUrl}/og?t=${encodeURIComponent(indexTitle)}`

export const metadata: Metadata = {
  title: { absolute: indexTitle },
  description: indexDescription,
  alternates: {
    canonical: `${baseUrl}/certifications`,
  },
  openGraph: {
    title: indexTitle,
    description: indexDescription,
    type: 'website',
    url: `${baseUrl}/certifications`,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'All Salesforce Certifications - Practice Questions & Study Guides',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: indexTitle,
    description: indexDescription,
    images: [ogImageUrl],
  },
}

const certsBreadcrumb: { name: string; url: string }[] = [
  { name: 'Home', url: '/' },
  { name: 'All Certifications', url: '/certifications' },
]

export default function CertificationsIndexPage() {
  const webPageJsonLd = getWebPageJsonLd({
    name: indexTitle,
    description: indexDescription,
    path: '/certifications',
    breadcrumbItems: certsBreadcrumb,
  })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(certsBreadcrumb)

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">All Salesforce Certifications</h1>
        <p className="text-xl text-gray-600 mb-2">
          Browse by role and find practice questions and study materials for every Salesforce credential.
        </p>
        <p className="text-gray-600">
          Each role (Administrator, Developer, Consultant, and more) links to certification pages with exam weightage, study guides, and sample questions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATION_CATEGORIES.map((category) => (
          <Link
            key={category.slug}
            href={`/certifications/role/${category.slug}`}
            className="bg-white rounded-xl shadow-lg p-6 card-hover flex items-center justify-between group border border-gray-100 hover:border-salesforce-blue/50 transition-all duration-200"
            aria-label={`Browse ${category.name} certifications`}
          >
            <div className="flex items-center">
              <Award className="h-10 w-10 text-salesforce-blue mr-4" aria-label={`${category.name} certification category icon`} />
              <div>
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-salesforce-blue transition-colors">
                  {category.name}
                </h2>
                <p className="text-gray-500 text-sm">
                  {category.items.length} certification{category.items.length !== 1 ? 's' : ''}
                </p>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-salesforce-blue group-hover:translate-x-1 transition-all" />
          </Link>
        ))}
      </div>

      <div className="mt-12 bg-salesforce-blue/10 rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Explore More Certification Resources</h3>
        <p className="text-gray-600 mb-6">
          Use the header menu to pick a role (e.g. Administrator, Developer, Consultant). Then see all certifications in that category.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/salesforce-certifications-list"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
          >
            View Complete Cert List
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/salesforce-certification-cost"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-all duration-200"
          >
            Exam Fees &amp; Costs
          </Link>
          <Link
            href="/certification-path"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-all duration-200"
          >
            Plan Your Cert Path
          </Link>
        </div>
      </div>
    </div>
  )
}
