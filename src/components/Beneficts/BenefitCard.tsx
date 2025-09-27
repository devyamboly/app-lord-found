import { Benefit } from "@/types/benefits";
import { Card, CardContent } from "@/components/ui/card";

interface BenefitCardProps {
  benefit: Benefit;
}

export const BenefitCard = ({ benefit }: BenefitCardProps) => (
  <div className="px-2">
    <Card className="group relative h-full overflow-hidden rounded-3xl border border-amber-500/20 bg-zinc-900/60 backdrop-blur-lg transition-transform duration-300 ease-out hover:scale-x-[102%] hover:border-amber-200/40">
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-amber-500/20 blur-3xl transition-opacity duration-300 group-hover:opacity-70" aria-hidden />
      <div className="pointer-events-none absolute inset-0 border border-white/5" aria-hidden />
      <CardContent className="relative z-10 flex h-full flex-col gap-6 p-8">
        <div className="flex items-center gap-5">
          <div className="flex h-20 w-full items-center justify-center rounded-2xl ">
            <img
              src={benefit.icon}
              alt={benefit.title}
              className="w-20 object-contain mix-blend-multiply"
            />
          </div>
        </div>

        <div className="space-y-3 text-center md:text-start">
          <h3 className="text-2xl font-semibold text-white drop-shadow-sm">
            {benefit.title}
          </h3>
          <p className="text-sm leading-relaxed text-zinc-300">
            {benefit.description}
          </p>
        </div>

        
      </CardContent>
    </Card>
  </div>
);
