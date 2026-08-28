import Link from 'next/link'
import { RELEASE_CURRENT } from '@/lib/release-data'
import {
  getCertBreadcrumb,
  getCertBreadcrumbJsonLd,
  getCertFaq,
  getCertFaqHeading,
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
  const breadcrumbJsonLd = getCertBreadcrumbJsonLd(slug, certTitle, roleSlug, roleName)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Visible breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
          {breadcrumb.map((item, i) => (
            <li key={item.url} className="flex items-center gap-1">
              {i > 0 && <span aria-hidden="true">/</span>}
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
    </>
  )
}

/** FAQ section component - rendered separately after H1 for proper SEO structure */
export function CertPageFaq({ slug, certTitle }: CertPageSeoProps) {
  const faqs = getCertFaq(slug, certTitle).slice(0, 2)
  const faqHeading = getCertFaqHeading(slug)
  
  return (
    <section id="faq" className="mt-12 rounded-xl border border-gray-100 bg-gray-50/50 p-6 scroll-mt-24" aria-labelledby="cert-faq-heading">
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
