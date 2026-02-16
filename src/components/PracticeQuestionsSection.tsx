'use client'

import { useMemo, useState } from 'react'
import QuestionCard from '@/components/QuestionCard'

export interface SampleQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
  whyWrong?: string[]
}

interface PracticeQuestionsSectionProps {
  heading: string
  introText?: string
  questions: SampleQuestion[]
  extraQuestionsKey?: 'administrator'
}

/**
 * Client-only section so practice questions are not in initial HTML (reduces PageSpeed HTML size).
 * Rendered after hydration; content remains in JS payload but not in first byte HTML.
 */
export default function PracticeQuestionsSection({
  heading,
  introText,
  questions,
  extraQuestionsKey,
}: PracticeQuestionsSectionProps) {
  if (!questions?.length) return null
  const initialCount = 5
  const [showAll, setShowAll] = useState(false)
  const [isLoadingExtras, setIsLoadingExtras] = useState(false)
  const [extraQuestions, setExtraQuestions] = useState<SampleQuestion[]>([])
  const hasDeferredExtras = Boolean(extraQuestionsKey)
  const allQuestions = useMemo(() => [...questions, ...extraQuestions], [questions, extraQuestions])
  const visibleQuestions = useMemo(
    () => (showAll ? allQuestions : allQuestions.slice(0, initialCount)),
    [allQuestions, showAll]
  )
  const hiddenCount = Math.max(allQuestions.length - initialCount, 0)

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
    <div id="practice-questions" className="mt-12 sm:mt-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">{heading}</h2>
      {introText && (
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mb-8">
          {introText}
        </p>
      )}
      <div className="space-y-6 sm:space-y-8">
        {visibleQuestions.map((q, index) => (
          <QuestionCard
            key={index}
            questionNumber={index + 1}
            question={q.question}
            options={q.options}
            correctAnswer={q.correctAnswer}
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
            {isLoadingExtras ? 'Loading more questions...' : `Show ${hiddenCount} more questions`}
          </button>
        </div>
      )}
    </div>
  )
}
