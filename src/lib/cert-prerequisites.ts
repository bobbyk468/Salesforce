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
