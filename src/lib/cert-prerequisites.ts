/**
 * Salesforce Certification Prerequisites Data
 * Maps certification slugs to their prerequisite certifications
 * This helps guide users through the optimal certification path
 *
 * IMPORTANT: All slugs (keys and values) must match actual cert page slugs
 * in src/app/certifications/. Wrong slugs generate broken internal links.
 */

export interface CertPrerequisite {
  slug: string
  /** Slug of required prerequisite cert (legacy single prerequisite) */
  requiredPrerequisite?: string
  /** Slugs of required prerequisite certs when more than one is required */
  requiredPrerequisites?: string[]
  /** Slug of recommended (but not required) prerequisite cert */
  recommendedPrerequisite?: string
  /** True when the official exam guide states "Prerequisite: None". */
  noPrerequisite?: boolean
  /** Additional notes about prerequisites */
  notes?: string
}

/**
 * Prerequisites mapping for Salesforce certifications.
 * Keys = actual cert page slugs. Values = actual cert page slugs.
 * Certs with no entry (foundation certs, practice tests) correctly show nothing.
 */
export const CERT_PREREQUISITES: Record<string, CertPrerequisite> = {

  // ─── Associate / Foundation ───────────────────────────────────────────────
  // (foundation certs have no prerequisites, they ARE the starting point)

  'ai-associate': {
    slug: 'ai-associate',
    noPrerequisite: true,
    recommendedPrerequisite: 'platform-foundations',
    notes: 'AI fundamentals; platform-foundations recommended',
  },

  // ─── Administrator track ──────────────────────────────────────────────────

  'administrator': {
    slug: 'administrator',
    noPrerequisite: true,
    recommendedPrerequisite: 'platform-foundations',
    notes: 'Most popular entry-level certification',
  },

  'advanced-administrator': {
    slug: 'advanced-administrator',
    requiredPrerequisite: 'administrator',
    notes: 'Requires Platform Administrator (ADM-201) to attempt',
  },

  'app-builder': {
    slug: 'app-builder',
    noPrerequisite: true,
    recommendedPrerequisite: 'platform-foundations',
    notes: 'Good path parallel to Admin or after Platform Foundations',
  },

  'agentforce-specialist': {
    slug: 'agentforce-specialist',
    recommendedPrerequisite: 'administrator',
    notes: 'The issuer recommends Platform Administrator and Platform App Builder; no prerequisite certification is required.',
  },

  'cpq-administrator': {
    slug: 'cpq-administrator',
    noPrerequisite: true,
    recommendedPrerequisite: 'administrator',
    notes: 'CPQ admin; Salesforce admin foundation recommended',
  },

  'marketing-cloud-engagement-admin': {
    slug: 'marketing-cloud-engagement-admin',
    noPrerequisite: true,
    recommendedPrerequisite: 'administrator',
    notes: 'Marketing Cloud platform administration',
  },

  'slack-administrator': {
    slug: 'slack-administrator',
    noPrerequisite: true,
    notes: 'Slack enterprise platform administration',
  },

  'business-analyst': {
    slug: 'business-analyst',
    noPrerequisite: true,
    recommendedPrerequisite: 'administrator',
    notes: 'Business analysis and requirements in Salesforce context',
  },

  // ─── Developer track ──────────────────────────────────────────────────────

  'developer-1': {
    slug: 'developer-1',
    noPrerequisite: true,
    recommendedPrerequisite: 'platform-foundations',
    notes: 'Apex and Visualforce fundamentals; platform-foundations recommended',
  },

  'developer-2': {
    slug: 'developer-2',
    requiredPrerequisite: 'developer-1',
    notes: 'Requires Platform Developer I (PD1) certification',
  },

  'javascript-developer-i': {
    slug: 'javascript-developer-i',
    noPrerequisite: true,
    recommendedPrerequisite: 'developer-1',
    notes: 'Modern JavaScript and LWC; developer experience recommended',
  },

  'b2c-commerce-developer': {
    slug: 'b2c-commerce-developer',
    noPrerequisite: true,
    recommendedPrerequisite: 'developer-1',
    notes: 'B2C Commerce (SFCC) e-commerce development',
  },

  'industries-cpq-developer': {
    slug: 'industries-cpq-developer',
    noPrerequisite: true,
    recommendedPrerequisite: 'administrator',
    notes: 'Industries CPQ configuration and development',
  },

  'marketing-cloud-engagement-developer': {
    slug: 'marketing-cloud-engagement-developer',
    requiredPrerequisite: 'email-specialist',
    notes: 'Requires Marketing Cloud Engagement Specialist (guide 005298954, read 14 November 2026)',
  },

  'mulesoft-developer-i': {
    slug: 'mulesoft-developer-i',
    noPrerequisite: true,
    recommendedPrerequisite: 'mulesoft-integration-foundations',
    notes: 'API-led connectivity; MuleSoft foundations recommended',
  },

  'mulesoft-developer-ii': {
    slug: 'mulesoft-developer-ii',
    requiredPrerequisite: 'mulesoft-developer-i',
    notes: 'Requires MuleSoft Developer I certification',
  },

  'mulesoft-hyperautomation-developer': {
    slug: 'mulesoft-hyperautomation-developer',
    noPrerequisite: true,
    recommendedPrerequisite: 'mulesoft-developer-i',
    notes: 'Automation and AI-powered integration',
  },

  'omnistudio-developer': {
    slug: 'omnistudio-developer',
    noPrerequisite: true,
    recommendedPrerequisite: 'developer-1',
    notes: 'OmniStudio technical development for industry clouds',
  },

  'slack-developer': {
    slug: 'slack-developer',
    noPrerequisite: true,
    recommendedPrerequisite: 'developer-1',
    notes: 'Slack app development; platform developer skills recommended',
  },

  // ─── Consultant track ─────────────────────────────────────────────────────

  'sales-cloud': {
    slug: 'sales-cloud',
    requiredPrerequisite: 'administrator',
    notes: 'Sales Cloud implementation and consulting',
  },

  'service-cloud': {
    slug: 'service-cloud',
    requiredPrerequisite: 'administrator',
    notes: 'Service Cloud configuration and consulting',
  },

  'data-360-consultant': {
    slug: 'data-360-consultant',
    noPrerequisite: true,
    recommendedPrerequisite: 'administrator',
    notes: 'Salesforce Data Cloud (CDP) implementation',
  },

  'experience-cloud': {
    slug: 'experience-cloud',
    requiredPrerequisite: 'administrator',
    notes: 'Communities and Experience Cloud setup',
  },

  'agentforce-life-sciences-consultant': {
    slug: 'agentforce-life-sciences-consultant',
    requiredPrerequisite: 'administrator',
    notes: 'The official exam guide lists Platform Administrator as the prerequisite.',
  },
  'field-service': {
    slug: 'field-service',
    requiredPrerequisites: ['administrator', 'service-cloud'],
    notes: 'Both Platform Administrator and Agentforce Service Consultant certifications are required.',
  },

  'crm-analytics-einstein-discovery-consultant': {
    slug: 'crm-analytics-einstein-discovery-consultant',
    noPrerequisite: true,
    recommendedPrerequisite: 'administrator',
    notes: 'CRM Analytics and Einstein Discovery consulting',
  },

  'pardot-consultant': {
    slug: 'pardot-consultant',
    requiredPrerequisite: 'pardot-specialist',
    notes: 'Requires Marketing Cloud Account Engagement Specialist (guide 005298951, read 14 November 2026)',
  },

  'pardot-specialist': {
    slug: 'pardot-specialist',
    noPrerequisite: true,
    notes: 'Entry-level Account Engagement exam; no prerequisite',
  },

  'marketing-cloud-consultant': {
    slug: 'marketing-cloud-consultant',
    requiredPrerequisite: 'marketing-cloud-engagement-admin',
    notes: 'Requires Marketing Cloud Engagement Administrator (guide 005298946, read 14 November 2026)',
  },

  'nonprofit-cloud': {
    slug: 'nonprofit-cloud',
    requiredPrerequisite: 'administrator',
    notes: 'Requires Platform Administrator (guide 005298958, read 14 November 2026)',
  },

  'nonprofit-success-pack-consultant': {
    slug: 'nonprofit-success-pack-consultant',
    requiredPrerequisite: 'administrator',
    notes: 'Required Platform Administrator (guide 005298973, read 14 November 2026)',
  },

  'omnistudio-consultant': {
    slug: 'omnistudio-consultant',
    noPrerequisite: true,
    recommendedPrerequisite: 'administrator',
    notes: 'OmniStudio consulting for industry clouds',
  },

  'revenue-cloud-consultant': {
    slug: 'revenue-cloud-consultant',
    noPrerequisite: true,
    recommendedPrerequisite: 'cpq-administrator',
    notes: 'Revenue Cloud (CPQ + Billing) consulting',
  },

  'education-cloud-consultant': {
    slug: 'education-cloud-consultant',
    requiredPrerequisite: 'administrator',
    notes: 'Published exam prerequisite; exam delivery is closed and credential retirement is scheduled for February 1, 2027.',
  },

  'slack-consultant': {
    slug: 'slack-consultant',
    noPrerequisite: true,
    notes: 'Slack enterprise consulting and integration',
  },

  // ─── Marketing track ──────────────────────────────────────────────────────

  'email-specialist': {
    slug: 'email-specialist',
    noPrerequisite: true,
    recommendedPrerequisite: 'marketing-cloud-engagement-admin',
    notes: 'Email marketing automation; MC admin knowledge recommended',
  },

  // ─── Architect track ──────────────────────────────────────────────────────

  'application-architect': {
    slug: 'application-architect',
    notes: 'Auto-awarded credential, earned by passing App Builder, PD1, Data Architect, and Sharing & Visibility Architect. See the component-exam list on the page instead of a single prerequisite.',
  },

  'system-architect': {
    slug: 'system-architect',
    notes: 'Earned by passing PD1, Integration Architect, IAM Architect, and Dev Lifecycle Architect. There is no separate exam. See the component-exam list on the page instead of a single prerequisite.',
  },

  'technical-architect': {
    slug: 'technical-architect',
    requiredPrerequisites: ['application-architect', 'system-architect'],
    notes: 'Requires both Application Architect and System Architect (guide 005299002)',
  },

  'sharing-visibility-architect': {
    slug: 'sharing-visibility-architect',
    noPrerequisite: true,
    recommendedPrerequisite: 'advanced-administrator',
    notes: 'Specialized architect track for security & sharing',
  },

  'data-architect': {
    slug: 'data-architect',
    noPrerequisite: true,
    recommendedPrerequisite: 'app-builder',
    notes: 'The issuer recommends Platform App Builder, Platform Developer, and Platform Developer II; no prerequisite certification is required.',
  },

  'integration-architect': {
    slug: 'integration-architect',
    noPrerequisite: true,
    notes: 'No prerequisite; this exam is a component of System Architect',
  },

  'identity-access-management-architect': {
    slug: 'identity-access-management-architect',
    noPrerequisite: true,
    notes: 'No prerequisite; this exam is a component of System Architect',
  },

  'dev-lifecycle-deployment-architect': {
    slug: 'dev-lifecycle-deployment-architect',
    noPrerequisite: true,
    notes: 'No prerequisite; this exam is a component of System Architect',
  },

  'b2b-solution-architect': {
    slug: 'b2b-solution-architect',
    requiredPrerequisite: 'application-architect',
    notes: 'Required Application Architect (guide 005299472, read 14 November 2026)',
  },

  'b2c-commerce-architect': {
    slug: 'b2c-commerce-architect',
    requiredPrerequisite: 'b2c-commerce-developer',
    notes: 'Required B2C Commerce Developer (guide 005298936, read 14 November 2026)',
  },

  'b2c-solution-architect': {
    slug: 'b2c-solution-architect',
    requiredPrerequisites: ['app-builder', 'data-architect', 'integration-architect'],
    notes: 'Requires Platform App Builder, Platform Data Architect and Platform Integration Architect (guide 005298942, read 14 November 2026)',
  },

  'heroku-architect': {
    slug: 'heroku-architect',
    noPrerequisite: true,
    recommendedPrerequisite: 'developer-1',
    notes: 'Heroku platform architecture and advanced patterns',
  },

  'mulesoft-catalyst-consultant': {
    slug: 'mulesoft-catalyst-consultant',
    noPrerequisite: true,
    recommendedPrerequisite: 'mulesoft-developer-i',
    notes: 'MuleSoft consulting methodology',
  },

  'mulesoft-platform-architect': {
    slug: 'mulesoft-platform-architect',
    noPrerequisite: true,
    recommendedPrerequisite: 'mulesoft-developer-ii',
    notes: 'MuleSoft platform design and governance',
  },

  'mulesoft-integration-architect': {
    slug: 'mulesoft-integration-architect',
    recommendedPrerequisite: 'mulesoft-developer-i',
    noPrerequisite: true,
    notes: 'No prerequisite; MuleSoft Developer is recommended (guide 005298957, read 14 November 2026)',
  },

  'technical-architect-evaluation': {
    slug: 'technical-architect-evaluation',
    requiredPrerequisites: ['application-architect', 'system-architect'],
    notes: 'Requires both Application Architect and System Architect (guide 005299002, read 14 November 2026)',
  },

  'technical-architect-review-board': {
    slug: 'technical-architect-review-board',
    requiredPrerequisite: 'technical-architect-evaluation',
    notes: 'CTA review board; final stage of the CTA process',
  },

  // ─── Designer track ───────────────────────────────────────────────────────

  'strategy-designer': {
    slug: 'strategy-designer',
    noPrerequisite: true,
    recommendedPrerequisite: 'administrator',
    notes: 'UX strategy and design thinking on Salesforce',
  },

  'ux-designer': {
    slug: 'ux-designer',
    noPrerequisite: true,
    recommendedPrerequisite: 'administrator',
    notes: 'UX design principles for Salesforce platform',
  },

  // ─── Tableau track ────────────────────────────────────────────────────────

  'tableau-data-analyst': {
    slug: 'tableau-data-analyst',
    noPrerequisite: true,
    notes: 'Analytics and data visualization fundamentals; good starting point',
  },

  'tableau-desktop-foundations': {
    slug: 'tableau-desktop-foundations',
    noPrerequisite: true,
    notes: 'Tableau desktop fundamentals; beginner starting point',
  },

  'tableau-consultant': {
    slug: 'tableau-consultant',
    noPrerequisite: true,
    recommendedPrerequisite: 'tableau-data-analyst',
    notes: 'Tableau consulting and implementation',
  },

  'tableau-architect': {
    slug: 'tableau-architect',
    noPrerequisite: true,
    notes: 'No prerequisite (guide 005298985, read 14 November 2026)',
  },

  'tableau-server-administrator': {
    slug: 'tableau-server-administrator',
    noPrerequisite: true,
    recommendedPrerequisite: 'tableau-desktop-foundations',
    notes: 'Tableau server administration and deployment',
  },

  // ─── Accredited Professional track ───────────────────────────────────────

  'advanced-field-service-ap': {
    slug: 'advanced-field-service-ap',
    noPrerequisite: true,
    recommendedPrerequisite: 'field-service',
    notes: 'Advanced field service; Field Service Consultant recommended',
  },

  'b2b-commerce-admin-ap': {
    slug: 'b2b-commerce-admin-ap',
    noPrerequisite: true,
    recommendedPrerequisite: 'administrator',
    notes: 'B2B e-commerce administration',
  },

  'b2b-commerce-developer-ap': {
    slug: 'b2b-commerce-developer-ap',
    noPrerequisite: true,
    recommendedPrerequisite: 'developer-1',
    notes: 'B2B e-commerce development',
  },

  'communications-cloud-ap': {
    slug: 'communications-cloud-ap',
    noPrerequisite: true,
    recommendedPrerequisite: 'administrator',
    notes: 'Telecom and communications industry cloud',
  },

  'consumer-goods-cloud-ap': {
    slug: 'consumer-goods-cloud-ap',
    noPrerequisite: true,
    recommendedPrerequisite: 'administrator',
    notes: 'Consumer goods industry cloud',
  },

  'consumer-goods-tpm-ap': {
    slug: 'consumer-goods-tpm-ap',
    noPrerequisite: true,
    recommendedPrerequisite: 'consumer-goods-cloud-ap',
    notes: 'Trade Promotion Management; Consumer Goods Cloud recommended',
  },

  'contact-center-ap': {
    slug: 'contact-center-ap',
    noPrerequisite: true,
    recommendedPrerequisite: 'service-cloud',
    notes: 'Contact center solutions; Service Cloud knowledge recommended',
  },

  'cpq-billing-ap': {
    slug: 'cpq-billing-ap',
    noPrerequisite: true,
    recommendedPrerequisite: 'cpq-administrator',
    notes: 'CPQ + Billing; CPQ Administrator recommended',
  },

  'energy-utilities-ap': {
    slug: 'energy-utilities-ap',
    noPrerequisite: true,
    recommendedPrerequisite: 'administrator',
    notes: 'Energy sector cloud solutions',
  },

  'financial-services-cloud-ap': {
    slug: 'financial-services-cloud-ap',
    noPrerequisite: true,
    recommendedPrerequisite: 'administrator',
    notes: 'Financial services industry cloud',
  },

  'health-cloud-ap': {
    slug: 'health-cloud-ap',
    noPrerequisite: true,
    recommendedPrerequisite: 'administrator',
    notes: 'Healthcare industry cloud',
  },

  'heroku-developer-ap': {
    slug: 'heroku-developer-ap',
    noPrerequisite: true,
    recommendedPrerequisite: 'developer-1',
    notes: 'Heroku application development',
  },

  'loyalty-management-ap': {
    slug: 'loyalty-management-ap',
    noPrerequisite: true,
    recommendedPrerequisite: 'administrator',
    notes: 'Loyalty programs and management',
  },

  'manufacturing-cloud-ap': {
    slug: 'manufacturing-cloud-ap',
    noPrerequisite: true,
    recommendedPrerequisite: 'administrator',
    notes: 'Manufacturing industry cloud',
  },

  'marketing-cloud-advanced-cross-channel-ap': {
    slug: 'marketing-cloud-advanced-cross-channel-ap',
    noPrerequisite: true,
    recommendedPrerequisite: 'marketing-cloud-consultant',
    notes: 'Advanced cross-channel marketing automation',
  },

  'marketing-cloud-intelligence-ap': {
    slug: 'marketing-cloud-intelligence-ap',
    noPrerequisite: true,
    recommendedPrerequisite: 'marketing-cloud-consultant',
    notes: 'Marketing analytics and intelligence',
  },

  'marketing-cloud-personalization-ap': {
    slug: 'marketing-cloud-personalization-ap',
    noPrerequisite: true,
    recommendedPrerequisite: 'marketing-cloud-consultant',
    notes: 'Real-time personalization engine',
  },

  'media-cloud-ap': {
    slug: 'media-cloud-ap',
    noPrerequisite: true,
    recommendedPrerequisite: 'administrator',
    notes: 'Media and entertainment industry cloud',
  },

  'net-zero-cloud-ap': {
    slug: 'net-zero-cloud-ap',
    noPrerequisite: true,
    recommendedPrerequisite: 'administrator',
    notes: 'Sustainability and carbon accounting',
  },

  'order-management-admin-ap': {
    slug: 'order-management-admin-ap',
    noPrerequisite: true,
    recommendedPrerequisite: 'administrator',
    notes: 'Order management administration',
  },

  'order-management-developer-ap': {
    slug: 'order-management-developer-ap',
    noPrerequisite: true,
    recommendedPrerequisite: 'developer-1',
    notes: 'Order management development',
  },

  'process-automation-ap': {
    slug: 'process-automation-ap',
    noPrerequisite: true,
    recommendedPrerequisite: 'administrator',
    notes: 'Business process automation design',
  },

  'public-sector-solutions-ap': {
    slug: 'public-sector-solutions-ap',
    noPrerequisite: true,
    recommendedPrerequisite: 'administrator',
    notes: 'Government and public sector cloud',
  },

  'platform-foundations': {
    slug: 'platform-foundations',
    noPrerequisite: true,
  },

  'marketing-cloud-engagement-foundations': {
    slug: 'marketing-cloud-engagement-foundations',
    noPrerequisite: true,
  },

  'mulesoft-integration-foundations': {
    slug: 'mulesoft-integration-foundations',
    noPrerequisite: true,
  },

  'public-sector-solutions-consultant': {
    slug: 'public-sector-solutions-consultant',
    noPrerequisite: true,
  },

  'marketing-cloud-next-consultant': {
    slug: 'marketing-cloud-next-consultant',
    noPrerequisite: true,
  },

  'sales-foundations': {
    slug: 'sales-foundations',
    noPrerequisite: true,
  },

  'tableau-next-consultant': {
    slug: 'tableau-next-consultant',
    noPrerequisite: true,
  },
}

/**
 * Get prerequisite information for a certification
 * Returns both required and recommended prerequisites if they exist
 */
export function getCertPrerequisites(slug: string): CertPrerequisite | null {
  return CERT_PREREQUISITES[slug] || null
}

/**
 * Check if a certification has a required prerequisite
 */
export function hasRequiredPrerequisite(slug: string): boolean {
  const prereq = CERT_PREREQUISITES[slug]
  return Boolean(prereq?.requiredPrerequisite || prereq?.requiredPrerequisites?.length)
}

/**
 * Get every required prerequisite slug for a certification.
 */
export function getRequiredPrerequisites(slug: string): string[] {
  const prereq = CERT_PREREQUISITES[slug]
  return prereq?.requiredPrerequisites ?? (prereq?.requiredPrerequisite ? [prereq.requiredPrerequisite] : [])
}

/**
 * Get the first required prerequisite slug for backward-compatible callers.
 */
export function getRequiredPrerequisite(slug: string): string | undefined {
  return getRequiredPrerequisites(slug)[0]
}

/**
 * Get recommended prerequisite slug for a certification
 */
export function getRecommendedPrerequisite(slug: string): string | undefined {
  return CERT_PREREQUISITES[slug]?.recommendedPrerequisite
}

/**
 * Get all certifications that have this cert as a prerequisite
 */
export function getCertificationsRequiringThis(slug: string): CertPrerequisite[] {
  return Object.values(CERT_PREREQUISITES).filter(
    (cert) =>
      cert.requiredPrerequisite === slug ||
      cert.requiredPrerequisites?.includes(slug) ||
      cert.recommendedPrerequisite === slug
  )
}
