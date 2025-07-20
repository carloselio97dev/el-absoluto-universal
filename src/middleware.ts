import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Permitir siempre el login (y sus assets internos)
  if (pathname.startsWith('/intranet/login')) {
    return NextResponse.next();
  }

  // Leer cookie de sesión
  const session = req.cookies.get('session')?.value;

  // Proteger todas las rutas bajo /intranet
  if (pathname.startsWith('/intranet')) {
    if (!session) {
      const loginUrl = req.nextUrl.clone();
      loginUrl.pathname = '/intranet/login';
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

// Importante: incluir la ruta exacta y el wildcard
export const config = {
  matcher: ['/intranet', '/intranet/:path*'],
};
