import { createImage } from "./blog-store"

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

  const safeOriginalName = filename.replace(/[^a-zA-Z0-9._-]/g, "-")
  const imageUrl = `data:${mimeType};base64,${base64String}`

  // Keep image metadata in sync with file uploads.
  await createImage({
    name: safeOriginalName,
    url: imageUrl,
    altText,
  })

  return imageUrl
}
