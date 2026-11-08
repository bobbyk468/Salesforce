import { datasetToCsv, getDatasetRows } from '@/lib/benchmark-report-data'

/** Same dataset as the JSON route, as CSV. CC BY 4.0. */
export const dynamic = 'force-static'

export function GET() {
  const header = [
    '# Salesforce Certification Dataset 2026 — Trailblaze Prep',
    '# Licence: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/)',
    '# Attribution: Trailblaze Prep, https://www.trailblazeprep.com/salesforce-certification-report-2026',
    '# Empty cells mean the figure is not published by Salesforce, not zero.',
  ].join('\n')
  return new Response(`${header}\n${datasetToCsv(getDatasetRows())}\n`, {
    headers: {
      'content-type': 'text/csv; charset=utf-8',
      'access-control-allow-origin': '*',
      'cache-control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
