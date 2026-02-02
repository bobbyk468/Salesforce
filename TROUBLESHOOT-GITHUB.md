# 🔧 Troubleshooting GitHub Repository Issues

## **Error: "Repository not found"**

This error usually means one of these:

---

## **Solution 1: Create the Repository First**

The repository might not exist yet. Let's create it:

### **Step 1: Go to GitHub**
1. Open https://github.com/bobbyk468
2. Click the **"+"** icon (top right) → **"New repository"**

### **Step 2: Create Repository**
- **Repository name**: `Salesforce`
- **Description**: "Salesforce certification study guides and practice questions"
- **Visibility**: Choose **Public** or **Private**
- **DO NOT** check "Initialize with README"
- Click **"Create repository"**

### **Step 3: After Creating, Try Again**
Run the push commands again.

---

## **Solution 2: Check Repository Name**

Verify the exact repository name:
- Go to https://github.com/bobbyk468
- Check if the repository is named exactly `Salesforce` (case-sensitive)
- It might be `salesforce` (lowercase) or something else

---

## **Solution 3: Authentication Issue**

If the repository exists but you're getting this error, it might be authentication:

### **Use Personal Access Token:**
1. Go to https://github.com/settings/tokens
2. Click **"Generate new token (classic)"**
3. Name it: "Trailblaze Prep Deployment"
4. Select scopes:
   - ✅ **repo** (full control of private repositories)
5. Click **"Generate token"**
6. **Copy the token** (you won't see it again!)

### **Update Remote URL with Token:**
```bash
git remote set-url origin https://YOUR_TOKEN@github.com/bobbyk468/Salesforce.git
```

Or use your username:
```bash
git remote set-url origin https://bobbyk468@github.com/bobbyk468/Salesforce.git
```

---

## **Solution 4: Check Repository Access**

Make sure:
- You're logged into GitHub as `bobbyk468`
- You have write access to the repository
- The repository exists and is accessible

---

## **Quick Fix Commands**

Try these commands in order:

### **1. Remove existing remote (if any)**
```bash
git remote remove origin
```

### **2. Add remote again**
```bash
git remote add origin https://github.com/bobbyk468/Salesforce.git
```

### **3. Verify remote**
```bash
git remote -v
```

Should show:
```
origin  https://github.com/bobbyk468/Salesforce.git (fetch)
origin  https://github.com/bobbyk468/Salesforce.git (push)
```

### **4. Try pushing again**
```bash
git push -u origin "Winter'26"
```

---

## **Alternative: Create Repository via GitHub CLI**

If you have GitHub CLI installed:

```bash
gh repo create Salesforce --public --source=. --remote=origin --push
```

---

## **Still Having Issues?**

Let me know:
1. Does the repository exist at https://github.com/bobbyk468/Salesforce?
2. Are you logged in as `bobbyk468`?
3. Do you have write access to the repository?

I'll help you fix it! 🚀
