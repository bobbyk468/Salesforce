import Link from 'next/link'
import type { Metadata } from 'next'
import {
  Shield,
  Code,
  Mail,
  Briefcase,
  Award,
  ArrowRight,
  BookOpen,
  CheckCircle,
  TrendingUp,
  Layout,
  Target,
  Palette,
  GraduationCap,
  BadgeCheck,
  FileQuestion,
  BarChart3,
  Lightbulb,
  RefreshCw,
  Star,
} from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'
import { getWebPageJsonLd, getBreadcrumbListJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

export const metadata: Metadata = {
  alternates: { canonical: siteUrl },
}

/** Role slug for "View all" link: /certifications/role/[slug] */
const certificationCategories = [
  {
    slug: 'associate',
    title: 'Associate',
    description: 'Foundational credentials for the Customer 360 Platform',
    icon: GraduationCap,
    color: 'from-slate-500 to-slate-700',
    certifications: [
      { name: 'Platform Foundations', href: '/certifications/platform-foundations' },
      { name: 'AI Associate', href: '/certifications/ai-associate' },
      { name: 'Marketing Cloud Engagement Foundations', href: '/certifications/marketing-cloud-engagement-foundations' },
      { name: 'MuleSoft Integration Foundations', href: '/certifications/mulesoft-integration-foundations' },
    ],
  },
  {
    slug: 'administrator',
    title: 'Administrator',
    description: 'Master Salesforce administration, security, and automation',
    icon: Shield,
    color: 'from-blue-500 to-blue-700',
    certifications: [
      { name: 'Platform Administrator (ADM-201)', href: '/certifications/administrator' },
      { name: 'Platform Administrator II (ADM-211)', href: '/certifications/advanced-administrator' },
      { name: 'Platform App Builder', href: '/certifications/app-builder' },
      { name: 'Agentforce Specialist', href: '/certifications/agentforce-specialist' },
      { name: 'Business Analyst', href: '/certifications/business-analyst' },
      { name: 'CPQ Administrator', href: '/certifications/cpq-administrator' },
      { name: 'Marketing Cloud Engagement Admin', href: '/certifications/marketing-cloud-engagement-admin' },
      { name: 'Slack Administrator', href: '/certifications/slack-administrator' },
      { name: 'Platform Administrator Practice Test', href: '/certifications/administrator-practice-test' },
    ],
  },
  {
    slug: 'developer',
    title: 'Developer',
    description: 'Build custom applications with Apex, LWC, MuleSoft, and more',
    icon: Code,
    color: 'from-purple-500 to-purple-700',
    certifications: [
      { name: 'Platform App Builder', href: '/certifications/app-builder' },
      { name: 'Platform Developer I & II', href: '/certifications/developer-1' },
      { name: 'JavaScript Developer I', href: '/certifications/javascript-developer-i' },
      { name: 'B2C Commerce Developer', href: '/certifications/b2c-commerce-developer' },
      { name: 'Industries CPQ Developer', href: '/certifications/industries-cpq-developer' },
      { name: 'Marketing Cloud Engagement Developer', href: '/certifications/marketing-cloud-engagement-developer' },
      { name: 'MuleSoft Developer I & II', href: '/certifications/mulesoft-developer-i' },
      { name: 'MuleSoft Hyperautomation', href: '/certifications/mulesoft-hyperautomation-developer' },
      { name: 'OmniStudio Developer', href: '/certifications/omnistudio-developer' },
      { name: 'Slack Developer', href: '/certifications/slack-developer' },
    ],
  },
  {
    slug: 'consultant',
    title: 'Consultant',
    description: 'Design and implement solutions across Sales, Service, and industry clouds',
    icon: Briefcase,
    color: 'from-green-500 to-green-700',
    certifications: [
      { name: 'Sales Cloud Consultant', href: '/certifications/sales-cloud' },
      { name: 'Service Cloud Consultant', href: '/certifications/service-cloud' },
      { name: 'Experience Cloud Consultant', href: '/certifications/experience-cloud' },
      { name: 'Field Service Consultant', href: '/certifications/field-service' },
      { name: 'Data Cloud Consultant', href: '/certifications/data-cloud-consultant' },
      { name: 'CRM Analytics & Einstein Discovery', href: '/certifications/crm-analytics-einstein-discovery-consultant' },
      { name: 'Education Cloud Consultant', href: '/certifications/education-cloud-consultant' },
      { name: 'Revenue Cloud Consultant', href: '/certifications/revenue-cloud-consultant' },
      { name: 'Nonprofit Cloud & NPSP', href: '/certifications/nonprofit-cloud' },
      { name: 'OmniStudio Consultant', href: '/certifications/omnistudio-consultant' },
      { name: 'Slack Consultant', href: '/certifications/slack-consultant' },
    ],
  },
  {
    slug: 'marketing',
    title: 'Marketing',
    description: 'Digital marketing automation and customer engagement',
    icon: Mail,
    color: 'from-orange-500 to-orange-700',
    certifications: [
      { name: 'Marketing Cloud Email Specialist', href: '/certifications/email-specialist' },
      { name: 'Marketing Cloud Engagement Admin', href: '/certifications/marketing-cloud-engagement-admin' },
      { name: 'Marketing Cloud Engagement Consultant', href: '/certifications/marketing-cloud-consultant' },
      { name: 'Marketing Cloud Engagement Developer', href: '/certifications/marketing-cloud-engagement-developer' },
      { name: 'Account Engagement (Pardot) Specialist', href: '/certifications/pardot-specialist' },
      { name: 'Account Engagement (Pardot) Consultant', href: '/certifications/pardot-consultant' },
      { name: 'Marketing Cloud Email Specialist Practice Test', href: '/certifications/email-specialist-practice-test' },
    ],
  },
  {
    slug: 'architect',
    title: 'Architect',
    description: 'Design secure, scalable, high-performing solutions on the platform',
    icon: Layout,
    color: 'from-indigo-500 to-indigo-700',
    certifications: [
      { name: 'Application Architect', href: '/certifications/application-architect' },
      { name: 'Data Architect', href: '/certifications/data-architect' },
      { name: 'Integration Architect', href: '/certifications/integration-architect' },
      { name: 'Sharing & Visibility Architect', href: '/certifications/sharing-visibility-architect' },
      { name: 'System Architect', href: '/certifications/system-architect' },
      { name: 'Identity & Access Mgmt Architect', href: '/certifications/identity-access-management-architect' },
      { name: 'Dev Lifecycle & Deployment Architect', href: '/certifications/dev-lifecycle-deployment-architect' },
      { name: 'Technical Architect (CTA)', href: '/certifications/technical-architect' },
      { name: 'CTA - Architect Evaluation', href: '/certifications/technical-architect-evaluation' },
      { name: 'CTA - Architect Review Board', href: '/certifications/technical-architect-review-board' },
    ],
  },
  {
    slug: 'accredited-professional',
    title: 'Accredited Professional',
    description: 'Product and industry credentials for Salesforce Partners',
    icon: BadgeCheck,
    color: 'from-violet-500 to-violet-700',
    certifications: [
      { name: 'Advanced Field Service AP', href: '/certifications/advanced-field-service-ap' },
      { name: 'B2B Commerce Admin & Developer AP', href: '/certifications/b2b-commerce-admin-ap' },
      { name: 'Communications Cloud AP', href: '/certifications/communications-cloud-ap' },
      { name: 'Consumer Goods Cloud & TPM AP', href: '/certifications/consumer-goods-cloud-ap' },
      { name: 'Contact Center AP', href: '/certifications/contact-center-ap' },
      { name: 'CPQ and Billing AP', href: '/certifications/cpq-billing-ap' },
      { name: 'Energy & Utilities AP', href: '/certifications/energy-utilities-ap' },
      { name: 'Financial Services & Health Cloud AP', href: '/certifications/financial-services-cloud-ap' },
      { name: 'Heroku Developer AP', href: '/certifications/heroku-developer-ap' },
      { name: 'Loyalty, Manufacturing, Media Cloud AP', href: '/certifications/loyalty-management-ap' },
      { name: 'Marketing Cloud (Cross Channel, Intelligence, Personalization) AP', href: '/certifications/marketing-cloud-advanced-cross-channel-ap' },
      { name: 'Net Zero Cloud AP', href: '/certifications/net-zero-cloud-ap' },
      { name: 'Order Management Admin & Developer AP', href: '/certifications/order-management-admin-ap' },
      { name: 'Process Automation AP', href: '/certifications/process-automation-ap' },
      { name: 'Public Sector Solutions AP', href: '/certifications/public-sector-solutions-ap' },
    ],
  },
  {
    slug: 'sales',
    title: 'Sales Professional',
    description: 'Sales excellence and customer-centric methodology',
    icon: Target,
    color: 'from-amber-500 to-amber-700',
    certifications: [
      { name: 'Certified Sales Foundations', href: '/certifications/sales-foundations' },
    ],
  },
  {
    slug: 'designer',
    title: 'Designer',
    description: 'Human-centered experience strategy and UX design',
    icon: Palette,
    color: 'from-rose-500 to-rose-700',
    certifications: [
      { name: 'Platform Strategy Designer', href: '/certifications/strategy-designer' },
      { name: 'User Experience (UX) Designer', href: '/certifications/ux-designer' },
    ],
  },
  {
    slug: 'tableau',
    title: 'Tableau',
    description: 'Analytics and data visualization with Tableau',
    icon: TrendingUp,
    color: 'from-cyan-500 to-cyan-700',
    certifications: [
      { name: 'Tableau Architect', href: '/certifications/tableau-architect' },
      { name: 'Tableau Consultant', href: '/certifications/tableau-consultant' },
      { name: 'Tableau Data Analyst', href: '/certifications/tableau-data-analyst' },
      { name: 'Tableau Desktop Foundations', href: '/certifications/tableau-desktop-foundations' },
      { name: 'Tableau Server Administrator', href: '/certifications/tableau-server-administrator' },
    ],
  },
]

const features = [
  {
    icon: BookOpen,
    title: 'Practice Questions',
    description: 'Hundreds of practice questions for each certification exam',
  },
  {
    icon: CheckCircle,
    title: 'Updated Content',
    description: 'Regularly updated to match the latest exam objectives',
  },
  {
    icon: TrendingUp,
    title: 'Aligned with Official Exam Outlines',
    description: 'Content aligned with official Salesforce exam blueprints so you study what’s actually on the exam.',
    proof: { learners: '10,000+', rating: 4.8 },
  },
]

const faqItems = [
  {
    question: 'How accurate are these practice questions?',
    answer:
      'They are aligned with official Salesforce exam outlines and updated regularly. They test the same concepts you will see on the real exam. Use them to gauge readiness and find gaps.',
  },
  {
    question: 'How often are the questions and study materials updated?',
    answer:
      'We review and update content to match the latest exam blueprints and product changes. When Salesforce changes exams or weightage, we update our section weightage and topics.',
  },
  {
    question: 'What certifications do you cover?',
    answer:
      'We cover all major Salesforce certifications: Associate, Administrator, Developer, Consultant, Marketing, Architect, Accredited Professional, Sales, Designer, and Tableau. Each page has exam weightage, tips, prerequisites, and practice questions.',
  },
  {
    question: 'What makes your materials different from other study resources?',
    answer:
      'We give section-wise exam weightage for every certification so you know where to focus. Each page has exam tips, prerequisites, focus areas, and a study strategy—not just questions. Content is easy to scan.',
  },
  {
    question: 'Do I need hands-on experience before taking a Salesforce certification exam?',
    answer:
      'Yes. Salesforce recommends hands-on experience in a Developer Edition or Trailhead Playground for most certs. Our materials support that practice; they are not a substitute for using the platform.',
  },
]

export default function Home() {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Trailblaze Prep',
    url: siteUrl,
    description:
      'Independent Salesforce certification preparation resource: practice questions, section-wise exam weightage, and study guides for Admin, Developer, Consultant, Architect, and more.',
  }

  const webSiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Trailblaze Prep',
    description:
      'Salesforce certification practice questions, exam weightage by section, and study guides for Admin, Developer, Consultant, Marketing, Architect, and Tableau.',
    url: siteUrl,
    publisher: { '@type': 'Organization', name: 'Trailblaze Prep', url: siteUrl },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${siteUrl}/certifications?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  const homeBreadcrumb = [{ name: 'Home', url: '/' }]
  const webPageJsonLd = getWebPageJsonLd({
    name: 'Salesforce Certification Practice Questions & Study Guides | Trailblaze Prep',
    description:
      'Prepare for every Salesforce certification with practice questions, section-wise exam weightage, and study guides. Admin, Developer, Consultant, Architect & more. Browse by role and start free.',
    path: '/',
    breadcrumbItems: homeBreadcrumb,
  })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(homeBreadcrumb)

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero Section */}
      <section data-lcp-hero className="gradient-bg text-white py-20 px-4" aria-label="Primary content">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Salesforce Certification Resources, Practice Questions & Study Guides
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto">
            Prepare for every Salesforce certification with practice questions, exam weightage, and study guides in one place.
          </p>
          <p className="text-lg text-blue-100/90 mb-2 max-w-2xl mx-auto">
            Studying for Admin (ADM-201), Developer I, Sales Cloud Consultant, or 80+ other credentials? We give you exam tips, prerequisites, and sample questions.
          </p>
          <p className="text-base text-blue-100/80 mb-8 max-w-2xl mx-auto">
            Clear outlines. Actionable study plans. Practice under exam-like conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/certifications/administrator"
              className="px-10 py-4 bg-white text-salesforce-dark rounded-lg font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Free ADM-201 Practice Test
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/certifications"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-salesforce-dark transition-all shadow-lg hover:shadow-xl"
            >
              All Certifications
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-white/70 text-white rounded-lg font-semibold hover:bg-white/10 hover:border-white transition-all"
            >
              Contact Us
            </Link>
          </div>
          <p className="text-sm text-blue-100/85 mt-4">
            Popular reads:{' '}
            <Link href="/adm-201-exam-tips-2026" className="underline hover:text-white font-medium">ADM-201 exam tips</Link>
            {' · '}
            <Link href="/adm-201-vs-app-builder" className="underline hover:text-white font-medium">ADM-201 vs App Builder</Link>
            {' · '}
            <Link href="/which-salesforce-certification-first" className="underline hover:text-white font-medium">Which cert first?</Link>
            {' · '}
            <Link href="/how-to-study-for-salesforce-certification" className="underline hover:text-white font-medium">How to study</Link>
            {' · '}
            <Link href="/how-to-become-salesforce-consultant" className="underline hover:text-white font-medium">Become a Consultant</Link>
            {' · '}
            <Link href="/how-to-become-salesforce-developer" className="underline hover:text-white font-medium">Become a Developer</Link>
            {' · '}
            <Link href="/salesforce-admin-vs-developer-career" className="underline hover:text-white font-medium">Admin vs Developer</Link>
            {' · '}
            <Link href="/salesforce-certification-difficulty" className="underline hover:text-white font-medium">Difficulty ranking</Link>
          </p>
        </div>
      </section>

      {/* Why Use Trailblaze Prep / Overview - Updated */}
      <section className="py-20 px-4 bg-white" aria-labelledby="overview-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="overview-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Why Use Trailblaze Prep for Your Exam Prep
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Built for professionals who want clarity and confidence before their exam.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Who This Site Is For */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-salesforce-blue rounded-xl flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Who This Site Is For</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Trailblaze Prep is for anyone preparing for a Salesforce certification. Admins, developers, consultants, architects, and marketers.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Want to see exactly how each exam is weighted by section</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Need clear exam tips and prerequisites</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Want to practice with sample questions before the real exam</span>
                </li>
              </ul>
            </div>

            {/* What We Cover */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">What We Cover</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We cover <strong className="text-gray-900">80+ Salesforce certifications</strong> across all major categories:
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">Associate</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">Administrator</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">Developer</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">Consultant</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">Marketing</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">Architect</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">Tableau</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">And more</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4 pt-4 border-t border-purple-100">
                Every certification page includes section-wise exam weightage so you can prioritize your study time effectively.
              </p>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-gradient-to-r from-salesforce-blue/5 via-salesforce-light/5 to-salesforce-blue/5 rounded-2xl p-8 border border-salesforce-blue/10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Trailblaze Prep?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-salesforce-blue rounded-xl mb-4">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Study Smarter</h4>
                <p className="text-sm text-gray-600">
                  Focus on high-weightage sections first. Maximize your study efficiency with data-driven insights.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-salesforce-blue rounded-xl mb-4">
                  <BookOpen className="h-7 w-7 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Comprehensive Content</h4>
                <p className="text-sm text-gray-600">
                  Get exam tips, prerequisites, study strategies, and practice questions—all in one place.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-salesforce-blue rounded-xl mb-4">
                  <CheckCircle className="h-7 w-7 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Exam-Ready</h4>
                <p className="text-sm text-gray-600">
                  Practice with sample questions and detailed explanations. Know when you&apos;re ready to sit the exam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different - Card-style panel (distinct background) */}
      <section className="py-20 px-4 bg-salesforce-blue/5" aria-labelledby="different-heading">
        <div className="max-w-6xl mx-auto rounded-3xl border border-salesforce-blue/25 bg-white shadow-2xl shadow-gray-200/40 p-8 md:p-12 ring-1 ring-salesforce-blue/15">
          <div className="text-center mb-12 pb-10 border-b border-gray-100">
            <h2 id="different-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine three features on every certification page for a complete study experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Feature 1 */}
            <div className="rounded-2xl border-l-4 border-salesforce-blue bg-white shadow-md p-8 border border-gray-100 hover:shadow-lg hover:border-salesforce-blue/30 transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-salesforce-blue/10 rounded-2xl mb-6">
                <BarChart3 className="h-8 w-8 text-salesforce-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Exam Weightage by Section
              </h3>
              <p className="text-gray-600 leading-relaxed">
                See the exact share of the exam for each topic. Focus your study time where it counts.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-2xl border-l-4 border-purple-500 bg-white shadow-md p-8 border border-gray-100 hover:shadow-lg hover:border-purple-200 transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-6">
                <Lightbulb className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Exam Prep Content
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tips, prerequisites, focus areas, and a study plan for each exam. Targeted guidance, not generic advice.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-2xl border-l-4 border-green-500 bg-white shadow-md p-8 border border-gray-100 hover:shadow-lg hover:border-green-200 transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6">
                <FileQuestion className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Sample Practice Questions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sample questions with clear explanations. Practice under exam-like conditions before the real test.
              </p>
            </div>
          </div>

          {/* Update Notice */}
          <div className="bg-salesforce-blue/10 border-l-4 border-salesforce-blue border border-salesforce-blue/20 rounded-xl p-6 flex items-start gap-4">
            <div className="flex-shrink-0">
              <RefreshCw className="h-6 w-6 text-salesforce-blue" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Always Up-to-Date</h4>
              <p className="text-gray-700 text-sm">
                We align content with official exam outlines and update when Salesforce changes exams. No outdated material.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get - Card-style panel (distinct background) */}
      <section className="py-20 px-4 bg-gray-100/80" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto rounded-3xl border border-salesforce-blue/25 bg-white shadow-2xl shadow-gray-200/40 p-8 md:p-12 ring-1 ring-salesforce-blue/15">
          <div className="text-center pb-10 mb-10 border-b border-gray-100">
            <h2 id="features-heading" className="text-3xl font-bold text-gray-900 mb-2 text-center">
              What You Get
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Practice questions, updated content, and materials aligned with official exam outlines.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="text-center p-8 rounded-2xl border-l-4 border-salesforce-blue border border-gray-100 bg-salesforce-blue/5 shadow-md hover:shadow-lg hover:bg-salesforce-blue/10 transition-all duration-200"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-salesforce-blue rounded-2xl mb-5 text-white">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                {'proof' in feature && feature.proof && (
                  <div className="mt-5 pt-5 border-t border-salesforce-blue/20">
                    <p className="text-sm font-semibold text-gray-900 mb-1">
                      Trusted by {feature.proof.learners} learners
                    </p>
                    <div className="flex items-center justify-center gap-0.5" aria-label={`Rated ${feature.proof.rating} out of 5 stars`}>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i <= Math.round(feature.proof.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`}
                          aria-hidden
                        />
                      ))}
                      <span className="ml-1.5 text-sm font-medium text-gray-600">{feature.proof.rating}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Inside Each Certification Page - Card-style panel (distinct background) */}
      <section className="py-20 px-4 bg-slate-50/90" aria-labelledby="how-it-works-heading">
        <div className="max-w-4xl mx-auto rounded-3xl border border-salesforce-blue/25 bg-white shadow-2xl shadow-gray-200/40 p-8 md:p-12 ring-1 ring-salesforce-blue/15">
          <div className="text-center pb-10 mb-10 border-b border-gray-100">
            <h2 id="how-it-works-heading" className="text-3xl font-bold text-gray-900 mb-2 text-center">
              What&apos;s Inside Each Certification Page
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              Each certification page has exam weightage, tips, prerequisites, and sample questions with explanations.
            </p>
          </div>
          <div className="rounded-2xl border-l-4 border-salesforce-blue bg-salesforce-blue/5 border border-gray-100 shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-salesforce-blue/10 rounded-full mb-3">
                  <Target className="h-6 w-6 text-salesforce-blue" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Section Weightage</h3>
                <p className="text-sm text-gray-600">See exactly how much each topic contributes to your exam score</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-salesforce-blue/10 rounded-full mb-3">
                  <BookOpen className="h-6 w-6 text-salesforce-blue" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Study Strategy</h3>
                <p className="text-sm text-gray-600">Get exam tips, prerequisites, and focus areas tailored to each certification</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-salesforce-blue/10 rounded-full mb-3">
                  <FileQuestion className="h-6 w-6 text-salesforce-blue" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Practice Questions</h3>
                <p className="text-sm text-gray-600">Test your knowledge with sample questions and detailed explanations</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/certifications/administrator"
                className="inline-flex items-center gap-2 px-6 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors"
              >
                ADM-201 Study Guide &amp; Practice Questions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by role (compact for smaller HTML; full grid on /certifications) */}
      <section className="py-20 px-4" aria-labelledby="browse-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="browse-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Salesforce Certifications by Role
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Choose your path and start preparing with exam weightage, tips, and practice questions.
          </p>
          <ul className="flex flex-wrap justify-center gap-3">
            {certificationCategories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/certifications/role/${category.slug}`}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white border border-gray-200 rounded-lg font-medium text-gray-700 hover:bg-salesforce-blue/5 hover:border-salesforce-blue/50 hover:text-salesforce-dark transition-colors"
                >
                  {category.title}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6">
            <Link href="/certifications" className="font-semibold text-salesforce-blue hover:text-salesforce-dark">
              View all certifications
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ Section (accordion for scanability) */}
      <section className="py-20 px-4 bg-gray-50" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="faq-heading" className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions About Salesforce Certification Study Materials
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-salesforce-dark text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Certified?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Start your preparation today with our proven study materials
          </p>
          <Link
            href="/certifications/administrator"
            className="inline-flex items-center px-8 py-4 bg-white text-salesforce-dark rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Free ADM-201 Practice Test
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
