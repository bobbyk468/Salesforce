import Image from 'next/image'

interface ExpertInsightCalloutProps {
  insight: string
}

/**
 * Author-voice callout rendered on cert pages to provide unique experiential context.
 * Targets Google's E-E-A-T "Experience" signal — content that cannot be replicated by
 * AI-generated study guides because it reflects first-hand exam observation.
 */
export default function ExpertInsightCallout({ insight }: ExpertInsightCalloutProps) {
  return (
    <aside className="my-8 flex gap-4 rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-5">
      <div className="flex-shrink-0 mt-0.5">
        <Image
          src="/authors/krishna-mohan.jpg"
          alt="Krishna Mohan"
          width={40}
          height={40}
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-salesforce-blue mb-1">
          Expert Insight — Krishna Mohan
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">{insight}</p>
      </div>
    </aside>
  )
}
