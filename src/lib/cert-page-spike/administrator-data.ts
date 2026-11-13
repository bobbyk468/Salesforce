import type { AdminSpikeBody, SpikeSampleQuestion } from './types'
import administratorSampleQuestionsJson from './administrator-sample-questions.json'

export const ADMINISTRATOR_SLUG = 'administrator' as const

/** Administrator page description includes the current and legacy exam codes. */
export const administratorMetadataDescription =
  'Platform Administrator (Plat-Admn-201 / ADM-201): free practice questions, 2026 weightage incl. Agentforce (8%), cost, passing score, study guide.'

/** ADM-201 section subtopics (compact for smaller HTML). */
export const ADM_201_SECTION_SUBTOPICS: Record<string, string[]> = {
  'Configuration and Setup': ['Company settings', 'UI and accessibility', 'Login policies'],
  'Object Manager and Lightning App Builder': ['Custom objects and fields', 'Page layouts', 'Record types'],
  Automation: ['Record-triggered Flow', 'Screen flows', 'Approval processes'],
  'Data and Analytics Management': ['Reports and report types', 'Dashboards', 'Analytics permissions'],
  'Sales and Marketing Applications': ['Lead and opportunity management', 'Campaigns', 'Products'],
  'Service and Support Applications': ['Cases', 'Case assignment rules', 'Knowledge'],
  'Productivity and Collaboration': ['Chatter', 'Files and content', 'Queues'],
  Agentforce: ['Agent Builder basics', 'Topics and actions', 'Agent vs Flow decisions'],
}

export const administratorSampleQuestions =
  administratorSampleQuestionsJson as SpikeSampleQuestion[]

export const administratorCertPageBody: AdminSpikeBody = {
  template: 'admin',
}
