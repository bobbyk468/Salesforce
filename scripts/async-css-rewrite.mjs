#!/usr/bin/env node
/**
 * Post-build: make Next.js main CSS non-blocking so LCP isn't delayed.
 * Rewrites <link rel="stylesheet" href="/_next/static/css/..."> to
 * media="print" onload="this.media='all'" and adds noscript fallback.
 * Run after `next build`. Safe to run multiple times.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const serverDir = path.join(root, '.next', 'server')

const LINK_RE = /<link rel="stylesheet" href="(\/_next\/static\/css\/[^"]+\.css)" data-precedence="next"\/>/g

function rewrite(html) {
  return html.replace(LINK_RE, (_, href) =>
    `<link rel="stylesheet" href="${href}" media="print" onload="this.media='all'" data-precedence="next"/><noscript><link rel="stylesheet" href="${href}" data-precedence="next"/></noscript>`
  )
}

function walk(dir) {
  if (!fs.existsSync(dir)) return []
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files = []
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) files.push(...walk(full))
    else if (e.name.endsWith('.html')) files.push(full)
  }
  return files
}

const htmlFiles = walk(serverDir)
let changed = 0
for (const file of htmlFiles) {
  const orig = fs.readFileSync(file, 'utf8')
  const next = rewrite(orig)
  if (next !== orig) {
    fs.writeFileSync(file, next)
    changed++
  }
}
console.log(`[async-css-rewrite] Updated ${changed}/${htmlFiles.length} HTML file(s).`)
