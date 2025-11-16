import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from '@/lib/jwt';

const publicPaths = ['/login', '/signup', '/'];
const authPaths = ['/login', '/signup'];

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value || 
                request.headers.get('authorization')?.replace('Bearer ', '');
  
  const { pathname } = request.nextUrl;
  
  const isPublicPath = publicPaths.some(path => pathname.startsWith(path));
  const isAuthPath = authPaths.some(path => pathname.startsWith(path));
  
  if (token) {
    const decoded = verifyToken(token);
    
    if (!decoded) {
      if (!isPublicPath) {
        return NextResponse.redirect(new URL('/login', request.url));
      }
    } else {
      if (isAuthPath) {
        return NextResponse.redirect(new URL('/', request.url));
      }
    }
  } else {
    if (!isPublicPath && !isAuthPath) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|logo.png|logo-white.png).*)'],
};
