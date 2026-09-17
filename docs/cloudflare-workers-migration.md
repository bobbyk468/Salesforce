# Cloudflare Workers Migration

This repository supports a direct Next.js-to-Cloudflare Workers deployment through OpenNext. It is not a static export: Next route handlers, middleware, redirects, headers, the contact form, and the chatbot continue to run.

## Local validation

```bash
npm run cf:build
npm run cf:preview
```

The preview runs at `http://localhost:8787`. Check a content page, a legacy redirect, `/og`, `/api/chat`, and `/api/contact` before deploying.

## Cloudflare setup

1. Create a Workers project connected to this repository. Set `Spring'26` as the production branch unless the branch policy changes.
2. Set the build command to `npm run cf:build` and deploy command to `npx opennextjs-cloudflare deploy`.
3. Set these encrypted production and preview secrets: `RESEND_API_KEY` and `GROQ_API_KEY`.
4. Set `NEXT_PUBLIC_SITE_URL=https://www.trailblazeprep.com` and the existing `NEXT_PUBLIC_GA_MEASUREMENT_ID` as build variables.
5. Deploy to the generated Workers URL. Do not attach the production domain yet.

## Cutover checks

1. Confirm `/`, `/certifications/administrator`, and `/sitemap.xml` return `200` on the Workers URL.
2. Confirm `/adm-201-exam-tips-2026` returns a single `308` to `/adm-201-exam-tips`.
3. Confirm `/og?t=Salesforce%20Administrator` redirects to `/og-default.png` and that image returns `200` with `image/png`.
4. Submit a real contact-form message and chatbot request on the Workers preview after adding secrets.
5. Attach `www.trailblazeprep.com` to the Worker, configure an apex-to-`www` redirect in Cloudflare, then remove the domain from Vercel only after the production checks pass.

## Notes

- The former dynamic Open Graph renderer used Next `ImageResponse`, which hangs under the pinned Next 14/OpenNext Workers runtime. `/og` now redirects to a branded static 1200x630 PNG, retaining all current metadata URLs.
- The chatbot knowledge base is imported at build time instead of read with Node's filesystem API, which is unavailable on Workers.
- `GROQ_API_KEY` is required for the chatbot. Do not use a Stripe secret for this value.
