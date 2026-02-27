/**
 * Shared JSON-LD schema helpers for all pages. Ensures every page has verifiable
 * schema markup (WebPage, BreadcrumbList) for SEO audits.
 */

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

export interface BreadcrumbItem {
  name: string
  url: string
}

/** BreadcrumbList JSON-LD for any page. */
export function getBreadcrumbListJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`,
    })),
  }
}

/** Article JSON-LD for blog/guide pages. Adds Google Discover + rich-result eligibility. */
export function getArticleJsonLd({
  headline,
  description,
  path,
  datePublished,
  dateModified,
}: {
  headline: string
  description: string
  path: string
  datePublished?: string
  dateModified?: string
}) {
  const url = path.startsWith('http') ? path : `${baseUrl}${path}`
  const now = new Date().toISOString()
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url,
    datePublished: datePublished ?? now,
    dateModified: dateModified ?? now,
    author: { '@type': 'Organization', name: 'Trailblaze Prep', url: baseUrl },
    publisher: {
      '@type': 'Organization',
      name: 'Trailblaze Prep',
      url: baseUrl,
      logo: { '@type': 'ImageObject', url: `${baseUrl}/logo.png` },
    },
  }
}

export interface FaqItem {
  question: string
  answer: string
}

/** FAQPage JSON-LD for exam-tips, comparison, and path pages. Enables "People Also Ask" rich snippets. */
export function getFaqPageJsonLd(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}

/** WebPage JSON-LD for any page. Use with BreadcrumbList for full coverage. */
export function getWebPageJsonLd({
  name,
  description,
  path,
  breadcrumbItems,
}: {
  name: string
  description: string
  path: string
  breadcrumbItems?: BreadcrumbItem[]
}) {
  const url = path.startsWith('http') ? path : `${baseUrl}${path}`
  const page: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    publisher: { '@type': 'Organization', name: 'Trailblaze Prep', url: baseUrl },
  }
  if (breadcrumbItems && breadcrumbItems.length > 0) {
    const items = breadcrumbItems.map((b) => ({
      name: b.name,
      url: b.url.startsWith('http') ? b.url : `${baseUrl}${b.url}`,
    }))
    page.breadcrumb = getBreadcrumbListJsonLd(items)
  }
  return page
}
