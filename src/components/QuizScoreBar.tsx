'use client'

import { useEffect, useState } from 'react'
import {
  QUIZ_ANSWER_EVENT,
  QUIZ_RESET_EVENT,
  type QuizAnswerEventDetail,
} from '@/lib/quiz-score-events'

/**
 * Running score for the practice set: "Answered: X / N - Correct: Y".
 *
 * Each QuestionCard owns its own selection state, so the score is collected
 * from the events they dispatch rather than by lifting that state up: the
 * cards stay independently interactive and the section around them stays a
 * server component. The initial "Answered: 0 / N" is in the SSR HTML, so the
 * bar does not appear only after hydration.
 */
export default function QuizScoreBar({ total }: { total: number }) {
  const [answers, setAnswers] = useState<Record<number, boolean>>({})

  useEffect(() => {
    const onAnswer = (event: Event) => {
      const detail = (event as CustomEvent<QuizAnswerEventDetail>).detail
      if (!detail) return
      setAnswers((current) => ({ ...current, [detail.questionNumber]: detail.correct }))
    }
    const onReset = (event: Event) => {
      const detail = (event as CustomEvent<QuizAnswerEventDetail>).detail
      if (!detail) return
      setAnswers((current) => {
        if (!(detail.questionNumber in current)) return current
        const next = { ...current }
        delete next[detail.questionNumber]
        return next
      })
    }
    window.addEventListener(QUIZ_ANSWER_EVENT, onAnswer)
    window.addEventListener(QUIZ_RESET_EVENT, onReset)
    return () => {
      window.removeEventListener(QUIZ_ANSWER_EVENT, onAnswer)
      window.removeEventListener(QUIZ_RESET_EVENT, onReset)
    }
  }, [])

  const answered = Object.keys(answers).length
  const correct = Object.values(answers).filter(Boolean).length
  const percent = total > 0 ? Math.round((answered / total) * 100) : 0

  return (
    <div className="mb-6 rounded-xl border border-gray-100 bg-white p-4">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p className="text-sm font-semibold text-gray-900" aria-live="polite">
          Answered: {answered} / {total}
          <span aria-hidden="true" className="mx-2 text-gray-300">
            &bull;
          </span>
          Correct: {correct}
        </p>
        {answered > 0 && (
          <p className="text-xs text-gray-600">
            {Math.round((correct / answered) * 100)}% correct so far. This practice set does not
            predict an exam result.
          </p>
        )}
      </div>
      <div
        className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-100"
        role="progressbar"
        aria-valuenow={answered}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-label={`${answered} of ${total} practice questions answered`}
      >
        <div
          className="h-full rounded-full bg-salesforce-blue transition-[width] duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
