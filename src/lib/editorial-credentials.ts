/**
 * The credentials the site asserts for its editorial reviewer.
 *
 * Single source of truth so the /team page, the homepage credentials block
 * and the Organization JSON-LD cannot drift apart. Everything here is a
 * claim about a real person and is published verbatim, so add an entry only
 * when the credential is actually held and verifiable on the linked
 * Trailblazer profile.
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

/**
 * One @id for the reviewer, used by every Person node the site emits
 * (homepage, /team, the editorial-credentials block, and the global
 * Organization's founder/employee). Without a shared @id each block was a
 * separate Person node describing the same human, which reads to a consumer
 * as several different people rather than one authoritative author entity.
 */
export const REVIEWER_ID = `${SITE_URL}/#krishna-mohan`

export const REVIEWER = {
  name: 'Krishna Mohan',
  profileUrl: 'https://www.salesforce.com/trailblazer/krishnamohan?bc=OTH',
  linkedInUrl: 'https://www.linkedin.com/in/krishna-mohan-879b94100/',
} as const

export type EditorialCredential = { label: string; abbr: string }

export const EDITORIAL_CREDENTIALS: EditorialCredential[] = [
  { label: 'Salesforce Certified Administrator (ADM-201)', abbr: 'ADM-201' },
  { label: 'Salesforce Certified Platform Administrator II', abbr: 'Advanced Admin' },
  { label: 'Salesforce Certified Platform Developer', abbr: 'PD1' },
  { label: 'Salesforce Certified Platform Developer II', abbr: 'PD2' },
  { label: 'Salesforce Certified Platform App Builder', abbr: 'App Builder' },
  { label: 'Salesforce Certified Agentforce Sales Consultant', abbr: 'Sales Cloud' },
  { label: 'Salesforce Certified Agentforce Service Consultant', abbr: 'Service Cloud' },
  { label: 'Salesforce Certified Experience Cloud Consultant', abbr: 'Experience Cloud' },
  { label: 'Salesforce Certified Marketing Cloud Engagement Specialist', abbr: 'MC Email' },
  { label: 'Salesforce Certified Business Analyst', abbr: 'Business Analyst' },
  { label: 'Salesforce Certified JavaScript Developer', abbr: 'JS Dev I' },
  { label: 'Salesforce Certified Data 360 Consultant', abbr: 'Data 360' },
  { label: 'Salesforce Certified Agentforce Specialist', abbr: 'Agentforce' },
  { label: 'Salesforce Certified MuleSoft Integration Foundations', abbr: 'MuleSoft' },
]

/** schema.org EducationalOccupationalCredential entries for the reviewer. */
export function getCredentialJsonLd() {
  return EDITORIAL_CREDENTIALS.map((credential) => ({
    '@type': 'EducationalOccupationalCredential',
    name: credential.label,
    credentialCategory: 'Professional Certification',
    recognizedBy: { '@type': 'Organization', name: 'Salesforce', url: 'https://www.salesforce.com' },
  }))
}

/**
 * Job title for the reviewer's Person schema and the visible byline. The
 * credential count is derived from EDITORIAL_CREDENTIALS so the number in the
 * title can never contradict the list rendered right beside it.
 */
export const REVIEWER_JOB_TITLE =
  `Lead Content Reviewer \u00b7 ${EDITORIAL_CREDENTIALS.length}x Salesforce Certified Professional`
