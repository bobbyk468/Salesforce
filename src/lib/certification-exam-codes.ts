/**
 * Established exam-code aliases used by site search and page metadata.
 * Practice routes inherit their parent exam's alias; descriptive labels are
 * intentionally excluded.
 */
export const SLUG_TO_EXAM_CODE: Record<string, string> = {
  administrator: 'ADM-201',
  'advanced-administrator': 'ADM-211',
  'developer-1': 'PD1',
  'developer-2': 'PD2',
  'app-builder': 'DEV-402',
  'administrator-practice-test': 'ADM-201',
  'email-specialist-practice-test': 'CRT-550',
  'sales-cloud': 'Sales-Con-201',
  'service-cloud': 'Service-Con-201',
  'experience-cloud': 'CRT-271',
  'email-specialist': 'CRT-550',
  'pardot-consultant': 'CRT-302',
  'javascript-developer-i': 'CRT-600',
  'b2c-commerce-developer': 'CRT-500',
  'data-architect': 'Plat-Arch-201',
  'technical-architect': 'CTA',
  'agentforce-life-sciences-consultant': 'Als-Con-201',
  'marketing-cloud-next-consultant': 'MC-Con-201',
  'tableau-next-consultant': 'Analytics-Con-202',
  'public-sector-solutions-consultant': 'PubSec-Con-201',
  'agentforce-specialist': 'AI-201',
  'platform-foundations': 'Plat-101',
  'slack-administrator': 'Slack-Admn-201',
  'data-360-consultant': 'Data-Con-101',
  'field-service': 'FS-Con-101',
}

/** Earlier codes people still search for (mostly the certification prep course codes). */
export const LEGACY_EXAM_CODES: Record<string, string> = {
  'sales-cloud': 'CRT-251',
  'service-cloud': 'CRT-261',
}

export const EXAM_CODE_TITLE_LABELS: Record<string, string> = {
  administrator: 'Platform Administrator',
  'advanced-administrator': 'Advanced Administrator',
  'developer-1': 'Platform Developer I',
  'developer-2': 'Platform Developer II',
  'app-builder': 'Platform App Builder',
  'administrator-practice-test': 'Salesforce Admin',
  'email-specialist-practice-test': 'Email Specialist',
  'sales-cloud': 'Agentforce Sales Consultant',
  'service-cloud': 'Agentforce Service Consultant',
  'experience-cloud': 'Experience Cloud Consultant',
  'email-specialist': 'Email Specialist',
  'pardot-consultant': 'Account Engagement Consultant',
  'javascript-developer-i': 'JavaScript Developer',
  'b2c-commerce-developer': 'B2C Commerce Developer',
  'data-architect': 'Data Architect',
  'technical-architect': 'Technical Architect',
  'agentforce-life-sciences-consultant': 'Agentforce Life Sciences Consultant',
  'marketing-cloud-next-consultant': 'Marketing Cloud Next Consultant',
  'tableau-next-consultant': 'Tableau Next Consultant',
  'public-sector-solutions-consultant': 'Public Sector Solutions Consultant',
  'agentforce-specialist': 'Agentforce Specialist',
  'platform-foundations': 'Platform Foundations',
}

/** Return a code only when the catalog value is an exam alias, not prose. */
export function getRecognizedExamCode(slug: string): string | undefined {
  const code = SLUG_TO_EXAM_CODE[slug]
  return code && /^(?:[A-Z]{2,5}-\d{1,4}|PD[12]|CTA)$/.test(code) ? code : undefined
}

export function getExamCodeTitleLabel(slug: string): string | undefined {
  return getRecognizedExamCode(slug) ? EXAM_CODE_TITLE_LABELS[slug] : undefined
}
