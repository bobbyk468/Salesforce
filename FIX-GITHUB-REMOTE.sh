#!/bin/bash

# Fix GitHub remote repository connection

echo "🔧 Fixing GitHub remote connection..."

# Remove existing remote if it exists
echo "🗑️  Removing existing remote..."
git remote remove origin 2>/dev/null || echo "No existing remote found"

# Add the correct remote
echo "➕ Adding remote repository..."
git remote add origin https://github.com/bobbyk468/Salesforce.git

# Verify remote
echo "✅ Verifying remote..."
git remote -v

echo ""
echo "📋 Next steps:"
echo "1. Make sure the repository exists at: https://github.com/bobbyk468/Salesforce"
echo "2. If it doesn't exist, create it on GitHub first"
echo "3. Then run: git push -u origin \"Winter'26\""
echo ""
echo "If you get authentication errors, use a Personal Access Token:"
echo "1. Go to: https://github.com/settings/tokens"
echo "2. Generate new token with 'repo' scope"
echo "3. Use token as password when pushing"
