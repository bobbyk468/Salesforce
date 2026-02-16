import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import StickyMobileCta from '@/components/StickyMobileCta'
import {
  getCertBreadcrumb,
  getCertBreadcrumbJsonLd,
  getCertFaq,
  getCertFaqHeading,
  getCertFaqJsonLd,
  getCertHowToJsonLd,
  getCertWebPageJsonLd,
  SLUG_TO_EXAM_CODE,
} from '@/lib/cert-seo-data'
import { getRoleSlugForCert, getCategoryBySlug } from '@/lib/certifications-data'

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
  const howToJsonLd = getCertHowToJsonLd(slug, certTitle)
  const webPageJsonLd = getCertWebPageJsonLd(slug, certTitle, roleSlug, roleName)
  const pageUrl = `${siteBaseUrl}/certifications/${slug}`
  const nowIso = new Date().toISOString()

  const courseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `${certTitle}${SLUG_TO_EXAM_CODE[slug] ? ` (${SLUG_TO_EXAM_CODE[slug]})` : ''}`,
    description: `Prepare for ${certTitle} with section-wise exam weightage, study plan, and sample practice questions.`,
    provider: { '@type': 'Organization', name: 'Trailblaze Prep' },
    copyrightHolder: { '@type': 'Organization', name: 'Trailblaze Prep' },
    copyrightYear: new Date().getFullYear(),
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      name: `${certTitle} Certification Exam`,
      courseMode: 'online',
    },
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${certTitle}${SLUG_TO_EXAM_CODE[slug] ? ` (${SLUG_TO_EXAM_CODE[slug]})` : ''} Study Guide and Practice Questions`,
    description: `Prepare for ${certTitle} with section-wise exam weightage, study plan, and sample practice questions.`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
    author: {
      '@type': 'Organization',
      name: 'Trailblaze Prep Editorial Team',
      url: `${siteBaseUrl}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Trailblaze Prep',
      url: siteBaseUrl,
    },
    datePublished: nowIso,
    dateModified: nowIso,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(credentialJsonLd) }}
      />

      {/* Visible breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
          {breadcrumb.map((item, i) => (
            <li key={item.url} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="h-4 w-4 text-gray-400" />}
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
