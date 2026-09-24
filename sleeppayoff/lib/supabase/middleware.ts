import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

// Patrón canónico de @supabase/ssr (26-AUTH-MODERNO.md) — refresca el token
// en cada request. Modelo onboarding-first anónimo: el funnel completo
// (/, /onboarding, /paywall, /entrar, legales) es público; solo /app exige sesión.
const RUTAS_PUBLICAS = ['/', '/onboarding', '/paywall', '/entrar', '/terminos', '/privacidad', '/reembolsos', '/aviso-ia'];

export async function actualizarSesion(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) => supabaseResponse.cookies.set(name, value, options));
        },
      },
    }
  );

  // getUser() valida el JWT contra Supabase y dispara el refresh si expiró —
  // nunca getSession() aquí (no revalida).
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const path = request.nextUrl.pathname;
  const esPublica = RUTAS_PUBLICAS.some((p) => path === p || (p !== '/' && path.startsWith(p + '/')));

  if (!user && !esPublica) {
    const url = request.nextUrl.clone();
    url.pathname = '/entrar';
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
