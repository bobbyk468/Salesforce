'use client'

import { useState } from 'react'
import ScoreCalculator from '@/components/ScoreCalculator'
import type { CalculatorExam } from '@/lib/score-calculator-data'

const SITE = 'https://www.trailblazeprep.com'

/**
 * The calculator as it appears inside someone else's page.
 *
 * The attribution footer is the whole point of offering the embed: it carries
 * followed links back to the home page and to the certification the reader has
 * selected, so the widget credits its source wherever it travels. Links are
 * absolute and open in a new tab, because a relative href inside an iframe
 * resolves against the host site.
 *
 * Worth being honest about in code as well as in the docs: links inside an
 * iframe are not attributed to the host page by search engines. This footer
 * earns referral traffic and goodwill. The backlink comes from the credit
 * paragraph *outside* the iframe, which is why it is part of the copyable
 * snippet on /tools/score-calculator.
 */
export default function ScoreCalculatorEmbedBody({
  exams,
  initialSlug,
}: {
  exams: CalculatorExam[]
  initialSlug?: string
}) {
  const [exam, setExam] = useState<CalculatorExam | undefined>(
    () => exams.find((e) => e.slug === initialSlug) ?? exams[0],
  )

  return (
    <div className="bg-white px-4 py-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-xl font-bold text-gray-900">
          Salesforce Exam Score Calculator
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          Salesforce emails a percentage per section but never your overall score.
          Enter your sections to see what they add up to against the pass mark.
        </p>
      </div>

      <div className="mt-6">
        <ScoreCalculator
          exams={exams}
          linkBase={SITE}
          initialSlug={initialSlug}
          onExamChange={setExam}
        />
      </div>

      <div className="mx-auto mt-6 max-w-3xl border-t border-gray-200 pt-4">
        <p className="text-xs leading-relaxed text-gray-600">
          Powered by{' '}
          <a
            href={`${SITE}/`}
            target="_blank"
            rel="noopener"
            className="font-semibold text-salesforce-blue hover:underline"
          >
            Trailblaze Prep
          </a>{' '}
          &mdash; Free Salesforce Practice Questions &amp; Study Guides
          {exam && (
            <>
              {' '}&middot;{' '}
              <a
                href={`${SITE}/certifications/${exam.slug}#practice-questions`}
                target="_blank"
                rel="noopener"
                className="text-salesforce-blue hover:underline"
              >
                {exam.name} Practice Questions
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  )
}
