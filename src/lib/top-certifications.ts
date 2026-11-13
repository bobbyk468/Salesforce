/**
 * The twelve certifications we most want ranking, with the anchor text to
 * use when linking them.
 *
 * Rendered near the top of the homepage and in the global footer, so every
 * page on the site links to them. The anchor text is descriptive and
 * distinct per link rather than a repeated "Practice questions", which is
 * what carries the keyword signal.
 *
 * Every href here is checked by `scripts/validate-top-certifications.mjs`
 * against the built routes, so a rename cannot leave a dead link in the
 * footer of all 307 pages.
 */
export type TopCertLink = { label: string; href: string }

export const TOP_CERTIFICATIONS: TopCertLink[] = [
  { label: 'Salesforce Administrator (ADM-201) Practice Questions', href: '/certifications/administrator' },
  { label: 'Salesforce Platform App Builder Study Guide', href: '/certifications/app-builder' },
  { label: 'Salesforce Platform Developer I (PD1) Practice Test', href: '/certifications/developer-1' },
  { label: 'Salesforce Business Analyst Exam Questions', href: '/certifications/business-analyst' },
  { label: 'Salesforce Agentforce Specialist (AI) Practice Test', href: '/certifications/agentforce-specialist' },
  { label: 'Salesforce Data 360 Consultant Study Guide', href: '/certifications/data-360-consultant' },
  { label: 'Salesforce Agentforce Sales Consultant Practice Questions', href: '/certifications/sales-cloud' },
  { label: 'Salesforce Agentforce Service Consultant Study Guide', href: '/certifications/service-cloud' },
  { label: 'Salesforce Experience Cloud Consultant Practice Test', href: '/certifications/experience-cloud' },
  { label: 'Salesforce Data Architect Study Guide', href: '/certifications/data-architect' },
  { label: 'Salesforce Integration Architect Practice Questions', href: '/certifications/integration-architect' },
  { label: 'Salesforce Marketing Cloud Engagement Foundations', href: '/certifications/marketing-cloud-engagement-foundations' },
]
