"""Resolve Google OAuth client + token paths for GSC / Indexing scripts.

You can use **multiple** Desktop-app client JSON files:

- Drop several `*.json` files into `scripts/.gsc/` (gitignored), **except** `token.json`.
- Or set `GSC_OAUTH_CLIENT_JSON` to one path, or several separated by comma `,` or `;`
  (e.g. `/path/a.json,/path/b.json`).
- Or set `GSC_OAUTH_CLIENT_DIR` to a folder; every `*.json` there (except token-like names)
  is tried after explicit env paths.

Token: `scripts/.gsc/token.json` or `GSC_OAUTH_TOKEN_JSON`.
"""

from __future__ import annotations

import json
import os
import re
from pathlib import Path
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from google.oauth2.credentials import Credentials

SCRIPT_DIR = Path(__file__).resolve().parent
_DEFAULT_GSC_DIR = SCRIPT_DIR / ".gsc"

_TOKEN_FILE_NAMES = frozenset(
    {
        "token.json",
    }
)


def _is_token_filename(name: str) -> bool:
    lower = name.lower()
    if lower in _TOKEN_FILE_NAMES:
        return True
    if lower.startswith("token.") and lower.endswith(".json"):
        return True
    return False


def _is_oauth_client_json(path: Path) -> bool:
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except Exception:
        return False
    if "installed" in data:
        return True
    web = data.get("web")
    if isinstance(web, dict) and web.get("client_id"):
        return True
    return False


def _split_paths(raw: str) -> list[Path]:
    parts = [p.strip() for p in re.split(r"[,;|]", raw) if p.strip()]
    return [Path(p).expanduser().resolve() for p in parts]


def oauth_token_json_path() -> Path:
    env = os.environ.get("GSC_OAUTH_TOKEN_JSON")
    if env:
        return Path(env).expanduser().resolve()
    return (_DEFAULT_GSC_DIR / "token.json").resolve()


def oauth_client_json_candidates() -> list[Path]:
    """Ordered list of OAuth client JSON files to try (browser flow or validation)."""
    paths: list[Path] = []
    seen: set[Path] = set()

    def add(p: Path) -> None:
        try:
            r = p.resolve()
        except Exception:
            return
        if r not in seen:
            seen.add(r)
            paths.append(r)

    raw = os.environ.get("GSC_OAUTH_CLIENT_JSON")
    if raw:
        for p in _split_paths(raw):
            add(p)

    dir_env = os.environ.get("GSC_OAUTH_CLIENT_DIR")
    scan_dirs: list[Path] = []
    if dir_env:
        scan_dirs.append(Path(dir_env).expanduser().resolve())
    scan_dirs.append(_DEFAULT_GSC_DIR.resolve())

    for d in scan_dirs:
        if not d.is_dir():
            continue
        for f in sorted(d.glob("*.json"), key=lambda x: x.name.lower()):
            if _is_token_filename(f.name):
                continue
            add(f)

    # Legacy single-file default (for clear errors if folder empty)
    add(_DEFAULT_GSC_DIR / "client_secret.json")

    return [p for p in paths if p.is_file() and _is_oauth_client_json(p)]


def oauth_client_json_path() -> Path:
    """First candidate, or default path (may not exist)."""
    c = oauth_client_json_candidates()
    if c:
        return c[0]
    return (_DEFAULT_GSC_DIR / "client_secret.json").resolve()


def gsc_oauth_setup_hint() -> str:
    return (
        "No usable Google OAuth **Desktop app** client JSON found.\n\n"
        "1. Google Cloud Console → APIs & Services → Credentials → Create OAuth client\n"
        "   (Application type: Desktop app).\n"
        "2. Download one or more JSON files and either:\n"
        f"   • Put them in: {_DEFAULT_GSC_DIR}/  (any name, e.g. client1.json, client2.json)\n"
        "   • Or: export GSC_OAUTH_CLIENT_JSON='/path/a.json,/path/b.json'\n"
        "   • Or: export GSC_OAUTH_CLIENT_DIR='/path/to/folder/with/json'\n"
        "   (token.json in that folder is ignored.)\n\n"
        "3. Re-run; a browser window opens for consent.\n"
        f"   Refresh token: {oauth_token_json_path()}\n"
    )


def load_oauth_credentials(
    token_path: Path,
    scopes: list[str],
    client_paths: list[Path] | None = None,
) -> "Credentials":
    """Load token from disk, refresh, or run installed-app flow using client JSON file(s)."""
    from google.auth.transport.requests import Request
    from google.oauth2.credentials import Credentials
    from google_auth_oauthlib.flow import InstalledAppFlow

    if client_paths is not None:
        clients = [
            p.resolve()
            for p in client_paths
            if p.is_file() and _is_oauth_client_json(p)
        ]
        if not clients:
            raise FileNotFoundError(
                "No valid OAuth client JSON in --creds-file list "
                "(expect Desktop app JSON with an 'installed' or 'web' block).\n\n"
                + gsc_oauth_setup_hint()
            )
    else:
        clients = oauth_client_json_candidates()
        if not clients:
            raise FileNotFoundError(gsc_oauth_setup_hint())

    creds: Credentials | None = None
    if token_path.exists():
        try:
            creds = Credentials.from_authorized_user_file(str(token_path), scopes)
        except Exception:
            creds = None

    if creds and creds.expired and creds.refresh_token:
        try:
            creds.refresh(Request())
            token_path.parent.mkdir(parents=True, exist_ok=True)
            token_path.write_text(creds.to_json(), encoding="utf-8")
        except Exception:
            creds = None

    if creds and creds.valid:
        return creds

    last_err: Exception | None = None
    for client_path in clients:
        try:
            print(f"OAuth client: {client_path}")
            flow = InstalledAppFlow.from_client_secrets_file(str(client_path), scopes)
            creds = flow.run_local_server(port=0)
            token_path.parent.mkdir(parents=True, exist_ok=True)
            token_path.write_text(creds.to_json(), encoding="utf-8")
            return creds
        except Exception as e:
            last_err = e
            print(f"  (failed with this file: {e})")

    raise RuntimeError(
        f"No OAuth client file completed sign-in. Tried {len(clients)} file(s). Last error: {last_err}"
    ) from last_err
