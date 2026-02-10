# Quick Verification Guide - All 95 Pages

## ⚡ **5-MINUTE VERIFICATION CHECKLIST**

### **Step 1: Verify Title Format (30 seconds)**

1. Open any certification page (e.g., `/certifications/administrator`)
2. Check browser tab title
3. Should see: `[Cert Name] Exam Guide 2026 | $[cost] | Trailblaze Prep`
4. ✅ If yes → Title format is correct

---

### **Step 2: Verify CTA & Exam Fees (1 minute)**

1. Scroll to top of page (after intro)
2. Should see:
   - ✅ "Start Free Practice Test" button
   - ✅ "Download Study Plan" button
   - ✅ "Exam Fees & Registration" section with cost
3. ✅ If yes → CTA and Fees sections are present

---

### **Step 3: Verify Meta Description (2 minutes)**

1. **View Page Source:**
   - Right-click → "View Page Source" (or `Ctrl+U` / `Cmd+U`)
2. **Search for meta description:**
   - Press `Ctrl+F` / `Cmd+F`
   - Search: `meta name="description"`
3. **Should see:**
   ```html
   <meta name="description" content="Prepare for the Salesforce Certified [Cert Name] certification (2026). $[cost] exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.">
   ```
4. ✅ If yes → Meta description is present

---

### **Step 4: Verify FAQ Schema (2 minutes)**

1. **Still in Page Source:**
2. **Search for FAQ schema:**
   - Press `Ctrl+F` / `Cmd+F`
   - Search: `"@type": "FAQPage"`
3. **Should see:**
   ```html
   <script type="application/ld+json">
   {
     "@context": "https://schema.org",
     "@type": "FAQPage",
     "mainEntity": [...]
   }
   </script>
   ```
4. ✅ If yes → FAQ schema is present

---

## ✅ **VERIFICATION RESULTS**

### **If All 4 Steps Pass:**
✅ **Page is 100% optimized!**

### **If Step 3 or 4 Fails:**
⚠️ **Check deployment/caching:**
- Hard refresh: `Ctrl+Shift+R` / `Cmd+Shift+R`
- Check if latest commits are deployed
- Try incognito/private window

---

## 🎯 **BULK VERIFICATION (Sample 10 Pages)**

Check 1-2 pages from each category:

**Associate (1 page):**
- [ ] Platform Foundations

**Administrator (2 pages):**
- [ ] Administrator
- [ ] App Builder

**Developer (2 pages):**
- [ ] Developer I
- [ ] JavaScript Developer I

**Consultant (2 pages):**
- [ ] Sales Cloud
- [ ] Service Cloud

**Marketing (1 page):**
- [ ] Email Specialist

**Architect (1 page):**
- [ ] Data Architect

**Tableau (1 page):**
- [ ] Tableau Data Analyst

**If all pass → Assume all 95 pages are correct!**

---

## 📋 **QUICK REFERENCE**

### **Title Format:**
- ✅ High-cost-query: `[Cert] Exam Guide 2026 | $[cost]`
- ✅ Other pages: `[Cert] Exam Guide 2026`

### **Meta Description:**
- ✅ Includes: cert name, cost, year, keywords
- ✅ Length: 140-160 characters

### **FAQ Schema:**
- ✅ Type: `FAQPage`
- ✅ Location: `<head>` section
- ✅ Format: JSON-LD

---

**Use this guide to quickly verify any page!** ⚡
