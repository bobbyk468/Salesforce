'use client'

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
}

/**
 * Client-only section so practice questions are not in initial HTML (reduces PageSpeed HTML size).
 * Rendered after hydration; content remains in JS payload but not in first byte HTML.
 */
export default function PracticeQuestionsSection({ heading, introText, questions }: PracticeQuestionsSectionProps) {
  if (!questions?.length) return null
  return (
    <div id="practice-questions" className="mt-12 sm:mt-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">{heading}</h2>
      {introText && (
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mb-8">
          {introText}
        </p>
      )}
      <div className="space-y-6 sm:space-y-8">
        {questions.map((q, index) => (
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
    </div>
  )
}
