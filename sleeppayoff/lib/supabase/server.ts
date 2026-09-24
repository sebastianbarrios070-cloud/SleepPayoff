import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

// Cliente de servidor (Server Components / Route Handlers / Server Actions).
// Lee/escribe cookies httpOnly — nunca localStorage (26-AUTH-MODERNO.md).
export async function crearClienteServidor() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
          } catch {
            // setAll llamado desde un Server Component sin permiso de escritura —
            // el middleware refresca la sesión igual, esto es seguro de ignorar.
          }
        },
      },
    }
  );
}
