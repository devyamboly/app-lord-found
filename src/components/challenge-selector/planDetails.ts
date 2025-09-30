export type PlanDetailKey = 'L' | 'O' | 'R' | 'D';

export const PLAN_DETAILS: Record<PlanDetailKey, {
  title: string;
  phases: string;
  story: string;
  focus: string;
  cta: string;
  icon: string;
}> = {
  L: {
    title: "Legacy",
    phases: "2 fases",
    story: "Construye tu camino paso a paso. Legacy convierte tu progreso en un legado.",
    focus: "Traders que buscan estructura y recorrido.",
    cta: "Construye tu Legacy hoy.",
    icon: "📖",
  },
  O: {
    title: "One",
    phases: "1 fase",
    story: "Cuando un solo paso basta. ONE es rapidez, simplicidad y acceso directo al fondeo.",
    focus: "Traders que quieren inmediatez.",
    cta: "Hazlo en One.",
    icon: "⚡",
  },
  R: {
    title: "Royal Direct",
    phases: "Fondeo inmediato",
    story: "El acceso reservado para los privilegiados. Royal Direct es fondeo inmediato, sin fases.",
    focus: "Traders que quieren empezar ya.",
    cta: "Accede directo con Royal.",
    icon: "👑",
  },
  D: {
    title: "Dynamic",
    phases: "Edición especial",
    story: "Exclusividad en movimiento. Dynamic es edición especial, limitada y distinta.",
    focus: "Traders que buscan experiencias únicas.",
    cta: "Vive la experiencia Dynamic.",
    icon: "🔥",
  },
};

export function resolvePlan(key: string | null) {
  if (!key) return null;
  const normalized = key.toUpperCase() as PlanDetailKey;
  return PLAN_DETAILS[normalized] ? { detailKey: normalized, data: PLAN_DETAILS[normalized] } : null;
}

