import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { verifyAdminSessionToken } from "@/lib/admin-auth"
import { saveBase64Image } from "@/lib/base64-upload"

export async function POST(req: Request) {
  try {
    const token = (await cookies()).get("admin_token")?.value

    if (!(await verifyAdminSessionToken(token))) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 })
    }

    const body = await req.json()
    const { imageBase64, imageFilename, imageMimeType, altText } = body

    if (!imageBase64 || !imageFilename || !imageMimeType) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: imageBase64, imageFilename, imageMimeType" },
        { status: 400 },
      )
    }

    try {
      const imageUrl = await saveBase64Image(imageBase64, imageFilename, imageMimeType, altText || "")
      return NextResponse.json({
        success: true,
        data: {
          url: imageUrl,
          filename: imageFilename,
          mimeType: imageMimeType,
        },
      })
    } catch (uploadError) {
      return NextResponse.json(
        { success: false, error: `Image upload failed: ${uploadError instanceof Error ? uploadError.message : "Unknown error"}` },
        { status: 400 },
      )
    }
  } catch (error: unknown) {
    console.error("Upload image error:", error)
    const message = error instanceof Error ? error.message : "Failed to upload image"
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}
