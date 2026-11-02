interface HeroSampleQuestion {
  examLabel: string
  question: string
  options: string[]
  correctAnswer: number
}

interface HeroSampleQuestionCardProps {
  questions: HeroSampleQuestion[]
}

export default function HeroSampleQuestionCard({ questions }: HeroSampleQuestionCardProps) {
  const q = questions[0]
  if (!q) return null

  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-7 relative overflow-hidden shadow-2xl shadow-gray-200/40">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white to-blue-50/40 pointer-events-none" aria-hidden="true" />
      <div className="relative">
        <div className="flex justify-between items-center mb-5">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Sample question &middot; {q.examLabel}</span>
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">Free</span>
        </div>
        <div className="bg-white border border-gray-100 rounded-xl p-5">
          <div className="flex justify-between text-xs text-gray-500 mb-2.5">
            <span className="font-mono font-semibold text-salesforce-blue">Source-provided sample</span>
            <span>Single-select</span>
          </div>
          <p className="text-sm font-semibold text-gray-900 leading-snug mb-4 whitespace-pre-wrap break-words">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((option, index) => {
              const correct = index === q.correctAnswer
              return (
                <div
                  key={`${index}-${option}`}
                  className={correct
                    ? 'flex gap-2.5 items-start p-3 border border-emerald-200 rounded-xl text-sm text-emerald-900 bg-emerald-50'
                    : 'flex gap-2.5 items-start p-3 border border-gray-100 rounded-xl text-sm text-gray-700'}
                >
                  <span
                    className={correct
                      ? 'w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-xs font-bold flex-shrink-0 text-white'
                      : 'w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold flex-shrink-0 text-gray-600'}
                    aria-hidden="true"
                  >
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="whitespace-pre-wrap break-words">{option}</span>
                </div>
              )
            })}
          </div>
          <p className="mt-4 text-xs text-gray-500">Answer shown as provided with the source question; not independently verified.</p>
        </div>
      </div>
    </div>
  )
}
