import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import { Post } from "@/lib/Post"
import { Image } from "@/lib/Image"

export async function GET() {
  try {
    await connectDB()

    // Fetch all posts and images
    const posts = await Post.find({}).sort({ createdAt: -1 }).lean()
    const images = await Image.find({}).sort({ createdAt: -1 }).lean()

    return NextResponse.json({
      success: true,
      data: {
        posts,
        images
      }
    })
  } catch (error: any) {
    console.error("Fetch content error:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch content" }, { status: 500 })
  }
}
