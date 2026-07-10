import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { username, password } = body

    const correctPassword = process.env.ADMIN_PASSWORD
    const correctUsername = process.env.ADMIN_USERNAME

    if (!correctPassword || !correctUsername) {
      return NextResponse.json({ error: "Server misconfiguration. Admin credentials not set." }, { status: 500 })
    }

    if (password === correctPassword && username === correctUsername) {
      // Get the cookie store
      const cookieStore = await cookies()
      
      // Set the authentication cookie
      // Secure in production, HttpOnly prevents XSS attacks
      cookieStore.set("admin_token", "authenticated", {
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

  } catch (error: any) {
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 })
  }
}
