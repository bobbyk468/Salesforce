/**
 * One registry for how each certification is named in search.
 *
 * The <title>, the <h1>, the one-line lead under the H1 and the
 * EducationalOccupationalCredential JSON-LD (alternateName / identifier) all
 * read from this table, so the bare exam name, the current Trailhead Academy
 * code, the legacy code and the former credential name cannot drift apart
 * between them.
 *
 * `bare`    - the exam name people type, without "Salesforce Certified".
 * `code`    - current exam code.
 * `legacy`  - earlier codes still searched for.
 * `former`  - earlier credential names ("formerly ...").
 * `searchAliases` - name variants for structured data.
 * `title`   - <title>, at most 60 characters, leading with the bare name.
 * `h1`      - page H1: full credential name plus primary codes.
 *
 * Titles are length-checked when this module loads; a title over 60
 * characters fails the build rather than shipping truncated.
 */
export interface CertAlias {
  bare: string
  code?: string
  legacy?: string[]
  former?: string[]
  searchAliases?: string[]
  title?: string
  h1?: string
}

export const MAX_CERT_TITLE_LENGTH = 60

export const CERT_ALIAS_REGISTRY: Record<string, CertAlias> = {
  // Associate and Foundations
  'platform-foundations': {
    bare: 'Platform Foundations',
    code: 'Plat-101',
    former: ['Salesforce Certified Associate'],
    searchAliases: ['Salesforce Platform Foundations', 'Salesforce Certified Platform Foundations', 'Salesforce Associate'],
    title: 'Platform Foundations (Plat-101) Practice & Study Guide',
    h1: 'Salesforce Certified Platform Foundations (Plat-101 / Associate) Study Guide & Practice Questions',
  },
  'ai-associate': {
    bare: 'AI Associate',
    code: 'AI-101',
    searchAliases: ['Salesforce AI Associate', 'Salesforce Certified AI Associate'],
    title: 'Salesforce AI Associate (AI-101) Historical Exam Guide',
    h1: 'Salesforce Certified AI Associate (AI-101): Historical AI Learning Notes & Practice Questions',
  },
  'marketing-cloud-engagement-foundations': {
    bare: 'Marketing Cloud Engagement Foundations',
    code: 'MC-101',
    former: ['Marketing Associate'],
    searchAliases: ['Salesforce Marketing Cloud Engagement Foundations', 'Marketing Cloud Foundations', 'Salesforce Certified Marketing Associate'],
    title: 'Marketing Cloud Engagement Foundations (MC-101) Guide',
    h1: 'Salesforce Certified Marketing Cloud Engagement Foundations (MC-101) Study Guide & Practice Questions',
  },
  'mulesoft-integration-foundations': {
    bare: 'MuleSoft Integration Foundations',
    code: 'Mule-101',
    former: ['MuleSoft Associate'],
    searchAliases: ['Salesforce MuleSoft Integration Foundations', 'Salesforce Certified MuleSoft Associate'],
    title: 'MuleSoft Integration Foundations (Mule-101) Study Guide',
    h1: 'Salesforce Certified MuleSoft Integration Foundations (Mule-101) Study Guide & Practice Questions',
  },

  // Administrator
  administrator: {
    bare: 'Platform Administrator',
    code: 'Plat-Admn-201',
    legacy: ['ADM-201'],
    former: ['Salesforce Certified Administrator'],
    title: 'Salesforce Platform Administrator (ADM-201) Practice & Guide',
    h1: 'Salesforce Certified Platform Administrator (Plat-Admn-201 / ADM-201) Exam Questions & Study Guide',
  },
  'advanced-administrator': {
    bare: 'Platform Administrator II',
    code: 'Plat-Admn-301',
    legacy: ['ADM-211'],
    former: ['Advanced Administrator'],
    searchAliases: ['Salesforce Platform Administrator II', 'Salesforce Certified Platform Administrator II', 'Salesforce Certified Advanced Administrator'],
    title: 'Platform Administrator II (Plat-Admn-301 / ADM-211) Guide',
    h1: 'Salesforce Certified Platform Administrator II (Plat-Admn-301 / ADM-211) Practice & Study Guide',
  },
  'app-builder': {
    bare: 'Platform App Builder',
    code: 'Plat-Admn-202',
    legacy: ['DEV-402'],
    searchAliases: ['Salesforce Platform App Builder', 'Salesforce Certified Platform App Builder', 'App Builder', 'CRT-403'],
    title: 'Platform App Builder (Plat-Admn-202 / DEV-402) Exam Guide',
    h1: 'Salesforce Certified Platform App Builder (Plat-Admn-202 / DEV-402) Study Guide & Practice Questions',
  },
  'agentforce-specialist': {
    bare: 'Agentforce Specialist',
    code: 'AI-201',
    former: ['AI Specialist', 'Agent Force Specialist'],
    title: 'Salesforce Agentforce Specialist (AI-201) Practice & Guide',
    h1: 'Salesforce Certified Agentforce Specialist (AI-201) Study Guide & Practice Questions',
  },
  'business-analyst': {
    bare: 'Business Analyst',
    code: 'BA-201',
    searchAliases: ['Salesforce Business Analyst', 'Salesforce Certified Business Analyst'],
    title: 'Salesforce Business Analyst (BA-201) Practice & Study Guide',
    h1: 'Salesforce Certified Business Analyst (BA-201) Study Guide & Practice Questions',
  },
  'cpq-administrator': {
    bare: 'CPQ Administrator',
    code: 'Sales-Admn-202',
    legacy: ['CPQ-211'],
    former: ['CPQ Specialist'],
    searchAliases: ['Salesforce CPQ Administrator', 'Salesforce Certified CPQ Administrator', 'Salesforce Certified CPQ Specialist'],
    title: 'CPQ Administrator (Sales-Admn-202 / CPQ-211) Study Guide',
    h1: 'Salesforce Certified CPQ Administrator (Sales-Admn-202 / CPQ-211) Historical Guide & Practice Questions',
  },
  'marketing-cloud-engagement-admin': {
    bare: 'Marketing Cloud Engagement Administrator',
    code: 'MCE-Admn-201',
    former: ['Marketing Cloud Administrator'],
    searchAliases: ['Salesforce Marketing Cloud Engagement Administrator', 'Salesforce Certified Marketing Cloud Administrator'],
    title: 'Marketing Cloud Engagement Administrator (MCE-Admn-201)',
    h1: 'Salesforce Certified Marketing Cloud Engagement Administrator (MCE-Admn-201) Study Guide & Practice',
  },
  'slack-administrator': {
    bare: 'Slack Administrator',
    code: 'Slack-Admn-201',
    former: ['Slack Certified Administrator'],
    searchAliases: ['Salesforce Slack Administrator', 'Salesforce Certified Slack Administrator'],
    title: 'Salesforce Slack Administrator (Slack-Admn-201) Exam Guide',
    h1: 'Salesforce Certified Slack Administrator (Slack-Admn-201) Study Guide & Practice Questions',
  },

  // Developer
  'developer-1': {
    bare: 'Platform Developer I',
    code: 'Plat-Dev-201',
    legacy: ['PD1', 'CRT-450'],
    former: ['Platform Developer I'],
    searchAliases: ['Platform Developer 1', 'Salesforce Platform Developer I', 'Salesforce Certified Platform Developer I', 'Salesforce Certified Platform Developer', 'Platform Developer', 'PDI'],
    title: 'Platform Developer I (PD1 / Plat-Dev-201) Practice & Guide',
    h1: 'Salesforce Certified Platform Developer I (Plat-Dev-201 / PD1) Practice Exam & Study Guide',
  },
  'developer-2': {
    bare: 'Platform Developer II',
    code: 'Plat-Dev-301',
    legacy: ['PD2'],
    searchAliases: ['Platform Developer 2', 'Salesforce Platform Developer II', 'Salesforce Certified Platform Developer II', 'PDII'],
    title: 'Platform Developer II (PD2 / Plat-Dev-301) Practice & Guide',
    h1: 'Salesforce Certified Platform Developer II (Plat-Dev-301 / PD2) Practice Exam & Study Guide',
  },
  'javascript-developer-i': {
    bare: 'JavaScript Developer I',
    code: 'JS-Dev-101',
    legacy: ['CRT-600'],
    former: ['JavaScript Developer I'],
    searchAliases: ['JavaScript Developer 1', 'Salesforce JavaScript Developer I', 'Salesforce Certified JavaScript Developer I', 'Salesforce Certified JavaScript Developer', 'JavaScript Developer'],
    title: 'JavaScript Developer I (JS-Dev-101 / CRT-600) Study Guide',
    h1: 'Salesforce Certified JavaScript Developer I (JS-Dev-101 / CRT-600) Practice Exam & Study Guide',
  },
  'b2c-commerce-developer': {
    bare: 'B2C Commerce Developer',
    code: 'Comm-Dev-101',
    legacy: ['CRT-500'],
    former: ['B2C Commerce Cloud Developer'],
    searchAliases: ['Salesforce B2C Commerce Developer', 'Salesforce Certified B2C Commerce Developer', 'CCD-102'],
    title: 'B2C Commerce Developer (CRT-500) Practice & Study Guide',
    h1: 'Salesforce Certified B2C Commerce Developer (Comm-Dev-101 / CRT-500) Practice Exam & Study Guide',
  },
  'industries-cpq-developer': {
    bare: 'Industries CPQ Developer',
    code: 'Ind-Dev-201',
    former: ['Vlocity CPQ Developer'],
    searchAliases: ['Salesforce Industries CPQ Developer', 'Salesforce Certified Industries CPQ Developer'],
    title: 'Industries CPQ Developer (Ind-Dev-201) Practice & Guide',
    h1: 'Salesforce Certified Industries CPQ Developer (Ind-Dev-201) Historical Study Guide (Retiring Feb 2027)',
  },
  'marketing-cloud-engagement-developer': {
    bare: 'Marketing Cloud Engagement Developer',
    code: 'MCE-Dev-201',
    former: ['Marketing Cloud Developer'],
    searchAliases: ['Salesforce Marketing Cloud Engagement Developer', 'Salesforce Certified Marketing Cloud Engagement Developer', 'Salesforce Certified Marketing Cloud Developer'],
    title: 'Marketing Cloud Engagement Developer (MCE-Dev-201) Guide',
    h1: 'Salesforce Certified Marketing Cloud Engagement Developer (MCE-Dev-201) Practice Exam & Study Guide',
  },
  'mulesoft-developer-i': {
    bare: 'MuleSoft Developer I',
    code: 'Mule-Dev-201',
    legacy: ['MCD - Level 1'],
    former: ['MuleSoft Developer I'],
    searchAliases: ['MuleSoft Developer 1', 'Salesforce MuleSoft Developer I', 'Salesforce Certified MuleSoft Developer I', 'Salesforce Certified MuleSoft Developer', 'MuleSoft Developer', 'MuleSoft Certified Developer - Level 1'],
    title: 'MuleSoft Developer I (Mule-Dev-201) Practice & Study Guide',
    h1: 'Salesforce Certified MuleSoft Developer I (Mule-Dev-201) Practice Exam & Study Guide',
  },
  'mulesoft-developer-ii': {
    bare: 'MuleSoft Developer II',
    code: 'Mule-Dev-301',
    legacy: ['MCD - Level 2'],
    searchAliases: ['MuleSoft Developer 2', 'Salesforce MuleSoft Developer II', 'Salesforce Certified MuleSoft Developer II', 'MuleSoft Certified Developer - Level 2'],
    title: 'MuleSoft Developer II (Mule-Dev-301) Practice & Study Guide',
    h1: 'Salesforce Certified MuleSoft Developer II (Mule-Dev-301) Practice Exam & Study Guide',
  },
  'mulesoft-hyperautomation-developer': {
    bare: 'MuleSoft Hyperautomation Developer',
    code: 'Mule-Dev-202',
    searchAliases: ['Salesforce MuleSoft Hyperautomation Developer', 'Salesforce Certified MuleSoft Hyperautomation Developer', 'MuleSoft Certified Hyperautomation Specialist'],
    title: 'MuleSoft Hyperautomation Developer (Mule-Dev-202) Guide',
    h1: 'Salesforce Certified MuleSoft Hyperautomation Developer (Mule-Dev-202) Historical Guide (Retiring Feb 2027)',
  },
  'omnistudio-developer': {
    bare: 'OmniStudio Developer',
    code: 'Plat-Dev-210',
    searchAliases: ['Omnistudio Developer', 'Salesforce OmniStudio Developer', 'Salesforce Certified OmniStudio Developer', 'Salesforce Certified Omnistudio Developer', 'Vlocity Platform Developer'],
    title: 'OmniStudio Developer (Plat-Dev-210) Practice & Study Guide',
    h1: 'Salesforce Certified OmniStudio Developer (Plat-Dev-210) Practice Exam & Study Guide',
  },
  'slack-developer': {
    bare: 'Slack Developer',
    code: 'Slack-Dev-201',
    former: ['Slack Certified Developer'],
    searchAliases: ['Salesforce Slack Developer', 'Salesforce Certified Slack Developer'],
    title: 'Slack Certified Developer (Slack-Dev-201) Practice & Guide',
    h1: 'Salesforce Certified Slack Developer (Slack-Dev-201) Practice Exam & Study Guide',
  },

  // Consultant and Marketing
  'sales-cloud': {
    bare: 'Agentforce Sales Consultant',
    code: 'Sales-Con-201',
    legacy: ['CRT-251'],
    former: ['Sales Cloud Consultant'],
    searchAliases: ['Salesforce Agentforce Sales Consultant', 'Salesforce Certified Agentforce Sales Consultant', 'Salesforce Sales Cloud Consultant', 'Salesforce Certified Sales Cloud Consultant'],
    title: 'Agentforce Sales Consultant (Sales-Con-201 / CRT-251) Guide',
    h1: 'Salesforce Certified Agentforce Sales Consultant (Sales-Con-201 / CRT-251) Study Guide & Practice',
  },
  'service-cloud': {
    bare: 'Agentforce Service Consultant',
    code: 'Service-Con-201',
    legacy: ['CRT-261'],
    former: ['Service Cloud Consultant'],
    searchAliases: ['Salesforce Agentforce Service Consultant', 'Salesforce Certified Agentforce Service Consultant', 'Salesforce Service Cloud Consultant', 'Salesforce Certified Service Cloud Consultant'],
    title: 'Agentforce Service Consultant (Service-Con-201) Exam Guide',
    h1: 'Salesforce Certified Agentforce Service Consultant (Service-Con-201 / CRT-261) Study Guide & Practice',
  },
  'slack-consultant': {
    bare: 'Slack Consultant',
    code: 'Slack-Con-201',
    former: ['Slack Certified Consultant'],
    searchAliases: ['Salesforce Slack Consultant', 'Salesforce Certified Slack Consultant'],
    title: 'Salesforce Slack Consultant (Slack-Con-201) Practice & Guide',
    h1: 'Salesforce Certified Slack Consultant (Slack Certified Consultant) Study Guide & Practice Questions',
  },
  'crm-analytics-einstein-discovery-consultant': {
    bare: 'CRM Analytics and Einstein Discovery Consultant',
    code: 'CRMA-Con-201',
    former: ['Tableau CRM and Einstein Discovery Consultant', 'Einstein Analytics and Discovery Consultant'],
    searchAliases: ['Salesforce CRM Analytics and Einstein Discovery Consultant', 'Salesforce Certified CRM Analytics and Einstein Discovery Consultant', 'CRM Analytics Consultant'],
    title: 'CRM Analytics & Einstein Discovery Consultant Practice Guide',
    h1: 'Salesforce Certified CRM Analytics and Einstein Discovery Consultant Study Guide & Practice Questions',
  },
  'data-360-consultant': {
    bare: 'Data 360 Consultant',
    code: 'Data-Con-101',
    former: ['Data Cloud Consultant'],
    searchAliases: ['Salesforce Data 360 Consultant', 'Salesforce Certified Data 360 Consultant', 'Salesforce Data Cloud Consultant', 'Salesforce Certified Data Cloud Consultant'],
    title: 'Data 360 Consultant (Data-Con-101 / Data Cloud) Exam Guide',
    h1: 'Salesforce Certified Data 360 Consultant (Data-Con-101 / Data Cloud) Study Guide & Practice Questions',
  },
  'education-cloud-consultant': {
    bare: 'Education Cloud Consultant',
    code: 'Edu-Con-201',
    searchAliases: ['Salesforce Education Cloud Consultant', 'Salesforce Certified Education Cloud Consultant'],
    title: 'Education Cloud Consultant Historical Exam Guide & Notes',
    h1: 'Salesforce Certified Education Cloud Consultant: Archived Exam Notes & Practice Questions (Retiring Feb 2027)',
  },
  'field-service': {
    bare: 'Agentforce Field Service and Operations Consultant',
    code: 'FS-Con-101',
    former: ['Field Service Consultant'],
    searchAliases: ['Salesforce Agentforce Field Service and Operations Consultant', 'Salesforce Certified Agentforce Field Service and Operations Consultant', 'Salesforce Certified Field Service Consultant', 'Field Service Lightning Consultant', 'FSL'],
    title: 'Agentforce Field Service Consultant (FS-Con-101) Exam Guide',
    h1: 'Salesforce Certified Agentforce Field Service and Operations Consultant (FS-Con-101) Study Guide',
  },
  'experience-cloud': {
    bare: 'Experience Cloud Consultant',
    code: 'CRT-271',
    former: ['Community Cloud Consultant'],
    searchAliases: ['Salesforce Experience Cloud Consultant', 'Salesforce Certified Experience Cloud Consultant', 'Salesforce Certified Community Cloud Consultant'],
    title: 'Salesforce Experience Cloud Consultant (CRT-271) Exam Guide',
    h1: 'Salesforce Certified Experience Cloud Consultant (CRT-271) Study Guide & Practice Questions',
  },
  'agentforce-life-sciences-consultant': {
    bare: 'Agentforce Life Sciences Consultant',
    code: 'Als-Con-201',
    searchAliases: ['Salesforce Agentforce Life Sciences Consultant', 'Salesforce Certified Agentforce Life Sciences Consultant', 'Life Sciences Cloud Consultant'],
    title: 'Agentforce Life Sciences Consultant (Als-Con-201) Exam Guide',
    h1: 'Salesforce Certified Agentforce Life Sciences Consultant (Als-Con-201) Study Guide & Practice',
  },
  'omnistudio-consultant': {
    bare: 'OmniStudio Consultant',
    code: 'Plat-Con-201',
    former: ['Vlocity Consultant'],
    searchAliases: ['Omnistudio Consultant', 'Salesforce OmniStudio Consultant', 'Salesforce Certified OmniStudio Consultant', 'Salesforce Certified Omnistudio Consultant'],
    title: 'Salesforce OmniStudio Consultant (Plat-Con-201) Study Guide',
    h1: 'Salesforce Certified OmniStudio Consultant (Plat-Con-201) Study Guide & Practice Questions',
  },
  'pardot-consultant': {
    bare: 'Marketing Cloud Account Engagement Consultant',
    code: 'CRT-302',
    legacy: ['MCAE-Con-201'],
    former: ['Pardot Consultant'],
    searchAliases: ['Salesforce Marketing Cloud Account Engagement Consultant', 'Salesforce Certified Marketing Cloud Account Engagement Consultant', 'Salesforce Certified Pardot Consultant'],
    title: 'Account Engagement Consultant (CRT-302) Practice & Guide',
    h1: 'Salesforce Certified Marketing Cloud Account Engagement Consultant (CRT-302 / Pardot) Historical Guide',
  },
  'marketing-cloud-consultant': {
    bare: 'Marketing Cloud Engagement Consultant',
    code: 'MCE-Con-201',
    former: ['Marketing Cloud Consultant'],
    searchAliases: ['Salesforce Marketing Cloud Engagement Consultant', 'Salesforce Certified Marketing Cloud Engagement Consultant', 'Salesforce Certified Marketing Cloud Consultant'],
    title: 'Marketing Cloud Engagement Consultant (MCE-Con-201) Guide',
    h1: 'Salesforce Certified Marketing Cloud Engagement Consultant (MCE-Con-201) Practice & Study Guide',
  },
  'nonprofit-cloud': {
    bare: 'Agentforce Nonprofit Consultant',
    code: 'NP-Con-102',
    former: ['Nonprofit Cloud Consultant'],
    searchAliases: ['Salesforce Agentforce Nonprofit Consultant', 'Salesforce Certified Agentforce Nonprofit Consultant', 'Salesforce Certified Nonprofit Cloud Consultant', 'NPC'],
    title: 'Agentforce Nonprofit Consultant (NP-Con-102) Study Guide',
    h1: 'Salesforce Certified Agentforce Nonprofit Consultant (NP-Con-102 / Nonprofit Cloud) Practice & Guide',
  },
  'nonprofit-success-pack-consultant': {
    bare: 'Nonprofit Success Pack (NPSP) Consultant',
    code: 'NP-Con-101',
    searchAliases: ['Nonprofit Success Pack Consultant', 'NPSP Consultant', 'Salesforce Certified Nonprofit Success Pack (NPSP) Consultant'],
    title: 'Nonprofit Success Pack (NPSP) Consultant Practice & Guide',
    h1: 'Salesforce Certified Nonprofit Success Pack (NPSP) Consultant (NP-Con-101) Historical Study Guide',
  },
  'public-sector-solutions-consultant': {
    bare: 'Public Sector Solutions Consultant',
    code: 'PubSec-Con-201',
    searchAliases: ['Salesforce Public Sector Solutions Consultant', 'Salesforce Certified Public Sector Solutions Consultant'],
    title: 'Public Sector Solutions Consultant (PubSec-Con-201) Guide',
    h1: 'Salesforce Certified Public Sector Solutions Consultant (PubSec-Con-201) Study Guide & Practice',
  },
  'revenue-cloud-consultant': {
    bare: 'Revenue Management Consultant',
    code: 'Rev-Con-201',
    former: ['Revenue Cloud Consultant', 'Agentforce Revenue Management Consultant'],
    searchAliases: ['Salesforce Revenue Management Consultant', 'Salesforce Certified Revenue Management Consultant', 'Salesforce Certified Agentforce Revenue Management Consultant', 'Salesforce Certified Revenue Cloud Consultant'],
    title: 'Revenue Management Consultant (Rev-Con-201) Practice & Guide',
    h1: 'Salesforce Certified Revenue Management Consultant (Rev-Con-201 / Revenue Cloud) Practice & Guide',
  },
  'email-specialist': {
    bare: 'Marketing Cloud Engagement Specialist',
    code: 'MC-202',
    legacy: ['CRT-550'],
    former: ['Marketing Cloud Email Specialist'],
    searchAliases: ['Salesforce Marketing Cloud Engagement Specialist', 'Salesforce Certified Marketing Cloud Engagement Specialist', 'Salesforce Certified Marketing Cloud Email Specialist', 'Email Specialist'],
    title: 'Marketing Cloud Engagement Specialist (CRT-550) Study Guide',
    h1: 'Salesforce Certified Marketing Cloud Engagement Specialist (MC-202 / CRT-550 / Email Specialist) Guide',
  },
  'marketing-cloud-next-consultant': {
    bare: 'Marketing Cloud Next Consultant',
    code: 'MC-Con-201',
    searchAliases: ['Salesforce Marketing Cloud Next Consultant', 'Salesforce Certified Marketing Cloud Next Consultant', 'Marketing Cloud Growth and Advanced Consultant'],
    title: 'Marketing Cloud Next Consultant (MC-Con-201) Study Guide',
    h1: 'Salesforce Certified Marketing Cloud Next Consultant (MC-Con-201) Practice Questions & Study Guide',
  },
  'pardot-specialist': {
    bare: 'Marketing Cloud Account Engagement Specialist',
    code: 'MC-201',
    former: ['Pardot Specialist'],
    searchAliases: ['Salesforce Marketing Cloud Account Engagement Specialist', 'Salesforce Certified Marketing Cloud Account Engagement Specialist', 'Salesforce Certified Pardot Specialist', 'Account Engagement Specialist'],
    title: 'Marketing Cloud Account Engagement Specialist (MC-201) Guide',
    h1: 'Salesforce Certified Marketing Cloud Account Engagement Specialist (MC-201 / Pardot Specialist) Guide',
  },

  // Sales and Designer
  'sales-foundations': {
    bare: 'Agentforce Sales Foundations',
    code: 'Sales-101',
    former: ['Sales Foundations', 'Sales Representative'],
    searchAliases: ['Salesforce Agentforce Sales Foundations', 'Salesforce Certified Agentforce Sales Foundations', 'Salesforce Certified Sales Foundations', 'Salesforce Certified Sales Representative'],
    title: 'Agentforce Sales Foundations (Sales-101) Practice & Guide',
    h1: 'Salesforce Certified Agentforce Sales Foundations (Sales-101) Study Guide & Practice Questions',
  },
  'strategy-designer': {
    bare: 'Platform Strategy Designer',
    code: 'Plat-UX-102',
    former: ['Strategy Designer'],
    searchAliases: ['Salesforce Platform Strategy Designer', 'Salesforce Certified Platform Strategy Designer', 'Salesforce Certified Strategy Designer'],
    title: 'Platform Strategy Designer (Plat-UX-102) Practice & Guide',
    h1: 'Salesforce Certified Platform Strategy Designer (Plat-UX-102) Study Guide & Practice Questions',
  },
  'ux-designer': {
    bare: 'Platform User Experience Designer',
    code: 'Plat-UX-101',
    former: ['User Experience (UX) Designer'],
    searchAliases: ['Salesforce Platform User Experience Designer', 'Salesforce Certified Platform User Experience Designer', 'User Experience Designer', 'UX Designer', 'Salesforce Certified User Experience (UX) Designer'],
    title: 'Platform User Experience Designer (Plat-UX-101) Study Guide',
    h1: 'Salesforce Certified Platform User Experience Designer (Plat-UX-101 / UX Designer) Practice & Guide',
  },

  // Architect
  'application-architect': {
    bare: 'Application Architect',
    searchAliases: ['Salesforce Application Architect', 'Salesforce Certified Application Architect'],
    title: 'Application Architect Path, Requirements & Guide (2026)',
    h1: 'Salesforce Certified Application Architect Credential Path & Domain Readiness Guide',
  },
  'data-architect': {
    bare: 'Platform Data Architect',
    code: 'Plat-Arch-201',
    former: ['Data Architect'],
    searchAliases: ['Salesforce Platform Data Architect', 'Salesforce Certified Platform Data Architect', 'Salesforce Data Architect', 'Salesforce Certified Data Architect', 'Data Architecture and Management Designer'],
    title: 'Platform Data Architect (Plat-Arch-201) Practice & Guide',
    h1: 'Salesforce Certified Platform Data Architect (Plat-Arch-201) Practice Questions & Study Guide',
  },
  'integration-architect': {
    bare: 'Platform Integration Architect',
    code: 'Plat-Arch-204',
    former: ['Integration Architect'],
    searchAliases: ['Salesforce Platform Integration Architect', 'Salesforce Certified Platform Integration Architect', 'Salesforce Integration Architect', 'Salesforce Certified Integration Architect', 'Integration Architecture Designer'],
    title: 'Platform Integration Architect (Plat-Arch-204) Exam Guide',
    h1: 'Salesforce Certified Platform Integration Architect (Plat-Arch-204) Practice & Study Guide',
  },
  'sharing-visibility-architect': {
    bare: 'Platform Sharing and Visibility Architect',
    code: 'Plat-Arch-205',
    former: ['Sharing and Visibility Architect'],
    searchAliases: ['Salesforce Platform Sharing and Visibility Architect', 'Salesforce Certified Platform Sharing and Visibility Architect', 'Salesforce Certified Sharing and Visibility Architect', 'Sharing and Visibility Designer'],
    title: 'Platform Sharing & Visibility Architect (Plat-Arch-205)',
    h1: 'Salesforce Certified Platform Sharing and Visibility Architect (Plat-Arch-205) Study Guide',
  },
  'system-architect': {
    bare: 'System Architect',
    searchAliases: ['Salesforce System Architect', 'Salesforce Certified System Architect'],
    title: 'System Architect Path, Component Exams & Guide (2026)',
    h1: 'Salesforce Certified System Architect Credential Path & Domain Readiness Guide',
  },
  'identity-access-management-architect': {
    bare: 'Platform Identity and Access Management Architect',
    code: 'Plat-Arch-203',
    former: ['Identity and Access Management Architect'],
    searchAliases: ['Salesforce Platform Identity and Access Management Architect', 'Salesforce Certified Platform Identity and Access Management Architect', 'Salesforce Certified Identity and Access Management Architect', 'Identity and Access Management Designer'],
    title: 'Platform Identity & Access Architect (Plat-Arch-203) Guide',
    h1: 'Salesforce Certified Platform Identity and Access Management Architect (Plat-Arch-203) Guide',
  },
  'dev-lifecycle-deployment-architect': {
    bare: 'Platform Development Lifecycle and Deployment Architect',
    code: 'Plat-Arch-202',
    former: ['Development Lifecycle and Deployment Architect'],
    searchAliases: ['Salesforce Platform Development Lifecycle and Deployment Architect', 'Salesforce Certified Platform Development Lifecycle and Deployment Architect', 'Salesforce Certified Development Lifecycle and Deployment Architect', 'Development Lifecycle and Deployment Designer'],
    title: 'Platform Dev Lifecycle & Deployment Architect Guide (2026)',
    h1: 'Salesforce Certified Platform Development Lifecycle and Deployment Architect (Plat-Arch-202) Guide',
  },
  'technical-architect': {
    bare: 'Technical Architect',
    code: 'CTA',
    searchAliases: ['Certified Technical Architect', 'Salesforce Technical Architect', 'Salesforce Certified Technical Architect'],
    title: 'Technical Architect (CTA) Board Review & Study Guide (2026)',
    h1: 'Salesforce Certified Technical Architect (CTA) Path, Evaluation & Review Board Guide',
  },
  'technical-architect-evaluation': {
    bare: 'Technical Architect - Architect Evaluation',
    searchAliases: ['Salesforce Certified Technical Architect - Architect Evaluation', 'CTA Architect Evaluation', 'CTA Evaluation Exam'],
    title: 'Technical Architect - Architect Evaluation Guide (2026)',
    h1: 'Salesforce Certified Technical Architect - Architect Evaluation (CTA Step 1) Study Guide',
  },
  'technical-architect-review-board': {
    bare: 'Technical Architect - Architect Review Board',
    searchAliases: ['Salesforce Certified Technical Architect - Architect Review Board', 'CTA Review Board', 'CTA Board Exam'],
    title: 'Technical Architect - Architect Review Board Guide (2026)',
    h1: 'Salesforce Certified Technical Architect - Architect Review Board (CTA Step 2) Prep Guide',
  },
  'b2b-solution-architect': {
    bare: 'B2B Solution Architect',
    code: 'Arch-301',
    searchAliases: ['Salesforce B2B Solution Architect', 'Salesforce Certified B2B Solution Architect'],
    title: 'B2B Solution Architect (Retiring Feb 2027) Archive Guide',
    h1: 'Salesforce Certified B2B Solution Architect (Retiring Feb 1, 2027) Archived Study Guide',
  },
  'b2c-commerce-architect': {
    bare: 'B2C Commerce Architect',
    code: 'Arch-303',
    searchAliases: ['Salesforce B2C Commerce Architect', 'Salesforce Certified B2C Commerce Architect'],
    title: 'B2C Commerce Architect (Arch-303) Archive & SFRA Guide',
    h1: 'Salesforce Certified B2C Commerce Architect (Arch-303 – Retiring Feb 1, 2027) Archived Guide',
  },
  'b2c-solution-architect': {
    bare: 'B2C Solution Architect',
    code: 'Arch-302',
    searchAliases: ['Salesforce B2C Solution Architect', 'Salesforce Certified B2C Solution Architect'],
    title: 'B2C Solution Architect (Arch-302) Practice & Study Guide',
    h1: 'Salesforce Certified B2C Solution Architect (Arch-302) Practice Questions & Study Guide',
  },
  'heroku-architect': {
    bare: 'Heroku Architect',
    code: 'Plat-Arch-206',
    searchAliases: ['Salesforce Heroku Architect', 'Salesforce Certified Heroku Architect', 'Heroku Architecture Designer'],
    title: 'Heroku Architect (Plat-Arch-206) Practice & Study Guide',
    h1: 'Salesforce Certified Heroku Architect (Plat-Arch-206) Practice Questions & Study Guide',
  },
  'mulesoft-catalyst-consultant': {
    bare: 'MuleSoft Catalyst Consultant',
    code: 'Mule-Con-201',
    searchAliases: ['Salesforce MuleSoft Catalyst Consultant', 'Salesforce Certified MuleSoft Catalyst Consultant'],
    title: 'MuleSoft Catalyst Consultant (Mule-Con-201) Archive Guide',
    h1: 'Salesforce Certified MuleSoft Catalyst Consultant (Mule-Con-201 – Retiring Feb 1, 2027) Notes',
  },
  'mulesoft-platform-architect': {
    bare: 'MuleSoft Platform Architect',
    code: 'Mule-Arch-201',
    legacy: ['MCPA'],
    searchAliases: ['Salesforce MuleSoft Platform Architect', 'Salesforce Certified MuleSoft Platform Architect', 'MuleSoft Certified Platform Architect - Level 1', 'MCPA - Level 1'],
    title: 'MuleSoft Platform Architect (Mule-Arch-201) Practice & Guide',
    h1: 'Salesforce Certified MuleSoft Platform Architect (Mule-Arch-201) Practice & Study Guide',
  },
  'mulesoft-integration-architect': {
    bare: 'MuleSoft Platform Integration Architect',
    code: 'Mule-Arch-202',
    legacy: ['MCIA'],
    former: ['MuleSoft Integration Architect'],
    searchAliases: ['Salesforce MuleSoft Platform Integration Architect', 'Salesforce Certified MuleSoft Platform Integration Architect', 'MuleSoft Certified Integration Architect - Level 1', 'MCIA - Level 1'],
    title: 'MuleSoft Platform Integration Architect Practice & Guide',
    h1: 'Salesforce Certified MuleSoft Platform Integration Architect (Mule-Arch-202) Study Guide',
  },

  // Tableau
  'tableau-architect': {
    bare: 'Tableau Architect',
    code: 'Analytics-Arch-201',
    former: ['Tableau Certified Architect'],
    searchAliases: ['Salesforce Certified Tableau Architect'],
    title: 'Tableau Architect (Analytics-Arch-201) Practice & Guide',
    h1: 'Salesforce Certified Tableau Architect (Analytics-Arch-201) Practice Questions & Study Guide',
  },
  'tableau-consultant': {
    bare: 'Tableau Consultant',
    code: 'Analytics-Con-201',
    former: ['Tableau Certified Consultant'],
    searchAliases: ['Salesforce Certified Tableau Consultant'],
    title: 'Tableau Certified Consultant Practice & Study Guide (2026)',
    h1: 'Tableau Certified Consultant (Analytics-Con-201) Practice Questions & Study Guide',
  },
  'tableau-next-consultant': {
    bare: 'Tableau Next Consultant',
    code: 'Analytics-Con-202',
    searchAliases: ['Salesforce Tableau Next Consultant', 'Salesforce Certified Tableau Next Consultant'],
    title: 'Tableau Next Consultant (Analytics-Con-202) Practice & Guide',
    h1: 'Salesforce Certified Tableau Next Consultant (Analytics-Con-202) Study Guide & Practice',
  },
  'tableau-data-analyst': {
    bare: 'Tableau Data Analyst',
    code: 'Analytics-DA-201',
    former: ['Tableau Certified Data Analyst'],
    searchAliases: ['Salesforce Certified Tableau Data Analyst'],
    title: 'Tableau Data Analyst (Analytics-DA-201) Practice & Guide',
    h1: 'Tableau Certified Data Analyst (Analytics-DA-201) Practice Questions & Study Guide',
  },
  'tableau-desktop-foundations': {
    bare: 'Tableau Desktop Foundations',
    code: 'Analytics-101',
    former: ['Tableau Desktop Specialist'],
    searchAliases: ['Salesforce Certified Tableau Desktop Foundations'],
    title: 'Tableau Desktop Foundations (Analytics-101) Practice & Guide',
    h1: 'Tableau Desktop Foundations (Analytics-101) Practice Questions & Study Guide',
  },
  'tableau-server-administrator': {
    bare: 'Tableau Server Administrator',
    code: 'Analytics-SA-201',
    former: ['Tableau Server Certified Associate'],
    searchAliases: ['Salesforce Certified Tableau Server Administrator'],
    title: 'Tableau Server Administrator Practice & Study Guide (2026)',
    h1: 'Tableau Server Administrator (Analytics-SA-201) Practice Questions & Study Guide',
  },

  // Claude (Anthropic). No exam codes are listed: see credential-status.ts.
  'claude-certified-associate': {
    bare: 'Claude Certified Associate – Foundations',
    title: 'Claude Certified Associate – Foundations Practice & Notes',
    h1: 'Claude Certified Associate – Foundations: Learning Topics & Practice Questions',
  },
  'claude-certified-developer': {
    bare: 'Claude Certified Developer – Foundations',
    title: 'Claude Certified Developer – Foundations Practice & Notes',
    h1: 'Claude Certified Developer – Foundations: Learning Topics & Practice Questions',
  },
  'claude-certified-architect-foundations': {
    bare: 'Claude Certified Architect – Foundations',
    title: 'Claude Certified Architect – Foundations Practice & Notes',
    h1: 'Claude Certified Architect – Foundations: Learning Topics & Practice Questions',
  },
  'claude-certified-architect-professional': {
    bare: 'Claude Certified Architect – Professional',
    title: 'Claude Certified Architect – Professional Practice & Notes',
    h1: 'Claude Certified Architect – Professional: Learning Topics & Practice Questions',
  },

  // Active Accredited Professional
  'b2b-commerce-admin-ap': {
    bare: 'B2B Commerce Administrator Accredited Professional',
    former: ['B2B Commerce Admin Accredited Professional'],
    searchAliases: ['Salesforce Accredited B2B Commerce Administrator Professional', 'B2B Commerce for Administrators Accredited Professional', 'B2B Commerce Admin AP'],
    title: 'Salesforce Accredited B2B Commerce Administrator AP Guide',
    h1: 'Salesforce Accredited B2B Commerce Administrator Professional Exam Guide & Practice',
  },
  'b2b-commerce-developer-ap': {
    bare: 'B2B Commerce Developer Accredited Professional',
    searchAliases: ['Salesforce Accredited B2B Commerce Developer Professional', 'B2B Commerce for Developers Accredited Professional', 'B2B Commerce Developer AP'],
    title: 'Salesforce Accredited B2B Commerce Developer AP Guide',
    h1: 'Salesforce Accredited B2B Commerce Developer Professional Exam Guide & Practice',
  },
  'communications-cloud-ap': {
    bare: 'Agentforce Communications Professional',
    former: ['Communications Cloud Accredited Professional'],
    searchAliases: ['Salesforce Accredited Agentforce Communications Professional', 'Agentforce Communications Accredited Professional', 'Communications Cloud AP'],
    title: 'Salesforce Accredited Agentforce Communications AP Guide',
    h1: 'Salesforce Accredited Agentforce Communications Professional (Communications Cloud AP) Guide',
  },
  'consumer-goods-cloud-ap': {
    bare: 'Agentforce Consumer Goods Professional',
    former: ['Consumer Goods Cloud Accredited Professional'],
    searchAliases: ['Salesforce Accredited Agentforce Consumer Goods Professional', 'Agentforce Consumer Goods Accredited Professional', 'Consumer Goods Cloud AP'],
    title: 'Salesforce Accredited Agentforce Consumer Goods AP Guide',
    h1: 'Salesforce Accredited Agentforce Consumer Goods Professional (Consumer Goods Cloud AP) Guide',
  },
  'financial-services-cloud-ap': {
    bare: 'Agentforce Financial Services Professional',
    former: ['Financial Services Cloud Accredited Professional'],
    searchAliases: ['Salesforce Accredited Agentforce Financial Services Professional', 'Agentforce Financial Services Accredited Professional', 'Financial Services Cloud AP', 'FSC AP'],
    title: 'Salesforce Accredited Agentforce Financial Services AP Guide',
    h1: 'Salesforce Accredited Agentforce Financial Services Professional (FSC AP) Study Guide',
  },
  'health-cloud-ap': {
    bare: 'Agentforce Health Professional',
    former: ['Health Cloud Accredited Professional'],
    searchAliases: ['Salesforce Accredited Agentforce Health Professional', 'Agentforce Health Accredited Professional', 'Health Cloud AP'],
    title: 'Salesforce Accredited Agentforce Health AP Study Guide',
    h1: 'Salesforce Accredited Agentforce Health Professional (Health Cloud AP) Study Guide',
  },
  'manufacturing-cloud-ap': {
    bare: 'Agentforce Manufacturing Professional',
    former: ['Manufacturing Cloud Accredited Professional'],
    searchAliases: ['Salesforce Accredited Agentforce Manufacturing Professional', 'Agentforce Manufacturing Accredited Professional', 'Manufacturing Cloud AP'],
    title: 'Salesforce Accredited Agentforce Manufacturing AP Guide',
    h1: 'Salesforce Accredited Agentforce Manufacturing Professional (Manufacturing Cloud AP) Guide',
  },
  'public-sector-solutions-ap': {
    bare: 'Agentforce 360 for Public Sector Professional',
    former: ['Public Sector Solutions Accredited Professional'],
    searchAliases: ['Salesforce Accredited Agentforce 360 for Public Sector Professional', 'Agentforce Public Sector Accredited Professional', 'Public Sector Solutions AP', 'AP-222'],
    title: 'Salesforce Accredited Agentforce 360 Public Sector AP Guide',
    h1: 'Salesforce Accredited Agentforce 360 for Public Sector Professional (Public Sector AP) Guide',
  },

  // Retiring Accredited Professional (exams closed August 31, 2026)
  'advanced-field-service-ap': {
    bare: 'Advanced Field Service Accredited Professional',
    title: 'Advanced Field Service Accredited Professional Guide',
    h1: 'Advanced Field Service Accredited Professional Study Guide & Practice Questions (Retiring Feb 2027)',
  },
  'consumer-goods-tpm-ap': {
    bare: 'Consumer Goods Cloud: Trade Promotion Management Accredited Professional',
    title: 'Consumer Goods Cloud TPM Accredited Professional Guide',
    h1: 'Consumer Goods Cloud: Trade Promotion Management Accredited Professional Guide (Retiring Feb 2027)',
  },
  'contact-center-ap': {
    bare: 'Contact Center Accredited Professional',
    title: 'Contact Center Accredited Professional Study Guide',
    h1: 'Contact Center Accredited Professional Study Guide & Practice Questions (Retiring Feb 2027)',
  },
  'cpq-billing-ap': {
    bare: 'CPQ and Billing Consultant Accredited Professional',
    title: 'CPQ and Billing Consultant Accredited Professional Guide',
    h1: 'CPQ and Billing Consultant Accredited Professional Study Guide & Practice Questions (Retiring Feb 2027)',
  },
  'energy-utilities-ap': {
    bare: 'Energy and Utilities Cloud Accredited Professional',
    title: 'Energy and Utilities Cloud Accredited Professional Guide',
    h1: 'Energy and Utilities Cloud Accredited Professional Study Guide & Practice Questions (Retiring Feb 2027)',
  },
  'heroku-developer-ap': {
    bare: 'Heroku Developer Accredited Professional',
    title: 'Heroku Developer Accredited Professional Study Guide',
    h1: 'Heroku Developer Accredited Professional Study Guide & Practice Questions (Retiring Feb 2027)',
  },
  'loyalty-management-ap': {
    bare: 'Loyalty Management Accredited Professional',
    title: 'Loyalty Management Accredited Professional Study Guide',
    h1: 'Loyalty Management Accredited Professional Study Guide & Practice Questions (Retiring Feb 2027)',
  },
  'marketing-cloud-advanced-cross-channel-ap': {
    bare: 'Marketing Cloud Advanced Cross Channel Accredited Professional',
    title: 'Marketing Cloud Advanced Cross Channel AP Study Guide',
    h1: 'Marketing Cloud Advanced Cross Channel Accredited Professional Study Guide (Retiring Feb 2027)',
  },
  'marketing-cloud-intelligence-ap': {
    bare: 'Marketing Cloud Intelligence Accredited Professional',
    title: 'Marketing Cloud Intelligence Accredited Professional',
    h1: 'Marketing Cloud Intelligence Accredited Professional Study Guide & Practice Questions (Retiring Feb 2027)',
  },
  'marketing-cloud-personalization-ap': {
    bare: 'Marketing Cloud Personalization Accredited Professional',
    title: 'Marketing Cloud Personalization Accredited Professional',
    h1: 'Marketing Cloud Personalization Accredited Professional Study Guide & Practice Questions (Retiring Feb 2027)',
  },
  'media-cloud-ap': {
    bare: 'Media Cloud Accredited Professional',
    title: 'Media Cloud Accredited Professional Guide & Practice',
    h1: 'Media Cloud Accredited Professional Study Guide & Practice Questions (Retiring Feb 2027)',
  },
  'net-zero-cloud-ap': {
    bare: 'Net Zero Cloud Accredited Professional',
    title: 'Net Zero Cloud Accredited Professional Study Guide',
    h1: 'Net Zero Cloud Accredited Professional Study Guide & Practice Questions (Retiring Feb 2027)',
  },
  'order-management-admin-ap': {
    bare: 'Order Management Administrator Accredited Professional',
    title: 'Order Management Administrator Accredited Professional',
    h1: 'Order Management Administrator Accredited Professional Study Guide (Retiring Feb 2027)',
  },
  'order-management-developer-ap': {
    bare: 'Order Management Developer Accredited Professional',
    title: 'Order Management Developer Accredited Professional',
    h1: 'Order Management Developer Accredited Professional Study Guide & Practice Questions (Retiring Feb 2027)',
  },
  'process-automation-ap': {
    bare: 'Process Automation Accredited Professional',
    title: 'Process Automation Accredited Professional Study Guide',
    h1: 'Process Automation Accredited Professional Study Guide & Practice Questions (Retiring Feb 2027)',
  },
}

for (const [slug, alias] of Object.entries(CERT_ALIAS_REGISTRY)) {
  if (alias.title && alias.title.length > MAX_CERT_TITLE_LENGTH) {
    throw new Error(`Title for ${slug} is ${alias.title.length} characters; the limit is ${MAX_CERT_TITLE_LENGTH}: "${alias.title}"`)
  }
}

export function getCertAlias(slug: string): CertAlias | undefined {
  return CERT_ALIAS_REGISTRY[slug]
}

/** Every exam code for the credential, current first: ["Sales-Con-201", "CRT-251"]. */
export function getCertCodes(slug: string): string[] {
  const alias = CERT_ALIAS_REGISTRY[slug]
  if (!alias) return []
  return [alias.code, ...(alias.legacy ?? [])].filter((c): c is string => Boolean(c))
}

/** Codes as display text, e.g. "Sales-Con-201 / CRT-251". Undefined when the credential has none. */
export function getCertCodeLabel(slug: string): string | undefined {
  const codes = getCertCodes(slug)
  return codes.length ? codes.join(' / ') : undefined
}

function joinNames(names: string[]): string {
  if (names.length <= 1) return names[0] ?? ''
  return `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`
}

/**
 * The one- or two-sentence lead shown directly under the H1. It names the bare
 * exam name, the current code, any legacy code and the former credential name
 * so a searcher who typed any of them can see they are on the right page.
 * Returns undefined when there is nothing to disambiguate.
 *
 * Superseded on certification pages by getCertNamingLeadText in
 * cert-keyword-clusters, which covers the same ground plus the vendor-prefixed
 * and "... certification" phrasings. Kept for callers outside those pages.
 */
export function getCertDisambiguationLead(slug: string, officialName: string): string | undefined {
  const alias = CERT_ALIAS_REGISTRY[slug]
  if (!alias) return undefined
  const former = (alias.former ?? []).filter((name) => name !== alias.bare)
  if (!alias.code && !alias.legacy?.length && !former.length) return undefined

  const codeParts: string[] = []
  if (alias.code) codeParts.push(`exam code ${alias.code}`)
  if (alias.legacy?.length) codeParts.push(`legacy code ${alias.legacy.join(' / ')}`)
  const codes = codeParts.length ? ` (${codeParts.join(', ')})` : ''
  const first = `${alias.bare}${codes} is the exam for the ${officialName} credential.`
  const second = former.length ? ` It was formerly known as ${joinNames(former)}.` : ''
  return `${first}${second}`
}

/** Search names and codes for the credential JSON-LD. */
export function getCertAlternateNames(slug: string): string[] {
  const alias = CERT_ALIAS_REGISTRY[slug]
  if (!alias) return []
  return [...new Set([alias.bare, ...(alias.searchAliases ?? []), ...(alias.former ?? []), ...getCertCodes(slug)])]
}

/** identifier values for the credential JSON-LD: the current code, then legacy codes. */
export function getCertIdentifiers(slug: string): { propertyID: string; value: string }[] {
  const alias = CERT_ALIAS_REGISTRY[slug]
  if (!alias) return []
  return [
    ...(alias.code ? [{ propertyID: 'Exam Code', value: alias.code }] : []),
    ...(alias.legacy ?? []).map((value) => ({ propertyID: 'Legacy Exam Code', value })),
  ]
}
