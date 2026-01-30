# 🚀 Step-by-Step Deployment Guide

Follow these steps **one at a time** to deploy your Trailblaze Prep website.

---

## **STEP 1: Initialize Git Repository** (5 minutes)

### **1.1 Open Terminal**
Open Terminal in your project directory:
```bash
cd /Users/brahmajikatragadda/Downloads/salesforce-certifications
```

### **1.2 Initialize Git**
```bash
git init
```

### **1.3 Add All Files**
```bash
git add .
```

### **1.4 Create First Commit**
```bash
git commit -m "Initial commit: Trailblaze Prep website ready for deployment"
```

**✅ Step 1 Complete!** You now have a git repository.

---

## **STEP 2: Create GitHub Repository** (5 minutes)

### **2.1 Go to GitHub**
1. Open https://github.com in your browser
2. Sign in (or create account if needed)

### **2.2 Create New Repository**
1. Click the **"+"** icon (top right) → **"New repository"**
2. **Repository name**: `trailblaze-prep` (or your preferred name)
3. **Description**: "Salesforce certification practice questions and study guides"
4. **Visibility**: Choose **Public** (or Private if you prefer)
5. **DO NOT** check "Initialize with README" (we already have files)
6. Click **"Create repository"**

### **2.3 Copy Repository URL**
GitHub will show you commands. Copy the repository URL (looks like):
```
https://github.com/YOUR_USERNAME/trailblaze-prep.git
```

**✅ Step 2 Complete!** You now have a GitHub repository.

---

## **STEP 3: Connect Local Repository to GitHub** (2 minutes)

### **3.1 Add Remote**
In your terminal, run (replace with YOUR repository URL):
```bash
git remote add origin https://github.com/YOUR_USERNAME/trailblaze-prep.git
```

### **3.2 Rename Branch to Main**
```bash
git branch -M main
```

### **3.3 Push to GitHub**
```bash
git push -u origin main
```

**Note**: You may be prompted for GitHub credentials. Use:
- **Username**: Your GitHub username
- **Password**: Use a Personal Access Token (not your password)
  - Create token: https://github.com/settings/tokens
  - Select "repo" scope

**✅ Step 3 Complete!** Your code is now on GitHub.

---

## **STEP 4: Deploy to Vercel** (10 minutes)

### **4.1 Sign Up for Vercel**
1. Go to https://vercel.com
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (recommended)
4. Authorize Vercel to access your GitHub

### **4.2 Create New Project**
1. Click **"Add New..."** → **"Project"**
2. You'll see your GitHub repositories
3. Find **"trailblaze-prep"** (or your repo name)
4. Click **"Import"**

### **4.3 Configure Project**
Vercel will auto-detect Next.js. Verify:
- **Framework Preset**: Next.js ✅
- **Root Directory**: `./` ✅
- **Build Command**: `next build` ✅
- **Output Directory**: `.next` ✅

### **4.4 Add Environment Variable**
Before deploying, click **"Environment Variables"**:
- **Name**: `NEXT_PUBLIC_SITE_URL`
- **Value**: `https://trailblazeprep.com` (or your domain)
- Click **"Add"**

### **4.5 Deploy**
1. Click **"Deploy"**
2. Wait 2-3 minutes for build
3. Your site will be live at: `your-project.vercel.app`

**✅ Step 4 Complete!** Your site is deployed!

---

## **STEP 5: Purchase Domain** (10 minutes)

### **5.1 Choose Domain Registrar**
Recommended options:
- **Namecheap**: https://www.namecheap.com (~$10-15/year)
- **Cloudflare**: https://www.cloudflare.com/products/registrar/ (~$8-10/year)
- **Google Domains**: https://domains.google (~$12/year)
- **Vercel Domains**: Purchase directly in Vercel dashboard

### **5.2 Search for Domain**
Search for: `trailblazeprep.com` (or your preferred name)

### **5.3 Purchase Domain**
1. Add to cart
2. Complete purchase
3. Domain will be in your account

**✅ Step 5 Complete!** You now own your domain.

---

## **STEP 6: Connect Domain to Vercel** (5-30 minutes)

### **6.1 In Vercel Dashboard**
1. Go to your project → **"Settings"** → **"Domains"**
2. Click **"Add Domain"**
3. Enter: `trailblazeprep.com`
4. Click **"Add"**

### **6.2 Configure DNS**
Vercel will show DNS records to add. You have two options:

#### **Option A: Use Vercel Nameservers (Easier)**
1. Copy the nameservers Vercel provides:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```
2. Go to your domain registrar
3. Find "Nameservers" or "DNS" settings
4. Replace existing nameservers with Vercel's
5. Save

#### **Option B: Add A Record (More Control)**
1. In your domain registrar's DNS settings
2. Add A record:
   - **Type**: A
   - **Name**: @
   - **Value**: `76.76.21.21`
3. Add CNAME record:
   - **Type**: CNAME
   - **Name**: www
   - **Value**: `cname.vercel-dns.com`

### **6.3 Wait for DNS Propagation**
- Usually takes 5 minutes to 48 hours
- Check status in Vercel dashboard
- Verify at: https://www.whatsmydns.net

### **6.4 SSL Certificate**
- Vercel automatically provisions SSL (HTTPS)
- Usually ready within minutes after DNS propagates
- Check for green lock icon in browser

**✅ Step 6 Complete!** Your domain is connected!

---

## **STEP 7: Post-Deployment Verification** (10 minutes)

### **7.1 Test Your Site**
1. Visit: `https://trailblazeprep.com`
2. Check all pages load correctly
3. Test navigation
4. Verify HTTPS (green lock icon)

### **7.2 Submit Sitemap**
1. Go to https://search.google.com/search-console
2. Add property → Enter your domain
3. Verify ownership (DNS verification recommended)
4. Go to "Sitemaps" section
5. Submit: `https://trailblazeprep.com/sitemap.xml`

### **7.3 Test Key Pages**
- ✅ Homepage: `https://trailblazeprep.com`
- ✅ All Certifications: `https://trailblazeprep.com/certifications`
- ✅ Sample cert page: `https://trailblazeprep.com/certifications/administrator`
- ✅ Contact: `https://trailblazeprep.com/contact`

**✅ Step 7 Complete!** Your site is live and verified!

---

## **🎉 CONGRATULATIONS!**

Your Trailblaze Prep website is now:
- ✅ Live on the internet
- ✅ Accessible via your custom domain
- ✅ Secured with HTTPS
- ✅ Optimized for SEO
- ✅ Ready for visitors!

---

## **📋 Quick Reference**

**Your Site URL**: `https://trailblazeprep.com`
**Vercel Dashboard**: https://vercel.com/dashboard
**GitHub Repository**: `https://github.com/YOUR_USERNAME/trailblaze-prep`
**Sitemap**: `https://trailblazeprep.com/sitemap.xml`
**Robots.txt**: `https://trailblazeprep.com/robots.txt`

---

## **🆘 Need Help?**

If you get stuck on any step:
1. Check the error message
2. Review the step instructions
3. Check Vercel/GitHub documentation
4. Let me know which step you're on and I'll help!

---

**Ready to start?** Begin with **STEP 1** above! 🚀
