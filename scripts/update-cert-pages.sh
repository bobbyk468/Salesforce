#!/bin/bash
# Script to update all certification pages with improved UI
# This script adds table of contents and improved layout to all cert pages

echo "Updating certification pages with improved UI..."

# Find all certification page.tsx files (excluding role pages and index)
find src/app/certifications -name "page.tsx" -type f ! -path "*/role/*" ! -path "*/page.tsx" | while read file; do
  echo "Processing: $file"
  
  # Check if file already has CertTableOfContents (skip if already updated)
  if grep -q "CertTableOfContents" "$file"; then
    echo "  ✓ Already updated, skipping..."
    continue
  fi
  
  # Check if file has the old max-w-5xl pattern
  if grep -q "max-w-5xl mx-auto px-4 py-12" "$file"; then
    echo "  → Needs update"
    # This would require sed/perl to do the replacements
    # For now, we'll do manual updates
  fi
done

echo "Done!"
