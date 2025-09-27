import { AccountSize } from "@/types/challenges";
import { cva } from "class-variance-authority";

export const sizes: AccountSize[] = ["5k", "10k", "25k", "50k", "100k"];
export const currency = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

// Size chip using CVA (selected style matches screenshot)
export const sizeItem = cva(
  "px-4 py-2 rounded-xl text-sm font-medium border transition-colors cursor-pointer",
  {
    variants: {
      active: {
        true: "bg-amber-500/90 text-black border-amber-400 shadow",
        false: "bg-zinc-900/40 text-zinc-200 border-zinc-700 hover:bg-zinc-800",
      },
    },
    defaultVariants: { active: false },
  }
);
