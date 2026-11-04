"""Focused offline tests for the GSC certification keyword tracker."""
import importlib.util
import tempfile
import unittest
from pathlib import Path

SCRIPT = Path(__file__).with_name("gsc-cert-keyword-tracker.py")
spec = importlib.util.spec_from_file_location("gsc_cert_keyword_tracker", SCRIPT)
tracker = importlib.util.module_from_spec(spec)
assert spec.loader
spec.loader.exec_module(tracker)


class RequestAndPaginationTests(unittest.TestCase):
    def test_filters_and_dimensions_are_explicit(self):
        body = tracker.build_request("2026-10-01", "2026-10-07", 0, "ind", "mobile")
        self.assertEqual(body["dimensions"], ["query", "page", "country", "device"])
        self.assertEqual(body["dimensionFilterGroups"][0]["filters"], [
            {"dimension": "country", "operator": "equals", "expression": "IND"},
            {"dimension": "device", "operator": "equals", "expression": "MOBILE"},
        ])

    def test_fetch_all_paginates_using_row_count(self):
        requests_seen = []

        def fetch(body):
            requests_seen.append(body["startRow"])
            if body["startRow"] == 0:
                return [{"row": 1}] * 25000
            return [{"row": 2}]

        rows = tracker.fetch_all(fetch, "2026-10-01", "2026-10-07")
        self.assertEqual(len(rows), 25001)
        self.assertEqual(requests_seen, [0, 25000])


class MappingAndGapTests(unittest.TestCase):
    def test_site_catalog_deduplicates_slugs_and_preserves_taxonomy(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            categories = root / "categories.ts"
            names = root / "names.ts"
            aliases = root / "aliases.ts"
            categories.write_text("""const C = [
  { slug: 'administrator', name: 'Administrator', items: [
    { name: 'Admin', href: '/certifications/admin' },
    { name: 'App Builder', href: '/certifications/app-builder' },
  ] },
  { slug: 'developer', name: 'Developer', items: [
    { name: 'App Builder', href: '/certifications/app-builder' },
    { name: 'Agentforce Specialist', href: '/certifications/agentforce-specialist' },
  ] },
]
/** Categories with official names */
function helperAfterRoster() {
  const slug = 'not-a-cert-roster-entry'
  return '/certifications/helper-page'
}""", encoding="utf-8")
            names.write_text("export const N = { admin: 'Canonical Admin', 'app-builder': 'Quoted App Builder', agentforce-specialist: 'Salesforce Certified Agentforce Specialist' }", encoding="utf-8")
            aliases.write_text("export const A = { admin: { primaryName: 'Effective Admin', formerName: 'Old Admin' } }", encoding="utf-8")
            catalog = tracker.load_catalog(categories, names, aliases)
        self.assertEqual(len(catalog), 3)
        admin = next(cert for cert in catalog if cert["cert_slug"] == "admin")
        self.assertEqual(admin["cert_name"], "Effective Admin")
        app_builder = next(cert for cert in catalog if cert["cert_slug"] == "app-builder")
        self.assertEqual(app_builder["cert_categories"], "administrator;developer")
        agentforce = next(cert for cert in catalog if cert["cert_slug"] == "agentforce-specialist")
        self.assertEqual(agentforce["cert_name"], "Salesforce Certified Agentforce Specialist")
        self.assertEqual(admin["manual_review"], "yes")

    def test_summary_reports_absence_as_no_data_not_unranked(self):
        catalog = [
            {"cert_slug": "admin", "cert_name": "Admin", "cert_categories": "administrator", "page": "https://www.trailblazeprep.com/certifications/admin", "catalog_source_status": "site taxonomy", "manual_review": "yes"},
            {"cert_slug": "builder", "cert_name": "Builder", "cert_categories": "developer", "page": "https://www.trailblazeprep.com/certifications/builder", "catalog_source_status": "site taxonomy", "manual_review": "yes"},
        ]
        api_rows = [
            {"keys": ["admin exam", catalog[0]["page"], "ind", "mobile"], "clicks": 2, "impressions": 10, "ctr": .2, "position": 5},
            {"keys": ["admin certification", catalog[0]["page"], "ind", "mobile"], "clicks": 1, "impressions": 5, "ctr": .2, "position": 7},
        ]
        mapped = tracker.map_rows(api_rows, catalog, "2026-10-01", "2026-10-07", "IND", "MOBILE")
        summary, gaps = tracker.summaries(mapped, catalog, "2026-10-01", "2026-10-07", "IND", "MOBILE")
        self.assertEqual(summary[0]["clicks"], "3")
        self.assertEqual(summary[0]["position"], "5.666666666666667")
        self.assertEqual(summary[1]["reported_data_status"], "no reported GSC data for selected filters/date")
        self.assertEqual(gaps[0]["status"], "no reported GSC data for selected filters/date")
        self.assertNotIn("unranked", gaps[0]["status"])


if __name__ == "__main__":
    unittest.main()
