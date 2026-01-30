# 📤 Push Code to GitHub - Step by Step

## **Repository**: https://github.com/bobbyk468/Salesforce.git
## **Branch/Folder**: Winter'26

---

## **Option 1: Use the Script (Easiest)**

Run this command in your terminal:

```bash
cd /Users/brahmajikatragadda/Downloads/salesforce-certifications
chmod +x PUSH-TO-GITHUB.sh
./PUSH-TO-GITHUB.sh
```

---

## **Option 2: Manual Commands (One by One)**

Open Terminal and run these commands **one at a time**:

### **Step 1: Navigate to Project**
```bash
cd /Users/brahmajikatragadda/Downloads/salesforce-certifications
```

### **Step 2: Initialize Git**
```bash
git init
```

### **Step 3: Add All Files**
```bash
git add .
```

### **Step 4: Create Commit**
```bash
git commit -m "Initial commit: Trailblaze Prep website - Winter '26 release"
```

### **Step 5: Add Remote Repository**
```bash
git remote add origin https://github.com/bobbyk468/Salesforce.git
```

### **Step 6: Create Winter'26 Branch**
```bash
git checkout -b "Winter'26"
```

### **Step 7: Push to GitHub**
```bash
git push -u origin "Winter'26"
```

**Note**: You may be prompted for GitHub credentials:
- **Username**: `bobbyk468`
- **Password**: Use a Personal Access Token (not your password)
  - Create token: https://github.com/settings/tokens
  - Select "repo" scope
  - Copy token and use as password

---

## **✅ After Pushing**

Your code will be available at:
- **Branch**: https://github.com/bobbyk468/Salesforce/tree/Winter'26
- **Repository**: https://github.com/bobbyk468/Salesforce

---

## **🆘 Troubleshooting**

### **If "remote already exists" error:**
```bash
git remote remove origin
git remote add origin https://github.com/bobbyk468/Salesforce.git
```

### **If authentication fails:**
1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Select "repo" scope
4. Copy the token
5. Use token as password when pushing

### **If branch name has issues:**
The branch name "Winter'26" contains an apostrophe. If you prefer, we can use:
- `Winter-26` (hyphen instead)
- `Winter26` (no apostrophe)

Let me know if you encounter any issues!

---

**Ready?** Start with Step 1 above! 🚀
