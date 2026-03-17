import { PieChart } from 'lucide-react'
import type { ExamSection } from '@/lib/exam-weightage-data'

interface ExamWeightageSectionProps {
  sections: ExamSection[]
  title?: string
}

export default function ExamWeightageSection({ sections, title = 'Exam Weightage by Section' }: ExamWeightageSectionProps) {
  const total = sections.reduce((sum, s) => sum + s.percentage, 0)
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-salesforce-dark to-salesforce-blue p-4 text-white flex items-center gap-3">
        <PieChart className="h-6 w-6 flex-shrink-0" />
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <div className="p-4 space-y-3">
        {sections.map((section, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700 font-medium truncate pr-2">{section.name}</span>
                <span className="text-salesforce-blue font-semibold flex-shrink-0">{section.percentage}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-salesforce-blue to-salesforce-light rounded-full transition-all duration-500"
                  style={{ width: `${section.percentage}%` }}
                />
              </div>
            </div>
          </div>
        ))}
        {total !== 100 && (
          <p className="text-xs text-gray-600 pt-1">Total weight: {total}% (sections may vary by exam version)</p>
        )}
      </div>
    </div>
  )
}
