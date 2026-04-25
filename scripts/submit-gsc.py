#!/usr/bin/env python3
"""
Google Search Console Indexing API — submit trailblazeprep.com URLs for crawl.

Uses OAuth2 credentials from Downloads/Salesforce Blog/gsc_token.json.
Your Google account must be verified Owner of trailblazeprep.com in GSC.

Run:
  python3 scripts/submit-gsc.py
"""

import json
import sys
import time
from pathlib import Path

# Credentials path (from Salesforce Blog directory)
TOKEN_FILE = Path("/Users/brahmajikatragadda/Downloads/Salesforce Blog/gsc_token.json")
CREDS_FILE = Path("/Users/brahmajikatragadda/Downloads/client_secret_73655452385-663rt0ah01sugeljjcbmapa7ek5mkbma.apps.googleusercontent.com.json")

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


def get_credentials():
    """Load or refresh OAuth2 credentials."""
    try:
        from google.oauth2.credentials import Credentials
        from google_auth_oauthlib.flow import InstalledAppFlow
        from google.auth.transport.requests import Request
    except ImportError:
        print("ERROR: Install dependencies:")
        print("  pip3 install google-auth-oauthlib --break-system-packages")
        sys.exit(1)

    creds = None

    # Load existing token if valid
    if TOKEN_FILE.exists():
        try:
            creds = Credentials.from_authorized_user_file(str(TOKEN_FILE), SCOPES)
        except:
            pass

    # Refresh if expired
    if creds and creds.expired and creds.refresh_token:
        try:
            creds.refresh(Request())
            TOKEN_FILE.write_text(creds.to_json())
            print(f"✓ Token refreshed")
            return creds
        except Exception as e:
            print(f"⚠ Token refresh failed: {e}")
            creds = None

    # Otherwise get new credentials
    if not creds or not creds.valid:
        if not CREDS_FILE.exists():
            print(f"ERROR: Credentials file not found: {CREDS_FILE}")
            print("Download from: https://console.cloud.google.com/apis/credentials")
            sys.exit(1)

        print("Opening browser for authentication...")
        flow = InstalledAppFlow.from_client_secrets_file(str(CREDS_FILE), SCOPES)
        creds = flow.run_local_server(port=0)
        TOKEN_FILE.write_text(creds.to_json())
        print(f"✓ Token saved to {TOKEN_FILE}")

    return creds


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
    creds = get_credentials()

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
