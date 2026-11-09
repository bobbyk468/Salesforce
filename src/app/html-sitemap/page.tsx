import Link from '@/components/AppLink'
import type { Metadata } from 'next'
import { CERTIFICATION_CATEGORIES } from '@/lib/certifications-data'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import LastUpdated from '@/components/LastUpdated'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const metadataTitle = 'Salesforce Certification Guides Sitemap | Trailblaze Prep'
const pageTitle = 'HTML Sitemap | Trailblaze Prep'
const pageDescription =
  'Browse Trailblaze Prep Salesforce guides, role hubs, and key site pages by category to find certification resources and exams.'

export const metadata: Metadata = {
  title: { absolute: metadataTitle },
  description: pageDescription,
  alternates: {
    canonical: `${baseUrl}/html-sitemap`,
    languages: { 'en-US': `${baseUrl}/html-sitemap`, 'x-default': `${baseUrl}/html-sitemap` },
  },
  openGraph: {
    title: metadataTitle,
    description: pageDescription,
    type: 'website',
    url: `${baseUrl}/html-sitemap`,
    siteName: 'Trailblaze Prep',
    images: [{ url: `${baseUrl}/og?t=${encodeURIComponent(metadataTitle)}`, width: 1200, height: 630, alt: metadataTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: metadataTitle,
    description: pageDescription,
    images: [{ url: `${baseUrl}/og?t=${encodeURIComponent(metadataTitle)}`, alt: metadataTitle }],
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
  { name: 'Salesforce Certification ROI Calculator', href: '/salesforce-certification-roi-calculator' },
  { name: 'Editorial Policy & Exam Data Review', href: '/editorial-policy' },
  { name: 'Salesforce Associate Certification Cost', href: '/salesforce-associate-certification-cost' },
  { name: 'Salesforce Admin Certification 201 Guide', href: '/salesforce-admin-certification-201' },
  { name: 'Pardot Certification Guide', href: '/pardot-certification' },
  { name: 'Marketing Cloud Certification Path', href: '/marketing-cloud-certification-path' },
  { name: 'ADM-201 vs App Builder', href: '/adm-201-vs-app-builder' },
  { name: 'PD1 Exam Tips', href: '/certifications/developer-1' },
  { name: 'PD1 vs PD2', href: '/pd1-vs-pd2' },
  { name: 'Agentforce Specialist Exam Tips', href: '/certifications/agentforce-specialist' },
  { name: 'App Builder Study Guide', href: '/certifications/app-builder' },
  { name: 'Service Cloud Study Guide', href: '/certifications/service-cloud' },
  { name: 'Sales Cloud Consultant Study Guide', href: '/certifications/sales-cloud' },
  { name: 'Data Cloud Consultant Study Guide', href: '/certifications/data-360-consultant' },
  { name: 'AI Associate Study Guide', href: '/certifications/ai-associate' },
  { name: 'Experience Cloud Consultant Study Guide', href: '/certifications/experience-cloud' },
  { name: 'Advanced Administrator Study Guide', href: '/certifications/advanced-administrator' },
  { name: 'Platform Developer II Study Guide', href: '/certifications/developer-2' },
  { name: 'Marketing Cloud Consultant Study Guide', href: '/certifications/marketing-cloud-consultant' },
  { name: 'Business Analyst Study Guide', href: '/certifications/business-analyst' },
  { name: 'CPQ Administrator Study Guide', href: '/certifications/cpq-administrator' },
  { name: 'Field Service Consultant Study Guide', href: '/certifications/field-service' },
  { name: 'OmniStudio Developer Study Guide', href: '/certifications/omnistudio-developer' },
  { name: 'MuleSoft Developer I Study Guide', href: '/certifications/mulesoft-developer-i' },
  { name: 'JavaScript Developer I Study Guide', href: '/certifications/javascript-developer-i' },
  { name: 'Email Specialist Study Guide', href: '/certifications/email-specialist' },
  { name: 'Tableau Data Analyst Study Guide', href: '/certifications/tableau-data-analyst' },
  { name: 'Revenue Cloud Consultant Study Guide', href: '/certifications/revenue-cloud-consultant' },
  { name: 'OmniStudio Consultant Study Guide', href: '/certifications/omnistudio-consultant' },
  { name: 'MuleSoft Developer II Study Guide', href: '/certifications/mulesoft-developer-ii' },
  { name: 'How to Become a Salesforce Administrator', href: '/how-to-become-salesforce-administrator' },
  { name: 'How to Become a Salesforce Developer', href: '/how-to-become-salesforce-developer' },
  { name: 'How to Become a Salesforce Architect', href: '/how-to-become-salesforce-architect' },
  { name: 'How to Become a Salesforce Consultant', href: '/how-to-become-salesforce-consultant' },
  { name: 'MuleSoft Integration Foundations Exam Tips', href: '/certifications/mulesoft-integration-foundations' },
  { name: 'Slack Developer Exam Tips', href: '/certifications/slack-developer' },
  { name: 'System Architect Exam Tips', href: '/certifications/system-architect' },
  { name: 'Pardot Specialist Exam Tips', href: '/certifications/pardot-specialist' },
  { name: 'UX Designer Exam Tips', href: '/certifications/ux-designer' },
  { name: 'Application Architect Exam Tips', href: '/certifications/application-architect' },
  { name: 'Data Architect Exam Tips', href: '/certifications/data-architect' },
  { name: 'Integration Architect Exam Tips', href: '/certifications/integration-architect' },
  { name: 'Sharing & Visibility Architect Exam Tips', href: '/certifications/sharing-visibility-architect' },
  { name: 'IAM Architect Exam Tips', href: '/certifications/identity-access-management-architect' },
  { name: 'Dev Lifecycle & Deployment Architect Exam Tips', href: '/certifications/dev-lifecycle-deployment-architect' },
  { name: 'Education Cloud Consultant Exam Tips', href: '/certifications/education-cloud-consultant' },
  { name: 'CRM Analytics Exam Tips', href: '/certifications/crm-analytics-einstein-discovery-consultant' },
  { name: 'B2B Solution Architect Exam Tips', href: '/certifications/b2b-solution-architect' },
  { name: 'B2C Solution Architect Exam Tips', href: '/certifications/b2c-solution-architect' },
  { name: 'B2C Commerce Architect Exam Tips', href: '/certifications/b2c-commerce-architect' },
  { name: 'B2C Commerce Developer Exam Tips', href: '/certifications/b2c-commerce-developer' },
  { name: 'Industries CPQ Developer Exam Tips', href: '/certifications/industries-cpq-developer' },
  { name: 'Marketing Cloud Engagement Developer Exam Tips', href: '/certifications/marketing-cloud-engagement-developer' },
  { name: 'Marketing Cloud Engagement Admin Exam Tips', href: '/certifications/marketing-cloud-engagement-admin' },
  { name: 'Pardot Consultant Exam Tips', href: '/certifications/pardot-consultant' },
  { name: 'Marketing Cloud Engagement Foundations Exam Tips', href: '/certifications/marketing-cloud-engagement-foundations' },
  { name: 'MuleSoft Hyperautomation Developer Exam Tips', href: '/certifications/mulesoft-hyperautomation-developer' },
  { name: 'MuleSoft Integration Architect Exam Tips', href: '/certifications/mulesoft-integration-architect' },
  { name: 'MuleSoft Platform Architect Exam Tips', href: '/certifications/mulesoft-platform-architect' },
  { name: 'MuleSoft Catalyst Consultant Exam Tips', href: '/certifications/mulesoft-catalyst-consultant' },
  { name: 'Heroku Architect Exam Tips', href: '/certifications/heroku-architect' },
  { name: 'Tableau CRM & Einstein Analytics Architect Exam Tips', href: '/certifications/tableau-architect' },
  { name: 'Tableau CRM & Einstein Analytics Consultant Exam Tips', href: '/certifications/tableau-consultant' },
  { name: 'Tableau Desktop Foundations Exam Tips', href: '/certifications/tableau-desktop-foundations' },
  { name: 'Tableau Server Administrator Exam Tips', href: '/certifications/tableau-server-administrator' },
  { name: 'Slack Administrator Exam Tips', href: '/certifications/slack-administrator' },
  { name: 'Slack Consultant Exam Tips', href: '/certifications/slack-consultant' },
  { name: 'Strategy Designer Exam Tips', href: '/certifications/strategy-designer' },
  { name: 'Nonprofit Cloud Consultant Exam Tips', href: '/certifications/nonprofit-cloud' },
  { name: 'Nonprofit Success Pack Consultant Exam Tips', href: '/certifications/nonprofit-success-pack-consultant' },
  { name: 'Platform App Builder (Foundations) Exam Tips', href: '/certifications/platform-foundations' },
  { name: 'Sales Foundations Exam Tips', href: '/certifications/sales-foundations' },
  { name: 'Technical Architect Exam Tips', href: '/certifications/technical-architect' },
  { name: 'CTA Evaluation Exam Tips', href: '/certifications/technical-architect-evaluation' },
  { name: 'CTA Review Board Tips', href: '/certifications/technical-architect-review-board' },
  { name: 'Health Cloud AP Exam Tips', href: '/certifications/health-cloud-ap' },
  { name: 'Financial Services Cloud AP Exam Tips', href: '/certifications/financial-services-cloud-ap' },
  { name: 'Manufacturing Cloud AP Exam Tips', href: '/certifications/manufacturing-cloud-ap' },
  { name: 'Process Automation AP Exam Tips', href: '/certifications/process-automation-ap' },
  { name: 'CPQ & Billing AP Exam Tips', href: '/certifications/cpq-billing-ap' },
  { name: 'Contact Center AP Exam Tips', href: '/certifications/contact-center-ap' },
  { name: 'Net Zero Cloud AP Exam Tips', href: '/certifications/net-zero-cloud-ap' },
  { name: 'Public Sector Solutions AP Exam Tips', href: '/certifications/public-sector-solutions-ap' },
  { name: 'Marketing Cloud Personalization AP Exam Tips', href: '/certifications/marketing-cloud-personalization-ap' },
  { name: 'Loyalty Management AP Exam Tips', href: '/certifications/loyalty-management-ap' },
  { name: 'Advanced Field Service AP Exam Tips', href: '/certifications/advanced-field-service-ap' },
  { name: 'Consumer Goods Cloud AP Exam Tips', href: '/certifications/consumer-goods-cloud-ap' },
  { name: 'Energy & Utilities AP Exam Tips', href: '/certifications/energy-utilities-ap' },
  { name: 'Communications Cloud AP Exam Tips', href: '/certifications/communications-cloud-ap' },
  { name: 'MC Advanced Cross-Channel AP Exam Tips', href: '/certifications/marketing-cloud-advanced-cross-channel-ap' },
  { name: 'Marketing Cloud Intelligence AP Exam Tips', href: '/certifications/marketing-cloud-intelligence-ap' },
  { name: 'B2B Commerce Admin AP Exam Tips', href: '/certifications/b2b-commerce-admin-ap' },
  { name: 'B2B Commerce Developer AP Exam Tips', href: '/certifications/b2b-commerce-developer-ap' },
  { name: 'Consumer Goods TPM AP Exam Tips', href: '/certifications/consumer-goods-tpm-ap' },
  { name: 'Media Cloud AP Exam Tips', href: '/certifications/media-cloud-ap' },
  { name: 'Heroku Developer AP Exam Tips', href: '/certifications/heroku-developer-ap' },
  { name: 'Order Management Admin AP Exam Tips', href: '/certifications/order-management-admin-ap' },
  { name: 'Order Management Developer AP Exam Tips', href: '/certifications/order-management-developer-ap' },
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
  { name: 'Pardot Specialist vs Pardot Consultant', href: '/pardot-specialist-vs-pardot-consultant' },
  { name: 'CPQ Admin vs Revenue Cloud Consultant', href: '/cpq-admin-vs-revenue-cloud-consultant' },
  { name: 'Salesforce Certification Voucher Guide', href: '/salesforce-certification-voucher' },
  { name: 'Salesforce Exam Retake Policy', href: '/salesforce-exam-retake-policy' },
  { name: 'Salesforce Certification Validity & Expiry', href: '/salesforce-certification-validity' },
  { name: 'How to Register for a Salesforce Exam', href: '/how-to-register-salesforce-exam' },
  { name: 'How to Get a Free Salesforce Certification', href: '/salesforce-free-certification' },
  { name: 'UX Designer vs Strategy Designer', href: '/ux-designer-vs-strategy-designer' },
  { name: 'System Architect vs Application Architect', href: '/system-architect-vs-application-architect' },
  { name: 'Pardot Consultant vs Marketing Cloud Consultant', href: '/pardot-consultant-vs-marketing-cloud-consultant' },
  { name: 'Platform Foundations vs AI Associate', href: '/platform-foundations-vs-ai-associate' },
  { name: 'Education Cloud vs Nonprofit Cloud Consultant', href: '/education-cloud-vs-nonprofit-cloud-consultant' },
  { name: 'Which Salesforce Certification First?', href: '/which-salesforce-certification-first' },
  { name: 'How to Study for Salesforce Certification', href: '/how-to-study-for-salesforce-certification' },
  { name: 'Salesforce Certification Exam Day Tips', href: '/salesforce-certification-exam-day-tips' },
  { name: 'Salesforce Admin vs Developer Career', href: '/salesforce-admin-vs-developer-career' },
  { name: 'Salesforce Certification Passing Score', href: '/salesforce-certification-passing-score' },
  { name: 'Salesforce Certification Salary', href: '/salesforce-certification-salary' },
  { name: 'Become a Salesforce CTA', href: '/become-cta' },
  { name: 'About', href: '/about' },
  { name: 'Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
  { name: 'Terms of Use', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy' },
]

export default function HtmlSitemapPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <ContentPageSchemas
        headline={pageTitle}
        description={pageDescription}
        path="/html-sitemap"
        breadcrumbItems={breadcrumbItems}
      />

      <div data-lcp-header>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">HTML Sitemap</h1>
        <LastUpdated />
      </div>
      <p className="text-gray-600 mb-8">
        Use this page to navigate all key site URLs and certification guides.
      </p>

      <section className="mb-10 rounded-xl border border-gray-100 bg-white p-5 text-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">How This Sitemap Is Organized</h2>
        <p className="mb-3">
          This HTML sitemap groups Trailblaze Prep pages by search intent. Core pages help you compare Salesforce
          certification costs, role paths, and exam difficulty. Study-guide pages go deeper on individual exams,
          while exam-tip pages focus on common traps and last-week revision.
        </p>
        <p>
          For the fastest route. Start with a role hub if you know your career direction. Use the individual study
          guides when you have chosen an exam and need section weightage, source references, and practice questions.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Core Pages</h2>
        <ul className="space-y-2">
          {corePages.map((page) => (
            <li key={page.href}>
              <Link href={page.href} className="text-salesforce-blue underline">
                {page.name}
              </Link>
              .
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
                <Link href={`/certifications/role/${category.slug}`} className="text-salesforce-blue underline">
                  {category.name} Hub
                </Link>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {category.items.map((item) => (
                  <li key={`${category.slug}-${item.href}`}>
                    <Link href={item.href} className="text-gray-700 hover:text-salesforce-blue hover:underline">
                      {item.name}
                    </Link>
                    .
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
