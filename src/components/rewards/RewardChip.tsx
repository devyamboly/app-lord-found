import { DollarSign } from "lucide-react";
import { currency } from "@/helpers/challenge-sizes";
import { cn } from "@/lib/utils";

export default function RewardChip({ amount, className }: { amount: number; className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 rounded-xl border border-amber-500/30 bg-gradient-to-br from-zinc-900/70 to-zinc-800/40 px-6 py-4 shadow-lg shadow-amber-500/10",
        className
      )}
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40">
        <DollarSign className="w-5 h-5 text-amber-400" />
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-amber-300 font-semibold tracking-wider">PREMIO</span>
        <span className="text-white font-bold">{currency(amount)}</span>
      </div>
    </div>
  );
}