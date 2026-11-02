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

const CLAUDE_STATUS: CredentialStatusInfo = {
  kind: 'details-unverified',
  label: 'Issuer details not verified',
  message: 'We have not confirmed this credential’s current availability or exam details from a public Anthropic source. Confirm status, format, and fees with Anthropic before relying on them.',
  sourceLabel: 'Anthropic Claude Partner Network announcement',
  sourceUrl: 'https://www.anthropic.com/news/claude-partner-network',
}

const CLAUDE_ARCHITECT_FOUNDATIONS_STATUS: CredentialStatusInfo = {
  kind: 'announced-details-unverified',
  label: 'Announced; exam details not verified',
  message: 'Anthropic announced Claude Certified Architect, Foundations as its first technical certification, available to partners. We have not verified this page’s format, fee, or current access requirements.',
  sourceLabel: 'Anthropic announcement',
  sourceUrl: 'https://www.anthropic.com/news/claude-partner-network',
}

const CREDENTIAL_STATUS: Record<string, CredentialStatusInfo> = {
  'education-cloud-consultant': {
    kind: 'exam-closed',
    label: 'Exam closed; credential retirement scheduled February 1, 2027',
    message: 'Salesforce closed Education Cloud Consultant registration on July 24, 2026 and exam delivery after August 31, 2026. The credential retires February 1, 2027; it is not already retired. These notes preserve the published exam objectives for learning, not new exam bookings.',
    sourceLabel: 'Salesforce Education Cloud Consultant exam and retirement notice',
    sourceUrl: 'https://help.salesforce.com/s/articleView?id=005298934&language=en_US&type=1',
  },
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
