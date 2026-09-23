'use client';

import { AnimatePresence, motion } from 'motion/react';
import { PrimaryButton } from './OnboardingUI';

// Reemplaza window.confirm() (diálogo gris del sistema, rompe la identidad) por un
// sheet propio tematizado — misma regla que el resto del kit: cero UI nativa sin vestir.
export function ConfirmSalir({
  abierto,
  onCancelar,
  onConfirmar,
}: {
  abierto: boolean;
  onCancelar: () => void;
  onConfirmar: () => void;
}) {
  return (
    <AnimatePresence>
      {abierto && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onCancelar}
            className="fixed inset-0 z-40 bg-black/60"
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            role="alertdialog"
            aria-modal="true"
            className="fixed inset-x-5 bottom-6 z-50 rounded-[var(--radius-card)] bg-[var(--surface)] p-5 shadow-[var(--shadow-2,0_20px_40px_rgba(0,0,0,0.4))]"
          >
            <h2 className="text-lg font-bold text-[var(--text-primary)] [font-family:var(--font-display)]">
              ¿Salir del cálculo?
            </h2>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Vas a perder tus respuestas de hasta ahora.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <PrimaryButton onClick={onCancelar}>Seguir calculando</PrimaryButton>
              <button
                type="button"
                onClick={onConfirmar}
                className="h-12 w-full text-sm font-semibold text-[var(--text-secondary)]"
              >
                Salir de todas formas
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
