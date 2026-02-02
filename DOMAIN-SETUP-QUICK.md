# ⚡ Quick Domain Setup Guide

## **Connect trailblazeprep.com to Vercel**

---

## **1. Add Domain in Vercel** (2 min)

1. Vercel Dashboard → Your Project → **Settings** → **Domains**
2. Enter: `trailblazeprep.com`
3. Click **"Add"**

---

## **2. Configure DNS** (5 min)

### **Easiest Method: Use Vercel Nameservers**

1. Copy nameservers from Vercel:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`

2. Go to your domain registrar (Namecheap/Cloudflare/etc.)
3. Find "Nameservers" settings
4. Replace with Vercel's nameservers
5. Save

**Wait 5-30 minutes** for DNS to propagate.

---

## **3. Update Environment Variable** (2 min)

1. Vercel → Project → **Settings** → **Environment Variables**
2. Edit `NEXT_PUBLIC_SITE_URL`
3. Set to: `https://trailblazeprep.com`
4. Save
5. **Redeploy** (Deployments → ... → Redeploy)

---

## **4. Verify** (2 min)

1. Visit: `https://trailblazeprep.com`
2. Check for green lock (HTTPS)
3. Test pages

**✅ Done!** Your site is live at trailblazeprep.com!

---

**Need help?** See `CONNECT-DOMAIN-STEPS.md` for detailed instructions.
