import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { createAdminSessionToken } from "@/lib/admin-auth"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { username, password } = body

    const correctPassword = process.env.ADMIN_PASSWORD
    const correctUsername = process.env.ADMIN_USERNAME
    const sessionSecret = process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD

    if (!correctPassword || !correctUsername || !sessionSecret) {
      return NextResponse.json({ error: "Server misconfiguration. Admin credentials not set." }, { status: 500 })
    }

    if (password === correctPassword && username === correctUsername) {
      // Get the cookie store
      const cookieStore = await cookies()
      
      const token = await createAdminSessionToken(username)

      cookieStore.set("admin_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 // 24 hours
      })

      return NextResponse.json({ success: true, message: "Authentication successful" })
    } else {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

  } catch {
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 })
  }
}
