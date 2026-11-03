import puppeteer from 'puppeteer'

const base = process.argv.find((arg) => arg.startsWith('--base='))?.slice('--base='.length)
  ?? 'http://localhost:3000'
const routes = ['/', '/certifications/administrator']
const widths = [320, 375, 390, 768]
const browser = await puppeteer.launch({ headless: true })
const results = []
let failed = false

try {
  for (const route of routes) {
    const page = await browser.newPage()
    await page.setCacheEnabled(false)

    for (const width of widths) {
      await page.setViewport({ width, height: 900, isMobile: true, hasTouch: true })
      const response = await page.goto(new URL(route, base).href, {
        waitUntil: 'networkidle2',
        timeout: 30_000,
      })

      const before = await page.evaluate(() => {
        const button = document.querySelector('button[aria-label="Open menu"]')
        const rect = button?.getBoundingClientRect()
        return {
          innerWidth: window.innerWidth,
          scrollWidth: document.documentElement.scrollWidth,
          menuButton: rect ? { width: rect.width, height: rect.height } : null,
        }
      })

      if (!response?.ok() || before.innerWidth !== width || before.scrollWidth > width
        || !before.menuButton || before.menuButton.width < 44 || before.menuButton.height < 44) {
        failed = true
      }

      await page.locator('button[aria-label="Open menu"]').click()
      await page.waitForSelector('button[aria-label="Close menu"]')
      const after = await page.evaluate(() => {
        const panel = [...document.querySelectorAll('header div')]
          .find((element) => String(element.className).includes('max-h-[75vh]'))
        const rect = panel?.getBoundingClientRect()
        return {
          innerWidth: window.innerWidth,
          scrollWidth: document.documentElement.scrollWidth,
          menuOpen: Boolean(document.querySelector('button[aria-label="Close menu"]')),
          menuPanel: rect ? {
            left: rect.left,
            right: rect.right,
            width: rect.width,
          } : null,
        }
      })

      if (after.innerWidth !== width || after.scrollWidth > width || !after.menuOpen
        || !after.menuPanel || after.menuPanel.left < 0 || after.menuPanel.right > width) {
        failed = true
      }

      results.push({ route, width, httpStatus: response?.status(), before, after })
    }

    await page.close()
  }
} finally {
  await browser.close()
}

console.log(JSON.stringify({ base, routes, widths, chromium: await puppeteer.executablePath(), results }, null, 2))
if (failed) process.exitCode = 1
