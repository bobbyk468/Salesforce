# 🌐 Step 3: Connect Custom Domain to Vercel

Your site is deployed! Now let's connect `trailblazeprep.com` to it.

---

## **STEP 3.1: Add Domain in Vercel** (2 minutes)

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Click on your **"salesforce"** project
3. Go to **"Settings"** tab (top navigation)
4. Click **"Domains"** in the left sidebar
5. In the "Add Domain" field, enter: `trailblazeprep.com`
6. Click **"Add"**

**✅ Done!** Vercel will show you DNS configuration instructions.

---

## **STEP 3.2: Configure DNS Records** (5 minutes)

Vercel will show you DNS records to add. You have **two options**:

### **Option A: Use Vercel Nameservers (EASIEST - Recommended)**

1. **Copy the nameservers** Vercel provides (usually):
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```

2. **Go to your domain registrar** (where you bought trailblazeprep.com)
   - Namecheap, Cloudflare, Google Domains, etc.

3. **Find DNS/Nameserver settings**
   - Look for "Nameservers" or "DNS" section
   - Usually under "Domain Settings" or "Advanced DNS"

4. **Replace existing nameservers** with Vercel's:
   - Remove old nameservers
   - Add: `ns1.vercel-dns.com`
   - Add: `ns2.vercel-dns.com`
   - Save changes

5. **Wait 5-30 minutes** for DNS propagation

**✅ Done!** DNS will propagate automatically.

---

### **Option B: Add A Record (More Control)**

If you prefer to keep your current nameservers:

1. **In your domain registrar's DNS settings**, add:

   **A Record (Root Domain):**
   - **Type**: A
   - **Name**: @ (or leave blank, or `trailblazeprep.com`)
   - **Value**: `76.76.21.21`
   - **TTL**: 3600 (or default)

   **CNAME Record (WWW):**
   - **Type**: CNAME
   - **Name**: www
   - **Value**: `cname.vercel-dns.com`
   - **TTL**: 3600 (or default)

2. **Save changes**

3. **Wait 5-30 minutes** for DNS propagation

**✅ Done!** DNS records are configured.

---

## **STEP 3.3: Update Environment Variable** (2 minutes)

1. In Vercel dashboard → Your project → **"Settings"** → **"Environment Variables"**
2. Find `NEXT_PUBLIC_SITE_URL`
3. Click **"Edit"** (or remove and re-add)
4. Change value to: `https://trailblazeprep.com`
5. Make sure it's enabled for: ✅ Production, ✅ Preview, ✅ Development
6. Click **"Save"**

**Important**: After updating, you may need to **redeploy**:
- Go to **"Deployments"** tab
- Click **"..."** on latest deployment → **"Redeploy"**

**✅ Done!** Environment variable updated.

---

## **STEP 3.4: Wait for DNS Propagation** (5-30 minutes)

1. **Check DNS status** in Vercel dashboard:
   - Go to **"Settings"** → **"Domains"**
   - You'll see status: "Valid Configuration" or "Pending"

2. **Verify DNS propagation**:
   - Visit: https://www.whatsmydns.net
   - Enter: `trailblazeprep.com`
   - Check if A record shows: `76.76.21.21`

3. **Wait for SSL certificate**:
   - Vercel automatically provisions SSL (HTTPS)
   - Usually ready within minutes after DNS propagates
   - Check for green lock icon in browser

**✅ Done!** DNS is propagated and SSL is active.

---

## **STEP 3.5: Verify Domain is Working** (2 minutes)

1. **Visit**: `https://trailblazeprep.com`
2. **Check**:
   - ✅ Site loads correctly
   - ✅ HTTPS (green lock icon)
   - ✅ All pages work
   - ✅ No redirect loops

3. **Test a few pages**:
   - Homepage: `https://trailblazeprep.com`
   - Certifications: `https://trailblazeprep.com/certifications`
   - Sample cert: `https://trailblazeprep.com/certifications/administrator`

**✅ Done!** Your domain is connected and working!

---

## **🆘 Troubleshooting**

### **Domain shows "Invalid Configuration"**
- Check DNS records are correct
- Wait longer for propagation (can take up to 48 hours)
- Verify nameservers are set correctly

### **SSL Certificate Not Ready**
- Wait 5-10 minutes after DNS propagates
- Vercel automatically provisions SSL
- Check Vercel dashboard for SSL status

### **Site Not Loading**
- Check DNS propagation: https://www.whatsmydns.net
- Verify environment variable is set correctly
- Check Vercel deployment status

### **Redirect Loop**
- Make sure `NEXT_PUBLIC_SITE_URL` is set to `https://trailblazeprep.com`
- Redeploy after updating environment variable

---

## **✅ Success Checklist**

- [ ] Domain added in Vercel dashboard
- [ ] DNS records configured (nameservers or A/CNAME)
- [ ] Environment variable updated to `https://trailblazeprep.com`
- [ ] DNS propagated (check whatsmydns.net)
- [ ] SSL certificate active (green lock)
- [ ] Site loads at `https://trailblazeprep.com`
- [ ] All pages work correctly

---

**Ready?** Start with **STEP 3.1** above! 🚀
