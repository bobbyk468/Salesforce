#!/bin/bash

# Script to push Trailblaze Prep code to GitHub repository
# Repository: https://github.com/bobbyk468/Salesforce.git
# Branch/Folder: Winter'26

echo "🚀 Starting deployment to GitHub..."

# Step 1: Initialize git repository
echo "📦 Initializing git repository..."
git init

# Step 2: Add all files
echo "➕ Adding all files..."
git add .

# Step 3: Create initial commit
echo "💾 Creating initial commit..."
git commit -m "Initial commit: Trailblaze Prep website - Winter '26 release"

# Step 4: Add remote repository
echo "🔗 Adding remote repository..."
git remote add origin https://github.com/bobbyk468/Salesforce.git

# Step 5: Create and switch to Winter'26 branch
echo "🌿 Creating Winter'26 branch..."
git checkout -b "Winter'26"

# Step 6: Push to GitHub
echo "⬆️  Pushing to GitHub..."
git push -u origin "Winter'26"

echo "✅ Done! Your code is now in the Winter'26 branch/folder on GitHub."
echo "📍 Repository: https://github.com/bobbyk468/Salesforce/tree/Winter'26"
