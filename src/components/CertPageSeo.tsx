import Link from '@/components/AppLink'
import {
  getCertBreadcrumb,
  getCertBreadcrumbJsonLd,
  getCertFaq,
  getCertFaqHeading,
  getCertWebPageJsonLd,
} from '@/lib/cert-seo-data'
import { getRoleSlugForCert, getCategoryBySlug } from '@/lib/certifications-data'
import { getFaqPageJsonLd, getLearningResourceJsonLd } from '@/lib/schema-data'
import { getCertKeywordCluster, getDumpsFaqItem } from '@/lib/cert-keyword-clusters'
import CertDumpsComparison from '@/components/CertDumpsComparison'

/** Schema and visible FAQ use the same slice. */
const VISIBLE_FAQ_COUNT = 5

const siteBaseUrl = 'https://www.trailblazeprep.com'

interface CertPageSeoProps {
  slug: string
  certTitle: string
}

/**
 * The five editorial FAQs plus the NDA-compliance answer for "<name> dumps".
 * The visible accordion and the FAQPage JSON-LD both read from here, so the
 * dumps question cannot appear in one and be missing from the other.
 */
function getCertPageFaqItems(slug: string, certTitle: string) {
  const dumpsFaq = getDumpsFaqItem(slug)
  const editorial = getCertFaq(slug, certTitle)
    .filter((item) => !/\bdumps\b/i.test(item.question))
    .slice(0, VISIBLE_FAQ_COUNT)
  return dumpsFaq ? [...editorial, dumpsFaq] : editorial
}

export default function CertPageSeo({ slug, certTitle }: CertPageSeoProps) {
  const roleSlug = getRoleSlugForCert(slug)
  const roleCategory = roleSlug ? getCategoryBySlug(roleSlug) : undefined
  const roleName = roleCategory?.name
  const breadcrumb = getCertBreadcrumb(slug, certTitle, roleSlug, roleName)
  const breadcrumbJsonLd = getCertBreadcrumbJsonLd(slug, certTitle, roleSlug, roleName)
  const faqJsonLd = getFaqPageJsonLd(getCertPageFaqItems(slug, certTitle))
  // Certification pages had no page-level entity, so the visible "Last updated"
  // line had no structured date to agree with. getCertWebPageJsonLd existed but
  // was never called; it now supplies WebPage with datePublished/dateModified.
  const webPageJsonLd = getCertWebPageJsonLd(slug, certTitle, roleSlug, roleName)
  const learningResourceJsonLd = getLearningResourceJsonLd({
    name: `${certTitle} practice questions and study guide`,
    description: `Free practice questions, exam topics, and study notes for ${certTitle}.`,
    path: `/certifications/${slug}`,
  })
  // Change D: every naming variant and exam code for this credential, so the
  // page's own entity carries the aliases a searcher types, not just the
  // official title. The cluster is the same one the visible copy renders from.
  const cluster = getCertKeywordCluster(slug)
  const clusterJsonLd = cluster
    ? {
        alternateName: cluster.alternateNames,
        keywords: cluster.keywords.join(', '),
      }
    : {}
  const webPageWithAliases = { ...webPageJsonLd, ...clusterJsonLd }
  const learningResourceWithAliases = { ...learningResourceJsonLd, ...clusterJsonLd }

  return (
    <>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageWithAliases) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(learningResourceWithAliases) }}
      />
      {/* Visible breadcrumb */}
      <nav data-nosnippet aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
          {breadcrumb.map((item, i) => (
            <li key={item.url} className="flex items-center gap-1">
              {i > 0 && <span aria-hidden="true">/</span>}
              {i === breadcrumb.length - 1 ? (
                <span className="font-medium text-gray-900" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.url.replace(siteBaseUrl, '') || '/'} className="inline-block py-1 hover:text-salesforce-blue">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>

    </>
  )
}

/** FAQ section component - rendered separately after H1 for proper SEO structure */
export function CertPageFaq({ slug, certTitle }: CertPageSeoProps) {
  const faqs = getCertPageFaqItems(slug, certTitle)
  const faqHeading = getCertFaqHeading(slug)

  return (
    <>
    <CertDumpsComparison slug={slug} />
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
    </>
  )
}
