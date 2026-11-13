import QuestionCard from '@/components/QuestionCard'
import type { ImportedQuestionSource } from '@/lib/cert-page-spike/types'

export interface SampleQuestion {
  question: string
  examDomain?: string
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
}

/** Server-render the initial sample, then progressively reveal or load the rest. */
export default function PracticeQuestionsSection({
  heading,
  introText,
  questions,
}: PracticeQuestionsSectionProps) {
  if (!questions?.length) return null
  const visibleQuestions = questions

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
        {(() => {
          const domainOrder = [
            'Configuration and Setup',
            'Object Manager and Lightning App Builder',
            'Sales and Marketing Applications',
            'Service and Support Applications',
            'Productivity and Collaboration',
            'Data and Analytics Management',
            'Automation',
            'Agentforce',
          ]
          const additionalDomains = [...new Set(
            visibleQuestions
              .map((question) => question.examDomain)
              .filter((domain): domain is string => Boolean(domain) && !domainOrder.includes(domain!)),
          )]
          const groupedQuestions = visibleQuestions.some((question) => question.examDomain)
            ? [...domainOrder, ...additionalDomains]
                .filter((domain) => visibleQuestions.some((question) => question.examDomain === domain))
                .map((domain) => ({ domain, questions: visibleQuestions.filter((question) => question.examDomain === domain) }))
                .concat(visibleQuestions.some((question) => !question.examDomain)
                  ? [{ domain: 'Additional Questions', questions: visibleQuestions.filter((question) => !question.examDomain) }]
                  : [])
            : [{ domain: '', questions: visibleQuestions }]

          let questionNumber = 0
          return groupedQuestions.map(({ domain, questions: domainQuestions }) => (
            <section key={domain || 'questions'} aria-label={domain || undefined}>
              {domain && <h3 className="mb-4 text-lg font-bold text-gray-900">{domain}</h3>}
              <div className="space-y-6 sm:space-y-8">
                {domainQuestions.map((q) => {
                  const index = questionNumber++
                  return (
          <QuestionCard
            key={q.source ? `${q.source.commit}:${q.source.path}:${q.source.questionId}:${index}` : `${q.question}:${index}`}
            questionNumber={index + 1}
            question={q.question}
            options={q.options}
            correctAnswer={q.correctAnswer}
            correctAnswers={q.correctAnswers}
            source={q.source}
            explanation={q.explanation}
            whyWrong={q.whyWrong}
          />
                  )
                })}
              </div>
            </section>
          ))
        })()}
      </div>
    </div>
  )
}
