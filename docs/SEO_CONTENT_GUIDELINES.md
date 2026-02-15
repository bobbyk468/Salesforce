# SEO Content Guidelines - Original Content for Google Ranking

## Why Original Content Matters

Google's search algorithm:
- **Penalizes duplicate content** - Pages with copied/scraped content rank lower or may not be indexed
- **Rewards unique content** - Original, valuable content ranks higher in search results
- **Requires substantial unique text** - Each page needs 500+ words of original content

---

## Content Originality Status

### ✅ **100% Original Content**

1. **Practice Questions** (`sampleQuestions` in each cert page)
   - ✅ Each certification has unique questions
   - ✅ Questions are written from scratch, not copied
   - ✅ Explanations are original
   - **Action**: Add comment header to each cert page:
     ```typescript
     /**
      * ORIGINAL PRACTICE QUESTIONS - Written specifically for this certification page.
      * These questions are NOT copied from other sources. Each question is original content
      * designed to test concepts covered in the [Cert Name] exam.
      */
     ```

2. **Exam Tips & Strategies** (`exam-prep-content-data.ts`)
   - ✅ Custom tips per certification (20+ certs have custom content)
   - ✅ Original study strategies
   - ✅ Unique prerequisites and focus areas
   - **Note**: Some certs use `DEFAULT_PREP` - consider expanding custom content

3. **Meta Descriptions**
   - ✅ Unique 140-160 character descriptions per certification
   - ✅ Includes cert-specific keywords
   - ✅ No duplication across pages

4. **Page Titles**
   - ✅ Unique titles per certification
   - ✅ Optimized for SEO (<60 chars)
   - ✅ Includes "Salesforce Certified" + exam code

5. **Certification Descriptions**
   - ✅ Unique description per certification page
   - ✅ Written specifically for each cert
   - ✅ Not copied from Salesforce or other sources

### ⚠️ **Based on Official Sources (But Original Presentation)**

1. **Exam Weightage Percentages**
   - Source: Official Salesforce exam outlines (publicly available)
   - Our contribution: Original section names, organization, visualization, analysis
   - **SEO Impact**: Low risk - factual data can be similar, but our presentation is unique

---

## Readability (SEO & UX)

SEO tools and users both benefit from **easy-to-read** content. Long sentences and dense paragraphs score as "Very Difficult" in readability audits and can hurt engagement and rankings.

### Guidelines

- **Short sentences** — Aim for 15–20 words or fewer when possible. Break long sentences into two.
- **Simple words** — Prefer common words (e.g. "use" instead of "utilize", "help" instead of "facilitate") unless the term is technical (e.g. exam codes).
- **Short paragraphs** — One main idea per paragraph. Use 2–4 sentences per block.
- **Lists over walls of text** — Use bullet or numbered lists for multiple items (tips, prerequisites, steps).
- **Subheadings** — Use H2/H3 so users and crawlers can scan (e.g. "What you get here", "Study strategy").

### Where we applied this

- **CertPageIntro** — Short intro sentences + "What you get here" list; shorter footer lines.
- **Home page** — Hero and section copy shortened; FAQ answers simplified.
- **About** — Paragraphs split; lists used for "Our approach" and originality.
- **ExamPrepContent** — Study strategy and "Why it matters" split into one sentence per paragraph; Exam Format list shortened.

When adding new copy (exam tips, descriptions, FAQs), keep sentences short and use lists where it makes sense.

---

## How to Verify Content Originality

### 1. **Check for Duplicate Content Online**

Use these tools:
- **Copyscape**: https://www.copyscape.com/
  - Paste a paragraph from your page
  - Check if it appears elsewhere online

- **Google Search**: Use quotes to search exact phrases
  ```
  "exact phrase from your content"
  ```

- **Screaming Frog SEO Spider**: 
  - Crawl your site
  - Check for duplicate content issues

### 2. **Verify Each Page Has Unique Content**

Run these checks:
```bash
# Check practice questions are unique per cert
grep -r "sampleQuestions" src/app/certifications/*/page.tsx | wc -l
# Should show unique questions per cert

# Check meta descriptions are unique
grep "administrator:" src/lib/cert-seo-data.ts
grep "app-builder:" src/lib/cert-seo-data.ts
# Should show different descriptions
```

### 3. **Content Length Check**

Each certification page should have:
- ✅ 500+ words of original content
- ✅ 5+ unique practice questions
- ✅ Unique exam tips and strategies
- ✅ Unique meta description
- ✅ Unique title

---

## Best Practices for Maintaining Originality

### ✅ **DO:**
- Write all practice questions from scratch
- Create unique exam tips based on your analysis
- Write original descriptions for each certification
- Use your own words and phrasing
- Add your own insights and recommendations

### ❌ **DON'T:**
- Copy practice questions from other study guides
- Copy-paste descriptions from Salesforce website
- Use identical content across multiple cert pages
- Scrape content from other exam prep sites
- Use AI-generated content without editing/verification

---

## Current Content Status

| Content Type | Status | Notes |
|-------------|--------|-------|
| Practice Questions | ✅ Original | Unique per certification |
| Exam Tips | ✅ Original | Custom content for 20+ certs |
| Meta Descriptions | ✅ Original | Unique per cert |
| Page Titles | ✅ Original | Unique per cert |
| Cert Descriptions | ✅ Original | Unique per cert |
| Exam Weightage | ⚠️ Based on official | But original presentation |
| FAQs | ⚠️ Templated | But cert-specific answers |

---

## Recommendations

1. **Expand Custom Exam Prep Content**
   - Currently: ~20 certs have custom content
   - Target: Custom content for all 89 certifications
   - Impact: More unique content = better SEO

2. **Add More Practice Questions**
   - Currently: 5 questions per cert
   - Target: 10-15 questions per cert
   - Impact: More original content, better user value

3. **Add Cert-Specific FAQs**
   - Currently: Template-based FAQs
   - Target: 1-2 unique FAQs per cert
   - Impact: More unique content per page

4. **Expand Intro Content**
   - Currently: Generic intro template
   - Target: Cert-specific intro variations
   - Impact: More unique content per page

---

## Structured Data for Original Content

We've added copyright information to Course schema:
```json
{
  "@type": "Course",
  "copyrightHolder": { "@type": "Organization", "name": "Trailblaze Prep" },
  "copyrightYear": 2025,
  "license": "https://creativecommons.org/licenses/by-nc-nd/4.0/"
}
```

This signals to search engines that content is original and copyrighted.

---

## Monitoring & Maintenance

1. **Regular Content Audits**
   - Check for duplicate content quarterly
   - Verify new content is original
   - Update content freshness dates

2. **Google Search Console**
   - Monitor for duplicate content warnings
   - Check indexing status
   - Review search performance

3. **Content Updates**
   - Update content when Salesforce releases new exam versions
   - Refresh practice questions periodically
   - Update exam weightage when official outlines change

---

**Last Updated**: January 2025
