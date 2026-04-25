/**
 * Current Salesforce release used for certification study materials.
 * Update when a new release is generally available and exam outlines align.
 */

export const RELEASE_CURRENT = "Spring '26"
export const RELEASE_PREVIOUS = "Winter '26"

/** Calendar year of the current release — used in page titles and content. Update alongside RELEASE_CURRENT. */
export const RELEASE_YEAR = '2026'

/** ISO date when content was last refreshed for current release — used for Article dateModified, freshness signals. */
export const RELEASE_DATE = '2026-04-05'

/** ISO date when current salary / YMYL data expires — set to end of release cycle.
 *  Update alongside RELEASE_CURRENT each season so Occupation schema validThrough stays current. */
export const RELEASE_VALID_THROUGH = '2026-06-30'

/** What's new in the current release vs previous — relevant to certification exams and study. */
export const WHATS_NEW_CURRENT_RELEASE: string[] = [
  'Agentforce and AI: Expanded Agentforce capabilities including multi-agent orchestration and enhanced Agent Builder tools—expect updated AI and automation objectives on Admin and Developer exams.',
  'Data Cloud: Expanded real-time data activation and identity resolution features; Data Cloud objectives now include deeper unification and segmentation topics.',
  'Automation & Platform: Enhanced Flow debugging, new Flow orchestration features, and platform performance improvements; Flow remains core to Admin and App Builder exams.',
  'Tableau & Analytics: New Tableau Pulse features for proactive analytics and AI-assisted insights; Tableau certs may reference updated data storytelling objectives.',
  'Security & Access: Updates to identity verification and access management policies; relevant for Administrator, Platform Developer, and Architect tracks.',
]
