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
  mainEntityUrl,
}: {
  headline: string
  description: string
  path: string
  datePublished?: string
  dateModified?: string
  mainEntityUrl?: string
}) {
  const url = path.startsWith('http') ? path : `${baseUrl}${path}`
  const now = new Date().toISOString()
  const imageUrl = `${baseUrl}/og?t=${encodeURIComponent(headline)}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url,
    image: [
      { '@type': 'ImageObject', url: imageUrl, width: 1200, height: 630 },
      imageUrl,
    ],
    datePublished: datePublished ?? now,
    dateModified: dateModified ?? now,
    author: [
      { '@type': 'Organization', '@id': `${baseUrl}/#organization`, name: 'Trailblaze Prep', url: baseUrl },
      {
        '@type': 'Person',
        name: 'Krishna Mohan',
        url: `${baseUrl}/team`,
        sameAs: [
          'https://www.linkedin.com/in/krishna-mohan-879b94100/',
          'https://www.salesforce.com/trailblazer/krishnamohan',
        ],
      },
    ],
    publisher: {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'Trailblaze Prep',
      url: baseUrl,
      logo: { '@type': 'ImageObject', url: `${baseUrl}/logo.png` },
    },
    ...(mainEntityUrl ? {
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': mainEntityUrl.startsWith('http') ? mainEntityUrl : `${baseUrl}${mainEntityUrl}`,
      },
    } : {}),
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

/** Course JSON-LD for study guides and exam prep pages. Targets rich results. */
export function getCourseJsonLd({
  name,
  description,
  path,
}: {
  name: string
  description: string
  path: string
}) {
  const url = path.startsWith('http') ? path : `${baseUrl}${path}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    url,
    provider: { '@type': 'Organization', name: 'Trailblaze Prep', url: baseUrl },
    copyrightHolder: { '@type': 'Organization', name: 'Trailblaze Prep', url: baseUrl },
    copyrightYear: new Date().getFullYear(),
    hasCourseInstance: {
      '@type': 'CourseInstance',
      name: `${name} — Exam Prep`,
      courseMode: 'online',
    },
  }
}

/** LearningResource JSON-LD for study guides and exam tips. Targets rich results. */
export function getLearningResourceJsonLd({
  name,
  description,
  path,
}: {
  name: string
  description: string
  path: string
}) {
  const url = path.startsWith('http') ? path : `${baseUrl}${path}`
  return {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name,
    description,
    url,
    learningResourceType: ['study guide', 'practice problem', 'exam preparation'],
    educationalLevel: 'professional',
    inLanguage: 'en',
    isAccessibleForFree: true,
    provider: {
      '@type': 'Organization',
      name: 'Trailblaze Prep',
      url: baseUrl,
    },
  }
}

/** HowTo JSON-LD for study guides and exam tips. Targets rich results. */
export function getHowToJsonLd({
  name,
  description,
  path,
}: {
  name: string
  description: string
  path: string
}) {
  const url = path.startsWith('http') ? path : `${baseUrl}${path}`
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    url,
    step: [
      { '@type': 'HowToStep', name: 'Review the exam outline and section weightage', text: 'Check the official exam guide and use the section-wise weightage to prioritize topics.' },
      { '@type': 'HowToStep', name: 'Study by section', text: 'Use the study plan and exam prep content to cover each section. Focus on high-weight areas first.' },
      { '@type': 'HowToStep', name: 'Practice with sample questions', text: 'Answer the free practice questions and read the explanations to reinforce your understanding.' },
      { '@type': 'HowToStep', name: 'Book your exam', text: 'When you feel ready, schedule your certification exam on Trailhead or the Salesforce Certification portal.' },
    ],
  }
}
