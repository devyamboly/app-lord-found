import clsx from "clsx";
import { resolvePlan } from "./planDetails";

type PlanPhaseInformationProps = {
  selectedPlan: string | null;
  className?: string;
};

export default function PlanPhaseInformation({ selectedPlan, className }: PlanPhaseInformationProps) {
  const result = resolvePlan(selectedPlan);

  if (!result) return null;

  const {
    data: { story, focus },
  } = result;

  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-[2.5rem] border border-amber-400/30 bg-gradient-to-r from-slate-900/75 via-slate-900/40 to-slate-900/20 px-6 py-8 sm:px-10 sm:py-10",
        "shadow-[0_45px_80px_-35px_rgba(251,191,36,0.35)] backdrop-blur-lg text-slate-100/85",
        "transition-transform duration-700 ease-out",
        "[mask-image:radial-gradient(circle_at_center,_black_60%,_transparent_100%)]",
        "animate-slide-in-up",
        "hidden lg:block",
        className,
      )}
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-16 right-10 h-56 w-56 rounded-full bg-amber-500/30 blur-[100px]" />
        <div className="absolute bottom-0 left-10 h-40 w-40 rounded-full bg-amber-400/20 blur-[80px]" />
      </div>

      <div className="relative flex flex-col items-center gap-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <h3 className="text-lg sm:text-2xl font-semibold text-white drop-shadow-[0_0_18px_rgba(251,191,36,0.35)]">
            Historia
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-amber-100/90">
            {story}
          </p>
        </div>

        <div className="rounded-3xl border border-amber-500/25 bg-amber-400/10 px-5 py-4 text-sm sm:text-base text-amber-100/95 shadow-inner shadow-amber-500/15">
          <span className="font-medium text-white">Enfoque:</span> {focus}
        </div>
      </div>
    </div>
  );
}

