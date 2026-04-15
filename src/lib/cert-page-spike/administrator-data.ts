import type { AdminSpikeBody, SpikeSampleQuestion } from './types'
import { RELEASE_CURRENT } from '@/lib/release-data'
import administratorSampleQuestionsJson from './administrator-sample-questions.json'

export const ADMINISTRATOR_SLUG = 'administrator' as const

/** Matches legacy `administrator/page.tsx` metadata description (uses current release label). */
export const administratorMetadataDescription =
  `Pass Salesforce ADM-201 faster with ${RELEASE_CURRENT} exam weightage, a 4-6 week study plan, and free practice questions with explanations. No sign-up required.`

/** ADM-201 section subtopics (compact for smaller HTML). */
export const ADM_201_SECTION_SUBTOPICS: Record<string, string[]> = {
  'Configuration and Setup': ['Company settings', 'UI and accessibility', 'Login policies'],
  'Object Manager and Lightning App Builder': ['Custom objects and fields', 'Page layouts', 'Record types'],
  'Workflow and Process Automation': ['Record-triggered Flow', 'Process Builder', 'Workflow rules'],
  'Data and Analytics Management': ['Reports and report types', 'Dashboards', 'Analytics permissions'],
  'Sales and Marketing Applications': ['Lead and opportunity management', 'Campaigns', 'Products'],
  'Service and Support Applications': ['Cases', 'Case assignment rules', 'Knowledge'],
  'Productivity and Collaboration': ['Chatter', 'Files and content', 'Queues'],
}

export const administratorSampleQuestions =
  administratorSampleQuestionsJson as SpikeSampleQuestion[]

export const administratorCertPageBody: AdminSpikeBody = {
  template: 'admin',
}
