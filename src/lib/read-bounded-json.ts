const MAX_JSON_BODY_BYTES = 64 * 1024

export type BoundedJsonResult =
  | { ok: true; body: unknown }
  | { ok: false; status: 400 | 413; error: string }

export async function readBoundedJson(request: Request): Promise<BoundedJsonResult> {
  const contentLength = request.headers.get('content-length')
  if (contentLength && /^\d+$/.test(contentLength) && Number(contentLength) > MAX_JSON_BODY_BYTES) {
    try { await request.body?.cancel() } catch { /* The response does not depend on cancellation succeeding. */ }
    return { ok: false, status: 413, error: 'Request body must be 64 KiB or smaller.' }
  }

  if (!request.body) return { ok: false, status: 400, error: 'Invalid JSON request.' }
  const reader = request.body.getReader()
  const chunks: Uint8Array[] = []
  let totalBytes = 0
  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      totalBytes += value.byteLength
      if (totalBytes > MAX_JSON_BODY_BYTES) {
        try { await reader.cancel() } catch { /* Best effort: stop reading an oversized body. */ }
        return { ok: false, status: 413, error: 'Request body must be 64 KiB or smaller.' }
      }
      chunks.push(value)
    }
  } catch {
    return { ok: false, status: 400, error: 'Invalid JSON request.' }
  } finally {
    reader.releaseLock()
  }

  const bytes = new Uint8Array(totalBytes)
  let offset = 0
  for (const chunk of chunks) {
    bytes.set(chunk, offset)
    offset += chunk.byteLength
  }
  try {
    return { ok: true, body: JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(bytes)) }
  } catch {
    return { ok: false, status: 400, error: 'Invalid JSON request.' }
  }
}
