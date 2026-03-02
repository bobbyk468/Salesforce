#!/usr/bin/env node
/**
 * Update all exam-tips pages to canonical to their main cert page.
 * Prevents GSC "Duplicate, Google chose different canonical than user".
 * Run: node scripts/fix-exam-tips-canonicals.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const APP = path.join(__dirname, '../src/app')

// Built from SLUG_TO_EXAM_TIPS: exam-tips path (no leading /) -> cert slug
const EXAM_TIPS_TO_CERT_SLUG = {
  'adm-201-exam-tips-2026': 'administrator',
  'pd1-exam-tips-2026': 'developer-1',
  'pd2-exam-tips-2026': 'developer-2',
  'app-builder-exam-tips': 'app-builder',
  'email-specialist-exam-tips': 'email-specialist',
  'mulesoft-integration-foundations-exam-tips': 'mulesoft-integration-foundations',
  'agentforce-specialist-exam-tips': 'agentforce-specialist',
  'service-cloud-consultant-exam-tips': 'service-cloud',
  'slack-developer-exam-tips': 'slack-developer',
  'system-architect-exam-tips': 'system-architect',
  'tableau-data-analyst-exam-tips': 'tableau-data-analyst',
  'sales-cloud-exam-tips': 'sales-cloud',
  'marketing-cloud-consultant-exam-tips': 'marketing-cloud-consultant',
  'marketing-cloud-engagement-admin-exam-tips': 'marketing-cloud-engagement-admin',
  'business-analyst-exam-tips': 'business-analyst',
  'pardot-consultant-exam-tips': 'pardot-consultant',
  'ux-designer-exam-tips': 'ux-designer',
  'experience-cloud-exam-tips': 'experience-cloud',
  'application-architect-exam-tips': 'application-architect',
  'data-architect-exam-tips': 'data-architect',
  'integration-architect-exam-tips': 'integration-architect',
  'sharing-visibility-architect-exam-tips': 'sharing-visibility-architect',
  'identity-access-management-architect-exam-tips': 'identity-access-management-architect',
  'dev-lifecycle-deployment-architect-exam-tips': 'dev-lifecycle-deployment-architect',
  'advanced-administrator-exam-tips': 'advanced-administrator',
  'field-service-exam-tips': 'field-service',
  'education-cloud-consultant-exam-tips': 'education-cloud-consultant',
  'ai-associate-exam-tips': 'ai-associate',
  'cpq-administrator-exam-tips': 'cpq-administrator',
  'data-cloud-consultant-exam-tips': 'data-cloud-consultant',
  'crm-analytics-exam-tips': 'crm-analytics-einstein-discovery-consultant',
  'revenue-cloud-consultant-exam-tips': 'revenue-cloud-consultant',
  'marketing-cloud-engagement-developer-exam-tips': 'marketing-cloud-engagement-developer',
  'marketing-cloud-engagement-foundations-exam-tips': 'marketing-cloud-engagement-foundations',
  'b2c-commerce-developer-exam-tips': 'b2c-commerce-developer',
  'industries-cpq-developer-exam-tips': 'industries-cpq-developer',
  'javascript-developer-i-exam-tips': 'javascript-developer-i',
  'mulesoft-developer-i-exam-tips': 'mulesoft-developer-i',
  'mulesoft-developer-ii-exam-tips': 'mulesoft-developer-ii',
  'mulesoft-hyperautomation-developer-exam-tips': 'mulesoft-hyperautomation-developer',
  'mulesoft-integration-architect-exam-tips': 'mulesoft-integration-architect',
  'mulesoft-platform-architect-exam-tips': 'mulesoft-platform-architect',
  'mulesoft-catalyst-consultant-exam-tips': 'mulesoft-catalyst-consultant',
  'omnistudio-developer-exam-tips': 'omnistudio-developer',
  'omnistudio-consultant-exam-tips': 'omnistudio-consultant',
  'b2b-solution-architect-exam-tips': 'b2b-solution-architect',
  'b2c-solution-architect-exam-tips': 'b2c-solution-architect',
  'b2c-commerce-architect-exam-tips': 'b2c-commerce-architect',
  'heroku-architect-exam-tips': 'heroku-architect',
  'tableau-architect-exam-tips': 'tableau-architect',
  'tableau-consultant-exam-tips': 'tableau-consultant',
  'tableau-desktop-foundations-exam-tips': 'tableau-desktop-foundations',
  'tableau-server-administrator-exam-tips': 'tableau-server-administrator',
  'slack-administrator-exam-tips': 'slack-administrator',
  'slack-consultant-exam-tips': 'slack-consultant',
  'strategy-designer-exam-tips': 'strategy-designer',
  'nonprofit-cloud-exam-tips': 'nonprofit-cloud',
  'nonprofit-success-pack-consultant-exam-tips': 'nonprofit-success-pack-consultant',
  'platform-foundations-exam-tips': 'platform-foundations',
  'sales-foundations-exam-tips': 'sales-foundations',
  'pardot-specialist-exam-tips': 'pardot-specialist',
  'technical-architect-exam-tips': 'technical-architect',
  'technical-architect-evaluation-exam-tips': 'technical-architect-evaluation',
  'technical-architect-review-board-exam-tips': 'technical-architect-review-board',
  'health-cloud-ap-exam-tips': 'health-cloud-ap',
  'financial-services-cloud-ap-exam-tips': 'financial-services-cloud-ap',
  'manufacturing-cloud-ap-exam-tips': 'manufacturing-cloud-ap',
  'process-automation-ap-exam-tips': 'process-automation-ap',
  'cpq-billing-ap-exam-tips': 'cpq-billing-ap',
  'contact-center-ap-exam-tips': 'contact-center-ap',
  'net-zero-cloud-ap-exam-tips': 'net-zero-cloud-ap',
  'public-sector-solutions-ap-exam-tips': 'public-sector-solutions-ap',
  'marketing-cloud-personalization-ap-exam-tips': 'marketing-cloud-personalization-ap',
  'loyalty-management-ap-exam-tips': 'loyalty-management-ap',
  'advanced-field-service-ap-exam-tips': 'advanced-field-service-ap',
  'consumer-goods-cloud-ap-exam-tips': 'consumer-goods-cloud-ap',
  'energy-utilities-ap-exam-tips': 'energy-utilities-ap',
  'communications-cloud-ap-exam-tips': 'communications-cloud-ap',
  'marketing-cloud-advanced-cross-channel-ap-exam-tips': 'marketing-cloud-advanced-cross-channel-ap',
  'marketing-cloud-intelligence-ap-exam-tips': 'marketing-cloud-intelligence-ap',
  'b2b-commerce-admin-ap-exam-tips': 'b2b-commerce-admin-ap',
  'b2b-commerce-developer-ap-exam-tips': 'b2b-commerce-developer-ap',
  'consumer-goods-tpm-ap-exam-tips': 'consumer-goods-tpm-ap',
  'media-cloud-ap-exam-tips': 'media-cloud-ap',
  'heroku-developer-ap-exam-tips': 'heroku-developer-ap',
  'order-management-admin-ap-exam-tips': 'order-management-admin-ap',
  'order-management-developer-ap-exam-tips': 'order-management-developer-ap',
}

const siteUrl = 'https://www.trailblazeprep.com'
const canonicalComment = '  // Canonical to cert page — prevents GSC "chose different canonical"'

function fixFile(dirName) {
  const filePath = path.join(APP, dirName, 'page.tsx')
  if (!fs.existsSync(filePath)) return { updated: false, reason: 'no file' }
  let content = fs.readFileSync(filePath, 'utf8')
  const certSlug = EXAM_TIPS_TO_CERT_SLUG[dirName]
  if (!certSlug) return { updated: false, reason: 'no mapping' }
  const certCanonical = `${siteUrl}/certifications/${certSlug}`
  const oldPattern = /alternates:\s*\{[^}]*canonical:[^}]+\}/s
  const existingComment = /\/\/ Canonical to cert page/
  if (existingComment.test(content) && content.includes(`/certifications/${certSlug}`)) {
    return { updated: false, reason: 'already fixed' }
  }
  const newCanonical = `alternates: {${canonicalComment}\n  canonical: \`\${siteUrl}/certifications/${certSlug}\`,\n  }`
  const newContent = content.replace(oldPattern, newCanonical)
  if (newContent === content) return { updated: false, reason: 'no match' }
  fs.writeFileSync(filePath, newContent)
  return { updated: true }
}

const dirs = fs.readdirSync(APP).filter((d) => d.endsWith('-exam-tips') || d === 'adm-201-exam-tips-2026' || d === 'pd1-exam-tips-2026' || d === 'pd2-exam-tips-2026')
let updated = 0
for (const dir of dirs) {
  const result = fixFile(dir)
  if (result.updated) {
    console.log(`Updated: ${dir}`)
    updated++
  }
}
console.log(`\nDone. Updated ${updated} exam-tips pages.`)
