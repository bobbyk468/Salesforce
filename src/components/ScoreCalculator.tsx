'use client'

import { useMemo, useState } from 'react'
import Link from '@/components/AppLink'
import { ArrowRight, TrendingDown } from 'lucide-react'
import { computeWeightedScore, type CalculatorExam } from '@/lib/score-calculator-data'

/**
 * Works out an overall exam score from the per-section percentages Salesforce
 * emails you, which is the one number the result report leaves out.
 *
 * The exam list is passed in from the server page rather than imported here,
 * so the weightage dataset stays out of the shared client bundle and is only
 * paid for on this route.
 */
export default function ScoreCalculator({
  exams,
  linkBase = '',
  initialSlug,
  onExamChange,
}: {
  exams: CalculatorExam[]
  /** Pre-selected exam, from ?cert= on the embed route. */
  initialSlug?: string
  /**
   * Absolute origin to prefix internal links with. Set on the embeddable
   * build, where a relative href would resolve against the host site inside
   * the iframe and 404.
   */
  linkBase?: string
  onExamChange?: (exam: CalculatorExam) => void
}) {
  const [slug, setSlug] = useState(
    () => (initialSlug && exams.some((e) => e.slug === initialSlug) ? initialSlug : exams[0]?.slug) ?? '',
  )
  const [entered, setEntered] = useState<Record<string, number | null>>({})

  const exam = useMemo(() => exams.find((e) => e.slug === slug) ?? exams[0], [exams, slug])

  const { score, usedWeight } = useMemo(
    () => (exam ? computeWeightedScore(exam.sections, entered) : { score: null, usedWeight: 0 }),
    [exam, entered],
  )

  const weakest = useMemo(() => {
    if (!exam) return null
    const filled = exam.sections
      .map((s) => ({ ...s, value: entered[s.name] }))
      .filter((s): s is typeof s & { value: number } => typeof s.value === 'number')
    if (!filled.length) return null
    return filled.reduce((a, b) => (b.value < a.value ? b : a))
  }, [exam, entered])

  if (!exam) return null

  const delta = score == null ? null : score - exam.passMark
  const passed = delta != null && delta >= 0

  const setSection = (name: string, raw: string) => {
    const n = raw === '' ? null : Math.max(0, Math.min(100, Number(raw)))
    setEntered((prev) => ({ ...prev, [name]: n }))
  }

  return (
    <div className="mx-auto max-w-3xl">
      <label htmlFor="exam-select" className="block text-sm font-semibold text-gray-900">
        Certification
      </label>
      <select
        id="exam-select"
        value={slug}
        onChange={(e) => {
          setSlug(e.target.value)
          setEntered({})
          const next = exams.find((x) => x.slug === e.target.value)
          if (next) onExamChange?.(next)
        }}
        className="mt-2 h-12 w-full rounded-lg border border-gray-300 bg-white px-3 text-base text-gray-900 focus:border-salesforce-blue focus:outline-none focus:ring-2 focus:ring-salesforce-blue/20"
      >
        {exams.map((e) => (
          <option key={e.slug} value={e.slug}>{e.name}</option>
        ))}
      </select>
      <p className="mt-2 text-sm text-gray-600">
        Pass mark {exam.passMarkLabel} &middot; {exam.sections.length} sections
      </p>

      <div className="mt-6 space-y-4">
        {exam.sections.map((section) => {
          const value = entered[section.name]
          return (
            <div key={section.name}>
              <div className="flex items-baseline justify-between gap-3">
                <label htmlFor={`s-${section.name}`} className="text-sm font-medium text-gray-900">
                  {section.name}
                </label>
                <span className="flex-shrink-0 text-xs text-gray-500">{section.percentage}% of exam</span>
              </div>
              <div className="mt-1.5 flex items-center gap-3">
                <input
                  id={`s-${section.name}`}
                  type="range"
                  min={0}
                  max={100}
                  step={1}
                  value={value ?? 0}
                  onChange={(e) => setSection(section.name, e.target.value)}
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-salesforce-blue"
                  aria-label={`${section.name} percentage`}
                />
                <input
                  type="number"
                  inputMode="numeric"
                  min={0}
                  max={100}
                  value={value ?? ''}
                  placeholder="—"
                  onChange={(e) => setSection(section.name, e.target.value)}
                  aria-label={`${section.name} percentage, numeric`}
                  className="h-11 w-20 flex-shrink-0 rounded-lg border border-gray-300 px-2 text-center text-sm text-gray-900 focus:border-salesforce-blue focus:outline-none"
                />
              </div>
            </div>
          )
        })}
      </div>

      <div
        aria-live="polite"
        className={`mt-8 rounded-xl border p-6 ${
          score == null
            ? 'border-gray-200 bg-gray-50'
            : passed
              ? 'border-emerald-200 bg-emerald-50'
              : 'border-amber-200 bg-amber-50'
        }`}
      >
        {score == null ? (
          <p className="text-sm text-gray-600">
            Enter at least one section percentage from your result email to see your
            weighted overall score.
          </p>
        ) : (
          <>
            <p className="text-sm font-medium text-gray-700">Weighted overall score</p>
            <p className="mt-1 text-4xl font-bold text-gray-900">{score.toFixed(1)}%</p>
            <p className="mt-2 text-sm text-gray-800">
              {passed
                ? `${delta!.toFixed(1)} percentage points above the ${exam.passMarkLabel} pass mark.`
                : `${Math.abs(delta!).toFixed(1)} percentage points below the ${exam.passMarkLabel} pass mark.`}
            </p>
            {usedWeight < 99 && (
              <p className="mt-2 text-xs text-gray-600">
                Based on the {usedWeight}% of the exam you have filled in. Add the
                remaining sections for the full picture.
              </p>
            )}

            {weakest && (
              <div className="mt-5 border-t border-black/5 pt-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                  <TrendingDown className="h-4 w-4 flex-shrink-0 text-amber-600" aria-hidden="true" />
                  Weakest section: {weakest.name} ({weakest.value}%)
                </p>
                {linkBase ? (
                  <a
                    href={`${linkBase}/certifications/${exam.slug}#practice-questions`}
                    target="_blank"
                    rel="noopener"
                    className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-lg bg-salesforce-blue px-4 text-sm font-semibold text-white shadow-sm hover:bg-salesforce-dark"
                  >
                    Boost your {weakest.name} score with free {exam.name} practice questions
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : (
                  <Link
                    href={`/certifications/${exam.slug}#practice-questions`}
                    className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-lg bg-salesforce-blue px-4 text-sm font-semibold text-white shadow-sm hover:bg-salesforce-dark"
                  >
                    Boost your {weakest.name} score with free {exam.name} practice questions
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                )}
              </div>
            )}
          </>
        )}
      </div>

      {/*
        On a phone the section inputs fill the viewport, so the result card
        above sits off-screen while you are still typing into them: you enter a
        percentage and nothing appears to happen. This slim bar repeats just
        the weighted score and the gap to the pass mark, pinned to the bottom
        on small screens only, and clears any sticky CTA using the height that
        component publishes as --sticky-cta-h.
      */}
      {score != null && (
        <div
          aria-hidden="true"
          className={`fixed inset-x-0 z-30 border-t px-4 py-2.5 shadow-[0_-2px_8px_rgba(0,0,0,0.08)] sm:hidden ${
            passed ? 'border-emerald-200 bg-emerald-50' : 'border-amber-200 bg-amber-50'
          }`}
          style={{ bottom: 'var(--sticky-cta-h, 0px)' }}
        >
          <p className="flex items-baseline justify-between gap-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-600">
              Weighted score
            </span>
            <span className="text-lg font-bold tabular-nums text-gray-900">
              {score.toFixed(1)}%
            </span>
          </p>
          <p className="mt-0.5 text-xs text-gray-700">
            {delta! >= 0
              ? `${delta!.toFixed(1)} pts above the ${exam.passMarkLabel} pass mark`
              : `${Math.abs(delta!).toFixed(1)} pts below the ${exam.passMarkLabel} pass mark`}
            {usedWeight < 99 ? ` \u00b7 ${usedWeight}% of the exam filled in` : ''}
          </p>
        </div>
      )}

      <p className="mt-4 text-xs text-gray-500">
        An estimate. Salesforce reports section percentages but not an overall figure,
        and does not publish how it rounds or handles unscored questions, so treat this
        as close rather than exact. Section weightings come from each credential&apos;s
        published exam outline.
      </p>

      {/* Room for the fixed mobile bar, so it never covers the disclaimer. */}
      {score != null && <div aria-hidden="true" className="h-20 sm:hidden" />}
    </div>
  )
}
