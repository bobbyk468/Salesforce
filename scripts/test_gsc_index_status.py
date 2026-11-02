import importlib.util
from pathlib import Path
import unittest

spec = importlib.util.spec_from_file_location('gsc_index_status', Path(__file__).with_name('gsc-index-status.py'))
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)


class InspectionClassificationTests(unittest.TestCase):
    def classify(self, **fields):
        return module.classify_index_status({'inspectionResult': {'indexStatusResult': fields}})

    def test_indexed_verdict_does_not_depend_on_english_coverage_label(self):
        self.assertEqual(self.classify(verdict='PASS', coverageState='Submitted and indexed')['indexed'], 'yes')

    def test_unknown_is_not_reported_as_not_indexed(self):
        self.assertEqual(self.classify()['indexed'], 'unknown')
        self.assertEqual(self.classify(verdict='VERDICT_UNSPECIFIED')['indexed'], 'unknown')
        self.assertEqual(self.classify(verdict='NEUTRAL')['indexed'], 'no')

    def test_crawl_evidence_is_preserved(self):
        result = self.classify(verdict='PASS', lastCrawlTime='2026-10-05T00:00:00Z', pageFetchState='SUCCESSFUL', crawledAs='MOBILE')
        self.assertEqual(result['pageFetchState'], 'SUCCESSFUL')
        self.assertEqual(result['crawledAs'], 'MOBILE')
        self.assertEqual(result['lastCrawlTime'], '2026-10-05T00:00:00Z')


if __name__ == '__main__':
    unittest.main()
