export type CredentialStatusKind = 'retired' | 'exam-closed' | 'details-unverified' | 'announced-details-unverified'

export interface CredentialStatusInfo {
  kind: CredentialStatusKind
  label: string
  message: string
  sourceLabel: string
  sourceUrl: string
}

const AI_ASSOCIATE_STATUS: CredentialStatusInfo = {
  kind: 'retired',
  label: 'Retired February 2026',
  message: 'Salesforce retired the AI Associate certification in February 2026. This page is retained as a historical learning reference; it is not a current exam guide.',
  sourceLabel: 'Salesforce retirement notice',
  sourceUrl: 'https://trailhead.salesforce.com/en/credentials/aiassociate',
}

// Verified 9 November 2026 against Pearson's Claude Certification Program page,
// which is the issuer's own delivery partner. It confirms the four exams and
// their codes, and states that "Certification is open to organizations in the
// Claude Partner Network" — so most individual readers cannot register. Pearson
// does not publish fees, question counts, durations or passing scores, which is
// why this site shows none of them for these credentials.
const CLAUDE_STATUS: CredentialStatusInfo = {
  kind: 'details-unverified',
  label: 'Open to Claude Partner Network organizations',
  message: 'Pearson, which delivers this exam for Anthropic, states that certification is open to organizations in the Claude Partner Network, so it is generally not available to individual candidates. Fees, question counts, durations and passing scores are not published by the issuer and are not listed here. Exam guides are being updated for exams taken on or after 7 December 2026.',
  sourceLabel: 'Pearson: Claude Certification Program by Anthropic',
  sourceUrl: 'https://www.pearsonvue.com/us/en/anthropic.html',
}

// Same Pearson verification as CLAUDE_STATUS: the eligibility restriction
// applies to all four exams, this one included.
const CLAUDE_ARCHITECT_FOUNDATIONS_STATUS: CredentialStatusInfo = {
  kind: 'announced-details-unverified',
  label: 'Open to Claude Partner Network organizations',
  message: 'Anthropic announced Claude Certified Architect, Foundations as its first technical certification. Pearson, which delivers it, states that certification is open to organizations in the Claude Partner Network, so it is generally not available to individual candidates. Fees, question counts, durations and passing scores are not published by the issuer and are not listed here. Exam guides are being updated for exams taken on or after 7 December 2026.',
  sourceLabel: 'Pearson: Claude Certification Program by Anthropic',
  sourceUrl: 'https://www.pearsonvue.com/us/en/anthropic.html',
}

/**
 * The 24 credentials Salesforce listed as retiring on 1 February 2027.
 * Registration closed on 24 July 2026 and the last day to sit any of them was
 * 31 August 2026, both of which have passed, so none can be booked now. The
 * credential itself is not retired yet, and people who hold it still hold it.
 *
 * Source: Salesforce Certification Retirements,
 * help.salesforce.com/s/articleView?id=005388958 (read 4 November 2026).
 *
 * Education Cloud Consultant is on the same list but keeps its own longer
 * entry below, written before this helper existed.
 */
function examClosedAugust2026(name: string): CredentialStatusInfo {
  return {
    kind: 'exam-closed',
    label: 'Exam closed; credential retires February 1, 2027',
    message: `Salesforce closed ${name} registration on July 24, 2026 and exam delivery after August 31, 2026, so the exam can no longer be booked. The credential retires February 1, 2027; it is not already retired, and existing holders keep it. These notes preserve the published exam objectives for learning, not new exam bookings.`,
    sourceLabel: 'Salesforce Certification Retirements',
    sourceUrl: 'https://help.salesforce.com/s/articleView?id=005388958&language=en_US&type=1',
  }
}

const CREDENTIAL_STATUS: Record<string, CredentialStatusInfo> = {
  'education-cloud-consultant': {
    kind: 'exam-closed',
    label: 'Exam closed; credential retirement scheduled February 1, 2027',
    message: 'Salesforce closed Education Cloud Consultant registration on July 24, 2026 and exam delivery after August 31, 2026. The credential retires February 1, 2027; it is not already retired. These notes preserve the published exam objectives for learning, not new exam bookings.',
    sourceLabel: 'Salesforce Education Cloud Consultant exam and retirement notice',
    sourceUrl: 'https://help.salesforce.com/s/articleView?id=005298934&language=en_US&type=1',
  },
  'advanced-field-service-ap': examClosedAugust2026('Advanced Field Service Accredited Professional'),
  'b2b-solution-architect': examClosedAugust2026('B2B Solution Architect'),
  'b2c-commerce-architect': examClosedAugust2026('B2C Commerce Architect'),
  'consumer-goods-tpm-ap': examClosedAugust2026('Consumer Goods Cloud: Trade Promotion Management Accredited Professional'),
  'contact-center-ap': examClosedAugust2026('Contact Center Accredited Professional'),
  'cpq-administrator': examClosedAugust2026('CPQ Administrator'),
  'cpq-billing-ap': examClosedAugust2026('CPQ and Billing Consultant Accredited Professional'),
  'industries-cpq-developer': examClosedAugust2026('Industries CPQ Developer'),
  'energy-utilities-ap': examClosedAugust2026('Energy and Utilities Cloud Accredited Professional'),
  'heroku-developer-ap': examClosedAugust2026('Heroku Developer Accredited Professional'),
  'loyalty-management-ap': examClosedAugust2026('Loyalty Management Accredited Professional'),
  'pardot-consultant': examClosedAugust2026('Marketing Cloud Account Engagement Consultant'),
  'marketing-cloud-advanced-cross-channel-ap': examClosedAugust2026('Marketing Cloud Advanced Cross Channel Accredited Professional'),
  'marketing-cloud-intelligence-ap': examClosedAugust2026('Marketing Cloud Intelligence Accredited Professional'),
  'marketing-cloud-personalization-ap': examClosedAugust2026('Marketing Cloud Personalization Accredited Professional'),
  'media-cloud-ap': examClosedAugust2026('Media Cloud Accredited Professional'),
  'mulesoft-catalyst-consultant': examClosedAugust2026('MuleSoft Catalyst Consultant'),
  'mulesoft-hyperautomation-developer': examClosedAugust2026('MuleSoft Hyperautomation Developer'),
  'net-zero-cloud-ap': examClosedAugust2026('Net Zero Cloud Accredited Professional'),
  'order-management-admin-ap': examClosedAugust2026('Order Management Administrator Accredited Professional'),
  'order-management-developer-ap': examClosedAugust2026('Order Management Developer Accredited Professional'),
  'process-automation-ap': examClosedAugust2026('Process Automation Accredited Professional'),
  'nonprofit-success-pack-consultant': examClosedAugust2026('Nonprofit Success Pack Consultant'),
  'ai-associate': AI_ASSOCIATE_STATUS,
  'claude-certified-associate': CLAUDE_STATUS,
  'claude-certified-developer': CLAUDE_STATUS,
  'claude-certified-architect-foundations': CLAUDE_ARCHITECT_FOUNDATIONS_STATUS,
  'claude-certified-architect-professional': CLAUDE_STATUS,
}

export function getCredentialStatus(slug: string): CredentialStatusInfo | undefined {
  return CREDENTIAL_STATUS[slug]
}

export function hasUnverifiedClaudeExamDetails(slug: string): boolean {
  return slug.startsWith('claude-certified-')
}

/** Credentials awarded for holding component certifications, with no exam of their own. */
const COMPONENT_ONLY_CREDENTIALS = new Set(['application-architect', 'system-architect'])

export function isComponentOnlyCredential(slug: string): boolean {
  return COMPONENT_ONLY_CREDENTIALS.has(slug)
}

export function isRetiredCredential(slug: string): boolean {
  return getCredentialStatus(slug)?.kind === 'retired'
}

export function isUnavailableCredentialExam(slug: string): boolean {
  const kind = getCredentialStatus(slug)?.kind
  return kind === 'retired' || kind === 'exam-closed'
}
