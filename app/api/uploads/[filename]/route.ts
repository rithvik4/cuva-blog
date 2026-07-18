import { NextResponse } from "next/server"
import { readFile } from "fs/promises"
import { extname } from "path"
import { resolveUploadedFilePath } from "@/lib/base64-upload"

const CONTENT_TYPES: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
}

export async function GET(_request: Request, { params }: { params: Promise<{ filename: string }> }) {
  try {
    const { filename } = await params

    if (!filename || filename.includes("/") || filename.includes("\\")) {
      return NextResponse.json({ error: "Invalid filename" }, { status: 400 })
    }

    const filePath = resolveUploadedFilePath(filename)
    const buffer = await readFile(filePath)
    const extension = extname(filename).toLowerCase()
    const contentType = CONTENT_TYPES[extension] || "application/octet-stream"

    return new NextResponse(buffer as BodyInit, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    })
  } catch {
    return NextResponse.json({ error: "Image not found" }, { status: 404 })
  }
}
