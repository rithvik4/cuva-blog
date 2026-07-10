import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import { Post } from "@/lib/Post"
import { Image } from "@/lib/Image"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { type, payload } = body

    if (!type || !payload) {
      return NextResponse.json({ success: false, error: "Missing type or payload" }, { status: 400 })
    }

    await connectDB()

    if (type === "post") {
      // Basic validation for post
      const { title, slug, excerpt, content, author, date, category, image } = payload

      if (!title || !slug || !excerpt || !content || !author || !date || !category) {
        return NextResponse.json({ success: false, error: "Missing required post fields" }, { status: 400 })
      }

      // Ensure slug is clean
      const cleanSlug = slug.trim().startsWith("http") ? slug.trim() : slug.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')

      const newPost = new Post({
        title,
        slug: cleanSlug,
        excerpt,
        content,
        author,
        date,
        category,
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

  } catch (error: any) {
    console.error("Save content error:", error)
    return NextResponse.json({ success: false, error: error.message || "Failed to save content" }, { status: 500 })
  }
}
