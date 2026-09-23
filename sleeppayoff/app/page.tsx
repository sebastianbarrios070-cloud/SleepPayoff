'use client';

// Landing de SleepPayoff — compuesta desde el kit canónico de plantillas-codigo/landing/.
// Copy trazado a docs/copy/landing.md (derivado de FICHA-AVATAR.md). Tokens en
// components/landing/tokens.css (tematizados desde FICHA-ARTE.md, Opción A "Deuda Clara").

import { AlarmClock, Brain, Coffee, Moon } from 'lucide-react';
import { Hero } from '@/components/landing/Hero';
import { LogoMark } from '@/components/landing/LogoMark';
import { HorizonDivider } from '@/components/landing/HorizonDivider';
import { Problema } from '@/components/landing/Problema';
import { Agitacion } from '@/components/landing/Agitacion';
import { Solucion } from '@/components/landing/Solucion';
import { AppPorDentro } from '@/components/landing/AppPorDentro';
import { Oferta } from '@/components/landing/Oferta';
import { Garantia } from '@/components/landing/Garantia';
import { Faq } from '@/components/landing/Faq';
import { CtaFinal } from '@/components/landing/CtaFinal';
import { FooterLegal } from '@/components/landing/FooterLegal';
import { StickyCtaMobile } from '@/components/landing/ui';

// Modelo 2 (onboarding-first, decisión de 02C): el CTA lleva a /onboarding, nunca al checkout
// directo desde el hero.
const CTA_HREF = '/onboarding';
const CTA_LABEL = 'Calcular mi deuda de sueño gratis';

export default function LandingSleepPayoff() {
  return (
    <div className="min-h-dvh bg-[var(--bg)] text-[var(--text-primary)] [font-family:var(--font-body)]">
      {/* 1. HERO */}
      <Hero
        appName="SleepPayoff"
        logo={<LogoMark />}
        loginHref="/entrar"
        h1Marked="Sabe [acento]exactamente[/acento] cuándo desconectarte hoy"
        subtitleMarked="30 segundos, cero sensores. [b]Calcula tu deuda de sueño[/b] y plan de 3 días."
        ctaLabel={CTA_LABEL}
        ctaHref={CTA_HREF}
        socialProof={<span>2 días gratis · sin reloj inteligente · cancela cuando quieras</span>}
        visual={
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/mocks/hoy.png"
            alt="Pantalla Hoy de SleepPayoff: deuda de sueño de 6.3 horas y plan de 3 pasos"
            className="mx-auto w-full max-w-xs"
          />
        }
      />

      {/* 2. PROBLEMA */}
      <Problema
        titulo="¿Te suena?"
        preguntas={[
          { icon: Brain, textoMarked: '¿Sientes una neblina mental a las 2 PM que no te deja avanzar?' },
          { icon: AlarmClock, textoMarked: '¿Te despiertas sintiendo que no descansaste, aunque dormiste 8 horas?' },
          { icon: Coffee, textoMarked: '¿Tomas 3 o 4 cafés al día solo para mantener los ojos abiertos?' },
          { icon: Moon, textoMarked: '¿Apagas la luz agotado pero tu mente no se apaga?' },
        ]}
      />

      {/* 3. AGITACIÓN */}
      <Agitacion
        frases={[
          'Cada semana pierdes horas de trabajo facturable por la neblina mental de la tarde.',
          'Una tarea de 4 horas te toma [acento]el doble[/acento] cuando la neblina mental no te deja avanzar.',
          'Otra app que solo te dice que dormiste mal no lo arregla: [b]más gráficos no es más energía[/b].',
        ]}
        contraste={{
          labelHoy: 'Hoy',
          hoy: '6.3 horas de deuda de sueño y ningún plan para pagarla.',
          labelFuturo: 'En 6 meses, si nada cambia',
          futuro: 'El mismo ciclo de cansancio y culpa — con 6 meses menos de rendimiento.',
        }}
      />

      {/* 4. SOLUCIÓN */}
      <Solucion
        tituloMarked="Tu energía, [acento]traducida a un plan[/acento]"
        mecanismo="el Plan de 3 Días"
        bigIdeaMarked="No te falta disciplina: te falta un número. El Plan de 3 Días te dice [b]exactamente cuándo desconectarte[/b] para pagar tu deuda de sueño."
        pasos={[
          { titulo: 'Registra tus horas', detalle: '30 segundos, sin reloj inteligente ni sensores.' },
          { titulo: 'Calculamos tu deuda', detalle: 'Tu cifra exacta de horas de sueño pendientes.' },
          { titulo: 'Sigues tu plan', detalle: 'Hora de desconexión y siesta estratégica para hoy.' },
        ]}
        antesDespues={{
          labelAntes: 'Antes',
          antes: 'Adivinas por qué estás agotado a las 2 PM.',
          labelDespues: 'Después',
          despues: 'Sabes la hora exacta para desconectarte y despertar con la cabeza despejada.',
        }}
      />

      <HorizonDivider />

      {/* 5. LA APP POR DENTRO */}
      <AppPorDentro
        tituloMarked="Tu día, [acento]ya calculado[/acento]"
        frames={[
          { src: '/mocks/onboarding.png', label: 'Así te preguntamos al empezar' },
          { src: '/mocks/plan.png', label: 'Tu plan de 3 días en progreso' },
          { src: '/mocks/paywall.png', label: 'Elige tu plan' },
        ]}
        ctaLabel={CTA_LABEL}
        ctaHref={CTA_HREF}
      />

      {/* 6. OFERTA */}
      <Oferta
        tituloMarked="Empieza gratis. Sigue por [acento]$0.10 al día[/acento]"
        trialDias={2}
        stack={{
          lineas: [
            { resultado: 'SleepPayoff Pro — Plan de 3 Días ilimitado (12 meses)', valor: '$60' },
            { resultado: 'Cálculo diario de tu deuda de sueño', valor: '$15' },
            { resultado: 'Hora exacta de desconexión cada noche', valor: '$12' },
          ],
          totalTachado: '$87',
          nota: 'Hoy: $3.00/mes (se cobra $36.00/año)',
        }}
        anual={{
          nombre: 'Anual',
          badge: 'MÁS POPULAR',
          precioMes: '$3.00',
          totalAnual: 'Se cobra $36.00/año',
          ahorro: 'Ahorra 4 meses',
          descomposicionDia: 'menos de $0.10 al día',
          ctaLabel: 'Calcular con el plan anual',
          ctaHref: `${CTA_HREF}?plan=anual`,
          features: [
            'Tu deuda de sueño, calculada cada día',
            'Plan de recuperación de 3 días, ilimitado',
            'Hora exacta de desconexión, cada noche',
            'Registro 100% manual, sin wearables',
          ],
        }}
        mensual={{
          nombre: 'Mensual',
          precioMes: '$5.00',
          ctaLabel: 'Calcular con el plan mensual',
          ctaHref: `${CTA_HREF}?plan=mensual`,
          features: [
            'Cálculo de tu deuda de sueño, todos los días',
            'Plan de recuperación de 3 días',
            'Tu hora de desconexión, lista cada noche',
            'Cancelas cuando quieras, sin llamadas',
          ],
        }}
      />

      <HorizonDivider />

      {/* 7. GARANTÍA */}
      <Garantia
        nombre="la Garantía Cero Falsas Promesas"
        condicionMarked="Si en tus primeros 2 días el cálculo no te da una hora de desconexión clara para hoy, escribes un correo y te devolvemos todo. Sin preguntas."
        pisoLegal="Cancelas y pides reembolso desde la app — el pago lo procesa Stripe, nunca guardamos tu tarjeta."
      />

      <HorizonDivider />

      {/* 8. FAQ */}
      <Faq
        items={[
          {
            pregunta: 'Ya probé apps de sueño y las abandono, ¿esto es distinto?',
            respuestaMarked: 'Sí: no te mostramos un gráfico bonito de lo mal que dormiste — te damos [b]la hora exacta[/b] para desconectarte hoy.',
          },
          {
            pregunta: '¿Necesito un reloj inteligente o dejar el teléfono prendido toda la noche?',
            respuestaMarked: 'No — [b]registro 100% manual[/b], 30 segundos por la mañana y 30 por la noche. Cero sensores.',
          },
          {
            pregunta: '¿Es una suscripción más que voy a olvidar cancelar?',
            respuestaMarked: '$5/mes (~$0.17/día) o $3/mes en el plan anual. Cancelas [b]cuando quieras[/b] desde la app, sin llamadas.',
          },
          {
            pregunta: '¿Es seguro poner mi tarjeta?',
            respuestaMarked: 'El pago lo procesa Stripe — [b]nunca vemos ni guardamos[/b] el número de tu tarjeta.',
          },
          {
            pregunta: 'Mi horario de trabajo es caótico, ¿igual funciona?',
            respuestaMarked: 'Sí — el cálculo [b]se adapta al horario que ingreses[/b], no asume que duermes de 10 PM a 6 AM.',
          },
        ]}
      />

      {/* 9. CTA FINAL */}
      <CtaFinal
        h2Marked="Imagina saber [acento]exactamente[/acento] cuándo desconectarte"
        futurePacingMarked="Esta noche registras tus horas, mañana recibes tu plan — y a las 2 PM ya no te agarra la neblina mental por sorpresa."
        ctaLabel={CTA_LABEL}
        ctaHref={CTA_HREF}
        recap="Garantía Cero Falsas Promesas · 2 días gratis"
        psMarked="PS: [b]sin wearables, sin teoría de fases REM[/b] — solo tu deuda de sueño y un plan de 3 días para pagarla. Hoy entras con [b]2 días gratis[/b]."
      />

      {/* 10. FOOTER LEGAL */}
      <FooterLegal
        appName="SleepPayoff"
        logo={<LogoMark size={20} />}
        soporteEmail="soporte@sleeppayoff.app"
        enlaces={[
          { label: 'Privacidad', href: '/privacidad' },
          { label: 'Términos y Condiciones', href: '/terminos' },
          { label: 'Reembolsos', href: '/reembolsos' },
          { label: 'Aviso de IA', href: '/aviso-ia' },
        ]}
      />

      <StickyCtaMobile labelComercial={CTA_LABEL} href={CTA_HREF} />
    </div>
  );
}
