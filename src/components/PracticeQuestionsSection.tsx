'use client'

import { useMemo, useState } from 'react'
import QuestionCard from '@/components/QuestionCard'
import { DEFERRED_PRACTICE_QUESTION_COUNTS } from '@/lib/practice-question-lite'
import type { ImportedQuestionSource } from '@/lib/cert-page-spike/types'

export interface SampleQuestion {
  question: string
  options: string[]
  correctAnswer?: number
  correctAnswers?: number[]
  source?: ImportedQuestionSource
  explanation?: string
  whyWrong?: string[]
}

interface PracticeQuestionsSectionProps {
  heading: string
  introText?: string
  questions: SampleQuestion[]
  extraQuestionsKey?: 'administrator'
}

/** Server-render the initial sample, then progressively reveal or load the rest. */
export default function PracticeQuestionsSection({
  heading,
  introText,
  questions,
  extraQuestionsKey,
}: PracticeQuestionsSectionProps) {
  const [showAll, setShowAll] = useState(false)
  const [isLoadingExtras, setIsLoadingExtras] = useState(false)
  const [extraQuestions, setExtraQuestions] = useState<SampleQuestion[]>([])
  const hasDeferredExtras = Boolean(extraQuestionsKey)
  // The base `questions` set is always server-rendered in full: it's already
  // shipped in the page payload, so slicing it only hid content from
  // Googlebot (which doesn't click "show more" buttons) for no bundle-size
  // benefit. Only the separate, dynamically-imported extra question bank
  // (e.g. administrator's extra 9) stays gated behind a click, since that
  // one is a genuine lazy-loaded import.
  const visibleQuestions = useMemo(
    () => (showAll ? [...questions, ...extraQuestions] : questions),
    [questions, extraQuestions, showAll]
  )
  const hiddenCount = hasDeferredExtras && !showAll ? DEFERRED_PRACTICE_QUESTION_COUNTS[extraQuestionsKey!] : 0
  if (!questions?.length) return null

  async function handleShowMore() {
    if (showAll || isLoadingExtras) return

    if (hasDeferredExtras && extraQuestions.length === 0) {
      try {
        setIsLoadingExtras(true)
        if (extraQuestionsKey === 'administrator') {
          const mod = await import('@/lib/question-banks/administrator-extra-questions')
          setExtraQuestions(mod.ADMINISTRATOR_EXTRA_QUESTIONS)
        }
      } finally {
        setIsLoadingExtras(false)
      }
    }
    setShowAll(true)
  }

  return (
    <div id="practice-questions" className="mt-12 sm:mt-12 min-h-[440px] w-full">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">{heading}</h2>
      {introText && (
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mb-8">
          {introText}
        </p>
      )}
      {questions.some((question) => question.source) && (
        <p className="mb-6 rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm text-gray-700">
          Imported from the SF-Questions repository. Answer keys are source-provided and have not
          been independently verified. Use current official documentation to check your understanding;
          this sample does not predict an exam result.
        </p>
      )}
      <div className="space-y-6 sm:space-y-8">
        {visibleQuestions.map((q, index) => (
          <QuestionCard
            key={q.source ? `${q.source.commit}:${q.source.path}:${q.source.questionId}:${index}` : `${q.question}:${index}`}
            questionNumber={index + 1}
            question={q.question}
            options={q.options}
            correctAnswer={q.correctAnswer}
            correctAnswers={q.correctAnswers}
            source={q.source}
            explanation={q.explanation}
            explanationSummary={q.explanation ? (q.explanation.split(/[.!?]/)[0]?.trim() ? q.explanation.split(/[.!?]/)[0].trim() + '.' : q.explanation) : undefined}
            whyWrong={q.whyWrong}
          />
        ))}
      </div>
      {!showAll && hiddenCount > 0 && (
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={handleShowMore}
            disabled={isLoadingExtras}
            className="inline-flex items-center justify-center rounded-lg bg-salesforce-blue px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-salesforce-dark"
          >
            {isLoadingExtras
              ? 'Loading more questions...'
              : hasDeferredExtras
                ? 'Load all practice questions'
                : `Show ${hiddenCount} more questions`}
          </button>
        </div>
      )}
    </div>
  )
}
