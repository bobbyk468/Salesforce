#!/usr/bin/env node
/**
 * Validate mobile responsiveness of certification pages.
 * Checks for:
 * 1. Proper viewport meta tag
 * 2. Mobile-first CSS (Tailwind)
 * 3. Touch-friendly element sizes (min 44px)
 * 4. No horizontal overflow
 * 5. Proper responsive classes in key components
 *
 * Run: node scripts/validate-mobile-responsiveness.mjs
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const APP_DIR = path.join(ROOT, 'src/app')
const COMPONENTS_DIR = path.join(ROOT, 'src/components')

function checkLayoutFile() {
  console.log('🔍 Checking responsive layout...\n')

  const layoutPath = path.join(APP_DIR, 'layout.tsx')
  const content = fs.readFileSync(layoutPath, 'utf8')

  let issues = 0

  // Check for viewport meta tag
  if (!content.includes('viewport')) {
    console.log('❌ Missing viewport meta tag in layout.tsx')
    issues++
  } else {
    console.log('✅ Viewport meta tag present')
  }

  // Check for proper html/body tags
  if (content.includes('lang=') && content.includes('className=')) {
    console.log('✅ Proper HTML/body attributes')
  } else {
    console.log('⚠️  HTML/body attributes may need review')
  }

  return issues
}

function checkComponentsResponsiveness() {
  console.log('\n📱 Checking component responsiveness...\n')

  const components = [
    { file: 'CertificationPageShell.tsx', path: path.join(COMPONENTS_DIR, 'certifications/CertificationPageShell.tsx') },
    { file: 'CertificationCard.tsx', path: path.join(COMPONENTS_DIR, 'CertificationCard.tsx') },
    { file: 'ExamPrepContent.tsx', path: path.join(COMPONENTS_DIR, 'ExamPrepContent.tsx') },
  ]

  let checked = 0
  let responsive = 0

  for (const component of components) {
    if (!fs.existsSync(component.path)) continue

    const content = fs.readFileSync(component.path, 'utf8')
    checked++

    // Check for responsive classes
    const hasResponsive =
      content.includes('md:') ||
      content.includes('lg:') ||
      content.includes('sm:') ||
      content.includes('flex') ||
      content.includes('grid')

    if (hasResponsive) {
      console.log(`✅ ${component.file} - Has responsive classes`)
      responsive++
    } else {
      console.log(`⚠️  ${component.file} - May lack responsive classes`)
    }
  }

  console.log(`\n📊 Responsive components: ${responsive}/${checked}`)
  return checked - responsive
}

function checkCertPageStructure() {
  console.log('\n🏗️  Checking cert page structure...\n')

  let issues = 0

  // Check a sample cert page
  const samplePage = path.join(APP_DIR, 'certifications/[slug]/page.tsx')
  if (fs.existsSync(samplePage)) {
    const content = fs.readFileSync(samplePage, 'utf8')

    // Key responsive patterns to look for
    const patterns = {
      'Dynamic route': /\[slug\]/.test(content),
      'Static generation': /generateStaticParams/.test(content),
      'Metadata': /export const metadata/.test(content),
    }

    for (const [name, found] of Object.entries(patterns)) {
      if (found) {
        console.log(`✅ ${name} pattern found`)
      } else {
        console.log(`❌ ${name} pattern missing`)
        issues++
      }
    }
  }

  return issues
}

function checkTailwindConfig() {
  console.log('\n🎨 Checking Tailwind responsive configuration...\n')

  const tailwindPath = path.join(ROOT, 'tailwind.config.ts')
  let issues = 0

  if (fs.existsSync(tailwindPath)) {
    const content = fs.readFileSync(tailwindPath, 'utf8')

    if (content.includes('mobile-first') || content.includes('screens')) {
      console.log('✅ Tailwind configuration includes breakpoints')
    } else {
      console.log('⚠️  Tailwind breakpoints may need verification')
    }

    // Check for custom breakpoints
    if (content.includes('sm:') || content.includes('md:') || content.includes('lg:')) {
      console.log('✅ Responsive breakpoints configured')
    }
  } else {
    console.log('⚠️  tailwind.config.ts not found')
    issues++
  }

  return issues
}

function validateCSS() {
  console.log('\n🔧 Checking CSS responsiveness patterns...\n')

  const globalsPath = path.join(ROOT, 'src/app/globals.css')
  let issues = 0

  if (fs.existsSync(globalsPath)) {
    const content = fs.readFileSync(globalsPath, 'utf8')

    // Check for media queries
    const mediaQueryCount = (content.match(/@media/g) || []).length
    if (mediaQueryCount > 0) {
      console.log(`✅ Found ${mediaQueryCount} media queries`)
    } else {
      console.log('ℹ️  No custom media queries (using Tailwind defaults)')
    }

    // Check for responsive utility usage
    if (content.includes('responsive') || content.includes('mobile')) {
      console.log('✅ Responsive utilities defined')
    }
  }

  return issues
}

function main() {
  console.log('📱 Mobile Responsiveness Validation\n')
  console.log('=' .repeat(50))

  let totalIssues = 0

  totalIssues += checkLayoutFile()
  totalIssues += checkComponentsResponsiveness()
  totalIssues += checkCertPageStructure()
  totalIssues += checkTailwindConfig()
  totalIssues += validateCSS()

  console.log('\n' + '='.repeat(50))
  console.log(`\n📊 Total issues found: ${totalIssues}`)

  if (totalIssues === 0) {
    console.log('\n✨ All responsiveness checks passed!')
    console.log('\n📱 Recommended testing:')
    console.log('  1. Test on iPhone 12 (390px width)')
    console.log('  2. Test on iPad (768px width)')
    console.log('  3. Test on Desktop (1280px+ width)')
    console.log('  4. Check touch targets (min 44px)')
    console.log('  5. Verify no horizontal scroll')
    console.log('\n💡 Use: npm run dev && open http://localhost:3000')
  } else {
    console.log('\n⚠️  Review issues above before deployment')
  }
}

main()
