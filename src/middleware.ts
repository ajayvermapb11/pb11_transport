import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const publicPaths = ['/', '/login', '/signup', '/about-us', '/my-quotes', '/support'];
const authPaths = ['/login', '/signup'];
const protectedPaths = ['/dashboard'];

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  const isPublicPath = publicPaths.some(path => pathname === path || (path !== '/' && pathname.startsWith(path)));
  const isAuthPath = authPaths.some(path => pathname.startsWith(path));
  const isProtectedPath = protectedPaths.some(path => pathname.startsWith(path));

  // If user has token and trying to access login/signup, redirect to dashboard
  if (token && isAuthPath) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // If user doesn't have token and trying to access protected route, redirect to login
  if (!token && isProtectedPath) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // For all other cases, let the request through
  // The actual JWT verification will happen in the page/API route
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, logo.png, etc (public files)
     * - assets (public assets folder)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|logo.png|logo-white.png|assets).*)',
  ],
};
