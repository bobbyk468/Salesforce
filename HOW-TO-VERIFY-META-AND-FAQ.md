# How to Verify Meta Descriptions & FAQ Schema

## ⚠️ **IMPORTANT: These Are in `<head>`, Not Visible in Rendered HTML**

Meta descriptions and FAQ schema are **invisible** in the browser's rendered view. You **must check the page source** to see them.

---

## ✅ **STEP 1: Verify Meta Description**

### **Method 1: View Page Source (Recommended)**

1. Open any certification page (e.g., `/certifications/administrator`)
2. **Right-click** → **"View Page Source"** (or press `Ctrl+U` / `Cmd+U`)
3. Press `Ctrl+F` / `Cmd+F` to open search
4. Search for: `meta name="description"`
5. You should see:

```html
<meta name="description" content="Prepare for the Salesforce Certified Platform Administrator (ADM-201) certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.">
```

### **Method 2: Browser DevTools**

1. Open any certification page
2. Press `F12` (or `Cmd+Option+I` on Mac) to open DevTools
3. Go to **"Elements"** tab
4. Expand `<head>` section
5. Look for `<meta name="description">` tag

### **Method 3: Check Network Response**

1. Open DevTools (`F12`)
2. Go to **"Network"** tab
3. Refresh the page
4. Click on the document request (usually first item)
5. Go to **"Response"** tab
6. Search for `meta name="description"`

---

## ✅ **STEP 2: Verify FAQ Schema (JSON-LD)**

### **Method 1: View Page Source (Recommended)**

1. Open any certification page
2. **Right-click** → **"View Page Source"** (or `Ctrl+U` / `Cmd+U`)
3. Press `Ctrl+F` / `Cmd+F` to open search
4. Search for: `"@type": "FAQPage"`
5. You should see:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is covered on the Salesforce Platform Administrator exam?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The ADM-201 exam covers configuration, security, automation..."
    }
  }]
}
</script>
```

### **Method 2: Browser DevTools**

1. Open any certification page
2. Press `F12` to open DevTools
3. Go to **"Elements"** tab
4. Expand `<head>` section
5. Look for `<script type="application/ld+json">` tags
6. You should see multiple JSON-LD scripts including FAQPage

### **Method 3: Google Rich Results Test**

1. Go to: https://search.google.com/test/rich-results
2. Enter your page URL (e.g., `https://www.trailblazeprep.com/certifications/administrator`)
3. Click **"Test URL"**
4. Look for **"FAQPage"** in the detected structured data

---

## 🔍 **WHAT TO LOOK FOR**

### **Meta Description Should Include:**
- ✅ Exact certification name
- ✅ Exam code (if applicable, e.g., ADM-201)
- ✅ Exam cost ($200, $400, etc.)
- ✅ Year (2026)
- ✅ Keywords: "exam weightage", "syllabus", "prerequisites", "practice questions"
- ✅ Length: 140-160 characters

### **FAQ Schema Should Include:**
- ✅ `"@context": "https://schema.org"`
- ✅ `"@type": "FAQPage"`
- ✅ `"mainEntity"` array with questions
- ✅ Each question has `"@type": "Question"` and `"acceptedAnswer"`

---

## 📋 **VERIFICATION CHECKLIST**

For each certification page, verify:

- [ ] **Meta description exists** in page source
- [ ] **Meta description includes cost** (e.g., "$200 exam fee")
- [ ] **Meta description is 140-160 characters**
- [ ] **FAQ schema exists** in page source
- [ ] **FAQ schema has `"@type": "FAQPage"`**
- [ ] **FAQ schema has at least 2-3 questions**
- [ ] **All questions have answers**

---

## 🚨 **TROUBLESHOOTING**

### **If Meta Description Is Missing:**

1. Check that page exports: `export const metadata = getCertMetadata(slug)`
2. Verify `getCertMetaDescription(slug)` returns a string
3. Check browser cache (hard refresh: `Ctrl+Shift+R` / `Cmd+Shift+R`)

### **If FAQ Schema Is Missing:**

1. Check that page includes: `<CertPageSeo slug={slug} certTitle={...} />`
2. Verify `getCertFaqJsonLd(slug, certTitle)` returns valid JSON
3. Check browser cache (hard refresh)

### **If You See Auto-Generated Meta:**

- This means Next.js isn't rendering the custom description
- Check that `metadata` export is correct
- Verify the page is using App Router (not Pages Router)

---

## ✅ **EXPECTED RESULTS**

### **Administrator Page:**

**Meta Description:**
```html
<meta name="description" content="Prepare for the Salesforce Certified Platform Administrator (ADM-201) certification (2026). $200 exam fee, exam weightage, syllabus, prerequisites, and practice questions to help you pass.">
```

**FAQ Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is covered on the Salesforce Platform Administrator exam?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The ADM-201 exam covers..."
      }
    },
    {
      "@type": "Question",
      "name": "How much does the Salesforce Administrator certification cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The exam fee is $200..."
      }
    }
  ]
}
```

---

## 🎯 **QUICK VERIFICATION COMMAND**

If you have access to the server, you can verify via curl:

```bash
# Check meta description
curl -s https://www.trailblazeprep.com/certifications/administrator | grep -o '<meta name="description"[^>]*>'

# Check FAQ schema
curl -s https://www.trailblazeprep.com/certifications/administrator | grep -A 20 '"@type": "FAQPage"'
```

---

## 📊 **WHY THIS MATTERS**

### **Meta Descriptions:**
- **20-30% CTR improvement** when custom vs auto-generated
- Google uses them in search results
- Better match to user search intent

### **FAQ Schema:**
- **2-3x CTR increase** from rich snippets
- FAQ answers appear directly in search results
- Featured snippet opportunities
- Better search visibility

---

## ✅ **CONFIRMATION**

Both meta descriptions and FAQ schema **ARE implemented** in the code. They're just in the `<head>` section, which requires checking the page source to verify.

**Next Steps:**
1. View page source for any cert page
2. Search for `meta name="description"` → Should see custom description
3. Search for `"@type": "FAQPage"` → Should see FAQ schema JSON-LD

If you don't see them in the source, there may be a deployment issue or caching problem.
