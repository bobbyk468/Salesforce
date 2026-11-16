'use client'

import { useMemo, useState } from 'react'
import { PRICING_TIERS } from '@/lib/exam-pricing-data'

/**
 * Interactive certification ROI calculator.
 *
 * The page already explained the formula and tabulated a payback estimate per
 * track; this lets a candidate put their own numbers through it. Exam fee
 * options come from PRICING_TIERS, the same table the fee pages read, so the
 * tiers offered here cannot drift from the published fees.
 *
 * Every figure is an estimate the candidate supplies. The widget states that
 * rather than presenting the output as a forecast.
 */

const FEE_TIERS = [
  { id: 'associate', label: 'Foundations / Associate', fee: PRICING_TIERS.associate.fee, retake: PRICING_TIERS.associate.retake },
  { id: 'standard', label: 'Standard certification', fee: PRICING_TIERS.standard.fee, retake: PRICING_TIERS.standard.retake },
  { id: 'ap', label: 'Accredited Professional', fee: PRICING_TIERS.ap.fee, retake: PRICING_TIERS.ap.retake },
  { id: 'architect', label: 'Architect (single domain)', fee: PRICING_TIERS.architect.fee, retake: PRICING_TIERS.architect.retake },
] as const

const usd = (value: number) =>
  value.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

function NumberField({
  id,
  label,
  hint,
  value,
  min,
  max,
  step,
  suffix,
  onChange,
}: {
  id: string
  label: string
  hint?: string
  value: number
  min: number
  max: number
  step: number
  suffix?: string
  onChange: (value: number) => void
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-gray-900">
        {label}
      </label>
      {hint && <p className="mt-0.5 text-xs text-gray-600">{hint}</p>}
      <div className="mt-2 flex items-center gap-2">
        <input
          id={id}
          type="number"
          inputMode="numeric"
          min={min}
          max={max}
          step={step}
          value={Number.isFinite(value) ? value : ''}
          onChange={(event) => {
            const next = Number(event.target.value)
            onChange(Number.isFinite(next) ? Math.min(Math.max(next, min), max) : min)
          }}
          className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 focus:border-salesforce-blue focus:outline-none focus:ring-2 focus:ring-salesforce-blue/20"
        />
        {suffix && <span className="shrink-0 text-sm text-gray-600">{suffix}</span>}
      </div>
    </div>
  )
}

export default function RoiCalculatorWidget() {
  const [tierId, setTierId] = useState<(typeof FEE_TIERS)[number]['id']>('standard')
  const [includeRetake, setIncludeRetake] = useState(false)
  const [studyHours, setStudyHours] = useState(60)
  const [hourlyValue, setHourlyValue] = useState(40)
  const [uplift, setUplift] = useState(8000)

  const tier = FEE_TIERS.find((option) => option.id === tierId) ?? FEE_TIERS[1]

  const result = useMemo(() => {
    const examCost = tier.fee + (includeRetake ? tier.retake : 0)
    // Study time is an opportunity cost, not a cash cost, so it is shown as
    // its own line rather than folded silently into the fee.
    const timeCost = Math.max(studyHours, 0) * Math.max(hourlyValue, 0)
    const investment = examCost + timeCost
    const annualUplift = Math.max(uplift, 0)
    const netFirstYear = annualUplift - investment
    const paybackMonths = annualUplift > 0 ? (investment / annualUplift) * 12 : null
    const paybackWeeks = paybackMonths === null ? null : paybackMonths * (52 / 12)
    return { examCost, timeCost, investment, netFirstYear, paybackMonths, paybackWeeks }
  }, [tier, includeRetake, studyHours, hourlyValue, uplift])

  const paybackLabel =
    result.paybackWeeks === null
      ? 'Enter an expected uplift'
      : result.paybackWeeks < 104
        ? `${Math.round(result.paybackWeeks)} weeks (${result.paybackMonths!.toFixed(1)} months)`
        : `${result.paybackMonths!.toFixed(0)} months`

  return (
    <section
      id="roi-calculator"
      className="mb-8 rounded-2xl border border-gray-100 bg-white p-5 sm:p-6 scroll-mt-24"
      aria-labelledby="roi-calculator-heading"
    >
      <h2 id="roi-calculator-heading" className="text-xl font-bold text-gray-900 mb-1">
        Work out your own payback period
      </h2>
      <p className="text-sm text-gray-600 mb-5">
        Exam fees come from the published fee tiers. The other three figures are yours, so the
        output is an estimate from your own numbers, not a forecast of a salary outcome.
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-5">
          <div>
            <label htmlFor="roi-tier" className="block text-sm font-semibold text-gray-900">
              Exam fee tier
            </label>
            <select
              id="roi-tier"
              value={tierId}
              onChange={(event) => setTierId(event.target.value as typeof tierId)}
              className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 focus:border-salesforce-blue focus:outline-none focus:ring-2 focus:ring-salesforce-blue/20"
            >
              {FEE_TIERS.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label} &mdash; {usd(option.fee)}
                </option>
              ))}
            </select>
            <label className="mt-2 flex items-start gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={includeRetake}
                onChange={(event) => setIncludeRetake(event.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-gray-300 text-salesforce-blue focus:ring-salesforce-blue/30"
              />
              <span>
                Budget for one retake{' '}
                <span className="text-gray-500">
                  ({tier.retake === 0 ? 'free on this tier' : usd(tier.retake)})
                </span>
              </span>
            </label>
          </div>

          <NumberField
            id="roi-hours"
            label="Estimated study hours"
            hint="Total hours, not hours per week."
            value={studyHours}
            min={0}
            max={1000}
            step={5}
            suffix="hours"
            onChange={setStudyHours}
          />

          <NumberField
            id="roi-hourly"
            label="Hourly value of your time"
            hint="Your hourly rate, or annual salary divided by about 2,080."
            value={hourlyValue}
            min={0}
            max={1000}
            step={5}
            suffix="/ hour"
            onChange={setHourlyValue}
          />

          <NumberField
            id="roi-uplift"
            label="Expected annual salary uplift"
            hint="What you expect the credential to add in a year, before tax."
            value={uplift}
            min={0}
            max={200000}
            step={500}
            suffix="/ year"
            onChange={setUplift}
          />
        </div>

        <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-5">
          <dl className="space-y-4">
            <div>
              <dt className="text-sm text-gray-700">Total investment</dt>
              <dd className="text-2xl font-bold text-gray-900">{usd(result.investment)}</dd>
              <p className="mt-1 text-xs text-gray-600">
                {usd(result.examCost)} in exam fees plus {usd(result.timeCost)} of study time.
              </p>
            </div>
            <div>
              <dt className="text-sm text-gray-700">Net return, first year</dt>
              <dd
                className={`text-2xl font-bold ${result.netFirstYear >= 0 ? 'text-emerald-700' : 'text-red-700'}`}
              >
                {result.netFirstYear >= 0 ? '+' : '−'}
                {usd(Math.abs(result.netFirstYear))}
              </dd>
              <p className="mt-1 text-xs text-gray-600">
                {result.netFirstYear >= 0
                  ? 'The uplift covers the investment inside the first year.'
                  : 'The investment is larger than one year of the uplift you entered.'}
              </p>
            </div>
            <div>
              <dt className="text-sm text-gray-700">Payback period</dt>
              <dd className="text-2xl font-bold text-gray-900">{paybackLabel}</dd>
              <p className="mt-1 text-xs text-gray-600">
                How long the uplift takes to repay the full investment.
              </p>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
