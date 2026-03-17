import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'pardot-specialist'
const pageTitle = buildStudyGuideTitle(slug)
const pageDescription = `Pardot Specialist study guide: 5 sections, 8-week plan, scoring, Engagement Studio. $200, 60 questions. Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/pardot-specialist-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/pardot-specialist-study-guide`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `pardot specialist study guide, marketing cloud account engagement certification 2026, pardot exam prep, MCAE specialist certification`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Pardot Specialist Study Guide', url: '/pardot-specialist-study-guide' },
]

const examSections = [
  { name: 'Lead Management', weight: 21, note: 'Prospect lifecycle: visitor → prospect → lead/contact. Scoring model: default scores for page views, email opens, form submissions, custom scoring actions. Grading model: A–F grades based on prospect profile match (industry, company size, title). Automation rules for lead assignment, segmentation, and nurturing. Completion actions on forms, emails, and file downloads.' },
  { name: 'Email Marketing', weight: 22, note: 'Pardot email types: list emails, autoresponders, one-to-one emails, Engagement Studio emails. Email builder: drag-and-drop vs HTML. Variable tags for personalisation (first name, custom fields). Sender options: general, specific user, assigned user. A/B testing, send schedule, and rendering across clients. Email deliverability: SPF, DKIM, dedicated IP, opt-out compliance.' },
  { name: 'Forms, Landing Pages & Automation', weight: 20, note: 'Pardot forms vs form handlers (for existing external forms): field mapping, thank-you content, conditional completion actions. Progressive profiling: showing new fields to returning visitors. Landing pages: using the landing page builder, tracking code, connected campaigns. Automation rules: rule conditions (ANY/ALL), repeatable vs one-time. Segmentation rules: static list criteria.' },
  { name: 'Administration & Setup', weight: 24, note: 'Salesforce-Pardot connector: enabling, syncing behaviour, sync frequency, field mappings, connected campaigns. Business Units: purpose, cross-business unit reporting limitations. User roles: Administrator, Marketing, Sales, and their capabilities. Pardot settings: account limits, domain setup, tracking code implementation. Campaign and tag organisation. Prospect import and field standards.' },
  { name: 'Engagement Studio & Reporting', weight: 13, note: 'Engagement Studio: drip programs logic — action steps (send email, add to list, assign), trigger steps (email open, form submit, link click), rule steps (grade, score, field criteria). Wait steps and timing logic. Pausing and restarting programs. Reporting: prospect lifecycle report, email performance report, campaign ROI report, form and landing page reports. B2B Marketing Analytics connector.' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Pardot Specialist certification?',
    answer: 'The Salesforce Pardot Specialist (now officially Marketing Cloud Account Engagement Specialist) certification validates skills in using Pardot for B2B marketing automation — including lead scoring and grading, email marketing, forms and landing pages, Engagement Studio, and Salesforce integration. The exam has 60 questions, 90-minute time limit, ~65% passing score, and a $200 fee.',
  },
  {
    question: 'What is the difference between Pardot scoring and grading?',
    answer: 'Scoring measures prospect engagement (activity): points are added for page views, email opens, form submissions, file downloads, and custom actions. A high score means the prospect is actively engaged. Grading measures prospect fit (profile): A–F grade based on how well the prospect matches your ideal customer profile (industry, company size, job title, etc.). A high grade means the prospect is a good fit. Sales teams should prioritise prospects with both high scores (engaged) and high grades (good fit).',
  },
  {
    question: 'What is Engagement Studio in Pardot?',
    answer: 'Engagement Studio is Pardot\'s visual drip program builder. It uses a flowchart-based interface with three step types: Action steps (do something: send email, add tag, notify user, adjust score), Trigger steps (wait for something: email open, link click, form submission), and Rule steps (branch based on criteria: score, grade, field value). Programs run prospects through personalised nurture sequences based on their behaviour and profile data.',
  },
  {
    question: 'What is the difference between Pardot forms and form handlers?',
    answer: 'Pardot forms are hosted by Pardot — you embed them on your website using a code snippet or iFrame. They support progressive profiling (showing different fields to returning visitors) and are fully tracked. Form handlers are for your own externally-hosted forms — Pardot receives the form submission data via an endpoint URL and creates/updates the prospect record. Form handlers do not support progressive profiling. Use form handlers when you cannot replace an existing form on your website.',
  },
  {
    question: 'Is ADM-201 required before Pardot Specialist?',
    answer: 'ADM-201 is not a formal prerequisite, but it is helpful because Pardot integrates with Salesforce CRM. The Pardot Specialist exam focuses on Pardot features, not core Salesforce admin knowledge. However, understanding Salesforce campaigns, leads, contacts, and the Pardot connector sync behaviour requires some CRM familiarity. Many marketing professionals without ADM-201 pass Pardot Specialist successfully with Trailhead and hands-on Pardot experience.',
  },
]

export default function PardotSpecialistStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/pardot-specialist-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Study Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce Pardot Specialist Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Your complete guide to passing the Pardot Specialist exam — lead scoring and grading, email marketing, Engagement Studio, forms, landing pages, and Salesforce integration.
        </p>
      </div>

      <ContentPageAuthor />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '60' },
          { label: 'Time Limit', value: '90 min' },
          { label: 'Passing Score', value: '~65%' },
          { label: 'Exam Fee', value: '$200' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Exam Sections &amp; Weightings</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">{section.name}</span>
                <span className="text-salesforce-blue font-semibold">{section.weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 3.3}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Each Section Tests</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-salesforce-blue/10 text-salesforce-dark text-xs font-bold">{section.weight}%</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{section.name}</h3>
                  <p className="text-sm text-gray-600">{section.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">8-Week Study Plan</h2>
        <div className="space-y-3 text-sm">
          {[
            { week: 'Week 1', focus: 'Pardot fundamentals — understand the visitor-to-prospect lifecycle, the Salesforce-Pardot sync, connected campaigns, and the Pardot Lightning app navigation.' },
            { week: 'Week 2', focus: 'Scoring & Grading — configure a custom scoring model in your Pardot account. Set up prospect grading criteria. Practice identifying high-score vs high-grade scenarios.' },
            { week: 'Week 3', focus: 'Forms & Landing Pages — build a Pardot form with progressive profiling. Create a form handler for an external form. Build and publish a landing page. Test completion actions.' },
            { week: 'Week 4', focus: 'Email Marketing — create a list email, configure an autoresponder, and set up A/B testing. Review deliverability settings: SPF/DKIM, opt-out compliance, bounce handling.' },
            { week: 'Week 5', focus: 'Automation Rules & Segmentation — build automation rules with multi-condition logic. Create segmentation lists. Compare automation rules vs segmentation rules vs completion actions.' },
            { week: 'Week 6', focus: 'Engagement Studio — build a nurture program with action, trigger, and rule steps. Configure a branching sequence based on email open and form submission triggers.' },
            { week: 'Week 7', focus: 'Administration — review Salesforce connector settings, field sync behaviour, business units, and user roles. Practice identifying which user role can perform each action.' },
            { week: 'Week 8', focus: 'Full mock exams. Administration (24%) and Lead Management (21%) are the heaviest sections. Focus on scoring vs grading distinctions and Engagement Studio step types. Aim for 75%+.' },
          ].map((item) => (
            <div key={item.week} className="flex gap-3">
              <span className="flex-shrink-0 font-semibold text-salesforce-blue w-16">{item.week}</span>
              <span className="text-gray-700">{item.focus}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Scenario Strategy Tips</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">1.</span><span><strong>Scoring = engagement, Grading = fit:</strong> This distinction is tested repeatedly. A prospect who opens every email has a high score. A prospect who matches your ideal customer profile has a high grade. Marketing qualified leads (MQL) have both high score AND high grade.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">2.</span><span><strong>Automation rules run in real time; segmentation rules are static:</strong> Automation rules trigger when a prospect matches criteria (even as behaviour changes). Segmentation rules are point-in-time: they evaluate prospects and create a static list. Dynamic lists update continuously, like automation rules.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">3.</span><span><strong>Engagement Studio step types:</strong> Action = do something now. Trigger = wait for a behaviour. Rule = branch based on a field or attribute. Know the exact difference — exam scenarios describe a desired workflow and ask which step type to use.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">4.</span><span><strong>Form vs form handler:</strong> If you can replace the form on the website, use a Pardot form (better tracking, progressive profiling). If the form is locked (third-party system, complex front-end), use a form handler. Exam scenarios will describe which situation applies.</span></li>
        </ul>
      </div>

      <div className="bg-salesforce-blue/5 rounded-xl border border-salesforce-blue/20 p-5 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Mock Exam Benchmark</h2>
        <p className="text-sm text-gray-700">Aim for <strong>75%+ on practice exams</strong> before scheduling. Pardot Specialist is very hands-on — many questions describe a specific Pardot configuration scenario and ask what happens next. Hands-on Pardot experience (ideally a Pardot sandbox or trial) is the most effective preparation beyond reading Trailhead.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Top 10 Concepts to Review</h2>
        <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
          <li>Scoring model: default point values for each activity type</li>
          <li>Grading: profile criteria, grade adjustment rules, A–F scale</li>
          <li>Visitor vs prospect: what triggers conversion to a prospect</li>
          <li>Automation rules vs segmentation rules vs completion actions vs dynamic lists</li>
          <li>Pardot forms vs form handlers: capabilities, limitations, when to use each</li>
          <li>Progressive profiling: how it works, field rotation logic</li>
          <li>Engagement Studio step types: Action, Trigger, Rule — and examples of each</li>
          <li>Salesforce connector: sync direction, sync frequency, field mapping, connected campaigns</li>
          <li>Email deliverability: SPF, DKIM, dedicated IP, CAN-SPAM/GDPR compliance</li>
          <li>Business Units: purpose, limitations on cross-BU data access</li>
        </ol>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <dl className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd className="text-sm text-gray-700">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 mb-8">
        <h2 className="text-base font-bold text-gray-900 mb-3">Compare Certifications</h2>
        <ul className="space-y-2">
          <li><Link href="/pardot-specialist-vs-pardot-consultant" className="text-sm text-salesforce-dark hover:underline font-medium">→ Pardot Specialist vs Pardot Consultant — which level to target?</Link></li>
          <li><Link href="/pardot-consultant-vs-marketing-cloud-consultant" className="text-sm text-salesforce-dark hover:underline font-medium">→ Pardot Consultant vs Marketing Cloud Consultant</Link></li>
        </ul>
      </div>


            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">What Comes After This Certification?</h2>
        <p className="text-sm text-gray-700">
          After this certification, consider: <Link href="/certifications/marketing-cloud-consultant" className="text-salesforce-blue font-medium hover:underline">Marketing Cloud Engagement Consultant</Link>, <Link href="/certifications/pardot-consultant" className="text-salesforce-blue font-medium hover:underline">Account Engagement (Pardot) Consultant</Link>, or <Link href="/certifications/email-specialist" className="text-salesforce-blue font-medium hover:underline">Marketing Cloud Email Specialist</Link>.
        </p>
      </section>

      <DifficultyHeatmap slug="pardot-specialist" />
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Ready to Practice?</h2>
        <p className="text-white mb-6">Free Pardot Specialist practice questions covering all 5 exam sections.</p>
        <Link
          href="/certifications/pardot-specialist"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Start Free Practice Questions
        </Link>
      </div>
    </div>
  )
}