import { ArrowRight } from "lucide-react";

export default function PlanSelectionHint() {
  return (
    <div className="hidden lg:flex flex-col items-end justify-center gap-2 pr-6 text-amber-200/90">
      <span className="text-xs tracking-[0.45em] uppercase text-amber-300/80">
        selecciona
      </span>
      <div className="flex items-center gap-3">
        <span className="text-2xl font-semibold uppercase leading-none drop-shadow-[0_0_12px_rgba(251,191,36,0.25)]">
          un plan
        </span>
        <ArrowRight className="h-10 w-10 text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.6)]" strokeWidth={1.5} />
      </div>
      <div className="relative mt-2 h-[3px] w-24 rounded-full bg-gradient-to-r from-transparent via-amber-300/60 to-amber-400">
        <span className="absolute -right-2 top-1/2 -translate-y-1/2 h-3 w-3 rotate-45 rounded-sm bg-amber-400/90" />
      </div>
    </div>
  );
}

