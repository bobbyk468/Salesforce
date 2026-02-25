# QUICK START CHECKLIST - Week 1 (Feb 26 - Mar 4, 2026)

## TODAY/TOMORROW: Get Started (2-3 hours)

### CONTENT TRACK: Difficulty Badges

**STEP 1: Add Data Structure (30 min)**
```
Location: src/lib/certifications-data.ts

Find: Line where CATEGORY_ORDER is defined (around line 20-50)
Add this code AFTER CATEGORY_ORDER (before next export):

---BEGIN COPY---

/** Difficulty level for each certification. Used for badge display + filtering. */
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert'

export const CERT_DIFFICULTY_LEVELS: Record<string, DifficultyLevel> = {
  // Beginner (Associate/Foundations)
  'platform-foundations': 'beginner',
  'ai-associate': 'beginner',
  'marketing-cloud-engagement-foundations': 'beginner',
  'mulesoft-integration-foundations': 'beginner',
  'sales-foundations': 'beginner',

  // Intermediate (Admin/Developer/Consultant - most common)
  'administrator': 'intermediate',
  'advanced-administrator': 'intermediate',
  'app-builder': 'intermediate',
  'business-analyst': 'intermediate',
  'developer-1': 'intermediate',
  'developer-2': 'intermediate',
  'sales-cloud': 'intermediate',
  'service-cloud': 'intermediate',
  'email-specialist': 'intermediate',
  'pardot-specialist': 'intermediate',
  'pardot-consultant': 'intermediate',
  'marketing-cloud-consultant': 'intermediate',
  'cpq-administrator': 'intermediate',
  'experience-cloud': 'intermediate',
  'slack-administrator': 'intermediate',
  'slack-developer': 'intermediate',
  'ux-designer': 'intermediate',
  'data-cloud-consultant': 'intermediate',
  'revenue-cloud-consultant': 'intermediate',
  'crm-analytics-einstein-discovery-consultant': 'intermediate',
  'mulesoft-developer-i': 'intermediate',
  'mulesoft-developer-ii': 'intermediate',
  'tableau-data-analyst': 'intermediate',
  'strategy-designer': 'intermediate',

  // Advanced (Architect path / Complex topics)
  'application-architect': 'advanced',
  'system-architect': 'advanced',
  'integration-architect': 'advanced',
  'data-architect': 'advanced',
  'sharing-visibility-architect': 'advanced',
  'identity-access-management-architect': 'advanced',
  'dev-lifecycle-deployment-architect': 'advanced',
  'b2b-solution-architect': 'advanced',
  'b2c-commerce-architect': 'advanced',
  'heroku-architect': 'advanced',
  'mulesoft-platform-architect': 'advanced',
  'mulesoft-integration-architect': 'advanced',
  'mulesoft-catalyst-consultant': 'advanced',
  'tableau-architect': 'advanced',
  'omnistudio-consultant': 'advanced',
  'omnistudio-developer': 'advanced',
  'javascript-developer-i': 'advanced',
  'b2c-commerce-developer': 'advanced',
  'industries-cpq-developer': 'advanced',
  'marketing-cloud-engagement-developer': 'advanced',
  'mulesoft-hyperautomation-developer': 'advanced',

  // Expert (CTA level / Highest difficulty)
  'technical-architect': 'expert',
  'technical-architect-evaluation': 'expert',
  'technical-architect-review-board': 'expert',

  // All others default to intermediate
}

export function getCertDifficultyLevel(slug: string): DifficultyLevel {
  return CERT_DIFFICULTY_LEVELS[slug] ?? 'intermediate'
}

---END COPY---

Save file.
```

**ACTION:** Now run: `npm run build` to verify no errors. Should take 30 sec.

---

### LINK TRACK: X Premium Setup

**STEP 2: Verify Account Setup (15 min)**
- [ ] Go to https://x.com/i/premium_sign_up (if not already done)
- [ ] Your account: @trailblazeprep
- [ ] Log into X Ads Manager: https://ads.twitter.com/
- [ ] Verify billing method is set
- [ ] Set budget alert for $300/month
- [ ] Enable Analytics dashboard (Settings → Analytics tab)

**STEP 3: Prepare Ad Copy (45 min)**
- [ ] Create a Notion or Google Doc with 5 tweet variations
- [ ] Copy from X-PREMIUM-STRATEGY.md (Section: "SPECIFIC PROMOTED TWEET COPY")
- [ ] Customize each with your brand voice
- [ ] Save as final versions

---

## WEDNESDAY (Feb 28): Continue Week 1 (3-4 hours)

### CONTENT TRACK: DifficultyBadge Component

**STEP 4: Create Component** (1 hour)
```
Create new file: src/components/DifficultyBadge.tsx

---BEGIN COPY---

import { Brain } from 'lucide-react'
import { getCertDifficultyLevel, DifficultyLevel } from '@/lib/certifications-data'

interface DifficultyBadgeProps {
  slug: string
  size?: 'sm' | 'md' | 'lg'
}

const difficultyConfig: Record<DifficultyLevel, { color: string; bgColor: string; label: string }> = {
  beginner: { color: 'text-emerald-700', bgColor: 'bg-emerald-100', label: 'Beginner' },
  intermediate: { color: 'text-amber-700', bgColor: 'bg-amber-100', label: 'Intermediate' },
  advanced: { color: 'text-red-700', bgColor: 'bg-red-100', label: 'Advanced' },
  expert: { color: 'text-purple-700', bgColor: 'bg-purple-100', label: 'Expert' },
}

export default function DifficultyBadge({ slug, size = 'md' }: DifficultyBadgeProps) {
  const difficulty = getCertDifficultyLevel(slug)
  const config = difficultyConfig[difficulty]

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs gap-1',
    md: 'px-3 py-1.5 text-sm gap-1.5',
    lg: 'px-4 py-2 text-base gap-2',
  }

  return (
    <span className={`inline-flex items-center rounded-full font-semibold ${config.bgColor} ${config.color} ${sizeClasses[size]} border border-current/10`}>
      <Brain className={`h-${size === 'sm' ? '3' : size === 'md' ? '4' : '5'} w-${size === 'sm' ? '3' : size === 'md' ? '4' : '5'}`} aria-hidden="true" />
      <span>{config.label}</span>
    </span>
  )
}

---END COPY---

Save and verify no errors: `npm run build`
```

**STEP 5: Integrate into CertificationCard** (30 min)
```
Location: src/components/CertificationCard.tsx

Find line that has: award icon or exam code display (around line 40-50)

Add this import at top:
import DifficultyBadge from '@/components/DifficultyBadge'
import { getCertDifficultyLevel } from '@/lib/certifications-data'

Find the JSX section that displays the exam code badge.
Add AFTER the exam code display:

<DifficultyBadge slug={slug} size="md" />

(Or show me the exact lines and I'll help you place it precisely)

Save and test: `npm run build`
```

### LINK TRACK: Prepare X Ads

**STEP 6: Export Ad Copy + Assets** (1.5 hours)
- [ ] Create folder: `/public/x-ads/` (for screenshots/images)
- [ ] Take screenshots of:
  - Practice question example
  - Salary comparison chart (or simple graphic)
  - Success stat
- [ ] Finalize 5 tweet variations from your doc
- [ ] Format for X Ads Manager (text-only or with images)

**STEP 7: Create Tracking Spreadsheet** (1 hour)
- [ ] Open Google Sheet
- [ ] Name it: "X-Premium Performance Tracker"
- [ ] Create columns:
  - Campaign Name
  - Ad Variant
  - Target Audience
  - Budget
  - Date Created
  - Impressions (daily)
  - Clicks (daily)
  - CTR (daily)
  - Cost per Click
  - Status
- [ ] Save to shared folder
- [ ] Share link with yourself (for bookmarking)

---

## THURSDAY (Mar 1): Launch Week 1 (2-3 hours)

### CONTENT TRACK: Test Build + Commit

**STEP 8: Full Build Test + Verify**
```bash
# From your project directory:
npm run build

# Should complete without errors and show all pages compiled
# If errors: let me know the error message
```

**STEP 9: Verify Badges Display**
- [ ] Open locally (or staging): https://localhost:3000/certifications/administrator
- [ ] Scroll to cert card
- [ ] Look for badge next to "ADM-201" - should show: ![Intermediate] Intermediate
- [ ] Click to another cert (app-builder)
- [ ] Verify badges display on all

**STEP 10: Commit**
```bash
git add src/lib/certifications-data.ts src/components/DifficultyBadge.tsx src/components/CertificationCard.tsx

git commit -m "feat: add difficulty level badges to certification cards

- Add CERT_DIFFICULTY_LEVELS mapping (beginner/intermediate/advanced/expert)
- Create DifficultyBadge component with colored indicators
- Integrate badges into CertificationCard display
- Shows difficulty level with brain icon

Expected impact: +5-10% CTR from visual trust signal
Build verified: ✓"

git push
```

### LINK TRACK: Launch X Premium Ads

**STEP 11: Create Campaigns in X Ads Manager** (1 hour)
- [ ] Go to https://ads.twitter.com/
- [ ] Click "Create campaign"
- [ ] Campaign objective: "Website conversions"
- [ ] For each of 5 ad variations:
  1. Create campaign: "Salesforce Certs - [Variant Name]"
  2. Select audiences: Developers OR Admins OR Architects (one per campaign)
  3. Budget: $50
  4. Duration: Ongoing
  5. Add ad copy from your doc
  6. Add images (if applicable)
  7. Landing page: /certifications/administrator (or top cert for that audience)
  8. Save but DON'T launch yet

**STEP 12: Launch Campaigns + Monitor**
- [ ] Double-check all 5 campaigns are configured
- [ ] Launch all 5 at same time (Friday morning 9 AM is best)
- [ ] Add to tracking spreadsheet
- [ ] Check daily (Mon-Fri at 10 AM): impressions, clicks, cost

**STEP 13: Schedule Organic Posts**
- [ ] Open Buffer or Later or just schedule tweets manually
- [ ] Schedule 5 posts for Week 1 (Mon-Fri):
  - Monday 9 AM: Educational thread (copy from X-PREMIUM-CONTENT-CALENDAR.md)
  - Tuesday 2 PM: Poll (copy template)
  - Wednesday 11 AM: Data post (copy template)
  - Thursday 12 PM: News hook (copy template)
  - Friday 3 PM: Influencer shoutout (copy template)
- [ ] Each post should include 1-2 links to trailblazeprep.com

---

## FRIDAY (Mar 4): Week 1 Complete ✅

**STEP 14: Verify Everything Live**
- [ ] Badges showing on cert pages ✅
- [ ] X Premium campaigns running (check impressions) ✅
- [ ] Organic posts scheduled ✅
- [ ] Tracking spreadsheet started ✅
- [ ] All changes committed to git ✅

**STEP 15: Document Week 1 Results**
- [ ] Take screenshot of:
  - Cert page with badges
  - X Ads Manager showing campaigns
  - Tracking spreadsheet
  - GitHub commits
- [ ] Save to shared folder
- [ ] Note any blockers or learnings

---

## FRIDAY EVENING: Read for Week 2

- [ ] Open PARALLEL-IMPLEMENTATION-PLAN.md (Week 2 section)
- [ ] Start planning FAQ questions (can start writing over weekend)
- [ ] List top 10 cert slugs you'll focus on first:
  1. administrator
  2. app-builder
  3. developer-1
  4. developer-2
  5. sales-cloud
  6. service-cloud
  7. integration-architect
  8. system-architect
  9. advanced-administrator
  10. business-analyst

---

## FILES READY FOR YOU

All documentation is in: `/Users/brahmajikatragadda/Downloads/salesforce-certifications/`

- ✅ `PARALLEL-IMPLEMENTATION-PLAN.md` ← Full 3-week plan
- ✅ `X-PREMIUM-STRATEGY.md` ← Ad copy + strategy
- ✅ `X-PREMIUM-CONTENT-CALENDAR.md` ← Weekly posting templates
- ✅ `X-PREMIUM-QUICK-START.md` ← Another quick reference

---

## KEY REMINDERS

**Build before committing:**
```bash
npm run build
# Should show "✓ Compiled successfully"
```

**Test locally before pushing:**
- Visit http://localhost:3000/certifications/administrator
- Look for badges
- Verify styling correct

**If stuck on something:**
1. Check error message carefully
2. Look at similar code in repo for pattern
3. Ask me specific question with line numbers

---

## ESTIMATED TIME

- **Today/Tomorrow:** 2-3 hours (setup + data structure + X Premium setup)
- **Wednesday:** 3-4 hours (badge component + ad prepare)
- **Thursday:** 2-3 hours (build test + launch ads)
- **Friday:** 1-2 hours (verify + document)

**Week 1 Total: ~8-12 hours**

---

**Ready to start? Begin with STEP 1 (30 min).**

Let me know when you finish Step 1 build, or if you hit any blockers! 🚀
