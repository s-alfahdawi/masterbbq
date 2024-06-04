import { NextResponse } from 'next/server';
import { i18n } from 'next-intl/middleware';

export function middleware(request) {
  const locale = request.cookies.get('NEXT_LOCALE') || i18n.defaultLocale;

  const response = NextResponse.next();
  response.headers.set('x-locale', locale);

  return response;
}

export const config = {
  matcher: '/:path*',
};