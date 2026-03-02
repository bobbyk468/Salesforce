import {
  getWebPageJsonLd,
  getBreadcrumbListJsonLd,
  getArticleJsonLd,
  getFaqPageJsonLd,
  getCourseJsonLd,
  getLearningResourceJsonLd,
  getHowToJsonLd,
  type BreadcrumbItem,
  type FaqItem,
} from '@/lib/schema-data'

export interface ContentPageSchemasProps {
  headline: string
  description: string
  path: string
  breadcrumbItems: BreadcrumbItem[]
  faqItems?: FaqItem[]
  /** Optional: custom HowTo name (defaults to "How to prepare using this guide") */
  howToName?: string
}

/**
 * Renders all JSON-LD schema scripts for content pages (study guides, exam tips, vs pages, etc.)
 * to match cert pages with ~6 valid Rich Results items.
 */
export default function ContentPageSchemas({
  headline,
  description,
  path,
  breadcrumbItems,
  faqItems,
  howToName,
}: ContentPageSchemasProps) {
  const webPageJsonLd = getWebPageJsonLd({
    name: headline,
    description,
    path,
    breadcrumbItems,
  })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline, description, path })
  const courseJsonLd = getCourseJsonLd({ name: headline, description, path })
  const learningResourceJsonLd = getLearningResourceJsonLd({ name: headline, description, path })
  const howToJsonLd = getHowToJsonLd({
    name: howToName ?? `How to prepare using this guide: ${headline}`,
    description,
    path,
  })

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqItems && faqItems.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getFaqPageJsonLd(faqItems)),
          }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(learningResourceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
    </>
  )
}
