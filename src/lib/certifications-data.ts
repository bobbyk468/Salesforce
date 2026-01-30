import { OFFICIAL_CERT_NAMES } from './cert-official-names'

export interface CertificationItem {
  name: string
  href: string
}

export interface CertificationCategory {
  slug: string
  name: string
  items: CertificationItem[]
}

/** Raw category list; items get official "Salesforce Certified X" names below. */
const RAW_CERTIFICATION_CATEGORIES: CertificationCategory[] = [
  {
    slug: 'associate',
    name: 'Associate',
    items: [
      { name: 'Platform Foundations', href: '/certifications/platform-foundations' },
      { name: 'AI Associate', href: '/certifications/ai-associate' },
      { name: 'Marketing Cloud Engagement Foundations', href: '/certifications/marketing-cloud-engagement-foundations' },
      { name: 'MuleSoft Integration Foundations', href: '/certifications/mulesoft-integration-foundations' },
    ],
  },
  {
    slug: 'administrator',
    name: 'Administrator',
    items: [
      { name: 'Platform Administrator (ADM-201)', href: '/certifications/administrator' },
      { name: 'Platform Administrator II (ADM-211)', href: '/certifications/advanced-administrator' },
      { name: 'Platform App Builder', href: '/certifications/app-builder' },
      { name: 'Agentforce Specialist', href: '/certifications/agentforce-specialist' },
      { name: 'Business Analyst', href: '/certifications/business-analyst' },
      { name: 'CPQ Administrator', href: '/certifications/cpq-administrator' },
      { name: 'Marketing Cloud Engagement Admin', href: '/certifications/marketing-cloud-engagement-admin' },
      { name: 'Slack Administrator', href: '/certifications/slack-administrator' },
      { name: 'Platform Administrator Practice Test', href: '/certifications/administrator-practice-test' },
    ],
  },
  {
    slug: 'developer',
    name: 'Developer',
    items: [
      { name: 'Platform App Builder', href: '/certifications/app-builder' },
      { name: 'Platform Developer I', href: '/certifications/developer-1' },
      { name: 'Platform Developer II', href: '/certifications/developer-2' },
      { name: 'JavaScript Developer I', href: '/certifications/javascript-developer-i' },
      { name: 'B2C Commerce Developer', href: '/certifications/b2c-commerce-developer' },
      { name: 'Industries CPQ Developer', href: '/certifications/industries-cpq-developer' },
      { name: 'Marketing Cloud Engagement Developer', href: '/certifications/marketing-cloud-engagement-developer' },
      { name: 'MuleSoft Developer I', href: '/certifications/mulesoft-developer-i' },
      { name: 'MuleSoft Developer II', href: '/certifications/mulesoft-developer-ii' },
      { name: 'MuleSoft Hyperautomation Developer', href: '/certifications/mulesoft-hyperautomation-developer' },
      { name: 'OmniStudio Developer', href: '/certifications/omnistudio-developer' },
      { name: 'Slack Developer', href: '/certifications/slack-developer' },
    ],
  },
  {
    slug: 'consultant',
    name: 'Consultant',
    items: [
      { name: 'Business Analyst', href: '/certifications/business-analyst' },
      { name: 'CRM Analytics & Einstein Discovery', href: '/certifications/crm-analytics-einstein-discovery-consultant' },
      { name: 'Data Cloud Consultant', href: '/certifications/data-cloud-consultant' },
      { name: 'Education Cloud Consultant', href: '/certifications/education-cloud-consultant' },
      { name: 'Experience Cloud Consultant', href: '/certifications/experience-cloud' },
      { name: 'Field Service Consultant', href: '/certifications/field-service' },
      { name: 'Marketing Cloud Account Engagement (Pardot)', href: '/certifications/pardot-consultant' },
      { name: 'Marketing Cloud Engagement Consultant', href: '/certifications/marketing-cloud-consultant' },
      { name: 'Nonprofit Cloud Consultant', href: '/certifications/nonprofit-cloud' },
      { name: 'Nonprofit Success Pack (NPSP)', href: '/certifications/nonprofit-success-pack-consultant' },
      { name: 'OmniStudio Consultant', href: '/certifications/omnistudio-consultant' },
      { name: 'Revenue Cloud Consultant', href: '/certifications/revenue-cloud-consultant' },
      { name: 'Sales Cloud Consultant', href: '/certifications/sales-cloud' },
      { name: 'Service Cloud Consultant', href: '/certifications/service-cloud' },
      { name: 'Slack Consultant', href: '/certifications/slack-consultant' },
    ],
  },
  {
    slug: 'marketing',
    name: 'Marketing',
    items: [
      { name: 'Marketing Cloud Email Specialist', href: '/certifications/email-specialist' },
      { name: 'Marketing Cloud Engagement Admin', href: '/certifications/marketing-cloud-engagement-admin' },
      { name: 'Marketing Cloud Engagement Consultant', href: '/certifications/marketing-cloud-consultant' },
      { name: 'Marketing Cloud Engagement Developer', href: '/certifications/marketing-cloud-engagement-developer' },
      { name: 'Account Engagement (Pardot) Specialist', href: '/certifications/pardot-specialist' },
      { name: 'Account Engagement (Pardot) Consultant', href: '/certifications/pardot-consultant' },
      { name: 'Marketing Cloud Email Specialist Practice Test', href: '/certifications/email-specialist-practice-test' },
    ],
  },
  {
    slug: 'architect',
    name: 'Architect',
    items: [
      { name: 'Application Architect', href: '/certifications/application-architect' },
      { name: 'Data Architect', href: '/certifications/data-architect' },
      { name: 'Integration Architect', href: '/certifications/integration-architect' },
      { name: 'Sharing & Visibility Architect', href: '/certifications/sharing-visibility-architect' },
      { name: 'System Architect', href: '/certifications/system-architect' },
      { name: 'Identity & Access Mgmt Architect', href: '/certifications/identity-access-management-architect' },
      { name: 'Dev Lifecycle & Deployment Architect', href: '/certifications/dev-lifecycle-deployment-architect' },
      { name: 'Technical Architect (CTA)', href: '/certifications/technical-architect' },
      { name: 'CTA - Architect Evaluation', href: '/certifications/technical-architect-evaluation' },
      { name: 'CTA - Architect Review Board', href: '/certifications/technical-architect-review-board' },
      { name: 'B2B Solution Architect', href: '/certifications/b2b-solution-architect' },
      { name: 'B2C Commerce Architect', href: '/certifications/b2c-commerce-architect' },
      { name: 'B2C Solution Architect', href: '/certifications/b2c-solution-architect' },
      { name: 'Heroku Architect', href: '/certifications/heroku-architect' },
      { name: 'MuleSoft Catalyst Consultant', href: '/certifications/mulesoft-catalyst-consultant' },
      { name: 'MuleSoft Platform Architect', href: '/certifications/mulesoft-platform-architect' },
      { name: 'MuleSoft Integration Architect', href: '/certifications/mulesoft-integration-architect' },
    ],
  },
  {
    slug: 'accredited-professional',
    name: 'Accredited Professional',
    items: [
      { name: 'Advanced Field Service AP', href: '/certifications/advanced-field-service-ap' },
      { name: 'B2B Commerce Admin AP', href: '/certifications/b2b-commerce-admin-ap' },
      { name: 'B2B Commerce Developer AP', href: '/certifications/b2b-commerce-developer-ap' },
      { name: 'Communications Cloud AP', href: '/certifications/communications-cloud-ap' },
      { name: 'Consumer Goods Cloud AP', href: '/certifications/consumer-goods-cloud-ap' },
      { name: 'Consumer Goods TPM AP', href: '/certifications/consumer-goods-tpm-ap' },
      { name: 'Contact Center AP', href: '/certifications/contact-center-ap' },
      { name: 'CPQ and Billing AP', href: '/certifications/cpq-billing-ap' },
      { name: 'Energy and Utilities AP', href: '/certifications/energy-utilities-ap' },
      { name: 'Financial Services Cloud AP', href: '/certifications/financial-services-cloud-ap' },
      { name: 'Health Cloud AP', href: '/certifications/health-cloud-ap' },
      { name: 'Heroku Developer AP', href: '/certifications/heroku-developer-ap' },
      { name: 'Loyalty Management AP', href: '/certifications/loyalty-management-ap' },
      { name: 'Manufacturing Cloud AP', href: '/certifications/manufacturing-cloud-ap' },
      { name: 'Marketing Cloud Advanced Cross Channel AP', href: '/certifications/marketing-cloud-advanced-cross-channel-ap' },
      { name: 'Marketing Cloud Intelligence AP', href: '/certifications/marketing-cloud-intelligence-ap' },
      { name: 'Marketing Cloud Personalization AP', href: '/certifications/marketing-cloud-personalization-ap' },
      { name: 'Media Cloud AP', href: '/certifications/media-cloud-ap' },
      { name: 'Net Zero Cloud AP', href: '/certifications/net-zero-cloud-ap' },
      { name: 'Order Management Admin AP', href: '/certifications/order-management-admin-ap' },
      { name: 'Order Management Developer AP', href: '/certifications/order-management-developer-ap' },
      { name: 'Process Automation AP', href: '/certifications/process-automation-ap' },
      { name: 'Public Sector Solutions AP', href: '/certifications/public-sector-solutions-ap' },
    ],
  },
  {
    slug: 'sales',
    name: 'Sales',
    items: [
      { name: 'Certified Sales Foundations', href: '/certifications/sales-foundations' },
    ],
  },
  {
    slug: 'designer',
    name: 'Designer',
    items: [
      { name: 'Platform Strategy Designer', href: '/certifications/strategy-designer' },
      { name: 'User Experience (UX) Designer', href: '/certifications/ux-designer' },
    ],
  },
  {
    slug: 'tableau',
    name: 'Tableau',
    items: [
      { name: 'Tableau Architect', href: '/certifications/tableau-architect' },
      { name: 'Tableau Consultant', href: '/certifications/tableau-consultant' },
      { name: 'Tableau Data Analyst', href: '/certifications/tableau-data-analyst' },
      { name: 'Tableau Desktop Foundations', href: '/certifications/tableau-desktop-foundations' },
      { name: 'Tableau Server Administrator', href: '/certifications/tableau-server-administrator' },
    ],
  },
]

/** Categories with official "Salesforce Certified X" naming for every certification. */
export const CERTIFICATION_CATEGORIES: CertificationCategory[] = RAW_CERTIFICATION_CATEGORIES.map((cat) => ({
  ...cat,
  items: cat.items.map((item) => {
    const slug = item.href.replace('/certifications/', '').replace(/\/$/, '')
    return { ...item, name: OFFICIAL_CERT_NAMES[slug] ?? item.name }
  }),
}))

export function getCategoryBySlug(slug: string): CertificationCategory | undefined {
  return CERTIFICATION_CATEGORIES.find((c) => c.slug === slug)
}

/** First role (category) that contains this cert slug; for breadcrumb "role hub" link. */
export function getRoleSlugForCert(certSlug: string): string | undefined {
  const certHref = `/certifications/${certSlug}`
  const category = CERTIFICATION_CATEGORIES.find((cat) =>
    cat.items.some((item) => item.href === certHref || item.href === certHref + '/')
  )
  return category?.slug
}

/** Related certifications from the same role (2–3) for contextual internal linking. */
export function getRelatedCerts(certSlug: string): { name: string; href: string; anchorText: string }[] {
  const certHref = `/certifications/${certSlug}`
  const category = CERTIFICATION_CATEGORIES.find((cat) =>
    cat.items.some((item) => item.href === certHref || item.href === certHref + '/')
  )
  if (!category) return []
  const others = category.items.filter((item) => item.href !== certHref && item.href !== certHref + '/')
  return others.slice(0, 3).map((item) => ({
    name: item.name,
    href: item.href,
    anchorText: `${item.name} practice questions and study guide`,
  }))
}

/** Level for basic → advanced ordering */
export type CertificationLevel = 'basic' | 'intermediate' | 'advanced'

export interface CertificationWithLevel extends CertificationItem {
  level: CertificationLevel
}

/** Category order: basic → advanced. Used to assign level and order. */
const CATEGORY_ORDER: { slug: string; level: CertificationLevel }[] = [
  { slug: 'associate', level: 'basic' },
  { slug: 'sales', level: 'basic' },
  { slug: 'administrator', level: 'intermediate' },
  { slug: 'developer', level: 'intermediate' },
  { slug: 'consultant', level: 'intermediate' },
  { slug: 'marketing', level: 'intermediate' },
  { slug: 'designer', level: 'intermediate' },
  { slug: 'tableau', level: 'intermediate' },
  { slug: 'architect', level: 'advanced' },
  { slug: 'accredited-professional', level: 'advanced' },
]

/** All certifications, deduplicated and ordered basic → advanced. */
export const CERTIFICATIONS_ORDERED_BASIC_TO_ADVANCED: CertificationWithLevel[] = (() => {
  const seen = new Set<string>()
  const result: CertificationWithLevel[] = []
  for (const { slug, level } of CATEGORY_ORDER) {
    const category = CERTIFICATION_CATEGORIES.find((c) => c.slug === slug)
    if (!category) continue
    for (const item of category.items) {
      if (seen.has(item.href)) continue
      seen.add(item.href)
      result.push({ ...item, level })
    }
  }
  return result
})()

/** Grouped by level for display (Basic, Intermediate, Advanced). */
export const CERTIFICATIONS_BY_LEVEL: Record<CertificationLevel, CertificationItem[]> = (() => {
  const basic: CertificationItem[] = []
  const intermediate: CertificationItem[] = []
  const advanced: CertificationItem[] = []
  for (const cert of CERTIFICATIONS_ORDERED_BASIC_TO_ADVANCED) {
    const { level, ...item } = cert
    if (level === 'basic') basic.push(item)
    else if (level === 'intermediate') intermediate.push(item)
    else advanced.push(item)
  }
  return { basic, intermediate, advanced }
})()
