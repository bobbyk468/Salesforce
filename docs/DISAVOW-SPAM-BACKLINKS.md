# Spam backlink profile — what the SEOptimer report found, and what to do

Date: 2026-11-07
Source: SEOptimer audit of trailblazeprep.com (homepage report, "Links" section)

## What the report shows

| Metric | Value |
| --- | --- |
| Referring domains | 221 |
| Backlinks to `trailblazeprep.com/` | 218 |
| Top anchor text | "Premium SEO Authority Links for trailblazeprep.com Websites and Businesses" — **280 backlinks** |
| Top referring TLDs | `.space` (44), `.website` (37), `.site` (32), `.shop` (31), other (77) |
| Domain Strength | 10 |

Almost every link lands on the same URL pattern across dozens of throwaway
domains:

```
http://<domain>/dir/domain-authority-backlinks-216628
```

Examples from the report: `highdrlinks.space`, `trafficforseo.com`,
`seocheckertool.online`, `freerankchecker.store`, `tokoseo.com`,
`largeseotools.com`, `instantlinkgenerator.website`.

That shared path, the commercial anchor text, and the disposable TLD mix are
the signature of an automated link-farm blast — not organic links. It is either
leftover from a paid "domain authority backlinks" package or unsolicited spam
aimed at the domain.

## Why it matters

The site's genuine backlink count is close to zero. The 280 farm links are
therefore the entire visible profile, which is why Domain Strength sits at 10
and the Links grade is D+. Google generally ignores links like these rather
than penalising for them, but an auditing tool cannot tell the difference, and
a profile that is ~97% link-farm is a bad look to any human reviewer too.

## What to do

1. **Do not buy more links.** If a package was purchased, cancel it. More of
   the same makes the ratio worse, not better.
2. **Export the full referring-domain list** from the SEOptimer dashboard
   (Links → Referring Domains → export). The audit PDF only prints the top 10
   of 221.
3. **Disavow.** Add every farm domain to the file below and upload it at
   <https://search.google.com/search-console/disavow-links> for the
   `trailblazeprep.com` property.
4. **Keep the real links.** Two referring pages in the report look genuine and
   must *not* be disavowed:
   - `certificationplanner.com`
   - `mentaraglobal.com`

## Starter disavow file

Save as `disavow.txt` (plain text, one directive per line) and extend it with
the full export before uploading.

```text
# Automated link-farm blast, anchor "Premium SEO Authority Links ..."
# All on the shared path /dir/domain-authority-backlinks-216628
domain:highdrlinks.space
domain:trafficforseo.com
domain:seocheckertool.online
domain:freerankchecker.store
domain:tokoseo.com
domain:largeseotools.com
domain:instantlinkgenerator.website

# Scraped-directory listing, no editorial value
domain:xploredomains.com
```

Disavowing is slow to show up — expect weeks before a tool re-crawls and the
numbers move. It does not create authority; it only stops the profile being
dominated by junk. Earning real links is the separate, longer job.
