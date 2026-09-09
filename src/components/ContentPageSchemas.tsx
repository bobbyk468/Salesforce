import {
  getWebPageJsonLd,
  getBreadcrumbListJsonLd,
  getArticleJsonLd,
  getFaqPageJsonLd,
  type BreadcrumbItem,
  type FaqItem,
} from '@/lib/schema-data'

export interface ContentPageSchemasProps {
  headline: string
  description: string
  path: string
  breadcrumbItems: BreadcrumbItem[]
  faqItems?: FaqItem[]
  /** Optional related URL this content is about (e.g. study guide URL for exam-tips pages). */
  mainEntityUrl?: string
  /** Optional array of related URLs this page is about (for comparison pages). */
  aboutEntities?: string[]
}

/**
 * Renders lean JSON-LD for content pages.
 * Keep this intentionally small: over-marking every page as Article + Course + HowTo +
 * LearningResource bloats HTML and weakens schema precision at scale.
 */
export default function ContentPageSchemas({
  headline,
  description,
  path,
  breadcrumbItems,
  faqItems,
  mainEntityUrl,
  aboutEntities,
}: ContentPageSchemasProps) {
  const webPageJsonLd = getWebPageJsonLd({
    name: headline,
    description,
    path,
    breadcrumbItems,
  })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline, description, path, mainEntityUrl, about: aboutEntities })

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
    </>
  )
}
