/**
 * CTA (Certified Technical Architect) journey: beginner → CTA.
 * Covers maximum certifications along the path. Required vs recommended is noted.
 */

const base = (slug: string) => `/certifications/${slug}`

export interface CtaJourneyCert {
  name: string
  href: string
  /** Exam-wise prerequisites (other exams to complete first). */
  prerequisites?: { name: string; href: string }[]
  /** Required for CTA vs recommended to broaden skills. */
  required?: boolean
  note?: string
}

export interface CtaJourneyPhase {
  phase: number
  title: string
  description: string
  certs: CtaJourneyCert[]
}

export const CTA_JOURNEY_PHASES: CtaJourneyPhase[] = [
  {
    phase: 1,
    title: 'Start here – Foundations',
    description: 'Build core platform and CRM knowledge. No prior Salesforce experience needed.',
    certs: [
      { name: 'Platform Foundations', href: base('platform-foundations'), required: true },
      { name: 'Sales Foundations', href: base('sales-foundations'), note: 'Recommended for CRM context' },
      { name: 'AI Associate', href: base('ai-associate'), note: 'Optional; strengthens AI/Einstein knowledge' },
    ],
  },
  {
    phase: 2,
    title: 'Administrator & App Builder',
    description: 'Admin and configuration skills. Required base for the architect path.',
    certs: [
      { name: 'Platform Administrator (ADM-201)', href: base('administrator'), prerequisites: [{ name: 'Platform Foundations', href: base('platform-foundations') }], required: true },
      { name: 'Platform App Builder', href: base('app-builder'), prerequisites: [{ name: 'Platform Foundations', href: base('platform-foundations') }], required: true },
    ],
  },
  {
    phase: 3,
    title: 'Developer I & II',
    description: 'Development depth. Developer I is required; Developer II is required for Dev Lifecycle & Deployment Architect.',
    certs: [
      { name: 'Platform Developer I', href: base('developer-1'), prerequisites: [{ name: 'Platform App Builder', href: base('app-builder') }], required: true },
      { name: 'Platform Developer II', href: base('developer-2'), prerequisites: [{ name: 'Platform Developer I', href: base('developer-1') }], required: true },
      { name: 'JavaScript Developer I', href: base('javascript-developer-i'), prerequisites: [{ name: 'Platform Developer I', href: base('developer-1') }], note: 'Recommended for integration/UX depth' },
    ],
  },
  {
    phase: 4,
    title: 'Consultant credentials (recommended)',
    description: 'Broaden scope with implementation experience. Not mandatory for CTA but highly valuable.',
    certs: [
      { name: 'Sales Cloud Consultant', href: base('sales-cloud'), prerequisites: [{ name: 'Platform Foundations', href: base('platform-foundations') }, { name: 'Platform Administrator', href: base('administrator') }] },
      { name: 'Service Cloud Consultant', href: base('service-cloud'), prerequisites: [{ name: 'Platform Foundations', href: base('platform-foundations') }, { name: 'Platform Administrator', href: base('administrator') }] },
      { name: 'Experience Cloud Consultant', href: base('experience-cloud'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }, { name: 'Platform Developer I', href: base('developer-1') }] },
      { name: 'Data Cloud Consultant', href: base('data-360-consultant'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }, { name: 'Sales Cloud Consultant', href: base('sales-cloud') }], note: 'Helpful before Data Architect' },
    ],
  },
  {
    phase: 5,
    title: 'Domain architects (all four required)',
    description: 'You must earn all four domain architect credentials. Two feed Application Architect, two feed System Architect.',
    certs: [
      { name: 'Data Architect', href: base('data-architect'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }, { name: 'Platform Developer I', href: base('developer-1') }], required: true },
      { name: 'Sharing & Visibility Architect', href: base('sharing-visibility-architect'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }, { name: 'Platform Developer I', href: base('developer-1') }], required: true },
      { name: 'Identity & Access Mgmt Architect', href: base('identity-access-management-architect'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }], required: true },
      { name: 'Dev Lifecycle & Deployment Architect', href: base('dev-lifecycle-deployment-architect'), prerequisites: [{ name: 'Platform Developer I', href: base('developer-1') }, { name: 'Platform Developer II', href: base('developer-2') }], required: true },
    ],
  },
  {
    phase: 6,
    title: 'Integration & cloud (recommended)',
    description: 'Integration and Heroku architect certs strengthen solution design. Not required for CTA but common among CTAs.',
    certs: [
      { name: 'Integration Architect', href: base('integration-architect'), prerequisites: [{ name: 'Platform Developer I', href: base('developer-1') }, { name: 'Platform Developer II', href: base('developer-2') }] },
      { name: 'Heroku Architect', href: base('heroku-architect'), prerequisites: [{ name: 'Platform Developer I', href: base('developer-1') }, { name: 'Heroku Developer AP', href: base('heroku-developer-ap') }] },
      { name: 'B2C Solution Architect', href: base('b2c-solution-architect'), prerequisites: [{ name: 'B2C Commerce Developer', href: base('b2c-commerce-developer') }], note: 'Optional; for commerce-focused solutions' },
      { name: 'B2B Solution Architect', href: base('b2b-solution-architect'), prerequisites: [{ name: 'Platform Administrator', href: base('administrator') }, { name: 'Sales Cloud Consultant', href: base('sales-cloud') }], note: 'Optional; for B2B commerce' },
    ],
  },
  {
    phase: 7,
    title: 'Application Architect & System Architect',
    description: 'Combine domain certs: Application Architect (Data + Sharing) and System Architect (Identity + Dev Lifecycle). Both are required for CTA.',
    certs: [
      { name: 'Application Architect', href: base('application-architect'), prerequisites: [{ name: 'Data Architect', href: base('data-architect') }, { name: 'Sharing & Visibility Architect', href: base('sharing-visibility-architect') }], required: true },
      { name: 'System Architect', href: base('system-architect'), prerequisites: [{ name: 'Identity & Access Mgmt Architect', href: base('identity-access-management-architect') }, { name: 'Dev Lifecycle & Deployment Architect', href: base('dev-lifecycle-deployment-architect') }], required: true },
    ],
  },
  {
    phase: 8,
    title: 'Technical Architect (CTA)',
    description: 'CTA credential requires both Application Architect and System Architect. Then you pursue the CTA board.',
    certs: [
      { name: 'Technical Architect (CTA)', href: base('technical-architect'), prerequisites: [{ name: 'Application Architect', href: base('application-architect') }, { name: 'System Architect', href: base('system-architect') }], required: true },
      { name: 'CTA - Architect Evaluation', href: base('technical-architect-evaluation'), prerequisites: [{ name: 'Technical Architect (CTA)', href: base('technical-architect') }], required: true },
      { name: 'CTA - Architect Review Board', href: base('technical-architect-review-board'), prerequisites: [{ name: 'CTA - Architect Evaluation', href: base('technical-architect-evaluation') }], required: true },
    ],
  },
]

/** Total cert count in the journey (including optional/recommended). */
export function getCtaJourneyCertCount(): number {
  return CTA_JOURNEY_PHASES.reduce((sum, p) => sum + p.certs.length, 0)
}

/** Count of required certs only. */
export function getCtaJourneyRequiredCount(): number {
  return CTA_JOURNEY_PHASES.reduce((sum, p) => sum + p.certs.filter((c) => c.required).length, 0)
}
