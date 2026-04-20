import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `How to Study for a Salesforce Certification (${RELEASE_CURRENT})`
const pageDescription = `How to study for Salesforce certification exams in 2026: effective study methods, Trailhead strategy, hands-on practice, and mock exam approach.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/how-to-study-for-salesforce-certification` },
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
  { name: 'How to Study for Salesforce Certification', url: '/how-to-study-for-salesforce-certification' },
]

const faqItems = [
  {
    question: 'How long does it take to study for the Salesforce Administrator exam?',
    answer: 'Most candidates study for 2–4 months for the Administrator exam, investing 8–15 hours per week. This varies significantly by starting experience: professionals who use Salesforce daily may need 4–6 weeks; complete beginners typically need 3–4 months. The exam covers a broad range of platform topics — rushing through material without hands-on practice is the most common cause of first-attempt failures.',
  },
  {
    question: 'Is Trailhead enough to pass a Salesforce certification exam?',
    answer: 'Trailhead alone is generally not enough. Trailhead is excellent for conceptual understanding but lacks the exam-focused scenario training needed for the multiple-choice exam format. The most successful candidates combine Trailhead (30–40% of study time), hands-on sandbox practice (30–40%), and practice exam questions (20–30%). Candidates who only use Trailhead often know the concepts but struggle with applying them in scenario-based exam questions.',
  },
  {
    question: 'What is the most effective study method for Salesforce certifications?',
    answer: 'The most effective study method combines three elements: (1) structured reading — Trailhead trails and the official Exam Guide for your target cert; (2) hands-on practice — actively doing tasks in a sandbox, not just reading about them; and (3) scenario-based practice questions — simulated exam questions that test applied knowledge, not just feature recall. Candidates who skip hands-on practice typically struggle with scenario questions. Building a habit of 60–90 minutes of focused daily study outperforms cramming sessions.',
  },
  {
    question: 'How should I use practice questions effectively?',
    answer: 'Practice questions are most effective when used in two phases: first, in study mode (untimed, reviewing explanations for every answer — correct and incorrect); then, in exam simulation mode (timed, full mock exam). Treat incorrect answers as learning opportunities, not failures. For every wrong answer, understand why the correct answer is right and why each distractor is wrong. Target 75%+ on multiple full mock exams before booking the real exam.',
  },
  {
    question: 'Should I buy a paid study course for Salesforce certification?',
    answer: 'Paid courses (Focus on Force, Udemy, Salesforce Trailhead Academy) can accelerate learning through structured content, but they are not required to pass. Many candidates pass certifications using only Trailhead (free) + hands-on practice (free via Developer Edition or Trailhead playground) + practice questions. A paid course is most valuable for candidates who prefer structured learning or who struggle with self-directed study. The quality of practice varies — prioritise scenario-based practice that mirrors real exam format.',
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
        <p className="text-lg text-gray-600">
          A practical, proven study approach for Salesforce certification exams — what methods work, how to structure your study time, and the mistakes that cause most first-attempt failures.
        </p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">The Three-Pillar Study Method</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { pillar: '1. Conceptual Reading', pct: '30–40%', desc: 'Trailhead trails, official Exam Guide, Release Notes. Build foundational understanding of how features work.', icon: '📖' },
            { pillar: '2. Hands-On Practice', pct: '30–40%', desc: 'Actively configure features in a Developer Edition or Trailhead Playground. Do not just read — build.', icon: '🖥️' },
            { pillar: '3. Practice Questions', pct: '20–30%', desc: 'Scenario-based questions that simulate exam conditions. Review every explanation, right and wrong answers.', icon: '✍️' },
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
            { step: '1', title: 'Download the official Exam Guide', desc: 'Every Salesforce certification has a free official Exam Guide (available on Salesforce Trailhead). It lists every topic section, weighting, and recommended experience level. Start here — this is your study syllabus.' },
            { step: '2', title: 'Map Trailhead content to exam sections', desc: 'For each exam section, find the corresponding Trailhead trail or module. Trailhead has a "Prepare for Certification" section for most exams. Work through modules in order of exam weighting — heaviest sections first.' },
            { step: '3', title: 'Build in a sandbox as you study', desc: 'For every concept you read about, go and do it in a sandbox. Set up a Trailhead Playground (free). If the exam covers "creating validation rules" — create validation rules. Hands-on memory is stronger than reading memory.' },
            { step: '4', title: 'Take practice questions in study mode', desc: 'After covering each exam section, do practice questions on that section — untimed, with full explanations. Read every explanation, not just the ones you got wrong. Build conceptual clarity.' },
            { step: '5', title: 'Run full timed mock exams', desc: 'In the final 1–2 weeks, take full timed mock exams under real exam conditions: same number of questions, same time limit, no interruptions. Target 75%+ on multiple full mocks before booking.' },
            { step: '6', title: 'Book the exam with a firm date', desc: 'Book your exam before you feel 100% ready — having a booked date creates urgency that prevents indefinite delay. Most candidates who "wait until they feel ready" wait too long.' },
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
          <li>⚠ <strong>Only using Trailhead:</strong> Trailhead builds knowledge but not exam-taking skill. Practice questions are essential.</li>
          <li>⚠ <strong>Skipping the sandbox:</strong> Reading about features without doing them produces fragile knowledge that fails under exam pressure.</li>
          <li>⚠ <strong>Cramming the day before:</strong> Salesforce exams test applied understanding, not recall. Spaced study over weeks beats cramming.</li>
          <li>⚠ <strong>Booking too early:</strong> If you are scoring below 65% on practice tests, you are not ready. Book after consistently hitting 75%+.</li>
          <li>⚠ <strong>Ignoring low-weight sections:</strong> Even a 10% section contributes 5–6 questions. Ignoring them costs you points.</li>
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
          <li><Link href="/salesforce-exam-retake-policy" className="text-sm text-salesforce-dark hover:underline font-medium">→ Salesforce exam retake policy — what happens if you fail?</Link></li>
        </ul>
      </div>


      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Free Practice Questions</h2>
        <p className="text-white mb-6">Put the study method into practice — free scenario-based questions for every Salesforce certification.</p>
        <Link href="/certifications" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Browse All Certifications
        </Link>
      </div>
    </div>
  )
}
