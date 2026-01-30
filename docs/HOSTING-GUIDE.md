# Hosting & Domain Setup Guide

## 🎯 **Recommended Setup: Vercel + Custom Domain**

For Next.js applications, **Vercel** is the best choice:
- ✅ Zero-config deployment
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Free tier available
- ✅ Built by Next.js creators
- ✅ Automatic deployments from Git

---

## 📋 **Step-by-Step Guide**

### **Part 1: Purchase Domain**

#### **Option A: Purchase from Vercel (Recommended)**
1. Go to [Vercel Domains](https://vercel.com/domains)
2. Search for your desired domain (e.g., `trailblazeprep.com`)
3. Purchase directly through Vercel
4. **Benefits**: Automatic DNS configuration, no manual setup needed

#### **Option B: Purchase from Domain Registrar**
Popular registrars:
- **Namecheap** - Good prices, easy to use (~$10-15/year for .com)
- **Google Domains** - Simple interface (~$12/year for .com)
- **Cloudflare** - At-cost pricing (~$8-10/year for .com)
- **GoDaddy** - Popular but more expensive (~$12-20/year)

**Recommended Domain Names:**
- `trailblazeprep.com` (matches your brand)
- `trailblazeprep.io`
- `trailblazeprep.net`
- `salesforceprep.com`
- `sfcertprep.com`

---

### **Part 2: Deploy to Vercel**

#### **Prerequisites**
1. GitHub account (free)
2. Code pushed to GitHub repository

#### **Deployment Steps**

1. **Push Code to GitHub** (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Sign Up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub (recommended)

3. **Create New Project**
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js

4. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `next build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)

5. **Set Environment Variables**
   - Click "Environment Variables"
   - Add: `NEXT_PUBLIC_SITE_URL` = `https://your-domain.com`
   - **Important**: Use your actual domain (not the .vercel.app URL)

6. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build
   - Your site is live at `your-project.vercel.app`

---

### **Part 3: Connect Custom Domain**

#### **If Domain Purchased from Vercel:**
- Domain is automatically connected ✅
- Skip to Part 4

#### **If Domain Purchased Elsewhere:**

1. **In Vercel Dashboard**
   - Go to your project → "Settings" → "Domains"
   - Click "Add Domain"
   - Enter your domain (e.g., `trailblazeprep.com`)
   - Click "Add"

2. **Configure DNS at Your Registrar**
   
   Vercel will show you DNS records to add. Typically:
   
   **For Root Domain (trailblazeprep.com):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```
   
   **For WWW (www.trailblazeprep.com):**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
   
   **Or use Vercel Nameservers (Easier):**
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```

3. **Wait for DNS Propagation**
   - Usually takes 5 minutes to 48 hours
   - Check status in Vercel dashboard
   - Use [whatsmydns.net](https://www.whatsmydns.net) to verify

4. **SSL Certificate**
   - Vercel automatically provisions SSL (HTTPS)
   - Usually ready within minutes after DNS propagates

---

### **Part 4: Post-Deployment Configuration**

#### **1. Update Environment Variables**
In Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_SITE_URL=https://trailblazeprep.com
```

**Important**: 
- Use `https://` (not `http://`)
- No trailing slash
- Update for all environments (Production, Preview, Development)

#### **2. Verify Site is Working**
- Visit your domain
- Check all pages load correctly
- Test navigation
- Verify HTTPS is working (green lock icon)

#### **3. Submit to Search Engines**

**Google Search Console:**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property → Enter your domain
3. Verify ownership (Vercel provides DNS verification)
4. Submit sitemap: `https://trailblazeprep.com/sitemap.xml`

**Bing Webmaster Tools:**
1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add site → Enter your domain
3. Submit sitemap

---

## 💰 **Cost Breakdown**

### **Free Tier (Good for Starting)**
- **Vercel**: Free (Hobby plan)
  - Unlimited deployments
  - 100GB bandwidth/month
  - Perfect for most sites
  
- **Domain**: ~$10-15/year (.com)
- **Total**: ~$10-15/year

### **Pro Tier (If You Need More)**
- **Vercel Pro**: $20/month
  - More bandwidth
  - Team features
  - Analytics
  
- **Domain**: ~$10-15/year
- **Total**: ~$240-255/year

---

## 🔧 **Alternative Hosting Options**

### **1. Netlify** (Similar to Vercel)
- ✅ Free tier available
- ✅ Easy Next.js deployment
- ✅ Good alternative if Vercel doesn't work

### **2. AWS Amplify**
- ✅ Free tier (with limits)
- ⚠️ More complex setup
- Good for AWS ecosystem

### **3. Railway**
- ✅ Simple deployment
- ✅ $5/month starting
- Good for full-stack apps

### **4. DigitalOcean App Platform**
- ✅ $5/month starting
- ✅ More control
- ⚠️ More setup required

---

## 📝 **Pre-Deployment Checklist**

Before deploying, ensure:

- [ ] Code is pushed to GitHub
- [ ] All environment variables are documented
- [ ] `NEXT_PUBLIC_SITE_URL` is set correctly
- [ ] Sitemap is working (`/sitemap.xml`)
- [ ] Robots.txt is working (`/robots.txt`)
- [ ] All pages are accessible
- [ ] Mobile responsiveness tested
- [ ] Contact form works (if using Resend)

---

## 🚀 **Quick Start Commands**

```bash
# 1. Build locally to test
npm run build
npm start

# 2. Push to GitHub
git add .
git commit -m "Ready for deployment"
git push

# 3. Deploy to Vercel (via dashboard or CLI)
npx vercel
```

---

## 🔐 **Security Checklist**

- [ ] HTTPS enabled (automatic on Vercel)
- [ ] Environment variables set (not hardcoded)
- [ ] API keys secured
- [ ] Contact form has rate limiting (if implemented)
- [ ] Terms & Privacy pages accessible

---

## 📊 **Monitoring & Analytics**

### **Vercel Analytics** (Built-in)
- Page views
- Performance metrics
- Available in dashboard

### **Google Analytics** (Optional)
1. Create GA4 property
2. Add tracking code to `src/app/layout.tsx`
3. Track user behavior

---

## 🆘 **Troubleshooting**

### **Domain Not Connecting**
- Check DNS records are correct
- Wait for DNS propagation (up to 48 hours)
- Verify nameservers if using Vercel DNS

### **Build Fails**
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version (Vercel uses 18.x by default)

### **Environment Variables Not Working**
- Ensure variable name starts with `NEXT_PUBLIC_` for client-side
- Redeploy after adding variables
- Check variable is set for correct environment

---

## 📞 **Next Steps After Deployment**

1. ✅ Test all pages
2. ✅ Submit sitemap to Google Search Console
3. ✅ Set up Google Analytics (optional)
4. ✅ Monitor performance in Vercel dashboard
5. ✅ Share your site! 🎉

---

## 💡 **Pro Tips**

1. **Use Vercel's Preview Deployments**: Every PR gets a preview URL
2. **Enable Automatic Deployments**: Push to main = auto-deploy
3. **Monitor Performance**: Use Vercel Analytics to track Core Web Vitals
4. **Set Up Custom 404**: Create `src/app/not-found.tsx`
5. **Enable Edge Functions**: For faster global performance

---

## 📚 **Resources**

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Domain Setup Guide](https://vercel.com/docs/concepts/projects/domains)
- [Google Search Console](https://search.google.com/search-console)

---

**Ready to deploy?** Start with Part 1 (Domain Purchase) and work through each section. If you need help with any step, let me know!
