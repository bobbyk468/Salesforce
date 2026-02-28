import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Marketing Cloud Personalization AP Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Marketing Cloud Personalization (Interaction Studio) AP exam tips for ${RELEASE_CURRENT}: real-time personalisation, recipes, Einstein decisions, and scenario strategy to pass.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/marketing-cloud-personalization-ap-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/marketing-cloud-personalization-ap-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Marketing Cloud Personalization AP exam tips ${RELEASE_CURRENT}, Interaction Studio certification, how to pass MCP AP exam, real-time personalisation Salesforce`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'MC Personalization AP Exam Tips', url: '/marketing-cloud-personalization-ap-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Marketing Cloud Personalization Accredited Professional exam format?',
    answer: 'The Marketing Cloud Personalization AP (formerly Interaction Studio AP) exam has 40 multiple-choice questions, a 60-minute time limit, a Pass/Fail result, and a $150 fee. It validates practitioner-level knowledge of Salesforce Marketing Cloud Personalization: real-time behavioural tracking, personalisation campaigns, Einstein Recipes for recommendations, and Identity Resolution.',
  },
  {
    question: 'What are the highest-weight MCP AP exam sections?',
    answer: 'Personalisation Campaigns (30%) and Einstein Recipes and Decisions (25%) together account for 55% of the exam. Configuring web and email personalisation campaigns, building Einstein Recipes for product recommendations, and understanding how Personalization uses behavioural data for real-time decisioning are the most tested areas.',
  },
  {
    question: 'What is the difference between Marketing Cloud Personalization and Marketing Cloud Engagement?',
    answer: 'Marketing Cloud Engagement (SFMC) is for batch and journey-based email, SMS, and push communications. Marketing Cloud Personalization (MCP) is for real-time 1:1 personalisation at the moment of interaction — personalising website content, product recommendations, and triggered messages based on what a visitor is doing right now. MCP captures real-time behavioural data; SFMC uses profile and campaign data.',
  },
  {
    question: 'What are Einstein Recipes in Marketing Cloud Personalization?',
    answer: 'Einstein Recipes are the recommendation algorithm configurations in MCP. They define how to select and rank items (products, content, offers) for display to a user. Ingredients are the rules that determine which items are eligible (e.g., viewed categories, purchased products). Boosters increase the score of certain items. Exclusions remove items already purchased. The exam tests how to configure Recipes for common recommendation scenarios.',
  },
]

export default function MarketingCloudPersonalizationApExamTipsPage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/marketing-cloud-personalization-ap-exam-tips', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/marketing-cloud-personalization-ap-exam-tips' })
  const faqJsonLd = getFaqPageJsonLd(faqItems)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Marketing Cloud Personalization AP Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Marketing Cloud Personalization AP exam validates your ability to implement real-time
          personalisation using Salesforce MCP (formerly Interaction Studio). These tips focus on
          personalisation campaigns, Einstein Recipes, and Identity Resolution that define this accreditation.
        </p>
      </header>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What MCP AP Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Personalisation campaigns</strong> — Configuring web campaigns (banners, popups, inline content replacements) triggered by visitor behaviour, segment membership, or Einstein decisions. Email personalisation campaigns using Open-Time Content. Mobile SDK integration for app personalisation. A/B testing campaign variations and measuring lift.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Einstein Recipes and decisions</strong> — Building Einstein Recipes with Ingredients (collaborative filtering, viewed together, trending), Boosters (promote items from specific categories), and Exclusions (filter out purchased items). Einstein Decisions for next-best-action using AI-driven decisioning. Segment membership rules for targeted campaign eligibility.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Data model and Identity Resolution</strong> — The MCP data model (Users, Sessions, Events, Catalogue objects). Identity Resolution merging anonymous visitors with known profiles across web sessions, email opens, and CRM data. The Sitemap for tracking behavioural events (ViewItem, AddToCart, Purchase) and how catalogue data powers recommendations.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Personalisation Campaigns</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Einstein Recipes and Decisions</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Data Model and Identity Resolution</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Reporting and Analytics</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">AP format: 40 questions, 60 minutes, Pass/Fail, $150. Einstein Recipes configuration is the most distinctive topic — know Ingredients, Boosters, and Exclusions thoroughly.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach MCP AP Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a personalisation or recommendation scenario and ask which MCP feature,
          configuration, or component delivers it. Think real-time first — MCP is about the current
          visitor&apos;s session, not historical batch data.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For Recipe questions: Collaborative Filtering Ingredient = recommend items that similar users purchased. Viewed Together Ingredient = recommend items frequently viewed together in the same session. Trending Ingredient = recommend items with recent high view/purchase velocity. When a scenario says &apos;recommend products that customers who bought this item also bought&apos;, use the Collaborative Filtering Ingredient — not &apos;Viewed Together&apos; (which is same-session browsing, not purchase co-occurrence).</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For campaign trigger questions: web campaigns can be triggered by page type (product detail page), segment membership (Gold loyalty member), behaviour event (added item to cart but didn&apos;t checkout — cart abandonment), or Einstein decision. When a scenario describes &apos;show a discount popup to visitors who viewed 3 products without adding to cart&apos;, configure a rule-based campaign with a &apos;view count&apos; behavioural trigger.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For Identity Resolution questions: MCP tracks anonymous visitors with a cookie. When a visitor identifies themselves (login, email capture), MCP links the anonymous session data to the known profile. Identity Resolution matches across channels (web session + email open + mobile app + CRM record) to create a unified customer profile. When a question asks &apos;how does MCP know this website visitor is the same person as this email subscriber&apos;, the answer is Identity Resolution.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">AP Exam Benchmark</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          Pass 3 timed 40-question mocks before booking (Pass/Fail scoring)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          MCP AP is for digital marketing specialists implementing personalisation programmes. Hands-on
          experience configuring campaigns and Recipes in a live MCP environment is essential — the
          product has a unique interface and terminology that is difficult to learn from documentation
          alone. Access a demo or trial environment through your Salesforce partner relationship.
        </p>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start MCP AP Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/marketing-cloud-personalization-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            MCP AP Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/email-specialist-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Email Specialist Tips
          </Link>
          <Link href="/certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            All Certification Paths
          </Link>
        </div>
      </section>
    </div>
  )
}
