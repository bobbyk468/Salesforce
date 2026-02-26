import type { Metadata } from 'next'
import { CERTIFICATION_CATEGORIES } from './certifications-data'
import { getCertPrimaryName, getCertFormerName } from './cert-name-aliases'
import { RELEASE_CURRENT } from './release-data'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

/** Current Salesforce release label in titles/H1 for CTR (intent: "updated", "current syllabus"). */
const TITLE_YEAR = RELEASE_CURRENT

function withCurrentReleaseLabel(text: string): string {
  return text.replace(/\b2026\b/g, RELEASE_CURRENT)
}

function finalizeMetaDescription(text: string): string {
  const normalized = withCurrentReleaseLabel(text).replace(/\s+/g, ' ').trim()
  const hasCta = /(start|get|try)\b[\s\S]{0,30}\b(now|today)\b/i.test(normalized)
  const withCta = hasCta
    ? normalized
    : `${normalized.replace(/[.\s]*$/, '')}. Start free practice now.`
  return withCta.length > 160 ? `${withCta.slice(0, 157)}...` : withCta
}

/** Build slug -> display name from certification categories (first occurrence wins) */
function buildSlugToTitle(): Record<string, string> {
  const map: Record<string, string> = {}
  for (const cat of CERTIFICATION_CATEGORIES) {
    for (const item of cat.items) {
      const slug = item.href.replace('/certifications/', '').replace(/\/$/, '')
      if (!map[slug]) map[slug] = item.name
    }
  }
  return map
}

const slugToTitle = buildSlugToTitle()

/** Official "Salesforce Certified X" display name. Uses getCertPrimaryName so all pages use naming standard. */
function slugToDisplayName(slug: string): string {
  const fromCategories = slugToTitle[slug]
  const fallback =
    fromCategories ||
    slug
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ') + ' Certification'
  return getCertPrimaryName(slug, fallback)
}

/** Exam code for metadata and intro; add more as needed. */
export const SLUG_TO_EXAM_CODE: Record<string, string> = {
  administrator: 'ADM-201',
  'advanced-administrator': 'ADM-211',
  'developer-1': 'PD1',
  'developer-2': 'PD2',
  'app-builder': 'DEV-402',
  'administrator-practice-test': 'ADM-201 Practice',
  'email-specialist-practice-test': 'Email Specialist Practice',
  'sales-cloud': 'Sales Cloud Consultant',
  'service-cloud': 'Service Cloud Consultant',
  'technical-architect': 'CTA',
  'technical-architect-evaluation': 'CTA Evaluation',
  'technical-architect-review-board': 'CTA Review Board',
}

/** Exam cost mapping for SEO (meta descriptions, titles). Default: $200 for most certs, $100 for AP, $400 for Architect, $250 for Tableau, $75 for Foundations, $6000 for CTA. */
export const SLUG_TO_EXAM_COST: Record<string, string> = {
  // $200 (most certs - default)
  administrator: '$200',
  'advanced-administrator': '$200',
  'app-builder': '$200',
  'agentforce-specialist': '$200',
  'business-analyst': '$200',
  'cpq-administrator': '$200',
  'marketing-cloud-engagement-admin': '$200',
  'slack-administrator': '$200',
  'developer-1': '$200',
  'developer-2': '$200',
  'javascript-developer-i': '$200',
  'b2c-commerce-developer': '$200',
  'industries-cpq-developer': '$200',
  'marketing-cloud-engagement-developer': '$200',
  'mulesoft-developer-i': '$200',
  'mulesoft-developer-ii': '$200',
  'mulesoft-hyperautomation-developer': '$200',
  'omnistudio-developer': '$200',
  'slack-developer': '$200',
  'sales-cloud': '$200',
  'service-cloud': '$200',
  'data-cloud-consultant': '$200',
  'crm-analytics-einstein-discovery-consultant': '$200',
  'education-cloud-consultant': '$200',
  'experience-cloud': '$200',
  'field-service': '$200',
  'pardot-consultant': '$200',
  'marketing-cloud-consultant': '$200',
  'nonprofit-cloud': '$200',
  'nonprofit-success-pack-consultant': '$200',
  'omnistudio-consultant': '$200',
  'revenue-cloud-consultant': '$200',
  'slack-consultant': '$200',
  'email-specialist': '$200',
  'pardot-specialist': '$200',
  'strategy-designer': '$200',
  'ai-associate': '$200',
  'marketing-cloud-engagement-foundations': '$200',
  'mulesoft-integration-foundations': '$75',
  // $100 (Accredited Professional)
  'advanced-field-service-ap': '$100',
  'b2b-commerce-admin-ap': '$100',
  'b2b-commerce-developer-ap': '$100',
  'communications-cloud-ap': '$100',
  'consumer-goods-cloud-ap': '$100',
  'consumer-goods-tpm-ap': '$100',
  'contact-center-ap': '$100',
  'cpq-billing-ap': '$100',
  'energy-utilities-ap': '$100',
  'financial-services-cloud-ap': '$100',
  'health-cloud-ap': '$100',
  'heroku-developer-ap': '$100',
  'loyalty-management-ap': '$100',
  'manufacturing-cloud-ap': '$100',
  'marketing-cloud-advanced-cross-channel-ap': '$100',
  'marketing-cloud-intelligence-ap': '$100',
  'marketing-cloud-personalization-ap': '$100',
  'media-cloud-ap': '$100',
  'net-zero-cloud-ap': '$100',
  'order-management-admin-ap': '$100',
  'order-management-developer-ap': '$100',
  'process-automation-ap': '$100',
  'public-sector-solutions-ap': '$100',
  // $400 (Architect certs)
  'application-architect': '$400',
  'data-architect': '$400',
  'integration-architect': '$400',
  'sharing-visibility-architect': '$400',
  'system-architect': '$400',
  'identity-access-management-architect': '$400',
  'dev-lifecycle-deployment-architect': '$400',
  'b2b-solution-architect': '$400',
  'b2c-commerce-architect': '$400',
  'b2c-solution-architect': '$400',
  'heroku-architect': '$400',
  'mulesoft-catalyst-consultant': '$400',
  'mulesoft-platform-architect': '$400',
  'mulesoft-integration-architect': '$400',
  // $250 (Tableau)
  'tableau-architect': '$250',
  'tableau-consultant': '$250',
  'tableau-data-analyst': '$250',
  'tableau-server-administrator': '$250',
  'tableau-desktop-foundations': '$100',
  // $75 (Foundations)
  'platform-foundations': '$75',
  'sales-foundations': '$200',
  // $6000 (CTA)
  'technical-architect': '$6000',
  'technical-architect-evaluation': '$6000',
  'technical-architect-review-board': '$6000',
  // UX Designer
  'ux-designer': '$200',
}

/** Get exam cost for a certification slug. Defaults to $200 if not specified. */
export function getExamCost(slug: string): string {
  return SLUG_TO_EXAM_COST[slug] || '$200'
}

/** Social proof: number of students who passed this cert (estimate for CTA messaging). Updated monthly. */
export const SLUG_TO_SOCIAL_PROOF: Record<string, number> = {
  // Top tier (highest volume)
  'administrator': 5000,
  'app-builder': 4200,
  'developer-1': 3800,

  // High tier
  'developer-2': 2100,
  'sales-cloud': 2900,
  'service-cloud': 1800,
  'advanced-administrator': 2100,
  'business-analyst': 1600,

  // Medium tier
  'integration-architect': 1200,
  'system-architect': 1500,
  'application-architect': 1400,
  'data-architect': 900,
  'technical-architect': 450,
  'email-specialist': 1300,
  'marketing-cloud-consultant': 1100,
  'pardot-consultant': 950,
  'pardot-specialist': 800,
  'cpq-administrator': 650,
  'experience-cloud': 750,
  'slack-developer': 600,
  'tableau-data-analyst': 700,
  'javascript-developer-i': 550,

  // Lower tier (less common students)
  'mulesoft-integration-foundations': 400,
  'mulesoft-developer-i': 350,
  'mulesoft-developer-ii': 250,
  'omnistudio-developer': 200,
  'slack-consultant': 300,
  'strategy-designer': 250,
  'ai-associate': 400,
}

/** Get approximate social proof number (students passed this month). Useful for CTAs like "Join 5,000+ passed this month". */
export function getSocialProofNumber(slug: string): number {
  return SLUG_TO_SOCIAL_PROOF[slug] || 800
}

/** Retake cost: MuleSoft Foundations is free; otherwise typically half of exam cost (or $100 default). */
export function getRetakeCost(slug: string): string {
  if (slug === 'mulesoft-integration-foundations') return 'Free'
  const cost = getExamCost(slug)
  if (cost === '$6000') return '$3000'
  if (cost === '$400') return '$200'
  if (cost === '$250') return '$125'
  if (cost === '$100') return '$50'
  if (cost === '$75') return '$37.50'
  return '$100'
}

/** Exam logistics (questions, passing score, duration) for the Exam logistics section. Overrides only; defaults by cost tier when missing. */
export type ExamLogisticsDetail = { questions: number | string; passingScore: string; duration: string }

const SLUG_TO_EXAM_LOGISTICS: Record<string, ExamLogisticsDetail> = {
  administrator: { questions: 60, passingScore: '65%', duration: '105 min' },
  'advanced-administrator': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'app-builder': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'agentforce-specialist': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'business-analyst': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'cpq-administrator': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'marketing-cloud-engagement-admin': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'slack-administrator': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'developer-1': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'developer-2': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'javascript-developer-i': { questions: 60, passingScore: '~68%', duration: '105 min' },
  'b2c-commerce-developer': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'industries-cpq-developer': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'marketing-cloud-engagement-developer': { questions: 60, passingScore: '~67%', duration: '105 min' },
  'mulesoft-developer-i': { questions: 60, passingScore: '~70%', duration: '120 min' },
  'mulesoft-developer-ii': { questions: 60, passingScore: '~70%', duration: '120 min' },
  'mulesoft-hyperautomation-developer': { questions: 60, passingScore: '~68%', duration: '105 min' },
  'omnistudio-developer': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'slack-developer': { questions: 60, passingScore: '~68%', duration: '105 min' },
  'sales-cloud': { questions: 60, passingScore: '68%', duration: '105 min' },
  'service-cloud': { questions: 60, passingScore: '67%', duration: '105 min' },
  'data-cloud-consultant': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'crm-analytics-einstein-discovery-consultant': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'education-cloud-consultant': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'experience-cloud': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'field-service': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'pardot-consultant': { questions: 60, passingScore: '68%', duration: '105 min' },
  'marketing-cloud-consultant': { questions: 60, passingScore: '67%', duration: '105 min' },
  'nonprofit-cloud': { questions: 60, passingScore: '65%', duration: '105 min' },
  'nonprofit-success-pack-consultant': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'omnistudio-consultant': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'revenue-cloud-consultant': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'slack-consultant': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'email-specialist': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'pardot-specialist': { questions: 60, passingScore: '72%', duration: '90 min' },
  'strategy-designer': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'ai-associate': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'marketing-cloud-engagement-foundations': { questions: 40, passingScore: '~65%', duration: '75 min' },
  'mulesoft-integration-foundations': { questions: 40, passingScore: '70%', duration: '70 min' },
  'ux-designer': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'platform-foundations': { questions: 40, passingScore: '~65%', duration: '75 min' },
  'sales-foundations': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'administrator-practice-test': { questions: 60, passingScore: '65%', duration: '105 min' },
  'email-specialist-practice-test': { questions: 60, passingScore: '~65%', duration: '105 min' },
  // $100 AP
  'advanced-field-service-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'b2b-commerce-admin-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'b2b-commerce-developer-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'communications-cloud-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'consumer-goods-cloud-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'consumer-goods-tpm-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'contact-center-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'cpq-billing-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'energy-utilities-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'financial-services-cloud-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'health-cloud-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'heroku-developer-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'loyalty-management-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'manufacturing-cloud-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'marketing-cloud-advanced-cross-channel-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'marketing-cloud-intelligence-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'marketing-cloud-personalization-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'media-cloud-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'net-zero-cloud-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'order-management-admin-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'order-management-developer-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'process-automation-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'public-sector-solutions-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  // $400 Architects
  'application-architect': { questions: 60, passingScore: '~68%', duration: '120 min' },
  'data-architect': { questions: 60, passingScore: '~68%', duration: '120 min' },
  'integration-architect': { questions: 60, passingScore: '~68%', duration: '120 min' },
  'sharing-visibility-architect': { questions: 60, passingScore: '~68%', duration: '120 min' },
  'system-architect': { questions: 60, passingScore: '~68%', duration: '120 min' },
  'identity-access-management-architect': { questions: 60, passingScore: '~68%', duration: '120 min' },
  'dev-lifecycle-deployment-architect': { questions: 60, passingScore: '~68%', duration: '120 min' },
  'b2b-solution-architect': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'b2c-commerce-architect': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'b2c-solution-architect': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'heroku-architect': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'mulesoft-catalyst-consultant': { questions: 60, passingScore: '~68%', duration: '120 min' },
  'mulesoft-platform-architect': { questions: 60, passingScore: '~68%', duration: '120 min' },
  'mulesoft-integration-architect': { questions: 60, passingScore: '~68%', duration: '120 min' },
  // Tableau
  'tableau-architect': { questions: 45, passingScore: '~70%', duration: '90 min' },
  'tableau-consultant': { questions: 45, passingScore: '~70%', duration: '90 min' },
  'tableau-data-analyst': { questions: 45, passingScore: '~70%', duration: '90 min' },
  'tableau-server-administrator': { questions: 45, passingScore: '~70%', duration: '90 min' },
  'tableau-desktop-foundations': { questions: 40, passingScore: '~65%', duration: '60 min' },
  // CTA / Board
  'technical-architect': { questions: 'Board exam', passingScore: 'Board review', duration: 'Board' },
  'technical-architect-evaluation': { questions: 'Scenario + MC', passingScore: 'Per exam', duration: 'Timed' },
  'technical-architect-review-board': { questions: 'Board scenario', passingScore: 'Board decision', duration: 'Board session' },
}

/** Returns exam logistics for the Exam logistics section; null if slug not in map (e.g. role page). */
export function getExamLogistics(slug: string): (ExamLogisticsDetail & { fee: string; retake: string }) | null {
  const cost = getExamCost(slug)
  const retake = getRetakeCost(slug)
  const detail = SLUG_TO_EXAM_LOGISTICS[slug]
  if (!detail) return null
  return { ...detail, fee: cost, retake }
}

function clampTitle(raw: string, max = 60): string {
  const normalized = raw.replace(/\s+/g, ' ').trim()
  if (normalized.length <= max) return normalized
  const candidate = normalized.slice(0, max + 1)
  const splitAt = candidate.lastIndexOf(' ')
  const cut = splitAt > 40 ? candidate.slice(0, splitAt) : normalized.slice(0, max - 3)
  return `${cut.trim()}...`
}

function compressTitleWords(raw: string): string {
  return raw
    .replace(/^Salesforce\s+/i, '')
    .replace(/\bCertified\b/gi, '')
    .replace(/\bCertification\b/gi, '')
    .replace(/\bAdministrator\b/gi, 'Admin')
    .replace(/\bDeveloper\b/gi, 'Dev')
    .replace(/\bArchitect\b/gi, 'Arch')
    .replace(/\bConsultant\b/gi, 'Consult')
    .replace(/\bSpecialist\b/gi, 'Spec')
    .replace(/\s{2,}/g, ' ')
    .trim()
}

function buildWinterTitle(base: string): string {
  const candidates = [
    `${base} (${TITLE_YEAR})`,
    `${base} Prep (${TITLE_YEAR})`,
    `${compressTitleWords(base)} (${TITLE_YEAR})`,
    `${compressTitleWords(base)} Prep (${TITLE_YEAR})`,
  ]
  for (const candidate of candidates) {
    if (candidate.length <= 60) return candidate
  }
  return clampTitle(candidates[candidates.length - 1], 60)
}

/** Intent-driven title: concise and non-truncated in SERP. */
function getCertMetaTitle(slug: string): string {
  // Gemini-inspired CTR overrides for highest opportunity pages.
  const ctrTitleOverrides: Record<string, string> = {
    'app-builder': `Salesforce Platform App Builder: ${TITLE_YEAR} Exam Prep`,
    administrator: `Master ADM-201: Salesforce Certified Platform Administrator | ${TITLE_YEAR} Study`,
    'advanced-administrator': `Ace ADM-211: Salesforce Certified Advanced Administrator Prep (${TITLE_YEAR})`,
    'email-specialist': `Master Salesforce Certified Marketing Cloud Email Specialist (${TITLE_YEAR})`,
    'mulesoft-hyperautomation-developer': `MuleSoft Hyperautomation Dev Practice (${TITLE_YEAR})`,
    'sharing-visibility-architect': `Sharing & Visibility Architect Prep: ${TITLE_YEAR}`,
    'identity-access-management-architect': `Identity & Access Mgmt Architect (${TITLE_YEAR})`,
    'marketing-cloud-consultant': `Pass Marketing Cloud Consultant: Free Exam Prep | ${TITLE_YEAR}`,
    'business-analyst': `Salesforce Business Analyst Exam: Free Practice ${TITLE_YEAR}`,
    'sales-cloud': `Pass Sales Cloud Consultant: Free Practice Exam (60 Q)`,
    'developer-2': `Ace PD2: Salesforce Certified Platform Developer II Prep (${TITLE_YEAR})`,
    'cpq-administrator': `Salesforce CPQ Administrator: ${TITLE_YEAR} Exam Prep`,
    'pardot-consultant': `Master Account Engagement (Pardot) Consultant Exam (${TITLE_YEAR})`,
    'pardot-specialist': `Pass Account Engagement (Pardot) Specialist Practice (${TITLE_YEAR})`,
    'experience-cloud': `Free Experience Cloud Consultant Practice (${TITLE_YEAR})`,
    'mulesoft-integration-foundations': `MuleSoft Foundations: ${TITLE_YEAR} Exam Fees & Prep`,
    'developer-1': `Salesforce Platform Developer I (PD1): ${TITLE_YEAR} Prep`,
    'slack-developer': `Free Salesforce Slack Developer Study Guide (${TITLE_YEAR})`,
    'tableau-data-analyst': `Tableau Data Analyst Practice Questions (${TITLE_YEAR})`,
    'technical-architect-review-board': `Salesforce CTA Review Board Prep (${TITLE_YEAR})`,
    'technical-architect': `Salesforce Technical Architect (CTA) Guide (${TITLE_YEAR})`,
    'system-architect': `System Architect Exam: Study Guide & Domain Weights`,
    'integration-architect': `Integration Architect Exam: Study Guide & Practice`,
    'data-architect': `Salesforce Data Architect: ${TITLE_YEAR} Study Guide`,
    // Extended coverage: All remaining certs for complete CTR optimization
    'administrator-practice-test': `ADM-201 Practice Test: Real Exam Questions (${TITLE_YEAR})`,
    'agentforce-specialist': `Become Agentforce Specialist: Study Guide & Practice (${TITLE_YEAR})`,
    'ai-associate': `Salesforce AI Associate: ${TITLE_YEAR} Exam Study Guide`,
    'application-architect': `Ace Application Architect: Design Patterns & Practice (${TITLE_YEAR})`,
    'b2b-commerce-admin-ap': `Pass B2B Commerce Admin AP: Study Guide & Practice (${TITLE_YEAR})`,
    'b2b-commerce-developer-ap': `Earn B2B Commerce Developer AP: Free Study Guide (${TITLE_YEAR})`,
    'b2b-solution-architect': `Master B2B Solution Architecture: Design Guide (${TITLE_YEAR})`,
    'b2c-commerce-architect': `Ace B2C Commerce Architect: Study & Practice (${TITLE_YEAR})`,
    'b2c-commerce-developer': `Pass B2C Commerce Developer: Free Study Guide (${TITLE_YEAR})`,
    'b2c-solution-architect': `Master B2C Solution Architecture: Design Study (${TITLE_YEAR})`,
    'communications-cloud-ap': `Earn Communications Cloud AP: Study Guide (${TITLE_YEAR})`,
    'consumer-goods-cloud-ap': `Get Certified: Consumer Goods Cloud AP (${TITLE_YEAR})`,
    'consumer-goods-tpm-ap': `Earn TPM AP Certification: Study & Practice (${TITLE_YEAR})`,
    'contact-center-ap': `Pass Contact Center AP: Free Practice Guide (${TITLE_YEAR})`,
    'cpq-billing-ap': `Earn CPQ & Billing AP: Study Guide (${TITLE_YEAR})`,
    'crm-analytics-einstein-discovery-consultant': `Master CRM Analytics & Einstein Discovery (${TITLE_YEAR})`,
    'data-cloud-consultant': `Salesforce Data Cloud Consultant: ${TITLE_YEAR} Prep`,
    'dev-lifecycle-deployment-architect': `Ace Dev Lifecycle & Deployment Architect (${TITLE_YEAR})`,
    'education-cloud-consultant': `Master Education Cloud: Consultant Study Guide (${TITLE_YEAR})`,
    'email-specialist-practice-test': `Email Specialist Practice Test: Real Questions (${TITLE_YEAR})`,
    'energy-utilities-ap': `Earn Energy & Utilities AP: Study Guide (${TITLE_YEAR})`,
    'field-service': `Master Field Service Consultant: Study Guide (${TITLE_YEAR})`,
    'financial-services-cloud-ap': `Get Certified: Financial Services Cloud AP (${TITLE_YEAR})`,
    'health-cloud-ap': `Earn Health Cloud AP: Study Guide & Practice (${TITLE_YEAR})`,
    'heroku-architect': `Master Heroku Architect: Design Study Guide (${TITLE_YEAR})`,
    'heroku-developer-ap': `Earn Heroku Developer AP: Study Guide (${TITLE_YEAR})`,
    'industries-cpq-developer': `Pass Industries CPQ Developer: Study Guide (${TITLE_YEAR})`,
    'javascript-developer-i': `Pass JavaScript Developer I: Coding Interview Prep (${TITLE_YEAR})`,
    'lightning-web-components-specialist': `Master Lightning Web Components: Study Guide (${TITLE_YEAR})`,
    'loyalty-management-ap': `Earn Loyalty Management AP: Study Guide (${TITLE_YEAR})`,
    'manufacturing-cloud-ap': `Get Certified: Manufacturing Cloud AP (${TITLE_YEAR})`,
    'marketing-cloud-advanced-cross-channel-ap': `Earn Marketing Cloud Advanced AP (${TITLE_YEAR})`,
    'marketing-cloud-engagement-admin': `Master Marketing Cloud Engagement Admin (${TITLE_YEAR})`,
    'marketing-cloud-engagement-developer': `Pass Marketing Cloud Engagement Developer (${TITLE_YEAR})`,
    'marketing-cloud-engagement-foundations': `Start Marketing Cloud Engagement: Foundation Guide (${TITLE_YEAR})`,
    'marketing-cloud-intelligence-ap': `Earn Marketing Cloud Intelligence AP (${TITLE_YEAR})`,
    'marketing-cloud-personalization-ap': `Get Certified: Marketing Cloud Personalization (${TITLE_YEAR})`,
    'media-cloud-ap': `Earn Media Cloud AP: Study Guide (${TITLE_YEAR})`,
    'mulesoft-catalyst-consultant': `Master MuleSoft Catalyst Consultant: Study Guide (${TITLE_YEAR})`,
    'mulesoft-developer-i': `Pass MuleSoft Developer I: Integration Study Guide (${TITLE_YEAR})`,
    'mulesoft-developer-ii': `Pass MuleSoft Developer II: Advanced Integration (${TITLE_YEAR})`,
    'mulesoft-integration-architect': `Master MuleSoft Integration Architect: Study Guide (${TITLE_YEAR})`,
    'mulesoft-platform-architect': `Ace MuleSoft Platform Architect: Design Guide (${TITLE_YEAR})`,
    'net-zero-cloud-ap': `Earn Net Zero Cloud AP: Sustainability Study (${TITLE_YEAR})`,
    'nonprofit-cloud': `Master Nonprofit Cloud: Consultant Study Guide (${TITLE_YEAR})`,
    'nonprofit-success-pack-consultant': `Pass Nonprofit Success Pack (NPSP): Study Guide (${TITLE_YEAR})`,
    'omnistudio-consultant': `Master OmniStudio Consultant: Study & Practice (${TITLE_YEAR})`,
    'omnistudio-developer': `Pass OmniStudio Developer: Integration Study Guide (${TITLE_YEAR})`,
    'order-management-admin-ap': `Earn Order Management Admin AP: Study Guide (${TITLE_YEAR})`,
    'order-management-developer-ap': `Get Certified: Order Management Developer AP (${TITLE_YEAR})`,
    'platform-foundations': `Start Your Journey: Platform Foundations Guide (${TITLE_YEAR})`,
    'process-automation-ap': `Earn Process Automation AP: Study & Practice (${TITLE_YEAR})`,
    'public-sector-solutions-ap': `Get Certified: Public Sector Solutions AP (${TITLE_YEAR})`,
    'revenue-cloud-consultant': `Master Revenue Cloud Consultant: Study Guide (${TITLE_YEAR})`,
    'sales-foundations': `Start Sales Foundation: Free Study Guide (${TITLE_YEAR})`,
    'service-cloud': `Master Service Cloud Consultant: Study Guide (${TITLE_YEAR})`,
    'slack-administrator': `Master Slack Administrator: Study & Practice Guide (${TITLE_YEAR})`,
    'slack-consultant': `Become Slack Consultant: Solution Design Study (${TITLE_YEAR})`,
    'strategy-designer': `Master Platform Strategy Designer: Study Guide (${TITLE_YEAR})`,
    'tableau-architect': `Ace Tableau Architect: Design Study Guide (${TITLE_YEAR})`,
    'tableau-consultant': `Master Tableau Consultant: Study & Practice (${TITLE_YEAR})`,
    'tableau-desktop-foundations': `Start Tableau Desktop: Foundation Study Guide (${TITLE_YEAR})`,
    'tableau-server-administrator': `Master Tableau Server Admin: Study Guide (${TITLE_YEAR})`,
    'technical-architect-evaluation': `Pass CTA Evaluation: Scenario-Based Study Guide (${TITLE_YEAR})`,
    'ux-designer': `Master Salesforce UX Designer: Study Guide (${TITLE_YEAR})`,
  }
  const ctrTitle = ctrTitleOverrides[slug]
  if (ctrTitle) return clampTitle(ctrTitle)
  // Explicit short title for historical high-volume page.
  if (slug === 'developer-1') return `Salesforce PD1 Practice Exam (${TITLE_YEAR})`
  /** Short SERP titles for top certs. */
  const shortTitles: Record<string, string> = {
    // Administrator track (base certs – people start here; "Salesforce" first for broader queries)
    administrator: 'Salesforce Platform Administrator (ADM-201)',
    'advanced-administrator': 'Salesforce Certified Advanced Administrator (ADM-211)',
    'app-builder': 'Salesforce Platform App Builder (DEV-402)',
    'agentforce-specialist': 'Salesforce Certified Agentforce Specialist',
    'business-analyst': 'Salesforce Business Analyst',
    'cpq-administrator': 'Salesforce Certified CPQ Administrator',
    'marketing-cloud-engagement-admin': 'Salesforce Certified Marketing Cloud Engagement Admin',
    'slack-administrator': 'Salesforce Certified Slack Administrator',
    'administrator-practice-test': 'ADM-201 Practice Test',
    // Developer track ("Salesforce" first for broader queries)
    'developer-1': 'Salesforce Platform Developer I (PD1)',
    'developer-2': 'Salesforce Certified Platform Developer II (PD2)',
    'javascript-developer-i': 'Salesforce Certified JavaScript Developer I',
    'b2c-commerce-developer': 'Salesforce Certified B2C Commerce Developer',
    'industries-cpq-developer': 'Salesforce Certified Industries CPQ Developer',
    'marketing-cloud-engagement-developer': 'Salesforce Certified Marketing Cloud Engagement Developer',
    'mulesoft-developer-i': 'Salesforce Certified MuleSoft Developer I',
    'mulesoft-developer-ii': 'Salesforce Certified MuleSoft Developer II',
    'mulesoft-hyperautomation-developer': 'Salesforce Certified MuleSoft Hyperautomation Developer',
    'omnistudio-developer': 'Salesforce Certified OmniStudio Developer',
    'slack-developer': 'Salesforce Certified Slack Developer',
    // Consultant track ("Salesforce" first for broader queries)
    'sales-cloud': 'Salesforce Sales Cloud Consultant',
    'service-cloud': 'Salesforce Certified Service Cloud Consultant',
    'data-cloud-consultant': 'Salesforce Certified Data Cloud Consultant',
    'crm-analytics-einstein-discovery-consultant': 'Salesforce Certified CRM Analytics & Einstein Discovery',
    'education-cloud-consultant': 'Salesforce Certified Education Cloud Consultant',
    'experience-cloud': 'Salesforce Certified Experience Cloud Consultant',
    'field-service': 'Salesforce Certified Field Service Consultant',
    'pardot-consultant': 'Salesforce Certified Pardot (Account Engagement) Consultant',
    'marketing-cloud-consultant': 'Salesforce Certified Marketing Cloud Engagement Consultant',
    'nonprofit-cloud': 'Salesforce Certified Nonprofit Cloud Consultant',
    'nonprofit-success-pack-consultant': 'Salesforce Certified Nonprofit Success Pack (NPSP)',
    'omnistudio-consultant': 'Salesforce Certified OmniStudio Consultant',
    'revenue-cloud-consultant': 'Salesforce Certified Revenue Cloud Consultant',
    'slack-consultant': 'Salesforce Certified Slack Consultant',
    // Associate
    'platform-foundations': 'Salesforce Certified Platform Foundations',
    'ai-associate': 'Salesforce Certified AI Associate',
    'marketing-cloud-engagement-foundations': 'Salesforce Certified Marketing Cloud Engagement Foundations',
    'mulesoft-integration-foundations': 'Salesforce Certified MuleSoft Integration Foundations',
    // Marketing
    'email-specialist': 'Salesforce Marketing Cloud Email Specialist',
    'pardot-specialist': 'Salesforce Certified Pardot (Account Engagement) Specialist',
    'email-specialist-practice-test': 'Email Specialist Practice Test',
    // Architect ("Salesforce" first for broader queries)
    'application-architect': 'Salesforce Certified Application Architect',
    'data-architect': 'Salesforce Data Architect',
    'integration-architect': 'Salesforce Certified Integration Architect',
    'sharing-visibility-architect': 'Salesforce Certified Sharing & Visibility Architect',
    'system-architect': 'Salesforce Certified System Architect',
    'identity-access-management-architect': 'Salesforce Certified Identity & Access Mgmt Architect',
    'dev-lifecycle-deployment-architect': 'Salesforce Certified Dev Lifecycle & Deployment Architect',
    'technical-architect': 'Salesforce Certified Technical Architect (CTA)',
    'technical-architect-evaluation': 'CTA Architect Evaluation',
    'technical-architect-review-board': 'CTA Review Board',
    'b2b-solution-architect': 'Salesforce Certified B2B Solution Architect',
    'b2c-commerce-architect': 'Salesforce Certified B2C Commerce Architect',
    'b2c-solution-architect': 'Salesforce Certified B2C Solution Architect',
    'heroku-architect': 'Salesforce Certified Heroku Architect',
    'mulesoft-catalyst-consultant': 'Salesforce Certified MuleSoft Catalyst Consultant',
    'mulesoft-platform-architect': 'Salesforce Certified MuleSoft Platform Architect',
    'mulesoft-integration-architect': 'Salesforce Certified MuleSoft Integration Architect',
    // Accredited Professional ("Salesforce" context in ecosystem)
    'advanced-field-service-ap': 'Salesforce Certified Advanced Field Service AP',
    'b2b-commerce-admin-ap': 'Salesforce Certified B2B Commerce Admin AP',
    'b2b-commerce-developer-ap': 'Salesforce Certified B2B Commerce Developer AP',
    'communications-cloud-ap': 'Salesforce Certified Communications Cloud AP',
    'consumer-goods-cloud-ap': 'Salesforce Certified Consumer Goods Cloud AP',
    'consumer-goods-tpm-ap': 'Salesforce Certified Consumer Goods TPM AP',
    'contact-center-ap': 'Salesforce Certified Contact Center AP',
    'cpq-billing-ap': 'Salesforce Certified CPQ and Billing AP',
    'energy-utilities-ap': 'Salesforce Certified Energy & Utilities AP',
    'financial-services-cloud-ap': 'Salesforce Certified Financial Services Cloud AP',
    'health-cloud-ap': 'Salesforce Certified Health Cloud AP',
    'heroku-developer-ap': 'Salesforce Certified Heroku Developer AP',
    'loyalty-management-ap': 'Salesforce Certified Loyalty Management AP',
    'manufacturing-cloud-ap': 'Salesforce Certified Manufacturing Cloud AP',
    'marketing-cloud-advanced-cross-channel-ap': 'Salesforce Certified Marketing Cloud Advanced Cross Channel AP',
    'marketing-cloud-intelligence-ap': 'Salesforce Certified Marketing Cloud Intelligence AP',
    'marketing-cloud-personalization-ap': 'Salesforce Certified Marketing Cloud Personalization AP',
    'media-cloud-ap': 'Salesforce Certified Media Cloud AP',
    'net-zero-cloud-ap': 'Salesforce Certified Net Zero Cloud AP',
    'order-management-admin-ap': 'Salesforce Certified Order Management Admin AP',
    'order-management-developer-ap': 'Salesforce Certified Order Management Developer AP',
    'process-automation-ap': 'Salesforce Certified Process Automation AP',
    'public-sector-solutions-ap': 'Salesforce Certified Public Sector Solutions AP',
    // Sales
    'sales-foundations': 'Salesforce Certified Sales Foundations',
    // Designer
    'strategy-designer': 'Salesforce Certified Platform Strategy Designer',
    'ux-designer': 'Salesforce Certified UX Designer',
    // Tableau (Salesforce ecosystem)
    'tableau-architect': 'Salesforce Certified Tableau Architect',
    'tableau-consultant': 'Salesforce Certified Tableau Consultant',
    'tableau-data-analyst': 'Salesforce Certified Tableau Data Analyst',
    'tableau-desktop-foundations': 'Salesforce Certified Tableau Desktop Foundations',
    'tableau-server-administrator': 'Salesforce Certified Tableau Server Administrator',
  }
  const short = shortTitles[slug]
  if (short) {
    // Normalize very long official naming inside title tags.
    const compactShort = short
      .replace(/^Salesforce Certified\s+/i, 'Salesforce ')
      .replace(/\(Account Engagement\)\s*/gi, '')
    return buildWinterTitle(compactShort)
  }
  if (slugToTitle[slug]) return buildWinterTitle(slugToDisplayName(slug))
  const primaryName = getCertPrimaryName(slug, slugToDisplayName(slug))
  const examCode = SLUG_TO_EXAM_CODE[slug]
  const baseName = primaryName.replace(/\s*\([^)]+\)\s*$/, '').trim() || primaryName
  const hasCodeInName = examCode && primaryName.includes(examCode)
  const displayName = examCode && !hasCodeInName ? `${baseName} (${examCode})` : primaryName
  return buildWinterTitle(displayName)
}

/** Unique meta description 140–160 chars for certification pages. Rendered as <meta name="description" content="..."> in <head>. */
export function getCertMetaDescription(slug: string): string {
  const certName = slugToDisplayName(slug)
  const examCode = SLUG_TO_EXAM_CODE[slug]
  const formerName = getCertFormerName(slug)
  const examCost = getExamCost(slug)
  const ctrDescriptionOverrides: Record<string, string> = {
    'app-builder':
      `Master DEV-402 without coding. Free practice questions (60 questions, 105 min, 65% passing score). Build custom Salesforce apps using clicks, not code. ${TITLE_YEAR} complete study guide + explanations.`,
    administrator:
      `Pass ADM-201 on your first attempt. Free practice questions, section weightage breakdown, exam tips & study guide. 60 questions, 65% passing score, 105 min. Start ${TITLE_YEAR} prep today.`,
    'marketing-cloud-consultant':
      `Master Marketing Cloud in ${TITLE_YEAR}. Free practice exam (60 questions, 67% passing), exam tips, and proven study method. Pass the consultant certification guaranteed.`,
    'business-analyst':
      `Free Business Analyst exam practice (60 questions, ~65% passing score, 105 min). $200 fee. ${TITLE_YEAR} study guide with practice questions & exam tips included.`,
    'sales-cloud':
      `Pass Sales Cloud Consultant on first try. Free practice exam (60 questions, 68% passing score). Get solution design strategies, exam tips, and ${TITLE_YEAR} study guide now.`,
    'advanced-administrator':
      `Pass ADM-211 faster. Use our ${TITLE_YEAR} prep guide with section weightage, realistic practice questions, and a focused admin study plan.`,
    'email-specialist':
      `Pass the Salesforce Certified Marketing Cloud Email Specialist exam (formerly Email Specialist). ${TITLE_YEAR} practice questions, topic breakdowns, and exam-focused study tips. Start free today.`,
    'mulesoft-hyperautomation-developer':
      `Tackle MuleSoft Hyperautomation with confidence. Get ${TITLE_YEAR} exam topics, free practice questions, and practical prep guidance. Start now.`,
    'sharing-visibility-architect':
      `Master sharing model scenarios for ${TITLE_YEAR}. Practice architect-level questions and prepare with focused guidance on visibility design decisions.`,
    'identity-access-management-architect':
      `Prepare for IAM Architect with ${TITLE_YEAR} scenarios on SSO, OAuth, and access design. Use practice questions and focused exam tips. Start now.`,
    'developer-2':
      `Level up your dev skills. Get the latest ${TITLE_YEAR} exam topics, practice questions, and expert tips for the Platform Developer II certification.`,
    'cpq-administrator':
      `Free CPQ Administrator practice (60 questions, ~65% passing score, 105 min). $200 exam fee. Get ${TITLE_YEAR} study guide with practice questions & exam tips now.`,
    'pardot-consultant':
      `Pass the Salesforce Certified Account Engagement (Pardot) Consultant exam (formerly Pardot Consultant). 60 questions, 68% passing score. Free ${TITLE_YEAR} study guide + strategic tips.`,
    'pardot-specialist':
      `Pass the Salesforce Certified Account Engagement (Pardot) Specialist exam (formerly Pardot Specialist). Free ${TITLE_YEAR} practice tests and a complete marketing automation study guide.`,
    'experience-cloud':
      `Free Experience Cloud Consultant practice exam: 60 questions, ~65% passing score, 105 min. $200 exam fee. ${TITLE_YEAR} study guide with practice questions included.`,
    'slack-developer':
      `Looking for affordable Slack Developer prep? Get our free ${TITLE_YEAR} study guide, exam breakdowns, and practice tips to pass your certification.`,
    'tableau-data-analyst':
      `Master the Tableau Data Analyst exam with updated ${TITLE_YEAR} practice questions, detailed explanations, and exam weightage. Start practicing free today.`,
    'mulesoft-integration-foundations':
      `Find MuleSoft Integration Foundations ${TITLE_YEAR} exam fees and code, plus free practice questions and study tips to pass on your first try.`,
    'technical-architect-review-board':
      `Prepare for the Salesforce CTA Review Board with format details, prep path, and ${TITLE_YEAR} success tips. Get focused guidance before your board date.`,
    'integration-architect':
      `Free Integration Architect practice: 60 questions, ~68% passing score, 120 min. $400 exam fee, ${TITLE_YEAR} study guide. Prerequisites: App & System Architect.`,
    'data-architect':
      `Free Data Architect practice: 60 questions, ~68% passing score, 120 min. $400 fee. ${TITLE_YEAR} study guide. Prerequisites: Application & System Architect certs.`,
    'system-architect':
      `Free System Architect practice: 60 questions, ~68% passing score, 120 min. $400 exam fee. ${TITLE_YEAR} study guide with domain weights breakdown & prep tips.`,
    // Extended coverage: All remaining certs for universal CTR optimization
    'administrator-practice-test': `ADM-201 practice test with real exam-style questions. Section weightage, passing scores, and detailed explanations. Free test, no signup. ${TITLE_YEAR} updated.`,
    'agentforce-specialist': `Master Agentforce Specialist certification. Free practice questions, exam overview, and study strategy. Agentforce fundamentals explained simply. Start free ${TITLE_YEAR}.`,
    'ai-associate': `Earn AI Associate certification. Free practice questions, Einstein AI setup, and responsible AI principles. Complete beginner-friendly study guide ${TITLE_YEAR}.`,
    'application-architect': `Pass Application Architect certification. Architecture patterns, design decisions, and solution design. Practice questions + exam strategy included ${TITLE_YEAR}.`,
    'b2b-commerce-admin-ap': `Become B2B Commerce Admin AP certified. Free study guide with platform features, admin tasks, and exam tips. ${TITLE_YEAR} practice questions included.`,
    'b2b-commerce-developer-ap': `Get B2B Commerce Developer AP certification. Integration patterns, API usage, and customization guide. Free practice + exam prep ${TITLE_YEAR}.`,
    'b2b-solution-architect': `Master B2B Solution Architecture. Design patterns, solution approach, and best practices. Comprehensive study guide with architecture examples ${TITLE_YEAR}.`,
    'b2c-commerce-architect': `Ace B2C Commerce Architect certification. E-commerce design, storefront architecture, and scaling patterns. Complete study guide ${TITLE_YEAR}.`,
    'b2c-commerce-developer': `Pass B2C Commerce Developer. Front-end development, cart logic, and customization. Free practice questions and study tips ${TITLE_YEAR}.`,
    'b2c-solution-architect': `Master B2C Solution Architecture. Digital commerce design, customer experience, and technical strategy. Study guide + tips ${TITLE_YEAR}.`,
    'communications-cloud-ap': `Earn Communications Cloud AP. Messaging platform, SMS integration, and customer communication setup. Free study guide ${TITLE_YEAR}.`,
    'consumer-goods-cloud-ap': `Get Consumer Goods Cloud AP certified. Industry-specific features, commerce, and planning. Study guide with industry use cases ${TITLE_YEAR}.`,
    'consumer-goods-tpm-ap': `Earn TPM AP certification for consumer goods. Trade promotion management, spending, and analytics. ${TITLE_YEAR} study guide.`,
    'contact-center-ap': `Pass Contact Center AP. Call center features, routing, and customer service setup. Free practice questions and exam guide ${TITLE_YEAR}.`,
    'cpq-billing-ap': `Earn CPQ & Billing AP. Configure-Price-Quote, billing cycles, and revenue management. Study guide with real examples ${TITLE_YEAR}.`,
    'crm-analytics-einstein-discovery-consultant': `Master CRM Analytics & Einstein Discovery. Dashboards, analytics, predictive AI, and insights. Complete study guide ${TITLE_YEAR}.`,
    'data-cloud-consultant': `Become Data Cloud Consultant. Customer 360, data unification, and activation. Free practice + architecture guide ${TITLE_YEAR}.`,
    'dev-lifecycle-deployment-architect': `Ace Dev Lifecycle & Deployment Architect. GitHub, deployment, testing, and CI/CD. Architecture patterns guide ${TITLE_YEAR}.`,
    'education-cloud-consultant': `Master Education Cloud Consultant. Student lifecycle, admissions, courses, and engagement. Industry guide with exam tips ${TITLE_YEAR}.`,
    'email-specialist-practice-test': `Email Specialist practice test. Marketing Cloud, email automation, and campaign management. Real exam-style questions, free test ${TITLE_YEAR}.`,
    'energy-utilities-ap': `Earn Energy & Utilities AP. Utility-specific features, billing, and customer management. Study guide with industry context ${TITLE_YEAR}.`,
    'field-service': `Master Field Service Consultant. Mobile scheduling, work orders, and field operations. Complete study guide with examples ${TITLE_YEAR}.`,
    'financial-services-cloud-ap': `Get Financial Services Cloud AP certified. Banking, insurance, and wealth solutions. Free study guide with industry scenarios ${TITLE_YEAR}.`,
    'health-cloud-ap': `Earn Health Cloud AP. Healthcare delivery, patient management, and clinical info. Medical industry study guide ${TITLE_YEAR}.`,
    'heroku-architect': `Master Heroku Architect. Container orchestration, scaling patterns, and deployment strategy. Architecture design guide ${TITLE_YEAR}.`,
    'heroku-developer-ap': `Earn Heroku Developer AP. Platform management, environment setup, and best practices. Free study guide ${TITLE_YEAR}.`,
    'industries-cpq-developer': `Pass Industries CPQ Developer. Industry-specific quoting, pricing logic, and customization. Free practice questions ${TITLE_YEAR}.`,
    'javascript-developer-i': `Pass JavaScript Developer I. JavaScript fundamentals, ES6+, and async programming. Coding interview prep guide ${TITLE_YEAR}.`,
    'lightning-web-components-specialist': `Master Lightning Web Components. LWC syntax, lifecycle, and component patterns. Complete developer study guide ${TITLE_YEAR}.`,
    'loyalty-management-ap': `Earn Loyalty Management AP. Reward programs, points, and customer retention. Study guide with business examples ${TITLE_YEAR}.`,
    'manufacturing-cloud-ap': `Get Manufacturing Cloud AP certified. Supply chain, planning, and production management. Industry-focused study guide ${TITLE_YEAR}.`,
    'marketing-cloud-advanced-cross-channel-ap': `Earn Marketing Cloud Advanced AP. Multi-channel campaigns, automation, and strategy. Advanced study guide ${TITLE_YEAR}.`,
    'marketing-cloud-engagement-admin': `Master Marketing Cloud Engagement Admin. Platform setup, user management, and administration. Complete admin guide ${TITLE_YEAR}.`,
    'marketing-cloud-engagement-developer': `Pass Marketing Cloud Engagement Developer. Automation scripting, journeys, and API integration. Developer study guide ${TITLE_YEAR}.`,
    'marketing-cloud-engagement-foundations': `Start Marketing Cloud Engagement foundation knowledge. Email setup, lists, and basic automation. Beginner study guide ${TITLE_YEAR}.`,
    'marketing-cloud-intelligence-ap': `Earn Marketing Cloud Intelligence AP. Data warehouse, reporting, and analytics. Free study guide ${TITLE_YEAR}.`,
    'marketing-cloud-personalization-ap': `Get Marketing Cloud Personalization AP certified. Web personalization, content targeting, and recommendations. Study guide ${TITLE_YEAR}.`,
    'media-cloud-ap': `Earn Media Cloud AP. Content publishing, digital asset mgmt, and media orchestration. Study guide ${TITLE_YEAR}.`,
    'mulesoft-catalyst-consultant': `Master MuleSoft Catalyst Consultant. Customer success, adoption, and strategic guidance. Consultant study guide ${TITLE_YEAR}.`,
    'mulesoft-developer-i': `Pass MuleSoft Developer I. Integration patterns, connectors, and API design. Free practice questions and study tips ${TITLE_YEAR}.`,
    'mulesoft-developer-ii': `Pass MuleSoft Developer II. Advanced integration, security, and performance. Expert-level study guide ${TITLE_YEAR}.`,
    'mulesoft-integration-architect': `Master MuleSoft Integration Architect. Architecture patterns, governance, and enterprise integration. Design study guide ${TITLE_YEAR}.`,
    'mulesoft-platform-architect': `Ace MuleSoft Platform Architect. Infrastructure, deployments, and platform strategy. Architecture patterns guide ${TITLE_YEAR}.`,
    'net-zero-cloud-ap': `Earn Net Zero Cloud AP. Sustainability tracking, emissions management, and carbon accounting. Green tech study guide ${TITLE_YEAR}.`,
    'nonprofit-cloud': `Master Nonprofit Cloud Consultant. Grant management, constituent engagement, and fundraising. Nonprofit-specific study guide ${TITLE_YEAR}.`,
    'nonprofit-success-pack-consultant': `Pass NPSP (Nonprofit Success Pack) Consultant. Donations, relationships, and nonprofit configuration. Free study guide ${TITLE_YEAR}.`,
    'omnistudio-consultant': `Master OmniStudio Consultant. Omni-channel design, integration, and customer experience. Solution design study guide ${TITLE_YEAR}.`,
    'omnistudio-developer': `Pass OmniStudio Developer. Component development, data handling, and OmniScript. Developer study guide ${TITLE_YEAR}.`,
    'order-management-admin-ap': `Earn Order Management Admin AP. Order operations, fulfillment, and supply chain. Admin study guide ${TITLE_YEAR}.`,
    'order-management-developer-ap': `Get Order Management Developer AP certified. API customization, integrations, and extensions. Developer guide ${TITLE_YEAR}.`,
    'process-automation-ap': `Earn Process Automation AP. Business processes, automation design, and optimization. Free study guide ${TITLE_YEAR}.`,
    'public-sector-solutions-ap': `Get Public Sector Solutions AP certified. Government features, compliance, and citizen engagement. Sector study guide ${TITLE_YEAR}.`,
    'revenue-cloud-consultant': `Master Revenue Cloud Consultant. Billing cycles, revenue recognition, and order mgmt. Enterprise billing study guide ${TITLE_YEAR}.`,
    'sales-foundations': `Start Sales Foundation. Sales fundamentals, CRM basics, and customer management. Beginner study guide ${TITLE_YEAR}.`,
    'service-cloud': `Master Service Cloud Consultant. Case management, knowledge base, and customer service. Complete study guide + exam tips ${TITLE_YEAR}.`,
    'slack-administrator': `Master Slack Administrator. Workspace setup, user management, and governance. Admin study guide with best practices ${TITLE_YEAR}.`,
    'slack-consultant': `Become Slack Consultant. Slack strategy, integration design, and adoption. Solution design guide ${TITLE_YEAR}.`,
    'strategy-designer': `Master Platform Strategy Designer. Strategy frameworks, go-to-market, and digital transformation. Strategy study guide ${TITLE_YEAR}.`,
    'tableau-architect': `Ace Tableau Architect. Architecture design, governance, and enterprise analytics. Design patterns guide ${TITLE_YEAR}.`,
    'tableau-consultant': `Master Tableau Consultant. Dashboard design, analytics, and visualization. Complete study guide with examples ${TITLE_YEAR}.`,
    'tableau-desktop-foundations': `Start Tableau Desktop foundation knowledge. Dashboard basics, data visualization, and setup. Beginner guide ${TITLE_YEAR}.`,
    'tableau-server-administrator': `Master Tableau Server Admin. Server setup, user management, and governance. Complete admin guide ${TITLE_YEAR}.`,
    'technical-architect-evaluation': `Pass CTA Evaluation. Scenario-based exam, architectural decisions, and design justification. Exam strategy guide ${TITLE_YEAR}.`,
    'ux-designer': `Master Salesforce UX Designer. Design thinking, user experience, and interface design. Complete design study guide ${TITLE_YEAR}.`,
  }
  const override = ctrDescriptionOverrides[slug]
  if (override) {
    return finalizeMetaDescription(override)
  }
  const templates: Record<string, string> = {
    // Associate (strong CTR: weightage, passing score, Updated 2026)
    'platform-foundations':
      'Prepare for the Salesforce Certified Platform Foundations certification (2026). $75 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'ai-associate':
      'Prepare for the Salesforce Certified AI Associate certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'marketing-cloud-engagement-foundations':
      'Prepare for the Salesforce Certified Marketing Cloud Engagement Foundations certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'mulesoft-integration-foundations':
      'Prepare for the Salesforce Certified MuleSoft Integration Foundations certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    // Administrator track (base certs – strong CTR for people who start here)
    administrator:
      'Prepare for the Salesforce ADM-201 exam with updated 2026 objectives, section-wise weightage, exam tips, and free practice questions. Start your mock test today — no sign-up required.',
    'advanced-administrator':
      'Prepare for the Salesforce Certified Advanced Administrator (ADM-211) certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'app-builder':
      'No-code Salesforce certification. DEV-402 exam guide 2026: $200 fee, 60 questions, declarative app building. Perfect for admins ready to build custom apps. Free practice questions.',
    'agentforce-specialist':
      'Prepare for the Salesforce Certified Agentforce Specialist certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'business-analyst':
      'Prepare for the Salesforce Certified Business Analyst certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'cpq-administrator':
      'Prepare for the Salesforce Certified CPQ Administrator certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'marketing-cloud-engagement-admin':
      'Prepare for the Salesforce Certified Marketing Cloud Engagement Admin certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'slack-administrator':
      'Prepare for the Salesforce Certified Slack Administrator certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'administrator-practice-test':
      'ADM-201 practice test: real-style questions, section weightage, passing score. Free. Updated 2026. Test yourself before the exam.',
    // Developer track (strong CTR: numbers, passing score, cost, Updated 2026)
    'developer-1':
      'Coding-focused Salesforce certification. PD1 exam guide 2026: $200 fee, 60 questions, Apex, triggers, SOQL, and Lightning Web Components. Required for architect paths. Free practice questions.',
    'developer-2':
      'Prepare for the Salesforce Certified Platform Developer II (PD2) certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'javascript-developer-i':
      'Prepare for the Salesforce Certified JavaScript Developer I certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'b2c-commerce-developer':
      'Prepare for the Salesforce Certified B2C Commerce Developer certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'industries-cpq-developer':
      'Prepare for the Salesforce Certified Industries CPQ Developer certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'marketing-cloud-engagement-developer':
      'Prepare for the Salesforce Certified Marketing Cloud Engagement Developer certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'mulesoft-developer-i':
      'Prepare for the Salesforce Certified MuleSoft Developer I certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'mulesoft-developer-ii':
      'Prepare for the Salesforce Certified MuleSoft Developer II certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'mulesoft-hyperautomation-developer':
      'Prepare for the Salesforce Certified MuleSoft Hyperautomation Developer certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'omnistudio-developer':
      'Prepare for the Salesforce Certified OmniStudio Developer certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'slack-developer':
      'Prepare for the Salesforce Certified Slack Developer certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    // Consultant track (strong CTR: numbers, passing score, cost, Updated 2026)
    'crm-analytics-einstein-discovery-consultant':
      'Prepare for the Salesforce Certified CRM Analytics & Einstein Discovery Consultant certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'data-cloud-consultant':
      'Prepare for the Salesforce Certified Data Cloud Consultant certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'education-cloud-consultant':
      'Prepare for the Salesforce Certified Education Cloud Consultant certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'experience-cloud':
      'Prepare for the Salesforce Certified Experience Cloud Consultant certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'field-service':
      'Prepare for the Salesforce Certified Field Service Consultant certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'pardot-consultant':
      'Prepare for the Salesforce Certified Pardot (Account Engagement) Consultant certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'marketing-cloud-consultant':
      'Prepare for the Salesforce Certified Marketing Cloud Engagement Consultant certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'nonprofit-cloud':
      'Prepare for the Salesforce Certified Nonprofit Cloud Consultant certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'nonprofit-success-pack-consultant':
      'Prepare for the Salesforce Certified Nonprofit Success Pack (NPSP) Consultant certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'omnistudio-consultant':
      'Prepare for the Salesforce Certified OmniStudio Consultant certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'revenue-cloud-consultant':
      'Prepare for the Salesforce Certified Revenue Cloud Consultant certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'sales-cloud':
      'Prepare for the Salesforce Certified Sales Cloud Consultant certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'service-cloud':
      'Prepare for the Salesforce Certified Service Cloud Consultant certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'slack-consultant':
      'Prepare for the Salesforce Certified Slack Consultant certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    // Marketing (strong CTR)
    'email-specialist':
      'Prepare for the Salesforce Certified Marketing Cloud Email Specialist certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'pardot-specialist':
      'Prepare for the Salesforce Certified Pardot (Account Engagement) Specialist certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'email-specialist-practice-test':
      'Email Specialist practice test: real-style questions, weightage, passing score. Free. Updated 2026. Start free.',
    // Architect (Prepare for… format) - $400
    'application-architect':
      'Prepare for the Salesforce Certified Application Architect certification (2026). $400 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'data-architect':
      'Prepare for the Salesforce Certified Data Architect certification (2026). $400 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'integration-architect':
      'Prepare for the Salesforce Certified Integration Architect certification (2026). $400 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'sharing-visibility-architect':
      'Prepare for the Salesforce Certified Sharing and Visibility Architect certification (2026). $400 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'system-architect':
      'Prepare for the Salesforce Certified System Architect certification (2026). $400 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'identity-access-management-architect':
      'Prepare for the Salesforce Certified Identity and Access Management Architect certification (2026). $400 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'dev-lifecycle-deployment-architect':
      'Prepare for the Salesforce Certified Dev Lifecycle and Deployment Architect certification (2026). $400 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'technical-architect':
      'Prepare for the Salesforce Certified Technical Architect (CTA) certification (2026). $6000 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'technical-architect-evaluation':
      'Prepare for the CTA Architect Evaluation (2026). $6000 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'technical-architect-review-board':
      'Prepare for the CTA Architect Review Board (2026). Practice questions and study materials to help you pass.',
    'b2b-solution-architect':
      'Prepare for the Salesforce Certified B2B Solution Architect certification (2026). $400 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'b2c-commerce-architect':
      'Prepare for the Salesforce Certified B2C Commerce Architect certification (2026). $400 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'b2c-solution-architect':
      'Prepare for the Salesforce Certified B2C Solution Architect certification (2026). $400 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'heroku-architect':
      'Prepare for the Salesforce Certified Heroku Architect certification (2026). $400 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'mulesoft-catalyst-consultant':
      'Prepare for the Salesforce Certified MuleSoft Catalyst Consultant certification (2026). $400 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'mulesoft-platform-architect':
      'Prepare for the Salesforce Certified MuleSoft Platform Architect certification (2026). $400 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'mulesoft-integration-architect':
      'Prepare for the Salesforce Certified MuleSoft Integration Architect certification (2026). $400 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    // Accredited Professional (Prepare for… format; shorten long names to stay ≤160) - $100
    'advanced-field-service-ap':
      'Prepare for the Salesforce Certified Advanced Field Service AP certification (2026). $100 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'b2b-commerce-admin-ap':
      'Prepare for the Salesforce Certified B2B Commerce Admin AP certification (2026). $100 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'b2b-commerce-developer-ap':
      'Prepare for the Salesforce Certified B2B Commerce Developer AP certification (2026). $100 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'communications-cloud-ap':
      'Prepare for the Salesforce Certified Communications Cloud AP certification (2026). $100 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'consumer-goods-cloud-ap':
      'Prepare for the Salesforce Certified Consumer Goods Cloud AP certification (2026). $100 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'consumer-goods-tpm-ap':
      'Prepare for the Salesforce Certified Consumer Goods TPM AP certification (2026). $100 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'contact-center-ap':
      'Prepare for the Salesforce Certified Contact Center AP certification (2026). $100 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'cpq-billing-ap':
      'Prepare for the Salesforce Certified CPQ and Billing AP certification (2026). $100 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'energy-utilities-ap':
      'Prepare for the Salesforce Certified Energy and Utilities Cloud AP certification (2026). $100 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'financial-services-cloud-ap':
      'Prepare for the Salesforce Certified Financial Services Cloud AP certification (2026). $100 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'health-cloud-ap':
      'Prepare for the Salesforce Certified Health Cloud AP certification (2026). $100 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'heroku-developer-ap':
      'Prepare for the Salesforce Certified Heroku Developer AP certification (2026). $100 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'loyalty-management-ap':
      'Prepare for the Salesforce Certified Loyalty Management AP certification (2026). $100 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'manufacturing-cloud-ap':
      'Prepare for the Salesforce Certified Manufacturing Cloud AP certification (2026). $100 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'marketing-cloud-advanced-cross-channel-ap':
      'Prepare for the Salesforce Certified Marketing Cloud Advanced Cross Channel AP certification (2026). $100 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'marketing-cloud-intelligence-ap':
      'Prepare for the Salesforce Certified Marketing Cloud Intelligence AP certification (2026). $100 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'marketing-cloud-personalization-ap':
      'Prepare for the Salesforce Certified Marketing Cloud Personalization AP certification (2026). $100 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'media-cloud-ap':
      'Prepare for the Salesforce Certified Media Cloud AP certification (2026). $100 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'net-zero-cloud-ap':
      'Prepare for the Salesforce Certified Net Zero Cloud AP certification (2026). $100 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'order-management-admin-ap':
      'Prepare for the Salesforce Certified Order Management Admin AP certification (2026). $100 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'order-management-developer-ap':
      'Prepare for the Salesforce Certified Order Management Developer AP certification (2026). $100 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'process-automation-ap':
      'Prepare for the Salesforce Certified Process Automation AP certification (2026). $100 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'public-sector-solutions-ap':
      'Prepare for the Salesforce Certified Public Sector Solutions AP certification (2026). $100 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    // Sales
    'sales-foundations':
      'Prepare for the Salesforce Certified Sales Foundations certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    // Designer
    'strategy-designer':
      'Prepare for the Salesforce Certified Platform Strategy Designer certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'ux-designer':
      'Prepare for the Salesforce Certified UX Designer certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    // Tableau - $250 (except Desktop Foundations $100)
    'tableau-architect': 'Salesforce Tableau Architect',
    'tableau-consultant': 'Salesforce Tableau Consultant',
    'tableau-data-analyst': 'Salesforce Tableau Data Analyst',
    'tableau-desktop-foundations':
      'Prepare for the Salesforce Certified Tableau Desktop Foundations certification (2026). $100 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
    'tableau-server-administrator':
      'Prepare for the Salesforce Certified Tableau Server Administrator certification (2026). $250 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.',
  }
  const custom = templates[slug]
  // Keep custom templates only for practice-test pages; otherwise use the standardized description
  // so all certification pages follow the same meta format as ADM-201.
  if (custom && slug.endsWith('-practice-test')) {
    // Replace placeholder cost if present, or add cost for non-template certs
    const withCost = custom.includes('exam fee') ? custom : custom.replace('Exam weightage', `${examCost} exam fee, exam weightage`)
    return finalizeMetaDescription(withCost)
  }
  const primaryName = getCertPrimaryName(slug, certName)
  const standardized = `Prepare for the ${primaryName}${examCode ? ` (${examCode})` : ''} exam with a ${TITLE_YEAR}-updated study guide, section-wise weightage, and free practice questions. No sign-up required.`
  const desc =
    formerName && standardized.length < 145
      ? `${primaryName}${examCode ? ` (${examCode})` : ''}—formerly ${formerName}. ${standardized}`
      : standardized
  
  const finalDesc = finalizeMetaDescription(desc)
  
  // Safety guard: ensure we never return undefined (per AI recommendation)
  // This prevents Next.js from silently dropping the meta description tag
  return (
    finalDesc ??
    `Prepare for the Salesforce ${certName} certification. Practice questions, exam weightage, and study guide.`
  )
}

/** SEO metadata for a certification page: unique title <60 chars (absolute), description 140–160, canonical. */
export function getCertMetadata(slug: string): Metadata {
  const certName = slugToDisplayName(slug)
  const examCode = SLUG_TO_EXAM_CODE[slug]
  const titleForMeta = getCertMetaTitle(slug)
  const descForMeta = getCertMetaDescription(slug)
  const canonicalUrl = `${baseUrl}/certifications/${slug}`
  const primaryName = getCertPrimaryName(slug, certName)
  const formerNameForKeywords = getCertFormerName(slug)
  const keywords =
    slug === 'administrator'
      ? `ADM-201 practice test free, ADM-201 mock exam ${TITLE_YEAR}, ADM-201 exam questions, ADM-201 weightage, Salesforce Certified Platform Administrator, ADM-201 study guide, Salesforce admin exam, ADM-201 free practice test, is ADM-201 hard, ADM-201 dumps alternative`
      : `${primaryName}, Salesforce certification, practice questions, exam weightage, study guide${examCode ? `, ${examCode}` : ''}${formerNameForKeywords ? `, ${formerNameForKeywords}` : ''}`
  // Updated 2026 for title/H1 and E-E-A-T
  const publishedTime = '2025-01-01T00:00:00Z'
  const modifiedTime = '2026-02-12T00:00:00Z'
  
  return {
    title: { absolute: titleForMeta },
    description: descForMeta,
    keywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: titleForMeta,
      description: descForMeta,
      type: 'article',
      url: canonicalUrl,
      publishedTime,
      modifiedTime,
      images: [
        {
          url: `${baseUrl}/og-image`,
          width: 1200,
          height: 630,
          alt: `${primaryName} - Practice Questions & Study Guide`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titleForMeta,
      description: descForMeta,
      images: [`${baseUrl}/og-image`],
    },
    other: {
      'article:published_time': publishedTime,
      'article:modified_time': modifiedTime,
    },
  }
}

export interface BreadcrumbItem {
  name: string
  url: string
}

/**
 * Breadcrumb items for a certification page.
 * With role: Home > Certifications > [Role] > Cert Name (links to role hub and All Certifications).
 * Without role: Home > Certifications > Cert Name.
 */
export function getCertBreadcrumb(
  slug: string,
  certTitle: string,
  roleSlug?: string,
  roleName?: string
): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [
    { name: 'Home', url: baseUrl },
    { name: 'Certifications', url: `${baseUrl}/certifications` },
  ]
  if (roleSlug && roleName) {
    items.push({ name: roleName, url: `${baseUrl}/certifications/role/${roleSlug}` })
  }
  items.push({ name: certTitle, url: `${baseUrl}/certifications/${slug}` })
  return items
}

export interface FaqItem {
  question: string
  answer: string
}

/** Default FAQ for any certification page (2–3 questions for FAQPage schema) */
function getCertFaqName(slug: string, certTitle: string): string {
  const primary = getCertPrimaryName(slug, certTitle)
  const code = SLUG_TO_EXAM_CODE[slug]
  return code ? `${primary} (${code})` : primary
}

// Cert-specific FAQs - unique questions per certification for SEO
const CERT_SPECIFIC_FAQS: Record<string, FaqItem[]> = {
  administrator: [
    {
      question: 'What is the Salesforce Administrator (ADM-201) passing score in Winter \'26?',
      answer: 'The ADM-201 passing score is 65%, which means you need at least 39 correct answers out of 60 scored questions. You get 105 minutes, and Salesforce may include 5 unscored pilot questions in the exam session.',
    },
    {
      question: 'What is the ADM-201 exam fee in Winter \'26?',
      answer: 'The Salesforce Certified Platform Administrator (ADM-201) exam fee is typically $200 USD, and the retake fee is usually $100 USD. Fees can vary by country taxes, so confirm the final amount in your Salesforce certification checkout page.',
    },
    {
      question: 'How many questions are on the ADM-201 exam, and what is the passing score?',
      answer: 'The ADM-201 exam has 60 multiple-choice questions. You have 105 minutes and need 65% (39 correct answers) to pass. There are also 5 unscored pilot questions, so your actual exam will have 65 questions.',
    },
    {
      question: 'Can I use ADM-201 exam dumps to pass?',
      answer: 'Exam dumps violate the Salesforce certification NDA and can result in your certification being revoked. More importantly, dumps are often outdated and don\'t help you learn the material. Original practice questions with detailed explanations are a safer and more effective way to prepare.',
    },
    {
      question: 'How long should I study for the ADM-201 exam?',
      answer: 'Most candidates study for 4–6 weeks with a structured plan. Focus on high-weight sections first (Configuration and Setup at 20%, Object Manager and Lightning App Builder at 20%). Use Trailhead modules, hands-on practice, and mock exams to gauge readiness.',
    },
    {
      question: 'Is there a prerequisite for the Salesforce Certified Platform Administrator exam?',
      answer: 'There is no formal prerequisite for ADM-201. Salesforce recommends hands-on admin experience and completing foundational Trailhead modules before booking the exam.',
    },
    {
      question: 'How many ADM-201 questions are scenario-based?',
      answer: 'Roughly 40–50% of ADM-201 questions are scenario-based. These present a business situation and ask you to choose the best admin action. The remaining questions test direct knowledge of features, limits, and configuration options. Practice with scenario-style questions to build this skill.',
    },
    {
      question: 'Is ADM-201 harder than Platform App Builder (DEV-402)?',
      answer: 'ADM-201 is generally considered slightly easier than Platform App Builder because it covers foundational admin topics without deep customization. App Builder goes deeper into data modeling, Lightning components, and business logic. However, ADM-201 is broader — you need to know a little about many topics across 7 exam sections.',
    },
    {
      question: 'What is the best way to pass the ADM-201 exam on the first attempt?',
      answer: 'Focus on high-weight sections first (Configuration & Setup and Object Manager together are 40%). Practice in a free Developer Edition org. Take timed mock exams and aim for 75%+ before booking. Review wrong answers deeply — understand why each wrong option is wrong, not just which is correct. Complete the official Trailhead preparation trail.',
    },
    {
      question: 'What are the 7 exam sections for ADM-201 and which have the highest weight?',
      answer: 'The 7 sections are: (1) Configuration and Setup (20%), (2) Object Manager and Lightning App Builder (20%), (3) Workflow and Process Automation (15%), (4) Data and Analytics Management (10%), (5) Sales and Marketing Applications (10%), (6) Service and Support Applications (15%), and (7) Productivity and Collaboration (10%). Configuration and Object Manager together account for 40% of the exam.',
    },
    {
      question: 'What is sharing in Salesforce and how is it different from permissions?',
      answer: 'Permissions control what a user can do across the org (e.g., create records, edit fields). Sharing controls who can see and edit specific records. Users must have permission first, then sharing rules (role hierarchy, sharing rules, manual sharing, team sharing) determine which records they can access.',
    },
    {
      question: 'What is the difference between a role hierarchy and sharing rules in Salesforce?',
      answer: 'Role hierarchy determines automatic record access based on reporting structure—users above someone in the hierarchy can always see their records. Sharing rules allow you to grant access to records based on criteria (e.g., all accounts in a region) or public groups regardless of hierarchy.',
    },
    {
      question: 'What are org-wide defaults (OWD) and why are they important?',
      answer: 'Org-wide defaults set the baseline sharing level for each object. Options are: Private (only owner and high-hierarchy users), Public Read-Only (everyone can read), or Public Read/Write. You typically set OWD to Private then use sharing rules and roles to grant appropriate access—this is considered best practice.',
    },
    {
      question: 'What is the difference between a workflow rule and a flow in Salesforce?',
      answer: 'Workflow Rules (legacy) automate simple, record-change triggered actions like field updates and email alerts. Flows (current) are more powerful and flexible—they support complex business logic, multiple triggers, and can update multiple objects. Salesforce recommends using Flows for new automation rather than Workflows.',
    },
    {
      question: 'What is a Lightning App and when should I create one?',
      answer: 'A Lightning App is a collection of Lightning pages, tabs, and components that work together for a specific business function. Create a Lightning App when you want to give users a focused experience for a particular role or business process (e.g., Sales App, Support App). Apps appear in the app launcher.',
    },
    {
      question: 'How do I make a Salesforce org compliant with GDPR and data privacy laws?',
      answer: 'Key steps: (1) Enable Shield Platform Encryption for sensitive data, (2) Set data access policies and retention, (3) Implement field-level security, (4) Use sharing rules to limit access, (5) Enable audit trails and login monitoring, (6) Create data deletion and export processes, (7) Document data handling in your privacy policy.',
    },
  ],
  'app-builder': [
    {
      question: 'What is the difference between Platform Administrator and Platform App Builder certifications?',
      answer: 'Platform Administrator focuses on day-to-day administration, security, and user management. Platform App Builder focuses on declarative development—building custom applications using clicks, not code. App Builder is ideal for those who want to build custom apps without programming.',
    },
    {
      question: 'What is the DEV-402 exam fee and passing score in Winter \'26?',
      answer: 'The Platform App Builder (DEV-402) exam fee is generally $200 USD with a typical retake fee of $100 USD, and the passing score is 63%. Always verify the latest fee and policy details in your Salesforce certification account before booking.',
    },
    {
      question: 'How many questions are on the DEV-402 App Builder exam?',
      answer: 'The DEV-402 exam has 60 multiple-choice questions, with 5 unscored pilot questions. You have 105 minutes, and you need 63% to pass (approximately 38 correct answers out of 60).',
    },
    {
      question: 'What topics are covered in Platform App Builder (DEV-402)?',
      answer: 'The exam covers Data Modeling (20%), Process Automation (25%), User Interface (20%), Testing, Debugging & Source Control (10%), and Security & Deployment (25%). Focus on hands-on experience with Lightning Pages, Flows, and Formula/Rollup Fields.',
    },
    {
      question: 'Do I need Platform Administrator before taking Platform App Builder?',
      answer: 'There is no official prerequisite, but Salesforce strongly recommends having Platform Administrator certification and solid admin experience first. App Builder builds on admin concepts, and you\'ll be much better prepared with admin knowledge.',
    },
    {
      question: 'What is the difference between a formula field and a rollup summary field?',
      answer: 'A Formula Field calculates values based on fields within the same record (e.g., quantity × price = total). A Rollup Summary Field summarizes values from related records in a master-detail relationship (e.g., sum of opportunities on an account). Choose rollup for cross-record calculations.',
    },
    {
      question: 'What is a Lightning Page and how is it different from a custom Visualforce page?',
      answer: 'Lightning Pages (declarative) are built by dragging and dropping components—no coding needed. Visualforce pages (coded) require programming knowledge. Lightning Pages are the modern approach; Salesforce is moving away from Visualforce.',
    },
    {
      question: 'What is the difference between a regulated field and a standard field in Salesforce?',
      answer: 'Standard fields are created by Salesforce and cannot be deleted or renamed. Custom fields (including regulated fields) are created by you and can be modified. You can create custom fields but pay attention to field types (text, number, picklist, etc.) since some cannot be changed after creation.',
    },
    {
      question: 'How do Flows work and when should I use them instead of Workflows?',
      answer: 'Flows are a visual, no-code tool that automate complex business processes. They can handle multiple decision branches, involve multiple objects, and trigger on various events. Workflows are deprecated—Salesforce recommends Flows for all new automation.',
    },
    {
      question: 'What are the best practices for DEV-402 exam preparation?',
      answer: 'Practice in a real Salesforce org (use free Developer Edition). Build sample apps with custom objects, flows, and Lightning Pages. Study high-weight topics (Process Automation 25%, Security & Deployment 25%). Take practice exams to identify weak spots and aim for 75%+ before booking.',
    },
  ],
  'sales-cloud': [
    {
      question: 'Is the Sales Cloud Consultant certification required for consulting roles?',
      answer: 'While not always required, the Sales Cloud Consultant certification is highly valued for consulting and implementation roles. It demonstrates expertise in designing and implementing Sales Cloud solutions, which is essential for client-facing positions.',
    },
    {
      question: 'What experience do I need before taking the Sales Cloud Consultant exam?',
      answer: 'Salesforce recommends having the Platform Administrator certification and hands-on experience implementing Sales Cloud solutions. You should be comfortable with lead management, opportunity management, forecasting, and territory management.',
    },
    {
      question: 'What is the Sales Cloud Consultant passing score and exam fee in Winter \'26?',
      answer: 'The Sales Cloud Consultant exam has 60 multiple-choice questions, 105 minutes, and a passing score of 65%. The exam fee is $200 USD (retake $100 USD). Salesforce may include 5 unscored pilot questions in the session.',
    },
    {
      question: 'What are the highest-weight topics on the Sales Cloud Consultant exam?',
      answer: 'The highest-weight sections are Industry Knowledge (15%), Implementation Strategies (15%), Sales Cloud Solution Design (20%), and Marketing and Leads (15%). Together these cover 65% of the exam. Focus on lead-to-opportunity conversion, territory management, forecasting, and campaign influence.',
    },
    {
      question: 'How is Sales Cloud Consultant different from Platform Administrator?',
      answer: 'Platform Administrator (ADM-201) tests broad admin operations — security, automation, and org setup. Sales Cloud Consultant focuses on designing and implementing sales process solutions for clients: lead management, pipeline, forecasting, territory hierarchies, and marketing campaign integration. The Consultant exam is more scenario-heavy and solution-design oriented.',
    },
  ],
  'service-cloud': [
    {
      question: 'What topics are most important for the Service Cloud Consultant exam?',
      answer: 'Solution Design (25%) is the largest section, followed by Case and Knowledge Management, Omnichannel, and Service Analytics. Focus on understanding how to design service solutions that meet business requirements, configure case management, and set up knowledge bases.',
    },
    {
      question: 'Do I need the Platform Administrator certification before Service Cloud Consultant?',
      answer: 'Yes, Salesforce requires the Platform Administrator certification as a prerequisite for the Service Cloud Consultant exam. You should also have hands-on experience configuring Service Cloud features like cases, knowledge, and Omnichannel.',
    },
    {
      question: 'What is the Service Cloud Consultant passing score and exam fee in Winter \'26?',
      answer: 'The Service Cloud Consultant exam has 60 multiple-choice questions, 105 minutes, and a passing score of 67%. The exam fee is $200 USD (retake $100 USD). Salesforce may include 5 unscored pilot questions.',
    },
    {
      question: 'What are the highest-weight sections in the Service Cloud Consultant exam?',
      answer: 'The top sections by weight are: Service Cloud Solution Design (17%), Case Management (15%), and Contact Center Analytics (16%). Focus on Omni-Channel routing, entitlements and SLAs, Knowledge base setup, case escalation rules, and CTI integration patterns.',
    },
    {
      question: 'What is the difference between Service Cloud Consultant and Platform Administrator?',
      answer: 'Platform Administrator covers general Salesforce admin skills. Service Cloud Consultant is focused on designing customer service solutions: cases, entitlements, SLAs, knowledge articles, Omni-Channel, live chat, and reporting for contact centers. The Consultant exam is more architecture and best-practice oriented.',
    },
  ],
  'developer-1': [
    {
      question: 'What programming languages do I need to know for Platform Developer I?',
      answer: 'You need to know Apex (Salesforce\'s Java-like language) and JavaScript for Lightning Web Components. Experience with Java, C#, or similar object-oriented languages is helpful, but you can learn Apex through Trailhead and hands-on practice.',
    },
    {
      question: 'How much coding experience do I need for Platform Developer I?',
      answer: 'While some programming experience is helpful, you can learn Apex and Lightning Web Components through Trailhead. The exam focuses on understanding when to use code vs declarative tools, governor limits, testing, and basic Apex/LWC concepts rather than advanced programming.',
    },
    {
      question: 'What is the PD1 passing score and exam format in Winter \'26?',
      answer: 'The Platform Developer I (PD1) exam has 60 multiple-choice questions, 110 minutes, and a passing score of 68% (41 correct). Salesforce may include 5 unscored pilot questions. The exam costs $200 USD (retake $100 USD) and is available online-proctored or at a test center.',
    },
    {
      question: 'What are the most common reasons candidates fail PD1?',
      answer: 'Common failure points: (1) not knowing governor limits (SOQL 100/transaction, DML 150/transaction) and when they trigger, (2) writing DML or SOQL inside a for loop — the exam\'s most common trap, (3) misunderstanding the 75% code coverage rule and how Test.startTest()/stopTest() affect limit resets, and (4) confusing @AuraEnabled, @RestResource, and @InvocableMethod annotations.',
    },
    {
      question: 'How long should I study for PD1 and what mock score means I am ready?',
      answer: 'Most candidates with some object-oriented programming background need 4–6 weeks. Target benchmark: score 78%+ on three timed full mocks (60 Q / 110 min), taken one week apart. The actual passing threshold is 68%, but the extra buffer accounts for exam nerves and unfamiliar phrasing on the day.',
    },
  ],
  'data-architect': [
    {
      question: 'What certifications do I need before Data Architect?',
      answer: 'You need both Application Architect and System Architect certifications before you can earn the Data Architect credential. The Data Architect certification is part of the Technical Architect path.',
    },
    {
      question: 'How difficult is the Data Architect certification?',
      answer: 'The Data Architect certification is advanced-level and requires deep knowledge of data modeling, LDV (Large Data Volume), identity management, and integration patterns. It\'s one of the most challenging Salesforce certifications and requires years of implementation experience.',
    },
  ],
  'technical-architect': [
    {
      question: 'What is the difference between Technical Architect Evaluation and Review Board?',
      answer: 'The Technical Architect Evaluation is a written exam with scenario-based and multiple-choice questions. The Review Board is a presentation where you design a solution for a scenario and defend it before a board of CTAs. You must pass the Evaluation before taking the Review Board.',
    },
    {
      question: 'How long does it take to become a Certified Technical Architect (CTA)?',
      answer: 'Most candidates take 1-2 years after earning Application Architect and System Architect. The CTA path requires extensive experience, multiple certifications, and significant preparation for both the Evaluation and Review Board.',
    },
  ],
  'ai-associate': [
    {
      question: 'Do I need technical experience for the AI Associate certification?',
      answer: 'No, the AI Associate certification is designed for business users and doesn\'t require technical or programming experience. It focuses on understanding AI concepts, Einstein capabilities, and responsible AI practices.',
    },
    {
      question: 'What Salesforce products are covered in the AI Associate exam?',
      answer: 'The exam covers Einstein capabilities across Sales Cloud, Service Cloud, Marketing Cloud, and Commerce Cloud. You should understand what each Einstein product does, when to use it, and responsible AI principles.',
    },
    {
      question: 'What is the AI Associate passing score and exam fee in Winter \'26?',
      answer: 'The Salesforce AI Associate exam has 40 multiple-choice questions, 70 minutes, and a passing score of 62%. The exam fee is $200 USD (retake $100 USD). It is an associate-level credential with no formal prerequisite.',
    },
    {
      question: 'Is the AI Associate exam technical or conceptual?',
      answer: 'The AI Associate exam is primarily conceptual, not technical. It tests whether you understand AI terminology (machine learning, NLP, predictive AI, generative AI), Salesforce Einstein product categories, and responsible AI principles like bias, transparency, and data privacy. You do not need to write code or configure AI models.',
    },
    {
      question: 'What are the three pillars of responsible AI that appear on the AI Associate exam?',
      answer: 'The AI Associate exam emphasises Salesforce\'s Trusted AI principles: (1) Responsible — ensuring AI is designed and used ethically, (2) Accountable — maintaining human oversight of AI decisions, and (3) Transparent — making AI reasoning understandable. Expect questions on bias mitigation, data governance, and when AI output should be reviewed by a human.',
    },
  ],
  'platform-foundations': [
    {
      question: 'Is Platform Foundations a good starting point for Salesforce certifications?',
      answer: 'Yes, Platform Foundations is designed as an entry-level certification for users with up to 6 months of experience. It validates foundational knowledge and is often a stepping stone to the Platform Administrator certification.',
    },
    {
      question: 'What topics are covered in the Platform Foundations exam?',
      answer: 'The exam covers Customer 360 Platform basics, navigation and data model (Account, Contact, Lead, Opportunity), and reports and dashboards. It\'s a broad overview rather than deep technical knowledge.',
    },
  ],
  // Additional certifications
  'advanced-administrator': [
    {
      question: 'What is the difference between Platform Administrator and Advanced Administrator?',
      answer: 'Platform Administrator focuses on core administration tasks. Advanced Administrator covers advanced topics like complex sharing scenarios, advanced automation, cross-object reporting, and organization-wide settings. You need Platform Administrator first.',
    },
    {
      question: 'How much experience do I need for Advanced Administrator?',
      answer: 'Salesforce recommends having the Platform Administrator certification and 12+ months of admin experience. You should be comfortable with complex sharing, advanced automation, and cross-object functionality.',
    },
    {
      question: 'What is the passing score and exam fee for ADM-211?',
      answer: 'The Advanced Administrator (ADM-211) certification has a passing score of 64% and exam fee of typically $200 USD (retake $100 USD). The exam consists of 60 multiple-choice questions with 105 minutes allowed.',
    },
    {
      question: 'What topics are covered in the ADM-211 Advanced Administrator exam?',
      answer: 'Topics include: Advanced Sharing (SharingReasons, PermissionSetGroups), Advanced Automation (decision trees, dynamic flows), Multi-org and Portal Administration, Advanced Reporting (cross-object filters), Territory Management, and Advanced System Monitoring.',
    },
    {
      question: 'What is the difference between a sharing rule and manual sharing in Salesforce?',
      answer: 'Sharing Rules automate access for groups of records based on criteria (e.g., all accounts in a region). Manual Sharing allows individual record access to be granted to a specific user temporarily. Use sharing rules for consistent policies; use manual sharing for exceptions.',
    },
    {
      question: 'What are Permission Set Groups and when should I use them?',
      answer: 'Permission Set Groups bundle multiple Permission Sets together for easier management. Instead of assigning 5 separate Permission Sets individually, you assign 1 group. Use them when multiple users need the same combination of permissions. They simplify large-scale permission management.',
    },
    {
      question: 'What is territory management in Salesforce and why is it important?',
      answer: 'Territory Management lets you assign opportunity records to multiple users through territory rules independent of role hierarchy. It\'s used when sales reps in different regions should own the same types of opportunities. Complex but important for large sales orgs.',
    },
    {
      question: 'How do I optimize Salesforce org performance?',
      answer: 'Key tactics: (1) Archive old records to reduce data volume, (2) Optimize rollup summary fields and formulas, (3) Use bulk API for large data operations, (4) Monitor Governor Limits via logs, (5) Use platform cache for frequently accessed data, (6) Monitor storage usage and cleanup old data.',
    },
    {
      question: 'What are Scheduled Actions and how do I use them for automation?',
      answer: 'Scheduled Actions in Flows let you automate tasks at a future time or recurring intervals without code. Examples: send reminder emails every Monday, follow up with leads after 30 days. They replace the need for scheduled jobs or time-dependent workflows.',
    },
    {
      question: 'How do I audit user and system activity in Salesforce?',
      answer: 'Use: (1) Setup Audit Trail (tracks admin changes for 6 months), (2) Field Audit Trail (tracks record changes), (3) Login History (user authentication times), (4) Debug Logs (Apex execution), (5) Event Monitoring (comprehensive activity logging). Enable appropriate tools based on your compliance needs.',
    },
  ],
  'developer-2': [
    {
      question: 'What is the difference between Platform Developer I and Platform Developer II?',
      answer: 'Platform Developer I focuses on basic Apex, LWC, and testing. Platform Developer II covers advanced topics like design patterns, architecture, advanced Apex, async processing, and package development. You need PD1 first.',
    },
    {
      question: 'How difficult is Platform Developer II compared to Developer I?',
      answer: 'Platform Developer II is significantly more challenging. It requires deep understanding of design patterns, architecture decisions, advanced Apex concepts, and best practices. Most candidates need 2+ years of development experience.',
    },
    {
      question: 'What is the PD2 passing score and exam fee in Winter \'26?',
      answer: 'The Platform Developer II (PD2) exam has 60 multiple-choice questions, 120 minutes, and a passing score of 65%. The exam fee is $200 USD (retake $100 USD). PD1 certification is a mandatory prerequisite — you cannot sit PD2 without it.',
    },
    {
      question: 'What design patterns are tested in Platform Developer II?',
      answer: 'PD2 tests applied knowledge of: Singleton (one instance per transaction), Strategy (swappable algorithms), Decorator (extending behaviour), Factory (object creation patterns), and Service Layer / Selector / Domain patterns (FFLib enterprise architecture). Expect scenario questions where you must choose the right pattern for a given constraint.',
    },
    {
      question: 'What is the difference between Future, Batch, Queueable, and Scheduled Apex?',
      answer: 'Future: runs async after the current transaction completes; limited to one record at a time and cannot be chained. Batch: processes large data sets in chunks (up to 50 million records); best for data migration and bulk operations. Queueable: like Future but supports chaining, complex state, and accepts objects. Scheduled: triggers Queueable or Batch at a set time using the Schedulable interface. PD2 expects you to choose the right tool per scenario.',
    },
  ],
  'javascript-developer-i': [
    {
      question: 'Do I need Platform Developer I before JavaScript Developer I?',
      answer: 'While not required, Platform Developer I is highly recommended. JavaScript Developer I focuses specifically on JavaScript, LWC, and Aura, so having PD1 knowledge helps, but you can take it independently if you have strong JavaScript skills.',
    },
    {
      question: 'What JavaScript concepts are most important for JavaScript Developer I?',
      answer: 'Focus on ES6+ features (arrow functions, promises, async/await), DOM manipulation, JavaScript debugging, LWC lifecycle hooks and decorators, and testing with Jest. The exam is heavily JavaScript-focused.',
    },
  ],
  'experience-cloud': [
    {
      question: 'What is Experience Cloud (formerly Community Cloud)?',
      answer: 'Experience Cloud allows you to create branded portals for customers, partners, or employees. It enables self-service, collaboration, and engagement outside your main Salesforce org.',
    },
    {
      question: 'Do I need Platform Administrator before Experience Cloud Consultant?',
      answer: 'Yes, Platform Administrator is required. You should also have hands-on experience configuring Experience Cloud sites, sharing sets, audiences, and community features.',
    },
    {
      question: 'What is the Experience Cloud Consultant passing score and exam fee in Winter \'26?',
      answer: 'The Experience Cloud Consultant exam has 60 multiple-choice questions, 105 minutes, and a passing score of 65%. The exam fee is $200 USD (retake $100 USD). Salesforce may include 5 unscored pilot questions.',
    },
    {
      question: 'What types of Experience Cloud sites are covered in the exam?',
      answer: 'The exam covers Customer Community, Partner Community, and Employee Community site types, plus the differences between Lightning template-based sites and Salesforce Tabs + Visualforce sites. Expect questions on digital experiences for portals, self-service, and partner relationship management (PRM).',
    },
    {
      question: 'What are the highest-weight topics in the Experience Cloud Consultant exam?',
      answer: 'The heaviest sections are: Experience Cloud Configuration (25%) and Sharing, Visibility, and Licensing (20%). Together these account for 45% of the exam. Focus on sharing sets, sharing rules for communities, guest user access, licenses (Customer Community vs Partner Community), and site administration.',
    },
  ],
  'field-service': [
    {
      question: 'What is Field Service Cloud used for?',
      answer: 'Field Service Cloud manages mobile workforce operations including scheduling, dispatch, work orders, service appointments, and mobile execution. It\'s ideal for companies with field technicians or service teams.',
    },
    {
      question: 'Do I need Platform Administrator before Field Service Consultant?',
      answer: 'Yes, Platform Administrator is required. You should also have hands-on experience with Field Service features like scheduling, dispatch, mobile app, and work order management.',
    },
  ],
  'data-cloud-consultant': [
    {
      question: 'What is Data Cloud (formerly Customer Data Platform)?',
      answer: 'Data Cloud unifies customer data from multiple sources, creates a single customer identity, and activates that data across Salesforce clouds for personalized experiences.',
    },
    {
      question: 'What experience do I need for Data Cloud Consultant?',
      answer: 'You should have Salesforce CRM experience and understanding of data management, marketing, or analytics. Hands-on experience with Data Cloud setup, identity resolution, and activation is recommended.',
    },
    {
      question: 'What is the Data Cloud Consultant passing score and exam fee in Winter \'26?',
      answer: 'The Salesforce Data Cloud Consultant exam has 60 multiple-choice questions, 105 minutes, and a passing score of 62%. The exam fee is $200 USD (retake $100 USD). Platform Administrator certification is required.',
    },
    {
      question: 'What is identity resolution in Data Cloud and why does it appear on the exam?',
      answer: 'Identity resolution is the process of matching and merging records from different data sources into a single unified profile (called a Unified Individual). It uses rulesets to reconcile duplicate contacts from CRM, marketing, e-commerce, and other sources. The exam tests how to configure reconciliation rules, match rules, and understand the output — the Unified Individual and its related objects.',
    },
    {
      question: 'What is the difference between a Data Stream and a Data Lake Object in Data Cloud?',
      answer: 'A Data Stream is the ingestion connector that pulls data into Data Cloud from a source (Salesforce CRM, cloud storage, API). A Data Lake Object (DLO) is the raw table where ingested data is stored before mapping. When you map a DLO to a Data Model Object (DMO), the data becomes available for segmentation, activation, and identity resolution.',
    },
  ],
  'crm-analytics-einstein-discovery-consultant': [
    {
      question: 'What is CRM Analytics (formerly Tableau CRM)?',
      answer: 'CRM Analytics is Salesforce\'s analytics platform that provides AI-powered insights, dashboards, and data visualization directly within Salesforce. It includes Einstein Discovery for predictive analytics.',
    },
    {
      question: 'Do I need Tableau experience for CRM Analytics Consultant?',
      answer: 'No, CRM Analytics is different from Tableau. However, understanding data visualization, analytics concepts, and having Salesforce Administrator knowledge is helpful.',
    },
  ],
  'education-cloud-consultant': [
    {
      question: 'What is Education Cloud used for?',
      answer: 'Education Cloud helps educational institutions manage student lifecycle from admissions to graduation, including applications, enrollment, courses, programs, and student engagement.',
    },
    {
      question: 'Do I need education industry experience for Education Cloud Consultant?',
      answer: 'While helpful, it\'s not required. You need Platform Administrator certification and should understand educational processes. Hands-on experience with Education Cloud features is recommended.',
    },
  ],
  'pardot-consultant': [
    {
      question: 'What is the passing score for the Pardot Consultant exam?',
      answer: 'The passing score for the Salesforce Certified Pardot Consultant exam is 68%. The exam consists of 60 multiple-choice questions, and you have 105 minutes to complete it.',
    },
    {
      question: 'Is the Pardot Consultant certification hard?',
      answer: 'The Pardot Consultant exam is considered intermediate to advanced. It tests not just technical knowledge of the platform but also your ability to design strategic marketing automation solutions for complex business requirements.',
    },
    {
      question: 'What are the prerequisites for the Pardot Consultant certification?',
      answer: 'The only official prerequisite for the Pardot Consultant exam is to first hold the Salesforce Certified Pardot Specialist credential.',
    },
    {
      question: 'What is Account Engagement (formerly Pardot)?',
      answer: 'Account Engagement is Salesforce\'s B2B marketing automation platform that helps marketers generate leads, nurture prospects, and measure marketing ROI through integration with Salesforce CRM.',
    },
    {
      question: 'Do I need Platform Administrator before Pardot Consultant?',
      answer: 'Yes, Platform Administrator is required. You should also have hands-on experience with Account Engagement features like lead scoring, automation, email campaigns, and Salesforce integration.',
    },
  ],
  'marketing-cloud-consultant': [
    {
      question: 'What is Marketing Cloud Engagement?',
      answer: 'Marketing Cloud Engagement (formerly Email Studio) is Salesforce\'s email and cross-channel marketing platform for B2C marketing, including email, SMS, push notifications, and journey orchestration.',
    },
    {
      question: 'What experience do I need for Marketing Cloud Consultant?',
      answer: 'You need Platform Administrator certification and hands-on Marketing Cloud experience. You should understand email marketing, journey builder, subscriber management, and cross-channel marketing strategies.',
    },
  ],
  'nonprofit-cloud': [
    {
      question: 'What is Nonprofit Cloud?',
      answer: 'Nonprofit Cloud helps nonprofit organizations manage programs, cases, donations, and engagement. It includes features for program management, case management, and donor engagement.',
    },
    {
      question: 'Do I need nonprofit experience for Nonprofit Cloud Consultant?',
      answer: 'While helpful, it\'s not required. You need Platform Administrator certification and should understand nonprofit operations. Hands-on experience with Nonprofit Cloud or NPSP is recommended.',
    },
  ],
  'nonprofit-success-pack-consultant': [
    {
      question: 'What is the Nonprofit Success Pack (NPSP)?',
      answer: 'NPSP is a free, open-source Salesforce solution for nonprofits that includes data model, automation, and features for managing donors, households, donations, and programs.',
    },
    {
      question: 'What\'s the difference between Nonprofit Cloud and NPSP Consultant?',
      answer: 'Nonprofit Cloud is Salesforce\'s native solution. NPSP is a managed package built on Salesforce. The NPSP Consultant cert focuses on implementing and configuring the NPSP package.',
    },
  ],
  'omnistudio-consultant': [
    {
      question: 'What is OmniStudio?',
      answer: 'OmniStudio is a Salesforce Industries solution that enables declarative development of guided experiences, digital flows, and flexible cards for industry-specific use cases.',
    },
    {
      question: 'Do I need Platform Administrator before OmniStudio Consultant?',
      answer: 'Yes, Platform Administrator is recommended. You should have hands-on experience with OmniStudio features like OmniScripts, FlexCards, and DataRaptors.',
    },
  ],
  'revenue-cloud-consultant': [
    {
      question: 'What is Revenue Cloud?',
      answer: 'Revenue Cloud combines CPQ (Configure, Price, Quote) and Billing to manage the entire quote-to-cash process, including product configuration, pricing, quoting, contracts, and billing.',
    },
    {
      question: 'Do I need CPQ experience for Revenue Cloud Consultant?',
      answer: 'Yes, Revenue Cloud Consultant requires deep CPQ knowledge plus Billing expertise. You should have Platform Administrator certification and hands-on CPQ/Billing experience.',
    },
  ],
  'slack-consultant': [
    {
      question: 'What is Slack integration with Salesforce?',
      answer: 'Slack integration enables teams to collaborate, receive Salesforce notifications, and take actions on Salesforce records directly from Slack channels and workflows.',
    },
    {
      question: 'Do I need Salesforce experience for Slack Consultant?',
      answer: 'Yes, you should understand Salesforce basics and have Slack admin experience. The certification focuses on integrating Slack with Salesforce and designing collaboration solutions.',
    },
  ],
  'slack-administrator': [
    {
      question: 'What does a Slack Administrator do?',
      answer: 'Slack Administrators configure Slack workspaces, manage channels, set up permissions, configure integrations (including Salesforce), and ensure security and compliance.',
    },
    {
      question: 'Do I need Salesforce knowledge for Slack Administrator?',
      answer: 'While helpful, Salesforce knowledge isn\'t required. You need Slack admin experience. However, understanding Salesforce integration is valuable for the exam.',
    },
  ],
  'email-specialist': [
    {
      question: 'What is Marketing Cloud Email Specialist?',
      answer: 'The Email Specialist certification validates skills in Marketing Cloud Email Studio, including email creation, subscriber management, send management, and email analytics.',
    },
    {
      question: 'Do I need Marketing Cloud Consultant before Email Specialist?',
      answer: 'No, Email Specialist is a standalone certification. However, having Marketing Cloud experience and understanding email marketing best practices is essential.',
    },
  ],
  'marketing-cloud-engagement-admin': [
    {
      question: 'What is Marketing Cloud Engagement Admin?',
      answer: 'Marketing Cloud Engagement Admin focuses on administrative tasks like setup, subscriber management, content creation, journey builder, and analytics within Marketing Cloud.',
    },
    {
      question: 'What\'s the difference between Marketing Cloud Admin and Consultant?',
      answer: 'Admin focuses on day-to-day administration and configuration. Consultant focuses on strategy, solution design, and implementing Marketing Cloud solutions for clients.',
    },
  ],
  'marketing-cloud-engagement-foundations': [
    {
      question: 'Is Marketing Cloud Engagement Foundations a good starting point?',
      answer: 'Yes, it\'s an entry-level certification for Marketing Cloud. It covers basics like Marketing Cloud overview, subscriber management, and content creation. No prior Marketing Cloud experience required.',
    },
    {
      question: 'What topics are covered in Marketing Cloud Engagement Foundations?',
      answer: 'The exam covers Marketing Cloud overview (30%), subscriber and data management (35%), and content and sends (35%). It\'s a broad introduction to Marketing Cloud concepts.',
    },
  ],
  'mulesoft-integration-foundations': [
    {
      question: 'What is the exam code and fee for the MuleSoft Certified Integration Foundations Associate?',
      answer: 'The MuleSoft Certified Integration Foundations exam (formerly MuleSoft Associate) has a registration fee of $75 USD. It is identified as the MuleSoft Integration Foundations certification in the Webassessor portal.',
    },
    {
      question: 'What is the passing score and retake policy for the MuleSoft Foundations exam?',
      answer: 'The passing score for the MuleSoft Integration Foundations exam is 70%. If you do not pass on your first attempt, the retake fee is currently free.',
    },
    {
      question: 'How many questions are on the MuleSoft Certified Integration Foundations exam?',
      answer: 'The exam consists of 40 multiple-choice questions, and you have 70 minutes to complete it. It is a proctored, closed-book exam that can be taken online or at a testing center.',
    },
    {
      question: 'Is MuleSoft Integration Foundations a good starting point?',
      answer: 'Yes, it\'s an entry-level certification for MuleSoft. It covers integration concepts, Anypoint Platform basics, and API design. No prior MuleSoft experience required, but basic IT knowledge helps.',
    },
    {
      question: 'What topics are covered in MuleSoft Integration Foundations?',
      answer: 'The exam covers integration concepts (35%), Anypoint Platform basics (35%), and APIs and design (30%). It focuses on concepts rather than deep technical implementation.',
    },
  ],
  'mulesoft-developer-i': [
    {
      question: 'What programming experience do I need for MuleSoft Developer I?',
      answer: 'You need programming experience (Java, JavaScript, or similar). You should understand APIs, data transformation, and basic integration concepts. MuleSoft uses DataWeave for transformations.',
    },
    {
      question: 'What is MuleSoft used for?',
      answer: 'MuleSoft Anypoint Platform enables API-led connectivity, allowing organizations to connect applications, data, and devices through APIs and integration solutions.',
    },
  ],
  'mulesoft-developer-ii': [
    {
      question: 'What is the difference between MuleSoft Developer I and II?',
      answer: 'Developer I focuses on building basic Mule applications and APIs. Developer II covers advanced topics like error handling, performance optimization, API design patterns, and deployment strategies.',
    },
    {
      question: 'Do I need MuleSoft Developer I before Developer II?',
      answer: 'While not strictly required, Developer I is highly recommended. Developer II assumes you have Developer I knowledge and builds on it with advanced concepts.',
    },
  ],
  'mulesoft-hyperautomation-developer': [
    {
      question: 'What is MuleSoft Hyperautomation?',
      answer: 'Hyperautomation combines RPA (Robotic Process Automation), integration, and automation to automate complex business processes across systems.',
    },
    {
      question: 'Do I need RPA experience for Hyperautomation Developer?',
      answer: 'Yes, you should understand RPA concepts and tools. The certification focuses on combining RPA with MuleSoft integration to create end-to-end automation solutions.',
    },
  ],
  'mulesoft-catalyst-consultant': [
    {
      question: 'What does a MuleSoft Catalyst Consultant do?',
      answer: 'MuleSoft Catalyst Consultants help organizations design integration strategies, recommend API-led connectivity approaches, and guide MuleSoft platform adoption.',
    },
    {
      question: 'Do I need MuleSoft Developer certifications before Catalyst Consultant?',
      answer: 'While not required, having MuleSoft Developer knowledge is helpful. The Catalyst Consultant focuses on strategy and consulting rather than deep technical implementation.',
    },
  ],
  'mulesoft-platform-architect': [
    {
      question: 'What is MuleSoft Platform Architect?',
      answer: 'MuleSoft Platform Architect designs integration architectures using Anypoint Platform, focusing on API-led connectivity, platform governance, and enterprise integration patterns.',
    },
    {
      question: 'Do I need MuleSoft Developer II before Platform Architect?',
      answer: 'Yes, MuleSoft Developer II is recommended. Platform Architect requires deep understanding of MuleSoft architecture, patterns, and platform capabilities.',
    },
  ],
  'mulesoft-integration-architect': [
    {
      question: 'What is the difference between Platform Architect and Integration Architect?',
      answer: 'Platform Architect focuses on Anypoint Platform architecture and governance. Integration Architect focuses on designing complex integration solutions, API design, and integration patterns.',
    },
    {
      question: 'Do I need Platform Architect before Integration Architect?',
      answer: 'Yes, MuleSoft Platform Architect is typically required. Integration Architect builds on platform knowledge with deeper focus on integration solution design.',
    },
  ],
  'b2c-commerce-developer': [
    {
      question: 'What is B2C Commerce (formerly Commerce Cloud)?',
      answer: 'B2C Commerce is Salesforce\'s e-commerce platform for B2C retailers. It enables businesses to create online storefronts, manage products, and process orders.',
    },
    {
      question: 'What programming languages do I need for B2C Commerce Developer?',
      answer: 'You need JavaScript knowledge for storefront customization, ISML (Commerce Cloud\'s templating language), and understanding of e-commerce concepts. Java knowledge is also helpful.',
    },
  ],
  'b2c-commerce-architect': [
    {
      question: 'What does a B2C Commerce Architect do?',
      answer: 'B2C Commerce Architects design e-commerce architectures, plan storefront experiences, integrate with external systems, and ensure performance, security, and scalability.',
    },
    {
      question: 'Do I need B2C Commerce Developer before Architect?',
      answer: 'Yes, B2C Commerce Developer is typically required. Architect builds on development knowledge with focus on architecture, integration patterns, and enterprise design.',
    },
  ],
  'b2c-solution-architect': [
    {
      question: 'What is B2C Solution Architect?',
      answer: 'B2C Solution Architect designs end-to-end B2C solutions combining B2C Commerce with Experience Cloud, integrating commerce, marketing, and customer engagement.',
    },
    {
      question: 'What certifications do I need before B2C Solution Architect?',
      answer: 'You typically need B2C Commerce Architect and Experience Cloud Consultant. The certification focuses on designing integrated B2C customer experiences.',
    },
  ],
  'b2b-solution-architect': [
    {
      question: 'What is B2B Solution Architect?',
      answer: 'B2B Solution Architect designs B2B commerce solutions, focusing on catalog management, pricing, buyer groups, contracts, and B2B-specific commerce features.',
    },
    {
      question: 'What experience do I need for B2B Solution Architect?',
      answer: 'You need B2B Commerce experience and architect-level knowledge. Understanding B2B commerce patterns, catalog management, and buyer journeys is essential.',
    },
  ],
  'b2b-commerce-admin-ap': [
    {
      question: 'What is B2B Commerce Admin Accredited Professional?',
      answer: 'B2B Commerce Admin AP validates skills in configuring and administering B2B Commerce, including catalog setup, pricing, buyer groups, and order management.',
    },
    {
      question: 'Do I need Platform Administrator before B2B Commerce Admin AP?',
      answer: 'Yes, Platform Administrator is recommended. You should have hands-on B2B Commerce experience configuring catalogs, pricing, and buyer management.',
    },
  ],
  'b2b-commerce-developer-ap': [
    {
      question: 'What is B2B Commerce Developer Accredited Professional?',
      answer: 'B2B Commerce Developer AP validates skills in developing and customizing B2B Commerce solutions, including cart customization, checkout flows, and API integration.',
    },
    {
      question: 'Do I need Platform Developer I before B2B Commerce Developer AP?',
      answer: 'Yes, Platform Developer I is recommended. You should have B2B Commerce development experience and understand B2B commerce APIs and customization.',
    },
  ],
  'industries-cpq-developer': [
    {
      question: 'What is Industries CPQ Developer?',
      answer: 'Industries CPQ Developer focuses on developing CPQ solutions for Salesforce Industries (Financial Services, Health, etc.), including industry-specific product configuration and pricing.',
    },
    {
      question: 'Do I need CPQ Administrator before Industries CPQ Developer?',
      answer: 'Yes, CPQ Administrator knowledge is essential. You should also have Platform Developer I and understanding of Salesforce Industries solutions.',
    },
  ],
  'marketing-cloud-engagement-developer': [
    {
      question: 'What is Marketing Cloud Engagement Developer?',
      answer: 'Marketing Cloud Engagement Developer focuses on developing Marketing Cloud solutions using AMPscript, SSJS (Server-Side JavaScript), and Marketing Cloud APIs.',
    },
    {
      question: 'What programming languages do I need for Marketing Cloud Developer?',
      answer: 'You need JavaScript knowledge for SSJS and understanding of AMPscript (Marketing Cloud\'s scripting language). HTML/CSS knowledge is also helpful for email development.',
    },
  ],
  'slack-developer': [
    {
      question: 'Are there free Salesforce Slack Developer practice exams for Winter \'26?',
      answer: 'Yes. This page includes free Slack Developer practice questions with explanations for the current Salesforce release so you can test your readiness before paying for the official exam. Use these with hands-on Slack app building practice for best results.',
    },
    {
      question: 'How much does the Salesforce Slack Developer exam cost in Winter \'26?',
      answer: 'The Salesforce Slack Developer certification exam fee is commonly listed as $200 USD, with retake pricing often around $100 USD. Check the official Salesforce registration page for your region-specific final price and taxes.',
    },
  ],
  'omnistudio-developer': [
    {
      question: 'What is OmniStudio Developer?',
      answer: 'OmniStudio Developer focuses on developing OmniStudio solutions including OmniScripts, FlexCards, DataRaptors, and integration procedures for Salesforce Industries.',
    },
    {
      question: 'What programming experience do I need for OmniStudio Developer?',
      answer: 'You need JavaScript knowledge for OmniStudio scripting. Understanding of OmniStudio components, DataRaptors, and integration procedures is essential.',
    },
  ],
  'cpq-administrator': [
    {
      question: 'What is CPQ Administrator?',
      answer: 'CPQ Administrator validates skills in configuring Salesforce CPQ (Configure, Price, Quote), including products, pricing rules, quote configuration, and CPQ automation.',
    },
    {
      question: 'Do I need Platform Administrator before CPQ Administrator?',
      answer: 'Yes, Platform Administrator is required. You should have hands-on CPQ experience configuring products, price rules, and quote processes.',
    },
    {
      question: 'What is the CPQ Administrator passing score and exam fee in Winter \'26?',
      answer: 'The Salesforce CPQ Specialist exam has 60 multiple-choice questions, 105 minutes, and a passing score of 65%. The exam fee is $200 USD (retake $100 USD). It is commonly called CPQ Administrator and Platform Administrator certification is required.',
    },
    {
      question: 'What are the highest-weight topics in the CPQ Administrator exam?',
      answer: 'The top sections are: Bundle Configurations (25%), Pricing (20%), and Quote Templates (15%). Together these cover 60% of the exam. Focus on option constraints, configuration attributes, price rules (lookup and formula rules), discount schedules, and quote line editor behavior.',
    },
    {
      question: 'What is the difference between a price rule and a discount schedule in Salesforce CPQ?',
      answer: 'A price rule evaluates conditions and injects a calculated price into a field — it is logic-driven and can reference lookup tables, formulas, or custom fields. A discount schedule applies tiered or block discounts based on quantity or term — it is data-driven and configured on the product directly. Both can apply simultaneously and the exam tests when to use each.',
    },
  ],
  'business-analyst': [
    {
      question: 'What does a Salesforce Business Analyst do?',
      answer: 'Salesforce Business Analysts gather requirements, analyze business processes, design Salesforce solutions, and bridge the gap between business stakeholders and technical teams.',
    },
    {
      question: 'Do I need technical experience for Business Analyst certification?',
      answer: 'No, Business Analyst focuses on business analysis skills rather than technical implementation. However, understanding Salesforce capabilities is essential.',
    },
    {
      question: 'What is the Business Analyst passing score and exam fee in Winter \'26?',
      answer: 'The Salesforce Business Analyst exam has 60 multiple-choice questions, 105 minutes, and a passing score of 72%. The exam fee is $200 USD (retake $100 USD). There is no formal prerequisite, though Salesforce recommends admin experience.',
    },
    {
      question: 'What are the main topic areas in the Salesforce Business Analyst exam?',
      answer: 'The main sections are: Collaboration with Stakeholders (25%), Customer Discovery (17%), Business Analysis Planning (15%), and User Stories (18%). These four areas account for 75% of the exam. Focus on user story formats (As a... I want... So that...), acceptance criteria, process mapping, and eliciting requirements from stakeholders.',
    },
    {
      question: 'What makes the Business Analyst exam harder than expected?',
      answer: 'Most candidates underestimate the depth of process analysis and stakeholder management questions. The exam is scenario-based — you must identify the best BA action for a given situation. Common traps: choosing a solution before understanding the root problem, skipping stakeholder validation steps, or writing user stories without clear acceptance criteria.',
    },
  ],
  'agentforce-specialist': [
    {
      question: 'What is Agentforce?',
      answer: 'Agentforce is Salesforce\'s AI-powered agent solution that helps automate customer interactions using AI agents that can answer questions and perform tasks.',
    },
    {
      question: 'Do I need Platform Administrator before Agentforce Specialist?',
      answer: 'Yes, Platform Administrator knowledge is recommended. You should have hands-on experience configuring and optimizing AI agents in Salesforce.',
    },
    {
      question: 'What is the Agentforce Specialist passing score and exam fee in Winter \'26?',
      answer: 'The Agentforce Specialist exam has 60 multiple-choice questions, 105 minutes, and a passing score of 65%. The exam fee is $200 USD (retake $100 USD). It is a relatively new credential with content updated for the latest Agentforce capabilities.',
    },
    {
      question: 'What topics are covered in the Agentforce Specialist exam?',
      answer: 'Key topics include: Agent Builder configuration, defining agent topics and actions, prompt templates, Einstein Trust Layer principles, Agentforce for Sales and Service use cases, grounding AI responses with Salesforce data, and distinguishing Agentforce agents from traditional Einstein bots. Focus on standard vs custom actions and when each is appropriate.',
    },
    {
      question: 'What is the Einstein Trust Layer and why is it important for Agentforce?',
      answer: 'The Einstein Trust Layer is Salesforce\'s built-in security framework for AI. It masks PII before data reaches external LLMs, audits prompts and responses, and ensures no Salesforce customer data is used to train third-party AI models. The Agentforce Specialist exam tests how Trust Layer protects data during AI interactions and why it matters for enterprise AI governance.',
    },
  ],
  'application-architect': [
    {
      question: 'What is Application Architect?',
      answer: 'Application Architect is part of the Technical Architect path. It focuses on data architecture, integration architecture, identity and access management, and development lifecycle.',
    },
    {
      question: 'What certifications do I need before Application Architect?',
      answer: 'You typically need multiple intermediate certifications (Administrator, Developer I, etc.) and years of implementation experience. Application Architect is advanced-level.',
    },
  ],
  'integration-architect': [
    {
      question: 'What is Integration Architect?',
      answer: 'Integration Architect designs integration solutions, understands integration patterns, and ensures secure, scalable integrations between Salesforce and external systems.',
    },
    {
      question: 'Do I need Application Architect before Integration Architect?',
      answer: 'Yes, Application Architect is typically required. Integration Architect is part of the Technical Architect path and requires deep integration expertise.',
    },
  ],
  'sharing-visibility-architect': [
    {
      question: 'What is Sharing and Visibility Architect?',
      answer: 'Sharing and Visibility Architect designs secure, scalable sharing models, understands data access patterns, and ensures proper visibility and security in Salesforce orgs.',
    },
    {
      question: 'Do I need Application Architect before Sharing and Visibility Architect?',
      answer: 'Yes, Application Architect is typically required. Sharing and Visibility Architect requires deep understanding of Salesforce security and sharing models.',
    },
  ],
  'system-architect': [
    {
      question: 'What is System Architect?',
      answer: 'System Architect is part of the Technical Architect path. It focuses on data architecture, integration architecture, sharing and visibility, and development lifecycle.',
    },
    {
      question: 'What certifications do I need before System Architect?',
      answer: 'You need Application Architect and multiple other certifications. System Architect is advanced-level and requires years of complex implementation experience.',
    },
  ],
  'identity-access-management-architect': [
    {
      question: 'What is Identity and Access Management Architect?',
      answer: 'Identity and Access Management Architect designs identity solutions, SSO implementations, user provisioning, and ensures secure access management across systems.',
    },
    {
      question: 'Do I need Application Architect before Identity Architect?',
      answer: 'Yes, Application Architect and System Architect are typically required. Identity Architect requires deep understanding of identity, SSO, and security.',
    },
  ],
  'dev-lifecycle-deployment-architect': [
    {
      question: 'What is Development Lifecycle and Deployment Architect?',
      answer: 'Dev Lifecycle and Deployment Architect designs deployment strategies, CI/CD pipelines, release management, and ensures proper governance for Salesforce deployments.',
    },
    {
      question: 'Do I need Application Architect before Dev Lifecycle Architect?',
      answer: 'Yes, Application Architect and System Architect are typically required. Dev Lifecycle Architect requires deep understanding of DevOps, CI/CD, and deployment.',
    },
  ],
  'technical-architect-evaluation': [
    {
      question: 'What is Technical Architect Evaluation?',
      answer: 'Technical Architect Evaluation is the first step to becoming a CTA. It\'s a written exam with scenario-based questions testing your ability to design secure, scalable solutions.',
    },
    {
      question: 'What certifications do I need before Technical Architect Evaluation?',
      answer: 'You need Application Architect and System Architect. The Evaluation tests your ability to design solutions for complex scenarios under time pressure.',
    },
  ],
  'technical-architect-review-board': [
    {
      question: 'What is Technical Architect Review Board?',
      answer: 'Technical Architect Review Board is the final step to become a CTA. You present and defend a solution design before a board of Certified Technical Architects.',
    },
    {
      question: 'Do I need to pass Technical Architect Evaluation before Review Board?',
      answer: 'Yes, you must pass the Technical Architect Evaluation first. The Review Board tests your communication skills and ability to defend architectural decisions.',
    },
  ],
  'heroku-architect': [
    {
      question: 'What is Heroku Architect?',
      answer: 'Heroku Architect designs cloud-native application architectures on Heroku, focusing on scaling, performance, security, and integration with Salesforce and other systems.',
    },
    {
      question: 'What experience do I need for Heroku Architect?',
      answer: 'You need Heroku development experience and architect-level knowledge. Understanding cloud architecture, scaling strategies, and Heroku platform capabilities is essential.',
    },
  ],
  'heroku-developer-ap': [
    {
      question: 'What is Heroku Developer Accredited Professional?',
      answer: 'Heroku Developer AP validates skills in developing and deploying applications on Heroku, including dyno management, add-ons, buildpacks, and deployment strategies.',
    },
    {
      question: 'What programming experience do I need for Heroku Developer AP?',
      answer: 'You need programming experience (Ruby, Node.js, Python, Java, etc.) and understanding of cloud application development. Heroku supports multiple languages.',
    },
  ],
  'tableau-architect': [
    {
      question: 'What is Tableau Architect?',
      answer: 'Tableau Architect designs enterprise Tableau architectures, plans governance, security, scalability, and ensures optimal performance for Tableau Server and Tableau Cloud deployments.',
    },
    {
      question: 'What experience do I need for Tableau Architect?',
      answer: 'You need Tableau Server administration experience and architect-level knowledge. Understanding enterprise analytics architecture and Tableau platform capabilities is essential.',
    },
  ],
  'tableau-consultant': [
    {
      question: 'What does a Tableau Consultant do?',
      answer: 'Tableau Consultants design Tableau solutions, gather requirements, create visualizations, build dashboards, and help organizations leverage Tableau for analytics.',
    },
    {
      question: 'Do I need Tableau experience for Tableau Consultant?',
      answer: 'Yes, you need Tableau Desktop and Server experience. The certification focuses on consulting skills, solution design, and stakeholder engagement.',
    },
  ],
  'tableau-data-analyst': [
    {
      question: 'What is Tableau Data Analyst?',
      answer: 'Tableau Data Analyst validates skills in analyzing data, creating calculations, building visualizations, and designing dashboards using Tableau Desktop.',
    },
    {
      question: 'What\'s the difference between Tableau Desktop Foundations and Data Analyst?',
      answer: 'Desktop Foundations is entry-level covering basics. Data Analyst is intermediate-level covering advanced calculations, LOD expressions, and complex visualizations.',
    },
  ],
  'tableau-desktop-foundations': [
    {
      question: 'Is the Tableau Desktop Foundations exam worth it?',
      answer: 'Yes, the Tableau Desktop Foundations exam is worth it for professionals looking to validate their core data visualization skills. It serves as a strong starting point before pursuing the more advanced Tableau Desktop Specialist or Certified Data Analyst certifications.',
    },
    {
      question: 'What is the passing score for the Tableau Desktop Foundations exam?',
      answer: 'Tableau certification exams typically use a scaled scoring system, often around 70–75%. It is recommended to consistently score above 80% on practice exams before attempting the official test.',
    },
    {
      question: 'How do I prepare for the Tableau Desktop Foundations exam?',
      answer: 'Preparation should focus on connecting to data, basic mapping, creating calculated fields, and building dashboards. Using a structured study guide that follows the official exam domains is the most efficient path to success.',
    },
    {
      question: 'Is Tableau Desktop Foundations a good starting point?',
      answer: 'Yes, it\'s an entry-level certification for Tableau. It covers connecting to data, creating basic visualizations, and building simple dashboards. No prior Tableau experience required.',
    },
    {
      question: 'What topics are covered in Tableau Desktop Foundations?',
      answer: 'The exam covers connecting to data (25%), dimensions and measures (25%), views and dashboards (35%), and filters and sorting (15%).',
    },
  ],
  'tableau-server-administrator': [
    {
      question: 'What does a Tableau Server Administrator do?',
      answer: 'Tableau Server Administrators install, configure, and manage Tableau Server, including user management, security, content management, and performance monitoring.',
    },
    {
      question: 'Do I need Tableau Desktop experience before Server Administrator?',
      answer: 'While helpful, it\'s not required. Server Administrator focuses on server administration rather than visualization creation. System administration knowledge is more important.',
    },
  ],
  'ux-designer': [
    {
      question: 'What does a Salesforce UX Designer do?',
      answer: 'Salesforce UX Designers design user experiences on the Salesforce platform, conduct research, create prototypes, and ensure accessible, user-friendly interfaces.',
    },
    {
      question: 'Do I need Salesforce technical knowledge for UX Designer?',
      answer: 'While helpful, deep technical knowledge isn\'t required. You need UX/design experience and understanding of Salesforce platform capabilities and constraints.',
    },
  ],
  'strategy-designer': [
    {
      question: 'What does a Strategy Designer do?',
      answer: 'Strategy Designers use design methods to create experience strategies on the Salesforce platform, focusing on discovery, solution design, and stakeholder engagement.',
    },
    {
      question: 'What experience do I need for Strategy Designer?',
      answer: 'You need design and strategy experience, understanding of design thinking, and knowledge of Salesforce platform capabilities. Technical implementation knowledge is helpful but not required.',
    },
  ],
  'sales-foundations': [
    {
      question: 'What is Sales Foundations?',
      answer: 'Sales Foundations validates foundational sales knowledge and Salesforce CRM basics, focusing on sales processes, customer-centric methodology, and using Salesforce for sales.',
    },
    {
      question: 'Is Sales Foundations a good starting point?',
      answer: 'Yes, it\'s designed for sales professionals new to Salesforce. It covers sales fundamentals and basic Salesforce CRM usage. No technical knowledge required.',
    },
  ],
  // Accredited Professional certifications
  'advanced-field-service-ap': [
    {
      question: 'What is Advanced Field Service Accredited Professional?',
      answer: 'Advanced Field Service AP validates advanced skills in Field Service configuration, scheduling optimization, mobile execution, and field service best practices.',
    },
    {
      question: 'Do I need Field Service Consultant before Advanced Field Service AP?',
      answer: 'While not required, Field Service Consultant knowledge is helpful. You should have advanced Field Service experience and Platform Administrator certification.',
    },
  ],
  'communications-cloud-ap': [
    {
      question: 'What is Communications Cloud Accredited Professional?',
      answer: 'Communications Cloud AP validates skills in configuring Communications Cloud for SMS, voice, and messaging channels, including channel setup and flow configuration.',
    },
    {
      question: 'Do I need Platform Administrator before Communications Cloud AP?',
      answer: 'Yes, Platform Administrator is recommended. You should have hands-on Communications Cloud experience configuring channels and messaging flows.',
    },
  ],
  'consumer-goods-cloud-ap': [
    {
      question: 'What is Consumer Goods Cloud Accredited Professional?',
      answer: 'Consumer Goods Cloud AP validates skills in configuring Consumer Goods Cloud for retail execution, including visit management, surveys, orders, and retail analytics.',
    },
    {
      question: 'What experience do I need for Consumer Goods Cloud AP?',
      answer: 'You need Platform Administrator certification and Consumer Goods Cloud experience. Understanding retail execution and field sales processes is essential.',
    },
  ],
  'consumer-goods-tpm-ap': [
    {
      question: 'What is Consumer Goods TPM Accredited Professional?',
      answer: 'Consumer Goods TPM AP validates skills in Trade Promotion Management, including promotion planning, budget management, execution tracking, and TPM analytics.',
    },
    {
      question: 'Do I need Consumer Goods Cloud AP before TPM AP?',
      answer: 'While helpful, it\'s not required. However, understanding Consumer Goods Cloud and trade promotion management processes is essential.',
    },
  ],
  'contact-center-ap': [
    {
      question: 'What is Contact Center Accredited Professional?',
      answer: 'Contact Center AP validates skills in configuring Contact Center solutions, including omnichannel routing, flows, and contact center analytics.',
    },
    {
      question: 'Do I need Service Cloud Consultant before Contact Center AP?',
      answer: 'While helpful, it\'s not required. You need Platform Administrator certification and Contact Center configuration experience.',
    },
  ],
  'cpq-billing-ap': [
    {
      question: 'What is CPQ and Billing Accredited Professional?',
      answer: 'CPQ and Billing AP validates skills in configuring both CPQ and Billing solutions, including quoting, contracts, billing processes, and revenue recognition.',
    },
    {
      question: 'Do I need CPQ Administrator before CPQ and Billing AP?',
      answer: 'Yes, CPQ Administrator knowledge is essential. You should also have Billing experience and understand the quote-to-cash process.',
    },
  ],
  'energy-utilities-ap': [
    {
      question: 'What is Energy and Utilities Accredited Professional?',
      answer: 'Energy and Utilities AP validates skills in configuring Energy and Utilities Cloud, including service territory management, work orders, and asset management.',
    },
    {
      question: 'What experience do I need for Energy and Utilities AP?',
      answer: 'You need Platform Administrator certification and Energy and Utilities Cloud experience. Understanding utility operations and field service is helpful.',
    },
  ],
  'financial-services-cloud-ap': [
    {
      question: 'What is Financial Services Cloud Accredited Professional?',
      answer: 'Financial Services Cloud AP validates skills in configuring Financial Services Cloud, including household management, financial accounts, goals, and FSC data model.',
    },
    {
      question: 'Do I need Platform Administrator before Financial Services Cloud AP?',
      answer: 'Yes, Platform Administrator is required. You should have Financial Services Cloud experience and understand financial services industry processes.',
    },
  ],
  'health-cloud-ap': [
    {
      question: 'What is Health Cloud Accredited Professional?',
      answer: 'Health Cloud AP validates skills in configuring Health Cloud, including care plans, care teams, patient management, and health care workflows.',
    },
    {
      question: 'What experience do I need for Health Cloud AP?',
      answer: 'You need Platform Administrator certification and Health Cloud experience. Understanding healthcare processes and care management is helpful.',
    },
  ],
  'loyalty-management-ap': [
    {
      question: 'What is Loyalty Management Accredited Professional?',
      answer: 'Loyalty Management AP validates skills in configuring loyalty programs, including program setup, points management, rewards, and member engagement.',
    },
    {
      question: 'Do I need Platform Administrator before Loyalty Management AP?',
      answer: 'Yes, Platform Administrator is recommended. You should have Loyalty Management experience and understand loyalty program operations.',
    },
  ],
  'manufacturing-cloud-ap': [
    {
      question: 'What is Manufacturing Cloud Accredited Professional?',
      answer: 'Manufacturing Cloud AP validates skills in configuring Manufacturing Cloud, including work orders, production management, and manufacturing operations.',
    },
    {
      question: 'What experience do I need for Manufacturing Cloud AP?',
      answer: 'You need Platform Administrator certification and Manufacturing Cloud experience. Understanding manufacturing processes and operations is essential.',
    },
  ],
  'marketing-cloud-advanced-cross-channel-ap': [
    {
      question: 'What is Marketing Cloud Advanced Cross-Channel Accredited Professional?',
      answer: 'Marketing Cloud Advanced Cross-Channel AP validates advanced skills in cross-channel marketing, including journey orchestration, email, SMS, and multi-channel strategies.',
    },
    {
      question: 'Do I need Marketing Cloud Consultant before Advanced Cross-Channel AP?',
      answer: 'Yes, Marketing Cloud Consultant knowledge is recommended. You should have advanced Marketing Cloud experience and cross-channel marketing expertise.',
    },
  ],
  'marketing-cloud-intelligence-ap': [
    {
      question: 'What is Marketing Cloud Intelligence Accredited Professional?',
      answer: 'Marketing Cloud Intelligence AP validates skills in Marketing Cloud Intelligence (formerly Datorama), including data models, insights, Ad Studio, and marketing analytics.',
    },
    {
      question: 'What experience do I need for Marketing Cloud Intelligence AP?',
      answer: 'You need Marketing Cloud experience and understanding of marketing analytics. Experience with Marketing Cloud Intelligence platform is essential.',
    },
  ],
  'marketing-cloud-personalization-ap': [
    {
      question: 'What is Marketing Cloud Personalization Accredited Professional?',
      answer: 'Marketing Cloud Personalization AP validates skills in personalization strategy, web and mobile personalization, and creating personalized customer experiences.',
    },
    {
      question: 'Do I need Marketing Cloud Consultant before Personalization AP?',
      answer: 'Yes, Marketing Cloud Consultant knowledge is recommended. You should have Marketing Cloud Personalization experience and personalization strategy expertise.',
    },
  ],
  'media-cloud-ap': [
    {
      question: 'What is Media Cloud Accredited Professional?',
      answer: 'Media Cloud AP validates skills in configuring Media Cloud, including media management, content distribution, and media industry-specific features.',
    },
    {
      question: 'What experience do I need for Media Cloud AP?',
      answer: 'You need Platform Administrator certification and Media Cloud experience. Understanding media industry processes and content management is helpful.',
    },
  ],
  'net-zero-cloud-ap': [
    {
      question: 'What is Net Zero Cloud Accredited Professional?',
      answer: 'Net Zero Cloud AP validates skills in configuring Net Zero Cloud for sustainability tracking, including carbon tracking, goals, and sustainability reporting.',
    },
    {
      question: 'Do I need Platform Administrator before Net Zero Cloud AP?',
      answer: 'Yes, Platform Administrator is recommended. You should have Net Zero Cloud experience and understand sustainability tracking and reporting.',
    },
  ],
  'order-management-admin-ap': [
    {
      question: 'What is Order Management Admin Accredited Professional?',
      answer: 'Order Management Admin AP validates skills in configuring Order Management, including orchestration, fulfillment, and order management workflows.',
    },
    {
      question: 'What experience do I need for Order Management Admin AP?',
      answer: 'You need Platform Administrator certification and Order Management experience. Understanding order fulfillment and supply chain processes is helpful.',
    },
  ],
  'order-management-developer-ap': [
    {
      question: 'What is Order Management Developer Accredited Professional?',
      answer: 'Order Management Developer AP validates skills in developing Order Management solutions, including customization, API integration, and order management development.',
    },
    {
      question: 'Do I need Platform Developer I before Order Management Developer AP?',
      answer: 'Yes, Platform Developer I is recommended. You should have Order Management development experience and understand Order Management APIs.',
    },
  ],
  'process-automation-ap': [
    {
      question: 'What is Process Automation Accredited Professional?',
      answer: 'Process Automation AP validates skills in Flow, Process Builder, and automation best practices, including designing and implementing automation solutions.',
    },
    {
      question: 'Do I need Platform Administrator before Process Automation AP?',
      answer: 'Yes, Platform Administrator is recommended. You should have extensive Flow and Process Builder experience and understand automation patterns.',
    },
  ],
  'public-sector-solutions-ap': [
    {
      question: 'What is Public Sector Solutions Accredited Professional?',
      answer: 'Public Sector Solutions AP validates skills in configuring Public Sector Solutions, including government-specific features, compliance, and public sector workflows.',
    },
    {
      question: 'What experience do I need for Public Sector Solutions AP?',
      answer: 'You need Platform Administrator certification and Public Sector Solutions experience. Understanding government processes and compliance is helpful.',
    },
  ],
  'administrator-practice-test': [
    {
      question: 'What is the Platform Administrator Practice Test?',
      answer: 'The Practice Test is a non-proctored exam that simulates the real Platform Administrator exam. It helps you assess readiness and identify knowledge gaps before taking the actual exam.',
    },
    {
      question: 'Does the Practice Test count toward certification?',
      answer: 'No, the Practice Test does not count toward certification. It\'s a study tool to help you prepare. You still need to pass the actual Platform Administrator exam to earn the certification.',
    },
  ],
  'email-specialist-practice-test': [
    {
      question: 'What is the Email Specialist Practice Test?',
      answer: 'The Practice Test is a non-proctored exam that simulates the real Marketing Cloud Email Specialist exam. It helps you assess readiness before taking the actual certification exam.',
    },
    {
      question: 'Does the Practice Test count toward certification?',
      answer: 'No, the Practice Test does not count toward certification. It\'s a study tool. You still need to pass the actual Email Specialist exam to earn the certification.',
    },
  ],
  'pardot-specialist': [
    {
      question: 'What is Account Engagement (Pardot) Specialist?',
      answer: 'Account Engagement Specialist validates skills in Account Engagement basics, lead management, email automation, and reporting. It\'s a foundational certification for Pardot users.',
    },
    {
      question: 'Do I need Platform Administrator before Pardot Specialist?',
      answer: 'While not required, Platform Administrator knowledge is helpful. You should have Account Engagement (Pardot) experience and understand B2B marketing automation.',
    },
  ],
}

export function getCertFaq(slug: string, certTitle: string): FaqItem[] {
  const faqName = getCertFaqName(slug, certTitle)
  const formerName = getCertFormerName(slug)
  const formerlyPhrase = formerName ? `—formerly ${formerName}—` : ''
  
  // Get cert-specific FAQs if available
  const certSpecificFaqs = CERT_SPECIFIC_FAQS[slug] || []
  
  // Base FAQs (always included)
  const baseFaqs: FaqItem[] = [
    {
      question: `What is covered on the ${faqName} exam?`,
      answer: formerName
        ? `The ${faqName} exam${formerlyPhrase} covers section-wise weightage as shown above. Use the exam topics and practice questions on this page to align your study with the official outline.`
        : `This page shows the section-wise exam weightage so you know exactly which topics carry the most weight. Use the exam topics and practice questions above to align your study with the official outline.`,
    },
    {
      question: `How do I prepare for the ${faqName} certification?`,
      answer: formerName
        ? `Use the exam tips, prerequisites, and study strategy on this ${faqName} study guide${formerlyPhrase} Focus first on the highest-weighted sections, then take the sample practice questions. Schedule the exam when you consistently score well on practice tests.`
        : `Use the exam tips, prerequisites, and study strategy on this page. Focus first on the highest-weighted sections, then take the sample practice questions. Schedule the exam when you consistently score well on practice tests.`,
    },
    {
      question: `Where can I find the official exam outline for ${faqName}?`,
      answer: `Salesforce publishes exam guides and outlines on Trailhead (trailhead.salesforce.com). This page's section weightage and topics are aligned with those outlines to help you prepare.`,
    },
  ]
  
  // Combine cert-specific FAQs with base FAQs
  // Insert cert-specific FAQs after the first base FAQ for better SEO
  return [
    baseFaqs[0],
    ...certSpecificFaqs,
    baseFaqs[1],
    baseFaqs[2],
  ]
}

/** JSON-LD BreadcrumbList for a certification page */
export function getCertBreadcrumbJsonLd(
  slug: string,
  certTitle: string,
  roleSlug?: string,
  roleName?: string
) {
  const items = getCertBreadcrumb(slug, certTitle, roleSlug, roleName)
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/** JSON-LD FAQPage for a certification page */
export function getCertFaqJsonLd(slug: string, certTitle: string) {
  const faqs = getCertFaq(slug, certTitle)
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}

/** JSON-LD HowTo for "How to prepare for [exam]" — supports rich results. */
export function getCertHowToJsonLd(slug: string, certTitle: string) {
  const examCode = SLUG_TO_EXAM_CODE[slug]
  const name = examCode ? `How to prepare for the ${certTitle} (${examCode}) exam` : `How to prepare for the ${certTitle} exam`
  const url = `${baseUrl}/certifications/${slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description: `Step-by-step guide to prepare for the ${certTitle} certification exam: review exam weightage, study by section, practice with questions, and book your exam.`,
    url,
    step: [
      { '@type': 'HowToStep', name: 'Review the exam outline and section weightage', text: 'Check the official exam guide and use the section-wise weightage on this page to prioritize topics.' },
      { '@type': 'HowToStep', name: 'Study by section', text: 'Use the study plan and exam prep content to cover each section. Focus on high-weight areas first.' },
      { '@type': 'HowToStep', name: 'Practice with sample questions', text: 'Answer the free practice questions and read the explanations to reinforce your understanding.' },
      { '@type': 'HowToStep', name: 'Book your exam', text: 'When you feel ready, schedule your certification exam on Trailhead or the Salesforce Certification portal.' },
    ],
  }
}

/** Single H1 per cert page: aligned with query intent (Complete 2026 Guide) for CTR. */
export function getCertH1Text(slug: string): string {
  // ADM-201: official current name + legacy code for long-term ranking stability
  if (slug === 'administrator') {
    return `Salesforce Certified Platform Administrator (ADM-201) Study Guide & Free Practice Questions (${TITLE_YEAR})`
  }
  const primaryName = getCertPrimaryName(slug, slugToDisplayName(slug))
  return `${primaryName} – Complete ${TITLE_YEAR} Guide`
}

/** H2 for "About this exam" section: About the [Cert Name] ([Exam Code]) Exam */
export function getCertAboutExamHeading(slug: string): string {
  const primaryName = getCertPrimaryName(slug, slugToDisplayName(slug))
  const examCode = SLUG_TO_EXAM_CODE[slug]
  return examCode ? `About the ${primaryName} (${examCode}) Exam` : `About the ${primaryName} Exam`
}

/** H3 for exam weightage section: [Cert Name] Exam Weightage by Section */
export function getCertExamWeightageHeading(slug: string): string {
  const primaryName = getCertPrimaryName(slug, slugToDisplayName(slug))
  return `${primaryName} Exam Weightage by Section`
}

/** H2 for practice questions section: [Cert Name] Practice Questions (With Explanations) */
export function getCertPracticeQuestionsHeading(slug: string): string {
  const primaryName = getCertPrimaryName(slug, slugToDisplayName(slug))
  return `${primaryName} Practice Questions (With Explanations)`
}

/** H2 for FAQ section: [Cert Name] ([Exam Code]) Exam FAQs */
export function getCertFaqHeading(slug: string): string {
  const primaryName = getCertPrimaryName(slug, slugToDisplayName(slug))
  const examCode = SLUG_TO_EXAM_CODE[slug]
  return examCode ? `${primaryName} (${examCode}) Exam FAQs` : `${primaryName} Exam FAQs`
}

/** WebPage JSON-LD for certification pages so validators detect schema. */
export function getCertWebPageJsonLd(
  slug: string,
  certTitle: string,
  roleSlug?: string,
  roleName?: string
) {
  const title = getCertMetaTitle(slug)
  const description = getCertMetaDescription(slug)
  const url = `${baseUrl}/certifications/${slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    publisher: { '@type': 'Organization', name: 'Trailblaze Prep', url: baseUrl },
    breadcrumb: getCertBreadcrumbJsonLd(slug, certTitle, roleSlug, roleName),
  }
}

export { slugToDisplayName }
