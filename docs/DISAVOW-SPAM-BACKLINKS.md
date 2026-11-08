# Spam backlinks: do not disavow

**Checked in Google Search Console on 2026-11-08. Conclusion: take no action.**

## What Search Console actually shows

| | |
| --- | --- |
| Total external links | **12** |
| Linking domains | **6** |
| Manual actions | **No issues detected** |

The complete list of domains Google knows link to this site:

| Domain | Links |
| --- | --- |
| x.com | 6 |
| github.com | 2 |
| atacglobalcx.com | 1 |
| certificationplanner.com | 1 |
| mattfrancis.me | 1 |
| scamadviser.com | 1 |

**Not one link-farm domain appears.** None of `highdrlinks.space`,
`trafficforseo.com`, `seocheckertool.online`, `freerankchecker.store`,
`tokoseo.com`, `largeseotools.com` or `instantlinkgenerator.website` is in
Google's index for this site.

## Why the earlier advice here was wrong

An earlier version of this document recommended exporting 221 referring
domains from SEOptimer and uploading a disavow file. That was based entirely
on SEOptimer's own crawl: 221 referring domains, 280 backlinks anchored
"Premium SEO Authority Links for trailblazeprep.com Websites and Businesses",
Domain Strength 10, Links grade D+.

Those are SEOptimer's numbers from SEOptimer's index. Google's index — the only
one that affects rankings — contains 12 links from 6 domains. Either Google
never crawled the farm links, or it discarded them. Either way they are not
counted, so there is nothing for a disavow file to remove.

## Why uploading one anyway would be a mistake

Google's guidance is to disavow only when **both** of these hold:

1. the site has a considerable number of spammy or artificial inbound links, **and**
2. those links have caused, or are likely to cause, a manual action.

Neither holds. Manual actions reports "No issues detected", and Google sees no
spam links at all. Uploading a disavow file would achieve nothing against links
Google already ignores, while carrying real downside: disavowal is applied by
domain, and a mistake throws away a genuine link permanently until the file is
corrected. Google's own documentation warns the tool "can potentially harm your
site's performance in Google Search results" if used incorrectly.

## What the D+ Links grade actually means

It is SEOptimer scoring a link profile Google does not see. The underlying fact
it reflects is true and worth acting on: **this site has almost no real inbound
links** — six domains, two of which are its own X account and a GitHub
reference. That is an off-page problem solved by earning links, not by filing
paperwork about spam. See the link-building notes in the project memory.

## If this changes

Re-check before acting. The trigger for revisiting is a **manual action
appearing in Search Console**, or spam domains showing up in the Links report —
not a third-party tool's score.
