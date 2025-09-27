import { ChallengeConfig } from "@/types/challenges";
import { Target, AlertTriangle, BarChart3, Shield } from "lucide-react";
export const CHALLENGE_CONFIG: ChallengeConfig = {
  types: {
    one: "1 Fase Challenge",
    two: "2 Fases Challenge",
  },
  fees: {
    one: { "5k": 89, "10k": 109, "25k": 219, "50k": 349, "100k": 609 },
    two: { "5k": 39, "10k": 79, "25k": 179, "50k": 319, "100k": 589 },
  },
  rules: {
    one: [
      {
        label: "Profit Target",
        values: { phase1: "12%", funded: "–" },
        icon: Target,
      },
      {
        label: "Daily Loss",
        values: { phase1: "4%", funded: "4%" },
        icon: AlertTriangle,
      },
      {
        label: "Maximum Loss",
        values: { phase1: "8%", funded: "8%" },
        icon: AlertTriangle,
      },
      {
        label: "Maximum Drawdown",
        values: { phase1: "Static", funded: "Static" },
        icon: Shield,
      },
    ],
    two: [
      {
        label: "Profit Target",
        values: { phase1: "8%", phase2: "5%", funded: "–" },
        icon: Target,
      },
      {
        label: "Daily Loss",
        values: { phase1: "5%", phase2: "5%", funded: "5%" },
        icon: AlertTriangle,
      },
      {
        label: "Maximum Loss",
        values: { phase1: "10%", phase2: "10%", funded: "10%" },
        icon: AlertTriangle,
      },
      {
        label: "Maximum Drawdown",
        values: { phase1: "Static", phase2: "Static", funded: "Static" },
        icon: Shield,
      },
    ],
  },
};
