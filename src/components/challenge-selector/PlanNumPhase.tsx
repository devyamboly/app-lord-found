import clsx from "clsx";
import { resolvePlan } from "./planDetails";

type PlanNumPhaseProps = {
  selectedPlan: string | null;
  className?: string;
};

export default function PlanNumPhase({ selectedPlan, className }: PlanNumPhaseProps) {
  const result = resolvePlan(selectedPlan);

  if (!result) return null;

  const {
    data: { icon, phases, title },
  } = result;

  return (
    <div
      className={clsx(
        "rounded-[2rem] border border-amber-400/40 bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-slate-900/30 px-5 py-6 sm:px-6 sm:py-7 shadow-[0_25px_70px_-25px_rgba(251,191,36,0.3)] backdrop-blur-md",
        "flex flex-col items-start gap-3 text-slate-100/90 max-w-full",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <span className="text-3xl drop-shadow-[0_0_14px_rgba(251,191,36,0.4)]">{icon}</span>
        <div className="flex flex-col leading-none">
          <span className="text-[0.65rem] uppercase tracking-[0.45em] text-amber-200/70">{phases}</span>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
      </div>
    </div>
  );
}

