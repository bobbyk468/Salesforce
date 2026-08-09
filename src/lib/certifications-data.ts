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
      { name: 'Marketing Cloud Engagement Administrator', href: '/certifications/marketing-cloud-engagement-admin' },
      { name: 'Slack Administrator', href: '/certifications/slack-administrator' },
      { name: 'Platform Administrator Practice Test', href: '/certifications/administrator-practice-test' },
    ],
  },
  {
    slug: 'developer',
    name: 'Developer',
    items: [
      { name: 'Platform App Builder', href: '/certifications/app-builder' },
      { name: 'Platform Developer', href: '/certifications/developer-1' },
      { name: 'Platform Developer II', href: '/certifications/developer-2' },
      { name: 'JavaScript Developer', href: '/certifications/javascript-developer-i' },
      { name: 'B2C Commerce Cloud Developer', href: '/certifications/b2c-commerce-developer' },
      { name: 'Industries CPQ Developer', href: '/certifications/industries-cpq-developer' },
      { name: 'Marketing Cloud Engagement Developer', href: '/certifications/marketing-cloud-engagement-developer' },
      { name: 'MuleSoft Developer', href: '/certifications/mulesoft-developer-i' },
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
      { name: 'Data Cloud Consultant', href: '/certifications/data-360-consultant' },
      { name: 'Education Cloud Consultant', href: '/certifications/education-cloud-consultant' },
      { name: 'Experience Cloud Consultant', href: '/certifications/experience-cloud' },
      { name: 'Agentforce Field Service and Operations Consultant', href: '/certifications/field-service' },
      { name: 'Marketing Cloud Account Engagement (Pardot)', href: '/certifications/pardot-consultant' },
      { name: 'Marketing Cloud Engagement Consultant', href: '/certifications/marketing-cloud-consultant' },
      { name: 'Agentforce Nonprofit Consultant', href: '/certifications/nonprofit-cloud' },
      { name: 'Nonprofit Success Pack (NPSP)', href: '/certifications/nonprofit-success-pack-consultant' },
      { name: 'OmniStudio Consultant', href: '/certifications/omnistudio-consultant' },
      { name: 'Revenue Management Consultant', href: '/certifications/revenue-cloud-consultant' },
      { name: 'Agentforce Sales Consultant', href: '/certifications/sales-cloud' },
      { name: 'Agentforce Service Consultant', href: '/certifications/service-cloud' },
      { name: 'Slack Consultant', href: '/certifications/slack-consultant' },
    ],
  },
  {
    slug: 'marketing',
    name: 'Marketing',
    items: [
      { name: 'Marketing Cloud Engagement Specialist', href: '/certifications/email-specialist' },
      { name: 'Marketing Cloud Engagement Administrator', href: '/certifications/marketing-cloud-engagement-admin' },
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
      { name: 'Platform Data Architect', href: '/certifications/data-architect' },
      { name: 'Platform Integration Architect', href: '/certifications/integration-architect' },
      { name: 'Platform Sharing & Visibility Architect', href: '/certifications/sharing-visibility-architect' },
      { name: 'System Architect', href: '/certifications/system-architect' },
      { name: 'Platform Identity & Access Mgmt Architect', href: '/certifications/identity-access-management-architect' },
      { name: 'Platform Dev Lifecycle & Deployment Architect', href: '/certifications/dev-lifecycle-deployment-architect' },
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
      { name: 'Agentforce Sales Foundations', href: '/certifications/sales-foundations' },
    ],
  },
  {
    slug: 'designer',
    name: 'Designer',
    items: [
      { name: 'Platform Strategy Designer', href: '/certifications/strategy-designer' },
      { name: 'Platform User Experience (UX) Designer', href: '/certifications/ux-designer' },
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
  const relatedOverrides: Record<string, string[]> = {
    // Hub-and-spoke internal linking for top pages.
    administrator: ['advanced-administrator', 'app-builder', 'cpq-administrator'],
    'developer-1': ['developer-2', 'javascript-developer-i', 'mulesoft-developer-i'],
    'slack-developer': ['slack-administrator', 'slack-consultant', 'developer-1'],
    'application-architect': ['data-architect', 'sharing-visibility-architect', 'technical-architect-review-board'],
    // "People also studied" style pairings.
    'ai-associate': ['data-360-consultant', 'administrator'],
    'pardot-specialist': ['pardot-consultant', 'email-specialist'],
    'education-cloud-consultant': ['nonprofit-cloud', 'sales-cloud'],
    // Parent cert → related AP certs (improves internal linking depth for AP pages).
    'service-cloud': ['contact-center-ap', 'order-management-admin-ap', 'field-service'],
    'field-service': ['advanced-field-service-ap', 'service-cloud', 'contact-center-ap'],
    'cpq-administrator': ['cpq-billing-ap', 'revenue-cloud-consultant', 'administrator'],
    'marketing-cloud-consultant': ['marketing-cloud-personalization-ap', 'marketing-cloud-intelligence-ap', 'marketing-cloud-advanced-cross-channel-ap'],
    'heroku-architect': ['heroku-developer-ap', 'developer-1', 'developer-2'],
    'b2c-commerce-developer': ['b2b-commerce-developer-ap', 'b2b-commerce-admin-ap', 'b2c-solution-architect'],
    'omnistudio-developer': ['omnistudio-consultant', 'industries-cpq-developer', 'developer-1'],
    'data-360-consultant': ['marketing-cloud-intelligence-ap', 'marketing-cloud-personalization-ap', 'crm-analytics-einstein-discovery-consultant'],
    // AP cert → related parent + sibling APs (bidirectional discovery).
    'contact-center-ap': ['service-cloud', 'order-management-admin-ap', 'advanced-field-service-ap'],
    'advanced-field-service-ap': ['field-service', 'contact-center-ap', 'service-cloud'],
    'cpq-billing-ap': ['cpq-administrator', 'revenue-cloud-consultant', 'order-management-admin-ap'],
    'process-automation-ap': ['administrator', 'advanced-administrator', 'app-builder'],
    'marketing-cloud-personalization-ap': ['marketing-cloud-consultant', 'marketing-cloud-intelligence-ap', 'data-360-consultant'],
    'marketing-cloud-intelligence-ap': ['marketing-cloud-consultant', 'marketing-cloud-personalization-ap', 'data-360-consultant'],
    'loyalty-management-ap': ['marketing-cloud-consultant', 'marketing-cloud-personalization-ap', 'service-cloud'],
  }

  const slugToItem = new Map(
    CERTIFICATION_CATEGORIES.flatMap((cat) =>
      cat.items.map((item) => [item.href.replace('/certifications/', '').replace(/\/$/, ''), item] as const)
    )
  )

  const overrideSlugs = relatedOverrides[certSlug] || []
  if (overrideSlugs.length > 0) {
    return overrideSlugs
      .map((slug) => {
        const item = slugToItem.get(slug)
        if (!item) return null
        return {
          name: item.name,
          href: item.href,
          anchorText: `${item.name} Spring '26 prep guide`,
        }
      })
      .filter((item): item is { name: string; href: string; anchorText: string } => item !== null)
  }

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

export interface StrategicInternalLink {
  name: string
  href: string
  anchorText: string
}

function belongsToCategory(certSlug: string, categorySlug: string): boolean {
  const certHref = `/certifications/${certSlug}`
  const category = CERTIFICATION_CATEGORIES.find((cat) => cat.slug === categorySlug)
  if (!category) return false
  return category.items.some((item) => item.href === certHref || item.href === certHref + '/')
}

function dedupeLinks(links: StrategicInternalLink[]): StrategicInternalLink[] {
  const seen = new Set<string>()
  return links.filter((link) => {
    if (seen.has(link.href)) return false
    seen.add(link.href)
    return true
  })
}

/**
 * Priority internal links for stronger crawl paths:
 * - Admin-related pages (except Platform Administrator): Platform Administrator -> Administrator role hub
 * - Developer-related pages: Platform Developer I -> Developer role hub
 * - Architect-related pages: Application Architect -> Architect role hub
 */
export function getStrategicInternalLinks(certSlug: string): StrategicInternalLink[] {
  const currentHref = `/certifications/${certSlug}`
  const links: StrategicInternalLink[] = []

  const isAdminRelated =
    certSlug.includes('admin') ||
    certSlug.includes('administrator') ||
    belongsToCategory(certSlug, 'administrator')
  const isDeveloperRelated = certSlug.includes('developer') || belongsToCategory(certSlug, 'developer')
  const isArchitectRelated = certSlug.includes('architect') || belongsToCategory(certSlug, 'architect')

  if (isAdminRelated && certSlug !== 'administrator') {
    links.push(
      {
        name: 'Salesforce Certified Platform Administrator',
        href: '/certifications/administrator',
        anchorText: 'Salesforce Certified Platform Administrator (ADM-201) study guide',
      },
      {
        name: 'Administrator role certifications',
        href: '/certifications/role/administrator',
        anchorText: 'Administrator role certification roadmap and guides',
      }
    )
  }

  if (isDeveloperRelated) {
    links.push(
      {
        name: 'Salesforce Certified Platform Developer',
        href: '/certifications/developer-1',
        anchorText: 'Salesforce Certified Platform Developer (PD1) study guide',
      },
      {
        name: 'Developer role certifications',
        href: '/certifications/role/developer',
        anchorText: 'Developer role certification roadmap and guides',
      }
    )
  }

  // App Builder, Agentforce, and Process Automation all require Apex/LWC knowledge
  // that PD1 certifies — cross-link to establish developer-1 as the definitive Apex resource
  const usesApexOrLwc =
    certSlug === 'app-builder' ||
    certSlug === 'agentforce-specialist' ||
    certSlug === 'process-automation-ap'
  if (usesApexOrLwc) {
    links.push({
      name: 'Salesforce Certified Platform Developer',
      href: '/certifications/developer-1',
      anchorText: 'Salesforce Certified Platform Developer (PD1) — the Apex & LWC certification',
    })
  }

  if (isArchitectRelated) {
    links.push(
      {
        name: 'Salesforce Certified Application Architect',
        href: '/certifications/application-architect',
        anchorText: 'Salesforce Certified Application Architect study guide',
      },
      {
        name: 'Salesforce Certified System Architect',
        href: '/certifications/system-architect',
        anchorText: 'Salesforce Certified System Architect study guide',
      },
      {
        name: 'Architect role certifications',
        href: '/certifications/role/architect',
        anchorText: 'Architect role certification roadmap and guides',
      }
    )
    // Next step in the CTA pyramid: keep users in the silo with explicit progression
    if (certSlug === 'technical-architect') {
      links.push({
        name: 'CTA Architect Evaluation',
        href: '/certifications/technical-architect-evaluation',
        anchorText: 'Next in CTA pyramid: Architect Evaluation',
      })
    }
    if (certSlug === 'technical-architect-evaluation') {
      links.push({
        name: 'CTA Review Board',
        href: '/certifications/technical-architect-review-board',
        anchorText: 'Next in CTA pyramid: Review Board',
      })
    }
  }

  return dedupeLinks(links).filter((link) => link.href !== currentHref)
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

/** Difficulty level for each certification. Used for badge display + filtering. */
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert'

export const CERT_DIFFICULTY_LEVELS: Record<string, DifficultyLevel> = {
  // ===== BEGINNER (Associate + Foundations) =====
  'platform-foundations': 'beginner',
  'ai-associate': 'beginner',
  'marketing-cloud-engagement-foundations': 'beginner',
  'mulesoft-integration-foundations': 'beginner',
  'sales-foundations': 'beginner',

  // ===== INTERMEDIATE (Admin/Developer/Consultant - most common) =====
  // Administrator path
  'administrator': 'intermediate',
  'administrator-practice-test': 'intermediate',
  'advanced-administrator': 'intermediate',
  'agentforce-specialist': 'intermediate',
  'app-builder': 'intermediate',
  'business-analyst': 'intermediate',
  'cpq-administrator': 'intermediate',
  'marketing-cloud-engagement-admin': 'intermediate',
  'slack-administrator': 'intermediate',

  // Developer path
  'developer-1': 'intermediate',
  'developer-2': 'intermediate',
  'javascript-developer-i': 'intermediate',
  'b2c-commerce-developer': 'intermediate',
  'industries-cpq-developer': 'intermediate',
  'marketing-cloud-engagement-developer': 'intermediate',
  'mulesoft-developer-i': 'intermediate',
  'mulesoft-developer-ii': 'intermediate',
  'mulesoft-hyperautomation-developer': 'intermediate',
  'omnistudio-developer': 'intermediate',
  'slack-developer': 'intermediate',

  // Consultant path
  'sales-cloud': 'intermediate',
  'service-cloud': 'intermediate',
  'email-specialist': 'intermediate',
  'email-specialist-practice-test': 'intermediate',
  'pardot-specialist': 'intermediate',
  'pardot-consultant': 'intermediate',
  'marketing-cloud-consultant': 'intermediate',
  'data-360-consultant': 'intermediate',
  'revenue-cloud-consultant': 'intermediate',
  'crm-analytics-einstein-discovery-consultant': 'intermediate',
  'tableau-data-analyst': 'intermediate',
  'strategy-designer': 'intermediate',
  'ux-designer': 'intermediate',
  'field-service': 'intermediate',
  'nonprofit-cloud': 'intermediate',
  'slack-consultant': 'intermediate',
  'experience-cloud': 'intermediate',
  'education-cloud-consultant': 'intermediate',

  // Accredited Professionals (Intermediate tier)
  'advanced-field-service-ap': 'intermediate',
  'b2b-commerce-admin-ap': 'intermediate',
  'b2b-commerce-developer-ap': 'intermediate',
  'communications-cloud-ap': 'intermediate',
  'consumer-goods-cloud-ap': 'intermediate',
  'consumer-goods-tpm-ap': 'intermediate',
  'contact-center-ap': 'intermediate',
  'cpq-billing-ap': 'intermediate',
  'energy-utilities-ap': 'intermediate',
  'financial-services-cloud-ap': 'intermediate',
  'health-cloud-ap': 'intermediate',
  'heroku-developer-ap': 'intermediate',
  'loyalty-management-ap': 'intermediate',
  'manufacturing-cloud-ap': 'intermediate',
  'marketing-cloud-advanced-cross-channel-ap': 'intermediate',
  'marketing-cloud-intelligence-ap': 'intermediate',
  'marketing-cloud-personalization-ap': 'intermediate',
  'media-cloud-ap': 'intermediate',
  'net-zero-cloud-ap': 'intermediate',
  'order-management-admin-ap': 'intermediate',
  'order-management-developer-ap': 'intermediate',
  'process-automation-ap': 'intermediate',
  'public-sector-solutions-ap': 'intermediate',

  // ===== ADVANCED (Architect path / Complex topics) =====
  'application-architect': 'advanced',
  'system-architect': 'advanced',
  'integration-architect': 'advanced',
  'data-architect': 'advanced',
  'sharing-visibility-architect': 'advanced',
  'identity-access-management-architect': 'advanced',
  'dev-lifecycle-deployment-architect': 'advanced',
  'b2b-solution-architect': 'advanced',
  'b2c-commerce-architect': 'advanced',
  'b2c-solution-architect': 'advanced',
  'heroku-architect': 'advanced',
  'mulesoft-platform-architect': 'advanced',
  'mulesoft-integration-architect': 'advanced',
  'mulesoft-catalyst-consultant': 'advanced',
  'tableau-architect': 'advanced',
  'tableau-consultant': 'advanced',
  'tableau-desktop-foundations': 'advanced',
  'tableau-server-administrator': 'advanced',
  'omnistudio-consultant': 'advanced',
  'nonprofit-success-pack-consultant': 'advanced',

  // ===== EXPERT (CTA level / Highest difficulty) =====
  'technical-architect': 'expert',
  'technical-architect-evaluation': 'expert',
  'technical-architect-review-board': 'expert',
}

export function getCertDifficultyLevel(slug: string): DifficultyLevel {
  return CERT_DIFFICULTY_LEVELS[slug] ?? 'intermediate'
}

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
