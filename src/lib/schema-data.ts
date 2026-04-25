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
  about,
}: {
  headline: string
  description: string
  path: string
  datePublished?: string
  dateModified?: string
  mainEntityUrl?: string
  about?: string[]
}) {
  const url = path.startsWith('http') ? path : `${baseUrl}${path}`
  const now = new Date().toISOString()
  const imageUrl = `${baseUrl}/og?t=${encodeURIComponent(headline)}`
  const article: Record<string, unknown> = {
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
  }

  // Use 'about' if provided (for comparison pages), otherwise use mainEntityOfPage
  if (about && about.length > 0) {
    article.about = about.map(entityUrl => ({
      '@type': 'Thing',
      url: entityUrl.startsWith('http') ? entityUrl : `${baseUrl}${entityUrl}`,
    }))
  } else if (mainEntityUrl) {
    article.mainEntityOfPage = {
      '@type': 'WebPage',
      '@id': mainEntityUrl.startsWith('http') ? mainEntityUrl : `${baseUrl}${mainEntityUrl}`,
    }
  }

  return article
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

/** ComparisonHub JSON-LD with hasPart listing. Makes the hub the parent entity of all VS pages. */
export function getComparisonHubJsonLd({
  headline,
  description,
  path,
  vsPageUrls,
}: {
  headline: string
  description: string
  path: string
  vsPageUrls: string[]
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
    datePublished: now,
    dateModified: now,
    author: [
      { '@type': 'Organization', name: 'Trailblaze Prep', url: baseUrl },
      {
        '@type': 'Person',
        name: 'Krishna Mohan',
        url: `${baseUrl}/team`,
        sameAs: 'https://www.linkedin.com/in/krishna-mohan-879b94100/',
      },
    ],
    publisher: {
      '@type': 'Organization',
      name: 'Trailblaze Prep',
      url: baseUrl,
      logo: { '@type': 'ImageObject', url: `${baseUrl}/logo.png` },
    },
    hasPart: vsPageUrls.map(vsUrl => ({
      '@type': 'CreativeWork',
      url: vsUrl.startsWith('http') ? vsUrl : `${baseUrl}${vsUrl}`,
    })),
  }
}

/** Occupation JSON-LD for cert pages with salary range. Helps Google understand the economic value of the credential. */
export function getOccupationJsonLd({
  jobTitle,
  description,
  medianSalary,
  salaryRange,
}: {
  jobTitle: string
  description: string
  medianSalary: number
  salaryRange?: { minSalary?: number; maxSalary?: number }
}) {
  const occupation: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Occupation',
    name: jobTitle,
    description,
    estimatedSalary: {
      '@type': 'PriceSpecification',
      priceCurrency: 'USD',
      price: medianSalary,
    },
    qualifications: 'Salesforce Professional Certification',
  }
  if (salaryRange?.minSalary && salaryRange?.maxSalary) {
    occupation.estimatedSalaryRange = {
      '@type': 'PriceSpecification',
      priceCurrency: 'USD',
      minPrice: salaryRange.minSalary,
      maxPrice: salaryRange.maxSalary,
    }
  }
  return occupation
}

/** RoleOccupationAggregation JSON-LD: Aggregate salary data across a role cluster */
export function getRoleOccupationAggregationJsonLd({
  roleTitle,
  certCount,
  minSalary,
  maxSalary,
  medianSalary,
  path,
}: {
  roleTitle: string
  certCount: number
  minSalary: number
  maxSalary: number
  medianSalary: number
  path: string
}) {
  const url = path.startsWith('http') ? path : `${baseUrl}${path}`
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateOffer',
    name: `${roleTitle} Certification Cluster`,
    description: `${certCount} Salesforce certifications in the ${roleTitle} path. Median salary: $${medianSalary.toLocaleString()}`,
    url,
    offerCount: certCount,
    priceCurrency: 'USD',
    lowPrice: minSalary,
    highPrice: maxSalary,
    availability: 'InStock',
  }
}

/** RoleDifficultyProfile JSON-LD: Difficulty distribution for a role cluster */
export function getRoleDifficultyProfileJsonLd({
  roleTitle,
  path,
  easyCount,
  mediumCount,
  hardCount,
}: {
  roleTitle: string
  path: string
  easyCount: number
  mediumCount: number
  hardCount: number
}) {
  const url = path.startsWith('http') ? path : `${baseUrl}${path}`
  const total = easyCount + mediumCount + hardCount
  return {
    '@context': 'https://schema.org',
    '@type': 'Thing',
    name: `${roleTitle} Path Difficulty Profile`,
    description: `${roleTitle} certifications by difficulty: ${easyCount} easy (${Math.round((easyCount/total)*100)}%), ${mediumCount} medium (${Math.round((mediumCount/total)*100)}%), ${hardCount} hard (${Math.round((hardCount/total)*100)}%)`,
    url,
    subjectOf: [
      {
        '@type': 'Thing',
        name: 'Easy Exams',
        identifier: easyCount,
      },
      {
        '@type': 'Thing',
        name: 'Medium Exams',
        identifier: mediumCount,
      },
      {
        '@type': 'Thing',
        name: 'Hard Exams',
        identifier: hardCount,
      },
    ],
  }
}
