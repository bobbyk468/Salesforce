export interface FaqItem {
  question: string
  answer: string
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <details key={index} className="group bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <summary
            className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50/80 transition-colors cursor-pointer list-none"
            aria-controls={`faq-answer-${index}`}
            id={`faq-question-${index}`}
          >
            <span>{item.question}</span>
            <span
              className="h-5 w-5 flex-shrink-0 text-gray-600 transition-transform group-open:rotate-180"
              aria-hidden="true"
            >
              ▾
            </span>
          </summary>
          <div id={`faq-answer-${index}`} aria-labelledby={`faq-question-${index}`} className="border-t border-gray-100">
            <div className="px-6 py-4 text-gray-700 leading-relaxed">{item.answer}</div>
          </div>
        </details>
      ))}
    </div>
  )
}
