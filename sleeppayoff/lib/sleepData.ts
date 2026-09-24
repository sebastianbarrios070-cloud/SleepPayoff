'use client';

// Datos de la app interna (Paso 5) — SIN backend todavía (Supabase real llega en
// el Paso 6): estado local persistido en localStorage, versionado (SECUENCIA-MAESTRA
// §4 permite datos locales antes de conectar servicios). El LOOP de retención
// (ESTADO.md → Decisiones técnicas): GATILLO = notificación a la hora de despertar
// del usuario (26-AUTH.../24-GAMIFICACION) · ACCIÓN = registrar horas dormidas anoche,
// 1 tap · RECOMPENSA = deuda actualizada + insight nuevo + racha · INVERSIÓN =
// historial de noches que afina el cálculo y la hora de desconexión — el registro
// de HOY cambia lo que la app dice MAÑANA (test binario de 24: pasa).

import { useEffect, useState } from 'react';

export type Noche = { fecha: string; horas: number };

export type EstadoSueno = {
  v: 1;
  noches: Noche[];
  horaDesconexion: string;
  meta: string;
};

const CLAVE = 'sleeppayoff_datos';

function hoyISO(offsetDias = 0): string {
  const d = new Date();
  d.setDate(d.getDate() + offsetDias);
  return d.toISOString().slice(0, 10);
}

// Semilla realista (32 — "la app nunca se enseña vacía"): Carlos, freelancer,
// racha de 5 noches seguidas ya registradas + hoy pendiente (para que la acción
// de 1 tap del M0 tenga algo real que hacer al abrir por primera vez).
function semilla(): EstadoSueno {
  const horasSemana = [5.5, 6, 6.5, 6, 7];
  const noches: Noche[] = horasSemana.map((horas, i) => ({
    fecha: hoyISO(-(horasSemana.length - i)),
    horas,
  }));
  return { v: 1, noches, horaDesconexion: '22:00', meta: 'Eliminar la neblina mental en el trabajo' };
}

function cargar(): EstadoSueno {
  if (typeof window === 'undefined') return semilla();
  try {
    const guardado = window.localStorage.getItem(CLAVE);
    if (!guardado) return semilla();
    const parsed = JSON.parse(guardado) as EstadoSueno;
    if (parsed.v !== 1 || !Array.isArray(parsed.noches)) return semilla();
    return parsed;
  } catch {
    return semilla();
  }
}

function guardar(estado: EstadoSueno): boolean {
  try {
    window.localStorage.setItem(CLAVE, JSON.stringify(estado));
    return true;
  } catch {
    // localStorage puede fallar (modo privado, cuota) — el estado sigue en memoria
    // de esta sesión, pero el llamador debe avisar: si no, el usuario cree que
    // registró y pierde el dato al recargar sin enterarse.
    return false;
  }
}

export function calcularDeuda(promedioHorasDormidas: number): number {
  const deficitPromedio = Math.max(0, 8 - promedioHorasDormidas);
  const estimado = deficitPromedio * 2.8;
  return Math.min(10, Math.max(0.5, Number(estimado.toFixed(1))));
}

function promedio(noches: Noche[], dias: number): number | null {
  if (noches.length === 0) return null;
  const ultimas = noches.slice(-dias);
  return ultimas.reduce((s, n) => s + n.horas, 0) / ultimas.length;
}

// Racha = días consecutivos con registro, contando hacia atrás desde hoy si ya
// se registró hoy, o desde ayer si todavía no (gracia de un día antes de romperse).
function calcularRacha(noches: Noche[]): number {
  const fechas = new Set(noches.map((n) => n.fecha));
  let racha = 0;
  let cursor = fechas.has(hoyISO(0)) ? 0 : -1;
  while (fechas.has(hoyISO(cursor))) {
    racha += 1;
    cursor -= 1;
  }
  return racha;
}

export function useSleepData() {
  const [estado, setEstado] = useState<EstadoSueno>(semilla);
  const [listo, setListo] = useState(false);
  const [errorGuardado, setErrorGuardado] = useState(false);

  useEffect(() => {
    setEstado(cargar());
    setListo(true);
  }, []);

  const registrarHoy = (horas: number): void => {
    setEstado((prev) => {
      const sinHoy = prev.noches.filter((n) => n.fecha !== hoyISO());
      const siguiente = { ...prev, noches: [...sinHoy, { fecha: hoyISO(), horas }] };
      setErrorGuardado(!guardar(siguiente));
      return siguiente;
    });
  };

  const fijarDesconexion = (hora: string): void => {
    setEstado((prev) => {
      const siguiente = { ...prev, horaDesconexion: hora };
      setErrorGuardado(!guardar(siguiente));
      return siguiente;
    });
  };

  const entradaHoy = estado.noches.find((n) => n.fecha === hoyISO());
  const registradoHoy = entradaHoy !== undefined;
  const promedio7 = promedio(estado.noches, 7);
  const promedioAnterior7 = (() => {
    const noches = estado.noches.slice(0, -7);
    return promedio(noches, 7);
  })();
  const deuda = calcularDeuda(promedio7 ?? 6);
  const racha = calcularRacha(estado.noches);

  return {
    listo,
    estado,
    registrarHoy,
    fijarDesconexion,
    registradoHoy,
    entradaHoy,
    promedio7,
    promedioAnterior7,
    deuda,
    racha,
    errorGuardado,
  };
}
