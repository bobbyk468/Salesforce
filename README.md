# Salesforce Certification Resources Website

A modern, professional website for Salesforce certification study materials built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional UI with Salesforce-inspired color scheme
- **Interactive Practice Questions**: Test your knowledge with instant feedback
- **Multiple Certifications**: Covers Administrator, Developer, Consultant, and Marketing Cloud certifications
- **Responsive**: Works on desktop, tablet, and mobile devices
- **SEO Optimized**: Built-in metadata for search engine visibility
- **Contact Form**: Built-in contact form for inquiries

## Certifications Covered

Aligned with [Trailhead role overviews](https://trailhead.salesforce.com/en/credentials/):

- **Administrator** ([overview](https://trailhead.salesforce.com/en/credentials/administratoroverview/)): Platform Administrator, Platform Administrator II, Platform App Builder, Agentforce Specialist, Business Analyst, CPQ Administrator, Marketing Cloud Engagement Admin, Slack Administrator
- **Developer** ([overview](https://trailhead.salesforce.com/en/credentials/developeroverview)): Platform App Builder, Platform Developer I & II, JavaScript Developer I, B2C Commerce Developer, Industries CPQ Developer, Marketing Cloud Engagement Developer, MuleSoft Developer I & II, MuleSoft Hyperautomation, OmniStudio Developer, Slack Developer
- **Consultant** ([overview](https://trailhead.salesforce.com/en/credentials/consultantoverview)): Business Analyst, CRM Analytics & Einstein Discovery, Data Cloud, Education Cloud, Experience Cloud, Field Service, Marketing Cloud Account Engagement (Pardot), Marketing Cloud Engagement, Nonprofit Cloud, NPSP, OmniStudio, Revenue Cloud, Sales Cloud, Service Cloud, Slack Consultant
- **Marketing** ([overview](https://trailhead.salesforce.com/en/credentials/marketingoverview)): Email Specialist, Marketing Cloud Engagement Admin/Consultant/Developer, Account Engagement (Pardot) Specialist & Consultant
- **Architect** ([overview](https://trailhead.salesforce.com/en/credentials/architectoverview)): Application Architect, Data Architect, Integration Architect, Sharing & Visibility Architect, System Architect, Identity & Access Mgmt Architect, Dev Lifecycle & Deployment Architect, Technical Architect (CTA)
- **Sales Professional** ([overview](https://trailhead.salesforce.com/en/credentials/salesprofessionaloverview)): Certified Sales Foundations
- **Designer** ([overview](https://trailhead.salesforce.com/en/credentials/designeroverview)): Platform Strategy Designer, User Experience (UX) Designer

## Auto-push after commit

A Git hook pushes the current branch to `origin` after every commit. It’s in `.githooks/post-commit` and is enabled when the repo uses that directory as the hooks path.

- **Already enabled** in this clone: `git config core.hooksPath .githooks` has been run.
- **After a fresh clone**, enable it with:
  ```bash
  git config core.hooksPath .githooks
  ```
- To stop auto-pushing: `git config --unset core.hooksPath`

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
   ```bash
   cd salesforce-certifications
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Run deployment:
   ```bash
   vercel
   ```

3. Follow the prompts to link to your Vercel account

### Option 2: Deploy via GitHub + Vercel Dashboard

1. Push this code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)

3. Click "New Project"

4. Import your GitHub repository

5. Vercel will automatically detect Next.js and configure the build

6. Click "Deploy"

Your site will be live at `your-project-name.vercel.app`

### Custom Domain

After deployment, you can add a custom domain in Vercel:
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### SEO & Production Checklist

For strong SEO and rich results on your live domain:

1. **Set `NEXT_PUBLIC_SITE_URL`** in your deployment environment to your live URL (e.g. `https://yoursite.com`). This drives metadata, sitemap, and robots URLs.
2. **HTTPS**: Use HTTPS on the live domain (Vercel provides this by default).
3. **Sitemap & robots**: The app serves `/sitemap.xml` and `/robots.txt` automatically. Submit the sitemap in [Google Search Console](https://search.google.com/search-console) after going live.
4. **Structured data**: The homepage includes **WebSite**, **FAQPage**, and **BreadcrumbList** JSON-LD. Certification pages can include **Course** and breadcrumb schema for richer snippets.
5. **Performance & mobile**: The site is responsive (Tailwind). For good Core Web Vitals, keep images optimized and avoid blocking scripts; consider running Lighthouse after deployment.

## Project Structure

```
salesforce-certifications/
├── src/
│   ├── app/
│   │   ├── page.tsx                    # Homepage
│   │   ├── layout.tsx                  # Root layout
│   │   ├── globals.css                 # Global styles
│   │   ├── contact/
│   │   │   └── page.tsx                # Contact page
│   │   └── certifications/
│   │       ├── administrator/          # Admin certification
│   │       ├── advanced-administrator/
│   │       ├── app-builder/
│   │       ├── developer-1/
│   │       ├── developer-2/
│   │       ├── sales-cloud/
│   │       ├── service-cloud/
│   │       ├── experience-cloud/
│   │       ├── field-service/
│   │       ├── email-specialist/
│   │       ├── marketing-cloud-consultant/
│   │       ├── pardot-specialist/
│   │       ├── pardot-consultant/
│   │       └── nonprofit-cloud/
│   └── components/
│       ├── Header.tsx                  # Navigation header
│       ├── Footer.tsx                  # Page footer
│       ├── CertificationCard.tsx       # Certification info card
│       └── QuestionCard.tsx            # Interactive question component
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Adding More Content

### Adding a New Certification Page

1. Create a new folder in `src/app/certifications/[certification-name]/`
2. Add a `page.tsx` file with the certification content
3. Update the navigation in `src/components/Header.tsx`
4. Add a card to the homepage in `src/app/page.tsx`

### Adding More Questions

Edit the `sampleQuestions` array in each certification page to add more practice questions.

## Customization

### Colors

Edit `tailwind.config.js` to change the Salesforce color scheme:

```javascript
colors: {
  salesforce: {
    blue: '#0176D3',
    dark: '#032D60',
    light: '#1B96FF',
    cloud: '#00A1E0',
  },
}
```

### Contact Form & Email

All contact information uses **km.krishnamohan25@gmail.com**. The contact form (sidebar on every page and the Contact page) submits to `POST /api/contact`. To send real emails:

1. Create an account at [Resend](https://resend.com)
2. Create a `.env.local` file and add: `RESEND_API_KEY=re_xxxxx`
3. The API will send form submissions (name, email, exam name, message) to km.krishnamohan25@gmail.com

Without `RESEND_API_KEY`, the API still returns success and logs the submission; users can email km.krishnamohan25@gmail.com directly via the mailto link in the sidebar.

## Technologies Used

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide React](https://lucide.dev/) - Icons

## License

This project is for educational purposes.

## Support

For questions or issues, use the contact form on the website or create an issue in the repository.
