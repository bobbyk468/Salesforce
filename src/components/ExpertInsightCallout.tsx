import { BookOpen } from 'lucide-react'

interface ExpertInsightCalloutProps {
  insight: string
}

export default function ExpertInsightCallout({ insight }: ExpertInsightCalloutProps) {
  return (
    <aside className="my-8 flex gap-4 rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-5">
      <div className="flex-shrink-0 mt-0.5" aria-hidden="true">
        <BookOpen className="h-6 w-6 text-salesforce-blue" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-salesforce-blue mb-1">
          Study planning note
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">{insight}</p>
      </div>
    </aside>
  )
}
