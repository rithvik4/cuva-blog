import { NextResponse } from "next/server"
import { createImage, createPost, listPosts, updatePost } from "@/lib/blog-store"
import { cookies } from "next/headers"
import { verifyAdminSessionToken } from "@/lib/admin-auth"
import { buildBlogHtmlFromSections, normalizeBlogSections, sanitizeBlogHtml } from "@/lib/blog-content"
import { generateUniquePostSlug, normalizeCategory, slugifyTitle } from "@/lib/post-utils"
import { saveBase64Image } from "@/lib/base64-upload"

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

    if (type === "post") {
      // Basic validation for post
      const { title, slug, excerpt, content, sections, author, date, category, image, postId, imageBase64, imageFilename, imageMimeType } = payload
      const allPosts = await listPosts()
      const existingPost = postId ? allPosts.find((post) => post.id === String(postId)) || null : null
      
      // Keep current image path by default; update only when new base64 is provided.
      let finalImagePath = typeof image === "string" ? image : null

      if (postId && typeof image === "undefined" && !imageBase64) {
        finalImagePath = existingPost?.image || null
      }

      if (imageBase64 && imageFilename && imageMimeType) {
        try {
          finalImagePath = await saveBase64Image(imageBase64, imageFilename, imageMimeType, title || "post cover")
        } catch (uploadError) {
          return NextResponse.json({ success: false, error: `Image upload failed: ${uploadError instanceof Error ? uploadError.message : "Unknown error"}` }, { status: 400 })
        }
      }

      const normalizedSections = normalizeBlogSections(sections || [])
      const generatedContent = buildBlogHtmlFromSections(normalizedSections)
      const effectiveContent = generatedContent || String(content || "")

      if (!title || !slug || !excerpt || !effectiveContent.trim() || !author || !date || !category) {
        return NextResponse.json({ success: false, error: "Missing required post fields" }, { status: 400 })
      }

      const baseSlug = slugifyTitle(String(slug || title))
      let cleanSlug = baseSlug

      if (postId) {
        if (!existingPost) {
          return NextResponse.json({ success: false, error: "Post not found for update" }, { status: 404 })
        }

        let counter = 2
        while (allPosts.some((post) => post.id !== String(postId) && post.slug === cleanSlug)) {
          cleanSlug = `${baseSlug}-${counter}`
          counter += 1
        }
      } else {
        cleanSlug = generateUniquePostSlug(
          baseSlug,
          allPosts.map((post) => post.slug),
        )
      }

      const safeContent = sanitizeBlogHtml(String(effectiveContent))
      const safeCategory = normalizeCategory(String(category))

      if (postId) {
        // Update existing post
        const updated = await updatePost(String(postId), {
          title: String(title).trim(),
          slug: cleanSlug,
          excerpt: String(excerpt).trim(),
          content: safeContent,
          sections: normalizedSections,
          author: String(author).trim(),
          date: String(date).trim(),
          category: safeCategory,
          imageGradient: payload.imageGradient || "from-[#f1f8e9] to-[#e8f5e9]",
          image: finalImagePath,
        })
        
        if (!updated) {
          return NextResponse.json({ success: false, error: "Post not found for update" }, { status: 404 })
        }
        
        return NextResponse.json({ success: true, data: updated })
      } else {
        // Create new post
        const savedPost = await createPost({
          title: String(title).trim(),
          slug: cleanSlug,
          excerpt: String(excerpt).trim(),
          content: safeContent,
          sections: normalizedSections,
          author: String(author).trim(),
          date: String(date).trim(),
          category: safeCategory,
          imageGradient: payload.imageGradient || "from-[#f1f8e9] to-[#e8f5e9]",
          image: finalImagePath,
        })
        return NextResponse.json({ success: true, data: savedPost })
      }

    } else if (type === "image") {
      // Basic validation for image
      const { name, url, altText } = payload

      if (!name || !url) {
        return NextResponse.json({ success: false, error: "Missing required image fields (name, url)" }, { status: 400 })
      }

      const savedImage = await createImage({ name, url, altText: altText || "" })
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
