#!/usr/bin/env python3
"""
Generate cert page content (key concepts + FAQ + scenario tips) using:
  1. Prompt caching  — shared system prompt cached across all requests (~90% cheaper)
  2. Message Batches — all certs processed asynchronously at 50% of standard pricing

Usage:
  pip install anthropic
  ANTHROPIC_API_KEY=sk-... python scripts/generate-cert-content-batch.py

The script:
  - Submits one batch request per cert defined in CERTS_TO_GENERATE
  - Polls every 60 s until the batch completes (usually < 1 hour)
  - Writes results to scripts/generated-content/<slug>.py
    (each file is a ready-to-paste Python dict for the existing batch scripts)
"""

import json
import os
import time
import textwrap
from pathlib import Path

import anthropic

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

MODEL = "claude-opus-4-6"           # most capable; cached tokens are cheap
OUTPUT_DIR = Path(__file__).parent / "generated-content"
POLL_INTERVAL = 60                   # seconds between status checks

# ---------------------------------------------------------------------------
# Certs to generate  (slug → display name + exam metadata)
# Add any cert slug here; the system prompt tells Claude the format to follow.
# ---------------------------------------------------------------------------

CERTS_TO_GENERATE = {
    # Example entries — add/remove as needed
    "marketing-cloud-consultant": {
        "name": "Marketing Cloud Consultant",
        "questions": 60,
        "time": "105 min",
        "passing": "67%",
        "fee": "$200",
        "topics": [
            "Discovery & Architecture (17%)",
            "Account Configuration (20%)",
            "Email Marketing (20%)",
            "Marketing Cloud Connect (15%)",
            "Reporting & Analytics (10%)",
            "Channels & Mobile (10%)",
            "Administration (8%)",
        ],
    },
    "integration-architect": {
        "name": "Integration Architect",
        "questions": 60,
        "time": "105 min",
        "passing": "63%",
        "fee": "$400",
        "topics": [
            "Translate Business Requirements (14%)",
            "Architecture (23%)",
            "APIs, Protocols, and Tools (18%)",
            "Security (16%)",
            "Triggers and Order of Execution (12%)",
            "Governance (10%)",
            "Miscellaneous (7%)",
        ],
    },
    "tableau-cra": {
        "name": "Tableau Certified Data Analyst",
        "questions": 45,
        "time": "120 min",
        "passing": "75%",
        "fee": "$250",
        "topics": [
            "Connecting to & Preparing Data (24%)",
            "Exploring & Analyzing Data (34%)",
            "Sharing Insights (24%)",
            "Understanding Tableau Concepts (18%)",
        ],
    },
}

# ---------------------------------------------------------------------------
# System prompt (will be cached — only billed once across all batch requests)
# ---------------------------------------------------------------------------

SYSTEM_PROMPT = textwrap.dedent("""
You are a technical content writer for trailblazeprep.com, a Salesforce certification
study guide site built with Next.js 14 (TypeScript + JSX).

Your job is to produce structured study content for Salesforce certification pages.

━━━ JSX ENCODING RULES (MANDATORY) ━━━
• Apostrophes  → &apos;   (e.g., "it's" → "it&apos;s")
• Ampersands   → &amp;   (e.g., "Sales & Service" → "Sales &amp; Service")
• No raw < > in text (use &lt; &gt; if needed)
• All other characters are fine as-is

━━━ OUTPUT FORMAT ━━━
Respond ONLY with a valid JSON object with three keys: "key_concepts", "faq", "scenario_tips".

"key_concepts": array of exactly 5 objects, each with:
  - "heading": string  (short topic name, ≤ 8 words)
  - "body": string     (2-4 sentences, dense but readable, properly JSX-encoded)

"faq": array of exactly 5 objects, each with:
  - "question": string  (a realistic exam prep question a candidate would ask)
  - "answer": string    (2-3 sentences, properly JSX-encoded)

"scenario_tips": object with:
  - "intro": string   (1 sentence framing the exam style, JSX-encoded)
  - "tips": array of exactly 5 objects, each with:
      - "title": string   (≤ 6 words)
      - "content": string (2-3 sentences, JSX-encoded)

Content quality standards:
• Key concepts should cover the highest-weighted exam topics
• FAQ answers should be concise and exam-focused
• Scenario tips should help candidates think through multi-choice questions
• All content must be accurate for the current Salesforce release
• Avoid generic filler — every sentence should help someone pass the exam
""").strip()

# ---------------------------------------------------------------------------
# Build a user message for a single cert
# ---------------------------------------------------------------------------

def build_user_message(slug: str, cert: dict) -> str:
    topics_str = "\n".join(f"  - {t}" for t in cert["topics"])
    return textwrap.dedent(f"""
        Generate study content for this Salesforce certification:

        Certification: {cert['name']}
        Slug: {slug}
        Questions: {cert['questions']}
        Time: {cert['time']}
        Passing score: {cert['passing']}
        Fee: {cert['fee']}

        Exam topic breakdown:
        {topics_str}

        Produce the JSON output as specified in the system prompt.
        Focus the key concepts and scenario tips on the highest-weighted topics.
    """).strip()

# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    api_key = os.environ.get("ANTHROPIC_API_KEY")
    if not api_key:
        raise SystemExit("ERROR: ANTHROPIC_API_KEY environment variable is not set.")

    client = anthropic.Anthropic(api_key=api_key)
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    # Build batch requests — one per cert
    requests = []
    for slug, cert in CERTS_TO_GENERATE.items():
        requests.append({
            "custom_id": slug,
            "params": {
                "model": MODEL,
                "max_tokens": 2048,
                # Prompt caching: mark the system prompt as cacheable.
                # The first request pays full price; all subsequent requests
                # in this batch (and future batches with the same prompt) hit
                # the cache at ~10% of the normal input token cost.
                "system": [
                    {
                        "type": "text",
                        "text": SYSTEM_PROMPT,
                        "cache_control": {"type": "ephemeral"},
                    }
                ],
                "messages": [
                    {
                        "role": "user",
                        "content": build_user_message(slug, cert),
                    }
                ],
            },
        })

    print(f"Submitting batch with {len(requests)} request(s)...")
    batch = client.messages.batches.create(requests=requests)
    print(f"Batch ID : {batch.id}")
    print(f"Status   : {batch.processing_status}")
    print(f"Polling every {POLL_INTERVAL}s until complete...\n")

    # Poll until done
    while True:
        time.sleep(POLL_INTERVAL)
        batch = client.messages.batches.retrieve(batch.id)
        counts = batch.request_counts
        print(
            f"  Status: {batch.processing_status} | "
            f"processing={counts.processing} succeeded={counts.succeeded} "
            f"errored={counts.errored} expired={counts.expired}"
        )
        if batch.processing_status == "ended":
            break

    print("\nBatch complete. Writing results...\n")

    success_count = 0
    error_count = 0

    for result in client.messages.batches.results(batch.id):
        slug = result.custom_id
        cert = CERTS_TO_GENERATE[slug]

        if result.result.type == "succeeded":
            raw_text = result.result.message.content[0].text

            # Strip markdown code fences if Claude wrapped the JSON
            raw_text = raw_text.strip()
            if raw_text.startswith("```"):
                raw_text = raw_text.split("\n", 1)[1]
                raw_text = raw_text.rsplit("```", 1)[0]

            try:
                data = json.loads(raw_text)
            except json.JSONDecodeError as e:
                print(f"  ERROR [{slug}]: JSON parse failed — {e}")
                error_count += 1
                continue

            # Write a Python file with ready-to-use data structures
            out_path = OUTPUT_DIR / f"{slug}.py"
            _write_python_output(out_path, slug, cert, data)
            print(f"  OK [{slug}] → {out_path.relative_to(Path.cwd())}")
            success_count += 1

        elif result.result.type == "errored":
            err = result.result.error
            print(f"  ERROR [{slug}]: {err.type} — resubmit if it was a server error")
            error_count += 1

        else:  # expired
            print(f"  EXPIRED [{slug}]: batch took > 24 h, resubmit")
            error_count += 1

    print(f"\nDone — succeeded: {success_count}, errors/expired: {error_count}")
    if success_count:
        print(f"Results in: {OUTPUT_DIR}/")


def _write_python_output(path: Path, slug: str, cert: dict, data: dict):
    """Write generated content as a Python file with copy-pasteable dicts."""
    kc = data.get("key_concepts", [])
    faq = data.get("faq", [])
    st = data.get("scenario_tips", {})

    lines = [
        f'# Generated content for: {cert["name"]} ({slug})',
        f'# Model: {MODEL}  |  Prompt caching + Batch API',
        "",
        "# ── Key Concepts ─────────────────────────────────────────────────────",
        "# Paste into the key_concepts block in the cert page",
        "KEY_CONCEPTS = [",
    ]
    for item in kc:
        lines.append(f"    ({_q(item['heading'])}, {_q(item['body'])}),")
    lines += [
        "]",
        "",
        "# ── FAQ ──────────────────────────────────────────────────────────────",
        "# Paste into the faqItems array in the cert page",
        "FAQ_ITEMS = [",
    ]
    for item in faq:
        lines.append(
            f"    {{'question': {_q(item['question'])}, 'answer': {_q(item['answer'])}}},"
        )
    lines += [
        "]",
        "",
        "# ── Scenario Tips ────────────────────────────────────────────────────",
        "# Paste into the scenario-tips section in the cert page",
        f"SCENARIO_TIPS_INTRO = {_q(st.get('intro', ''))}",
        "SCENARIO_TIPS = [",
    ]
    for tip in st.get("tips", []):
        lines.append(f"    ({_q(tip['title'])}, {_q(tip['content'])}),")
    lines += ["]", ""]

    path.write_text("\n".join(lines), encoding="utf-8")


def _q(s: str) -> str:
    """Wrap string in triple quotes for safe Python embedding."""
    s = str(s).replace('"""', '\\"\\"\\"')
    return f'"""{s}"""'


if __name__ == "__main__":
    main()
