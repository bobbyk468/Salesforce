import { OFFICIAL_CERT_NAMES } from './cert-official-names'

/**
 * Current (official) and former names for certifications so the site ranks for both.
 * primaryName = current/official name; formerName = previous name users still search for.
 * Add entries when Salesforce renames a credential. All other certs use OFFICIAL_CERT_NAMES.
 */

export interface CertNameAlias {
  /** Current official certification name (e.g. "Salesforce Certified Platform Administrator") */
  primaryName: string
  /** Previous name users still search for (e.g. "Salesforce Certified Administrator") */
  formerName?: string
}

/** Renamed certs: alias overrides OFFICIAL_CERT_NAMES; formerName used for "formerly X" in copy. */
export const CERT_NAME_ALIASES: Record<string, CertNameAlias> = {
  administrator: {
    primaryName: 'Salesforce Certified Platform Administrator',
    formerName: 'Salesforce Certified Administrator',
  },
  'advanced-administrator': {
    primaryName: 'Salesforce Certified Platform Administrator II',
    formerName: 'Salesforce Certified Advanced Administrator',
  },
  'app-builder': {
    primaryName: 'Salesforce Certified Platform App Builder',
    formerName: 'Salesforce Certified App Builder',
  },
  'developer-1': {
    primaryName: 'Salesforce Certified Platform Developer',
    formerName: 'Salesforce Certified Platform Developer I',
  },
  'developer-2': {
    primaryName: 'Salesforce Certified Platform Developer II',
    formerName: 'Salesforce Certified Platform Developer II',
  },
  'email-specialist': {
    primaryName: 'Salesforce Certified Marketing Cloud Engagement Specialist',
    formerName: 'Salesforce Certified Marketing Cloud Email Specialist',
  },
  'pardot-specialist': {
    primaryName: 'Salesforce Certified Marketing Cloud Account Engagement Specialist',
    formerName: 'Salesforce Certified Account Engagement (Pardot) Specialist',
  },
  'pardot-consultant': {
    primaryName: 'Salesforce Certified Marketing Cloud Account Engagement Consultant',
    formerName: 'Salesforce Certified Account Engagement (Pardot) Consultant',
  },
  'data-architect': {
    primaryName: 'Salesforce Certified Platform Data Architect',
    formerName: 'Salesforce Certified Data Architect',
  },
  'dev-lifecycle-deployment-architect': {
    primaryName: 'Salesforce Certified Platform Development Lifecycle and Deployment Architect',
    formerName: 'Salesforce Certified Dev Lifecycle and Deployment Architect',
  },
  'identity-access-management-architect': {
    primaryName: 'Salesforce Certified Platform Identity and Access Management Architect',
    formerName: 'Salesforce Certified Identity and Access Management Architect',
  },
  'integration-architect': {
    primaryName: 'Salesforce Certified Platform Integration Architect',
    formerName: 'Salesforce Certified Integration Architect',
  },
  'sharing-visibility-architect': {
    primaryName: 'Salesforce Certified Platform Sharing and Visibility Architect',
    formerName: 'Salesforce Certified Sharing and Visibility Architect',
  },
  'ux-designer': {
    primaryName: 'Salesforce Certified Platform User Experience Designer',
    formerName: 'Salesforce Certified User Experience (UX) Designer',
  },
  'javascript-developer-i': {
    primaryName: 'Salesforce Certified JavaScript Developer',
    formerName: 'Salesforce Certified JavaScript Developer I',
  },
  'mulesoft-developer-i': {
    primaryName: 'Salesforce Certified MuleSoft Developer',
    formerName: 'Salesforce Certified MuleSoft Developer I',
  },
  'b2c-commerce-developer': {
    primaryName: 'Salesforce Certified B2C Commerce Developer',
    formerName: 'Salesforce Certified B2C Commerce Cloud Developer',
  },
  'marketing-cloud-engagement-admin': {
    primaryName: 'Salesforce Certified Marketing Cloud Engagement Administrator',
    formerName: 'Salesforce Certified Marketing Cloud Administrator',
  },
  'sales-cloud': {
    primaryName: 'Salesforce Certified Agentforce Sales Consultant',
    formerName: 'Salesforce Certified Sales Cloud Consultant',
  },
  'service-cloud': {
    primaryName: 'Salesforce Certified Agentforce Service Consultant',
    formerName: 'Salesforce Certified Service Cloud Consultant',
  },
  'field-service': {
    primaryName: 'Salesforce Certified Agentforce Field Service and Operations Consultant',
    formerName: 'Salesforce Certified Field Service Consultant',
  },
  'sales-foundations': {
    primaryName: 'Salesforce Certified Agentforce Sales Foundations',
    formerName: 'Salesforce Certified Sales Foundations',
  },
  'revenue-cloud-consultant': {
    primaryName: 'Salesforce Certified Revenue Management Consultant',
    formerName: 'Salesforce Certified Revenue Cloud Consultant',
  },
  'nonprofit-cloud': {
    primaryName: 'Salesforce Certified Agentforce Nonprofit Consultant',
    formerName: 'Salesforce Certified Nonprofit Cloud Consultant',
  },
  'data-360-consultant': {
    primaryName: 'Salesforce Certified Data 360 Consultant',
    formerName: 'Salesforce Certified Data Cloud Consultant',
  },
  'crm-analytics-einstein-discovery-consultant': {
    primaryName: 'Salesforce Certified CRM Analytics and Einstein Discovery Consultant',
    formerName: 'Salesforce Certified CRM Analytics & Einstein Discovery Consultant',
  },
  'communications-cloud-ap': {
    primaryName: 'Salesforce Accredited Agentforce Communications Professional',
    formerName: 'Salesforce Certified Communications Cloud Accredited Professional',
  },
  'consumer-goods-cloud-ap': {
    primaryName: 'Salesforce Accredited Agentforce Consumer Goods Professional',
    formerName: 'Salesforce Certified Consumer Goods Cloud Accredited Professional',
  },
  'financial-services-cloud-ap': {
    primaryName: 'Salesforce Accredited Agentforce Financial Services Professional',
    formerName: 'Salesforce Certified Financial Services Cloud Accredited Professional',
  },
  'health-cloud-ap': {
    primaryName: 'Salesforce Accredited Agentforce Health Professional',
    formerName: 'Salesforce Certified Health Cloud Accredited Professional',
  },
  'manufacturing-cloud-ap': {
    primaryName: 'Salesforce Accredited Agentforce Manufacturing Professional',
    formerName: 'Salesforce Certified Manufacturing Cloud Accredited Professional',
  },
  'public-sector-solutions-ap': {
    primaryName: 'Salesforce Accredited Agentforce 360 for Public Sector Professional',
    formerName: 'Salesforce Certified Public Sector Solutions Accredited Professional',
  },
  'b2b-commerce-admin-ap': {
    primaryName: 'Salesforce Accredited B2B Commerce Administrator Professional',
    formerName: 'Salesforce Certified B2B Commerce Admin Accredited Professional',
  },
  'b2b-commerce-developer-ap': {
    primaryName: 'Salesforce Accredited B2B Commerce Developer Professional',
    formerName: 'Salesforce Certified B2B Commerce Developer Accredited Professional',
  },
}

/** Current official name for the cert (Salesforce Certified X). Alias > OFFICIAL_CERT_NAMES > fallback. */
export function getCertPrimaryName(slug: string, fallbackDisplayName: string): string {
  const alias = CERT_NAME_ALIASES[slug]
  if (alias) return alias.primaryName
  if (OFFICIAL_CERT_NAMES[slug]) return OFFICIAL_CERT_NAMES[slug]
  return fallbackDisplayName
}

/** Former name if the cert was renamed; used for "formerly X" in copy and meta so both terms are on the page. */
export function getCertFormerName(slug: string): string | undefined {
  return CERT_NAME_ALIASES[slug]?.formerName
}
