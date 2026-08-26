import type { Metadata } from 'next'
import { CERTIFICATION_CATEGORIES } from './certifications-data'
import { getCertPrimaryName, getCertFormerName } from './cert-name-aliases'
import { RELEASE_CURRENT, RELEASE_YEAR } from './release-data'
import { getExamWeightage } from './exam-weightage-data'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

/** Current Salesforce release label in titles/H1 for CTR (intent: "updated", "current syllabus"). */
const TITLE_YEAR = RELEASE_CURRENT

function withCurrentReleaseLabel(text: string): string {
  return text.replace(/\b2026\b/g, RELEASE_CURRENT)
}

function finalizeMetaDescription(text: string): string {
  const normalized = withCurrentReleaseLabel(text).replace(/\s+/g, ' ').trim()
  // Recognise any explicit CTA phrase so we don't append a duplicate.
  const hasCta = /\bstart free\b|\bstart now\b|\bget started\b|\btry free\b|start practici|(start|get|try)\b[\s\S]{0,30}\b(now|today)\b/i.test(normalized)
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
  'sales-cloud': 'CRT-251',
  'service-cloud': 'CRT-261',
  'experience-cloud': 'CRT-271',
  'email-specialist': 'CRT-550',
  'pardot-consultant': 'CRT-302',
  'javascript-developer-i': 'CRT-600',
  'b2c-commerce-developer': 'CRT-500',
  'data-architect': 'ARC-801',
  'technical-architect': 'CTA',
  'technical-architect-evaluation': 'CTA Evaluation',
  'technical-architect-review-board': 'CTA Review Board',
  'claude-certified-associate': 'CCAO-F',
  'claude-certified-developer': 'CCDV-F',
  'claude-certified-architect-foundations': 'CCAR-F',
  'claude-certified-architect-professional': 'CCAR-P',
}

/** Slug -> exam tips page path. Used in CertIntroParagraph for internal linking. */
export const SLUG_TO_EXAM_TIPS: Record<string, string> = {
  administrator: '/adm-201-exam-tips',
  'administrator-practice-test': '/adm-201-exam-tips',
  'email-specialist-practice-test': '/email-specialist-exam-tips',
  'developer-1': '/pd1-exam-tips',
  'developer-2': '/pd2-exam-tips',
  'app-builder': '/app-builder-exam-tips',
  'email-specialist': '/email-specialist-exam-tips',
  'mulesoft-integration-foundations': '/mulesoft-integration-foundations-exam-tips',
  'agentforce-specialist': '/agentforce-specialist-exam-tips',
  'service-cloud': '/service-cloud-consultant-exam-tips',
  'slack-developer': '/slack-developer-exam-tips',
  'system-architect': '/system-architect-exam-tips',
  'tableau-data-analyst': '/tableau-data-analyst-exam-tips',
  'sales-cloud': '/sales-cloud-exam-tips',
  'marketing-cloud-engagement-admin': '/marketing-cloud-consultant-exam-tips',
  'business-analyst': '/business-analyst-exam-tips',
  'pardot-consultant': '/pardot-consultant-exam-tips',
  'ux-designer': '/ux-designer-exam-tips',
  'experience-cloud': '/experience-cloud-exam-tips',
  'application-architect': '/application-architect-exam-tips',
  'data-architect': '/data-architect-exam-tips',
  'integration-architect': '/integration-architect-exam-tips',
  'sharing-visibility-architect': '/sharing-visibility-architect-exam-tips',
  'identity-access-management-architect': '/identity-access-management-architect-exam-tips',
  'dev-lifecycle-deployment-architect': '/dev-lifecycle-deployment-architect-exam-tips',
  'advanced-administrator': '/advanced-administrator-exam-tips',
  'field-service': '/field-service-exam-tips',
  'education-cloud-consultant': '/education-cloud-consultant-exam-tips',
  'ai-associate': '/ai-associate-exam-tips',
  'cpq-administrator': '/cpq-administrator-exam-tips',
  'data-360-consultant': '/data-360-consultant-exam-tips',
  'crm-analytics-einstein-discovery-consultant': '/crm-analytics-exam-tips',
  'revenue-cloud-consultant': '/revenue-cloud-consultant-exam-tips',
  'marketing-cloud-consultant': '/marketing-cloud-consultant-exam-tips',
  'marketing-cloud-engagement-developer': '/marketing-cloud-engagement-developer-exam-tips',
  'marketing-cloud-engagement-foundations': '/marketing-cloud-engagement-foundations-exam-tips',
  'b2c-commerce-developer': '/b2c-commerce-developer-exam-tips',
  'industries-cpq-developer': '/industries-cpq-developer-exam-tips',
  'javascript-developer-i': '/javascript-developer-i-exam-tips',
  'mulesoft-developer-i': '/mulesoft-developer-i-exam-tips',
  'mulesoft-developer-ii': '/mulesoft-developer-ii-exam-tips',
  'mulesoft-hyperautomation-developer': '/mulesoft-hyperautomation-developer-exam-tips',
  'mulesoft-integration-architect': '/mulesoft-integration-architect-exam-tips',
  'mulesoft-platform-architect': '/mulesoft-platform-architect-exam-tips',
  'mulesoft-catalyst-consultant': '/mulesoft-catalyst-consultant-exam-tips',
  'omnistudio-developer': '/omnistudio-developer-exam-tips',
  'omnistudio-consultant': '/omnistudio-consultant-exam-tips',
  'b2b-solution-architect': '/b2b-solution-architect-exam-tips',
  'b2c-solution-architect': '/b2c-solution-architect-exam-tips',
  'b2c-commerce-architect': '/b2c-commerce-architect-exam-tips',
  'heroku-architect': '/heroku-architect-exam-tips',
  'tableau-architect': '/tableau-architect-exam-tips',
  'tableau-consultant': '/tableau-consultant-exam-tips',
  'tableau-desktop-foundations': '/tableau-desktop-foundations-exam-tips',
  'tableau-server-administrator': '/tableau-server-administrator-exam-tips',
  'slack-administrator': '/slack-administrator-exam-tips',
  'slack-consultant': '/slack-consultant-exam-tips',
  'strategy-designer': '/strategy-designer-exam-tips',
  'nonprofit-cloud': '/nonprofit-cloud-exam-tips',
  'nonprofit-success-pack-consultant': '/nonprofit-success-pack-consultant-exam-tips',
  'platform-foundations': '/platform-foundations-exam-tips',
  'sales-foundations': '/sales-foundations-exam-tips',
  'pardot-specialist': '/pardot-specialist-exam-tips',
  'technical-architect': '/technical-architect-exam-tips',
  'technical-architect-evaluation': '/technical-architect-evaluation-exam-tips',
  'technical-architect-review-board': '/technical-architect-review-board-exam-tips',
  'health-cloud-ap': '/health-cloud-ap-exam-tips',
  'financial-services-cloud-ap': '/financial-services-cloud-ap-exam-tips',
  'manufacturing-cloud-ap': '/manufacturing-cloud-ap-exam-tips',
  'process-automation-ap': '/process-automation-ap-exam-tips',
  'cpq-billing-ap': '/cpq-billing-ap-exam-tips',
  'contact-center-ap': '/contact-center-ap-exam-tips',
  'net-zero-cloud-ap': '/net-zero-cloud-ap-exam-tips',
  'public-sector-solutions-ap': '/public-sector-solutions-ap-exam-tips',
  'marketing-cloud-personalization-ap': '/marketing-cloud-personalization-ap-exam-tips',
  'loyalty-management-ap': '/loyalty-management-ap-exam-tips',
  'advanced-field-service-ap': '/advanced-field-service-ap-exam-tips',
  'consumer-goods-cloud-ap': '/consumer-goods-cloud-ap-exam-tips',
  'energy-utilities-ap': '/energy-utilities-ap-exam-tips',
  'communications-cloud-ap': '/communications-cloud-ap-exam-tips',
  'marketing-cloud-advanced-cross-channel-ap': '/marketing-cloud-advanced-cross-channel-ap-exam-tips',
  'marketing-cloud-intelligence-ap': '/marketing-cloud-intelligence-ap-exam-tips',
  'b2b-commerce-admin-ap': '/b2b-commerce-admin-ap-exam-tips',
  'b2b-commerce-developer-ap': '/b2b-commerce-developer-ap-exam-tips',
  'consumer-goods-tpm-ap': '/consumer-goods-tpm-ap-exam-tips',
  'media-cloud-ap': '/media-cloud-ap-exam-tips',
  'heroku-developer-ap': '/heroku-developer-ap-exam-tips',
  'order-management-admin-ap': '/order-management-admin-ap-exam-tips',
  'order-management-developer-ap': '/order-management-developer-ap-exam-tips',
}

/** Slug -> study guide page path. Used in CertIntroParagraph for internal linking. */
export const SLUG_TO_STUDY_GUIDE: Record<string, string> = {
  administrator: '/adm-201-study-guide',
  'developer-1': '/pd1-study-guide',
  'developer-2': '/pd2-study-guide',
  'app-builder': '/app-builder-study-guide',
  'sales-cloud': '/sales-cloud-consultant-study-guide',
  'service-cloud': '/service-cloud-consultant-study-guide',
  'agentforce-specialist': '/agentforce-specialist-study-guide',
  'data-360-consultant': '/data-360-consultant-study-guide',
  'ai-associate': '/ai-associate-study-guide',
  'experience-cloud': '/experience-cloud-consultant-study-guide',
  'advanced-administrator': '/advanced-administrator-study-guide',
  'marketing-cloud-consultant': '/marketing-cloud-consultant-study-guide',
  'business-analyst': '/business-analyst-study-guide',
  'cpq-administrator': '/cpq-administrator-study-guide',
  'field-service': '/field-service-consultant-study-guide',
  'omnistudio-developer': '/omnistudio-developer-study-guide',
  'mulesoft-developer-i': '/mulesoft-developer-i-study-guide',
  'javascript-developer-i': '/javascript-developer-i-study-guide',
  'email-specialist': '/email-specialist-study-guide',
  'tableau-data-analyst': '/tableau-data-analyst-study-guide',
  'revenue-cloud-consultant': '/revenue-cloud-consultant-study-guide',
  'omnistudio-consultant': '/omnistudio-consultant-study-guide',
  'mulesoft-developer-ii': '/mulesoft-developer-ii-study-guide',
  'integration-architect': '/integration-architect-study-guide',
  'data-architect': '/data-architect-study-guide',
  'sharing-visibility-architect': '/sharing-visibility-architect-study-guide',
  'identity-access-management-architect': '/identity-access-management-architect-study-guide',
  'dev-lifecycle-deployment-architect': '/dev-lifecycle-deployment-architect-study-guide',
  'pardot-specialist': '/pardot-specialist-study-guide',
  'crm-analytics-einstein-discovery-consultant': '/crm-analytics-study-guide',
  'b2b-solution-architect': '/b2b-solution-architect-study-guide',
  'b2c-solution-architect': '/b2c-solution-architect-study-guide',
  'mulesoft-integration-foundations': '/mulesoft-integration-foundations-study-guide',
  'marketing-cloud-engagement-admin': '/marketing-cloud-engagement-admin-study-guide',
  'b2c-commerce-developer': '/b2c-commerce-developer-study-guide',
  'marketing-cloud-engagement-developer': '/marketing-cloud-engagement-developer-study-guide',
  'marketing-cloud-engagement-foundations': '/marketing-cloud-engagement-foundations-study-guide',
  'platform-foundations': '/platform-foundations-study-guide',
  'system-architect': '/system-architect-study-guide',
  'application-architect': '/application-architect-study-guide',
  'technical-architect': '/technical-architect-study-guide',
  'education-cloud-consultant': '/education-cloud-consultant-study-guide',
  'nonprofit-cloud': '/nonprofit-cloud-consultant-study-guide',
  'nonprofit-success-pack-consultant': '/nonprofit-success-pack-consultant-study-guide',
  'mulesoft-integration-architect': '/mulesoft-integration-architect-study-guide',
  'mulesoft-platform-architect': '/mulesoft-platform-architect-study-guide',
  'b2c-commerce-architect': '/b2c-commerce-architect-study-guide',
  'strategy-designer': '/strategy-designer-study-guide',
  'ux-designer': '/ux-designer-study-guide',
  'slack-administrator': '/slack-administrator-study-guide',
  'pardot-consultant': '/pardot-consultant-study-guide',
}

/** Exam cost mapping for SEO (meta descriptions, titles). Default: $200 for most certs, $150 for AP, $400 for Architect, $75 for Foundations, $1,500/$4,500 for CTA tiers. */
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
  'data-360-consultant': '$200',
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
  'mulesoft-catalyst-consultant': '$200',
  'email-specialist': '$200',
  'pardot-specialist': '$200',
  'strategy-designer': '$200',
  'tableau-consultant': '$200',
  'tableau-data-analyst': '$200',
  'tableau-server-administrator': '$200',
  'ai-associate': '$75',
  'marketing-cloud-engagement-foundations': '$75',
  'mulesoft-integration-foundations': '$75',
  // $150 (Accredited Professional)
  'advanced-field-service-ap': '$150',
  'b2b-commerce-admin-ap': '$150',
  'b2b-commerce-developer-ap': '$150',
  'communications-cloud-ap': '$150',
  'consumer-goods-cloud-ap': '$150',
  'consumer-goods-tpm-ap': '$150',
  'contact-center-ap': '$150',
  'cpq-billing-ap': '$150',
  'energy-utilities-ap': '$150',
  'financial-services-cloud-ap': '$150',
  'health-cloud-ap': '$150',
  'heroku-developer-ap': '$150',
  'loyalty-management-ap': '$150',
  'manufacturing-cloud-ap': '$150',
  'marketing-cloud-advanced-cross-channel-ap': '$150',
  'marketing-cloud-intelligence-ap': '$150',
  'marketing-cloud-personalization-ap': '$150',
  'media-cloud-ap': '$150',
  'net-zero-cloud-ap': '$150',
  'order-management-admin-ap': '$150',
  'order-management-developer-ap': '$150',
  'process-automation-ap': '$150',
  'public-sector-solutions-ap': '$150',
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
  'mulesoft-platform-architect': '$400',
  'mulesoft-integration-architect': '$400',
  'tableau-architect': '$400',
  // $75 (Foundations — free retake)
  'platform-foundations': '$75',
  'sales-foundations': '$75',
  'tableau-desktop-foundations': '$75',
  // CTA (two-phase: Architect Evaluation $1,500 → Review Board $4,500)
  'technical-architect': '$1,500',
  'technical-architect-evaluation': '$1,500',
  'technical-architect-review-board': '$4,500',
  // UX Designer
  'ux-designer': '$200',
  // Claude (Anthropic)
  'claude-certified-associate': '$99',
  'claude-certified-developer': '$125',
  'claude-certified-architect-foundations': '$125',
  'claude-certified-architect-professional': '$175',
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
  // Claude (Anthropic)
  'claude-certified-associate': 500,
  'claude-certified-developer': 350,
  'claude-certified-architect-foundations': 300,
  'claude-certified-architect-professional': 150,
}

/** Get approximate social proof number (students passed this month). Useful for CTAs like "Join 5,000+ passed this month". */
export function getSocialProofNumber(slug: string): number {
  return SLUG_TO_SOCIAL_PROOF[slug] || 800
}

/** Retake cost per official Salesforce pricing. Associate tier: Free; AP: same as fee ($150); most certs: half fee; Tableau Foundations: $50; CTA: half fee. */
export function getRetakeCost(slug: string): string {
  const cost = getExamCost(slug)
  if (cost === '$4,500') return '$2,250'
  if (cost === '$1,500') return '$750'
  if (cost === '$400') return '$200'
  if (cost === '$150') return '$150'
  if (cost === '$75') return 'Free'
  return '$100'
}

/** Exam logistics (questions, passing score, duration) for the Exam logistics section. Overrides only; defaults by cost tier when missing. */
export type ExamLogisticsDetail = { questions: number | string; passingScore: string; duration: string }

const SLUG_TO_EXAM_LOGISTICS: Record<string, ExamLogisticsDetail> = {
  administrator: { questions: 60, passingScore: '68%', duration: '105 min' },
  'advanced-administrator': { questions: 60, passingScore: '65%', duration: '105 min' },
  'app-builder': { questions: 60, passingScore: '63%', duration: '105 min' },
  'agentforce-specialist': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'business-analyst': { questions: 60, passingScore: '72%', duration: '105 min' },
  'cpq-administrator': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'marketing-cloud-engagement-admin': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'slack-administrator': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'developer-1': { questions: 60, passingScore: '68%', duration: '105 min' },
  'developer-2': { questions: 60, passingScore: '70%', duration: '120 min' },
  'javascript-developer-i': { questions: 60, passingScore: '65%', duration: '105 min' },
  'b2c-commerce-developer': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'industries-cpq-developer': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'marketing-cloud-engagement-developer': { questions: 60, passingScore: '~67%', duration: '105 min' },
  'mulesoft-developer-i': { questions: 60, passingScore: '70%', duration: '120 min' },
  'mulesoft-developer-ii': { questions: 60, passingScore: '70%', duration: '120 min' },
  'mulesoft-hyperautomation-developer': { questions: 60, passingScore: '~68%', duration: '105 min' },
  'omnistudio-developer': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'slack-developer': { questions: 60, passingScore: '~68%', duration: '105 min' },
  'sales-cloud': { questions: 60, passingScore: '68%', duration: '105 min' },
  'service-cloud': { questions: 60, passingScore: '78%', duration: '105 min' },
  'data-360-consultant': { questions: 60, passingScore: '70%', duration: '105 min' },
  'crm-analytics-einstein-discovery-consultant': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'education-cloud-consultant': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'experience-cloud': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'field-service': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'pardot-consultant': { questions: 60, passingScore: '68%', duration: '105 min' },
  'marketing-cloud-consultant': { questions: 60, passingScore: '67%', duration: '105 min' },
  'nonprofit-cloud': { questions: 60, passingScore: '65%', duration: '105 min' },
  'nonprofit-success-pack-consultant': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'omnistudio-consultant': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'revenue-cloud-consultant': { questions: 60, passingScore: '63%', duration: '105 min' },
  'slack-consultant': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'email-specialist': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'pardot-specialist': { questions: 60, passingScore: '72%', duration: '90 min' },
  'strategy-designer': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'ai-associate': { questions: 40, passingScore: '65%', duration: '70 min' },
  'marketing-cloud-engagement-foundations': { questions: 40, passingScore: '~62%', duration: '70 min' },
  'mulesoft-integration-foundations': { questions: 40, passingScore: '70%', duration: '70 min' },
  'ux-designer': { questions: 60, passingScore: '~65%', duration: '105 min' },
  'platform-foundations': { questions: 40, passingScore: '62%', duration: '70 min' },
  'sales-foundations': { questions: 40, passingScore: '62%', duration: '70 min' },
  'administrator-practice-test': { questions: 60, passingScore: '68%', duration: '105 min' },
  'email-specialist-practice-test': { questions: 60, passingScore: '~65%', duration: '105 min' },
  // $150 AP
  'advanced-field-service-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'b2b-commerce-admin-ap': { questions: 60, passingScore: '75%', duration: '90 min' },
  'b2b-commerce-developer-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'communications-cloud-ap': { questions: 55, passingScore: '56%', duration: '90 min' },
  'consumer-goods-cloud-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'consumer-goods-tpm-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'contact-center-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'cpq-billing-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'energy-utilities-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'financial-services-cloud-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'health-cloud-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'heroku-developer-ap': { questions: 60, passingScore: '68%', duration: '90 min' },
  'loyalty-management-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'manufacturing-cloud-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'marketing-cloud-advanced-cross-channel-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'marketing-cloud-intelligence-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'marketing-cloud-personalization-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'media-cloud-ap': { questions: 60, passingScore: '66%', duration: '75 min' },
  'net-zero-cloud-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'order-management-admin-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'order-management-developer-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'process-automation-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  'public-sector-solutions-ap': { questions: 60, passingScore: '~65%', duration: '90 min' },
  // $400 Architects
  'application-architect': { questions: 60, passingScore: '~58%', duration: '105 min' },
  'data-architect': { questions: 60, passingScore: '58%', duration: '105 min' },
  'integration-architect': { questions: 60, passingScore: '67%', duration: '105 min' },
  'sharing-visibility-architect': { questions: 60, passingScore: '58%', duration: '120 min' },
  'system-architect': { questions: 60, passingScore: '~58%', duration: '105 min' },
  'identity-access-management-architect': { questions: 60, passingScore: '~58%', duration: '105 min' },
  'dev-lifecycle-deployment-architect': { questions: 60, passingScore: '~58%', duration: '105 min' },
  'b2b-solution-architect': { questions: 60, passingScore: '~63%', duration: '105 min' },
  'b2c-commerce-architect': { questions: 60, passingScore: '~63%', duration: '105 min' },
  'b2c-solution-architect': { questions: 60, passingScore: '~63%', duration: '105 min' },
  'heroku-architect': { questions: 60, passingScore: '~63%', duration: '105 min' },
  'mulesoft-platform-architect': { questions: 60, passingScore: '~67%', duration: '120 min' },
  'mulesoft-integration-architect': { questions: 60, passingScore: '~67%', duration: '120 min' },
  'tableau-architect': { questions: 59, passingScore: '63%', duration: '105 min' },
  // Tableau ($200 tier)
  'tableau-consultant': { questions: 60, passingScore: '63%', duration: '105 min' },
  'tableau-data-analyst': { questions: 60, passingScore: '65%', duration: '105 min' },
  'tableau-server-administrator': { questions: 60, passingScore: '~65%', duration: '105 min' },
  // Tableau Foundations ($75 tier)
  'tableau-desktop-foundations': { questions: 40, passingScore: '48%', duration: '70 min' },
  // Consultant ($200 tier)
  'mulesoft-catalyst-consultant': { questions: 60, passingScore: '~63%', duration: '105 min' },
  // CTA / Board
  'technical-architect': { questions: 'Board exam', passingScore: 'Board review', duration: 'Board' },
  'technical-architect-evaluation': { questions: 'Scenario + MC', passingScore: 'Per exam', duration: 'Timed' },
  'technical-architect-review-board': { questions: 'Board scenario', passingScore: 'Board decision', duration: 'Board session' },
  // Claude (Anthropic)
  'claude-certified-associate': { questions: 60, passingScore: '720/1000', duration: '120 min' },
  'claude-certified-developer': { questions: 53, passingScore: '720/1000', duration: '120 min' },
  'claude-certified-architect-foundations': { questions: 60, passingScore: '720/1000', duration: '120 min' },
  'claude-certified-architect-professional': { questions: 65, passingScore: '720/1000', duration: '120 min' },
}

/** Returns exam logistics for the Exam logistics section; null if slug not in map (e.g. role page). */
export function getExamLogistics(slug: string): (ExamLogisticsDetail & { fee: string; retake: string }) | null {
  const cost = getExamCost(slug)
  const retake = getRetakeCost(slug)
  const detail = SLUG_TO_EXAM_LOGISTICS[slug]
  if (!detail) return null
  return { ...detail, fee: cost, retake }
}

export const EXAM_PRICING_URL = 'https://help.salesforce.com/s/articleView?id=005298916&type=1&language=en_US'

export const SLUG_TO_EXAM_GUIDE_URL: Record<string, string> = {
  administrator: 'https://help.salesforce.com/s/articleView?id=005298966&language=en_US&type=1',
  'advanced-administrator': 'https://help.salesforce.com/s/articleView?id=005298969&language=en_US&type=1',
  'app-builder': 'https://help.salesforce.com/s/articleView?id=005298964&language=en_US&type=1',
  'agentforce-specialist': 'https://help.salesforce.com/s/articleView?id=005298924&type=1&language=en_US',
  'business-analyst': 'https://help.salesforce.com/s/articleView?id=005298939&language=en_US&type=1',
  'cpq-administrator': 'https://help.salesforce.com/s/articleView?id=005298937&type=1&language=en_US',
  'developer-1': 'https://help.salesforce.com/s/articleView?id=005298965&language=en_US&type=1',
  'developer-2': 'https://help.salesforce.com/s/articleView?id=005298967&language=en_US&type=1',
  'javascript-developer-i': 'https://help.salesforce.com/s/articleView?id=005298945&language=en_US&type=1',
  'mulesoft-developer-i': 'https://help.salesforce.com/s/articleView?id=005298959&language=en_US&type=1',
  'mulesoft-developer-ii': 'https://help.salesforce.com/s/articleView?id=005298955&language=en_US&type=1',
  'omnistudio-developer': 'https://help.salesforce.com/s/articleView?id=005298971&language=en_US&type=1',
  'slack-developer': 'https://help.salesforce.com/s/articleView?id=005298987&type=1&language=en_US',
  'sales-cloud': 'https://trailhead.salesforce.com/en/credentials/salescloudsonsultant',
  'service-cloud': 'https://help.salesforce.com/s/articleView?id=005298989&language=en_US&type=1',
  'data-360-consultant': 'https://help.salesforce.com/s/articleView?id=005298940&language=en_US&type=1',
  'education-cloud-consultant': 'https://help.salesforce.com/s/articleView?id=005298934&type=1&language=en_US',
  'pardot-consultant': 'https://help.salesforce.com/s/articleView?id=005298951&type=1&language=en_US',
  'nonprofit-success-pack-consultant': 'https://help.salesforce.com/s/articleView?id=005298973&language=en_US&type=1',
  'omnistudio-consultant': 'https://help.salesforce.com/s/articleView?id=005298970&language=en_US&type=1',
  'revenue-cloud-consultant': 'https://help.salesforce.com/s/articleView?id=005298978&language=en_US&type=1',
  'data-architect': 'https://help.salesforce.com/s/articleView?id=005298972&language=en_US&type=1',
  'integration-architect': 'https://help.salesforce.com/s/articleView?id=005298980&language=en_US&type=1',
  'sharing-visibility-architect': 'https://help.salesforce.com/s/articleView?id=005298977&language=en_US&type=1',
  'mulesoft-platform-architect': 'https://help.salesforce.com/s/articleView?id=005298957&language=en_US&type=1',
  'b2c-solution-architect': 'https://help.salesforce.com/s/articleView?id=005298942&language=en_US&type=1',
  'b2c-commerce-architect': 'https://help.salesforce.com/s/articleView?id=005298936&language=en_US&type=1',
  'platform-foundations': 'https://help.salesforce.com/s/articleView?id=005298979&language=en_US&type=1',
  'tableau-architect': 'https://help.salesforce.com/s/articleView?id=005298985&language=en_US&type=1',
  'tableau-consultant': 'https://help.salesforce.com/s/articleView?id=005298993&language=en_US&type=1',
  'tableau-data-analyst': 'https://help.salesforce.com/s/articleView?id=005298984&language=en_US&type=1',
  'tableau-desktop-foundations': 'https://help.salesforce.com/s/articleView?id=005298988&language=en_US&type=1',
  'ai-associate': 'https://help.salesforce.com/s/articleView?id=005298930&type=1&language=en_US',
}

/** Occupation role-proxy data for Occupation schema. Maps cert slug to parent role job title and mid-level salary range. */
export const SLUG_TO_OCCUPATION_DATA: Record<string, { jobTitle: string; medianSalary: number; salaryRange: { minSalary: number; maxSalary: number } }> = {
  administrator: { jobTitle: 'Salesforce Administrator', medianSalary: 90000, salaryRange: { minSalary: 80000, maxSalary: 100000 } },
  'advanced-administrator': { jobTitle: 'Senior Salesforce Administrator', medianSalary: 112500, salaryRange: { minSalary: 100000, maxSalary: 125000 } },
  'app-builder': { jobTitle: 'Salesforce App Builder', medianSalary: 100000, salaryRange: { minSalary: 85000, maxSalary: 120000 } },
  'developer-1': { jobTitle: 'Salesforce Platform Developer', medianSalary: 117500, salaryRange: { minSalary: 105000, maxSalary: 130000 } },
  'developer-2': { jobTitle: 'Senior Salesforce Developer', medianSalary: 137500, salaryRange: { minSalary: 125000, maxSalary: 150000 } },
  'sales-cloud': { jobTitle: 'Sales Cloud Consultant', medianSalary: 122500, salaryRange: { minSalary: 110000, maxSalary: 135000 } },
  'service-cloud': { jobTitle: 'Service Cloud Consultant', medianSalary: 122500, salaryRange: { minSalary: 110000, maxSalary: 135000 } },
  'marketing-cloud-consultant': { jobTitle: 'Marketing Cloud Consultant', medianSalary: 130000, salaryRange: { minSalary: 115000, maxSalary: 145000 } },
  'data-360-consultant': { jobTitle: 'Data 360 Consultant', medianSalary: 125000, salaryRange: { minSalary: 110000, maxSalary: 140000 } },
  'application-architect': { jobTitle: 'Salesforce Application Architect', medianSalary: 162500, salaryRange: { minSalary: 150000, maxSalary: 175000 } },
  'system-architect': { jobTitle: 'Salesforce System Architect', medianSalary: 162500, salaryRange: { minSalary: 150000, maxSalary: 175000 } },
  'integration-architect': { jobTitle: 'Salesforce Integration Architect', medianSalary: 162500, salaryRange: { minSalary: 150000, maxSalary: 175000 } },
  'data-architect': { jobTitle: 'Salesforce Data Architect', medianSalary: 162500, salaryRange: { minSalary: 150000, maxSalary: 175000 } },
  'technical-architect': { jobTitle: 'Certified Technical Architect', medianSalary: 215000, salaryRange: { minSalary: 180000, maxSalary: 250000 } },
  // Claude (Anthropic)
  'claude-certified-associate': { jobTitle: 'AI Business Analyst', medianSalary: 95000, salaryRange: { minSalary: 80000, maxSalary: 110000 } },
  'claude-certified-developer': { jobTitle: 'AI Engineer', medianSalary: 145000, salaryRange: { minSalary: 125000, maxSalary: 165000 } },
  'claude-certified-architect-foundations': { jobTitle: 'AI Solutions Architect', medianSalary: 170000, salaryRange: { minSalary: 150000, maxSalary: 190000 } },
  'claude-certified-architect-professional': { jobTitle: 'Senior AI Solutions Architect', medianSalary: 200000, salaryRange: { minSalary: 175000, maxSalary: 225000 } },
}

/** Get occupation role-proxy data for a cert slug; returns undefined if not available. */
export function getOccupationData(slug: string) {
  return SLUG_TO_OCCUPATION_DATA[slug]
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
    `${base}: Free Practice Exam (${TITLE_YEAR})`,
    `${base}: Free Practice (${TITLE_YEAR})`,
    `${base} (${TITLE_YEAR})`,
    `${compressTitleWords(base)}: Free Practice (${TITLE_YEAR})`,
    `${compressTitleWords(base)} (${TITLE_YEAR})`,
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
    'app-builder': `Platform App Builder: DEV-402 Free Practice (${TITLE_YEAR})`,
    administrator: `Free ADM-201 Practice Exam ${RELEASE_YEAR}`,
    'advanced-administrator': `Free ADM-211 Advanced Admin Practice Exam ${RELEASE_YEAR}`,
    'email-specialist': `Free Email Specialist (CRT-550) Practice Exam ${RELEASE_YEAR}`,
    'mulesoft-hyperautomation-developer': `Free MuleSoft Hyperautomation Practice Exam ${RELEASE_YEAR}`,
    'sharing-visibility-architect': `Free Sharing & Visibility Arch Practice Exam ${RELEASE_YEAR}`,
    'identity-access-management-architect': `Free Identity & Access Arch Practice Exam ${RELEASE_YEAR}`,
    'marketing-cloud-consultant': `Marketing Cloud Consultant: Free Practice (${TITLE_YEAR})`,
    'business-analyst': `Business Analyst Certification: Free Practice (${TITLE_YEAR})`,
    'sales-cloud': `Free Sales Cloud (CRT-251) Practice Exam ${RELEASE_YEAR}`,
    'developer-2': `Free Platform Developer II (PD2) Practice Exam ${RELEASE_YEAR}`,
    'cpq-administrator': `CPQ Admin Certification: Free Practice (${TITLE_YEAR})`,
    'pardot-consultant': `Free Pardot Consultant (CRT-302) Practice Exam ${RELEASE_YEAR}`,
    'pardot-specialist': `Free Pardot Specialist Practice Exam ${RELEASE_YEAR}`,
    'experience-cloud': `Free Experience Cloud (CRT-271) Practice Exam ${RELEASE_YEAR}`,
    'mulesoft-integration-foundations': `Free MuleSoft Foundations Practice Exam ${RELEASE_YEAR}`,
    'developer-1': `Free Platform Developer I (PD1) Practice Exam ${RELEASE_YEAR}`,
    'slack-developer': `Free Slack Developer Practice Exam ${RELEASE_YEAR}`,
    'tableau-data-analyst': `Free Tableau Data Analyst Practice Exam ${RELEASE_YEAR}`,
    'technical-architect-review-board': `Free CTA Review Board Practice Exam ${RELEASE_YEAR}`,
    'technical-architect': `Free Technical Architect (CTA) Practice Exam ${RELEASE_YEAR}`,
    'system-architect': `Salesforce System Architect: Free Practice (${TITLE_YEAR})`,
    'application-architect': `Free Application Architect Practice Exam ${RELEASE_YEAR}`,
    'integration-architect': `Integration Architect Cert: Free Practice (${TITLE_YEAR})`,
    'data-architect': `Free Data Architect (ARC-801) Practice Exam ${RELEASE_YEAR}`,
    // Extended coverage: All remaining certs for complete CTR optimization
    'administrator-practice-test': `Free ADM-201 Mock Practice Exam ${RELEASE_YEAR}`,
    'advanced-field-service-ap': `Free Advanced Field Service AP Practice Exam ${RELEASE_YEAR}`,
    'agentforce-specialist': `Free Agentforce Specialist Practice Exam ${RELEASE_YEAR}`,
    'ai-associate': `Free AI Associate Practice Exam ${RELEASE_YEAR}`,
    'b2b-commerce-admin-ap': `Free B2B Commerce Admin AP Practice Exam ${RELEASE_YEAR}`,
    'b2b-commerce-developer-ap': `Free B2B Commerce Dev AP Practice Exam ${RELEASE_YEAR}`,
    'b2b-solution-architect': `Free B2B Solution Architect Practice Exam ${RELEASE_YEAR}`,
    'b2c-commerce-architect': `Free B2C Commerce Architect Practice Exam ${RELEASE_YEAR}`,
    'b2c-commerce-developer': `Free B2C Commerce Dev (CRT-500) Practice Exam ${RELEASE_YEAR}`,
    'b2c-solution-architect': `Free B2C Solution Architect Practice Exam ${RELEASE_YEAR}`,
    'communications-cloud-ap': `Free Agentforce Communications AP Practice Exam ${RELEASE_YEAR}`,
    'consumer-goods-cloud-ap': `Free Agentforce Consumer Goods AP Practice Exam ${RELEASE_YEAR}`,
    'consumer-goods-tpm-ap': `Free Consumer Goods TPM AP Practice Exam ${RELEASE_YEAR}`,
    'contact-center-ap': `Free Contact Center AP Practice Exam ${RELEASE_YEAR}`,
    'cpq-billing-ap': `Free CPQ & Billing AP Practice Exam ${RELEASE_YEAR}`,
    'crm-analytics-einstein-discovery-consultant': `Free CRM Analytics Practice Exam ${RELEASE_YEAR}`,
    'data-360-consultant': `Free Data 360 Consultant Practice Exam ${RELEASE_YEAR}`,
    'dev-lifecycle-deployment-architect': `Free Dev Lifecycle Arch Practice Exam ${RELEASE_YEAR}`,
    'education-cloud-consultant': `Free Education Cloud Consult Practice Exam ${RELEASE_YEAR}`,
    'email-specialist-practice-test': `Free Email Specialist Mock Practice Exam ${RELEASE_YEAR}`,
    'energy-utilities-ap': `Free Energy & Utilities AP Practice Exam ${RELEASE_YEAR}`,
    'field-service': `Free Field Service Consultant Practice Exam ${RELEASE_YEAR}`,
    'financial-services-cloud-ap': `Free Agentforce Financial Services AP Practice Exam ${RELEASE_YEAR}`,
    'health-cloud-ap': `Free Agentforce Health AP Practice Exam ${RELEASE_YEAR}`,
    'heroku-architect': `Free Heroku Architect Practice Exam ${RELEASE_YEAR}`,
    'heroku-developer-ap': `Free Heroku Developer AP Practice Exam ${RELEASE_YEAR}`,
    'industries-cpq-developer': `Free Industries CPQ Developer Practice Exam ${RELEASE_YEAR}`,
    'javascript-developer-i': `Free JavaScript Dev I (CRT-600) Practice Exam ${RELEASE_YEAR}`,
    'lightning-web-components-specialist': `Free LWC Specialist Practice Exam ${RELEASE_YEAR}`,
    'loyalty-management-ap': `Free Loyalty Management AP Practice Exam ${RELEASE_YEAR}`,
    'manufacturing-cloud-ap': `Free Agentforce Manufacturing AP Practice Exam ${RELEASE_YEAR}`,
    'marketing-cloud-advanced-cross-channel-ap': `Free MC Cross Channel AP Practice Exam ${RELEASE_YEAR}`,
    'marketing-cloud-engagement-admin': `Free MC Engagement Admin Practice Exam ${RELEASE_YEAR}`,
    'marketing-cloud-engagement-developer': `Free MC Engagement Dev Practice Exam ${RELEASE_YEAR}`,
    'marketing-cloud-engagement-foundations': `Free MC Foundations Practice Exam ${RELEASE_YEAR}`,
    'marketing-cloud-intelligence-ap': `Free MC Intelligence AP Practice Exam ${RELEASE_YEAR}`,
    'marketing-cloud-personalization-ap': `Free MC Personalization AP Practice Exam ${RELEASE_YEAR}`,
    'media-cloud-ap': `Free Media Cloud AP Practice Exam ${RELEASE_YEAR}`,
    'mulesoft-catalyst-consultant': `Free MuleSoft Catalyst Consult Practice Exam ${RELEASE_YEAR}`,
    'mulesoft-developer-i': `Free MuleSoft Developer I Practice Exam ${RELEASE_YEAR}`,
    'mulesoft-developer-ii': `Free MuleSoft Developer II Practice Exam ${RELEASE_YEAR}`,
    'mulesoft-integration-architect': `Free MuleSoft Integration Arch Practice Exam ${RELEASE_YEAR}`,
    'mulesoft-platform-architect': `Free MuleSoft Platform Arch Practice Exam ${RELEASE_YEAR}`,
    'net-zero-cloud-ap': `Free Net Zero Cloud AP Practice Exam ${RELEASE_YEAR}`,
    'nonprofit-cloud': `Free Nonprofit Cloud Consult Practice Exam ${RELEASE_YEAR}`,
    'nonprofit-success-pack-consultant': `Free NPSP Consultant Practice Exam ${RELEASE_YEAR}`,
    'omnistudio-consultant': `Free OmniStudio Consultant Practice Exam ${RELEASE_YEAR}`,
    'omnistudio-developer': `Free OmniStudio Developer Practice Exam ${RELEASE_YEAR}`,
    'order-management-admin-ap': `Free Order Mgmt Admin AP Practice Exam ${RELEASE_YEAR}`,
    'order-management-developer-ap': `Free Order Mgmt Dev AP Practice Exam ${RELEASE_YEAR}`,
    'platform-foundations': `Free Platform Foundations Practice Exam ${RELEASE_YEAR}`,
    'process-automation-ap': `Free Process Automation AP Practice Exam ${RELEASE_YEAR}`,
    'public-sector-solutions-ap': `Free Public Sector AP Practice Exam ${RELEASE_YEAR}`,
    'revenue-cloud-consultant': `Free Revenue Cloud Consult Practice Exam ${RELEASE_YEAR}`,
    'sales-foundations': `Free Sales Foundations Practice Exam ${RELEASE_YEAR}`,
    'service-cloud': `Free Service Cloud (CRT-261) Practice Exam ${RELEASE_YEAR}`,
    'slack-administrator': `Free Slack Administrator Practice Exam ${RELEASE_YEAR}`,
    'slack-consultant': `Free Slack Consultant Practice Exam ${RELEASE_YEAR}`,
    'strategy-designer': `Free Strategy Designer Practice Exam ${RELEASE_YEAR}`,
    'tableau-architect': `Free Tableau Architect Practice Exam ${RELEASE_YEAR}`,
    'tableau-consultant': `Free Tableau Consultant Practice Exam ${RELEASE_YEAR}`,
    'tableau-desktop-foundations': `Free Tableau Desktop Found. Practice Exam ${RELEASE_YEAR}`,
    'tableau-server-administrator': `Free Tableau Server Admin Practice Exam ${RELEASE_YEAR}`,
    'technical-architect-evaluation': `Free CTA Evaluation Practice Exam ${RELEASE_YEAR}`,
    'ux-designer': `Free UX Designer Practice Exam ${RELEASE_YEAR}`,
    // Claude (Anthropic) certifications
    'claude-certified-associate': `Free Claude Associate (CCAO-F) Practice Exam ${RELEASE_YEAR}`,
    'claude-certified-developer': `Free Claude Developer (CCDV-F) Practice Exam ${RELEASE_YEAR}`,
    'claude-certified-architect-foundations': `Free Claude Architect Foundations (CCAR-F) Exam ${RELEASE_YEAR}`,
    'claude-certified-architect-professional': `Free Claude Architect Pro (CCAR-P) Exam ${RELEASE_YEAR}`,
  }
  const ctrTitle = ctrTitleOverrides[slug]
  if (ctrTitle) return clampTitle(ctrTitle)
  // Explicit short title for historical high-volume page.
  if (slug === 'developer-1') return `Salesforce PD1 Practice Exam (${TITLE_YEAR})`
  /** Short SERP titles for top certs. */
  const shortTitles: Record<string, string> = {
    // Administrator track (base certs – people start here; "Salesforce" first for broader queries)
    administrator: 'Salesforce Platform Administrator (ADM-201)',
    'advanced-administrator': 'Salesforce Certified Platform Administrator II (ADM-211)',
    'app-builder': 'Salesforce Platform App Builder (DEV-402)',
    'agentforce-specialist': 'Salesforce Certified Agentforce Specialist',
    'business-analyst': 'Salesforce Business Analyst',
    'cpq-administrator': 'Salesforce Certified CPQ Administrator',
    'marketing-cloud-engagement-admin': 'Salesforce Certified Marketing Cloud Engagement Administrator',
    'slack-administrator': 'Salesforce Certified Slack Administrator',
    'administrator-practice-test': 'ADM-201 Practice Test',
    // Developer track ("Salesforce" first for broader queries)
    'developer-1': 'Salesforce Platform Developer I (PD1)',
    'developer-2': 'Salesforce Certified Platform Developer II (PD2)',
    'javascript-developer-i': 'Salesforce Certified JavaScript Developer',
    'b2c-commerce-developer': 'Salesforce Certified B2C Commerce Developer',
    'industries-cpq-developer': 'Salesforce Certified Industries CPQ Developer',
    'marketing-cloud-engagement-developer': 'Salesforce Certified Marketing Cloud Engagement Developer',
    'mulesoft-developer-i': 'Salesforce Certified MuleSoft Developer',
    'mulesoft-developer-ii': 'Salesforce Certified MuleSoft Developer II',
    'mulesoft-hyperautomation-developer': 'Salesforce Certified MuleSoft Hyperautomation Developer',
    'omnistudio-developer': 'Salesforce Certified OmniStudio Developer',
    'slack-developer': 'Salesforce Certified Slack Developer',
    // Consultant track ("Salesforce" first for broader queries)
    'sales-cloud': 'Salesforce Sales Cloud Consultant',
    'service-cloud': 'Salesforce Certified Agentforce Service Consultant',
    'data-360-consultant': 'Salesforce Certified Data 360 Consultant',
    'crm-analytics-einstein-discovery-consultant': 'Salesforce Certified CRM Analytics and Einstein Discovery',
    'education-cloud-consultant': 'Salesforce Certified Education Cloud Consultant',
    'experience-cloud': 'Salesforce Certified Experience Cloud Consultant',
    'field-service': 'Salesforce Certified Agentforce Field Service and Operations Consultant',
    'pardot-consultant': 'Salesforce Certified Marketing Cloud Account Engagement Consultant',
    'marketing-cloud-consultant': 'Salesforce Certified Marketing Cloud Engagement Consultant',
    'nonprofit-cloud': 'Salesforce Certified Agentforce Nonprofit Consultant',
    'nonprofit-success-pack-consultant': 'Salesforce Certified Nonprofit Success Pack (NPSP)',
    'omnistudio-consultant': 'Salesforce Certified OmniStudio Consultant',
    'revenue-cloud-consultant': 'Salesforce Certified Revenue Management Consultant',
    'slack-consultant': 'Salesforce Certified Slack Consultant',
    // Associate
    'platform-foundations': 'Salesforce Certified Platform Foundations',
    'ai-associate': 'Salesforce Certified AI Associate',
    'marketing-cloud-engagement-foundations': 'Salesforce Certified Marketing Cloud Engagement Foundations',
    'mulesoft-integration-foundations': 'Salesforce Certified MuleSoft Integration Foundations',
    // Marketing
    'email-specialist': 'Salesforce Marketing Cloud Email Specialist',
    'pardot-specialist': 'Salesforce Certified Marketing Cloud Account Engagement Specialist',
    'email-specialist-practice-test': 'Email Specialist Practice Test',
    // Architect ("Salesforce" first for broader queries)
    'application-architect': 'Salesforce Certified Application Architect',
    'data-architect': 'Salesforce Data Architect',
    'integration-architect': 'Salesforce Certified Platform Integration Architect',
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
    'b2b-commerce-admin-ap': 'Salesforce B2B Commerce Administrator AP',
    'b2b-commerce-developer-ap': 'Salesforce Certified B2B Commerce Developer AP',
    'communications-cloud-ap': 'Salesforce Agentforce Communications AP',
    'consumer-goods-cloud-ap': 'Salesforce Agentforce Consumer Goods AP',
    'consumer-goods-tpm-ap': 'Salesforce Certified Consumer Goods TPM AP',
    'contact-center-ap': 'Salesforce Certified Contact Center AP',
    'cpq-billing-ap': 'Salesforce Certified CPQ and Billing AP',
    'energy-utilities-ap': 'Salesforce Certified Energy & Utilities AP',
    'financial-services-cloud-ap': 'Salesforce Agentforce Financial Services AP',
    'health-cloud-ap': 'Salesforce Agentforce Health AP',
    'heroku-developer-ap': 'Salesforce Certified Heroku Developer AP',
    'loyalty-management-ap': 'Salesforce Certified Loyalty Management AP',
    'manufacturing-cloud-ap': 'Salesforce Agentforce Manufacturing AP',
    'marketing-cloud-advanced-cross-channel-ap': 'Salesforce Certified Marketing Cloud Advanced Cross Channel AP',
    'marketing-cloud-intelligence-ap': 'Salesforce Certified Marketing Cloud Intelligence AP',
    'marketing-cloud-personalization-ap': 'Salesforce Certified Marketing Cloud Personalization AP',
    'media-cloud-ap': 'Salesforce Certified Media Cloud AP',
    'net-zero-cloud-ap': 'Salesforce Certified Net Zero Cloud AP',
    'order-management-admin-ap': 'Salesforce Certified Order Management Admin AP',
    'order-management-developer-ap': 'Salesforce Certified Order Management Developer AP',
    'process-automation-ap': 'Salesforce Certified Process Automation AP',
    'public-sector-solutions-ap': 'Salesforce Agentforce 360 Public Sector AP',
    // Sales
    'sales-foundations': 'Salesforce Certified Agentforce Sales Foundations',
    // Designer
    'strategy-designer': 'Salesforce Certified Platform Strategy Designer',
    'ux-designer': 'Salesforce Certified UX Designer',
    // Tableau (Salesforce ecosystem)
    'tableau-architect': 'Salesforce Certified Tableau Architect',
    'tableau-consultant': 'Salesforce Certified Tableau Consultant',
    'tableau-data-analyst': 'Salesforce Certified Tableau Data Analyst',
    'tableau-desktop-foundations': 'Salesforce Certified Tableau Desktop Foundations',
    'tableau-server-administrator': 'Salesforce Certified Tableau Server Administrator',
    // Claude (Anthropic) certifications
    'claude-certified-associate': 'Claude Certified Associate (CCAO-F)',
    'claude-certified-developer': 'Claude Certified Developer (CCDV-F)',
    'claude-certified-architect-foundations': 'Claude Certified Architect Foundations (CCAR-F)',
    'claude-certified-architect-professional': 'Claude Certified Architect Professional (CCAR-P)',
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
      `Platform App Builder certification (DEV-402): 60 questions, 105 min, 65% passing. Start free — 15 sample questions, no sign-up. ${TITLE_YEAR} study guide.`,
    administrator:
      `Free ADM-201 practice exam: 60 questions, ~65% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'marketing-cloud-consultant':
      `Marketing Cloud Consultant: Free practice exam — no sign-up. 60 questions, 67% passing. Sample Qs, exam tips & ${TITLE_YEAR} study guide.`,
    'business-analyst':
      `Business Analyst certification: Free practice exam — no sign-up. 60 questions, ~65% passing, 105 min. Sample Qs & ${TITLE_YEAR} study guide.`,
    'sales-cloud':
      `Free Sales Cloud (CRT-251) practice exam: 60 questions, ~68% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'advanced-administrator':
      `Free ADM-211 Advanced Admin practice exam: 60 questions, ~65% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'email-specialist':
      `Free Email Specialist (CRT-550) practice exam: 60 questions, ~65% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'mulesoft-hyperautomation-developer':
      `Free MuleSoft Hyperautomation practice exam: 60 questions, ~68% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'sharing-visibility-architect':
      `Free Sharing & Visibility Arch practice exam: 60 questions, ~68% passing score, 120 min. $400 fee. ${RELEASE_YEAR} — no sign-up.`,
    'identity-access-management-architect':
      `Free Identity & Access Arch practice exam: 60 questions, ~68% passing score, 120 min. $400 fee. ${RELEASE_YEAR} — no sign-up.`,
    'developer-2':
      `Free Platform Developer II (PD2) practice exam: 60 questions, ~65% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'cpq-administrator':
      `CPQ certification: Free Salesforce CPQ Administrator practice. Start free — 15 sample questions, 60 exam Q, ~65% passing. ${TITLE_YEAR} study guide. $200 fee.`,
    'pardot-consultant':
      `Free Pardot Consultant (CRT-302) practice exam: 60 questions, ~68% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'pardot-specialist':
      `Free Pardot Specialist practice exam: 60 questions, ~72% passing score, 90 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'experience-cloud':
      `Free Experience Cloud (CRT-271) practice exam: 60 questions, ~65% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'slack-developer':
      `Free Slack Developer practice exam: 60 questions, ~68% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'tableau-data-analyst':
      `Free Tableau Data Analyst practice exam: 60 questions, 65% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'mulesoft-integration-foundations':
      `Free MuleSoft Foundations practice exam: 40 questions, ~70% passing score, 70 min. $75 fee. ${RELEASE_YEAR} — no sign-up.`,
    'technical-architect':
      `Free CTA practice scenarios: board-style design questions, solution defense prep, and architecture trade-off drills. $6,000 total fee. ${RELEASE_YEAR} — no sign-up.`,
    'technical-architect-review-board':
      `Free CTA Review Board prep: practice presenting and defending architecture decisions, scenario walkthroughs, and board Q&A drills. $6,000 total fee. ${RELEASE_YEAR} — no sign-up.`,
    'integration-architect':
      `Integration Architect: Free practice exam — no sign-up. 60 Qs, 67% passing. $400 fee. Sample Qs & ${TITLE_YEAR} guide.`,
    'data-architect':
      `Free Data Architect (ARC-801) practice exam: 60 questions, 58% passing score, 105 min. $400 fee. ${RELEASE_YEAR} — no sign-up.`,
    'system-architect':
      `Salesforce System Architect: Free practice exam — no sign-up. 60 questions, ~58% passing. $400 fee. Sample Qs & ${TITLE_YEAR} study guide.`,
    // Extended coverage: All remaining certs for universal CTR optimization
    'advanced-field-service-ap': `Advanced Field Service AP exam prep: covers work order lifecycle, scheduling optimization & mobile worker tools. 60 Qs, ~65% pass, 90 min. $150 fee. ${RELEASE_YEAR} guide.`,
    'administrator-practice-test': `Free ADM-201 mock test: 60 questions, 68% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'agentforce-specialist': `Free Agentforce Specialist practice exam: 60 questions, ~65% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'ai-associate': `Free AI Associate practice exam: 40 questions, 65% passing score, 70 min. Exam retired Feb 2026. ${RELEASE_YEAR} — no sign-up.`,
    'application-architect': `Free Application Architect practice exam: 60 questions, ~58% passing score, 105 min. $400 fee. ${RELEASE_YEAR} — no sign-up.`,
    'b2b-commerce-admin-ap': `B2B Commerce Admin AP exam prep: covers storefront setup, catalog management, buyer groups & entitlements. 60 Qs, ~65% pass, 90 min. $150 fee. ${RELEASE_YEAR} guide.`,
    'b2b-commerce-developer-ap': `B2B Commerce Developer AP exam prep: covers storefront customization, APIs, checkout & integration. 60 Qs, ~65% pass, 90 min. $150 fee. ${RELEASE_YEAR} guide.`,
    'b2b-solution-architect': `Free B2B Solution Architect practice exam: 60 questions, ~65% passing score, 105 min. $400 fee. ${RELEASE_YEAR} — no sign-up.`,
    'b2c-commerce-architect': `Free B2C Commerce Architect practice exam: 60 questions, ~65% passing score, 105 min. $400 fee. ${RELEASE_YEAR} — no sign-up.`,
    'b2c-commerce-developer': `Free B2C Commerce Dev (CRT-500) practice exam: 60 questions, ~65% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'b2c-solution-architect': `Free B2C Solution Architect practice exam: 60 questions, ~65% passing score, 105 min. $400 fee. ${RELEASE_YEAR} — no sign-up.`,
    'communications-cloud-ap': `Communications Cloud AP exam prep: covers telecom billing, subscriptions, product catalog & order management. 60 Qs, ~65% pass, 90 min. $150 fee. ${RELEASE_YEAR} guide.`,
    'consumer-goods-cloud-ap': `Consumer Goods Cloud AP exam prep: covers retail execution, visits, surveys & route accounting. 60 Qs, ~65% pass, 90 min. $150 fee. ${RELEASE_YEAR} guide.`,
    'consumer-goods-tpm-ap': `Consumer Goods TPM AP exam prep: covers trade promotion planning, fund management & deductions. 60 Qs, ~65% pass, 90 min. $150 fee. ${RELEASE_YEAR} guide.`,
    'contact-center-ap': `Contact Center AP exam prep: covers Service Cloud Voice, CTI, omni-channel routing & agent experience. 60 Qs, ~65% pass, 90 min. $150 fee. ${RELEASE_YEAR} guide.`,
    'cpq-billing-ap': `CPQ & Billing AP exam prep: covers configure-price-quote, subscription billing, amendments & renewals. 60 Qs, ~65% pass, 90 min. $150 fee. ${RELEASE_YEAR} guide.`,
    'crm-analytics-einstein-discovery-consultant': `Free CRM Analytics practice exam: 60 questions, ~65% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'data-360-consultant': `Free Data 360 Consultant practice exam: 60 questions, ~65% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'developer-1': `Free Platform Developer I (PD1) practice exam: 60 questions, ~65% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'dev-lifecycle-deployment-architect': `Free Dev Lifecycle Arch practice exam: 60 questions, ~68% passing score, 120 min. $400 fee. ${RELEASE_YEAR} — no sign-up.`,
    'education-cloud-consultant': `Free Education Cloud Consult practice exam: 60 questions, ~65% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'email-specialist-practice-test': `Free Email Specialist mock test: 60 questions, ~65% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'energy-utilities-ap': `Energy & Utilities AP exam prep: covers meter management, rates, service agreements & billing. 60 Qs, ~65% pass, 90 min. $150 fee. ${RELEASE_YEAR} guide.`,
    'field-service': `Free Field Service Consultant practice exam: 60 questions, ~65% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'financial-services-cloud-ap': `Financial Services Cloud AP exam prep: covers wealth management, insurance, mortgages & referral management. 60 Qs, ~65% pass, 90 min. $150 fee. ${RELEASE_YEAR} guide.`,
    'health-cloud-ap': `Health Cloud AP exam prep: covers patient management, care coordination, care plans & provider search. 60 Qs, ~65% pass, 90 min. $150 fee. ${RELEASE_YEAR} guide.`,
    'heroku-architect': `Free Heroku Architect practice exam: 60 questions, ~65% passing score, 105 min. $400 fee. ${RELEASE_YEAR} — no sign-up.`,
    'heroku-developer-ap': `Heroku Developer AP exam prep: covers dynos, pipelines, add-ons, deployment & Heroku Postgres. 60 Qs, ~65% pass, 90 min. $150 fee. ${RELEASE_YEAR} guide.`,
    'industries-cpq-developer': `Free Industries CPQ Developer practice exam: 60 questions, ~65% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'javascript-developer-i': `Free JavaScript Dev I (CRT-600) practice exam: 60 questions, ~68% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'lightning-web-components-specialist': `Free LWC Specialist practice exam: 60 questions, ~65% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'loyalty-management-ap': `Loyalty Management AP exam prep: covers loyalty programs, points, tiers, member benefits & partner integration. 60 Qs, ~65% pass, 90 min. $150 fee. ${RELEASE_YEAR} guide.`,
    'manufacturing-cloud-ap': `Manufacturing Cloud AP exam prep: covers run rate business, account-based forecasting & rebate management. 60 Qs, ~65% pass, 90 min. $150 fee. ${RELEASE_YEAR} guide.`,
    'marketing-cloud-advanced-cross-channel-ap': `MC Advanced Cross-Channel AP exam prep: covers MC Advertising, Social, Push & Journey Builder integrations. 60 Qs, ~65% pass, 90 min. $150 fee. ${RELEASE_YEAR} guide.`,
    'marketing-cloud-engagement-admin': `Free MC Engagement Admin practice exam: 60 questions, ~65% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'marketing-cloud-engagement-developer': `Free MC Engagement Dev practice exam: 60 questions, ~67% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'marketing-cloud-engagement-foundations': `Free MC Foundations practice exam: 40 questions, ~65% passing score, 75 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'marketing-cloud-intelligence-ap': `MC Intelligence AP exam prep: covers Datorama data connectors, dashboards, KPI tracking & AI insights. 60 Qs, ~65% pass, 90 min. $150 fee. ${RELEASE_YEAR} guide.`,
    'marketing-cloud-personalization-ap': `MC Personalization AP exam prep: covers real-time segmentation, Einstein decisions & Interaction Studio. 60 Qs, ~65% pass, 90 min. $150 fee. ${RELEASE_YEAR} guide.`,
    'media-cloud-ap': `Media Cloud AP exam prep: covers media rights management, ad sales, revenue recognition & media orders. 60 Qs, ~65% pass, 90 min. $150 fee. ${RELEASE_YEAR} guide.`,
    'mulesoft-catalyst-consultant': `Free MuleSoft Catalyst Consult practice exam: 60 questions, ~68% passing score, 120 min. $400 fee. ${RELEASE_YEAR} — no sign-up.`,
    'mulesoft-developer-i': `Free MuleSoft Developer I practice exam: 60 questions, ~70% passing score, 120 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'mulesoft-developer-ii': `Free MuleSoft Developer II practice exam: 60 questions, ~70% passing score, 120 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'mulesoft-integration-architect': `Free MuleSoft Integration Arch practice exam: 60 questions, ~68% passing score, 120 min. $400 fee. ${RELEASE_YEAR} — no sign-up.`,
    'mulesoft-platform-architect': `Free MuleSoft Platform Arch practice exam: 60 questions, ~68% passing score, 120 min. $400 fee. ${RELEASE_YEAR} — no sign-up.`,
    'net-zero-cloud-ap': `Net Zero Cloud AP exam prep: covers carbon accounting, emissions tracking, ESG reporting & sustainability goals. 60 Qs, ~65% pass, 90 min. $150 fee. ${RELEASE_YEAR} guide.`,
    'nonprofit-cloud': `Free Nonprofit Cloud Consult practice exam: 60 questions, ~65% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'nonprofit-success-pack-consultant': `Free NPSP Consultant practice exam: 60 questions, ~65% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'omnistudio-consultant': `Free OmniStudio Consultant practice exam: 60 questions, ~65% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'omnistudio-developer': `Free OmniStudio Developer practice exam: 60 questions, ~65% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'order-management-admin-ap': `Order Management Admin AP exam prep: covers order lifecycle, fulfillment, returns & inventory management. 60 Qs, ~65% pass, 90 min. $150 fee. ${RELEASE_YEAR} guide.`,
    'order-management-developer-ap': `Order Management Developer AP exam prep: covers OMS APIs, custom flows, integrations & developer toolkit. 60 Qs, ~65% pass, 90 min. $150 fee. ${RELEASE_YEAR} guide.`,
    'platform-foundations': `Free Platform Foundations practice exam: 40 questions, ~65% passing score, 75 min. $75 fee. ${RELEASE_YEAR} — no sign-up.`,
    'process-automation-ap': `Process Automation AP exam prep: covers Flow Builder, approval processes, automation rules & invocable actions. 60 Qs, ~65% pass, 90 min. $150 fee. ${RELEASE_YEAR} guide.`,
    'public-sector-solutions-ap': `Public Sector Solutions AP exam prep: covers grants management, licensing, inspections & case management. 60 Qs, ~65% pass, 90 min. $150 fee. ${RELEASE_YEAR} guide.`,
    'revenue-cloud-consultant': `Free Revenue Cloud Consult practice exam: 60 questions, 63% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'sales-foundations': `Free Agentforce Sales Foundations practice exam: 40 questions, 62% passing score, 70 min. $75 fee. ${RELEASE_YEAR} — no sign-up.`,
    'service-cloud': `Free Service Cloud (CRT-261) practice exam: 60 questions, 78% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'slack-administrator': `Free Slack Administrator practice exam: 60 questions, ~65% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'slack-consultant': `Free Slack Consultant practice exam: 60 questions, ~65% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'strategy-designer': `Free Strategy Designer practice exam: 60 questions, ~65% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'tableau-architect': `Free Tableau Architect practice exam: 59 questions, 63% passing score, 105 min. $400 fee. ${RELEASE_YEAR} — no sign-up.`,
    'tableau-consultant': `Free Tableau Consultant practice exam: 60 questions, 63% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'tableau-desktop-foundations': `Free Tableau Desktop Found. practice exam: 40 questions, 48% passing score, 70 min. $75 fee. ${RELEASE_YEAR} — no sign-up.`,
    'tableau-server-administrator': `Free Tableau Server Admin practice exam: 60 questions, ~65% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    'technical-architect-evaluation': `Free CTA Evaluation prep: scenario-based architecture questions, multiple-choice sections, and timed design exercises. $6,000 total fee. ${RELEASE_YEAR} — no sign-up.`,
    'ux-designer': `Free UX Designer practice exam: 60 questions, ~65% passing score, 105 min. $200 fee. ${RELEASE_YEAR} — no sign-up.`,
    // Claude (Anthropic) certifications
    'claude-certified-associate': `Free Claude Associate (CCAO-F) practice exam: 60 questions, 720/1000 passing, 120 min. $99 fee. ${RELEASE_YEAR} — no sign-up.`,
    'claude-certified-developer': `Free Claude Developer (CCDV-F) practice exam: 53 questions, 720/1000 passing, 120 min. $125 fee. ${RELEASE_YEAR} — no sign-up.`,
    'claude-certified-architect-foundations': `Free Claude Architect (CCAR-F) practice exam: 60 questions, 720/1000 passing, 120 min. $125 fee. ${RELEASE_YEAR} — no sign-up.`,
    'claude-certified-architect-professional': `Free Claude Architect Pro (CCAR-P) practice exam: 65 questions, 720/1000 passing, 120 min. $175 fee. ${RELEASE_YEAR} — no sign-up.`,
  }
  const override = ctrDescriptionOverrides[slug]
  if (override) {
    return finalizeMetaDescription(override)
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

/** Practice test pages map to their parent cert for canonical (duplicate without user-selected canonical fix). */
const PRACTICE_TEST_TO_PARENT: Record<string, string> = {
  'administrator-practice-test': 'administrator',
  'email-specialist-practice-test': 'email-specialist',
}

/** SEO metadata for a certification page: unique title <60 chars (absolute), description 140–160, canonical. */
export function getCertMetadata(slug: string): Metadata {
  const certName = slugToDisplayName(slug)
  const examCode = SLUG_TO_EXAM_CODE[slug]
  const titleForMeta = getCertMetaTitle(slug)
  const descForMeta = getCertMetaDescription(slug)
  const canonicalSlug = PRACTICE_TEST_TO_PARENT[slug] || slug
  const canonicalUrl = `${baseUrl}/certifications/${canonicalSlug}`
  const primaryName = getCertPrimaryName(slug, certName)
  // Updated ${RELEASE_YEAR} for title/H1 and E-E-A-T
  const publishedTime = '2025-01-01T00:00:00Z'
  const modifiedTime = '2026-02-12T00:00:00Z'

  // Per-cert dynamic OG image — shows cert name, "Free Practice" badge, release year
  const ogImageUrl = `${baseUrl}/og?t=${encodeURIComponent(primaryName)}`

  return {
    title: { absolute: titleForMeta },
    description: descForMeta,
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
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${primaryName} - Free Practice Questions & Study Guide`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titleForMeta,
      description: descForMeta,
      images: [{ url: ogImageUrl, alt: titleForMeta }],
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
      question: 'What is the Salesforce Administrator (ADM-201) passing score in Summer \'26?',
      answer: 'The ADM-201 passing score is 68%, which means you need at least 41 correct answers out of 60 scored questions. You get 105 minutes, and Salesforce may include 5 unscored pilot questions in the exam session.',
    },
    {
      question: 'What is the ADM-201 exam fee in Summer \'26?',
      answer: 'The Salesforce Certified Platform Administrator (ADM-201) exam fee is typically $200 USD, and the retake fee is usually $100 USD. Fees can vary by country taxes, so confirm the final amount in your Salesforce certification checkout page.',
    },
    {
      question: 'How many questions are on the ADM-201 exam, and what is the passing score?',
      answer: 'The ADM-201 exam has 60 multiple-choice questions. You have 105 minutes and need 68% (41 correct answers) to pass. There are also 5 unscored pilot questions, so your actual exam will have 65 questions.',
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
      question: 'What is the DEV-402 exam fee and passing score in Summer \'26?',
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
    {
      question: 'What is the Platform App Builder (DEV-402) exam passing score and how many questions are on it?',
      answer: 'The Platform App Builder (DEV-402) exam has 60 multiple-choice questions and 105 minutes. The passing score is 63% (approximately 38 correct answers). The exam fee is $200 USD (retake $100 USD). There is no formal prerequisite, but Salesforce strongly recommends holding the Platform Administrator certification first.',
    },
    {
      question: 'What is the hardest section of the DEV-402 Platform App Builder exam?',
      answer: 'Most candidates find the Security and Access section (22%) and Process Automation (24%) the hardest — together they account for nearly half the exam. Security questions require understanding the full sharing model stack: OWD → roles → sharing rules → field-level security → page layouts. Automation questions require knowing when to use Flow vs Approval Process vs legacy Workflow. The key trap: choosing legacy tools (Workflow, Process Builder) over Flow.',
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
      question: 'What is the Sales Cloud Consultant passing score and exam fee in Summer \'26?',
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
    {
      question: 'What is Sales Cloud territory management and how is it tested?',
      answer: 'Enterprise Territory Management (ETM) allows companies to assign accounts and opportunities to territories based on rules (geography, industry, revenue). Territories form a hierarchy, and users assigned to a territory can access its accounts. The Sales Cloud Consultant exam tests territory rule configuration (account assignment rules), territory-based forecast models vs role-based models, and when to use ETM versus account teams or sharing rules. Key exam differentiator: ETM is for account-centric territory models; opportunity teams and account teams are for collaborative selling within a territory.',
    },
    {
      question: 'How does Sales Cloud forecasting work and what does the exam test?',
      answer: 'Collaborative Forecasting in Sales Cloud aggregates opportunity amounts up the role hierarchy to predict future revenue. The exam tests: (1) forecast types (Opportunities, Product Families, Opportunity Splits), (2) forecast categories (Pipeline, Best Case, Commit, Closed Won, Omitted), (3) cumulative forecast rollup vs stage-based, (4) custom forecast categories, and (5) manager adjustments. Key concept: a user\'s forecast includes their own pipeline PLUS all subordinates\' pipelines in the role hierarchy. The most common exam question: "What happens to the forecast when a manager adjusts a subordinate\'s forecast amount?"',
    },
    {
      question: 'What is Lead Conversion in Sales Cloud and what objects are created?',
      answer: 'When a Lead is converted, Salesforce creates: (1) an Account (new or merged with existing), (2) a Contact linked to the Account, and (3) optionally an Opportunity. Lead fields are mapped to Account, Contact, and Opportunity fields via Lead Mapping settings. The original Lead record is marked as "Converted" and is no longer visible in standard Lead views. The Sales Cloud Consultant exam tests when to convert vs merge leads, how duplicate rules interact with lead conversion, and the Lead source vs Lead status distinction.',
    },
    {
      question: 'What is the role of Campaign Influence in Sales Cloud?',
      answer: 'Campaign Influence connects marketing campaigns to won opportunities to show marketing\'s impact on revenue. Primary Campaign Source (on the opportunity) tracks the most influential campaign. Campaign Influence models (Salesforce, Primary Source, or custom AI-driven Einstein Attribution) distribute revenue credit across multiple campaigns. The Sales Cloud Consultant exam tests which model to recommend for a given scenario and how Campaign Influence differs from Campaign ROI reporting. Common scenario: "Marketing wants to see which campaigns contributed to opportunities in the pipeline" — the answer is Campaign Influence, not Campaign ROI.',
    },
    {
      question: 'What are the most common failure points for Sales Cloud Consultant candidates?',
      answer: 'Common failure points: (1) Forecasting — confusing forecast categories, not understanding cumulative rollup, or not knowing the impact of opportunity stage on forecast category mapping; (2) Territory Management — confusing ETM with sharing rules or role hierarchy for record access; (3) Solution Design questions — choosing a feature that solves the problem technically but is not the recommended Salesforce best-practice approach; (4) Integration with Marketing Cloud — not knowing Campaign Influence and Pardot/Account Engagement sync behaviour. Aim for 75%+ on timed mocks consistently before booking.',
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
      question: 'What is the Service Cloud Consultant passing score and exam fee in Summer \'26?',
      answer: 'The Agentforce Service Consultant exam has 60 multiple-choice questions, 105 minutes, and a passing score of 78%. The exam fee is $200 USD (retake $100 USD). Salesforce may include 5 unscored pilot questions.',
    },
    {
      question: 'What are the highest-weight sections in the Service Cloud Consultant exam?',
      answer: 'The top sections by weight are: Service Cloud Solution Design (17%), Case Management (15%), and Contact Center Analytics (16%). Focus on Omni-Channel routing, entitlements and SLAs, Knowledge base setup, case escalation rules, and CTI integration patterns.',
    },
    {
      question: 'What is the difference between Service Cloud Consultant and Platform Administrator?',
      answer: 'Platform Administrator covers general Salesforce admin skills. Service Cloud Consultant is focused on designing customer service solutions: cases, entitlements, SLAs, knowledge articles, Omni-Channel, live chat, and reporting for contact centers. The Consultant exam is more architecture and best-practice oriented.',
    },
    {
      question: 'What is Omni-Channel routing in Service Cloud and how is it tested?',
      answer: 'Omni-Channel automatically routes work items (cases, chats, messaging sessions) to the most appropriate available agent based on routing logic. Two routing models: Queue-based routing (routes to queues, agents pull work) and Skills-based routing (routes directly to agents with the right skills and capacity). Key concepts the exam tests: routing configurations (push vs pull), presence statuses, capacity models (concurrent vs effort-based), and service channels. Most common exam scenario: "route live chat sessions to agents with the Spanish language skill and available capacity" — answer is Skills-based routing with a skill requirement.',
    },
    {
      question: 'What are Entitlements and Service Contracts in Service Cloud?',
      answer: 'Entitlements define what support a customer is entitled to — the support terms attached to an account or asset (e.g., "Phone Support 24/7", "Web Support 9-5 M-F"). Service Contracts are the commercial agreements with customers that contain the entitlement terms. Entitlement Process defines the SLA timelines and escalation milestones. The exam tests: when to use Entitlements vs Service Contracts, how Milestone Actions trigger when SLAs are at risk, and how Entitlements are linked to Cases to track SLA compliance. Common failure point: confusing Entitlements with Case Assignment Rules or Escalation Rules.',
    },
    {
      question: 'What is Salesforce Knowledge and how does the exam test its configuration?',
      answer: 'Salesforce Knowledge is a knowledge base for creating, managing, and publishing articles that agents and customers can search. Key concepts: Article Types (categories of articles — FAQ, How-To, Product), Data Categories (hierarchical classification for visibility and search), and Publication Channels (Internal, Salesforce Sites, Customer Community). The exam tests: how to configure Knowledge to show relevant articles during case creation, how Data Categories control article visibility for different user groups, and how to set up suggested articles in Case Feed. Common scenario: "agents should see relevant articles automatically when working on a case" — answer involves Knowledge Sidebar and article suggestions configuration.',
    },
    {
      question: 'What are the most common reasons Service Cloud Consultant candidates fail?',
      answer: 'Common failure points: (1) Omni-Channel configuration — confusing queue-based vs skills-based routing, or not knowing how presence statuses affect agent availability; (2) Entitlements — confusing Entitlement Processes with Case Escalation Rules; (3) Solution Design questions — choosing a feature that works technically but is not Salesforce\'s recommended best-practice approach (e.g., choosing a custom solution when Einstein Case Routing exists); (4) Contact Center analytics — not knowing which standard report types cover case volume, CSAT, or SLA compliance. Aim for 77%+ on timed mocks (67% real threshold, 10% buffer) before booking.',
    },
    {
      question: 'What is CTI integration in Service Cloud and when does the exam test it?',
      answer: 'CTI (Computer Telephony Integration) connects phone systems to Salesforce, enabling agents to handle calls directly in the browser via Open CTI or Service Cloud Voice. Open CTI is an API that connects third-party phone systems to Salesforce without browser plugins. Service Cloud Voice is Salesforce\'s native telephony integration with Amazon Connect, including real-time transcription and AI-powered agent guidance. The exam tests when to recommend CTI vs standard phone workflows and the capabilities of Service Cloud Voice. Key differentiator: if real-time call transcription or voice AI is required, recommend Service Cloud Voice — not generic Open CTI.',
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
      question: 'What is the PD1 passing score and exam format in Summer \'26?',
      answer: 'The Platform Developer I (PD1) exam has 60 multiple-choice questions, 105 minutes, and a passing score of 68% (41 correct). Salesforce may include 5 unscored pilot questions. The exam costs $200 USD (retake $100 USD) and is available online-proctored or at a test center.',
    },
    {
      question: 'What are the most common reasons candidates fail PD1?',
      answer: 'Common failure points: (1) not knowing governor limits (SOQL 100/transaction, DML 150/transaction) and when they trigger, (2) writing DML or SOQL inside a for loop — the exam\'s most common trap, (3) misunderstanding the 75% code coverage rule and how Test.startTest()/stopTest() affect limit resets, and (4) confusing @AuraEnabled, @RestResource, and @InvocableMethod annotations.',
    },
    {
      question: 'How long should I study for PD1 and what mock score means I am ready?',
      answer: 'Most candidates with some object-oriented programming background need 4–6 weeks. Target benchmark: score 78%+ on three timed full mocks (60 Q / 110 min), taken one week apart. The actual passing threshold is 68%, but the extra buffer accounts for exam nerves and unfamiliar phrasing on the day.',
    },
    {
      question: 'What is the bulkification pattern in Apex and why does PD1 test it heavily?',
      answer: 'Bulkification is the practice of writing Apex that processes records in collections (Lists and Maps) rather than one record at a time. The pattern: query all needed records BEFORE loops using a Map keyed by Id, collect changes INSIDE loops into a List, then perform a single DML call AFTER the loop. PD1 tests this heavily because SOQL or DML inside a for loop is the most common governor limit violation in real Salesforce orgs. The exam typically shows code with a loop containing a query or insert and asks candidates to identify the problem or rewrite the code correctly.',
    },
    {
      question: 'What is the difference between a Future method and a Queueable class in Salesforce?',
      answer: '@Future methods are the simplest form of async Apex — they run in a separate transaction, support HTTP callouts (when callout=true), and resolve mixed DML errors. Limitations: cannot be chained, cannot pass sObjects directly, limited monitoring. Queueable Apex (implements Queueable) is more powerful: it can be chained (job enqueues another job), can pass complex objects, and provides a Job ID for monitoring via AsyncApexJob. PD1 exam rule: if the question involves chaining async jobs or monitoring job completion, the answer is Queueable. If it\'s a simple callout from a trigger, Future method is often acceptable.',
    },
    {
      question: 'What are the most important Apex annotations PD1 candidates must know?',
      answer: '@isTest — marks a class or method as a test class (does not count toward code coverage). @TestVisible — exposes private methods/variables to test classes without changing access modifiers. @AuraEnabled — exposes an Apex method to Lightning components (LWC and Aura). @InvocableMethod — exposes an Apex method as an action in Flow. @RemoteAction — exposes methods to Visualforce pages via JavaScript remoting. @RestResource / @HttpGet / @HttpPost — creates REST API endpoints in Apex. The PD1 exam frequently presents a scenario and asks which annotation to add.',
    },
    {
      question: 'What is the difference between SOQL and SOSL and when should each be used?',
      answer: 'SOQL (Salesforce Object Query Language) queries a specific object and its related objects: SELECT Id, Name FROM Account WHERE CreatedDate = TODAY. Use SOQL when you know the object and want records matching specific criteria. SOSL (Salesforce Object Search Language) searches across multiple objects simultaneously using text search: FIND \'Smith\' IN ALL FIELDS RETURNING Account, Contact, Lead. Use SOSL when you need to search across multiple objects for a text string — for example, building a search feature that returns results from any object. PD1 tip: if a scenario says "search across multiple objects for a keyword," the answer is SOSL, not SOQL.',
    },
    {
      question: 'How does Salesforce\'s security model relate to PD1 Apex development?',
      answer: 'PD1 tests "with sharing" vs "without sharing" class declarations: "with sharing" enforces the running user\'s sharing rules and OWD (recommended for most cases); "without sharing" bypasses sharing and runs with system-level access. If a class doesn\'t specify sharing, it inherits from the calling class. PD1 also tests CRUD/FLS enforcement — Apex does not automatically enforce field-level security or CRUD permissions (unlike Visualforce or LWC). Developers must explicitly check Schema.DescribeFieldResult or use Security.stripInaccessible() to enforce FLS. This is a common exam differentiator.',
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
      question: 'What is the AI Associate passing score and exam fee?',
      answer: 'The Salesforce AI Associate certification was retired on February 2, 2026. When active, it had 40 multiple-choice questions, 70 minutes, a 65% passing score, and a $75 USD fee (free retake). Salesforce now recommends the Agentforce Specialist certification and Agentblazer Status as replacements.',
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
      answer: 'The Advanced Administrator (ADM-211) certification has a passing score of 65% and exam fee of $200 USD (retake $100 USD). The exam consists of 60 multiple-choice questions with 105 minutes allowed.',
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
      question: 'What is the PD2 passing score and exam fee in Summer \'26?',
      answer: 'The Platform Developer II (PD2) exam has 60 multiple-choice questions, 120 minutes, and a passing score of 70%. The exam fee is $200 USD (retake $100 USD). PD1 certification is a mandatory prerequisite — you cannot sit PD2 without it.',
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
      question: 'What is the Experience Cloud Consultant passing score and exam fee in Summer \'26?',
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
  'data-360-consultant': [
    {
      question: 'What is Data Cloud (formerly Customer Data Platform)?',
      answer: 'Data Cloud unifies customer data from multiple sources, creates a single customer identity, and activates that data across Salesforce clouds for personalized experiences.',
    },
    {
      question: 'What experience do I need for Data 360 Consultant?',
      answer: 'You should have Salesforce CRM experience and understanding of data management, marketing, or analytics. Hands-on experience with Data Cloud setup, identity resolution, and activation is recommended.',
    },
    {
      question: 'What is the Data 360 Consultant passing score and exam fee in Summer \'26?',
      answer: 'The Salesforce Data 360 Consultant exam has 60 multiple-choice questions, 105 minutes, and a passing score of 70%. The exam fee is $200 USD (retake $100 USD). Platform Administrator certification is required.',
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
    {
      question: 'What is the passing score and exam fee for the Marketing Cloud Email Specialist certification?',
      answer: 'The Marketing Cloud Email Specialist exam has 60 multiple-choice questions, 105 minutes, and a passing score of 67%. The exam fee is $200 USD (retake $100 USD). No formal prerequisite, but hands-on Marketing Cloud Email Studio experience is strongly recommended before booking.',
    },
    {
      question: 'What are the highest-weight topics on the Email Specialist exam?',
      answer: 'The main sections are: Email Marketing Best Practices (15%), Content Creation and Delivery (24%), Marketing Automation (26%), Subscriber and Data Management (26%), and Insights and Analytics (10%). Marketing Automation and Subscriber/Data Management together account for over half the exam — prioritise Journey Builder, Automation Studio, Data Extensions, and list management.',
    },
    {
      question: 'How long should I study for the Marketing Cloud Email Specialist exam?',
      answer: 'Most candidates with some Marketing Cloud experience study for 4–6 weeks. Hands-on practice in Email Studio, Content Builder, and Automation Studio is essential — reading alone is insufficient. Target 77%+ on timed full mocks (60 Q / 105 min) before booking.',
    },
    {
      question: 'What is the difference between a hard bounce and a soft bounce in Marketing Cloud?',
      answer: 'Hard bounces are permanent delivery failures — the email address is invalid or the server explicitly rejects it. Marketing Cloud automatically marks hard-bounced addresses as Bounced and excludes them from future sends. Soft bounces are temporary failures (mailbox full, server busy) — Marketing Cloud retries soft bounces before converting them to bounced status. The exam tests which action Marketing Cloud takes automatically for each bounce type.',
    },
    {
      question: 'What AMPscript functions are most commonly tested in the Email Specialist exam?',
      answer: 'The four most tested AMPscript functions are: Lookup() (retrieve a single value from a Data Extension), LookupRows() (retrieve a full row set), AttributeValue() (get a subscriber attribute value), and IIF() (inline conditional). Also know how to use SET and OUTPUT to assign and display values, and how to reference Data Extension fields inside personalisation strings.',
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
    {
      question: 'What is the difference between MuleSoft Integration Foundations and MuleSoft Developer I?',
      answer: 'Integration Foundations ($75, 40 questions, 70 min) is a conceptual entry-level cert focused on API-led connectivity terminology and Anypoint Platform awareness — no coding required. MuleSoft Developer I ($200, 60 questions) is a hands-on technical certification requiring knowledge of Anypoint Studio, DataWeave transformations, and building Mule applications. Foundations suits project team members; Developer I is for practising integration developers.',
    },
    {
      question: 'How hard is the MuleSoft Integration Foundations exam?',
      answer: 'Most candidates find the exam accessible with 1–2 weeks of focused preparation. It tests conceptual understanding — API-led connectivity layers (System, Process, Experience), Anypoint Platform components, and integration terminology. No hands-on coding is required. Candidates with project management or business analyst backgrounds frequently pass with structured study.',
    },
    {
      question: 'How should I study for the MuleSoft Integration Foundations exam?',
      answer: 'Recommended approach: (1) Complete the MuleSoft Integration Foundations preparation trail on Trailhead, (2) Memorise the three API-led connectivity layers and what each does, (3) Understand each Anypoint Platform component — Design Center, API Manager, Runtime Manager, Anypoint Exchange, and Anypoint Studio, (4) Practice with mock questions. Most candidates are ready in 1–2 weeks with 1–2 hours of daily study.',
    },
    {
      question: 'Can I take the MuleSoft Integration Foundations exam online?',
      answer: 'Yes. The exam is available as an online-proctored exam through Webassessor or at a Pearson VUE test center. Online proctoring requires a webcam, stable internet connection, and a quiet private space. Notes and reference materials are not permitted during the exam.',
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
      question: 'Are there free Salesforce Slack Developer practice exams for Summer \'26?',
      answer: 'Yes. This page includes free Slack Developer practice questions with explanations for the current Salesforce release so you can test your readiness before paying for the official exam. Use these with hands-on Slack app building practice for best results.',
    },
    {
      question: 'How much does the Salesforce Slack Developer exam cost in Summer \'26?',
      answer: 'The Salesforce Slack Developer certification exam fee is commonly listed as $200 USD, with retake pricing often around $100 USD. Check the official Salesforce registration page for your region-specific final price and taxes.',
    },
    {
      question: 'What is the passing score and exam format for the Salesforce Slack Developer certification?',
      answer: 'The Salesforce Slack Developer exam has 60 multiple-choice questions, 105 minutes, and a passing score of approximately 68%. The exam fee is $200 USD (retake $100 USD). No formal prerequisite, but hands-on Slack app development experience using the Slack API and Bolt Framework is strongly recommended.',
    },
    {
      question: 'What topics are covered in the Salesforce Slack Developer exam?',
      answer: 'The exam covers Slack Platform fundamentals (Block Kit, Events API, Web API), app architecture (Bolt Framework, App Manifests, OAuth, Socket Mode), interactivity (slash commands, modals, shortcuts, actions), distribution and security (workspace permissions, rate limits), and integration patterns (webhooks, external services). Block Kit interactivity and the Bolt Framework are the most heavily tested areas.',
    },
    {
      question: 'How hard is the Salesforce Slack Developer certification?',
      answer: 'The Slack Developer exam is moderately difficult. Candidates with JavaScript or Node.js experience and hands-on Slack app building practice generally find it manageable with 4–6 weeks of preparation. The main challenge is breadth — Block Kit, Events API, Web API, Bolt Framework, OAuth, Socket Mode, modals, shortcuts, and App Home all need to be understood at a working level.',
    },
    {
      question: 'Do I need to know the Bolt Framework for the Slack Developer exam?',
      answer: 'Yes. Bolt is Slack\'s official app development framework for JavaScript, Python, and Java. The exam tests when to use Bolt, how it handles events and actions, and how it abstracts OAuth and payload verification. Understand the difference between using the raw Slack Web API vs Bolt, and be able to identify correct event handler patterns in code examples.',
    },
    {
      question: 'What is the difference between the Slack Events API and the Web API?',
      answer: 'The Events API is push-based — Slack sends event payloads to your app\'s endpoint when subscribed events occur (message posted, user joined, reaction added). The Web API is a request/response HTTP API your app calls to take actions (post messages, open modals, update profiles). Apps use both: Events API to listen and react, Web API to act. Socket Mode delivers Events API payloads over WebSocket instead of HTTP, eliminating the need for a public endpoint.',
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
      question: 'What is the CPQ Administrator passing score and exam fee in Summer \'26?',
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
      question: 'What is the Business Analyst passing score and exam fee in Summer \'26?',
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
      question: 'Is the Salesforce Agentforce Specialist exam hard?',
      answer:
        'It is scenario-heavy and still relatively new, so many candidates find it tough until they have built agents hands-on. Use the difficulty heatmap on this page: Agentforce Configuration and Integration and Best Practices are often the steepest sections; Platform and Security is usually moderate. Budget sandbox time for Topics, Actions, Einstein Trust Layer, Data Cloud grounding, and human escalation paths.',
    },
    {
      question: 'What is Agentforce?',
      answer: 'Agentforce is Salesforce\'s AI-powered agent solution that helps automate customer interactions using AI agents that can answer questions and perform tasks.',
    },
    {
      question: 'Do I need Platform Administrator before Agentforce Specialist?',
      answer: 'Yes, Platform Administrator knowledge is recommended. You should have hands-on experience configuring and optimizing AI agents in Salesforce.',
    },
    {
      question: 'What is the Agentforce Specialist passing score and exam fee in Summer \'26?',
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
    {
      question: 'What is the difference between an Agentforce Topic and an Agentforce Action?',
      answer: 'A Topic defines an area of expertise — it tells the agent when a request falls within its scope (via a natural language description) and provides the context, instructions, and available Actions for that domain. An Action is the discrete task the agent executes within a Topic: this could be a Flow, an Apex method, an external API call, a Prompt Template, or a standard action like escalating to a human agent. Think of Topics as "departments" and Actions as "tasks within that department." The exam frequently presents a requirement and asks whether to configure a Topic, an Action, or both.',
    },
    {
      question: 'What are Guardrails in Agentforce and how do they differ from Agent Instructions?',
      answer: 'Guardrails are negative constraints — explicit rules for what the agent must never do or say (e.g., "never make pricing commitments", "never discuss competitor products"). Agent Instructions are positive directives — they define the agent\'s persona, tone, response style, and scope. Guardrails prevent harmful or off-brand behaviour; Instructions guide on-brand, effective responses. The exam tests knowledge of both and asks candidates to identify which configuration element prevents a specific unwanted agent behaviour.',
    },
    {
      question: 'How does Data Cloud grounding work with Agentforce?',
      answer: 'Data Cloud grounding provides Agentforce agents with access to unified customer profiles across all data sources, not just standard Salesforce CRM data. When Data Cloud grounding is enabled, the agent can retrieve real-time, consolidated customer context (purchase history, service interactions, marketing engagement) to produce more accurate, personalised responses. Without Data Cloud, the agent can only access data through explicit Flow or API actions triggered by the agent. The exam distinguishes between merge field grounding (from CRM records) and Data Cloud grounding (unified profiles across multiple data sources).',
    },
    {
      question: 'What channels can Agentforce agents be deployed on?',
      answer: 'Agentforce agents can be deployed across Experience Cloud sites, Salesforce-embedded web chat, Slack, and messaging channels including SMS and WhatsApp. Each channel has specific configuration requirements: Experience Cloud channels require the agent to be activated on an Experience Cloud site; Slack channels require the Slack integration. The exam tests which channel configuration steps are required and how the human escalation (handoff) works differently across channels.',
    },
    {
      question: 'What is the recommended study approach for Agentforce Specialist?',
      answer: 'The most effective preparation combines: (1) completing the official Agentforce Specialist Trailmix on Trailhead (this is directly aligned to the exam outline), (2) hands-on practice in an Agentforce sandbox — actually build an agent with Topics and Actions, test it in Agent Builder, and observe how the Trust Layer behaves, (3) review the Einstein Trust Layer documentation specifically, and (4) practice with scenario-based mock questions. Candidates with hands-on Agentforce implementation experience consistently report higher first-attempt pass rates. The exam evolves with each Salesforce release, so ensure you are studying Summer \'26 materials.',
    },
    {
      question: 'How is Agentforce Specialist different from the AI Associate certification?',
      answer: 'AI Associate is a foundational, conceptual exam (40 questions, $75, 70 min) that tests AI literacy: AI terminology, Salesforce Einstein product categories, and responsible AI principles. It does not require any hands-on configuration experience. Agentforce Specialist is a practitioner-level exam (60 questions, $200, 105 min) that tests the ability to configure, deploy, and optimise actual Agentforce agents — Topics, Actions, Guardrails, Prompt Templates, and Trust Layer. AI Associate is a recommended foundation before Agentforce Specialist, though not a formal prerequisite.',
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
    {
      question: 'What is the passing score and exam fee for the Salesforce Certified Tableau Data Analyst?',
      answer: 'The Tableau Data Analyst exam has 60 questions, 105 minutes, and a passing score of 65%. The exam fee is $200 USD (retake $100 USD). No formal prerequisite, though Salesforce recommends Tableau Desktop experience and real-world data analysis practice before attempting.',
    },
    {
      question: 'What topics are covered in the Tableau Data Analyst exam?',
      answer: 'The exam covers: connecting to and preparing data (live vs extract, data types, joins, blending), data analysis (LOD expressions, table calculations, parameters, sets), visualisation design (chart selection, formatting, filters, context filters), dashboards and stories (actions, layout, performance), and sharing and collaboration (publishing, permissions, Tableau Server/Cloud). LOD expressions and table calculations are the highest-difficulty topics.',
    },
    {
      question: 'What is the difference between a FIXED, INCLUDE, and EXCLUDE LOD expression in Tableau?',
      answer: 'FIXED computes an aggregate at a declared dimension level, independent of the view\'s dimensions — used for totals or ratios that must not change as the view changes. INCLUDE adds dimensions to the view\'s existing level of detail, computing at a finer granularity. EXCLUDE removes dimensions from the view\'s level, computing at a coarser level. On the exam: "regardless of the view" → FIXED; "per customer within each region" → INCLUDE; "average across all products, ignoring the product filter" → EXCLUDE.',
    },
    {
      question: 'How long should I study for the Tableau Data Analyst exam?',
      answer: 'Most candidates need 4–6 weeks of preparation with hands-on Tableau Desktop practice as the core activity. Theory alone is not sufficient — build real dashboards, practise LOD expressions in a workbook, and experiment with context filters and table calculations. Target 80%+ on practice assessments before booking. The exam tests applied knowledge, not just definitions.',
    },
    {
      question: 'What is the difference between data blending and data joining in Tableau?',
      answer: 'Joining combines tables from the same data source connection at query time — the result is a single table sent to Tableau. Blending links two separate data source connections at the view level — Tableau queries each source independently and combines aggregated results on a common linking dimension. Use joining when tables are in the same database; use blending when data lives in different systems that cannot share a connection.',
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

/** Optional overrides for the four generic base FAQs (People Also Ask–style wording per high-value slug). */
const CERT_BASE_FAQ_OVERRIDES: Partial<
  Record<
    string,
    Partial<
      Record<
        'coverage' | 'freeQuestions' | 'prepare' | 'officialOutline',
        FaqItem
      >
    >
  >
> = {
  'agentforce-specialist': {
    coverage: {
      question: `What is on the Salesforce Certified Agentforce Specialist exam syllabus (${TITLE_YEAR})?`,
      answer: `The syllabus follows Salesforce's official Agentforce Specialist exam guide: four weighted areas — Agentforce Configuration (25%), Platform and Security (25%), Agent Capabilities and Optimization (25%), and Integration and Best Practices (25%). Expect scenario questions on Topics and Actions, guardrails vs instructions, Einstein Trust Layer, Data Cloud grounding, channels, and human escalation. Use the section weightage, architecture overview, and key concepts on this page to match the current ${TITLE_YEAR} outline.`,
    },
    freeQuestions: {
      question: 'Are there free Salesforce Agentforce Specialist practice questions?',
      answer:
        'Yes. This page includes 15 free sample questions with explanations — scenario-style, similar to the real exam. Use them before you book; aim for steady scores above the passing threshold on full timed sets.',
    },
    prepare: {
      question: 'How should I prepare for the Agentforce Specialist certification exam?',
      answer:
        'Use the official Agentforce Specialist Trailmix, then build at least one agent in a sandbox (Topics, Actions, Trust Layer behavior). Prioritise the difficulty heatmap “Hard” sections, review the FAQs on this page, and schedule the exam when your mock scores are consistent.',
    },
    officialOutline: {
      question: 'Where is the official Salesforce Agentforce Specialist exam guide?',
      answer:
        'Salesforce publishes the official exam guide in the Trailhead certification catalog (exam name: Salesforce Certified Agentforce Specialist). Cross-check the published outline with this page’s weightage and topics — we align content to that guide for exam prep.',
    },
  },
  'claude-certified-associate': {
    coverage: {
      question: 'What is covered on the Claude Certified Associate – Foundations (CCAO-F) exam?',
      answer: 'The CCAO-F covers prompt engineering, output evaluation (the largest domain), model selection, Projects and configuration, responsible AI, workflow integration, and troubleshooting. All questions are scenario-based — no coding required.',
    },
    officialOutline: {
      question: 'Where can I find the official CCAO-F exam guide?',
      answer: 'Anthropic publishes the official Claude Certified Associate: Foundations Exam Guide on the Claude Partner Network portal and Pearson VUE. This page aligns with that guide.',
    },
  },
  'claude-certified-developer': {
    coverage: {
      question: 'What is covered on the Claude Certified Developer – Foundations (CCDV-F) exam?',
      answer: 'The CCDV-F covers eight domains: Applications & Integration (heaviest weight), Model Selection & Optimization, Claude API integration, agent development, MCP server design, prompt engineering, security, and software delivery. The exam tests applied engineering judgment.',
    },
    officialOutline: {
      question: 'Where can I find the official CCDV-F exam guide?',
      answer: 'Anthropic publishes the official Claude Certified Developer: Foundations Exam Guide on the Claude Partner Network portal and Pearson VUE. This page aligns with that guide.',
    },
  },
  'claude-certified-architect-foundations': {
    coverage: {
      question: 'What is covered on the Claude Certified Architect – Foundations (CCAR-F) exam?',
      answer: 'The CCAR-F covers five domains: Agentic Architecture and Orchestration (27%), Claude Code Configuration and Workflows (20%), Tool Design and MCP Integration (18%), Prompt Engineering and Structured Output, and Context Management and Reliability.',
    },
    officialOutline: {
      question: 'Where can I find the official CCAR-F exam guide?',
      answer: 'Anthropic publishes the official Claude Certified Architect: Foundations Exam Guide on the Claude Partner Network portal and Pearson VUE. This page aligns with that guide.',
    },
  },
  'claude-certified-architect-professional': {
    coverage: {
      question: 'What is covered on the Claude Certified Architect – Professional (CCAR-P) exam?',
      answer: 'The CCAR-P covers seven domains including enterprise-scale AI architecture, advanced multi-agent orchestration, security architecture, production reliability and observability, cost optimization, compliance and governance, and migration strategy. CCAR-F is a prerequisite.',
    },
    officialOutline: {
      question: 'Where can I find the official CCAR-P exam guide?',
      answer: 'Anthropic publishes the official Claude Certified Architect: Professional Exam Guide on the Claude Partner Network portal and Pearson VUE. This page aligns with that guide.',
    },
  },
}

export function getCertFaq(slug: string, certTitle: string): FaqItem[] {
  const faqName = getCertFaqName(slug, certTitle)
  const formerName = getCertFormerName(slug)
  const formerlyPhrase = formerName ? `—formerly ${formerName}—` : ''
  const baseOverrides = CERT_BASE_FAQ_OVERRIDES[slug]

  // Get cert-specific FAQs if available
  const certSpecificFaqs = CERT_SPECIFIC_FAQS[slug] || []

  // Base FAQs (always included) — also used for FAQPage schema
  const baseCoverage: FaqItem = {
    question: `What is covered on the ${faqName} exam?`,
    answer: formerName
      ? `The ${faqName} exam${formerlyPhrase} covers section-wise weightage as shown above. Use the exam topics and practice questions on this page to align your study with the official outline.`
      : `This page shows the section-wise exam weightage so you know exactly which topics carry the most weight. Use the exam topics and practice questions above to align your study with the official outline.`,
  }
  const baseFree: FaqItem = {
    question: `Are there free practice questions for the ${faqName} exam?`,
    answer: `Yes. This page includes 15 free sample practice questions with explanations. Use them to test your knowledge before booking the exam.`,
  }
  const basePrepare: FaqItem = {
    question: `How do I prepare for the ${faqName} certification?`,
    answer: formerName
      ? `Use the exam tips, prerequisites, and study strategy on this ${faqName} study guide${formerlyPhrase} Focus first on the highest-weighted sections, then take the sample practice questions. Schedule the exam when you consistently score well on practice tests.`
      : `Use the exam tips, prerequisites, and study strategy on this page. Focus first on the highest-weighted sections, then take the sample practice questions. Schedule the exam when you consistently score well on practice tests.`,
  }
  const baseOfficial: FaqItem = {
    question: `Where can I find the official exam outline for ${faqName}?`,
    answer: `Salesforce publishes exam guides and outlines on Trailhead (trailhead.salesforce.com). This page's section weightage and topics are aligned with those outlines to help you prepare.`,
  }

  const baseFaqs: FaqItem[] = [
    { ...baseCoverage, ...baseOverrides?.coverage },
    { ...baseFree, ...baseOverrides?.freeQuestions },
    { ...basePrepare, ...baseOverrides?.prepare },
    { ...baseOfficial, ...baseOverrides?.officialOutline },
  ]
  
  // Combine cert-specific FAQs with base FAQs
  // Insert cert-specific FAQs after the first base FAQ for better SEO
  return [
    baseFaqs[0],
    ...certSpecificFaqs,
    baseFaqs[1],
    baseFaqs[2],
    baseFaqs[3],
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

/** JSON-LD Table for exam section weightage — targets Featured Snippets for "X exam weightage" queries. */
export function getExamWeightageTableJsonLd(
  slug: string,
  certTitle: string
): { '@context': string; '@type': string; name: string; itemListElement: object[] } | null {
  const sections = getExamWeightage(slug)
  if (!sections || sections.length === 0) return null
  const examCode = SLUG_TO_EXAM_CODE[slug]
  const listName = examCode
    ? `${certTitle} (${examCode}) Exam Section Weightage`
    : `${certTitle} Exam Section Weightage`
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: listName,
    itemListElement: sections.map((section, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: section.name,
      description: `${section.percentage}%`,
    })),
  }
}

/** Single H1 per cert page: aligned with query intent (Complete ${RELEASE_YEAR} Guide) for CTR. */
export function getCertH1Text(slug: string): string {
  // ADM-201: official current name + legacy code for long-term ranking stability
  if (slug === 'administrator') {
    return `Salesforce Certified Platform Administrator (ADM-201) Study Guide & Free Practice Questions (${TITLE_YEAR})`
  }
  // PD1: align H1 with title tag intent — "Free Practice Exam" is the highest-CTR signal
  if (slug === 'developer-1') {
    return `Salesforce PD1 Certification: Free Practice Exam & Study Guide (${TITLE_YEAR})`
  }
  // Custom H1s for top pages by GSC impressions — matches title intent for higher CTR
  if (slug === 'email-specialist') {
    return `Salesforce Email Specialist Certification: Free Practice Exam & Study Guide (${TITLE_YEAR})`
  }
  if (slug === 'pardot-specialist') {
    return `Salesforce Pardot Specialist Certification: Free Practice Exam & Study Guide (${TITLE_YEAR})`
  }
  if (slug === 'slack-developer') {
    return `Salesforce Slack Developer Certification: Free Practice Exam & Study Guide (${TITLE_YEAR})`
  }
  if (slug === 'data-architect') {
    return `Salesforce Data Architect Certification: Free Practice Exam & Study Guide (${TITLE_YEAR})`
  }
  if (slug === 'developer-2') {
    return `Salesforce Platform Developer II (PD2): Free Practice Exam & Study Guide (${TITLE_YEAR})`
  }
  if (slug === 'marketing-cloud-consultant') {
    return `Salesforce Marketing Cloud Consultant: Free Practice Exam & Study Guide (${TITLE_YEAR})`
  }
  if (slug === 'technical-architect') {
    return `Salesforce Certified Technical Architect (CTA): Study Guide & Practice Questions (${TITLE_YEAR})`
  }
  if (slug === 'business-analyst') {
    return `Salesforce Business Analyst Certification: Free Practice Exam & Study Guide (${TITLE_YEAR})`
  }
  if (slug === 'app-builder') {
    return `Salesforce Platform App Builder (DEV-402): Free Practice Exam & Study Guide (${TITLE_YEAR})`
  }
  if (slug === 'mulesoft-integration-architect') {
    return `MuleSoft Integration Architect Certification: Free Practice Exam & Study Guide (${TITLE_YEAR})`
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

/** Practice intro text with dynamic question count. Use for consistent, accurate messaging. */
export function getPracticeQuestionsIntro(count: number, suffix = ''): string {
  const base = `Test your knowledge with these ${count} sample questions`
  return suffix ? `${base} ${suffix}` : `${base}.`
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

/** AP Exam → Parent Role mapping for salary proxy. Used to inject Occupation schema on AP pages. */
export const AP_SLUG_TO_PARENT_ROLE: Record<string, string> = {
  // Industry/Solution Cloud APs
  'health-cloud-ap': 'service-cloud',
  'financial-services-cloud-ap': 'sales-cloud',
  'manufacturing-cloud-ap': 'sales-cloud',
  'consumer-goods-cloud-ap': 'sales-cloud',
  'energy-utilities-ap': 'sales-cloud',
  'communications-cloud-ap': 'service-cloud',
  'public-sector-solutions-ap': 'sales-cloud',
  'media-cloud-ap': 'sales-cloud',
  'process-automation-ap': 'administrator',
  'cpq-billing-ap': 'cpq-administrator',
  'order-management-admin-ap': 'administrator',
  'b2b-commerce-admin-ap': 'app-builder',
  'b2b-commerce-developer-ap': 'b2c-commerce-developer',
  'b2c-commerce-developer-ap': 'b2c-commerce-developer',
  'consumer-goods-tpm-ap': 'administrator',
  'marketing-cloud-personalization-ap': 'marketing-cloud-consultant',
  'marketing-cloud-advanced-cross-channel-ap': 'marketing-cloud-consultant',
  'marketing-cloud-intelligence-ap': 'data-360-consultant',
  'contact-center-ap': 'service-cloud',
  'advanced-field-service-ap': 'field-service',
  'loyalty-management-ap': 'service-cloud',
  'heroku-developer-ap': 'b2c-commerce-developer',
}

/** Get parent role for an AP exam slug. */
export function getApParentRoleSlug(apSlug: string): string | undefined {
  return AP_SLUG_TO_PARENT_ROLE[apSlug]
}

/** Get occupation data for an AP by proxying to parent role. */
export function getApOccupationData(apSlug: string) {
  const parentRoleSlug = getApParentRoleSlug(apSlug)
  if (!parentRoleSlug) return undefined
  return getOccupationData(parentRoleSlug)
}

/** Difficulty level for exam ranking and role profile */
export type CertDifficulty = 'easy' | 'medium' | 'hard'

export const SLUG_TO_DIFFICULTY: Record<string, CertDifficulty> = {
  // Easy (entry-level, <3 months prep)
  'platform-foundations': 'easy',
  'ai-associate': 'easy',
  'marketing-cloud-engagement-foundations': 'easy',
  'mulesoft-integration-foundations': 'easy',
  'sales-foundations': 'easy',
  
  // Medium (foundational, 3-6 months prep)
  'administrator': 'medium',
  'app-builder': 'medium',
  'agentforce-specialist': 'medium',
  'business-analyst': 'medium',
  'cpq-administrator': 'medium',
  'marketing-cloud-engagement-admin': 'medium',
  'slack-administrator': 'medium',
  'sales-cloud': 'medium',
  'service-cloud': 'medium',
  'email-specialist': 'medium',
  'pardot-specialist': 'medium',
  'field-service': 'medium',
  'education-cloud-consultant': 'medium',
  'nonprofit-cloud': 'medium',
  'experience-cloud': 'medium',
  'crm-analytics-einstein-discovery-consultant': 'medium',
  'data-360-consultant': 'medium',
  'marketing-cloud-consultant': 'medium',
  'marketing-cloud-engagement-developer': 'medium',
  'pardot-consultant': 'medium',
  'revenue-cloud-consultant': 'medium',
  'slack-consultant': 'medium',
  'b2c-commerce-developer': 'medium',
  'industries-cpq-developer': 'medium',
  'javascript-developer-i': 'medium',
  'mulesoft-developer-i': 'medium',
  'omnistudio-developer': 'medium',
  'omnistudio-consultant': 'medium',
  'slack-developer': 'medium',
  'tableau-consultant': 'medium',
  'tableau-data-analyst': 'medium',
  'tableau-desktop-foundations': 'medium',
  'tableau-server-administrator': 'medium',
  'ux-designer': 'medium',
  'strategy-designer': 'medium',
  'nonprofit-success-pack-consultant': 'medium',
  
  // Hard (advanced, 6+ months prep)
  'advanced-administrator': 'hard',
  'developer-1': 'hard',
  'developer-2': 'hard',
  'application-architect': 'hard',
  'data-architect': 'hard',
  'integration-architect': 'hard',
  'sharing-visibility-architect': 'hard',
  'system-architect': 'hard',
  'identity-access-management-architect': 'hard',
  'dev-lifecycle-deployment-architect': 'hard',
  'technical-architect': 'hard',
  'technical-architect-evaluation': 'hard',
  'technical-architect-review-board': 'hard',
  'b2b-solution-architect': 'hard',
  'b2c-commerce-architect': 'hard',
  'b2c-solution-architect': 'hard',
  'heroku-architect': 'hard',
  'mulesoft-catalyst-consultant': 'hard',
  'mulesoft-platform-architect': 'hard',
  'mulesoft-integration-architect': 'hard',
  'mulesoft-developer-ii': 'hard',
  'mulesoft-hyperautomation-developer': 'hard',
}

export function getCertDifficulty(slug: string): CertDifficulty {
  return SLUG_TO_DIFFICULTY[slug] || 'medium'
}

export interface RoleOccupationAggregation {
  roleTitle: string
  certCount: number
  minSalary: number
  maxSalary: number
  medianSalary: number
}

export function getRoleOccupationAggregation(roleCerts: Array<{ href: string }>): RoleOccupationAggregation | null {
  const slugs = roleCerts.map(cert => cert.href.replace('/certifications/', ''))
  const salaryData = slugs
    .map(slug => SLUG_TO_OCCUPATION_DATA[slug])
    .filter(Boolean)

  if (!salaryData.length) return null

  const minSalaries = salaryData.map(d => d.salaryRange.minSalary)
  const maxSalaries = salaryData.map(d => d.salaryRange.maxSalary)
  const medians = salaryData.map(d => d.medianSalary)

  const minSalary = Math.min(...minSalaries)
  const maxSalary = Math.max(...maxSalaries)
  const medianSalary = Math.round(medians.reduce((a, b) => a + b) / medians.length)

  return {
    roleTitle: '',
    certCount: salaryData.length,
    minSalary,
    maxSalary,
    medianSalary,
  }
}

export interface RoleDifficultyDistribution {
  easy: number
  medium: number
  hard: number
}

export function getRoleDifficultyDistribution(roleCerts: Array<{ href: string }>): RoleDifficultyDistribution {
  const distribution: RoleDifficultyDistribution = { easy: 0, medium: 0, hard: 0 }

  for (const cert of roleCerts) {
    const slug = cert.href.replace('/certifications/', '')
    const difficulty = getCertDifficulty(slug)
    distribution[difficulty]++
  }

  return distribution
}
