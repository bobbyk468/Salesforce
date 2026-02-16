'use client'

import { memo, useState } from 'react'
import { CheckCircle, XCircle } from 'lucide-react'

interface QuestionCardProps {
  questionNumber: number
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
  /** Optional one-line summary always visible for SEO and skim readers (e.g. first sentence of explanation). */
  explanationSummary?: string
  /** Optional 1–2 lines per wrong option: "Why others are wrong" (teaches, not just tests). */
  whyWrong?: string[]
}

function QuestionCard({
  questionNumber,
  question,
  options,
  correctAnswer,
  explanation,
  explanationSummary,
  whyWrong,
}: QuestionCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)

  const handleSelectAnswer = (index: number) => {
    if (!showAnswer) {
      setSelectedAnswer(index)
    }
  }

  const handleCheckAnswer = () => {
    setShowAnswer(true)
  }

  const handleReset = () => {
    setSelectedAnswer(null)
    setShowAnswer(false)
  }

  return (
    <div className="bg-gradient-to-br from-white via-blue-50/20 to-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg overflow-hidden border border-blue-100/50 hover:shadow-xl hover:border-blue-200 transition-all duration-300 backdrop-blur-sm">
      <div className="bg-gradient-to-r from-salesforce-blue/10 to-salesforce-light/10 px-4 sm:px-6 py-3 sm:py-4 border-b border-salesforce-blue/20">
        <span className="text-salesforce-blue font-semibold text-sm sm:text-base">Question {questionNumber}</span>
      </div>
      
      <div className="p-4 sm:p-6 lg:p-8">
        <p className="text-gray-800 font-medium mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">{question}</p>
        {explanationSummary && (
          <p className="text-gray-600 text-xs sm:text-sm mb-4 leading-relaxed border-l-2 border-salesforce-blue/30 pl-3">
            <strong className="text-gray-700">Key takeaway:</strong> {explanationSummary}
          </p>
        )}
        <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
          {options.map((option, index) => {
            let bgColor = 'bg-gray-50 hover:bg-gray-100'
            let borderColor = 'border-gray-200'
            let icon = null

            if (showAnswer) {
              if (index === correctAnswer) {
                bgColor = 'bg-green-50 border-green-200'
                borderColor = 'border-green-500'
                icon = <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 flex-shrink-0" />
              } else if (index === selectedAnswer && index !== correctAnswer) {
                bgColor = 'bg-red-50 border-red-200'
                borderColor = 'border-red-500'
                icon = <XCircle className="h-5 w-5 sm:h-6 sm:w-6 text-red-500 flex-shrink-0" />
              }
            } else if (selectedAnswer === index) {
              bgColor = 'bg-salesforce-blue/10 border-salesforce-blue/50'
              borderColor = 'border-salesforce-blue'
            }

            return (
              <button
                key={index}
                onClick={() => handleSelectAnswer(index)}
                className={`w-full text-left p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 ${borderColor} ${bgColor} transition-all duration-200 flex items-center justify-between question-option group`}
                disabled={showAnswer}
              >
                <span className="flex items-center flex-1 min-w-0">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-current flex items-center justify-center mr-3 sm:mr-4 text-xs sm:text-sm font-bold flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-xs sm:text-sm md:text-base text-gray-700 group-hover:text-gray-900">{option}</span>
                </span>
                {icon}
              </button>
            )
          })}
        </div>

        {/* Actions */}
        <div className="flex gap-3 sm:gap-4">
          {!showAnswer ? (
            <button
              onClick={handleCheckAnswer}
              disabled={selectedAnswer === null}
              className="px-5 sm:px-6 py-2 sm:py-2.5 bg-salesforce-blue text-white rounded-lg font-medium hover:bg-salesforce-dark transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg active:scale-95 text-sm sm:text-base"
            >
              Check Answer
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="px-5 sm:px-6 py-2 sm:py-2.5 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 text-sm sm:text-base"
            >
              Try Again
            </button>
          )}
        </div>

        {/* Answer and explanation — visible after "Check Answer" */}
        {showAnswer && (
          <div className="mt-6 sm:mt-8 p-4 sm:p-5 lg:p-6 bg-gradient-to-br from-green-50/90 to-emerald-50/50 rounded-xl sm:rounded-2xl border-2 border-green-300/50 shadow-md animate-in fade-in duration-300">
            <p className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
              Correct answer: <span className="text-green-700">{String.fromCharCode(65 + correctAnswer)}. {options[correctAnswer]}</span>
            </p>
            {explanation ? (
              <>
                <p className="font-semibold text-gray-800 mt-4 mb-2 text-sm sm:text-base">Why this is correct:</p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{explanation}</p>
                {whyWrong && whyWrong.length > 0 && (
                  <>
                    <p className="font-semibold text-gray-800 mt-4 mb-2 text-sm sm:text-base">Why others are wrong:</p>
                    <ul className="text-gray-700 text-sm sm:text-base space-y-1 list-disc list-inside">
                      {whyWrong.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  </>
                )}
              </>
            ) : (
              <p className="text-gray-600 mt-2 text-xs sm:text-sm">Review the official exam outline for more detail on this topic.</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default memo(QuestionCard)
