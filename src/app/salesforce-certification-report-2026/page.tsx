import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import LastUpdated from '@/components/LastUpdated'
import CiteReport from '@/components/CiteReport'
import {
  getRenamedCertifications,
  getReportSummary,
  getStatusChanges,
  getTrackTotals,
} from '@/lib/benchmark-report-data'
import { getBreadcrumbListJsonLd, getWebPageJsonLd } from '@/lib/schema-data'

const siteUrl = 'https://www.trailblazeprep.com'
const path = '/salesforce-certification-report-2026'

export const metadata: Metadata = {
  title: { absolute: '2026 Salesforce Certification Benchmark Report' },
  description:
    'Exam costs, question counts, durations and prerequisites across all Salesforce certification tracks, with a free CC BY 4.0 dataset and the 2026 rename and retirement tracker.',
  alternates: {
    canonical: `${siteUrl}${path}`,
    languages: { 'en-US': `${siteUrl}${path}`, 'x-default': `${siteUrl}${path}` },
  },
}

const money = (n: number) => `$${n.toLocaleString('en-US')}`
const hours = (minutes: number) => `${Math.floor(minutes / 60)}h ${minutes % 60}m`

export default function BenchmarkReportPage() {
  const summary = getReportSummary()
  const tracks = getTrackTotals().sort((a, b) => b.certifications - a.certifications)
  const renamed = getRenamedCertifications()
  const statusChanges = getStatusChanges()
  const generated = new Date().toISOString().slice(0, 10)
  const withFee = tracks.reduce((n, t) => n + t.withFee, 0)
  const withDuration = tracks.reduce((n, t) => n + t.withDuration, 0)

  const breadcrumb = [
    { name: 'Home', url: '/' },
    { name: '2026 Certification Benchmark Report', url: path },
  ]

  const datasetJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Salesforce Certification Dataset 2026',
    description: metadata.description as string,
    url: `${siteUrl}${path}`,
    license: 'https://creativecommons.org/licenses/by/4.0/',
    isAccessibleForFree: true,
    creator: { '@type': 'Organization', name: 'Trailblaze Prep', url: siteUrl },
    distribution: [
      { '@type': 'DataDownload', encodingFormat: 'application/json', contentUrl: `${siteUrl}/datasets/salesforce-certifications-2026.json` },
      { '@type': 'DataDownload', encodingFormat: 'text/csv', contentUrl: `${siteUrl}/datasets/salesforce-certifications-2026.csv` },
    ],
  }

  return (
    <div className="px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebPageJsonLd({ name: '2026 Salesforce Certification Benchmark Report', description: metadata.description as string, path, breadcrumbItems: breadcrumb })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbListJsonLd(breadcrumb)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetJsonLd) }} />

      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
          2026 Salesforce Certification Benchmark Report: Exam Costs, Question Counts &amp; Track Breakdown
        </h1>
        <LastUpdated />
        <p className="mt-2 text-lg text-gray-700">
          What it costs, in money and hours, to complete each Salesforce certification
          track in 2026 — compiled from the published exam details for{' '}
          {summary.totalCertifications} certifications across {summary.trackCount} role
          tracks, and free to reuse.
        </p>

        {/* Headline figures */}
        <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: 'Certifications covered', value: summary.totalCertifications.toString(), note: 'Salesforce credentials' },
            { label: 'Role tracks', value: summary.trackCount.toString(), note: 'all of them' },
            { label: 'Combined exam fees', value: money(summary.totalFeeAllTracks), note: `across ${withFee} with a published fee` },
            { label: 'Combined exam time', value: hours(summary.totalMinutesAllTracks), note: `across ${withDuration} with a published duration` },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-gray-200 bg-white p-4">
              <dt className="text-xs font-medium uppercase tracking-wider text-gray-500">{stat.label}</dt>
              <dd className="mt-1 text-2xl font-bold text-gray-900">{stat.value}</dd>
              <dd className="mt-0.5 text-xs text-gray-500">{stat.note}</dd>
            </div>
          ))}
        </dl>

        <h2 className="mt-12 text-2xl font-bold text-gray-900">Cost and time by role track</h2>
        <p className="mt-2 text-gray-700">
          Sitting every exam in a track, at first-attempt prices before local taxes.
          Where Salesforce does not publish a figure the certification is excluded from
          that column rather than estimated, so each total says how many certifications
          it is based on.
        </p>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200 text-left">
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Role track</th>
                <th scope="col" className="py-2.5 pr-4 text-right font-semibold text-gray-900">Certs</th>
                <th scope="col" className="py-2.5 pr-4 text-right font-semibold text-gray-900">Total fees</th>
                <th scope="col" className="py-2.5 pr-4 text-right font-semibold text-gray-900">Total exam time</th>
                <th scope="col" className="py-2.5 text-right font-semibold text-gray-900">Total questions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {tracks.map((t) => (
                <tr key={t.slug}>
                  <td className="py-2.5 pr-4 font-medium text-gray-900">
                    <Link href={`/certifications/role/${t.slug}`} className="text-salesforce-blue hover:underline">
                      {t.name}
                    </Link>
                  </td>
                  <td className="py-2.5 pr-4 text-right text-gray-800">{t.certifications}</td>
                  <td className="py-2.5 pr-4 text-right text-gray-800">
                    {money(t.totalFeeUsd)}
                    <span className="block text-xs text-gray-500">of {t.withFee}</span>
                  </td>
                  <td className="py-2.5 pr-4 text-right text-gray-800">
                    {hours(t.totalMinutes)}
                    <span className="block text-xs text-gray-500">of {t.withDuration}</span>
                  </td>
                  <td className="py-2.5 text-right text-gray-800">
                    {t.totalQuestions.toLocaleString('en-US')}
                    <span className="block text-xs text-gray-500">of {t.withQuestions}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-12 text-2xl font-bold text-gray-900">How complete the published data is</h2>
        <p className="mt-2 text-gray-700">
          Salesforce does not publish every figure for every credential. This is what is
          actually available, which is itself a finding: pass marks in particular are no
          longer on the certification pages at all.
        </p>
        <ul className="mt-4 space-y-2 text-gray-700">
          <li><strong>{summary.withPublishedFee}</strong> of {summary.totalCertifications} have a published exam fee.</li>
          <li><strong>{summary.withPublishedFormat}</strong> have a complete published format — question count, pass mark and duration.</li>
          <li><strong>{summary.withSectionWeightage}</strong> have published section weightings.</li>
          <li><strong>{summary.withOfficialLink}</strong> have a verified official Salesforce page.</li>
          <li>Exam fees range from <strong>{money(summary.cheapestFee)}</strong> to <strong>{money(summary.dearestFee)}</strong>.</li>
        </ul>

        <h2 className="mt-12 text-2xl font-bold text-gray-900">2026 rename and retirement tracker</h2>
        <p className="mt-2 text-gray-700">
          Salesforce renamed <strong>{renamed.length}</strong> credentials, and{' '}
          <strong>{statusChanges.length}</strong> have a changed exam status. The former
          names are what most people still search for, so both are listed.
        </p>

        {statusChanges.length > 0 && (
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <caption className="sr-only">Certifications with a changed exam status</caption>
              <thead>
                <tr className="border-b-2 border-gray-200 text-left">
                  <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Certification</th>
                  <th scope="col" className="py-2.5 font-semibold text-gray-900">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {statusChanges.map((c) => (
                  <tr key={c.slug}>
                    <td className="py-2.5 pr-4">
                      <Link href={c.href} className="font-medium text-salesforce-blue hover:underline">{c.name}</Link>
                    </td>
                    <td className="py-2.5 text-gray-700">{c.kind.replace(/-/g, ' ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <caption className="sr-only">Renamed Salesforce certifications</caption>
            <thead>
              <tr className="border-b-2 border-gray-200 text-left">
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Former name</th>
                <th scope="col" className="py-2.5 font-semibold text-gray-900">Current name</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {renamed.map((c) => (
                <tr key={c.slug}>
                  <td className="py-2.5 pr-4 text-gray-600">{c.formerName}</td>
                  <td className="py-2.5">
                    <Link href={c.href} className="font-medium text-salesforce-blue hover:underline">{c.currentName}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-12 text-2xl font-bold text-gray-900">Download the dataset</h2>
        <p className="mt-2 text-gray-700">
          Every figure above, as {summary.totalCertifications} rows. Empty cells mean
          Salesforce does not publish that figure — they are not zeroes.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="/datasets/salesforce-certifications-2026.json" className="inline-flex min-h-11 items-center rounded-lg bg-salesforce-blue px-5 text-sm font-semibold text-white hover:bg-salesforce-dark">
            Download JSON
          </a>
          <a href="/datasets/salesforce-certifications-2026.csv" className="inline-flex min-h-11 items-center rounded-lg border border-gray-300 bg-white px-5 text-sm font-semibold text-gray-800 hover:border-salesforce-blue hover:text-salesforce-blue">
            Download CSV
          </a>
        </div>

        <CiteReport generated={generated} />

        <h2 className="mt-12 text-2xl font-bold text-gray-900">Method</h2>
        <p className="mt-2 text-gray-700">
          Figures come from each credential&apos;s own Salesforce page, verified by
          fetching every URL rather than deriving it from a name. Two errors found during
          that check have been corrected — Tableau Architect&apos;s question count and
          Tableau Server Administrator&apos;s question count and duration. Pass marks are
          the weakest data here: Salesforce publishes them on none of the certification
          pages checked, so ours come from exam guides and should be treated as
          secondary. Work out your own score from section percentages with the{' '}
          <Link href="/tools/score-calculator" className="font-semibold text-salesforce-blue hover:underline">
            exam score calculator
          </Link>
          , or browse{' '}
          <Link href="/certifications" className="font-semibold text-salesforce-blue hover:underline">
            all certifications with free practice questions
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
