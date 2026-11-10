/**
 * Shared JSON-LD schema helpers for all pages. Ensures every page has verifiable
 * schema markup (WebPage, BreadcrumbList) for SEO audits.
 */

import pageDatesSource from '../../public/page-dates.json'

const baseUrl = 'https://www.trailblazeprep.com'

/**
 * Route -> the dates git says the page's own content was created and last
 * changed. Regenerate with `npm run sitemap:lastmod`.
 *
 * Every Article block on the site was being emitted without datePublished,
 * which Google documents as required for Article, and without dateModified, so
 * nothing on the page said when it had last changed. A certification page
 * rewritten this week was still shown in search carrying an August date.
 */
const pageDates = pageDatesSource as Record<string, { published: string; modified: string }>

function datesForPath(path: string): { published?: string; modified?: string } {
  const pathname = path.startsWith('http') ? new URL(path).pathname : path
  const entry = pageDates[pathname] ?? pageDates[pathname.replace(/\/$/, '')]
  return entry ? { published: entry.published, modified: entry.modified } : {}
}

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
  const imageUrl = `${baseUrl}/og?t=${encodeURIComponent(headline)}`
  // An explicit date from the caller wins; otherwise fall back to what git
  // records for this route, so no Article ships without a publication date.
  const gitDates = datesForPath(path)
  const published = datePublished ?? gitDates.published
  const modified = dateModified ?? gitDates.modified ?? published

  const article: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline,
    description,
    url,
    ...(published ? { datePublished: published } : {}),
    ...(modified ? { dateModified: modified } : {}),
    image: [
      { '@type': 'ImageObject', url: imageUrl, width: 1200, height: 630 },
      imageUrl,
    ],
    author: [
      { '@type': 'Organization', '@id': `${baseUrl}/#organization`, name: 'Trailblaze Prep', url: baseUrl },
      {
        '@type': 'Person',
        name: 'Krishna Mohan',
        url: `${baseUrl}/about`,
        jobTitle: '14x Salesforce Certified Developer',
        sameAs: [
          'https://www.linkedin.com/in/krishna-mohan-879b94100/',
          'https://trailblazer.me/id/krishnamohan',
        ],
        knowsAbout: ['Salesforce Administration', 'Salesforce Development', 'Platform App Builder', 'Sales Cloud', 'Apex'],
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

  // Dates are set above, where an explicit value falls back to git.

  article.mainEntityOfPage = {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
  }

  const relatedEntities = [...(about ?? []), ...(mainEntityUrl ? [mainEntityUrl] : [])]
  if (relatedEntities.length > 0) {
    article.about = relatedEntities.map(entityUrl => ({
      '@type': 'Thing',
      url: entityUrl.startsWith('http') ? entityUrl : `${baseUrl}${entityUrl}`,
    }))
  }

  return article
}

export interface FaqItem {
  question: string
  answer: string
}

/** FAQPage JSON-LD for pages where the marked-up answers are also visible. */
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
  breadcrumbItems: _breadcrumbItems,
}: {
  name: string
  description: string
  path: string
  breadcrumbItems?: BreadcrumbItem[]
}) {
  const url = path.startsWith('http') ? path : `${baseUrl}${path}`
  // Certification pages emit WebPage rather than Article, so without this they
  // showed the visible "Last updated" line with no structured date to match it.
  // Google's byline guidance wants the two to agree.
  const { published, modified } = datesForPath(path)
  const page: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    name,
    description,
    url,
    ...(published ? { datePublished: published } : {}),
    ...(modified ? { dateModified: modified } : {}),
    publisher: { '@type': 'Organization', name: 'Trailblaze Prep', url: baseUrl },
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
      name: `${name}: Exam Prep`,
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
  datePublished,
  dateModified,
}: {
  headline: string
  description: string
  path: string
  vsPageUrls: string[]
  datePublished?: string
  dateModified?: string
}) {
  const url = path.startsWith('http') ? path : `${baseUrl}${path}`
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
    author: [
      { '@type': 'Organization', name: 'Trailblaze Prep', url: baseUrl },
      {
        '@type': 'Person',
        name: 'Krishna Mohan',
        url: `${baseUrl}/about`,
        jobTitle: '14x Salesforce Certified Developer',
        sameAs: [
          'https://www.linkedin.com/in/krishna-mohan-879b94100/',
          'https://trailblazer.me/id/krishnamohan',
        ],
        knowsAbout: ['Salesforce Administration', 'Salesforce Development', 'Platform App Builder', 'Sales Cloud', 'Apex'],
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

  if (datePublished) article.datePublished = datePublished
  if (dateModified) article.dateModified = dateModified

  return article
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

export interface QuizQuestionItem {
  question: string
  options: string[]
  correctAnswer?: number
  correctAnswers?: number[]
}

/** Quiz JSON-LD for a certification page's practice questions. Must mirror the questions actually rendered. */
export function getQuizJsonLd(name: string, questions: QuizQuestionItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name,
    about: { '@type': 'Thing', name },
    hasPart: questions.map((q) => {
      const correctIndices = [...new Set(q.correctAnswers ?? (q.correctAnswer === undefined ? [] : [q.correctAnswer]))]
      const acceptedAnswers = correctIndices
        .filter((index) => index >= 0 && index < q.options.length)
        .map((index) => ({ '@type': 'Answer', text: q.options[index] }))
      const question: Record<string, unknown> = {
        '@type': 'Question',
        text: q.question,
        suggestedAnswer: q.options
          .filter((_, index) => !correctIndices.includes(index))
          .map((text) => ({ '@type': 'Answer', text })),
      }
      if (acceptedAnswers.length === 1) question.acceptedAnswer = acceptedAnswers[0]
      else if (acceptedAnswers.length > 1) question.acceptedAnswer = acceptedAnswers
      return question
    }),
  }
}
