import { getDatasetRows } from '@/lib/benchmark-report-data'

/**
 * Open dataset of every certification we cover, CC BY 4.0.
 *
 * A prerendered route rather than a checked-in file in public/, so it cannot
 * drift from the data the certification pages render.
 */
export const dynamic = 'force-static'

export function GET() {
  const rows = getDatasetRows()
  const body = {
    name: 'Salesforce Certification Dataset 2026',
    description:
      'Exam fee, duration, scored question count, pass mark and prerequisites for every Salesforce certification covered by Trailblaze Prep.',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    attribution: 'Trailblaze Prep — https://www.trailblazeprep.com/salesforce-certification-report-2026',
    source: 'https://www.trailblazeprep.com/salesforce-certification-report-2026',
    generated: new Date().toISOString().slice(0, 10),
    recordCount: rows.length,
    fields: {
      name: 'Certification name, Salesforce Certified prefix removed',
      slug: 'Trailblaze Prep URL slug',
      role_track: 'Role track the certification sits in',
      exam_fee_usd: 'First-attempt registration fee in USD, before local taxes. null where not published',
      duration_minutes: 'Time allowed, in minutes. null where not published',
      scored_questions: 'Scored question count, excluding unscored trial questions. null where not published',
      passing_score: 'Pass mark as published. null where not published. Salesforce no longer publishes this on its certification pages',
      prerequisites: 'Required or recommended prerequisite, "None required", or "See component exams"',
      official_url: "Salesforce's own page for the credential, verified to return 200",
      study_guide_url: 'Trailblaze Prep study guide, where one exists',
      practice_questions_url: 'Trailblaze Prep practice questions',
    },
    data: rows,
  }
  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'access-control-allow-origin': '*',
      'cache-control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
