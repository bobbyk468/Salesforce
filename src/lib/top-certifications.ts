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
  { label: 'Salesforce Platform Administrator (Plat-Admn-201 / ADM-201) Practice Questions', href: '/certifications/administrator' },
  { label: 'Platform App Builder (Plat-Admn-202 / DEV-402) Study Guide', href: '/certifications/app-builder' },
  { label: 'Platform Developer I (Plat-Dev-201 / PD1) Practice Test', href: '/certifications/developer-1' },
  { label: 'Salesforce Agentforce Specialist (AI-201) Practice Test', href: '/certifications/agentforce-specialist' },
  { label: 'Salesforce Agentforce Sales Consultant (Sales-Con-201) Practice Questions', href: '/certifications/sales-cloud' },
  { label: 'Salesforce Agentforce Service Consultant (Service-Con-201) Study Guide', href: '/certifications/service-cloud' },
  { label: 'Salesforce Data 360 Consultant (Data-Con-101) Study Guide', href: '/certifications/data-360-consultant' },
  { label: 'Platform Integration Architect (Plat-Arch-204) Practice Questions', href: '/certifications/integration-architect' },
  { label: 'Platform Data Architect (Plat-Arch-201) Study Guide', href: '/certifications/data-architect' },
  { label: 'System Architect Certification', href: '/certifications/system-architect' },
  { label: 'Application Architect Certification', href: '/certifications/application-architect' },
  { label: 'Salesforce Technical Architect (CTA) Guide', href: '/certifications/technical-architect' },
]
