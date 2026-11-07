/**
 * The credentials the site asserts for its editorial reviewer.
 *
 * Single source of truth so the /team page, the homepage credentials block
 * and the Organization JSON-LD cannot drift apart. Everything here is a
 * claim about a real person and is published verbatim, so add an entry only
 * when the credential is actually held and verifiable on the linked
 * Trailblazer profile.
 */

export const REVIEWER = {
  name: 'Krishna Mohan',
  jobTitle: 'Lead Content Reviewer & Salesforce Certified Professional',
  profileUrl: 'https://trailblazer.me/id/krishnamohan',
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
  { label: 'Salesforce Certified Data Cloud Consultant', abbr: 'Data Cloud' },
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
