import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const session = req.cookies.get('session')?.value;

  // Acceso al login ya autenticado
  if (pathname === '/login' && session) {
    const url = req.nextUrl.clone();
    url.pathname = '/intranet';
    return NextResponse.redirect(url);
  }

  // Rutas protegidas
  if (pathname.startsWith('/intranet') && !session) {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/intranet/:path*', '/login'],
};
