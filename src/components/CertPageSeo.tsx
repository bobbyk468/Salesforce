import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import StickyMobileCta from '@/components/StickyMobileCta'
import { RELEASE_CURRENT, RELEASE_DATE } from '@/lib/release-data'
import {
  getCertBreadcrumb,
  getCertBreadcrumbJsonLd,
  getCertFaq,
  getCertFaqHeading,
  getCertFaqJsonLd,
  getCertWebPageJsonLd,
  getExamWeightageTableJsonLd,
  SLUG_TO_EXAM_CODE,
  getOccupationData,
} from '@/lib/cert-seo-data'
import { getRoleSlugForCert, getCategoryBySlug } from '@/lib/certifications-data'
import { getOccupationJsonLd } from '@/lib/schema-data'

const siteBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

interface CertPageSeoProps {
  slug: string
  certTitle: string
}

export default function CertPageSeo({ slug, certTitle }: CertPageSeoProps) {
  const roleSlug = getRoleSlugForCert(slug)
  const roleCategory = roleSlug ? getCategoryBySlug(roleSlug) : undefined
  const roleName = roleCategory?.name
  const breadcrumb = getCertBreadcrumb(slug, certTitle, roleSlug, roleName)
  const faqs = getCertFaq(slug, certTitle)
  const breadcrumbJsonLd = getCertBreadcrumbJsonLd(slug, certTitle, roleSlug, roleName)
  const faqJsonLd = getCertFaqJsonLd(slug, certTitle)
  const webPageJsonLd = getCertWebPageJsonLd(slug, certTitle, roleSlug, roleName)
  const pageUrl = `${siteBaseUrl}/certifications/${slug}`
  const articleHeadline = `${certTitle}${SLUG_TO_EXAM_CODE[slug] ? ` (${SLUG_TO_EXAM_CODE[slug]})` : ''} Study Guide and Practice Questions`
  const ogImageUrl = `${siteBaseUrl}/og?t=${encodeURIComponent(articleHeadline)}`
  // Use RELEASE_DATE for dateModified — signals freshness when content is refreshed for a new release.
  const datePublished = '2024-10-01T00:00:00Z'
  const dateModified = `${RELEASE_DATE}T00:00:00Z`

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: articleHeadline,
    description: `Prepare for ${certTitle} with section-wise exam weightage, study plan, and sample practice questions.`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
    image: [
      { '@type': 'ImageObject', url: ogImageUrl, width: 1200, height: 630 },
      ogImageUrl,
    ],
    author: [
      { '@type': 'Organization', name: 'Trailblaze Prep', url: siteBaseUrl },
      {
        '@type': 'Person',
        name: 'Krishna Mohan',
        url: `${siteBaseUrl}/about`,
        sameAs: [
          'https://www.linkedin.com/in/krishna-mohan-879b94100/',
          'https://trailblazer.me/id/krishnamohan',
        ],
        jobTitle: '5x Salesforce Certified Developer',
        knowsAbout: ['Salesforce Administration', 'Salesforce Development', 'Platform App Builder', 'Sales Cloud', 'Apex'],
      },
    ],
    publisher: {
      '@type': 'Organization',
      name: 'Trailblaze Prep',
      url: siteBaseUrl,
      logo: { '@type': 'ImageObject', url: `${siteBaseUrl}/og?t=Trailblaze%20Prep`, width: 600, height: 315 },
    },
    datePublished,
    dateModified,
    inLanguage: 'en',
  }

  const credentialJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalCredential',
    name: `${certTitle}${SLUG_TO_EXAM_CODE[slug] ? ` (${SLUG_TO_EXAM_CODE[slug]})` : ''}`,
    description: `Professional certification for ${certTitle}. Prepare with exam weightage, study plan, and practice questions.`,
    credentialCategory: 'professional certification',
    recognizedBy: {
      '@type': 'Organization',
      name: 'Salesforce',
      url: 'https://www.salesforce.com',
    },
  }

  const tableJsonLd = getExamWeightageTableJsonLd(slug, certTitle)

  const occupationData = getOccupationData(slug)
  const occupationJsonLd = occupationData ? getOccupationJsonLd({
    jobTitle: occupationData.jobTitle,
    description: `${occupationData.jobTitle} role with ${certTitle} certification. Mid-level salary range in United States.`,
    medianSalary: occupationData.medianSalary,
    salaryRange: occupationData.salaryRange,
  }) : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(credentialJsonLd) }}
      />
      {tableJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(tableJsonLd) }}
        />
      )}
      {occupationJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(occupationJsonLd) }}
        />
      )}

      {/* Visible breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
          {breadcrumb.map((item, i) => (
            <li key={item.url} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="h-4 w-4 text-gray-600" aria-hidden="true" />}
              {i === breadcrumb.length - 1 ? (
                <span className="font-medium text-gray-900" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.url.replace(siteBaseUrl, '') || '/'} className="hover:text-salesforce-blue">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Freshness + E-E-A-T badge — visible to users and crawlers */}
      <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-xs font-medium text-salesforce-dark mb-4">
        Updated for {RELEASE_CURRENT}
      </p>

      {/* Global mobile CTA for certification pages */}
      <StickyMobileCta />
    </>
  )
}

/** FAQ section component - rendered separately after H1 for proper SEO structure */
export function CertPageFaq({ slug, certTitle }: CertPageSeoProps) {
  const faqs = getCertFaq(slug, certTitle)
  const faqHeading = getCertFaqHeading(slug)
  
  return (
    <section className="mt-12 rounded-xl border border-gray-100 bg-gray-50/50 p-6" aria-labelledby="cert-faq-heading">
      <h2 id="cert-faq-heading" className="text-xl font-bold text-gray-900 mb-4">
        {faqHeading}
      </h2>
      <dl className="space-y-4">
        {faqs.map((item, i) => (
          <div key={i} className="bg-white rounded-lg p-4 shadow-sm">
            <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
            <dd className="text-gray-700 text-sm leading-relaxed">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
