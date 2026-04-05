#!/usr/bin/env node
/**
 * Tweet Image Generator for TrailblazePrep
 *
 * Generates PNG images for each thread: cover, stats, CTA, link-reply card, engagement quotes,
 * and pending daily tips. Composites official Salesforce artwork (Trailhead + certification site).
 * Saves under scripts/tweet-images/ and updates x-content-queue.json + x-tips-queue.json.
 *
 * Usage:
 *   node scripts/generate-tweet-images.mjs                    # pending threads + pending tip PNGs
 *   node scripts/generate-tweet-images.mjs <thread-id>        # one thread + pending tips
 *   node scripts/generate-tweet-images.mjs --tips-only        # all tips (sets imageFile on every row)
 *   node scripts/generate-tweet-images.mjs --tips-only --missing-only  # tips missing PNG or imageFile
 */

import puppeteer from 'puppeteer';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname, basename } from 'path';
import { fileURLToPath } from 'url';
import {
  getThreadSfImageUrl,
  LINK_REPLY_SF_URL,
  SF_OFFICIAL,
  sfImageUrlForTipTweet,
} from './sf-official-images.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const QUEUE_FILE = resolve(__dirname, 'x-content-queue.json');
const TIPS_FILE = resolve(__dirname, 'x-tips-queue.json');
const IMAGES_DIR = resolve(__dirname, 'tweet-images');

/** Portable paths in x-content-queue.json (relative to scripts/). */
function queueRelImage(filename) {
  return `tweet-images/${basename(filename)}`;
}

const IMG_W = 1200;
const IMG_H = 675;

// ── Brand colors ─────────────────────────────────────────────────────────────
const BRAND = {
  blue: '#0176D3',
  darkBlue: '#032D60',
  lightBlue: '#1B96FF',
  white: '#FFFFFF',
  gray: '#F3F3F3',
  darkGray: '#181818',
  accent: '#FFB75D',
};

async function fetchAsDataUrl(imageUrl) {
  const res = await fetch(imageUrl, { redirect: 'follow' });
  if (!res.ok) throw new Error(`${res.status} ${imageUrl}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const ct = res.headers.get('content-type') || 'image/png';
  return `data:${ct};base64,${buf.toString('base64')}`;
}

function extractUrlFromReply(text) {
  const m = text.match(/https?:\/\/[^\s]+/);
  return m ? m[0].replace(/[),.;]+$/, '') : 'https://trailblazeprep.com';
}

// ── HTML templates ────────────────────────────────────────────────────────────

function coverTemplate(hook, threadTitle, sfDataUrl) {
  // Extract first sentence as big headline, rest as subtext
  const lines = hook.split('\n').filter(l => l.trim());
  const headline = lines[0];
  const sublines = lines.slice(1).join('\n');

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: ${IMG_W}px; height: ${IMG_H}px; overflow: hidden;
    font-family: -apple-system, 'Segoe UI', sans-serif;
    background: ${BRAND.darkBlue};
    display: flex; flex-direction: column;
    position: relative;
  }
  /* Background pattern */
  .bg-circles {
    position: absolute; inset: 0;
    background:
      radial-gradient(circle at 90% 10%, ${BRAND.lightBlue}22 0%, transparent 45%),
      radial-gradient(circle at 10% 90%, ${BRAND.blue}33 0%, transparent 40%);
  }
  /* Top bar */
  .topbar {
    position: relative; z-index: 2;
    padding: 28px 48px;
    display: flex; align-items: center; gap: 12px;
  }
  .logo-dot {
    width: 36px; height: 36px; border-radius: 50%;
    background: ${BRAND.lightBlue};
    display: flex; align-items: center; justify-content: center;
  }
  .logo-dot svg { width: 20px; height: 20px; }
  .brand-name {
    font-size: 18px; font-weight: 700; color: ${BRAND.white};
    letter-spacing: 0.3px;
  }
  .tag {
    margin-left: auto;
    background: ${BRAND.lightBlue}22;
    border: 1px solid ${BRAND.lightBlue}55;
    border-radius: 20px;
    padding: 6px 16px;
    font-size: 13px; color: ${BRAND.lightBlue}; font-weight: 600;
  }
  /* Main content */
  .content {
    position: relative; z-index: 2;
    flex: 1;
    padding: 20px 64px 20px;
    display: flex; flex-direction: column; justify-content: center;
  }
  .content.content-split {
    flex-direction: row;
    align-items: center;
    gap: 36px;
    padding: 16px 48px 16px 56px;
  }
  .content-main { flex: 1; min-width: 0; display: flex; flex-direction: column; justify-content: center; }
  .sf-panel {
    width: 380px; flex-shrink: 0;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    background: rgba(0,0,0,0.22);
    border-radius: 16px;
    padding: 14px 12px;
    border: 1px solid ${BRAND.white}22;
  }
  .sf-panel img {
    max-width: 100%;
    max-height: 400px;
    object-fit: contain;
  }
  .sf-credit {
    margin-top: 10px;
    font-size: 11px;
    color: #AAC8F0;
    text-align: center;
    font-weight: 500;
  }
  .thread-label {
    font-size: 13px; font-weight: 600;
    color: ${BRAND.accent};
    letter-spacing: 1.5px; text-transform: uppercase;
    margin-bottom: 20px;
  }
  .headline {
    font-size: ${sfDataUrl ? '38px' : '46px'};
    font-weight: 800;
    color: ${BRAND.white};
    line-height: 1.15;
    letter-spacing: -0.5px;
    max-width: 900px;
  }
  .headline em {
    font-style: normal;
    color: ${BRAND.lightBlue};
  }
  .subtext {
    margin-top: 20px;
    font-size: 22px; color: #AAC8F0;
    line-height: 1.5; max-width: 820px;
    font-weight: 400;
  }
  /* Bottom bar */
  .bottombar {
    position: relative; z-index: 2;
    padding: 20px 48px;
    border-top: 1px solid ${BRAND.white}18;
    display: flex; align-items: center; justify-content: space-between;
  }
  .url {
    font-size: 16px; color: ${BRAND.lightBlue}; font-weight: 500;
  }
  .thread-badge {
    background: ${BRAND.accent};
    color: ${BRAND.darkBlue};
    border-radius: 6px; padding: 6px 14px;
    font-size: 14px; font-weight: 800;
    letter-spacing: 0.5px;
  }
</style>
</head>
<body>
  <div class="bg-circles"></div>
  <div class="topbar">
    <div class="logo-dot">
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="${BRAND.white}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <span class="brand-name">TrailblazePrep</span>
    <span class="tag">Free Study Guide</span>
  </div>
  <div class="content${sfDataUrl ? ' content-split' : ''}">
    <div class="content-main">
      <div class="thread-label">🧵 Thread</div>
      <div class="headline">${escapeHtml(headline)}</div>
      ${sublines ? `<div class="subtext">${escapeHtml(sublines)}</div>` : ''}
    </div>
    ${sfDataUrl ? `<div class="sf-panel"><img src="${sfDataUrl}" alt="" /><div class="sf-credit">Illustration: Salesforce</div></div>` : ''}
  </div>
  <div class="bottombar">
    <span class="url">trailblazeprep.com</span>
    <span class="thread-badge">READ THREAD ↓</span>
  </div>
</body>
</html>`;
}

function ctaTemplate(url, certName, sfDataUrl) {
  const urlDisplay = url.replace('https://', '');
  const certLabel = certName || 'Salesforce Certification';

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: ${IMG_W}px; height: ${IMG_H}px; overflow: hidden;
    font-family: -apple-system, 'Segoe UI', sans-serif;
    background: ${BRAND.white};
    display: flex;
  }
  /* Left panel */
  .left {
    width: 420px; min-width: 420px;
    background: ${BRAND.darkBlue};
    display: flex; flex-direction: column;
    padding: 48px 44px;
    position: relative;
  }
  .left::after {
    content: '';
    position: absolute; right: -30px; top: 0; bottom: 0;
    width: 60px;
    background: ${BRAND.darkBlue};
    clip-path: polygon(0 0, 0 100%, 100% 100%);
  }
  .logo-row {
    display: flex; align-items: center; gap: 10px;
    margin-bottom: auto;
  }
  .logo-dot {
    width: 32px; height: 32px; border-radius: 50%;
    background: ${BRAND.lightBlue};
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .brand-name { font-size: 16px; font-weight: 700; color: ${BRAND.white}; }
  .left-headline {
    font-size: 38px; font-weight: 800; color: ${BRAND.white};
    line-height: 1.2; margin-bottom: 16px;
  }
  .left-headline span { color: ${BRAND.accent}; }
  .left-sub { font-size: 16px; color: #AAC8F0; line-height: 1.5; }
  .sf-cta-art {
    margin-top: 28px;
    display: flex; flex-direction: column; align-items: center; gap: 8px;
  }
  .sf-cta-art img {
    max-width: 220px; max-height: 200px; object-fit: contain;
    border-radius: 8px;
  }
  .sf-cta-art span {
    font-size: 10px; color: #AAC8F0;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  /* Right panel */
  .right {
    flex: 1;
    display: flex; flex-direction: column;
    padding: 48px 48px 48px 72px;
    justify-content: space-between;
  }
  .cert-label {
    font-size: 13px; font-weight: 700; color: ${BRAND.blue};
    letter-spacing: 1.5px; text-transform: uppercase;
    margin-bottom: 12px;
  }
  .features {
    list-style: none;
    display: flex; flex-direction: column; gap: 16px;
    flex: 1; justify-content: center;
  }
  .features li {
    display: flex; align-items: center; gap: 14px;
    font-size: 20px; color: ${BRAND.darkGray}; font-weight: 500;
  }
  .check {
    width: 28px; height: 28px; border-radius: 50%;
    background: ${BRAND.blue}18;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    font-size: 15px;
  }
  .url-box {
    background: ${BRAND.blue};
    border-radius: 12px;
    padding: 18px 24px;
    display: flex; align-items: center; justify-content: space-between;
  }
  .url-text { font-size: 20px; color: ${BRAND.white}; font-weight: 700; }
  .arrow {
    font-size: 22px; color: ${BRAND.white};
    background: ${BRAND.white}22;
    width: 40px; height: 40px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
  }
</style>
</head>
<body>
  <div class="left">
    <div class="logo-row">
      <div class="logo-dot">
        <svg viewBox="0 0 24 24" fill="none" style="width:18px;height:18px">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="${BRAND.white}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <span class="brand-name">TrailblazePrep</span>
    </div>
    <div class="left-headline">Free <span>Study</span><br/>Guide</div>
    <div class="left-sub">Practice questions mapped to exam topics. No signup needed.</div>
    ${sfDataUrl ? `<div class="sf-cta-art"><img src="${sfDataUrl}" alt="" /><span>Salesforce</span></div>` : ''}
  </div>
  <div class="right">
    <div>
      <div class="cert-label">${escapeHtml(certLabel)}</div>
    </div>
    <ul class="features">
      <li><span class="check">✓</span> 60+ original practice questions</li>
      <li><span class="check">✓</span> Mapped to real exam topics</li>
      <li><span class="check">✓</span> Explanations for every answer</li>
      <li><span class="check">✓</span> No login or signup required</li>
    </ul>
    <div class="url-box">
      <span class="url-text">${escapeHtml(urlDisplay)}</span>
      <span class="arrow">→</span>
    </div>
  </div>
</body>
</html>`;
}

function statTemplate(tweets, sfDataUrl) {
  // Pull key stats/bullets from tweets 2-5
  const statTweets = tweets.slice(1, 5);
  const bullets = [];
  for (const tweet of statTweets) {
    const lines = tweet.split('\n').filter(l => l.trim() && (l.includes('•') || l.match(/^\d+\./) || l.includes('%') || l.includes('→')));
    bullets.push(...lines.map(l => l.trim()));
    if (bullets.length >= 4) break;
  }
  const displayBullets = bullets.slice(0, 4);

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: ${IMG_W}px; height: ${IMG_H}px; overflow: hidden;
    font-family: -apple-system, 'Segoe UI', sans-serif;
    background: ${BRAND.gray};
    display: flex; flex-direction: column;
  }
  .topbar {
    background: ${BRAND.darkBlue};
    padding: 22px 48px;
    display: flex; align-items: center; gap: 12px;
  }
  .logo-dot {
    width: 30px; height: 30px; border-radius: 50%;
    background: ${BRAND.lightBlue};
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .brand-name { font-size: 17px; font-weight: 700; color: ${BRAND.white}; }
  .content {
    flex: 1; padding: 44px 64px;
    display: flex; flex-direction: column; gap: 20px;
    position: relative;
  }
  .sf-stat-corner {
    position: absolute;
    right: 36px;
    bottom: 100px;
    width: 130px;
    height: 130px;
    opacity: 0.92;
  }
  .sf-stat-corner img { width: 100%; height: 100%; object-fit: contain; }
  .section-label {
    font-size: 13px; font-weight: 700; color: ${BRAND.blue};
    letter-spacing: 1.5px; text-transform: uppercase;
  }
  .bullets {
    display: flex; flex-direction: column; gap: 18px;
    flex: 1; justify-content: center;
    max-width: ${sfDataUrl ? '820px' : 'none'};
  }
  .bullet {
    display: flex; align-items: flex-start; gap: 16px;
    background: ${BRAND.white};
    border-radius: 12px; padding: 18px 22px;
    border-left: 4px solid ${BRAND.blue};
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  }
  .bullet-text {
    font-size: 19px; color: ${BRAND.darkGray}; font-weight: 500;
    line-height: 1.4;
  }
  .bottombar {
    background: ${BRAND.blue};
    padding: 16px 48px;
    display: flex; align-items: center; justify-content: space-between;
  }
  .url { font-size: 16px; color: ${BRAND.white}; font-weight: 600; }
  .hashtag { font-size: 14px; color: ${BRAND.white}CC; }
</style>
</head>
<body>
  <div class="topbar">
    <div class="logo-dot">
      <svg viewBox="0 0 24 24" fill="none" style="width:16px;height:16px">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="${BRAND.white}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <span class="brand-name">TrailblazePrep</span>
  </div>
  <div class="content">
    <div class="section-label">Key Insights</div>
    <div class="bullets">
      ${displayBullets.map(b => `
        <div class="bullet">
          <div class="bullet-text">${escapeHtml(b)}</div>
        </div>
      `).join('')}
    </div>
    ${sfDataUrl ? `<div class="sf-stat-corner"><img src="${sfDataUrl}" alt="" /></div>` : ''}
  </div>
  <div class="bottombar">
    <span class="url">trailblazeprep.com</span>
    <span class="hashtag">#SalesforceCertification</span>
  </div>
</body>
</html>`;
}

function quoteTemplate(text, sfDataUrl) {
  // Strip hashtags and URLs for the visual
  const clean = text
    .replace(/https?:\/\/[^\s]+/g, '')
    .replace(/#\w+/g, '')
    .replace(/\n\n+/g, '\n')
    .trim();

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: ${IMG_W}px; height: ${IMG_H}px; overflow: hidden;
    font-family: -apple-system, 'Segoe UI', sans-serif;
    background: ${BRAND.white};
    display: flex; flex-direction: column;
  }
  .topbar {
    background: ${BRAND.darkBlue};
    padding: 20px 48px;
    display: flex; align-items: center; gap: 12px;
  }
  .logo-dot {
    width: 28px; height: 28px; border-radius: 50%;
    background: ${BRAND.lightBlue};
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  }
  .brand-name { font-size: 16px; font-weight: 700; color: ${BRAND.white}; }
  .reply-badge {
    margin-left: auto;
    font-size: 12px; font-weight: 700; color: ${BRAND.lightBlue};
    background: ${BRAND.lightBlue}18;
    border: 1px solid ${BRAND.lightBlue}44;
    border-radius: 20px; padding: 5px 14px;
    letter-spacing: 1px; text-transform: uppercase;
  }
  .content {
    flex: 1;
    display: flex; align-items: center;
    padding: 32px 64px;
    position: relative;
  }
  .quote-bar {
    position: absolute; left: 48px; top: 32px; bottom: 32px;
    width: 5px; border-radius: 3px;
    background: linear-gradient(to bottom, ${BRAND.blue}, ${BRAND.lightBlue});
  }
  .quote-text {
    font-size: 32px; font-weight: 600;
    color: ${BRAND.darkGray};
    line-height: 1.45;
    padding-left: 24px;
    max-width: 980px;
  }
  .quote-mark {
    position: absolute; top: 24px; right: 64px;
    font-size: 120px; line-height: 1;
    color: ${BRAND.blue}12;
    font-family: Georgia, serif;
    font-weight: 900;
  }
  .bottombar {
    padding: 18px 48px;
    border-top: 1px solid #E5E5E5;
    display: flex; align-items: center; justify-content: space-between;
  }
  .url { font-size: 15px; color: ${BRAND.blue}; font-weight: 600; }
  .follow-hint { font-size: 14px; color: #888; }
  .sf-quote-badge {
    position: absolute;
    right: 48px;
    bottom: 72px;
    width: 96px;
    height: 96px;
    opacity: 0.88;
  }
  .sf-quote-badge img { width: 100%; height: 100%; object-fit: contain; }
</style>
</head>
<body>
  <div class="topbar">
    <div class="logo-dot">
      <svg viewBox="0 0 24 24" fill="none" style="width:15px;height:15px">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="${BRAND.white}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <span class="brand-name">TrailblazePrep</span>
    <span class="reply-badge">💬 Follow-up</span>
  </div>
  <div class="content">
    <div class="quote-bar"></div>
    <div class="quote-mark">"</div>
    <div class="quote-text">${escapeHtml(clean)}</div>
    ${sfDataUrl ? `<div class="sf-quote-badge"><img src="${sfDataUrl}" alt="" /></div>` : ''}
  </div>
  <div class="bottombar">
    <span class="url">trailblazeprep.com</span>
    <span class="follow-hint">Reply to join the conversation ↑</span>
  </div>
</body>
</html>`;
}

function linkReplyTemplate(urlDisplay, sfDataUrl) {
  const safeDisplay = escapeHtml(urlDisplay.slice(0, 72) + (urlDisplay.length > 72 ? '…' : ''));
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: ${IMG_W}px; height: ${IMG_H}px; overflow: hidden;
    font-family: -apple-system, 'Segoe UI', sans-serif;
    background: linear-gradient(145deg, ${BRAND.darkBlue} 0%, #0a3d7a 100%);
    display: flex; flex-direction: column;
    color: ${BRAND.white};
  }
  .topbar {
    padding: 24px 48px;
    display: flex; align-items: center; gap: 12px;
    border-bottom: 1px solid ${BRAND.white}18;
  }
  .logo-dot {
    width: 32px; height: 32px; border-radius: 50%;
    background: ${BRAND.lightBlue};
    display: flex; align-items: center; justify-content: center;
  }
  .brand-name { font-size: 17px; font-weight: 700; }
  .mid {
    flex: 1;
    display: flex; flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32px 56px;
    gap: 20px;
  }
  .label {
    font-size: 14px; font-weight: 700;
    letter-spacing: 2px; text-transform: uppercase;
    color: ${BRAND.accent};
  }
  .sf-big {
    width: 160px; height: 160px;
    display: flex; align-items: center; justify-content: center;
  }
  .sf-big img { max-width: 100%; max-height: 100%; object-fit: contain; }
  .url-line {
    font-size: 26px; font-weight: 700;
    color: ${BRAND.lightBlue};
    text-align: center;
    word-break: break-all;
    line-height: 1.35;
    max-width: 1000px;
  }
  .credit {
    font-size: 12px;
    color: #AAC8F0;
    margin-top: 8px;
  }
  .bottombar {
    padding: 18px 48px;
    border-top: 1px solid ${BRAND.white}18;
    font-size: 15px;
    color: #AAC8F0;
  }
</style>
</head>
<body>
  <div class="topbar">
    <div class="logo-dot">
      <svg viewBox="0 0 24 24" fill="none" style="width:16px;height:16px">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="${BRAND.white}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <span class="brand-name">TrailblazePrep</span>
  </div>
  <div class="mid">
    <div class="label">Free resource link</div>
    ${sfDataUrl ? `<div class="sf-big"><img src="${sfDataUrl}" alt="" /></div>` : ''}
    <div class="url-line">${safeDisplay}</div>
    <div class="credit">Trailhead artwork: Salesforce</div>
  </div>
  <div class="bottombar">Tap the URL in the tweet above — opens in browser</div>
</body>
</html>`;
}

function tipCardTemplate(tweetText, sfDataUrl) {
  const clean = tweetText
    .replace(/https?:\/\/[^\s]+/g, '')
    .replace(/@\w+/g, '')
    .replace(/#\w+/g, '')
    .replace(/\n\n+/g, '\n')
    .trim()
    .slice(0, 320);
  const lines = clean.split('\n').filter(Boolean);
  const headline = lines[0] || 'Salesforce tip';
  const rest = lines.slice(1, 4).join('\n');

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: ${IMG_W}px; height: ${IMG_H}px; overflow: hidden;
    font-family: -apple-system, 'Segoe UI', sans-serif;
    background: ${BRAND.white};
    display: flex;
    flex-direction: column;
  }
  .topbar {
    background: ${BRAND.darkBlue};
    padding: 20px 48px;
    display: flex; align-items: center; gap: 14px;
  }
  .logo-dot {
    width: 28px; height: 28px; border-radius: 50%;
    background: ${BRAND.lightBlue};
    display: flex; align-items: center; justify-content: center;
  }
  .brand-name { font-size: 16px; font-weight: 700; color: ${BRAND.white}; }
  .tip-pill {
    margin-left: auto;
    font-size: 11px; font-weight: 800;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: ${BRAND.accent};
    border: 1px solid ${BRAND.accent}88;
    border-radius: 20px;
    padding: 6px 14px;
  }
  .row {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }
  .row.row-text-only .text-col {
    max-width: 100%;
    padding: 36px 56px;
  }
  .text-col {
    flex: 1;
    padding: 36px 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    min-width: 0;
  }
  .headline {
    font-size: 34px;
    font-weight: 800;
    color: ${BRAND.darkGray};
    line-height: 1.2;
  }
  .rest {
    font-size: 22px;
    color: #444;
    line-height: 1.45;
    white-space: pre-wrap;
  }
  .sf-col {
    width: 340px;
    background: ${BRAND.gray};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    border-left: 1px solid #ddd;
  }
  .sf-col img {
    max-width: 100%;
    max-height: 420px;
    object-fit: contain;
  }
  .sf-cap {
    margin-top: 12px;
    font-size: 11px;
    color: #666;
    text-align: center;
  }
  .bottombar {
    padding: 14px 48px;
    border-top: 1px solid #e5e5e5;
    font-size: 14px;
    color: ${BRAND.blue};
    font-weight: 600;
  }
</style>
</head>
<body>
  <div class="topbar">
    <div class="logo-dot">
      <svg viewBox="0 0 24 24" fill="none" style="width:14px;height:14px">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="${BRAND.white}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <span class="brand-name">TrailblazePrep</span>
    <span class="tip-pill">Daily tip</span>
  </div>
  <div class="row${sfDataUrl ? '' : ' row-text-only'}">
    <div class="text-col">
      <div class="headline">${escapeHtml(headline)}</div>
      ${rest ? `<div class="rest">${escapeHtml(rest)}</div>` : ''}
    </div>
    ${
      sfDataUrl
        ? `<div class="sf-col">
      <img src="${sfDataUrl}" alt="" />
      <div class="sf-cap">Illustration: Salesforce</div>
    </div>`
        : ''
    }
  </div>
  <div class="bottombar">trailblazeprep.com</div>
</body>
</html>`;
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function extractUrl(tweets) {
  for (const tweet of [...tweets].reverse()) {
    const match = tweet.match(/https?:\/\/[^\s]+/);
    if (match) return match[0];
  }
  return 'https://trailblazeprep.com';
}

function extractCertName(title) {
  const m = title.match(/\(([^)]+)\)/);
  if (m) return m[1];
  if (title.includes('PD1')) return 'Platform Developer I';
  if (title.includes('App Builder')) return 'Platform App Builder';
  if (title.includes('Agentforce')) return 'Agentforce Specialist';
  if (title.includes('ADM-211') || title.includes('Advanced Admin')) return 'Advanced Administrator';
  return 'Salesforce Certification';
}

async function generateImages(browser, thread) {
  const page = await browser.newPage();
  await page.setViewport({ width: IMG_W, height: IMG_H, deviceScaleFactor: 2 });

  const sfUrl = getThreadSfImageUrl(thread.id);
  let sfDataUrl = null;
  try {
    sfDataUrl = await fetchAsDataUrl(sfUrl);
  } catch (e) {
    console.warn(`  WARN: Salesforce thread image (${sfUrl}): ${e.message}`);
  }

  const images = {};

  // Cover image (tweet 0)
  const coverPath = resolve(IMAGES_DIR, `${thread.id}-cover.png`);
  await page.setContent(coverTemplate(thread.tweets[0], thread.title, sfDataUrl), { waitUntil: 'domcontentloaded' });
  await page.screenshot({ path: coverPath, type: 'png' });
  images[0] = queueRelImage(`${thread.id}-cover.png`);
  console.log(`  ✅ Cover: ${thread.id}-cover.png`);

  // Stat/highlights image (tweet 2)
  const statPath = resolve(IMAGES_DIR, `${thread.id}-stats.png`);
  await page.setContent(statTemplate(thread.tweets, sfDataUrl), { waitUntil: 'domcontentloaded' });
  await page.screenshot({ path: statPath, type: 'png' });
  images[2] = queueRelImage(`${thread.id}-stats.png`);
  console.log(`  ✅ Stats: ${thread.id}-stats.png`);

  // CTA image (last tweet)
  const url = extractUrl(thread.tweets);
  const certName = extractCertName(thread.title);
  const ctaPath = resolve(IMAGES_DIR, `${thread.id}-cta.png`);
  await page.setContent(ctaTemplate(url, certName, sfDataUrl), { waitUntil: 'domcontentloaded' });
  await page.screenshot({ path: ctaPath, type: 'png' });
  images[thread.tweets.length - 1] = queueRelImage(`${thread.id}-cta.png`);
  console.log(`  ✅ CTA:   ${thread.id}-cta.png`);

  // Link reply image (immediate reply with URL)
  let immediateReplyImage = null;
  if (thread.immediateReply) {
    const fullUrl = extractUrlFromReply(thread.immediateReply);
    const urlDisplay = fullUrl.replace(/^https:\/\//, '');
    let replySf = null;
    try {
      replySf = await fetchAsDataUrl(LINK_REPLY_SF_URL);
    } catch (e) {
      console.warn(`  WARN: Trailhead link-reply image: ${e.message}`);
    }
    const replyPath = resolve(IMAGES_DIR, `${thread.id}-reply-link.png`);
    await page.setContent(linkReplyTemplate(urlDisplay, replySf), { waitUntil: 'domcontentloaded' });
    await page.screenshot({ path: replyPath, type: 'png' });
    immediateReplyImage = queueRelImage(`${thread.id}-reply-link.png`);
    console.log(`  ✅ Reply link card: ${thread.id}-reply-link.png`);
  }

  // Engagement reply images
  if (thread.engagementTweets?.length) {
    const updatedEngagement = [];
    for (let i = 0; i < thread.engagementTweets.length; i++) {
      const eng = thread.engagementTweets[i];
      const text = typeof eng === 'string' ? eng : eng.text;
      const imgPath = resolve(IMAGES_DIR, `${thread.id}-engage-${i + 1}.png`);
      await page.setContent(quoteTemplate(text, sfDataUrl), { waitUntil: 'domcontentloaded' });
      await page.screenshot({ path: imgPath, type: 'png' });
      updatedEngagement.push({ text, imageFile: queueRelImage(`${thread.id}-engage-${i + 1}.png`) });
      console.log(`  ✅ Engage ${i + 1}: ${thread.id}-engage-${i + 1}.png`);
    }
    thread._updatedEngagement = updatedEngagement;
  }

  thread._immediateReplyImage = immediateReplyImage;

  await page.close();
  return images;
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  const argv = process.argv.slice(2);
  const tipsOnly = argv.includes('--tips-only');
  const missingOnly = argv.includes('--missing-only');
  const targetId = argv.find((a) => !a.startsWith('--')) ?? null;

  if (tipsOnly) {
    const browser = await puppeteer.launch({ headless: true });
    await generateTipImages(browser, { scope: 'all', missingOnly });
    await browser.close();
    console.log('\n✅ Tip images done. Run: npm run x:analyze (tips with imageFile)\n');
    return;
  }

  const queue = JSON.parse(readFileSync(QUEUE_FILE, 'utf8'));

  const threads = targetId
    ? queue.filter((t) => t.id === targetId)
    : queue.filter((t) => t.status !== 'posted');

  const tipsSnapshot = existsSync(TIPS_FILE) ? JSON.parse(readFileSync(TIPS_FILE, 'utf8')) : [];
  const tipsPendingCount = tipsSnapshot.filter((t) => t.status === 'pending').length;

  if (threads.length === 0) {
    if (targetId) {
      console.log(`Thread "${targetId}" not found.`);
      return;
    }
    if (tipsPendingCount === 0) {
      console.log('No pending threads or tips. For all tip PNGs: node scripts/generate-tweet-images.mjs --tips-only');
      return;
    }
    console.log('\n🎨 No pending threads — generating pending tip images only.\n');
    const browserTipsOnly = await puppeteer.launch({ headless: true });
    await generateTipImages(browserTipsOnly, { scope: 'pending', missingOnly: false });
    await browserTipsOnly.close();
    return;
  }

  console.log(`\n🎨 Generating images for ${threads.length} thread(s)...\n`);
  const browser = await puppeteer.launch({ headless: true });

  for (const thread of threads) {
    console.log(`\n[${thread.id}] ${thread.title}`);
    const images = await generateImages(browser, thread);

    // Save image paths back to queue
    const idx = queue.findIndex((t) => t.id === thread.id);
    queue[idx].tweetImages = images;
    if (thread._updatedEngagement) {
      queue[idx].engagementTweets = thread._updatedEngagement;
    }
    if (thread._immediateReplyImage) {
      queue[idx].immediateReplyImage = thread._immediateReplyImage;
    }
  }

  await generateTipImages(browser, { scope: 'pending', missingOnly: false });

  await browser.close();
  writeFileSync(QUEUE_FILE, JSON.stringify(queue, null, 2));

  console.log('\n✅ All images generated and queue updated.\n');
  console.log('Next: node scripts/post-to-x.mjs post <thread-id>\n');
}

/**
 * @param {import('puppeteer').Browser} browser
 * @param {{ scope: 'pending' | 'all'; missingOnly?: boolean }} options
 */
async function generateTipImages(browser, options) {
  const { scope, missingOnly = false } = options;
  if (!existsSync(TIPS_FILE)) return;

  const tips = JSON.parse(readFileSync(TIPS_FILE, 'utf8'));
  const toProcess = tips.filter((t) => {
    if (!t.id || typeof t.tweet !== 'string') return false;
    if (scope === 'pending' && t.status !== 'pending') return false;
    if (!missingOnly) return true;
    const outPath = resolve(IMAGES_DIR, `${t.id}-tip-sf.png`);
    return !t.imageFile || !existsSync(outPath);
  });

  if (toProcess.length === 0) {
    if (missingOnly) {
      console.log('\n📌 No missing tip images — every tip has imageFile and PNG on disk.\n');
    } else if (scope === 'pending') {
      console.log('\n📌 No pending tips to generate.\n');
    } else {
      console.log('\n📌 No tips in queue.\n');
    }
    return;
  }

  console.log(
    `\n📌 Tip images (${scope}${missingOnly ? ', missing only' : ''}): ${toProcess.length} item(s)...\n`,
  );
  const page = await browser.newPage();
  await page.setViewport({ width: IMG_W, height: IMG_H, deviceScaleFactor: 2 });

  let changed = false;
  for (const tip of toProcess) {
    const sfUrl = sfImageUrlForTipTweet(tip.tweet);
    let sfDataUrl = null;
    for (const url of [sfUrl, SF_OFFICIAL.trailheadFlogo]) {
      try {
        sfDataUrl = await fetchAsDataUrl(url);
        break;
      } catch (e) {
        if (url === SF_OFFICIAL.trailheadFlogo) {
          console.warn(`  WARN ${tip.id}: no Salesforce art (${e.message}) — text-only card`);
        }
      }
    }

    const outPath = resolve(IMAGES_DIR, `${tip.id}-tip-sf.png`);
    await page.setContent(tipCardTemplate(tip.tweet, sfDataUrl), { waitUntil: 'domcontentloaded' });
    await page.screenshot({ path: outPath, type: 'png' });

    const idx = tips.findIndex((x) => x.id === tip.id);
    if (idx !== -1) {
      tips[idx].imageFile = queueRelImage(`${tip.id}-tip-sf.png`);
      changed = true;
    }
    console.log(`  ✅ ${tip.id}-tip-sf.png`);
  }

  await page.close();
  if (changed) writeFileSync(TIPS_FILE, JSON.stringify(tips, null, 2));
}

main().catch(err => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
