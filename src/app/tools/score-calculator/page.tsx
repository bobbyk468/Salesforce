import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import ScoreCalculator from '@/components/ScoreCalculator'
import EmbedCalculatorSnippet from '@/components/EmbedCalculatorSnippet'
import LastUpdated from '@/components/LastUpdated'
import { getCalculatorExams } from '@/lib/score-calculator-data'
import { getBreadcrumbListJsonLd, getFaqPageJsonLd, getWebPageJsonLd } from '@/lib/schema-data'

const siteUrl = 'https://www.trailblazeprep.com'
const path = '/tools/score-calculator'

export const metadata: Metadata = {
  title: { absolute: 'Salesforce Exam Score Calculator (2026) by Section' },
  description:
    'Work out your overall Salesforce exam score from the section percentages in your result email, compare it to the pass mark, and see your weakest section.',
  alternates: {
    canonical: `${siteUrl}${path}`,
    languages: { 'en-US': `${siteUrl}${path}`, 'x-default': `${siteUrl}${path}` },
  },
}

const faqs = [
  {
    question: 'Why does Salesforce not show my overall exam score?',
    answer:
      'Salesforce reports a percentage for each section of the exam but not a single overall figure, on either the result screen or the confirmation email. The overall result is given only as pass or fail. This calculator reconstructs the overall percentage by weighting each section by its published share of the exam.',
  },
  {
    question: 'How is the weighted score calculated?',
    answer:
      'Each section percentage is multiplied by that section’s share of the exam, and the results are added together. A section worth 20% of the exam contributes four times as much as one worth 5%. If you fill in only some sections, the calculator normalises by the weight you supplied and tells you how much of the exam that covers.',
  },
  {
    question: 'Is the calculated score exact?',
    answer:
      'It is close, not exact. Salesforce does not publish how it rounds section percentages, nor how unscored trial questions are handled, so small differences are expected. Use it to see roughly how far above or below the pass mark you landed and which section cost you the most.',
  },
  {
    question: 'Which certifications are supported?',
    answer:
      'Every certification for which we hold both the official section weightage and a published pass mark. Exams are left out rather than estimated, because a confidently wrong number is worse than none when you are deciding whether to rebook.',
  },
]

export default function ScoreCalculatorPage() {
  const exams = getCalculatorExams()
  const breadcrumb = [
    { name: 'Home', url: '/' },
    { name: 'Tools', url: '/tools/score-calculator' },
    { name: 'Exam Score Calculator', url: path },
  ]

  return (
    <div className="px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebPageJsonLd({ name: 'Salesforce Exam Score Calculator', description: metadata.description as string, path, breadcrumbItems: breadcrumb })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbListJsonLd(breadcrumb)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqPageJsonLd(faqs)) }} />

      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Salesforce Exam Score Calculator
        </h1>
        <LastUpdated />
        <p className="mt-2 text-lg text-gray-700">
          Salesforce emails you a percentage for each section of the exam, but never
          your overall score. Enter your section percentages below to see what that
          adds up to, how far you were from the pass mark, and which section cost you
          the most.
        </p>
        <p className="mt-3 text-sm text-gray-600">
          Covers {exams.length} certifications &mdash; every exam for which both the
          official section weightage and a published pass mark are available.
        </p>
      </div>

      <div className="mt-10">
        <ScoreCalculator exams={exams} />
      </div>

      <EmbedCalculatorSnippet />

      <section className="mx-auto mt-16 max-w-3xl" aria-labelledby="calc-faq">
        <h2 id="calc-faq" className="text-2xl font-bold text-gray-900">
          Salesforce exam score questions
        </h2>
        <dl className="mt-6 space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <dt className="font-semibold text-gray-900">{faq.question}</dt>
              <dd className="mt-1 text-gray-700">{faq.answer}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-gray-700">
          Preparing for a retake? Start with{' '}
          <Link href="/certifications" className="font-semibold text-salesforce-blue hover:underline">
            free practice questions for every Salesforce certification
          </Link>
          , or read{' '}
          <Link href="/salesforce-exam-retake-policy" className="font-semibold text-salesforce-blue hover:underline">
            the Salesforce exam retake policy
          </Link>
          .
        </p>
      </section>
    </div>
  )
}
