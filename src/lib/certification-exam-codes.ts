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
  'sales-cloud': 'CRT-251',
  'service-cloud': 'CRT-261',
  'experience-cloud': 'CRT-271',
  'email-specialist': 'CRT-550',
  'pardot-consultant': 'CRT-302',
  'javascript-developer-i': 'CRT-600',
  'b2c-commerce-developer': 'CRT-500',
  'data-architect': 'ARC-801',
  'technical-architect': 'CTA',
}

export const EXAM_CODE_TITLE_LABELS: Record<string, string> = {
  administrator: 'Platform Administrator',
  'advanced-administrator': 'Advanced Administrator',
  'developer-1': 'Platform Developer I',
  'developer-2': 'Platform Developer II',
  'app-builder': 'Platform App Builder',
  'administrator-practice-test': 'Salesforce Admin',
  'email-specialist-practice-test': 'Email Specialist',
  'sales-cloud': 'Sales Cloud Consultant',
  'service-cloud': 'Agentforce Service Consultant',
  'experience-cloud': 'Experience Cloud Consultant',
  'email-specialist': 'Email Specialist',
  'pardot-consultant': 'Account Engagement Consultant',
  'javascript-developer-i': 'JavaScript Developer',
  'b2c-commerce-developer': 'B2C Commerce Developer',
  'data-architect': 'Data Architect',
  'technical-architect': 'Technical Architect',
}

/** Return a code only when the catalog value is an exam alias, not prose. */
export function getRecognizedExamCode(slug: string): string | undefined {
  const code = SLUG_TO_EXAM_CODE[slug]
  return code && /^(?:[A-Z]{2,5}-\d{1,4}|PD[12]|CTA)$/.test(code) ? code : undefined
}

export function getExamCodeTitleLabel(slug: string): string | undefined {
  return getRecognizedExamCode(slug) ? EXAM_CODE_TITLE_LABELS[slug] : undefined
}
