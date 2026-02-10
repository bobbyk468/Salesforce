# Favicon Setup Guide

## 📋 **Required Favicon Files**

You need to create and add these files to the `/public` directory:

1. **favicon-16x16.png** - 16x16 pixels
2. **favicon-32x32.png** - 32x32 pixels  
3. **apple-touch-icon.png** - 180x180 pixels
4. **favicon.ico** - 16x16 or 32x32 (optional, for older browsers)

## 🎨 **Design Guidelines**

### **Recommended Design:**
- Use Trailblaze Prep logo or Salesforce-inspired icon
- Blue color scheme (#0176D3 - Salesforce blue)
- Simple, recognizable at small sizes
- High contrast for visibility

### **Tools to Create Favicons:**
1. **Favicon.io** - https://favicon.io (free, easy)
2. **RealFaviconGenerator** - https://realfavicongenerator.net
3. **Canva** - Create 180x180 image, export as PNG
4. **Figma** - Design and export at multiple sizes

## 📝 **Steps to Add Favicons**

1. **Create the images** using one of the tools above
2. **Save files** to `/public` directory:
   ```
   public/
     ├── favicon-16x16.png
     ├── favicon-32x32.png
     ├── apple-touch-icon.png
     └── favicon.ico (optional)
   ```

3. **Code is already configured** in `src/app/layout.tsx` - no code changes needed!

4. **Test locally:**
   - Run `npm run dev`
   - Check browser tab for favicon
   - Test on mobile device for apple-touch-icon

## ✅ **Verification**

After adding files, verify:
- ✅ Favicon appears in browser tab
- ✅ Favicon appears in bookmarks
- ✅ Apple touch icon works on iOS devices
- ✅ No 404 errors in browser console

## 🚀 **Quick Start (Using Favicon.io)**

1. Go to https://favicon.io
2. Upload your logo or use text generator
3. Download favicon package
4. Extract files to `/public` directory
5. Done! Favicons will work automatically.

---

**Note**: The code is already configured in `layout.tsx`. You just need to add the image files!
