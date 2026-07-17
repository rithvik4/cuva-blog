import { NextResponse } from "next/server"
import { listImages, listPosts } from "@/lib/blog-store"
import { cookies } from "next/headers"
import { verifyAdminSessionToken } from "@/lib/admin-auth"

export async function GET() {
  try {
    const token = (await cookies()).get("admin_token")?.value

    if (!(await verifyAdminSessionToken(token))) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 })
    }

    const posts = await listPosts()
    const images = await listImages()

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
