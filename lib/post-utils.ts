import { Post } from "@/lib/Post"

const ALLOWED_CATEGORIES = new Set(["BLOGS", "INFOGRAPHICS", "USE CASES", "CASE STUDIES"])

export function slugifyTitle(input: string) {
  const slug = input
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")

  return slug || "post"
}

export async function generateUniquePostSlug(baseSlug: string) {
  let candidate = baseSlug
  let counter = 2

  while (await Post.exists({ slug: candidate })) {
    candidate = `${baseSlug}-${counter}`
    counter += 1
  }

  return candidate
}

export function normalizeCategory(input: string) {
  const normalized = input.trim().toUpperCase()
  return ALLOWED_CATEGORIES.has(normalized) ? normalized : "BLOGS"
}
