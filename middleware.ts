import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const url = new URL(req.url)
  if (url.pathname.startsWith('/albums/')) {
    const slug = url.pathname.split('/')[2]
    const cookie = req.cookies.get(`album_${slug}`)
    if (!cookie || cookie.value !== 'granted') {
      return NextResponse.redirect(new URL(`/client?slug=${slug}`, req.url))
    }
  }
  return NextResponse.next()
}
export const config = { matcher: ["/albums/:path*"] };

