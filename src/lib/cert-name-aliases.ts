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
    primaryName: 'Salesforce Certified Advanced Administrator',
    formerName: 'Salesforce Certified Platform Administrator II',
  },
  'app-builder': {
    primaryName: 'Salesforce Certified Platform App Builder',
    formerName: 'Salesforce Certified App Builder',
  },
  'developer-1': {
    primaryName: 'Salesforce Certified Platform Developer I',
    formerName: 'Salesforce Certified Platform Developer I',
  },
  'developer-2': {
    primaryName: 'Salesforce Certified Platform Developer II',
    formerName: 'Salesforce Certified Platform Developer II',
  },
  'email-specialist': {
    primaryName: 'Salesforce Certified Marketing Cloud Email Specialist',
    formerName: 'Salesforce Certified Email Specialist',
  },
  'pardot-specialist': {
    primaryName: 'Salesforce Certified Account Engagement (Pardot) Specialist',
    formerName: 'Salesforce Certified Pardot Specialist',
  },
  'pardot-consultant': {
    primaryName: 'Salesforce Certified Account Engagement (Pardot) Consultant',
    formerName: 'Salesforce Certified Pardot Consultant',
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
