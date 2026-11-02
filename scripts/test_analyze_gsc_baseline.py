import csv
import importlib.util
import tempfile
import unittest
from pathlib import Path

MODULE_PATH = Path(__file__).with_name("analyze-gsc-baseline.py")
SPEC = importlib.util.spec_from_file_location("analyze_gsc_baseline", MODULE_PATH)
ANALYZER = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(ANALYZER)
chart_totals = ANALYZER.chart_totals
load_pages = ANALYZER.load_pages
page_metrics = ANALYZER.page_metrics


class GscBaselineTests(unittest.TestCase):
    def test_ctr_percent_and_fraction_parse_to_same_ratio(self):
        with tempfile.TemporaryDirectory() as folder:
            path = Path(folder) / "Pages.csv"
            with path.open("w", newline="", encoding="utf-8") as handle:
                writer = csv.writer(handle)
                writer.writerow(["Top pages", "Clicks", "Impressions", "CTR", "Position"])
                writer.writerow(["https://www.trailblazeprep.com/certifications/a", 1, 10, "10%", 5])
                writer.writerow(["https://www.trailblazeprep.com/certifications/b", 1, 10, "0.1", 5])
            rows = load_pages(path)
            self.assertEqual(rows["https://www.trailblazeprep.com/certifications/a"]["ctr"], 0.1)
            self.assertEqual(rows["https://www.trailblazeprep.com/certifications/b"]["ctr"], 0.1)

    def test_missing_page_row_is_not_zero_metrics(self):
        present = {"https://www.trailblazeprep.com/certifications/a": {
            "row_status": "present", "clicks": 0, "impressions": 0, "ctr": 0.0, "position": 0.0,
        }}
        self.assertEqual(page_metrics("https://www.trailblazeprep.com/certifications/a", present)["row_status"], "present")
        missing = page_metrics("https://www.trailblazeprep.com/certifications/b", present)
        self.assertEqual(missing["row_status"], "no_row_in_export")
        self.assertIsNone(missing["impressions"])

    def test_chart_ctr_uses_ratio_and_position_uses_covered_impressions(self):
        with tempfile.TemporaryDirectory() as folder:
            path = Path(folder) / "Chart.csv"
            with path.open("w", newline="", encoding="utf-8") as handle:
                writer = csv.writer(handle)
                writer.writerow(["Date", "Clicks", "Impressions", "CTR", "Position"])
                writer.writerow(["2026-09-01", 1, 9, "11.11%", 10])
                writer.writerow(["2026-09-02", 1, 1, "100%", 20])
                writer.writerow(["2026-09-03", 0, 100, "0%", ""])
            result = chart_totals(path)
            self.assertAlmostEqual(result["ctr"], 2 / 110)
            self.assertAlmostEqual(result["impression_weighted_position"], 11)
            self.assertEqual(result["position_coverage_impressions"], 10)
            self.assertEqual(result["impressions_without_position"], 100)


if __name__ == "__main__":
    unittest.main()
