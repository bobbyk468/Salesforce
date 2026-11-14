import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import LastUpdated from '@/components/LastUpdated'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `How to Study for a Salesforce Certification (${RELEASE_CURRENT})`
const pageDescription = 'Build a Salesforce exam study plan using effective methods, Trailhead, hands-on practice, and mock exam review.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/how-to-study-for-salesforce-certification`,
    languages: { 'en-US': `${siteUrl}/how-to-study-for-salesforce-certification`, 'x-default': `${siteUrl}/how-to-study-for-salesforce-certification` },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/how-to-study-for-salesforce-certification`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Salesforce Careers', url: '/certifications' },
  { name: 'How to Study for Salesforce Certification', url: '/how-to-study-for-salesforce-certification' },
]

const faqItems = [
  {
    question: 'How long does it take to study for the Salesforce Administrator exam?',
    answer: 'Most candidates prepare for the Administrator exam over 2–4 months, studying 8–15 hours a week. Your timeline depends on your experience: people who use Salesforce every day may need 4–6 weeks, while beginners may need 3–4 months. The exam covers many platform topics, so include hands-on practice in your plan.',
  },
  {
    question: 'Is Trailhead enough to pass a Salesforce certification exam?',
    answer: 'Trailhead is useful for learning concepts, but it may not give you enough practice applying them to exam scenarios. Combine Trailhead (30–40% of study time), hands-on sandbox practice (30–40%), and practice questions (20–30%). Candidates who only read Trailhead material may know the features but struggle with scenario questions.',
  },
  {
    question: 'What is the most effective study method for Salesforce certifications?',
    answer: 'Combine three methods: read Trailhead material and the official exam guide, practice tasks in a sandbox, and answer scenario-based questions. Hands-on work helps you apply what you read. A regular 60–90 minute study session each day is more useful than cramming.',
  },
  {
    question: 'How should I use practice questions effectively?',
    answer: 'Use practice questions in two ways. First, work untimed and read the explanation for every answer. Then take full-length timed mock exams. For each wrong answer, learn why the right option is correct and why the other options are not. Aim for at least 75% on several full mock exams before booking.',
  },
  {
    question: 'Should I buy a paid study course for Salesforce certification?',
    answer: 'Paid courses from providers such as Focus on Force, Udemy, and Salesforce Trailhead Academy can provide structure, but they are not required. Many candidates study with free Trailhead content, a free Developer Edition or Trailhead Playground, and practice questions. A paid course may help if you prefer a guided plan. Choose one with scenario-based practice similar to the exam.',
  },
]

export default function HowToStudyForSalesforceCertificationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/how-to-study-for-salesforce-certification" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">

      <ContentPageAuthor />
          <span>Study Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          How to Study for a Salesforce Certification ({RELEASE_CURRENT})
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Build a study plan for your Salesforce exam. Learn how to combine Trailhead, hands-on practice, and mock exams, and how to avoid common study mistakes.
        </p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">The Three-Pillar Study Method</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { pillar: '1. Read and review concepts', pct: '30–40%', desc: 'Use Trailhead trails, the official exam guide, and release notes to learn how the features work.', icon: '📖' },
            { pillar: '2. Practice hands-on', pct: '30–40%', desc: 'Configure features in a Developer Edition org or Trailhead Playground instead of only reading about them.', icon: '🖥️' },
            { pillar: '3. Answer practice questions', pct: '20–30%', desc: 'Try scenario-based questions under exam conditions. Read explanations for correct and incorrect answers.', icon: '✍️' },
          ].map((item) => (
            <div key={item.pillar} className="bg-gray-50 rounded-xl p-4">
              <div className="text-2xl mb-2">{item.icon}</div>
              <p className="font-semibold text-gray-900 text-sm mb-1">{item.pillar}</p>
              <p className="text-xs font-bold text-salesforce-dark mb-2">{item.pct} of study time</p>
              <p className="text-xs text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Step-by-Step Study Process</h2>
        <div className="space-y-4">
          {[
            { step: '1', title: 'Get the official exam guide', desc: 'Salesforce provides a free exam guide for each certification. It lists topic areas, their weighting, and recommended experience. Use it to plan what to study.' },
            { step: '2', title: 'Match Trailhead content to exam topics', desc: 'Find a Trailhead trail or module for each exam section. Many certifications have a "Prepare for Certification" section. Start with the topics that carry the most weight.' },
            { step: '3', title: 'Practice each feature in a sandbox', desc: 'Try the tasks you read about in a free Trailhead Playground or Developer Edition org. For example, if the exam covers validation rules, create some yourself.' },
            { step: '4', title: 'Use practice questions while you study', desc: 'After reviewing a section, answer untimed questions about it and read every explanation. Review both the answers you got right and those you missed.' },
            { step: '5', title: 'Take full timed mock exams', desc: 'In the final 1–2 weeks, take full mock exams with the same number of questions and time limit as the real test. Aim for 75% or higher on several mock exams before booking.' },
            { step: '6', title: 'Choose an exam date', desc: 'Set a date that gives you time to prepare. A scheduled exam can help you stay on track, but leave enough time for review.' },
          ].map((item) => (
            <div key={item.step} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-salesforce-blue text-white flex items-center justify-center font-bold text-sm">{item.step}</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <h2 className="text-base font-bold text-amber-900 mb-3">The 5 Most Common Study Mistakes</h2>
        <ul className="space-y-2 text-sm text-amber-800">
          <li>⚠ <strong>Using only Trailhead:</strong> Reading helps you learn features, but practice questions also help you apply what you know.</li>
          <li>⚠ <strong>Skipping sandbox practice:</strong> Try the features yourself instead of only reading about them.</li>
          <li>⚠ <strong>Cramming the day before:</strong> Spread your study across several weeks so you can practice applying the material.</li>
          <li>⚠ <strong>Booking before you are ready:</strong> If you score below 65% on practice tests, spend more time studying. Aim for 75% or higher consistently before booking.</li>
          <li>⚠ <strong>Ignoring low-weight topics:</strong> A 10% exam section may still contribute 5–6 questions. Review every section.</li>
        </ul>
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

      <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
        <h2 className="text-lg font-bold text-gray-900 mb-3">Related guides</h2>
        <ul className="flex flex-wrap gap-2 text-sm">
          <li><Link href="/which-salesforce-certification-first" className="text-salesforce-dark hover:underline font-medium">Which cert first?</Link></li>
          <li><Link href="/how-to-register-salesforce-exam" className="text-salesforce-dark hover:underline font-medium">How to register</Link></li>
          <li><Link href="/salesforce-certification-maintenance" className="text-salesforce-dark hover:underline font-medium">Cert maintenance</Link></li>
          <li><Link href="/salesforce-certification-exam-day-tips" className="text-salesforce-dark hover:underline font-medium">Exam day tips</Link></li>
          <li><Link href="/salesforce-certification-voucher" className="text-salesforce-dark hover:underline font-medium">Vouchers & discounts</Link></li>
        </ul>
      </div>
      <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 mb-8">
        <h2 className="text-base font-bold text-gray-900 mb-3">Compare Certifications</h2>
        <ul className="space-y-2">
          <li><Link href="/salesforce-certification-passing-score" className="text-sm text-salesforce-dark hover:underline font-medium">→ Salesforce certification passing scores by tier</Link></li>
          <li><Link href="/salesforce-exam-retake-policy" className="text-sm text-salesforce-dark hover:underline font-medium">→ Salesforce exam retake policy: what happens if you fail?</Link></li>
        </ul>
      </div>


      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Free Practice Questions</h2>
        <p className="text-white mb-6">Put your study plan to work with free scenario-based questions for every Salesforce certification.</p>
        <Link href="/certifications" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Browse All Certifications
        </Link>
      </div>
    </div>
  )
}
