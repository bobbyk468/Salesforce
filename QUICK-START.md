# ⚡ Quick Start - Deployment Commands

Copy and paste these commands **one at a time** in your terminal.

---

## **STEP 1: Initialize Git**

```bash
cd /Users/brahmajikatragadda/Downloads/salesforce-certifications
git init
git add .
git commit -m "Initial commit: Trailblaze Prep website ready for deployment"
```

**✅ Done!** Now go to GitHub and create a repository (see STEP 2 in DEPLOYMENT-STEPS.md)

---

## **STEP 2: After Creating GitHub Repo**

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual values:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

**✅ Done!** Your code is on GitHub. Now deploy to Vercel (see STEP 4 in DEPLOYMENT-STEPS.md)

---

## **Need Help?**

See `DEPLOYMENT-STEPS.md` for detailed instructions with screenshots guidance.
