import { createBrowserClient } from '@supabase/ssr';

// Cliente de navegador — usa la publishable key (pública por diseño; la
// protección real la da RLS, ver las migraciones del proyecto en Supabase).
export function crearClienteNavegador() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  );
}
