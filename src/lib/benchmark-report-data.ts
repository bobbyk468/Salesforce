import { getCertificationGrid, type GridCert } from '@/lib/certification-grid-data'
import { CERT_NAME_ALIASES } from '@/lib/cert-name-aliases'
import { getCredentialStatus } from '@/lib/credential-status'
import { EXAM_WEIGHTAGE } from '@/lib/exam-weightage-data'

/**
 * Figures for the 2026 benchmark report.
 *
 * Everything here is derived from the same data the certification pages
 * render. Nothing is estimated, rounded up, or carried over from a previous
 * year: where a figure is unknown the count of unknowns is reported instead,
 * because the point of a citable report is that someone can check it.
 */

export type TrackTotals = {
  slug: string
  name: string
  certifications: number
  /** Certifications in the track for which we hold each figure. */
  withFee: number
  withDuration: number
  withQuestions: number
  totalFeeUsd: number
  totalMinutes: number
  totalQuestions: number
}

export type RenamedCert = { slug: string; formerName: string; currentName: string; href: string }
export type StatusChange = { slug: string; name: string; kind: string; message?: string; href: string }

const feeToNumber = (fee: string | null): number | null => {
  if (!fee) return null
  const n = Number.parseFloat(fee.replace(/[^0-9.]/g, ''))
  return Number.isFinite(n) ? n : null
}

const minutesToNumber = (duration: string | null): number | null => {
  if (!duration) return null
  const n = Number.parseInt(duration.replace(/[^0-9]/g, ''), 10)
  return Number.isFinite(n) ? n : null
}

/**
 * The grid also carries a non-Salesforce track (Anthropic's Claude
 * credentials), whose details are marked unverified. A report titled as a
 * Salesforce benchmark must not count them: including the track took the
 * headline from 87 certifications to 91 and the combined fees from $25,200
 * to $25,724, both of which would be wrong in a figure people cite.
 */
const NON_SALESFORCE_TRACKS = new Set(['claude'])

function getSalesforceGrid() {
  return getCertificationGrid().filter((category) => !NON_SALESFORCE_TRACKS.has(category.slug))
}

export function getTrackTotals(): TrackTotals[] {
  return getSalesforceGrid().map((category) => {
    const totals: TrackTotals = {
      slug: category.slug,
      name: category.name,
      certifications: category.certs.length,
      withFee: 0,
      withDuration: 0,
      withQuestions: 0,
      totalFeeUsd: 0,
      totalMinutes: 0,
      totalQuestions: 0,
    }
    for (const cert of category.certs) {
      const fee = feeToNumber(cert.cost)
      if (fee !== null) { totals.withFee += 1; totals.totalFeeUsd += fee }
      const minutes = minutesToNumber(cert.duration)
      if (minutes !== null) { totals.withDuration += 1; totals.totalMinutes += minutes }
      const questions = cert.questions ? Number.parseInt(cert.questions, 10) : NaN
      if (Number.isFinite(questions)) { totals.withQuestions += 1; totals.totalQuestions += questions }
    }
    return totals
  })
}

export function getReportSummary() {
  const tracks = getTrackTotals()
  const certs = getSalesforceGrid().flatMap((c) => c.certs)
  const statusChanged = certs.filter((c) => getCredentialStatus(c.slug))

  return {
    trackCount: tracks.length,
    totalCertifications: certs.length,
    withPublishedFee: certs.filter((c) => c.cost).length,
    withPublishedFormat: certs.filter((c) => c.questions && c.passingScore && c.duration).length,
    withSectionWeightage: Object.keys(EXAM_WEIGHTAGE).filter(
      (s) => !s.endsWith('-practice-test') && !s.startsWith('claude-'),
    ).length,
    withOfficialLink: certs.filter((c) => c.officialUrl).length,
    renamedSince: Object.keys(CERT_NAME_ALIASES).length,
    statusChanged: statusChanged.length,
    cheapestFee: Math.min(...certs.map((c) => feeToNumber(c.cost) ?? Infinity)),
    dearestFee: Math.max(...certs.map((c) => feeToNumber(c.cost) ?? 0)),
    totalFeeAllTracks: tracks.reduce((sum, t) => sum + t.totalFeeUsd, 0),
    totalMinutesAllTracks: tracks.reduce((sum, t) => sum + t.totalMinutes, 0),
    totalQuestionsAllTracks: tracks.reduce((sum, t) => sum + t.totalQuestions, 0),
  }
}

/** Certifications Salesforce has renamed, with the name people still search for. */
export function getRenamedCertifications(): RenamedCert[] {
  const bySlug = new Map(getSalesforceGrid().flatMap((c) => c.certs).map((c) => [c.slug, c]))
  return Object.entries(CERT_NAME_ALIASES)
    .filter(([slug, alias]) => bySlug.has(slug) && alias.formerName && alias.formerName !== alias.primaryName)
    .map(([slug, alias]) => ({
      slug,
      formerName: alias.formerName as string,
      currentName: alias.primaryName,
      href: bySlug.get(slug)?.href ?? `/certifications/${slug}`,
    }))
    .sort((a, b) => a.currentName.localeCompare(b.currentName))
}

/** Certifications whose exam is retired, closed, or whose details are unverified. */
export function getStatusChanges(): StatusChange[] {
  return getSalesforceGrid()
    .flatMap((c) => c.certs)
    .flatMap<StatusChange>((cert) => {
      const status = getCredentialStatus(cert.slug)
      if (!status) return []
      return [{
        slug: cert.slug,
        name: cert.name,
        kind: String(status.kind),
        message: status.message,
        href: cert.href,
      }]
    })
    .sort((a, b) => a.name.localeCompare(b.name))
}

/** Flat rows for the downloadable dataset. */
export function getDatasetRows() {
  return getSalesforceGrid().flatMap((category) =>
    category.certs.map((cert: GridCert) => ({
      name: cert.name,
      slug: cert.slug,
      role_track: category.name,
      exam_fee_usd: feeToNumber(cert.cost),
      duration_minutes: minutesToNumber(cert.duration),
      scored_questions: cert.questions ? Number.parseInt(cert.questions, 10) : null,
      passing_score: cert.passingScore ?? null,
      prerequisites: cert.prerequisites,
      official_url: cert.officialUrl ?? null,
      study_guide_url: cert.studyGuideHref ? `https://www.trailblazeprep.com${cert.studyGuideHref}` : null,
      practice_questions_url: `https://www.trailblazeprep.com${cert.href}`,
    })),
  )
}

export function datasetToCsv(rows: ReturnType<typeof getDatasetRows>): string {
  const headers = Object.keys(rows[0]) as (keyof (typeof rows)[number])[]
  const escape = (value: unknown) => {
    if (value === null || value === undefined) return ''
    const text = String(value)
    return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text
  }
  return [headers.join(','), ...rows.map((row) => headers.map((h) => escape(row[h])).join(','))].join('\n')
}
