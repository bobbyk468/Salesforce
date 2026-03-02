/**
 * Current Salesforce release used for certification study materials.
 * Update when a new release is generally available and exam outlines align.
 */

export const RELEASE_CURRENT = "Winter '26"
export const RELEASE_PREVIOUS = "Summer '25"

/** ISO date when content was last refreshed for current release — used for Article dateModified, freshness signals. */
export const RELEASE_DATE = '2026-02-27'

/** What's new in the current release vs previous — relevant to certification exams and study. */
export const WHATS_NEW_CURRENT_RELEASE: string[] = [
  'Agentforce and AI: New Agentforce for Service (IT Service), Agentic Commerce, and Agentforce Grid for low-code AI workflows—expect more AI-related objectives on Admin and Consultant exams.',
  'Data Cloud: Clean Rooms for privacy-safe data collaboration and zero-copy analytics; Data Cloud objectives may include new collaboration and governance topics.',
  'Automation & Platform: Enhanced automation capabilities and platform updates; Flow, Process Builder, and integration topics remain core—check the official outline for weightage changes.',
  'Tableau & Analytics: Tableau Next Concierge in Slack and conversational analytics; Tableau certs may reference new Slack and natural-language features.',
  'Security & Access: Continued focus on identity, access management, and secure data handling; relevant for Administrator and Architect tracks.',
]
