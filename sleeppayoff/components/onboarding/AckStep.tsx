'use client';

import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';
import { FooterCta, PrimaryButton, StepShell } from './OnboardingUI';

export function AckStep({
  icon: Icono,
  titulo,
  texto,
  onContinuar,
}: {
  icon: LucideIcon;
  titulo: string;
  texto: string;
  onContinuar: () => void;
}) {
  return (
    <StepShell>
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <motion.span
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="flex size-16 items-center justify-center rounded-full"
          style={{ background: 'color-mix(in oklab, var(--accent) 14%, transparent)' }}
        >
          <Icono size={32} color="var(--accent)" />
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="mt-6 text-2xl font-bold text-[var(--text-primary)] [font-family:var(--font-display)]"
        >
          {titulo}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.14, duration: 0.3 }}
          aria-hidden="true"
          className="mt-3 h-1 w-16 rounded-full"
          style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2, var(--accent)))' }}
        />
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.3 }}
          className="mt-3 max-w-xs text-base leading-relaxed text-[var(--text-secondary)]"
        >
          {texto}
        </motion.p>
      </div>
      <FooterCta>
        <PrimaryButton onClick={onContinuar}>Continuar</PrimaryButton>
      </FooterCta>
    </StepShell>
  );
}
