# 🚀 Step 2: Deploy to Vercel

Your code is now on GitHub! Let's deploy it to Vercel.

---

## **STEP 2.1: Sign Up for Vercel** (2 minutes)

1. Go to **https://vercel.com**
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (recommended - easiest)
4. Authorize Vercel to access your GitHub account
5. Complete signup

**✅ Done!** You're now signed up for Vercel.

---

## **STEP 2.2: Create New Project** (3 minutes)

1. In Vercel dashboard, click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find **"Salesforce"** repository
4. Click **"Import"** next to it

**✅ Done!** Vercel is importing your project.

---

## **STEP 2.3: Configure Project** (2 minutes)

Vercel will auto-detect Next.js. Verify these settings:

### **Project Settings:**
- **Framework Preset**: Next.js ✅ (auto-detected)
- **Root Directory**: `./` ✅ (default)
- **Build Command**: `next build` ✅ (auto-detected)
- **Output Directory**: `.next` ✅ (auto-detected)
- **Install Command**: `npm install` ✅ (default)

### **Environment Variables:**
Before deploying, click **"Environment Variables"** section:

1. Click **"Add"** or **"Add New"**
2. **Name**: `NEXT_PUBLIC_SITE_URL`
3. **Value**: `https://trailblazeprep.com` (or your domain, or use the Vercel URL for now)
4. Select environments: ✅ Production, ✅ Preview, ✅ Development
5. Click **"Add"**

**Important**: If you don't have a domain yet, you can use:
- Value: `https://your-project-name.vercel.app` (we'll update this later)

**✅ Done!** Environment variable is set.

---

## **STEP 2.4: Select Branch** (1 minute)

1. In the project configuration, look for **"Branch"** or **"Git Branch"**
2. Select: **`Winter'26`** (your branch name)
3. This ensures Vercel deploys from the correct branch

**✅ Done!** Branch selected.

---

## **STEP 2.5: Deploy** (3-5 minutes)

1. Click the big **"Deploy"** button
2. Wait 2-3 minutes for the build to complete
3. You'll see build logs in real-time
4. When complete, you'll see: **"Congratulations! Your project has been deployed."**

**✅ Done!** Your site is live!

---

## **STEP 2.6: Get Your Live URL**

After deployment, Vercel will show you:
- **Production URL**: `https://your-project-name.vercel.app`
- **Deployment URL**: Click to view your live site

**✅ Done!** Your site is accessible!

---

## **✅ Step 2 Complete!**

Your Trailblaze Prep website is now:
- ✅ Live on the internet
- ✅ Accessible via Vercel URL
- ✅ Automatically deployed from GitHub

---

## **📋 What's Next?**

**Step 3**: Purchase and connect your custom domain (see `DEPLOYMENT-STEPS.md`)

Or test your site first:
- Visit your Vercel URL
- Test all pages
- Verify everything works

---

## **🆘 Troubleshooting**

### **Build Fails?**
- Check build logs in Vercel dashboard
- Look for error messages
- Common issues: missing dependencies, environment variables

### **Site Not Loading?**
- Check deployment status (should be "Ready")
- Verify environment variable is set
- Check browser console for errors

### **Need Help?**
Let me know what step you're on and I'll help! 🚀

---

**Ready?** Start with **STEP 2.1** above!
