import { MetadataRoute } from 'next'
import { readdirSync } from 'fs'
import { join } from 'path'
import { CERTIFICATION_CATEGORIES } from '@/lib/certifications-data'
import { RELEASE_DATE } from '@/lib/release-data'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

let host: string
try {
  host = new URL(baseUrl).hostname
} catch {
  host = ''
}
if (host === 'trailblazeprep.com') {
  console.warn(
    '[sitemap] NEXT_PUBLIC_SITE_URL uses apex host; next.config redirects to www. Set NEXT_PUBLIC_SITE_URL=https://www.trailblazeprep.com in Vercel so sitemap URLs are canonical.',
  )
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Dynamically discover all exam-tips and study-guide routes — prevents new pages being
  // orphaned from the sitemap when added to the filesystem without updating this file.
  const appDir = join(process.cwd(), 'src/app')
  const allDirs = readdirSync(appDir, { withFileTypes: true }).filter((d) => d.isDirectory())

  const examTipsUrls: MetadataRoute.Sitemap = allDirs
    .filter((d) => d.name.endsWith('-exam-tips'))
    .map((d) => ({
      url: `${baseUrl}/${d.name}`,
      lastModified: new Date(RELEASE_DATE),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    }))

  const studyGuideUrls: MetadataRoute.Sitemap = allDirs
    .filter((d) => d.name.endsWith('-study-guide') && d.name !== 'service-cloud-study-guide')
    .map((d) => ({
      url: `${baseUrl}/${d.name}`,
      lastModified: new Date(RELEASE_DATE),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))

  // Exclude non-canonical pages from sitemap — these pages have canonical URLs pointing to their
  // parent cert pages, so including them in the sitemap creates a contradiction (Ahref flags this).
  const excludedCertPaths = new Set<string>([
    '/certifications/administrator-practice-test',
    '/certifications/email-specialist-practice-test',
  ])

  const certUrls = CERTIFICATION_CATEGORIES.flatMap((cat) =>
    cat.items
      .filter((item) => !excludedCertPaths.has(item.href))
      .map((item) => ({
        url: `${baseUrl}${item.href}`,
        lastModified: new Date(RELEASE_DATE),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }))
  )
  const uniqueCertUrls = Array.from(
    new Map(certUrls.map((entry) => [entry.url, entry])).values()
  )

  const roleUrls = CERTIFICATION_CATEGORIES.map((cat) => ({
    url: `${baseUrl}/certifications/role/${cat.slug}`,
    lastModified: new Date(RELEASE_DATE),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  return [
    { url: baseUrl, lastModified: new Date(RELEASE_DATE), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/certifications`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/certification-path`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/become-cta`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/adm-201-vs-app-builder`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/salesforce-certification-cost`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/pd1-vs-pd2`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/how-to-become-salesforce-developer`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/how-to-become-salesforce-architect`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/how-to-become-salesforce-consultant`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/how-to-become-salesforce-administrator`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/architect-certification-path`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/consultant-certification-path`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/sales-cloud-vs-service-cloud`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/administrator-vs-advanced-administrator`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/omnistudio-developer-vs-consultant`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/mulesoft-developer-i-vs-ii`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/data-cloud-vs-crm-analytics`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/business-analyst-vs-strategy-designer`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/cpq-admin-vs-cpq-billing-ap`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/marketing-cloud-admin-vs-developer`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/agentforce-specialist-vs-ai-associate`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/app-builder-vs-developer-i`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/sales-cloud-vs-experience-cloud-consultant`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/data-cloud-vs-marketing-cloud`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/integration-architect-vs-system-architect`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/javascript-developer-i-vs-pd1`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/field-service-vs-service-cloud-consultant`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/mulesoft-developer-i-vs-integration-foundations`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/b2b-vs-b2c-solution-architect`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/is-salesforce-certification-worth-it`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/salesforce-certification-maintenance`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/salesforce-certification-difficulty`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/pardot-specialist-vs-pardot-consultant`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/cpq-admin-vs-revenue-cloud-consultant`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/salesforce-certification-voucher`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/salesforce-exam-retake-policy`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/salesforce-certification-validity`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/how-to-register-salesforce-exam`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/salesforce-free-certification`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/ux-designer-vs-strategy-designer`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/system-architect-vs-application-architect`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/pardot-consultant-vs-marketing-cloud-consultant`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/platform-foundations-vs-ai-associate`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/education-cloud-vs-nonprofit-cloud-consultant`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/which-salesforce-certification-first`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/how-to-study-for-salesforce-certification`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/salesforce-certification-exam-day-tips`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/salesforce-admin-vs-developer-career`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/salesforce-certification-passing-score`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/salesforce-certification-salary`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/salesforce-associate-certification-cost`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/salesforce-admin-certification-201`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/pardot-certification`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/marketing-cloud-certification-path`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/developer-certification-path`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/admin-certification-path`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/salesforce-certifications-list`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/about`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/team`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/html-sitemap`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(RELEASE_DATE), changeFrequency: 'yearly', priority: 0.3 },
    ...examTipsUrls,
    ...studyGuideUrls,
    ...roleUrls,
    ...uniqueCertUrls,
  ]
}
