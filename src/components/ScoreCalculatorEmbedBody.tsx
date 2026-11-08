'use client'

import { useState } from 'react'
import ScoreCalculator from '@/components/ScoreCalculator'
import type { CalculatorExam } from '@/lib/score-calculator-data'

const SITE = 'https://www.trailblazeprep.com'

/**
 * The calculator as it appears inside someone else&apos;s page.
 *
 * The attribution bar is the whole point of offering the embed: it carries a
 * followed link back to the calculator and to the certification the reader
 * has selected, so the embed credits its source wherever it travels. Links
 * are absolute and open in a new tab, because a relative href inside an
 * iframe resolves against the host site.
 */
export default function ScoreCalculatorEmbedBody({ exams }: { exams: CalculatorExam[] }) {
  const [exam, setExam] = useState<CalculatorExam | undefined>(exams[0])

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
        <ScoreCalculator exams={exams} linkBase={SITE} onExamChange={setExam} />
      </div>

      <div className="mx-auto mt-6 max-w-3xl border-t border-gray-200 pt-4">
        <p className="text-xs text-gray-600">
          <a
            href={`${SITE}/tools/score-calculator`}
            target="_blank"
            rel="noopener"
            className="font-semibold text-salesforce-blue hover:underline"
          >
            Salesforce Exam Score Calculator
          </a>{' '}
          by{' '}
          <a
            href={SITE}
            target="_blank"
            rel="noopener"
            className="font-semibold text-salesforce-blue hover:underline"
          >
            Trailblaze Prep
          </a>
          {exam && (
            <>
              {' '}&middot;{' '}
              <a
                href={`${SITE}/certifications/${exam.slug}`}
                target="_blank"
                rel="noopener"
                className="hover:underline"
              >
                {exam.name} exam details and free practice questions
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  )
}
