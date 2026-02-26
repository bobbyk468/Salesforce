/**
 * Salesforce Certification Prerequisites Data
 * Maps certification slugs to their prerequisite certifications
 * This helps guide users through the optimal certification path
 */

export interface CertPrerequisite {
  slug: string
  /** Slug of required prerequisite cert */
  requiredPrerequisite?: string
  /** Slug of recommended (but not required) prerequisite cert */
  recommendedPrerequisite?: string
  /** Additional notes about prerequisites */
  notes?: string
}

/**
 * Prerequisites mapping for Salesforce certifications
 * Only includes certs with prerequisites or specific learning paths
 */
export const CERT_PREREQUISITES: Record<string, CertPrerequisite> = {
  // Platform Administrator - foundational
  'platform-foundations': {
    slug: 'platform-foundations',
    notes: 'Foundational cert - great starting point for all learners',
  },

  // Admin track
  'administrator': {
    slug: 'administrator',
    recommendedPrerequisite: 'platform-foundations',
    notes: 'Most popular entry-level certification',
  },

  'advanced-administrator': {
    slug: 'advanced-administrator',
    requiredPrerequisite: 'administrator',
    notes: 'Requires Admin certification to attempt',
  },

  // App Builder track
  'app-builder': {
    slug: 'app-builder',
    recommendedPrerequisite: 'platform-foundations',
    notes: 'Good path parallel to Admin or after Platform Foundations',
  },

  // Developer track
  'platform-developer-i': {
    slug: 'platform-developer-i',
    recommendedPrerequisite: 'platform-foundations',
    notes: 'Apex and VisualForce fundamentals',
  },

  'platform-developer-ii': {
    slug: 'platform-developer-ii',
    requiredPrerequisite: 'platform-developer-i',
    notes: 'Requires Platform Developer I certification',
  },

  'lightning-web-components-specialist': {
    slug: 'lightning-web-components-specialist',
    recommendedPrerequisite: 'platform-developer-i',
    notes: 'Builds on developer fundamentals',
  },

  // Architect track (requires multiple prerequisites)
  'application-architect': {
    slug: 'application-architect',
    recommendedPrerequisite: 'advanced-administrator',
    notes: 'Recommended background: Admin or App Builder + Dev experience',
  },

  'system-architect': {
    slug: 'system-architect',
    recommendedPrerequisite: 'advanced-administrator',
    notes: 'Advanced-level system design certification',
  },

  'technical-architect': {
    slug: 'technical-architect',
    recommendedPrerequisite: 'platform-developer-ii',
    notes: 'Expert-level technical architecture certification',
  },

  'sharing-visibility-architect': {
    slug: 'sharing-visibility-architect',
    recommendedPrerequisite: 'advanced-administrator',
    notes: 'Specialized architect track for security & sharing',
  },

  // Data Cloud track
  'data-cloud-consultant': {
    slug: 'data-cloud-consultant',
    recommendedPrerequisite: 'administrator',
    notes: 'Newer certification focused on Data Cloud platform',
  },

  // Customer Experience track
  'cx-consultant': {
    slug: 'cx-consultant',
    recommendedPrerequisite: 'administrator',
    notes: 'Customer experience and commerce focus',
  },

  // Service Cloud specialist
  'service-cloud-specialist': {
    slug: 'service-cloud-specialist',
    recommendedPrerequisite: 'administrator',
    notes: 'Service Cloud platform specialization',
  },

  // Sales Cloud specialist
  'sales-cloud-consultant': {
    slug: 'sales-cloud-consultant',
    recommendedPrerequisite: 'administrator',
    notes: 'Sales Cloud platform specialization',
  },

  // Marketing Cloud track
  'marketing-cloud-email-specialist': {
    slug: 'marketing-cloud-email-specialist',
    recommendedPrerequisite: 'administrator',
    notes: 'Email marketing automation specialization',
  },

  'marketing-cloud-consultant': {
    slug: 'marketing-cloud-consultant',
    recommendedPrerequisite: 'marketing-cloud-email-specialist',
    notes: 'Advanced Marketing Cloud platform certification',
  },

  // Commerce Cloud track
  'commerce-cloud-digital-developer': {
    slug: 'commerce-cloud-digital-developer',
    recommendedPrerequisite: 'platform-developer-i',
    notes: 'E-commerce development specialization',
  },

  // Education Cloud
  'education-cloud-consultant': {
    slug: 'education-cloud-consultant',
    recommendedPrerequisite: 'administrator',
    notes: 'Higher education platform specialization',
  },

  // Health Cloud
  'health-cloud-accredited-professional': {
    slug: 'health-cloud-accredited-professional',
    recommendedPrerequisite: 'administrator',
    notes: 'Healthcare industry cloud platform',
  },

  // Pardot track
  'pardot-consultant': {
    slug: 'pardot-consultant',
    recommendedPrerequisite: 'marketing-cloud-email-specialist',
    notes: 'B2B marketing automation platform',
  },

  'pardot-specialist': {
    slug: 'pardot-specialist',
    recommendedPrerequisite: 'pardot-consultant',
    notes: 'Advanced Pardot specialization',
  },

  // Salesforce native certs
  'slack-administrator': {
    slug: 'slack-administrator',
    recommendedPrerequisite: 'administrator',
    notes: 'Slack enterprise platform administration',
  },

  'slack-developer': {
    slug: 'slack-developer',
    recommendedPrerequisite: 'platform-developer-i',
    notes: 'Slack application development',
  },

  // Tableau track
  'tableau-data-analyst': {
    slug: 'tableau-data-analyst',
    notes: 'Analytics and data visualization fundamentals',
  },

  'tableau-desktop': {
    slug: 'tableau-desktop',
    recommendedPrerequisite: 'tableau-data-analyst',
    notes: 'Tableau desktop application specialization',
  },

  'tableau-server-administrator': {
    slug: 'tableau-server-administrator',
    recommendedPrerequisite: 'tableau-desktop',
    notes: 'Tableau server administration and deployment',
  },

  // Exempt certs (no prerequisites, foundational)
  'nonprofit-cloud-consultant': {
    slug: 'nonprofit-cloud-consultant',
    notes: 'Nonprofit sector cloud solutions - foundational',
  },

  'public-sector-solutions-architect': {
    slug: 'public-sector-solutions-architect',
    recommendedPrerequisite: 'advanced-administrator',
    notes: 'Government sector solutions architecture',
  },

  'financial-services-cloud-consultant': {
    slug: 'financial-services-cloud-consultant',
    recommendedPrerequisite: 'administrator',
    notes: 'Financial services industry specialization',
  },

  'manufacturing-cloud-consultant': {
    slug: 'manufacturing-cloud-consultant',
    recommendedPrerequisite: 'administrator',
    notes: 'Manufacturing industry cloud solutions',
  },

  // Developer track (additional)
  'developer-1': {
    slug: 'developer-1',
    recommendedPrerequisite: 'platform-foundations',
    notes: 'Apex and Visualforce fundamentals; platform-foundations recommended',
  },
  'developer-2': {
    slug: 'developer-2',
    requiredPrerequisite: 'developer-1',
    notes: 'Requires Platform Developer I certification',
  },
  'javascript-developer-i': {
    slug: 'javascript-developer-i',
    recommendedPrerequisite: 'developer-1',
    notes: 'Modern JavaScript and LWC; developer experience recommended',
  },
  'b2c-commerce-developer': {
    slug: 'b2c-commerce-developer',
    recommendedPrerequisite: 'developer-1',
    notes: 'B2C Commerce (SFCC) e-commerce development',
  },
  'industries-cpq-developer': {
    slug: 'industries-cpq-developer',
    recommendedPrerequisite: 'administrator',
    notes: 'Industries CPQ configuration and development',
  },
  'marketing-cloud-engagement-developer': {
    slug: 'marketing-cloud-engagement-developer',
    recommendedPrerequisite: 'marketing-cloud-engagement-admin',
    notes: 'Marketing Cloud technical development; admin knowledge recommended',
  },
  'mulesoft-developer-i': {
    slug: 'mulesoft-developer-i',
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
    recommendedPrerequisite: 'mulesoft-developer-i',
    notes: 'Automation and AI-powered integration',
  },
  'omnistudio-developer': {
    slug: 'omnistudio-developer',
    recommendedPrerequisite: 'developer-1',
    notes: 'OmniStudio technical development for industry clouds',
  },
  // Consultant track (additional)
  'sales-cloud': {
    slug: 'sales-cloud',
    recommendedPrerequisite: 'administrator',
    notes: 'Sales Cloud implementation and consulting',
  },
  'service-cloud': {
    slug: 'service-cloud',
    recommendedPrerequisite: 'administrator',
    notes: 'Service Cloud configuration and consulting',
  },
  'experience-cloud': {
    slug: 'experience-cloud',
    recommendedPrerequisite: 'administrator',
    notes: 'Communities and Experience Cloud setup',
  },
  'field-service': {
    slug: 'field-service',
    recommendedPrerequisite: 'administrator',
    notes: 'Field service scheduling and optimization',
  },
  'crm-analytics-einstein-discovery-consultant': {
    slug: 'crm-analytics-einstein-discovery-consultant',
    recommendedPrerequisite: 'administrator',
    notes: 'CRM Analytics and Einstein Discovery consulting',
  },
  'email-specialist': {
    slug: 'email-specialist',
    recommendedPrerequisite: 'marketing-cloud-engagement-admin',
    notes: 'Email marketing automation; MC admin knowledge recommended',
  },
  'nonprofit-cloud': {
    slug: 'nonprofit-cloud',
    recommendedPrerequisite: 'administrator',
    notes: 'Nonprofit Cloud CRM implementation',
  },
  'nonprofit-success-pack-consultant': {
    slug: 'nonprofit-success-pack-consultant',
    recommendedPrerequisite: 'administrator',
    notes: 'NPSP configuration and nonprofit CRM',
  },
  'omnistudio-consultant': {
    slug: 'omnistudio-consultant',
    recommendedPrerequisite: 'administrator',
    notes: 'OmniStudio consulting for industry clouds',
  },
  'revenue-cloud-consultant': {
    slug: 'revenue-cloud-consultant',
    recommendedPrerequisite: 'cpq-administrator',
    notes: 'Revenue Cloud (CPQ + Billing) consulting',
  },
  'slack-consultant': {
    slug: 'slack-consultant',
    recommendedPrerequisite: 'administrator',
    notes: 'Slack enterprise consulting and integration',
  },
  'business-analyst': {
    slug: 'business-analyst',
    recommendedPrerequisite: 'administrator',
    notes: 'Business analysis and requirements in Salesforce context',
  },

  // Administrator track (additional)
  'agentforce-specialist': {
    slug: 'agentforce-specialist',
    recommendedPrerequisite: 'administrator',
    notes: 'Autonomous AI agents on Salesforce; admin context required',
  },
  'cpq-administrator': {
    slug: 'cpq-administrator',
    recommendedPrerequisite: 'administrator',
    notes: 'CPQ admin; Salesforce admin foundation recommended',
  },
  'marketing-cloud-engagement-admin': {
    slug: 'marketing-cloud-engagement-admin',
    recommendedPrerequisite: 'administrator',
    notes: 'Marketing Cloud platform administration',
  },

  // Associate / Foundation (additional)
  'ai-associate': {
    slug: 'ai-associate',
    recommendedPrerequisite: 'platform-foundations',
    notes: 'AI fundamentals; platform-foundations recommended',
  },

  // Architect track (additional)
  'data-architect': {
    slug: 'data-architect',
    recommendedPrerequisite: 'system-architect',
    notes: 'Large-scale data modeling and management',
  },
  'integration-architect': {
    slug: 'integration-architect',
    recommendedPrerequisite: 'system-architect',
    notes: 'Enterprise integration patterns and API design',
  },
  'identity-access-management-architect': {
    slug: 'identity-access-management-architect',
    recommendedPrerequisite: 'system-architect',
    notes: 'IAM, SSO, and identity federation architecture',
  },
  'dev-lifecycle-deployment-architect': {
    slug: 'dev-lifecycle-deployment-architect',
    recommendedPrerequisite: 'system-architect',
    notes: 'CI/CD, release management, and DevOps',
  },
  'b2b-solution-architect': {
    slug: 'b2b-solution-architect',
    recommendedPrerequisite: 'application-architect',
    notes: 'B2B cross-cloud solution architecture',
  },
  'b2c-commerce-architect': {
    slug: 'b2c-commerce-architect',
    recommendedPrerequisite: 'b2c-commerce-developer',
    notes: 'B2C e-commerce architecture and best practices',
  },
  'b2c-solution-architect': {
    slug: 'b2c-solution-architect',
    recommendedPrerequisite: 'application-architect',
    notes: 'B2C cross-cloud solution design',
  },
  'heroku-architect': {
    slug: 'heroku-architect',
    recommendedPrerequisite: 'developer-1',
    notes: 'Heroku platform architecture and advanced patterns',
  },
  'mulesoft-catalyst-consultant': {
    slug: 'mulesoft-catalyst-consultant',
    recommendedPrerequisite: 'mulesoft-developer-i',
    notes: 'MuleSoft consulting methodology',
  },
  'mulesoft-platform-architect': {
    slug: 'mulesoft-platform-architect',
    recommendedPrerequisite: 'mulesoft-developer-ii',
    notes: 'MuleSoft platform design and governance',
  },
  'mulesoft-integration-architect': {
    slug: 'mulesoft-integration-architect',
    requiredPrerequisite: 'mulesoft-platform-architect',
    notes: 'Advanced MuleSoft integration architecture',
  },
  'technical-architect-evaluation': {
    slug: 'technical-architect-evaluation',
    requiredPrerequisite: 'application-architect',
    notes: 'CTA evaluation; requires Application Architect',
  },
  'technical-architect-review-board': {
    slug: 'technical-architect-review-board',
    requiredPrerequisite: 'technical-architect-evaluation',
    notes: 'CTA review board; final stage of the CTA process',
  },

  // Designer track
  'strategy-designer': {
    slug: 'strategy-designer',
    recommendedPrerequisite: 'administrator',
    notes: 'UX strategy and design thinking on Salesforce',
  },
  'ux-designer': {
    slug: 'ux-designer',
    recommendedPrerequisite: 'administrator',
    notes: 'UX design principles for Salesforce platform',
  },

  // Tableau track (additional)
  'tableau-consultant': {
    slug: 'tableau-consultant',
    recommendedPrerequisite: 'tableau-data-analyst',
    notes: 'Tableau consulting and implementation',
  },
  'tableau-architect': {
    slug: 'tableau-architect',
    requiredPrerequisite: 'tableau-consultant',
    notes: 'Tableau advanced architecture; requires Tableau Consultant',
  },

  // Accredited Professional track
  'advanced-field-service-ap': {
    slug: 'advanced-field-service-ap',
    recommendedPrerequisite: 'field-service',
    notes: 'Advanced field service; Field Service Consultant recommended',
  },
  'b2b-commerce-admin-ap': {
    slug: 'b2b-commerce-admin-ap',
    recommendedPrerequisite: 'administrator',
    notes: 'B2B e-commerce administration',
  },
  'b2b-commerce-developer-ap': {
    slug: 'b2b-commerce-developer-ap',
    recommendedPrerequisite: 'developer-1',
    notes: 'B2B e-commerce development',
  },
  'communications-cloud-ap': {
    slug: 'communications-cloud-ap',
    recommendedPrerequisite: 'administrator',
    notes: 'Telecom and communications industry cloud',
  },
  'consumer-goods-cloud-ap': {
    slug: 'consumer-goods-cloud-ap',
    recommendedPrerequisite: 'administrator',
    notes: 'Consumer goods industry cloud',
  },
  'consumer-goods-tpm-ap': {
    slug: 'consumer-goods-tpm-ap',
    recommendedPrerequisite: 'consumer-goods-cloud-ap',
    notes: 'Trade Promotion Management; Consumer Goods Cloud recommended',
  },
  'contact-center-ap': {
    slug: 'contact-center-ap',
    recommendedPrerequisite: 'service-cloud',
    notes: 'Contact center solutions; Service Cloud knowledge recommended',
  },
  'cpq-billing-ap': {
    slug: 'cpq-billing-ap',
    recommendedPrerequisite: 'cpq-administrator',
    notes: 'CPQ + Billing; CPQ Administrator recommended',
  },
  'energy-utilities-ap': {
    slug: 'energy-utilities-ap',
    recommendedPrerequisite: 'administrator',
    notes: 'Energy sector cloud solutions',
  },
  'financial-services-cloud-ap': {
    slug: 'financial-services-cloud-ap',
    recommendedPrerequisite: 'administrator',
    notes: 'Financial services industry cloud',
  },
  'health-cloud-ap': {
    slug: 'health-cloud-ap',
    recommendedPrerequisite: 'administrator',
    notes: 'Healthcare industry cloud',
  },
  'heroku-developer-ap': {
    slug: 'heroku-developer-ap',
    recommendedPrerequisite: 'developer-1',
    notes: 'Heroku application development',
  },
  'loyalty-management-ap': {
    slug: 'loyalty-management-ap',
    recommendedPrerequisite: 'administrator',
    notes: 'Loyalty programs and management',
  },
  'manufacturing-cloud-ap': {
    slug: 'manufacturing-cloud-ap',
    recommendedPrerequisite: 'administrator',
    notes: 'Manufacturing industry cloud',
  },
  'marketing-cloud-advanced-cross-channel-ap': {
    slug: 'marketing-cloud-advanced-cross-channel-ap',
    recommendedPrerequisite: 'marketing-cloud-consultant',
    notes: 'Advanced cross-channel marketing automation',
  },
  'marketing-cloud-intelligence-ap': {
    slug: 'marketing-cloud-intelligence-ap',
    recommendedPrerequisite: 'marketing-cloud-consultant',
    notes: 'Marketing analytics and intelligence',
  },
  'marketing-cloud-personalization-ap': {
    slug: 'marketing-cloud-personalization-ap',
    recommendedPrerequisite: 'marketing-cloud-consultant',
    notes: 'Real-time personalization engine',
  },
  'media-cloud-ap': {
    slug: 'media-cloud-ap',
    recommendedPrerequisite: 'administrator',
    notes: 'Media and entertainment industry cloud',
  },
  'net-zero-cloud-ap': {
    slug: 'net-zero-cloud-ap',
    recommendedPrerequisite: 'administrator',
    notes: 'Sustainability and carbon accounting',
  },
  'order-management-admin-ap': {
    slug: 'order-management-admin-ap',
    recommendedPrerequisite: 'administrator',
    notes: 'Order management administration',
  },
  'order-management-developer-ap': {
    slug: 'order-management-developer-ap',
    recommendedPrerequisite: 'developer-1',
    notes: 'Order management development',
  },
  'process-automation-ap': {
    slug: 'process-automation-ap',
    recommendedPrerequisite: 'administrator',
    notes: 'Business process automation design',
  },
  'public-sector-solutions-ap': {
    slug: 'public-sector-solutions-ap',
    recommendedPrerequisite: 'administrator',
    notes: 'Government and public sector cloud',
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
  return prereq?.requiredPrerequisite ? true : false
}

/**
 * Get the required prerequisite slug for a certification
 */
export function getRequiredPrerequisite(slug: string): string | undefined {
  return CERT_PREREQUISITES[slug]?.requiredPrerequisite
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
      cert.requiredPrerequisite === slug || cert.recommendedPrerequisite === slug
  )
}
