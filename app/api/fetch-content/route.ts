import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import { Post } from "@/lib/Post"
import { Image } from "@/lib/Image"
import { cookies } from "next/headers"
import { verifyAdminSessionToken } from "@/lib/admin-auth"

export async function GET() {
  try {
    const token = (await cookies()).get("admin_token")?.value

    if (!(await verifyAdminSessionToken(token))) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 })
    }

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
  } catch (error: unknown) {
    console.error("Fetch content error:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch content" }, { status: 500 })
  }
}
