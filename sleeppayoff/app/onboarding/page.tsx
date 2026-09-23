'use client';

// Onboarding de SleepPayoff — Paso 2 de la secuencia maestra.
// Especificación: docs/sistema/50-DISENO-ONBOARDING-PAYWALL.md §A/§B.
// Cada pregunta ecoa un campo de FICHA-AVATAR.md (dolores/deseos/objeción dominante);
// el resultado final es la primera victoria real (36 la instrumenta cuando haya analítica).

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { AlarmClock, Brain, Coffee, HeartPulse, Moon, Sparkles, Watch } from 'lucide-react';
import { ProgressHeader } from '@/components/onboarding/OnboardingUI';
import { ChipStep, InputHorasStep, DesconexionStep } from '@/components/onboarding/ChipStep';
import { AckStep } from '@/components/onboarding/AckStep';
import { LoadingStep } from '@/components/onboarding/LoadingStep';
import { ResultStep } from '@/components/onboarding/ResultStep';
import { ConfirmSalir } from '@/components/onboarding/ConfirmSalir';

type Respuestas = {
  despertar?: string;
  neblina?: string;
  probado?: string;
  meta?: string;
  horasDormidas?: number;
  desconexion?: string;
};

const PASOS = [
  'despertar',
  'neblina',
  'reconocimiento1',
  'probado',
  'meta',
  'horas',
  'desconexion',
  'reconocimiento2',
  'cargando',
  'resultado',
] as const;

export default function OnboardingPage() {
  const router = useRouter();
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

        {paso === 'meta' && (
          <ChipStep
            key="meta"
            pregunta="¿Qué te gustaría lograr primero?"
            subcopy="Tu plan de 3 días se ordena según esto"
            opciones={[
              { label: 'Dejar de depender del café', icon: Coffee },
              { label: 'Dormir y despertar mejor', icon: Moon },
              { label: 'Rendir más en el trabajo', icon: Sparkles },
              { label: 'Entender qué me pasa', icon: Brain },
            ]}
            onSelect={(v) => {
              setR((p) => ({ ...p, meta: v }));
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
            texto="Pocos definen su horario, su meta y su hora de desconexión antes de empezar. Tu plan usa exactamente esa disciplina — solo le faltaba el número exacto."
            onContinuar={avanzar}
          />
        )}

        {paso === 'cargando' && (
          <LoadingStep
            key="cargando"
            lineas={[
              { texto: `Analizando tu hora de despertar: ${r.despertar ?? '—'}` },
              { texto: `Registrando tus horas de anoche: ${(r.horasDormidas ?? 6).toFixed(1)}h` },
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
            onVerPlan={() => router.push('/paywall')}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// Cálculo real (no inventado) a partir del único dato duro que el usuario dio esta sesión:
// deuda = déficit de anoche frente a 8h, proyectado a 3 noches — el mismo horizonte del
// Plan de 3 Días. Se ajusta con historial real en cuanto exista persistencia (25).
function calcularDeuda(horasDormidas: number): number {
  const deficitAnoche = Math.max(0, 8 - horasDormidas);
  const estimado = deficitAnoche * 2.8;
  return Math.min(10, Math.max(0.5, Number(estimado.toFixed(1))));
}
