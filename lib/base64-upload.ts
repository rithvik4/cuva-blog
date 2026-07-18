import { mkdir, writeFile } from "fs/promises"
import { join } from "path"
import { createImage } from "@/lib/blog-store"

const IS_SERVERLESS_RUNTIME = Boolean(
  process.env.VERCEL || process.env.AWS_EXECUTION_ENV || process.env.AWS_REGION || process.env.LAMBDA_TASK_ROOT,
)
const SOURCE_UPLOAD_DIR = join(process.cwd(), "public", "uploads")
const RUNTIME_UPLOAD_DIR = process.env.BLOG_UPLOAD_DIR || (IS_SERVERLESS_RUNTIME ? join("/tmp", "cuva-blog", "uploads") : SOURCE_UPLOAD_DIR)
const UPLOADS_PUBLIC_BASE = process.env.BLOG_UPLOAD_BASE_URL || (IS_SERVERLESS_RUNTIME ? "/api/uploads" : "/uploads")

export function resolveUploadedFilePath(filename: string) {
  const safeName = filename.replace(/[^a-zA-Z0-9._-]/g, "-")
  return join(RUNTIME_UPLOAD_DIR, safeName)
}

export async function saveBase64Image(
  base64String: string,
  filename: string,
  mimeType: string,
  altText: string = "",
): Promise<string> {
  const MAX_UPLOAD_SIZE = 5 * 1024 * 1024
  const ALLOWED_IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"])

  if (!ALLOWED_IMAGE_TYPES.has(mimeType)) {
    throw new Error("Unsupported image format")
  }

  // Decode base64 to buffer
  const buffer = Buffer.from(base64String, "base64")

  if (buffer.length > MAX_UPLOAD_SIZE) {
    throw new Error("Image must be 5MB or smaller")
  }

  const uploadDir = RUNTIME_UPLOAD_DIR
  try {
    await mkdir(uploadDir, { recursive: true })
  } catch {}

  const safeOriginalName = filename.replace(/[^a-zA-Z0-9._-]/g, "-")
  const timestampedFilename = `${Date.now()}-${safeOriginalName}`
  const filepath = join(uploadDir, timestampedFilename)
  const imageUrl = `${UPLOADS_PUBLIC_BASE}/${timestampedFilename}`

  await writeFile(filepath, buffer as any)

  // Keep image metadata in sync with file uploads.
  await createImage({
    name: safeOriginalName,
    url: imageUrl,
    altText,
  })

  return imageUrl
}
