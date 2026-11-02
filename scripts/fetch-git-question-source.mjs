import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { mkdir, readdir, writeFile } from 'node:fs/promises'
import { dirname, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const repository = 'bobbyk468/SF-Questions'
const gh = (endpoint, raw = false) => execFileSync('gh', [
  'api', ...(raw ? ['-H', 'Accept: application/vnd.github.raw+json'] : []),
  `repos/${repository}/${endpoint}`,
], { maxBuffer: 32 * 1024 * 1024 })

export function verifyBlob(bytes, expectedSha) {
  const actual = createHash('sha1').update(`blob ${bytes.length}\0`).update(bytes).digest('hex')
  if (actual !== expectedSha) throw new Error('Downloaded content does not match its pinned Git blob')
}

export function selectSourceFile(entry) {
  if (entry.type !== 'blob') return false
  return (entry.path.startsWith('Extracted/') && entry.path.endsWith('_questions.json')) ||
    entry.path === 'README.md' || /(^|\/)readme\.txt$/i.test(entry.path) ||
    (entry.path.split('/').length === 2 && entry.path.endsWith('.txt') &&
      !/^(Pipeline|Extraction Tools|Reports|Verification|Extracted)\//.test(entry.path))
}

export function safeOutputPath(root, relativePath) {
  if (relativePath.split('/').some((part) => !part || part === '.' || part === '..')) {
    throw new Error('Unsafe source path')
  }
  const target = resolve(root, relativePath)
  if (!target.startsWith(`${resolve(root)}${sep}`)) throw new Error('Source path escapes snapshot directory')
  return target
}

async function main() {
  const args = process.argv.slice(2)
  const value = (flag, fallback) => {
    const index = args.indexOf(flag)
    if (index < 0) return fallback
    if (!args[index + 1] || args[index + 1].startsWith('--')) throw new Error(`Missing ${flag} value`)
    return args[index + 1]
  }
  if (args.some((arg) => arg.startsWith('--') && !['--ref', '--output'].includes(arg))) {
    throw new Error('Use --ref REF and --output DIRECTORY')
  }
  const root = resolve(value('--output', '/tmp/trailblaze-sf-git-questions'))
  const commit = JSON.parse(gh(`commits/${encodeURIComponent(value('--ref', 'main'))}`))
  const tree = JSON.parse(gh(`git/trees/${commit.sha}?recursive=1`))
  if (tree.truncated) throw new Error('Incomplete Git tree; refusing partial source inventory')
  const entries = tree.tree.filter(selectSourceFile)
  if (!entries.some((entry) => entry.path.endsWith('_questions.json'))) throw new Error('No extracted banks found')
  await mkdir(root, { recursive: true })
  if ((await readdir(root)).length) throw new Error('Snapshot output must be empty; use a new directory to avoid stale banks')
  for (const entry of entries) {
    if (entry.size > 16 * 1024 * 1024) throw new Error(`Unexpectedly large source file: ${entry.path}`)
    const bytes = gh(`git/blobs/${entry.sha}`, true)
    verifyBlob(bytes, entry.sha)
    const target = safeOutputPath(root, entry.path)
    await mkdir(dirname(target), { recursive: true })
    await writeFile(target, bytes)
  }
  await writeFile(resolve(root, 'tree.json'), JSON.stringify(tree, null, 2) + '\n')
  await writeFile(resolve(root, 'snapshot.json'), JSON.stringify({ repository, commit: commit.sha,
    tree: commit.commit.tree.sha, files: entries.length }, null, 2) + '\n')
  console.log(`Fetched ${entries.length} verified files at ${commit.sha} into ${root}`)
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => { console.error(error.message); process.exitCode = 1 })
}
