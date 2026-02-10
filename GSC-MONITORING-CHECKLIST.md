# Google Search Console Monitoring Checklist

## 📊 **WEEK 1-2: Initial Monitoring**

### **Day 1-3: Verify Deployment**

- [ ] **Check Indexing Status**
  - Go to GSC → Coverage → Pages
  - Filter: `/certifications/`
  - Verify all 95 pages are indexed
  - Check for any new errors

- [ ] **Submit Updated Sitemap**
  - Go to GSC → Sitemaps
  - Submit: `https://www.trailblazeprep.com/sitemap.xml`
  - Verify sitemap is processed successfully

- [ ] **Request Reindexing (Key Pages)**
  - Go to GSC → URL Inspection
  - Request indexing for:
    - `/certifications/administrator`
    - `/certifications/app-builder`
    - `/certifications/business-analyst`
    - `/certifications/sales-cloud`
    - `/certifications/developer-1`
  - Wait 24-48 hours for processing

---

### **Day 4-7: Baseline Metrics**

- [ ] **Record Current Performance**
  - Go to GSC → Performance
  - Filter: `/certifications/`
  - Export data for:
    - Total impressions
    - Total clicks
    - Average CTR
    - Average position
  - Save as baseline for comparison

- [ ] **Identify Top Pages**
  - Sort by impressions (descending)
  - List top 20 pages
  - Note current CTR for each
  - These are your priority pages to monitor

- [ ] **Identify Cost Query Pages**
  - Filter queries containing: "cost", "fee", "price"
  - List pages with high impressions but 0 clicks
  - These should see biggest CTR improvements

---

## 📈 **WEEK 2-4: Track Improvements**

### **Weekly Checks:**

- [ ] **CTR Improvements**
  - Compare current CTR vs baseline
  - Look for pages with +20%+ CTR increase
  - Note which pages improved most

- [ ] **Rich Snippets Appearances**
  - Go to GSC → Enhancements → FAQ
  - Check if FAQ rich snippets are appearing
  - Note which pages have rich snippets

- [ ] **Position Improvements**
  - Track average position changes
  - Look for pages moving into top 10
  - Note pages moving into top 3

- [ ] **Query Performance**
  - Filter queries containing: "exam guide 2026"
  - Filter queries containing: "[cert name] cost"
  - Filter queries containing: "practice test"
  - Track CTR improvements for these queries

---

## 🎯 **MONTH 1: Deep Analysis**

### **Week 4 Analysis:**

- [ ] **Overall Performance**
  - Total impressions: [baseline] → [current] = [change]
  - Total clicks: [baseline] → [current] = [change]
  - Average CTR: [baseline]% → [current]% = [+X%]
  - Average position: [baseline] → [current] = [change]

- [ ] **Top Performing Pages**
  - List top 10 pages by CTR improvement
  - Analyze what made them successful
  - Apply learnings to other pages

- [ ] **Underperforming Pages**
  - List pages with low CTR despite high impressions
  - Check if titles need further optimization
  - Consider A/B testing different title formats

- [ ] **Cost Query Performance**
  - Compare CTR for cost queries (before vs after)
  - Expected: +30-50% CTR improvement
  - Note which certs see biggest gains

---

## 📋 **MONTH 2-3: Optimization**

### **Ongoing Monitoring:**

- [ ] **Weekly CTR Check**
  - Monitor overall CTR trends
  - Identify any declining pages
  - Investigate and fix issues

- [ ] **Monthly Position Review**
  - Track ranking improvements
  - Identify new ranking opportunities
  - Update content for pages stuck at positions 11-20

- [ ] **Query Expansion**
  - Look for new high-impression queries
  - Create content or update pages to target these
  - Monitor CTR for new query types

---

## 🔍 **KEY METRICS TO TRACK**

### **Primary Metrics:**

1. **CTR (Click-Through Rate)**
   - Target: +50-100% improvement
   - Monitor: Weekly
   - Action: If CTR not improving, check title/meta optimization

2. **Average Position**
   - Target: Move into top 10 for key queries
   - Monitor: Weekly
   - Action: If stuck, improve content quality and backlinks

3. **Rich Snippets**
   - Target: FAQ rich snippets appearing for 20+ pages
   - Monitor: Weekly
   - Action: If not appearing, verify FAQ schema is correct

4. **Cost Query CTR**
   - Target: +30-50% CTR for "cost" queries
   - Monitor: Weekly
   - Action: If not improving, verify cost is visible in titles

### **Secondary Metrics:**

5. **Bounce Rate** (Google Analytics)
   - Target: <50% (users finding what they need)
   - Monitor: Weekly
   - Action: If high, improve page content and CTAs

6. **Time on Page** (Google Analytics)
   - Target: >2 minutes (users engaging with content)
   - Monitor: Weekly
   - Action: If low, improve content quality

7. **Conversion Rate** (Practice Test Clicks)
   - Target: >5% of visitors click "Start Free Practice Test"
   - Monitor: Weekly
   - Action: If low, improve CTA placement/design

---

## 📊 **EXPECTED RESULTS TIMELINE**

### **Week 1-2:**
- ✅ Pages reindexed with new titles
- ✅ Rich snippets start appearing (if FAQ schema correct)
- ⚠️ CTR improvements may be minimal (Google needs time to update)

### **Week 3-4:**
- ✅ CTR improvements start showing (+20-30%)
- ✅ Position improvements for some queries
- ✅ Rich snippets appearing for FAQ queries

### **Month 2:**
- ✅ Significant CTR improvements (+50-70%)
- ✅ More pages ranking in top 10
- ✅ Featured snippets appearing for some queries

### **Month 3:**
- ✅ Maximum CTR improvements (+70-100%)
- ✅ Top 3 positions for many long-tail queries
- ✅ Consistent rich snippet appearances

---

## 🚨 **RED FLAGS TO WATCH FOR**

### **If CTR Not Improving:**

1. **Check Title Rendering**
   - View page source
   - Verify titles are correct
   - Check for any caching issues

2. **Check Meta Descriptions**
   - View page source
   - Verify meta descriptions exist
   - Check if Google is using custom descriptions

3. **Check FAQ Schema**
   - View page source
   - Verify FAQ schema is present
   - Test with Google Rich Results Test tool

4. **Check Competition**
   - Search for your target queries
   - See what competitors are showing
   - Adjust titles/descriptions if needed

---

## ✅ **SUCCESS CRITERIA**

### **After 1 Month:**
- [ ] CTR improved by +30%+ overall
- [ ] Cost query CTR improved by +40%+
- [ ] 10+ pages ranking in top 10
- [ ] FAQ rich snippets appearing for 5+ pages

### **After 3 Months:**
- [ ] CTR improved by +70%+ overall
- [ ] Cost query CTR improved by +80%+
- [ ] 30+ pages ranking in top 10
- [ ] FAQ rich snippets appearing for 20+ pages
- [ ] Featured snippets appearing for some queries

---

## 🎯 **QUICK REFERENCE**

### **GSC Navigation:**
- **Performance:** GSC → Performance → Pages (filter: `/certifications/`)
- **Coverage:** GSC → Coverage → Pages (filter: `/certifications/`)
- **Enhancements:** GSC → Enhancements → FAQ
- **URL Inspection:** GSC → URL Inspection (enter URL)

### **Key Filters:**
- **Pages:** Filter by `/certifications/`
- **Queries:** Filter by "cost", "exam guide", "practice test"
- **Date Range:** Compare last 28 days vs previous 28 days

### **Export Data:**
- Export performance data weekly
- Keep baseline comparison data
- Track improvements in spreadsheet

---

## 📝 **MONITORING TEMPLATE**

### **Weekly Report Template:**

```
Week [X] GSC Report - Certification Pages

Overall Performance:
- Impressions: [number] (change: +/-X%)
- Clicks: [number] (change: +/-X%)
- CTR: [X]% (change: +/-X%)
- Avg Position: [X] (change: +/-X)

Top Improvements:
1. [Page] - CTR: [X]% → [Y]% (+Z%)
2. [Page] - CTR: [X]% → [Y]% (+Z%)
3. [Page] - CTR: [X]% → [Y]% (+Z%)

Cost Query Performance:
- Total cost queries: [number]
- CTR: [X]% (change: +/-X%)
- Top performing: [query] - CTR: [X]%

Rich Snippets:
- FAQ rich snippets: [X] pages
- New this week: [X] pages

Action Items:
- [ ] [Action item 1]
- [ ] [Action item 2]
```

---

**Use this checklist to track your progress and ensure maximum ROI from the SEO improvements!** 🚀
