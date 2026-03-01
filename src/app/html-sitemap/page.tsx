import Link from 'next/link'
import type { Metadata } from 'next'
import { CERTIFICATION_CATEGORIES } from '@/lib/certifications-data'
import { getWebPageJsonLd, getBreadcrumbListJsonLd } from '@/lib/schema-data'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = 'HTML Sitemap | Trailblaze Prep'
const pageDescription =
  'Browse all Trailblaze Prep pages, including Salesforce certification guides, role hubs, and key site pages.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${baseUrl}/html-sitemap` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'website',
    url: `${baseUrl}/html-sitemap`,
    siteName: 'Trailblaze Prep',
    images: [{ url: `${baseUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'HTML Sitemap', url: '/html-sitemap' },
]

const corePages = [
  { name: 'All Certifications', href: '/certifications' },
  { name: 'All Salesforce Certifications List', href: '/salesforce-certifications-list' },
  { name: 'Certification Path', href: '/certification-path' },
  { name: 'Salesforce Certification Cost', href: '/salesforce-certification-cost' },
  { name: 'ADM-201 Exam Tips', href: '/adm-201-exam-tips-2026' },
  { name: 'ADM-201 vs App Builder', href: '/adm-201-vs-app-builder' },
  { name: 'PD1 Exam Tips', href: '/pd1-exam-tips-2026' },
  { name: 'PD1 vs PD2', href: '/pd1-vs-pd2' },
  { name: 'Agentforce Specialist Exam Tips', href: '/agentforce-specialist-exam-tips' },
  { name: 'ADM-201 Study Guide', href: '/adm-201-study-guide' },
  { name: 'PD1 Study Guide', href: '/pd1-study-guide' },
  { name: 'App Builder Study Guide', href: '/app-builder-study-guide' },
  { name: 'Service Cloud Study Guide', href: '/service-cloud-study-guide' },
  { name: 'Agentforce Specialist Study Guide', href: '/agentforce-specialist-study-guide' },
  { name: 'Sales Cloud Consultant Study Guide', href: '/sales-cloud-consultant-study-guide' },
  { name: 'Data Cloud Consultant Study Guide', href: '/data-cloud-consultant-study-guide' },
  { name: 'AI Associate Study Guide', href: '/ai-associate-study-guide' },
  { name: 'Experience Cloud Consultant Study Guide', href: '/experience-cloud-consultant-study-guide' },
  { name: 'Advanced Administrator Study Guide', href: '/advanced-administrator-study-guide' },
  { name: 'Platform Developer II Study Guide', href: '/pd2-study-guide' },
  { name: 'Service Cloud Consultant Study Guide', href: '/service-cloud-consultant-study-guide' },
  { name: 'Marketing Cloud Consultant Study Guide', href: '/marketing-cloud-consultant-study-guide' },
  { name: 'Business Analyst Study Guide', href: '/business-analyst-study-guide' },
  { name: 'CPQ Administrator Study Guide', href: '/cpq-administrator-study-guide' },
  { name: 'Field Service Consultant Study Guide', href: '/field-service-consultant-study-guide' },
  { name: 'OmniStudio Developer Study Guide', href: '/omnistudio-developer-study-guide' },
  { name: 'MuleSoft Developer I Study Guide', href: '/mulesoft-developer-i-study-guide' },
  { name: 'JavaScript Developer I Study Guide', href: '/javascript-developer-i-study-guide' },
  { name: 'Email Specialist Study Guide', href: '/email-specialist-study-guide' },
  { name: 'Tableau Data Analyst Study Guide', href: '/tableau-data-analyst-study-guide' },
  { name: 'Revenue Cloud Consultant Study Guide', href: '/revenue-cloud-consultant-study-guide' },
  { name: 'OmniStudio Consultant Study Guide', href: '/omnistudio-consultant-study-guide' },
  { name: 'MuleSoft Developer II Study Guide', href: '/mulesoft-developer-ii-study-guide' },
  { name: 'How to Become a Salesforce Administrator', href: '/how-to-become-salesforce-administrator' },
  { name: 'How to Become a Salesforce Developer', href: '/how-to-become-salesforce-developer' },
  { name: 'How to Become a Salesforce Architect', href: '/how-to-become-salesforce-architect' },
  { name: 'How to Become a Salesforce Consultant', href: '/how-to-become-salesforce-consultant' },
  { name: 'Service Cloud Consultant Exam Tips', href: '/service-cloud-consultant-exam-tips' },
  { name: 'App Builder Exam Tips', href: '/app-builder-exam-tips' },
  { name: 'Email Specialist Exam Tips', href: '/email-specialist-exam-tips' },
  { name: 'Tableau Data Analyst Exam Tips', href: '/tableau-data-analyst-exam-tips' },
  { name: 'MuleSoft Integration Foundations Exam Tips', href: '/mulesoft-integration-foundations-exam-tips' },
  { name: 'Slack Developer Exam Tips', href: '/slack-developer-exam-tips' },
  { name: 'PD2 Exam Tips', href: '/pd2-exam-tips-2026' },
  { name: 'System Architect Exam Tips', href: '/system-architect-exam-tips' },
  { name: 'Sales Cloud Consultant Exam Tips', href: '/sales-cloud-exam-tips' },
  { name: 'Marketing Cloud Consultant Exam Tips', href: '/marketing-cloud-consultant-exam-tips' },
  { name: 'Business Analyst Exam Tips', href: '/business-analyst-exam-tips' },
  { name: 'Pardot Specialist Exam Tips', href: '/pardot-specialist-exam-tips' },
  { name: 'UX Designer Exam Tips', href: '/ux-designer-exam-tips' },
  { name: 'Experience Cloud Consultant Exam Tips', href: '/experience-cloud-exam-tips' },
  { name: 'Application Architect Exam Tips', href: '/application-architect-exam-tips' },
  { name: 'Data Architect Exam Tips', href: '/data-architect-exam-tips' },
  { name: 'Integration Architect Exam Tips', href: '/integration-architect-exam-tips' },
  { name: 'Sharing & Visibility Architect Exam Tips', href: '/sharing-visibility-architect-exam-tips' },
  { name: 'IAM Architect Exam Tips', href: '/identity-access-management-architect-exam-tips' },
  { name: 'Dev Lifecycle & Deployment Architect Exam Tips', href: '/dev-lifecycle-deployment-architect-exam-tips' },
  { name: 'Advanced Administrator Exam Tips', href: '/advanced-administrator-exam-tips' },
  { name: 'Field Service Consultant Exam Tips', href: '/field-service-exam-tips' },
  { name: 'Education Cloud Consultant Exam Tips', href: '/education-cloud-consultant-exam-tips' },
  { name: 'AI Associate Exam Tips', href: '/ai-associate-exam-tips' },
  { name: 'CPQ Administrator Exam Tips', href: '/cpq-administrator-exam-tips' },
  { name: 'Data Cloud Consultant Exam Tips', href: '/data-cloud-consultant-exam-tips' },
  { name: 'CRM Analytics Exam Tips', href: '/crm-analytics-exam-tips' },
  { name: 'Revenue Cloud Consultant Exam Tips', href: '/revenue-cloud-consultant-exam-tips' },
  { name: 'B2B Solution Architect Exam Tips', href: '/b2b-solution-architect-exam-tips' },
  { name: 'B2C Solution Architect Exam Tips', href: '/b2c-solution-architect-exam-tips' },
  { name: 'B2C Commerce Architect Exam Tips', href: '/b2c-commerce-architect-exam-tips' },
  { name: 'B2C Commerce Developer Exam Tips', href: '/b2c-commerce-developer-exam-tips' },
  { name: 'Industries CPQ Developer Exam Tips', href: '/industries-cpq-developer-exam-tips' },
  { name: 'JavaScript Developer I Exam Tips', href: '/javascript-developer-i-exam-tips' },
  { name: 'Marketing Cloud Engagement Developer Exam Tips', href: '/marketing-cloud-engagement-developer-exam-tips' },
  { name: 'Marketing Cloud Engagement Admin Exam Tips', href: '/marketing-cloud-engagement-admin-exam-tips' },
  { name: 'Pardot Consultant Exam Tips', href: '/pardot-consultant-exam-tips' },
  { name: 'Marketing Cloud Engagement Foundations Exam Tips', href: '/marketing-cloud-engagement-foundations-exam-tips' },
  { name: 'MuleSoft Developer I Exam Tips', href: '/mulesoft-developer-i-exam-tips' },
  { name: 'MuleSoft Developer II Exam Tips', href: '/mulesoft-developer-ii-exam-tips' },
  { name: 'MuleSoft Hyperautomation Developer Exam Tips', href: '/mulesoft-hyperautomation-developer-exam-tips' },
  { name: 'MuleSoft Integration Architect Exam Tips', href: '/mulesoft-integration-architect-exam-tips' },
  { name: 'MuleSoft Platform Architect Exam Tips', href: '/mulesoft-platform-architect-exam-tips' },
  { name: 'MuleSoft Catalyst Consultant Exam Tips', href: '/mulesoft-catalyst-consultant-exam-tips' },
  { name: 'OmniStudio Developer Exam Tips', href: '/omnistudio-developer-exam-tips' },
  { name: 'OmniStudio Consultant Exam Tips', href: '/omnistudio-consultant-exam-tips' },
  { name: 'Heroku Architect Exam Tips', href: '/heroku-architect-exam-tips' },
  { name: 'Tableau CRM & Einstein Analytics Architect Exam Tips', href: '/tableau-architect-exam-tips' },
  { name: 'Tableau CRM & Einstein Analytics Consultant Exam Tips', href: '/tableau-consultant-exam-tips' },
  { name: 'Tableau Desktop Foundations Exam Tips', href: '/tableau-desktop-foundations-exam-tips' },
  { name: 'Tableau Server Administrator Exam Tips', href: '/tableau-server-administrator-exam-tips' },
  { name: 'Slack Administrator Exam Tips', href: '/slack-administrator-exam-tips' },
  { name: 'Slack Consultant Exam Tips', href: '/slack-consultant-exam-tips' },
  { name: 'Strategy Designer Exam Tips', href: '/strategy-designer-exam-tips' },
  { name: 'Nonprofit Cloud Consultant Exam Tips', href: '/nonprofit-cloud-exam-tips' },
  { name: 'Nonprofit Success Pack Consultant Exam Tips', href: '/nonprofit-success-pack-consultant-exam-tips' },
  { name: 'Platform App Builder (Foundations) Exam Tips', href: '/platform-foundations-exam-tips' },
  { name: 'Sales Foundations Exam Tips', href: '/sales-foundations-exam-tips' },
  { name: 'Technical Architect Exam Tips', href: '/technical-architect-exam-tips' },
  { name: 'CTA Evaluation Exam Tips', href: '/technical-architect-evaluation-exam-tips' },
  { name: 'CTA Review Board Tips', href: '/technical-architect-review-board-exam-tips' },
  { name: 'Health Cloud AP Exam Tips', href: '/health-cloud-ap-exam-tips' },
  { name: 'Financial Services Cloud AP Exam Tips', href: '/financial-services-cloud-ap-exam-tips' },
  { name: 'Manufacturing Cloud AP Exam Tips', href: '/manufacturing-cloud-ap-exam-tips' },
  { name: 'Process Automation AP Exam Tips', href: '/process-automation-ap-exam-tips' },
  { name: 'CPQ & Billing AP Exam Tips', href: '/cpq-billing-ap-exam-tips' },
  { name: 'Contact Center AP Exam Tips', href: '/contact-center-ap-exam-tips' },
  { name: 'Net Zero Cloud AP Exam Tips', href: '/net-zero-cloud-ap-exam-tips' },
  { name: 'Public Sector Solutions AP Exam Tips', href: '/public-sector-solutions-ap-exam-tips' },
  { name: 'Marketing Cloud Personalization AP Exam Tips', href: '/marketing-cloud-personalization-ap-exam-tips' },
  { name: 'Loyalty Management AP Exam Tips', href: '/loyalty-management-ap-exam-tips' },
  { name: 'Advanced Field Service AP Exam Tips', href: '/advanced-field-service-ap-exam-tips' },
  { name: 'Consumer Goods Cloud AP Exam Tips', href: '/consumer-goods-cloud-ap-exam-tips' },
  { name: 'Energy & Utilities AP Exam Tips', href: '/energy-utilities-ap-exam-tips' },
  { name: 'Communications Cloud AP Exam Tips', href: '/communications-cloud-ap-exam-tips' },
  { name: 'MC Advanced Cross-Channel AP Exam Tips', href: '/marketing-cloud-advanced-cross-channel-ap-exam-tips' },
  { name: 'Marketing Cloud Intelligence AP Exam Tips', href: '/marketing-cloud-intelligence-ap-exam-tips' },
  { name: 'B2B Commerce Admin AP Exam Tips', href: '/b2b-commerce-admin-ap-exam-tips' },
  { name: 'B2B Commerce Developer AP Exam Tips', href: '/b2b-commerce-developer-ap-exam-tips' },
  { name: 'Consumer Goods TPM AP Exam Tips', href: '/consumer-goods-tpm-ap-exam-tips' },
  { name: 'Media Cloud AP Exam Tips', href: '/media-cloud-ap-exam-tips' },
  { name: 'Heroku Developer AP Exam Tips', href: '/heroku-developer-ap-exam-tips' },
  { name: 'Order Management Admin AP Exam Tips', href: '/order-management-admin-ap-exam-tips' },
  { name: 'Order Management Developer AP Exam Tips', href: '/order-management-developer-ap-exam-tips' },
  { name: 'Salesforce Admin Certification Path', href: '/admin-certification-path' },
  { name: 'Salesforce Developer Certification Path', href: '/developer-certification-path' },
  { name: 'Salesforce Architect Certification Path', href: '/architect-certification-path' },
  { name: 'Salesforce Consultant Certification Path', href: '/consultant-certification-path' },
  { name: 'Sales Cloud vs Service Cloud', href: '/sales-cloud-vs-service-cloud' },
  { name: 'Administrator vs Advanced Administrator', href: '/administrator-vs-advanced-administrator' },
  { name: 'OmniStudio Developer vs Consultant', href: '/omnistudio-developer-vs-consultant' },
  { name: 'MuleSoft Developer I vs II', href: '/mulesoft-developer-i-vs-ii' },
  { name: 'Data Cloud vs CRM Analytics', href: '/data-cloud-vs-crm-analytics' },
  { name: 'Business Analyst vs Strategy Designer', href: '/business-analyst-vs-strategy-designer' },
  { name: 'CPQ Admin vs CPQ Billing AP', href: '/cpq-admin-vs-cpq-billing-ap' },
  { name: 'Marketing Cloud Admin vs Developer', href: '/marketing-cloud-admin-vs-developer' },
  { name: 'Integration Architect vs System Architect', href: '/integration-architect-vs-system-architect' },
  { name: 'JavaScript Developer I vs Platform Developer I', href: '/javascript-developer-i-vs-pd1' },
  { name: 'Field Service vs Service Cloud Consultant', href: '/field-service-vs-service-cloud-consultant' },
  { name: 'MuleSoft Developer I vs Integration Foundations', href: '/mulesoft-developer-i-vs-integration-foundations' },
  { name: 'B2B vs B2C Solution Architect', href: '/b2b-vs-b2c-solution-architect' },
  { name: 'Is Salesforce Certification Worth It?', href: '/is-salesforce-certification-worth-it' },
  { name: 'Salesforce Certification Maintenance Guide', href: '/salesforce-certification-maintenance' },
  { name: 'Salesforce Certification Difficulty Ranking', href: '/salesforce-certification-difficulty' },
  { name: 'Agentforce Specialist vs AI Associate', href: '/agentforce-specialist-vs-ai-associate' },
  { name: 'App Builder vs Platform Developer I', href: '/app-builder-vs-developer-i' },
  { name: 'Sales Cloud vs Experience Cloud Consultant', href: '/sales-cloud-vs-experience-cloud-consultant' },
  { name: 'Data Cloud vs Marketing Cloud', href: '/data-cloud-vs-marketing-cloud' },
  { name: 'Salesforce Certification Salary', href: '/salesforce-certification-salary' },
  { name: 'Become a Salesforce CTA', href: '/become-cta' },
  { name: 'About', href: '/about' },
  { name: 'Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
  { name: 'Terms of Use', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy' },
]

export default function HtmlSitemapPage() {
  const webPageJsonLd = getWebPageJsonLd({
    name: pageTitle,
    description: pageDescription,
    path: '/html-sitemap',
    breadcrumbItems,
  })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <h1 className="text-3xl font-bold text-gray-900 mb-4">HTML Sitemap</h1>
      <p className="text-gray-600 mb-8">
        Use this page to navigate all key site URLs and certification guides.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Core Pages</h2>
        <ul className="space-y-2">
          {corePages.map((page) => (
            <li key={page.href}>
              <Link href={page.href} className="text-salesforce-blue hover:underline">
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Certification Role Hubs and Guides</h2>
        <div className="space-y-8">
          {CERTIFICATION_CATEGORIES.map((category) => (
            <div key={category.slug}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                <Link href={`/certifications/role/${category.slug}`} className="text-salesforce-blue hover:underline">
                  {category.name} Hub
                </Link>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {category.items.map((item) => (
                  <li key={`${category.slug}-${item.href}`}>
                    <Link href={item.href} className="text-gray-700 hover:text-salesforce-blue hover:underline">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
