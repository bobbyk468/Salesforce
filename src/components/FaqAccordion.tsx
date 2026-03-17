'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export interface FaqItem {
  question: string
  answer: string
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <dl className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
        >
          <dt>
            <button
              type="button"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50/80 transition-colors"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 flex-shrink-0 text-gray-600 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
          </dt>
          <dd
            id={`faq-answer-${index}`}
            aria-labelledby={`faq-question-${index}`}
            className={`border-t border-gray-100 transition-all ${
              openIndex === index ? 'block' : 'hidden'
            }`}
          >
            <div className="px-6 py-4 text-gray-700 leading-relaxed">
              {item.answer}
            </div>
          </dd>
        </div>
      ))}
    </dl>
  )
}
