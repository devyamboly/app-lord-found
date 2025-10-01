import { useMemo } from "react";
import { PRODUCTS } from "@/mocks/products";

type PlanPhaseInfoProps = {
  selectedPlan: string | null;
};

const PLAN_DETAILS = {
  L: {
    title: "Legacy",
    phases: "2 fases",
    story: "Construye tu camino paso a paso. Legacy convierte tu progreso en un legado.",
    focus: "Traders que buscan estructura y recorrido.",
    icon: "📖",
  },
  O: {
    title: "One",
    phases: "1 fase",
    story: "Cuando un solo paso basta. ONE es rapidez, simplicidad y acceso directo al fondeo.",
    focus: "Traders que quieren inmediatez.",
    icon: "⚡",
  },
  R: {
    title: "Royal Direct",
    phases: "Fondeo inmediato",
    story: "El acceso reservado para los privilegiados. Royal Direct es fondeo inmediato, sin fases.",
    focus: "Traders que quieren empezar ya.",
    icon: "👑",
  },
  D: {
    title: "Dynamic",
    phases: "Edición especial",
    story: "Exclusividad en movimiento. Dynamic es edición especial, limitada y distinta.",
    focus: "Traders que buscan experiencias únicas.",
    icon: "🔥",
  },
} as const;

export default function PlanPhaseInfo({ selectedPlan }: PlanPhaseInfoProps) {
  const planKey = useMemo(() => {
    if (!selectedPlan) return "";
    const normalized = selectedPlan.toUpperCase() as keyof typeof PLAN_DETAILS;
    return PLAN_DETAILS[normalized] ? normalized : "";
  }, [selectedPlan]);

  if (!planKey) return null;

  const plan = PLAN_DETAILS[planKey];
  const product = PRODUCTS[planKey];

  const phaseLabel = product?.description?.split(" ")[0] || plan.phases;

  return (
    <div className="flex flex-col gap-4 lg:gap-5 text-slate-100/90 animate-fade-in">
      <div className="hidden lg:flex items-center gap-3 pl-6 text-amber-200/90 uppercase tracking-[0.35em] text-xs">
        <span className="whitespace-nowrap">{phaseLabel}</span>
        <div className="h-px flex-1 bg-gradient-to-r from-amber-300/60 via-amber-400/80 to-transparent" />
      </div>

      <div className="flex flex-col lg:flex-col gap-4 rounded-3xl border border-amber-400/30 bg-gradient-to-br from-slate-900/70 via-slate-900/40 to-slate-900/20 px-5 py-6 sm:px-6 sm:py-7 lg:px-7 lg:py-8 shadow-[0_25px_70px_-25px_rgba(251,191,36,0.35)] backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="text-3xl lg:text-4xl drop-shadow-[0_0_12px_rgba(251,191,36,0.4)]">
            {plan.icon}
          </span>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.4em] text-amber-200/70">
              {plan.phases}
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">
              {plan.title}
            </h3>
          </div>
        </div>

        <p className="text-sm sm:text-base text-slate-100/80 leading-relaxed">
          {plan.story}
        </p>

        <div className="rounded-2xl border border-amber-500/20 bg-amber-400/10 px-4 py-3 text-sm text-amber-100/90 shadow-inner shadow-amber-500/10">
          <span className="font-medium">Enfoque:</span> {plan.focus}
        </div>
      </div>
    </div>
  );
}

