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
  label: 'Retired February 2, 2026',
  message: 'Salesforce retired the AI Associate certification on February 2, 2026, so the exam can no longer be taken. Holders keep the credential on their Trailblazer Profile, marked Retired, and maintenance is no longer required. This page is retained as a historical learning reference; it is not a current exam guide.',
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
    label: 'Exam closed August 31, 2026; credential retires February 1, 2027',
    message: `Salesforce closed ${name} registration on July 24, 2026, and August 31, 2026 was the last day to take the exam, so it can no longer be booked. The credential officially retires on February 1, 2027. Holders keep it on their Trailblazer Profile, marked Retired, and maintenance is no longer required. These notes preserve the published exam outline for reference, not for new exam bookings.`,
    sourceLabel: 'Salesforce Certification Retirements',
    sourceUrl: 'https://help.salesforce.com/s/articleView?id=005388958&language=en_US&type=1',
  }
}

const CREDENTIAL_STATUS: Record<string, CredentialStatusInfo> = {
  'education-cloud-consultant': {
    kind: 'exam-closed',
    label: 'Exam closed August 31, 2026; credential retires February 1, 2027',
    message: 'Salesforce closed Education Cloud Consultant registration on July 24, 2026, and August 31, 2026 was the last day to take the exam, so it can no longer be booked. The credential officially retires on February 1, 2027. Holders keep it on their Trailblazer Profile, marked Retired, and maintenance is no longer required. Salesforce points candidates to the Platform Administrator and Data 360 Consultant exams for foundational knowledge. These notes preserve the published exam outline for reference, not for new exam bookings.',
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

/** Short status line for certification cards on the homepage and role hubs. */
export const EXAM_CLOSED_CARD_NOTE = 'Exam closed Aug 31, 2026; retires Feb 1, 2027'
export const AI_ASSOCIATE_CARD_NOTE = 'Retired Feb 2, 2026'

export function getCredentialCardNote(slug: string): string | undefined {
  const kind = getCredentialStatus(slug)?.kind
  if (kind === 'exam-closed') return EXAM_CLOSED_CARD_NOTE
  if (kind === 'retired') return AI_ASSOCIATE_CARD_NOTE
  return undefined
}

/**
 * Active credentials on this site that a reader of a retiring page is pointed
 * to. Where Salesforce's retirement notice (005388958) names a successor
 * (CPQ Administrator and CPQ and Billing to Revenue Cloud Consultant, Heroku
 * Developer to Heroku Architect, NPSP to Nonprofit Cloud Consultant, Education
 * Cloud to Platform Administrator and Data 360 Consultant, Media Cloud to
 * Revenue Cloud Consultant) the first link follows it. For the rest Salesforce
 * names no successor, so these are the closest active credentials, and the
 * banner describes them as related rather than as official replacements.
 */
export const RETIREMENT_NEXT_STEPS: Record<string, { href: string; label: string }[]> = {
  'ai-associate': [
    { href: '/certifications/agentforce-specialist', label: 'Agentforce Specialist (AI-201)' },
    { href: '/certifications/platform-foundations', label: 'Platform Foundations (Plat-101)' },
  ],
  'advanced-field-service-ap': [
    { href: '/certifications/field-service', label: 'Agentforce Field Service and Operations Consultant (FS-Con-101)' },
  ],
  'b2b-solution-architect': [
    { href: '/certifications/application-architect', label: 'Application Architect' },
    { href: '/certifications/integration-architect', label: 'Platform Integration Architect (Plat-Arch-204)' },
  ],
  'b2c-commerce-architect': [
    { href: '/certifications/b2c-commerce-developer', label: 'B2C Commerce Developer (Comm-Dev-101)' },
    { href: '/certifications/b2c-solution-architect', label: 'B2C Solution Architect (Arch-302)' },
  ],
  'consumer-goods-tpm-ap': [
    { href: '/certifications/consumer-goods-cloud-ap', label: 'Agentforce Consumer Goods Professional' },
  ],
  'contact-center-ap': [
    { href: '/certifications/service-cloud', label: 'Agentforce Service Consultant (Service-Con-201)' },
  ],
  'cpq-administrator': [
    { href: '/certifications/revenue-cloud-consultant', label: 'Revenue Management Consultant (Rev-Con-201)' },
  ],
  'cpq-billing-ap': [
    { href: '/certifications/revenue-cloud-consultant', label: 'Revenue Management Consultant (Rev-Con-201)' },
  ],
  'industries-cpq-developer': [
    { href: '/certifications/omnistudio-developer', label: 'OmniStudio Developer (Plat-Dev-210)' },
    { href: '/certifications/revenue-cloud-consultant', label: 'Revenue Management Consultant (Rev-Con-201)' },
  ],
  'education-cloud-consultant': [
    { href: '/certifications/administrator', label: 'Platform Administrator (Plat-Admn-201)' },
    { href: '/certifications/data-360-consultant', label: 'Data 360 Consultant (Data-Con-101)' },
  ],
  'energy-utilities-ap': [
    { href: '/certifications/omnistudio-consultant', label: 'OmniStudio Consultant (Plat-Con-201)' },
  ],
  'heroku-developer-ap': [
    { href: '/certifications/heroku-architect', label: 'Heroku Architect (Plat-Arch-206)' },
  ],
  'loyalty-management-ap': [
    { href: '/certifications/marketing-cloud-next-consultant', label: 'Marketing Cloud Next Consultant (MC-Con-201)' },
  ],
  'pardot-consultant': [
    { href: '/certifications/marketing-cloud-next-consultant', label: 'Marketing Cloud Next Consultant (MC-Con-201)' },
    { href: '/certifications/pardot-specialist', label: 'Marketing Cloud Account Engagement Specialist (MC-201)' },
  ],
  'marketing-cloud-advanced-cross-channel-ap': [
    { href: '/certifications/marketing-cloud-next-consultant', label: 'Marketing Cloud Next Consultant (MC-Con-201)' },
    { href: '/certifications/marketing-cloud-consultant', label: 'Marketing Cloud Engagement Consultant (MCE-Con-201)' },
  ],
  'marketing-cloud-intelligence-ap': [
    { href: '/certifications/marketing-cloud-next-consultant', label: 'Marketing Cloud Next Consultant (MC-Con-201)' },
    { href: '/certifications/data-360-consultant', label: 'Data 360 Consultant (Data-Con-101)' },
  ],
  'marketing-cloud-personalization-ap': [
    { href: '/certifications/marketing-cloud-next-consultant', label: 'Marketing Cloud Next Consultant (MC-Con-201)' },
    { href: '/certifications/data-360-consultant', label: 'Data 360 Consultant (Data-Con-101)' },
  ],
  'media-cloud-ap': [
    { href: '/certifications/revenue-cloud-consultant', label: 'Revenue Management Consultant (Rev-Con-201)' },
    { href: '/certifications/communications-cloud-ap', label: 'Agentforce Communications Professional' },
  ],
  'mulesoft-catalyst-consultant': [
    { href: '/certifications/mulesoft-platform-architect', label: 'MuleSoft Platform Architect (Mule-Arch-201)' },
  ],
  'mulesoft-hyperautomation-developer': [
    { href: '/certifications/mulesoft-developer-i', label: 'MuleSoft Developer (Mule-Dev-201)' },
    { href: '/certifications/agentforce-specialist', label: 'Agentforce Specialist (AI-201)' },
  ],
  'net-zero-cloud-ap': [
    { href: '/certifications/data-360-consultant', label: 'Data 360 Consultant (Data-Con-101)' },
  ],
  'order-management-admin-ap': [
    { href: '/certifications/b2b-commerce-admin-ap', label: 'B2B Commerce Administrator Accredited Professional' },
    { href: '/certifications/revenue-cloud-consultant', label: 'Revenue Management Consultant (Rev-Con-201)' },
  ],
  'order-management-developer-ap': [
    { href: '/certifications/b2b-commerce-developer-ap', label: 'B2B Commerce Developer Accredited Professional' },
    { href: '/certifications/b2c-commerce-developer', label: 'B2C Commerce Developer (Comm-Dev-101)' },
  ],
  'process-automation-ap': [
    { href: '/certifications/app-builder', label: 'Platform App Builder (Plat-Admn-202)' },
    { href: '/certifications/advanced-administrator', label: 'Platform Administrator II (Plat-Admn-301)' },
  ],
  'nonprofit-success-pack-consultant': [
    { href: '/certifications/nonprofit-cloud', label: 'Agentforce Nonprofit Consultant (NP-Con-102)' },
  ],
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
