# Week 1 Thread Images — Creation Guide

**Status:** Images NOT yet created. Create these TODAY (April 16) before threads post tomorrow.

**Total Time:** ~45 minutes to create all 4 images  
**Recommended Tools:** Figma (free) or Canva (free tier)

---

## Image 1: OWD Hierarchy Pyramid (Monday Thread)

**Purpose:** Establish the foundational access control hierarchy  
**Thread:** "OWD vs Sharing vs Permission Sets"  
**Posting Time:** Monday, April 17, 9:00 AM ET

### Design Specifications

**Format:** Vertical pyramid/triangle (tall, narrow)  
**Dimensions:** 1200 x 1500 px (vertical emphasis)  
**Color Scheme:** Light background (white or light gray), color-coded layers

**Content Structure:**

```
                    ┌─────────────────┐
                    │  Permission     │
                    │  Sets (Layer 3) │
                    │  (Can't override)│
                    └─────────────────┘
                           ▲
                  ┌────────┴────────┐
                  │ Sharing Rules   │
                  │ (Layer 2)       │
                  │ (Manual except) │
                  └────────┬────────┘
                           ▲
        ┌──────────────────┴──────────────────┐
        │     OWD Floor (Layer 1)              │
        │  (Most Restrictive - Foundation)     │
        └─────────────────────────────────────┘
```

**Design Details:**
- Layer 1 (OWD): Red/dark color, large base, labeled "FLOOR - Most Restrictive"
- Layer 2 (Sharing Rules): Yellow/orange, middle, labeled "Manual Exceptions"
- Layer 3 (Permission Sets): Green, top, labeled "ADD Access Only - Can't Override"
- Add key text: "OWD is the law. Permission Sets are exceptions."

**Tool Templates:**
- Figma: Search for "pyramid diagram template"
- Canva: Use "Hierarchy Pyramid" template
- Google Slides: Insert → Shapes → Triangle, stack 3 together

**Quick Creation (10 min):**
1. Open Canva (canva.com)
2. Search "pyramid chart"
3. Use template, edit 3 layers
4. Add text: OWD / Sharing / Permission Sets
5. Export as PNG (1200x1500)

---

## Image 2: Red X — Permission Set Can't Override (Wednesday Thread)

**Purpose:** Reinforce that Permission Sets are restricted by OWD  
**Thread:** "Permission Sets Can't Override OWD"  
**Posting Time:** Wednesday, April 19, 9:00 AM ET

### Design Specifications

**Format:** Two-column comparison with large red X  
**Dimensions:** 1200 x 630 px (standard X width)  
**Color Scheme:** Left side (red/wrong), right side (green/right)

**Content Structure:**

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  ❌ WRONG APPROACH          ✅ RIGHT APPROACH             │
│                                                            │
│  Permission Set             Sharing Rule                  │
│  "Read All Cases"           OR Manual Sharing             │
│                                                            │
│  IF OWD = Private           IF OWD = Private              │
│  Result: BLOCKED ❌         Result: ACCESS ✅             │
│                                                            │
│  Can't override OWD         Built to override OWD         │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Design Details:**
- Left column: Red background (#FF4444), white text, large red X
- Right column: Green background (#44FF44), white text, large green checkmark
- Center: Bold text "Permission Sets = Slaves to OWD"
- Bold font for contrast

**Tool Templates:**
- Figma: "2-column comparison" template
- Canva: "Pros and Cons" template
- Google Slides: Insert 2 shapes side-by-side

**Quick Creation (8 min):**
1. Open Canva (canva.com)
2. Search "two column comparison"
3. Left column: Red, add X symbol, "WRONG: Permission Set"
4. Right column: Green, add checkmark, "RIGHT: Sharing Rule"
5. Add center text: "Permission Sets Can't Override OWD"
6. Export as PNG (1200x630)

---

## Image 3: Split Diagram — Omni-Channel vs Assignment Rules (Friday Thread)

**Purpose:** Show the opposite models (push vs pull)  
**Thread:** "Omni-Channel vs Case Assignment Rules"  
**Posting Time:** Friday, April 21, 9:00 AM ET

### Design Specifications

**Format:** Split-screen comparison  
**Dimensions:** 1200 x 630 px (standard X width)  
**Color Scheme:** Blue (admin-driven) vs Purple (supervisor-driven)

**Content Structure:**

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  LEFT: PUSH MODEL (Admin)    RIGHT: PULL MODEL (Supervisor)│
│                                                             │
│  Case Assignment Rules    │    Omni-Channel                │
│                          │                                 │
│  Admin Sets Rules         │    Supervisor Controls Queue   │
│  Rules Fire Auto          │    Supervisors Pull Cases      │
│  ↓ ↓ ↓ ↓                   │    Based on Capacity           │
│  Cases Routed             │    ← ← ← ← Cases Pulled        │
│                          │                                 │
│  Static. Predictable.    │    Flexible. Dynamic.          │
│  Admin-Controlled         │    Supervisor-Controlled       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Design Details:**
- Left side: Blue background, Admin icon/label, downward arrows (push)
- Right side: Purple background, Supervisor icon/label, upward arrows (pull)
- Center divider line
- Large text: "PUSH" (left) vs "PULL" (right)
- Bottom: "Admin-Controlled" (left) vs "Supervisor-Controlled" (right)

**Tool Templates:**
- Figma: "Split screen" or "comparison" template
- Canva: "Side by side comparison" template
- Google Slides: Insert 2 rectangles with arrows

**Quick Creation (10 min):**
1. Open Canva (canva.com)
2. Search "side by side comparison"
3. Left: Blue, label "Case Assignment Rules", add ↓ arrows
4. Right: Purple, label "Omni-Channel", add ↑ arrows
5. Add text: "PUSH vs PULL"
6. Export as PNG (1200x630)

---

## Image 4: Architecture Diagram — Multi-Agent Orchestration (Saturday Thread)

**Purpose:** Show how agents hand off and pass context  
**Thread:** "Multi-Agent Orchestration Reality"  
**Posting Time:** Saturday, April 22, 9:00 AM ET

### Design Specifications

**Format:** Flow diagram with boxes and arrows  
**Dimensions:** 1200 x 630 px (standard X width)  
**Color Scheme:** Orange/teal, boxes for agents, arrows for flow

**Content Structure:**

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│   AGENT A              EXPLICIT           AGENT B            │
│   ┌──────────┐        HANDOFF            ┌──────────┐        │
│   │ Working  │                           │ Receives │        │
│   │ on Task  │────────────────────────→  │ Variables│        │
│   │          │  Variables Passed         │          │        │
│   │ Context: │  Explicitly               │ Works    │        │
│   │ Data X   │                           │ Isolated │        │
│   └──────────┘                           └──────────┘        │
│                                                              │
│   ❌ MISTAKE:                   ✅ RIGHT:                     │
│   Agent B auto-inherits       Agent B receives              │
│   Agent A's context           explicit variables             │
│   Result: FAILS               Result: WORKS                 │
│                                                              │
│   Gotcha: Orchestration context is TRANSIENT               │
│   After handoff, Agent A can't see Agent B's work           │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Design Details:**
- Left box: Agent A (orange background)
- Arrow: "Explicit Handoff" with variables listed
- Right box: Agent B (teal background)
- Bottom section: Red X (what fails) vs Green checkmark (what works)
- Key text: "Context is Transient - Isolation After Handoff"

**Tool Templates:**
- Figma: "Flow diagram" or "architecture" template
- Canva: "Process flow" template
- Google Slides: Insert shapes + connector lines

**Quick Creation (12 min):**
1. Open Figma or Google Drawings (free)
2. Create 2 boxes: "Agent A" and "Agent B"
3. Add arrow between them labeled "Explicit Handoff"
4. Add "Variables Passed" box on arrow
5. Add bottom section with red X and green checkmark
6. Add key constraint text
7. Export as PNG (1200x630)

---

## Image Creation Checklist

### Tools (Choose One)

**Option 1: Canva (FASTEST)**
- Go to canva.com
- No account needed for basic use
- Search for templates: "pyramid", "comparison", "side by side", "process flow"
- Edit in browser, export as PNG
- **Time:** 5-10 min per image
- **Quality:** Good for social media

**Option 2: Figma (BEST QUALITY)**
- Go to figma.com
- Create free account
- Use community templates or create from scratch
- Better for complex diagrams
- **Time:** 10-15 min per image
- **Quality:** Professional

**Option 3: Google Slides (FREE)**
- Go to docs.google.com
- Create new presentation
- Insert shapes, text, arrows
- Screenshot/export each slide
- **Time:** 10-12 min per image
- **Quality:** Basic but functional

### Creation Schedule

**Today (April 16):**
- [ ] Image 1 (OWD Pyramid) — 10 min — For Monday post
- [ ] Image 2 (Red X Comparison) — 8 min — For Wednesday post
- [ ] Image 3 (Split Diagram) — 10 min — For Friday post
- [ ] Image 4 (Architecture Flow) — 12 min — For Saturday post

**Total Time:** ~40 minutes

**Recommended Approach:**
1. Use Canva (fastest)
2. Create all 4 in one session
3. Export as PNG files
4. Save to `/assets/week-1-images/`
5. Keep originals for Week 2 editing

---

## File Naming & Storage

Save images as:
```
/assets/week-1-images/
  ├── 1-owd-hierarchy.png (1200x1500)
  ├── 2-permission-sets-override.png (1200x630)
  ├── 3-omnichannel-vs-assignment.png (1200x630)
  └── 4-multi-agent-orchestration.png (1200x630)
```

---

## Image Attachment to Scheduled Tasks

**Current Status:** Scheduled tasks are set but images are referenced, not attached.

**To Attach Images When Posting:**
1. Open X on @trailblazeprep
2. Click "Compose" 
3. Paste Tweet 1 text
4. Click image icon
5. Upload PNG from `/assets/week-1-images/`
6. Post
7. Immediately reply with Tweets 2-5

---

## Quality Checklist

Before posting each thread, verify:

- [ ] Image is readable at small size (mobile view)
- [ ] Text is 14pt+ (readable on phone)
- [ ] Colors have good contrast
- [ ] Image matches thread topic
- [ ] Dimensions are correct (1200x630 or 1200x1500)
- [ ] File is PNG (not JPG)
- [ ] File size < 5MB

---

## Design Inspiration

If you get stuck, reference these:
- Figma community: "access control diagram"
- Canva: "flowchart", "hierarchy", "comparison"
- Google Slides templates: Built-in shapes library

---

## Timeline Impact

**If images are ready TODAY (April 16):**
- Threads post tomorrow with full impact
- Visual engagement will be 2-3x higher
- Bookmarks/saves increase significantly

**If images are delayed:**
- Post threads with text only (still valuable)
- Add images in replies (lower impact)
- Create images over next few days and use for Week 2 threads

---

**Start with Image 1 (OWD Pyramid) — it's the easiest and most important.**

Ready to create images, or questions on design specs?
