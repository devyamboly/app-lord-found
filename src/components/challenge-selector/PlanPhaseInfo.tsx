import { resolvePlan } from "./planDetails";

type PlanPhaseInfoProps = {
  selectedPlan: string | null;
};

export default function PlanPhaseInfo({ selectedPlan }: PlanPhaseInfoProps) {
  const result = resolvePlan(selectedPlan);
  if (!result) return null;

  const {
    data: { icon, phases, title, story, focus },
  } = result;

  return (
    <div className="lg:hidden mt-6 sm:mt-8 animate-fade-in">
      <div className="flex flex-col gap-4 rounded-3xl border border-amber-400/30 bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-slate-900/20 px-5 py-6 shadow-[0_25px_70px_-25px_rgba(251,191,36,0.35)] backdrop-blur-md text-slate-100/90">
        <div className="flex items-center gap-3">
          <span className="text-3xl drop-shadow-[0_0_14px_rgba(251,191,36,0.4)]">{icon}</span>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.4em] text-amber-200/70">{phases}</span>
            <h3 className="text-xl sm:text-2xl font-semibold text-white">{title}</h3>
          </div>
        </div>

        <p className="text-sm sm:text-base leading-relaxed text-amber-100/85">
          {story}
        </p>

        <div className="rounded-2xl border border-amber-500/20 bg-amber-400/10 px-4 py-3 text-sm text-amber-100/90 shadow-inner shadow-amber-500/10">
          <span className="font-medium text-white">Enfoque:</span> {focus}
        </div>
      </div>
    </div>
  );
}

