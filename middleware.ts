import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyAdminSessionToken } from '@/lib/admin-auth'

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Check if it's an admin path
  if (path.startsWith('/blog/admin')) {
    
    // Allow the login page to be accessible without authentication
    if (path === '/blog/admin/login') {
      return NextResponse.next()
    }

    // Check for our secure admin_token cookie
    const token = request.cookies.get('admin_token')?.value

    // If no token exists, redirect immediately to the login page
    if (!(await verifyAdminSessionToken(token))) {
      return NextResponse.redirect(new URL('/blog/admin/login', request.url))
    }
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/blog/admin', '/blog/admin/:path*'],
}
