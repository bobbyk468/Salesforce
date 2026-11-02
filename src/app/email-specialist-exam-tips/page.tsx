import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_YEAR } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import ExamTipsCertLink from '@/components/ExamTipsCertLink'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'
import StudyGuideCrossLink from '@/components/StudyGuideCrossLink'
import ExamPricingCard from '@/components/ExamPricingCard'




const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'email-specialist'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Marketing Cloud Engagement Specialist exam tips (${RELEASE_YEAR}): 4-week study plan, deliverability strategies, and objective-focused practice.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/email-specialist-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/email-specialist-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Marketing Cloud Email Specialist', url: '/certifications/email-specialist' },
  { name: 'Email Specialist Exam Tips', url: '/email-specialist-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Email Specialist exam format?',
    answer: 'The Salesforce Certified Marketing Cloud Engagement Specialist exam has 60 multiple-choice questions and up to five unscored questions, a 90-minute time limit, a 67% passing score, and a $200 registration fee.',
  },
  {
    question: 'What sections carry the most weight on the Email Specialist exam?',
    answer: 'Marketing Automation and Subscriber and Data Management are each weighted 26%, Content Creation and Delivery is 24%, Insights and Analytics is 14%, and Email Marketing Best Practices is 10%.',
  },
  {
    question: 'How long does it take to prepare for the Email Specialist exam?',
    answer: '4–5 weeks of focused study. Prioritise deliverability, Journey Builder basics, Subscriber Management, and Content Builder. Hands-on practice with a Marketing Cloud sandbox makes scenarios much clearer.',
  },
  {
    question: 'Can this credential be part of a Marketing Cloud learning path?',
    answer: 'Yes. It covers Marketing Cloud email objectives and can be one part of a broader learning path. Review the prerequisites listed for any later credential separately.',
  },
  {
    question: 'Which Email Specialist concepts are useful to review?',
    answer: 'Useful distinctions to review include send classifications, AMPscript syntax and lookup functions, and when to use Data Extensions versus subscriber lists. Compare your understanding with the official exam objectives and documentation.',
  },
  ...getConceptFaqs('email-specialist-exam-tips'),
]

export default function EmailSpecialistExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/email-specialist-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems}   mainEntityUrl="/email-specialist-study-guide"
      />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_YEAR}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Marketing Cloud Engagement Specialist Exam Tips ({RELEASE_YEAR})
        </h1>
        <p className="text-lg text-gray-600">
          The SFMC Email Specialist certification covers email deliverability, subscriber management, AMPscript,
          send classification, and Journey Builder. These tips help you focus on the highest-impact topics and
          apply the exam objectives to practical examples.
        </p>
      </header>

      <ContentPageAuthor />

      <ExamTipsCertLink certSlug={slug} />
      <StudyGuideCrossLink studyGuideSlug="email-specialist-study-guide" certName="Marketing Cloud Email Specialist" />
      <ExamPricingCard
        certSlug="email-specialist"
        certName="Marketing Cloud Email Specialist"
        certPageSlug="email-specialist"
      />


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: Best Way to Pass Email Specialist</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />The exam has 60 multiple-choice questions and up to five unscored questions in 90 minutes. The passing score is 67%; no practice score guarantees an exam result.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Marketing Automation and Subscriber and Data Management carry the largest weights at 26% each; Content Creation and Delivery is 24%.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />No prerequisite is required. Salesforce highly recommends MKT 101; hands-on experience is part of the guide’s audience description.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Review SPF, DKIM, and DMARC against the email deliverability objectives and be able to explain their distinct roles.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">4-Week Email Specialist Study Plan</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p><strong>Week 1:</strong> Email Marketing Best Practices — CAN-SPAM compliance, commercial vs transactional send classification, list hygiene, unsubscribe handling, and sender reputation fundamentals.</p>
          <p><strong>Week 2:</strong> Content Creation &amp; Data Management — Content Builder, AMPscript personalisation functions (Lookup, LookupRows, AttributeValue, IIF), Data Extensions, Data Filters, and segmentation with SQL in Automation Studio.</p>
          <p><strong>Week 3:</strong> Email Deliverability — SPF (authorised sending IPs), DKIM (cryptographic signature), DMARC (policy enforcement), Sender Authentication Package (SAP), IP warming, bounce handling, and suppression lists. Subscriber management: All Subscribers list, Publication Lists, Auto-Suppression Lists.</p>
          <p><strong>Week 4:</strong> Tracking &amp; Reporting, Automation Studio, Journey Builder, Triggered Sends, and A/B Testing. Use practice questions to identify and revisit weak areas.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Handle Email Specialist Scenario Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          When a practice question describes an email marketing requirement, identify the relevant Marketing Cloud feature or configuration before selecting an answer.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>Deliverability questions:</strong> SPF authorises sending IPs in DNS; DKIM adds a cryptographic header signature; DMARC defines the policy (none/quarantine/reject) when SPF or DKIM fails. All three are included in the Sender Authentication Package (SAP). Know what each protects against.</span></li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>Subscriber management:</strong> Global unsubscribes on the All Subscribers list override everything. Suppression Lists exclude specific addresses from a send even if they’re in the target audience. Auto-Suppression Lists apply across all sends automatically.</span></li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>Send type questions:</strong> Triggered Sends fire in real time based on an event or external API call (transactional). Batch sends go to a list or Data Extension at a scheduled time (commercial). Misclassifying marketing emails as transactional violates CAN-SPAM.</span></li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>AMPscript:</strong> Review Lookup(), LookupRows(), AttributeValue(), and IIF(), including their distinct return values and use cases.</span></li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>Metrics questions:</strong> Match the metric to the business question — Delivered Rate (did it arrive?), Open Rate (was it opened?), Click-to-Open Rate or CTOR (content relevance), hard bounce (permanent failure), soft bounce (temporary). Hard bounces trigger automatic unsubscribe in Marketing Cloud.</span></li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Practice Review</h2>
        <p className="text-sm text-gray-700 mb-2">
          Use timed practice to identify topics that need another review; this is not a guarantee of exam readiness:
        </p>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          Practice with the official 90-minute exam limit
        </p>
        <p className="text-sm text-gray-700 mt-3">
          The official guide lists 60 multiple-choice questions plus up to five unscored questions. Review the full set of objectives and revisit any concepts that remain unclear.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Three Concepts to Review</h2>
        <p className="text-sm text-gray-600 mb-5">Use these distinctions as a focused review list alongside the official exam objectives.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Send Classification — Transactional vs Commercial and Suppression Bypasses</p>
            <p className="text-sm text-gray-700">Transactional send classifications bypass the commercial Unsubscribe suppression list (because a password reset or order confirmation must reach the customer regardless of marketing opt-out). Commercial classifications respect all suppression lists. Candidates mark commercial sends as transactional to bypass unsubscribes — this violates CAN-SPAM and is explicitly tested. Know the three send classification components: Delivery Profile, Sender Profile, and CAN-SPAM classification.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. AMPscript — Block Syntax vs Inline Syntax and Lookup Functions</p>
            <p className="text-sm text-gray-700">Block AMPscript uses %%[ code ]%% delimiters and is used for multi-line logic. Inline AMPscript uses %%=Function()=%% for single expressions within HTML. Lookup() retrieves a single field value from one row; LookupRows() retrieves multiple rows as a rowset. Candidates use Lookup() when they need multiple rows (returns only the first match) or mix up the delimiters, causing render failures.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Data Extensions vs Subscriber Lists — When to Use Each</p>
            <p className="text-sm text-gray-700">Subscriber Lists are simple, flat, all-or-nothing opt-in structures. Data Extensions support relational data, custom fields, and complex targeting but require more configuration. Triggered Sends require Data Extensions (not lists). The exam tests which data structure to recommend for a given scenario — when in doubt, complex or multi-send campaigns use Data Extensions; simple newsletter lists use Subscriber Lists.</p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Questions Candidates Ask</h2>
        <dl className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: item.answer }} />
            </div>
          ))}
        </dl>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Next Step</h2>
        <p className="text-sm text-gray-700 mb-4">
          Apply these tips with real Email Specialist practice questions:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/certifications/email-specialist"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors"
          >
            Start Email Specialist Practice Test
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <p className="text-xs text-gray-600 mt-4">
          After this exam, consider <Link href="/certifications/marketing-cloud-consultant" className="text-salesforce-blue underline">Marketing Cloud Engagement Consultant</Link> or <Link href="/certifications/pardot-consultant" className="text-salesforce-blue underline">Marketing Cloud Account Engagement Consultant</Link> next.
        </p>
      </section>
    </div>
  )
}
