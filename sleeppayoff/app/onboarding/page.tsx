'use client';

// Onboarding de SleepPayoff — Paso 2 de la secuencia maestra.
// Especificación: docs/sistema/50-DISENO-ONBOARDING-PAYWALL.md §A/§B.
// Cada pregunta ecoa un campo de FICHA-AVATAR.md (dolores/deseos/objeción dominante);
// el resultado final es la primera victoria real (36 la instrumenta cuando haya analítica).

import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { AlarmClock, Brain, Coffee, HeartPulse, Moon, Sparkles, Watch } from 'lucide-react';
import { ProgressHeader } from '@/components/onboarding/OnboardingUI';
import { ChipStep, InputHorasStep, DesconexionStep } from '@/components/onboarding/ChipStep';
import { AckStep } from '@/components/onboarding/AckStep';
import { LoadingStep } from '@/components/onboarding/LoadingStep';
import { ResultStep } from '@/components/onboarding/ResultStep';
import { ConfirmSalir } from '@/components/onboarding/ConfirmSalir';

type Respuestas = {
  meta?: string;
  neblina?: string;
  probado?: string;
  despertar?: string;
  cafe?: string;
  horasDormidas?: number;
  desconexion?: string;
};

// Meta primero (perceived fit inmediato — Headspace/Irrational Labs 2026: preguntar
// duplicó activación), luego dolor, objeción dominante, ancla horaria, café (VoC literal
// de FICHA-AVATAR), el dato duro, y el compromiso.
const PASOS = [
  'meta',
  'neblina',
  'reconocimiento1',
  'probado',
  'despertar',
  'cafe',
  'horas',
  'desconexion',
  'reconocimiento2',
  'cargando',
  'resultado',
] as const;

export default function OnboardingPage() {
  return (
    <Suspense fallback={null}>
      <OnboardingFlow />
    </Suspense>
  );
}

function OnboardingFlow() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const planPreseleccionado = searchParams.get('plan');
  const [indice, setIndice] = useState(0);
  const [r, setR] = useState<Respuestas>({});
  const [confirmandoSalir, setConfirmandoSalir] = useState(false);
  const paso = PASOS[indice];

  const avanzar = (): void => setIndice((i) => Math.min(i + 1, PASOS.length - 1));
  const retroceder = (): void => setIndice((i) => Math.max(i - 1, 0));

  const deuda = calcularDeuda(r.horasDormidas ?? 6);

  return (
    <div
      className="flex min-h-dvh flex-col text-[var(--text-primary)] [font-family:var(--font-body)]"
      style={{
        background:
          'radial-gradient(560px 420px at 12% -6%, color-mix(in oklab, var(--accent) 22%, transparent), transparent 62%), radial-gradient(520px 380px at 105% 10%, color-mix(in oklab, var(--accent-2, var(--accent)) 20%, transparent), transparent 58%), var(--bg)',
      }}
    >
      {paso !== 'cargando' && paso !== 'resultado' && (
        <div className="px-5">
          <ProgressHeader
            paso={indice}
            total={PASOS.length - 2}
            onBack={indice > 0 ? retroceder : undefined}
            onExit={() => setConfirmandoSalir(true)}
          />
        </div>
      )}

      <ConfirmSalir
        abierto={confirmandoSalir}
        onCancelar={() => setConfirmandoSalir(false)}
        onConfirmar={() => router.push('/')}
      />

      <AnimatePresence mode="wait">
        {paso === 'meta' && (
          <ChipStep
            key="meta"
            pregunta="¿Qué te gustaría lograr primero?"
            subcopy="Tu plan de 3 días se ordena según esto"
            opciones={[
              { label: 'Eliminar la neblina mental en el trabajo', icon: Sparkles },
              { label: 'Saber a qué hora desconectarme hoy', icon: Moon },
              { label: 'Dejar de posponer la alarma', icon: AlarmClock },
              { label: 'Entender qué me pasa', icon: Brain },
            ]}
            onSelect={(v) => {
              setR((p) => ({ ...p, meta: v }));
              avanzar();
            }}
          />
        )}

        {paso === 'neblina' && (
          <ChipStep
            key="neblina"
            pregunta="¿Cuándo sientes la neblina mental?"
            subcopy="Ese momento del día es el que más te está costando"
            opciones={[
              { label: 'A media tarde (2-4 PM)', icon: Brain },
              { label: 'Apenas despierto', icon: Brain },
              { label: 'Todo el día', icon: Brain },
              { label: 'No estoy seguro', icon: Brain },
            ]}
            onSelect={(v) => {
              setR((p) => ({ ...p, neblina: v }));
              avanzar();
            }}
          />
        )}

        {paso === 'reconocimiento1' && (
          <AckStep
            key="reconocimiento1"
            icon={Sparkles}
            titulo="No es que dormiste mal"
            texto="Es tu deuda de sueño acumulada. No es un problema de voluntad — es un número que se puede calcular y pagar en días, no en semanas."
            onContinuar={avanzar}
          />
        )}

        {paso === 'probado' && (
          <ChipStep
            key="probado"
            pregunta="¿Ya probaste algo para esto?"
            subcopy="Así sabemos qué no repetir en tu plan"
            opciones={[
              { label: 'Apps de seguimiento de sueño', icon: Watch },
              { label: 'Reloj inteligente', icon: Watch },
              { label: 'Café o suplementos', icon: Coffee },
              { label: 'Nada todavía', icon: HeartPulse },
            ]}
            onSelect={(v) => {
              setR((p) => ({ ...p, probado: v }));
              avanzar();
            }}
          />
        )}

        {paso === 'despertar' && (
          <ChipStep
            key="despertar"
            pregunta="¿A qué hora te despiertas entre semana?"
            subcopy="Así ajustamos tu plan a tu horario real"
            opciones={[
              { label: 'Antes de las 6:30', icon: AlarmClock },
              { label: 'Entre 6:30 y 7:30', icon: AlarmClock },
              { label: 'Entre 7:30 y 9:00', icon: AlarmClock },
              { label: 'Después de las 9:00', icon: AlarmClock },
            ]}
            onSelect={(v) => {
              setR((p) => ({ ...p, despertar: v }));
              avanzar();
            }}
          />
        )}

        {paso === 'cafe' && (
          <ChipStep
            key="cafe"
            pregunta="¿Cuántos cafés necesitas para aguantar el día?"
            subcopy="Tu plan busca que dependas menos de esto"
            opciones={[
              { label: 'Ninguno, pero me cuesta enfocarme', icon: Coffee },
              { label: '1 a 2 tazas', icon: Coffee },
              { label: '3 o más — modo supervivencia', icon: Coffee },
            ]}
            onSelect={(v) => {
              setR((p) => ({ ...p, cafe: v }));
              avanzar();
            }}
          />
        )}

        {paso === 'horas' && (
          <InputHorasStep
            key="horas"
            onContinuar={(h) => {
              setR((p) => ({ ...p, horasDormidas: h }));
              avanzar();
            }}
          />
        )}

        {paso === 'desconexion' && (
          <DesconexionStep
            key="desconexion"
            onFijar={(h) => {
              setR((p) => ({ ...p, desconexion: h }));
              avanzar();
            }}
          />
        )}

        {paso === 'reconocimiento2' && (
          <AckStep
            key="reconocimiento2"
            icon={Sparkles}
            titulo="Tus respuestas te describen"
            texto="Pocos definen su meta, su horario y su hora de desconexión antes de empezar. Tu plan usa exactamente esa disciplina — solo le faltaba el número exacto."
            onContinuar={avanzar}
          />
        )}

        {paso === 'cargando' && (
          <LoadingStep
            key="cargando"
            lineas={[
              { texto: `Analizando tu meta: ${r.meta ?? '—'}` },
              { texto: `Registrando tu promedio de sueño: ${(r.horasDormidas ?? 6).toFixed(1)}h/noche` },
              { texto: 'Calculando tu deuda de sueño' },
              { texto: `Armando tu plan de 3 días hasta las ${r.desconexion ?? '22:00'}` },
            ]}
            onComplete={avanzar}
          />
        )}

        {paso === 'resultado' && (
          <ResultStep
            key="resultado"
            deudaHoras={deuda}
            horaDesconexion={r.desconexion ?? '22:00'}
            onVerPlan={() =>
              router.push(planPreseleccionado ? `/paywall?plan=${planPreseleccionado}` : '/paywall')
            }
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// Cálculo real (no inventado) a partir del dato duro que el usuario dio: su PROMEDIO de
// horas dormidas de la última semana (no una sola noche — la deuda de sueño se acumula
// en días, no en una noche) frente a las 8h de referencia. Se ajusta con historial real
// en cuanto exista persistencia (25).
function calcularDeuda(promedioHorasDormidas: number): number {
  const deficitPromedio = Math.max(0, 8 - promedioHorasDormidas);
  const estimado = deficitPromedio * 2.8;
  return Math.min(10, Math.max(0.5, Number(estimado.toFixed(1))));
}
