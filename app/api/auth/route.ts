import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { createAdminSessionToken } from "@/lib/admin-auth"
import { getAdminPassword, getAdminUsername } from "@/lib/admin-config"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { username, password } = body

    const correctUsername = getAdminUsername()
    const correctPassword = getAdminPassword()

    const providedUsername = typeof username === "string" ? username.trim() : ""
    const providedPassword = typeof password === "string" ? password.trim() : ""
    const expectedUsername = correctUsername
    const expectedPassword = correctPassword

    if (providedPassword === expectedPassword && providedUsername === expectedUsername) {
      // Get the cookie store
      const cookieStore = await cookies()
      
      const token = await createAdminSessionToken(providedUsername)

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
