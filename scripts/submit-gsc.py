#!/usr/bin/env python3
"""Submit this site's sitemap through the supported Search Console API.

Run without arguments for a dry run; --submit explicitly performs the request.
Study pages are not eligible for Google's JobPosting/livestream Indexing API.
"""
import argparse
from urllib.parse import quote
from gsc_oauth_env import load_oauth_credentials, oauth_token_json_path

SITE_URL = 'https://www.trailblazeprep.com/'
SITEMAP_URL = SITE_URL + 'sitemap.xml'
SCOPES = ['https://www.googleapis.com/auth/webmasters']


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--submit', action='store_true', help='Submit the sitemap; default is dry run')
    args = parser.parse_args()
    print(f'Search Console property: {SITE_URL}')
    print(f'Sitemap: {SITEMAP_URL}')
    if not args.submit:
        print('Dry run. Use --submit with authorized Search Console credentials to submit.')
        return 0
    from google.auth.transport.requests import AuthorizedSession
    credentials = load_oauth_credentials(oauth_token_json_path(), SCOPES)
    endpoint = ('https://www.googleapis.com/webmasters/v3/sites/'
                + quote(SITE_URL, safe='') + '/sitemaps/' + quote(SITEMAP_URL, safe=''))
    response = AuthorizedSession(credentials).put(endpoint, timeout=30)
    if response.status_code != 204:
        print(f'Sitemap submission failed: HTTP {response.status_code}')
        return 1
    print('Sitemap submitted. Acceptance does not confirm crawling or indexing.')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
