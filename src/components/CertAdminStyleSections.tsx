import type { WhoIsThisFor, ExamDifficulty, ExamFormat } from '@/lib/cert-page-spike/types'
import { getExamLogistics } from '@/lib/cert-seo-data'

export function WhoIsThisForSection({ data }: { data: WhoIsThisFor }) {
  return (
    <section className="mb-8 rounded-xl border border-gray-100 bg-gray-50/50 p-5 sm:p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-3">{data.heading}</h2>
      <ul className="space-y-2 text-sm text-gray-700">
        {data.personas.map((p) => (
          <li key={p.label}>
            <strong className="text-gray-900">{p.label}:</strong> {p.description}
          </li>
        ))}
      </ul>
    </section>
  )
}

export function ExamDifficultySection({ data }: { data: ExamDifficulty }) {
  return (
    <details className="group mt-8 rounded-xl border border-gray-100 bg-white p-5 sm:p-6 [content-visibility:auto] [contain-intrinsic-size:1px_420px]">
      <summary className="cursor-pointer list-none text-lg font-bold text-gray-900 lg:hidden">
        {data.heading}
      </summary>
      <div className="hidden group-open:block lg:block">
        <h2 className="hidden lg:block text-lg font-bold text-gray-900 mb-3">{data.heading}</h2>
        <p className="text-sm text-gray-700 mb-3">{data.summary}</p>
        <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside mb-4">
          {data.bullets.map((b, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
          ))}
        </ul>
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
          <p className="text-sm font-semibold text-emerald-800 mb-1">Pass Rate Guidance</p>
          <p className="text-sm text-emerald-700">{data.passRateGuidance}</p>
        </div>
      </div>
    </details>
  )
}

export function ExamFormatSection({ slug, data }: { slug: string; data: ExamFormat }) {
  const logistics = getExamLogistics(slug)

  return (
    <details className="group mt-8 rounded-xl border border-gray-100 bg-white p-5 sm:p-6 [content-visibility:auto] [contain-intrinsic-size:1px_680px]">
      <summary className="cursor-pointer list-none text-lg font-bold text-gray-900 lg:hidden">
        {data.heading}
      </summary>
      <div className="hidden group-open:block lg:block">
        <h2 className="hidden lg:block text-lg font-bold text-gray-900 mb-3">{data.heading}</h2>
        <p className="text-sm text-gray-700 mb-3">{data.intro}</p>

        {logistics && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <p className="font-semibold text-gray-900 text-sm mb-1">Total Questions</p>
              <p className="text-sm text-gray-700"><strong>{logistics.questions}</strong> scored questions</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <p className="font-semibold text-gray-900 text-sm mb-1">Time Limit</p>
              <p className="text-sm text-gray-700">{logistics.duration}</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <p className="font-semibold text-gray-900 text-sm mb-1">Passing Score</p>
              <p className="text-sm text-gray-700">{logistics.passingScore}</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <p className="font-semibold text-gray-900 text-sm mb-1">Question Type</p>
              <p className="text-sm text-gray-700">Multiple-choice &amp; multiple-select</p>
            </div>
          </div>
        )}

        {data.scenarioPercent && (
          <>
            <h3 className="text-base font-semibold text-gray-900 mb-2">How Many Questions Are Scenario-Based?</h3>
            <p className="text-sm text-gray-700 mb-3">{data.scenarioPercent}</p>
          </>
        )}

        <h3 className="text-base font-semibold text-gray-900 mb-2">Best Way to Pass on Your First Attempt</h3>
        <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
          {data.bestWayToPass.map((tip, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: tip }} />
          ))}
        </ul>
      </div>
    </details>
  )
}
