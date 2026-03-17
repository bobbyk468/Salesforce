# PageSpeed Insights Audit — Summary

**Site:** https://www.trailblazeprep.com  
**Tool:** PageSpeed Insights (pagespeed.web.dev) via API  
**Strategy:** Desktop (default); use `PSI_STRATEGY=mobile` for mobile.  
**Last run:** Generated from `scripts/psi_results_trailblaze.json`.

---

## How to run the audit

**Do not store API keys in the repo.** Pass them via environment only:

```bash
# One key
PSI_API_KEY=your_key ./scripts/run_psi_audit.sh

# Or three keys (faster, round-robin)
PSI_API_KEY_1=key1 PSI_API_KEY_2=key2 PSI_API_KEY_3=key3 ./scripts/run_psi_audit.sh
```

- **URL list:** `scripts/psi_audit_urls.txt` (289 paths from sitemap).
- **Results:** `scripts/psi_results_trailblaze.json` (gitignored).
- **Parallelism:** Script uses multiple workers; with 3 keys it uses 9 workers.

---

## Summary (from latest results)

| Metric | Value |
|--------|--------|
| **Total URLs audited** | 137* |
| **Success** | 137 |
| **Errors** | 0 |
| **Perfect 100/100 (all 4 categories)** | 85/137 (62%) |

\* Full sitemap has 289 URLs; re-run with `run_psi_audit.sh` to audit all.

### Scores by category (average)

| Category | Avg | Below 100 | Below 90 |
|----------|-----|-----------|----------|
| **Performance** | 98.1 | 52 | 8 |
| **Accessibility** | 100.0 | 1 | 0 |
| **Best Practices** | 100.0 | 0 | 0 |
| **SEO** | 100.0 | 0 | 0 |

### Pages with any score &lt; 100 (worst first)

| Perf | A11y | BP | SEO | Path |
|------|------|-----|-----|------|
| 66 | 100 | 100 | 100 | /marketing-cloud-engagement-admin-study-guide |
| 74 | 100 | 100 | 100 | /certifications/omnistudio-developer |
| 77 | 100 | 100 | 100 | /system-architect-vs-application-architect |
| 80 | 100 | 100 | 100 | /how-to-study-for-salesforce-certification |
| 82 | 100 | 100 | 100 | /mulesoft-integration-architect-study-guide |
| 88 | 98 | 100 | 100 | /certifications/role/designer |
| 88 | 100 | 100 | 100 | /data-cloud-vs-marketing-cloud |
| 89 | 100 | 100 | 100 | /adm-201-study-guide |
| … | | | | *(52 total with at least one &lt; 100)* |

### Top failing audits (across all pages)

| # Pages | Audit |
|--------:|-------|
| 137 | Render blocking requests |
| 137 | Network dependency tree |
| 137 | Legacy JavaScript |
| 135 | Reduce unused JavaScript |
| 36 | Max Potential First Input Delay |
| 18 | Total Blocking Time |
| 13 | Reduce JavaScript execution time |
| 12 | Forced reflow |
| 11 | Minimize main-thread work |

---

## Takeaways

- **SEO, Best Practices, Accessibility:** Effectively 100 across the set; no action required for core SEO/Lighthouse categories.
- **Performance:** 8 pages below 90; 52 below 100. Main drivers: render-blocking resources, network dependency chain, legacy/unused JavaScript. Consider deferring/inlining critical CSS/JS and trimming unused script for the worst-performing pages.
