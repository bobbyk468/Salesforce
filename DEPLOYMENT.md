# Quick Deployment Guide

## 🚀 **Fastest Path to Launch**

### **Step 1: Domain Purchase** (5 minutes)
1. Go to [Namecheap](https://www.namecheap.com) or [Cloudflare](https://www.cloudflare.com/products/registrar/)
2. Search for: `trailblazeprep.com` (or your preferred domain)
3. Purchase domain (~$10-15/year)

### **Step 2: Push to GitHub** (5 minutes)
```bash
# If not already a git repo
git init
git add .
git commit -m "Initial commit"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### **Step 3: Deploy to Vercel** (5 minutes)
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "Add New Project"
4. Import your repository
5. Click "Deploy" (Vercel auto-detects Next.js)

### **Step 4: Add Domain** (5 minutes)
1. In Vercel → Project → Settings → Domains
2. Add your domain: `trailblazeprep.com`
3. Follow DNS instructions (add A record or nameservers)
4. Wait 5-30 minutes for DNS propagation

### **Step 5: Set Environment Variable** (2 minutes)
1. In Vercel → Project → Settings → Environment Variables
2. Add: `NEXT_PUBLIC_SITE_URL` = `https://trailblazeprep.com`
3. Redeploy (or wait for auto-deploy)

### **Step 6: Verify** (5 minutes)
- ✅ Visit your domain
- ✅ Check HTTPS (green lock)
- ✅ Test a few pages
- ✅ Submit sitemap to Google Search Console

**Total Time: ~30 minutes** ⚡

---

## 📋 **Environment Variables Needed**

Add these in Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_SITE_URL=https://trailblazeprep.com
```

**Optional** (if using contact form):
```
RESEND_API_KEY=re_xxxxx
```

---

## ✅ **Post-Deployment Checklist**

- [ ] Domain is connected and HTTPS works
- [ ] All pages load correctly
- [ ] Sitemap accessible: `https://yourdomain.com/sitemap.xml`
- [ ] Robots.txt accessible: `https://yourdomain.com/robots.txt`
- [ ] Submit sitemap to Google Search Console
- [ ] Test mobile responsiveness
- [ ] Verify contact form works (if implemented)

---

## 🆘 **Need Help?**

- **Vercel Docs**: https://vercel.com/docs
- **Domain Issues**: Check DNS propagation at whatsmydns.net
- **Build Errors**: Check build logs in Vercel dashboard

---

**That's it!** Your site should be live in ~30 minutes. 🎉
