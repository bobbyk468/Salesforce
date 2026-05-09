#!/usr/bin/env python3
"""
Google Search Console Indexing API — submit trailblazeprep.com URLs for crawl.

OAuth: place a Desktop-app client JSON at scripts/.gsc/client_secret.json
       or set GSC_OAUTH_CLIENT_JSON. Token is saved to scripts/.gsc/token.json
       (or GSC_OAUTH_TOKEN_JSON). See scripts/gsc_oauth_env.py.

Your Google account must be verified Owner of trailblazeprep.com in GSC.

Run:
  python3 scripts/submit-gsc.py
"""

import json
import sys
import time
from pathlib import Path

from gsc_oauth_env import load_oauth_credentials, oauth_token_json_path

TOKEN_FILE = oauth_token_json_path()

# URLs to submit (generated from public/urls.json)
URLS_FILE = Path(__file__).parent.parent / "public" / "urls.json"

# Config
SITE_URL = "https://www.trailblazeprep.com/"
INDEXING_URL = "https://indexing.googleapis.com/v3/urlNotifications:publish"
SCOPES = [
    "https://www.googleapis.com/auth/indexing",
    "https://www.googleapis.com/auth/webmasters.readonly"
]
RATE_LIMIT_DELAY = 0.5  # Stay well under 600 requests/minute


def load_urls():
    """Load URLs from public/urls.json."""
    if not URLS_FILE.exists():
        print(f"ERROR: {URLS_FILE} not found")
        sys.exit(1)

    data = json.loads(URLS_FILE.read_text())
    return data.get("urls", [])


def submit_batch(session, urls):
    """Submit batch of URLs to Google Indexing API."""
    ok = []
    fail = []

    for i, url in enumerate(urls, 1):
        try:
            response = session.post(
                INDEXING_URL,
                json={"url": url, "type": "URL_UPDATED"},
                timeout=15
            )

            if response.status_code == 200:
                print(f"  ✓ [{i:3d}/{len(urls)}] {url.replace(SITE_URL, '')}")
                ok.append(url)
            else:
                error = f"HTTP {response.status_code}"
                try:
                    error_json = response.json()
                    if "error" in error_json:
                        error = error_json["error"].get("message", error)
                except:
                    pass
                print(f"  ✗ [{i:3d}/{len(urls)}] {url.replace(SITE_URL, '')} — {error}")
                fail.append((url, error))

        except Exception as e:
            print(f"  ✗ [{i:3d}/{len(urls)}] {url.replace(SITE_URL, '')} — {str(e)[:80]}")
            fail.append((url, str(e)))

        time.sleep(RATE_LIMIT_DELAY)

    return ok, fail


def main():
    print("=" * 70)
    print("Google Search Console Indexing API — Bulk URL Submission")
    print("=" * 70)
    print()

    # Load URLs
    urls = load_urls()
    print(f"Loaded {len(urls)} URLs from public/urls.json")

    if not urls:
        print("ERROR: No URLs found in public/urls.json")
        sys.exit(1)

    # Authenticate
    print("Authenticating (browser will open on first run)...\n")
    try:
        creds = load_oauth_credentials(TOKEN_FILE, SCOPES)
    except FileNotFoundError as e:
        print(str(e))
        sys.exit(1)
    except RuntimeError as e:
        print(str(e))
        sys.exit(1)
    print(f"✓ Token ready at {TOKEN_FILE}\n")

    try:
        from google.auth.transport.requests import AuthorizedSession
    except ImportError:
        print("ERROR: Install google-auth-httplib2")
        sys.exit(1)

    session = AuthorizedSession(creds)

    # Submit
    print(f"\n{'='*70}")
    print(f"Submitting {len(urls)} URLs to Google Indexing API...")
    print(f"Googlebot will crawl these within minutes–hours.\n")

    ok, fail = submit_batch(session, urls)

    # Summary
    print(f"\n{'='*70}")
    print(f"RESULT: {len(ok)}/{len(urls)} submitted successfully")

    if fail:
        print(f"\nFailed ({len(fail)}):")
        for url, error in fail[:10]:  # Show first 10
            print(f"  • {url.replace(SITE_URL, '')}")
            print(f"    {error}")
        if len(fail) > 10:
            print(f"  ... and {len(fail)-10} more")

    print(f"\n{'='*70}")
    print("Monitor progress in Google Search Console:")
    print("  GSC → URL Inspection (paste URLs to check indexing status)")
    print("  GSC → Coverage (see crawl status in 24–48 hours)")
    print()

    return 0 if len(fail) == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
