'use client'

import { Printer } from 'lucide-react'

interface PrintChecklistButtonProps {
  /** Accessible label for the button */
  'aria-label'?: string
  /** Optional className for styling */
  className?: string
}

export default function PrintChecklistButton({
  'aria-label': ariaLabel = 'Print or save checklist',
  className = '',
}: PrintChecklistButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-salesforce-blue transition-colors no-print ${className}`.trim()}
      aria-label={ariaLabel}
    >
      <Printer className="h-4 w-4" aria-hidden />
      Print or save checklist
    </button>
  )
}
