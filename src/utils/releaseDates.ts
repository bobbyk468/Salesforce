// Maps Salesforce release names to the ISO end-of-cycle date.
// Used as validThrough in Occupation schema — signals to Google when salary data expires.
// Update this map alongside RELEASE_CURRENT in release-data.ts each season.

const RELEASE_WINDOWS: Record<string, string> = {
  "Winter '26": '2026-03-31',
  "Spring '26": '2026-06-30',
  "Summer '26": '2026-09-30',
  "Winter '27": '2027-01-31',
  "Spring '27": '2027-06-30',
  "Summer '27": '2027-09-30',
}

export function getReleaseWindow(release: string): string {
  return RELEASE_WINDOWS[release] ?? '2026-06-30'
}
