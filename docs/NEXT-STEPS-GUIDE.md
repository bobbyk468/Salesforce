# Next Steps Guide – trailblazeprep.com

Step-by-step instructions for analytics, search console, Bing, social profiles, and link building after your site is live.

**Your live URL:** `https://trailblazeprep.com` (use `https://www.trailblazeprep.com` if that’s your canonical)

---

## Part 1: Google Analytics 4 (GA4)

**Goal:** See how many people visit, which pages they view, and where they come from.

### 1.1 Create a Google Analytics 4 property

1. Go to **https://analytics.google.com** and sign in with your Google account.
2. Click **Admin** (gear icon, bottom-left).
3. In the **Property** column, click **Create Property**.
4. **Property name:** e.g. `Trailblaze Prep`.
5. **Reporting time zone:** Choose your time zone (e.g. your country).
6. **Currency:** Choose your currency.
7. Click **Next** → choose **Industry** and **Business size** (or skip) → **Create**.
8. Accept **Terms of Service** if prompted.

### 1.2 Create a Web data stream

1. Under **Property**, click **Data streams**.
2. Click **Add stream** → **Web**.
3. **Website URL:** `https://trailblazeprep.com`  
   (Use `https://www.trailblazeprep.com` if that’s the URL you use.)
4. **Stream name:** e.g. `Trailblaze Prep website`.
5. Leave **Enhanced measurement** on (page views, scrolls, outbound clicks, etc.).
6. Click **Create stream**.

### 1.3 Copy your Measurement ID

1. On the stream details page you’ll see **Measurement ID** in the form `G-XXXXXXXXXX`.
2. Copy it (e.g. `G-ABC123XYZ`).

### 1.4 Add the Measurement ID to Vercel

1. Go to **https://vercel.com** → your **Trailblaze Prep** project.
2. Open **Settings** → **Environment Variables**.
3. Click **Add New**.
   - **Name:** `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value:** paste your Measurement ID (e.g. `G-ABC123XYZ`).
   - **Environment:** check **Production** (and **Preview** if you want GA on preview URLs).
4. Click **Save**.

### 1.5 Redeploy so GA loads on the site

1. In Vercel, go to **Deployments**.
2. Open the **⋯** menu on the latest deployment → **Redeploy**.
3. Wait for the build to finish.

**Verify:** Open your site, then in GA4 go to **Reports** → **Realtime**. You should see at least one active user (you) within a few minutes.

---

## Part 2: Google Search Console (GSC)

**Goal:** See how Google indexes your site and which queries bring traffic. Submit your sitemap.

### 2.1 Add a property (URL prefix method)

1. Go to **https://search.google.com/search-console** and sign in.
2. Click **Add property**.
3. Choose **URL prefix** (not Domain).
4. Enter: `https://trailblazeprep.com`  
   (If you use www, use `https://www.trailblazeprep.com` instead and stick to one.)
5. Click **Continue**.

### 2.2 Verify ownership

**Option A – HTML tag (easiest)**

1. Google shows **Verify ownership** with several methods.
2. Select **HTML tag**.
3. Copy the meta tag, e.g.  
   `<meta name="google-site-verification" content="ABC123xyz..." />`
4. In your project, open **`src/app/layout.tsx`**.
5. In the `metadata` export, add (or merge into) `other`:
   - Key: `google-site-verification`
   - Value: the `content` value only (e.g. `ABC123xyz...`).

   Example – if your export already has `other: { 'article:published_time': '...', 'article:modified_time': '...' }`, add:
   - `'google-site-verification': 'ABC123xyz...'` (use your actual value).

6. Save, commit, push, and wait for Vercel to deploy.
7. Back in Search Console, click **Verify**.

**Option B – DNS (if you prefer)**

1. In GSC, choose **Domain name provider** or **DNS record**.
2. Add the TXT (or CNAME) record at your domain registrar exactly as shown.
3. Wait for DNS to propagate (minutes to hours), then click **Verify**.

### 2.3 Submit your sitemap

1. In Search Console, open your property.
2. In the left sidebar, click **Sitemaps** (under “Indexing”).
3. Under **Add a new sitemap**, enter: `sitemap.xml`
4. Click **Submit**.

Google will start crawling. Status may show “Couldn’t fetch” for a short time; it usually turns to “Success” after a few days.

### 2.4 (Optional) Request indexing for the homepage

1. At the top of GSC, use the **URL inspection** bar.
2. Enter `https://trailblazeprep.com` and press Enter.
3. When the URL is inspected, click **Request indexing** so the homepage is queued for crawling sooner.

---

## Part 3: Bing Webmaster Tools

**Goal:** Get your site indexed on Bing and see Bing search stats.

### 3.1 Add your site

1. Go to **https://www.bing.com/webmasters** and sign in (Microsoft account).
2. Click **Add a site**.
3. Enter: `https://trailblazeprep.com` (or your www URL).
4. Click **Add**.

### 3.2 Verify ownership

**Option A – Import from GSC (easiest if GSC is already verified)**

1. Choose **Import from Google Search Console**.
2. Sign in with the same Google account you use for GSC.
3. Select the property that matches trailblazeprep.com.
4. Click **Authorize** and complete the flow. Bing will verify automatically.

**Option B – XML file**

1. Download the verification file (e.g. `BingSiteAuth.xml`).
2. Place it in your project under **`public/`** (e.g. `public/BingSiteAuth.xml`).
3. Deploy. The file will be at `https://trailblazeprep.com/BingSiteAuth.xml`.
4. In Bing, click **Verify**.

**Option C – Meta tag**

1. Copy the meta tag Bing gives you.
2. Add the `content` value to your layout metadata (same idea as GSC verification in 2.2).
3. Deploy and click **Verify** in Bing.

### 3.3 Submit sitemap

1. In Bing Webmaster Tools, open your site.
2. Go to **Sitemaps** (left menu).
3. Under **Submit a sitemap**, enter: `https://trailblazeprep.com/sitemap.xml`
4. Click **Submit**.

---

## Part 4: Social media profiles and links on the site

**Goal:** Create profiles for Trailblaze Prep and add their URLs so schema and (optionally) footer stay correct.

### 4.1 Create accounts (pick what you’ll use)

- **LinkedIn:** Create a **Company Page** for “Trailblaze Prep” (linkedin.com/company).
- **X (Twitter):** Create an account or use an existing one for the brand.
- **Facebook:** Create a **Page** (not personal profile) for Trailblaze Prep.
- **YouTube:** Create a channel (e.g. for study tips or walkthroughs).
- **Instagram:** Create a business account if you’ll use it.

You don’t need all of them; start with one or two (e.g. LinkedIn + X).

### 4.2 Add profile URLs to your codebase

1. Open **`src/lib/constants.ts`** in your project.
2. Find the **`SOCIAL_LINKS`** array.
3. Add the full URLs of the profiles you created. Remove the `//` and replace placeholders.

Example:

```ts
export const SOCIAL_LINKS: string[] = [
  'https://www.linkedin.com/company/trailblazeprep',
  'https://twitter.com/trailblazeprep',
  // 'https://www.facebook.com/trailblazeprep',
  // 'https://www.youtube.com/@trailblazeprep',
  // 'https://www.instagram.com/trailblazeprep',
]
```

4. Save, commit, and push. After deploy:
   - **Organization schema** will include these in `sameAs` (good for SEO).
   - If your **Footer** (or header) uses `SOCIAL_LINKS`, those links will appear there too.

### 4.3 Optional: add social icons in the footer

If your footer doesn’t already show social links, we can add a row of icons (LinkedIn, X, etc.) that use `SOCIAL_LINKS`. Say “add social icons to footer” and we can do that.

---

## Part 5: Link building (backlinks)

**Goal:** Get other sites to link to trailblazeprep.com so search engines see your site as more trusted.

### 5.1 Safe, free ways to start

1. **Trailblazer Community (trailblazer.me)**  
   - Participate in certification or study groups.  
   - When it’s helpful, share your site (e.g. “I use Trailblaze Prep for weightage and practice questions”).  
   - Don’t spam; focus on being useful.

2. **Salesforce-related directories and resource lists**  
   - Look for “Salesforce certification resources”, “ADM-201 study”, “Salesforce exam prep” lists.  
   - If they accept submissions, add Trailblaze Prep with a short description and your URL.

3. **Your own profiles**  
   - Add trailblazeprep.com to your LinkedIn profile (Website field).  
   - Add it in your Twitter/X bio, YouTube channel “About”, etc.  
   - These count as backlinks from known platforms.

### 5.2 Guest posts and partnerships

1. **Blogs and sites** that cover Salesforce, certifications, or career development:  
   - Offer a short guest post (e.g. “How I prepared for the Platform Administrator exam”) and mention Trailblaze Prep where it fits.  
   - Or ask if they’d add your site to a “Resources” or “Study materials” page.

2. **Educators / bootcamps**  
   - If you know instructors or programs that teach Salesforce, suggest adding your site as a practice resource.

### 5.3 What to avoid

- Buying links or using “link farms”.
- Mass submitting to low-quality directories.
- Posting the same “check out my site” message everywhere.

**Realistic target:** 10–20 quality backlinks in the first 3–6 months (from community, profiles, a few guest posts or resource pages).

---

## Quick reference

| Step | Where | What to do |
|------|--------|------------|
| **GA4** | analytics.google.com → Admin → Data streams | Create Web stream, copy Measurement ID |
| **GA4 on site** | Vercel → Settings → Environment Variables | Add `NEXT_PUBLIC_GA_MEASUREMENT_ID`, redeploy |
| **GSC** | search.google.com/search-console | Add property (URL prefix), verify (HTML tag or DNS), submit `sitemap.xml` |
| **Bing** | bing.com/webmasters | Add site, verify (import from GSC or file/meta), submit `https://trailblazeprep.com/sitemap.xml` |
| **Social** | `src/lib/constants.ts` | Add real URLs to `SOCIAL_LINKS`, commit & push |
| **Backlinks** | Trailblazer, directories, guest posts | Use the Part 5 list; focus on helpful, relevant links |

---

## If you need the GSC verification meta tag in code

If you chose the **HTML tag** method for Google Search Console, you need the verification value in your layout. Example:

In **`src/app/layout.tsx`**, in the `metadata` object, ensure `other` includes the key Google gives you. Often it looks like:

```ts
other: {
  'article:published_time': '2025-01-01T00:00:00Z',
  'article:modified_time': '2025-01-30T00:00:00Z',
  'google-site-verification': 'YOUR_CODE_FROM_GOOGLE_HERE',
},
```

Replace `YOUR_CODE_FROM_GOOGLE_HERE` with the `content` value from the meta tag (the long string, not the full tag). Then deploy and click **Verify** in GSC.

---

*Last updated: Jan 2025. Use this guide in order: GA4 → GSC → Bing → Social → Link building.*
