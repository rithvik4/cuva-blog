import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import { Post } from "@/lib/Post"
import { Image } from "@/lib/Image"
import { cookies } from "next/headers"
import { verifyAdminSessionToken } from "@/lib/admin-auth"
import { buildBlogHtmlFromSections, normalizeBlogSections, sanitizeBlogHtml } from "@/lib/blog-content"
import { generateUniquePostSlug, normalizeCategory, slugifyTitle } from "@/lib/post-utils"

export async function POST(req: Request) {
  try {
    const token = (await cookies()).get("admin_token")?.value

    if (!(await verifyAdminSessionToken(token))) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 })
    }

    const body = await req.json()
    const { type, payload } = body

    if (!type || !payload) {
      return NextResponse.json({ success: false, error: "Missing type or payload" }, { status: 400 })
    }

    await connectDB()

    if (type === "post") {
      // Basic validation for post
      const { title, slug, excerpt, content, sections, author, date, category, image } = payload
      const normalizedSections = normalizeBlogSections(sections)
      const generatedContent = buildBlogHtmlFromSections(normalizedSections)
      const effectiveContent = generatedContent || String(content || "")

      if (!title || !slug || !excerpt || !effectiveContent.trim() || !author || !date || !category) {
        return NextResponse.json({ success: false, error: "Missing required post fields" }, { status: 400 })
      }

      const baseSlug = slugifyTitle(String(slug || title))
      const cleanSlug = await generateUniquePostSlug(baseSlug)
      const safeContent = sanitizeBlogHtml(String(effectiveContent))
      const safeCategory = normalizeCategory(String(category))

      const newPost = new Post({
        title: String(title).trim(),
        slug: cleanSlug,
        excerpt: String(excerpt).trim(),
        content: safeContent,
        sections: normalizedSections,
        author: String(author).trim(),
        date: String(date).trim(),
        category: safeCategory,
        imageGradient: payload.imageGradient || "from-[#f1f8e9] to-[#e8f5e9]",
        image: image || null
      })

      const savedPost = await newPost.save()
      return NextResponse.json({ success: true, data: savedPost })

    } else if (type === "image") {
      // Basic validation for image
      const { name, url, altText } = payload

      if (!name || !url) {
        return NextResponse.json({ success: false, error: "Missing required image fields (name, url)" }, { status: 400 })
      }

      const newImage = new Image({
        name,
        url,
        altText: altText || ""
      })

      const savedImage = await newImage.save()
      return NextResponse.json({ success: true, data: savedImage })

    } else {
      return NextResponse.json({ success: false, error: "Invalid type. Must be 'post' or 'image'" }, { status: 400 })
    }

  } catch (error: unknown) {
    console.error("Save content error:", error)
    const message = error instanceof Error ? error.message : "Failed to save content"
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}
