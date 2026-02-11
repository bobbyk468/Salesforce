'use client'

import { Printer } from 'lucide-react'

export default function PrintChecklistButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-salesforce-blue transition-colors"
      aria-label="Print or save ADM-201 syllabus checklist"
    >
      <Printer className="h-4 w-4" aria-hidden />
      Print or save checklist
    </button>
  )
}
