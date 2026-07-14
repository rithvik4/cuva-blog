const SESSION_DURATION_MS = 24 * 60 * 60 * 1000

function getSessionSecret() {
  return process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || ""
}

function encodeBase64Url(input: string) {
  const bytes = new TextEncoder().encode(input)
  let binary = ""

  for (const byte of bytes) {
    binary += String.fromCharCode(byte)
  }

  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "")
}

function decodeBase64Url(input: string) {
  const padded = input.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(input.length / 4) * 4, "=")
  const binary = atob(padded)
  const bytes = new Uint8Array(binary.length)

  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i)
  }

  return new TextDecoder().decode(bytes)
}

async function signPayload(payloadBase64: string) {
  const secret = getSessionSecret()

  if (!secret) {
    return ""
  }

  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  )

  const signatureBuffer = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payloadBase64))
  const signatureBytes = new Uint8Array(signatureBuffer)
  let binary = ""

  for (const byte of signatureBytes) {
    binary += String.fromCharCode(byte)
  }

  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "")
}

export async function createAdminSessionToken(username: string) {
  const payload = {
    u: username,
    exp: Date.now() + SESSION_DURATION_MS,
  }

  const payloadBase64 = encodeBase64Url(JSON.stringify(payload))
  const signature = await signPayload(payloadBase64)

  if (!signature) {
    throw new Error("Admin session secret is not configured")
  }

  return `${payloadBase64}.${signature}`
}

export async function verifyAdminSessionToken(token?: string | null) {
  if (!token) {
    return false
  }

  const [payloadBase64, signature] = token.split(".")

  if (!payloadBase64 || !signature) {
    return false
  }

  const expectedSignature = await signPayload(payloadBase64)

  if (!expectedSignature || signature !== expectedSignature) {
    return false
  }

  try {
    const payloadRaw = decodeBase64Url(payloadBase64)
    const payload = JSON.parse(payloadRaw) as { exp?: number }

    if (!payload.exp || payload.exp < Date.now()) {
      return false
    }

    return true
  } catch {
    return false
  }
}
