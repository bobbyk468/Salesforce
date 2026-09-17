/**
 * Reads secrets from the host runtime without coupling Vercel builds to the
 * Cloudflare Workers API. Vercel provides process.env; Workers provides env.
 */
export async function getRuntimeSecret(name: string): Promise<string | undefined> {
  const processValue = process.env[name]
  if (processValue) return processValue

  try {
    const { getCloudflareContext } = await import('@opennextjs/cloudflare')
    const { env } = await getCloudflareContext({ async: true })
    const value = (env as Record<string, unknown>)[name]
    return typeof value === 'string' ? value : undefined
  } catch {
    return undefined
  }
}
