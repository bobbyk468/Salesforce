# SEO Progress Checklist – trailblazeprep.com

Use this to compare against audits (e.g. SEOptimer). **Code changes are done**; some items need you to set env vars or do one-time setup.

**→ For detailed step-by-step instructions:** see **[NEXT-STEPS-GUIDE.md](./NEXT-STEPS-GUIDE.md)** (GA4, Search Console, Bing, social links, link building).

---

## Week 1 – Technical fixes (in code)

| Item | Target | Status in code | You do |
|------|--------|----------------|--------|
| **Title tag length** | 50–60 chars | ✅ ~52 chars: "Salesforce Cert Practice & Study Guides \| Trailblaze Prep" | Deploy if not live yet |
| **Meta description** | 120–160 chars | ✅ ~130 chars | Deploy if not live yet |
| **Google Analytics** | Installed | ✅ Component added; loads when env is set | In Vercel: add `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`, redeploy |
| **llms.txt** | For AI/LLM | ✅ `public/llms.txt` at `/llms.txt` | Deploy if not live yet |

**Note:** SEOptimer may show cached results. After deploy, use “View Page Source” to confirm title/description; visit `https://trailblazeprep.com/llms.txt` to confirm llms.txt.

---

## Week 2–4 – Setup & discovery

| Item | Status | You do |
|------|--------|--------|
| Submit sitemap to Google Search Console | ⬜ | Add property, submit `https://trailblazeprep.com/sitemap.xml` |
| Submit sitemap to Bing Webmaster Tools | ⬜ | Add site, submit sitemap URL |
| Social profiles (Facebook, X, LinkedIn, YouTube) | ⬜ | Create pages; add URLs to `src/lib/constants.ts` → `SOCIAL_LINKS` |

---

## Month 2–6 – Traffic & authority

| Item | Status | You do |
|------|--------|--------|
| Backlinks (guest posts, directories, Trailblazer community) | ⬜ | Content/outreach (no code change) |
| Facebook Pixel (optional) | ⬜ | Add Pixel ID when ready; we can add script component |
| Local Business Schema (optional) | ⬜ | Only if you have physical address/phone |

---

## Already strong (no action needed)

- On-page SEO (titles, descriptions, headings)
- Schema.org (Organization, WebSite, FAQPage, Course, BreadcrumbList)
- Open Graph & Twitter Cards
- Canonical tags, sitemap.xml, robots.txt
- SSL/HTTPS, mobile viewport
- Image alt / accessibility
- Fast load (Vercel)

---

*Last updated: Jan 2025. After changing `SOCIAL_LINKS` or adding GA ID, redeploy for changes to go live.*
