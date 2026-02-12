#!/usr/bin/env python3
"""Lightweight URL timing monitor for repeatable slow-page detection.

Usage examples:
  python3 scripts/page_speed_monitor.py
  python3 scripts/page_speed_monitor.py --runs 7 --threshold-ms 1200
  python3 scripts/page_speed_monitor.py --urls-file scripts/monitor-urls.txt
"""

from __future__ import annotations

import argparse
import math
import statistics
import subprocess
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable


DEFAULT_PATHS = [
    "/",
    "/contact",
    "/terms",
    "/certifications/administrator",
    "/certifications/developer-1",
    "/certifications/developer-2",
    "/certifications/marketing-cloud-consultant",
    "/certifications/tableau-data-analyst",
    "/adm-201-exam-tips-2026",
    "/adm-201-vs-app-builder",
]


@dataclass
class Sample:
    status_code: int
    ttfb_ms: float
    total_ms: float


@dataclass
class UrlStats:
    url: str
    status_codes: list[int]
    ttfb_ms: list[float]
    total_ms: list[float]

    @property
    def avg_ttfb(self) -> float:
        return statistics.mean(self.ttfb_ms) if self.ttfb_ms else math.inf

    @property
    def avg_total(self) -> float:
        return statistics.mean(self.total_ms) if self.total_ms else math.inf

    @property
    def p95_total(self) -> float:
        if not self.total_ms:
            return math.inf
        ordered = sorted(self.total_ms)
        idx = max(0, min(len(ordered) - 1, math.ceil(0.95 * len(ordered)) - 1))
        return ordered[idx]

    @property
    def has_non_200(self) -> bool:
        return any(code != 200 for code in self.status_codes)


def timed_request(url: str, timeout_seconds: int) -> Sample:
    cmd = [
        "curl",
        "-sS",
        "-o",
        "/dev/null",
        "--max-time",
        str(timeout_seconds),
        "-w",
        "%{http_code} %{time_starttransfer} %{time_total}",
        url,
    ]
    output = subprocess.check_output(cmd, text=True).strip().split()
    return Sample(
        status_code=int(output[0]),
        ttfb_ms=float(output[1]) * 1000,
        total_ms=float(output[2]) * 1000,
    )


def read_paths(urls_file: str | None) -> list[str]:
    if not urls_file:
        return DEFAULT_PATHS
    lines = Path(urls_file).read_text(encoding="utf-8").splitlines()
    clean = [line.strip() for line in lines if line.strip() and not line.strip().startswith("#")]
    return clean


def build_urls(base_url: str, paths: Iterable[str]) -> list[str]:
    root = base_url.rstrip("/")
    urls: list[str] = []
    for path in paths:
        if path.startswith("http://") or path.startswith("https://"):
            urls.append(path)
        else:
            normalized = path if path.startswith("/") else f"/{path}"
            urls.append(f"{root}{normalized}")
    return urls


def main() -> int:
    parser = argparse.ArgumentParser(description="Detect consistently slow URLs.")
    parser.add_argument("--base-url", default="https://www.trailblazeprep.com")
    parser.add_argument("--runs", type=int, default=5, help="Requests per URL")
    parser.add_argument("--timeout", type=int, default=20, help="curl max-time seconds")
    parser.add_argument(
        "--threshold-ms",
        type=float,
        default=1200.0,
        help="Flag URL when avg_total or p95_total exceeds this value",
    )
    parser.add_argument("--urls-file", help="Optional text file with one path/URL per line")
    args = parser.parse_args()

    urls = build_urls(args.base_url, read_paths(args.urls_file))
    all_stats: list[UrlStats] = []

    print(f"Monitoring {len(urls)} URLs with {args.runs} runs each...")
    for url in urls:
        statuses: list[int] = []
        ttfb_samples: list[float] = []
        total_samples: list[float] = []
        for _ in range(args.runs):
            sample = timed_request(url, args.timeout)
            statuses.append(sample.status_code)
            ttfb_samples.append(sample.ttfb_ms)
            total_samples.append(sample.total_ms)
        all_stats.append(
            UrlStats(
                url=url,
                status_codes=statuses,
                ttfb_ms=ttfb_samples,
                total_ms=total_samples,
            )
        )

    header = f"{'URL':70} {'avg_ttfb':>10} {'avg_total':>10} {'p95_total':>10} {'status':>10}"
    print("\n" + header)
    print("-" * len(header))
    for stat in all_stats:
        status_summary = "non-200" if stat.has_non_200 else "200"
        print(
            f"{stat.url[:70]:70} "
            f"{stat.avg_ttfb:10.0f} {stat.avg_total:10.0f} {stat.p95_total:10.0f} {status_summary:>10}"
        )

    flagged = [
        stat
        for stat in all_stats
        if stat.has_non_200 or stat.avg_total >= args.threshold_ms or stat.p95_total >= args.threshold_ms
    ]
    print(f"\nThreshold: {args.threshold_ms:.0f} ms")
    if not flagged:
        print("No consistently slow URLs detected.")
        return 0

    print("Flagged URLs:")
    for stat in flagged:
        reasons = []
        if stat.has_non_200:
            reasons.append("non-200 status seen")
        if stat.avg_total >= args.threshold_ms:
            reasons.append(f"avg_total={stat.avg_total:.0f}ms")
        if stat.p95_total >= args.threshold_ms:
            reasons.append(f"p95_total={stat.p95_total:.0f}ms")
        print(f"- {stat.url} -> {', '.join(reasons)}")
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
