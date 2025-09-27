import { LucideIcon } from "lucide-react";

export type PhaseKind = "one" | "two";
export type AccountSize = "5k" | "10k" | "25k" | "50k" | "100k";

export interface FeeMap {
  one: Record<AccountSize, number>; // one-phase prices
  two: Record<AccountSize, number>; // two-phase prices
}

export interface RuleRow {
  label: string;
  values: {
    phase1?: string;
    phase2?: string;
    funded?: string;
  };
  icon?: LucideIcon;
}

export interface ChallengeConfig {
  types: {
    one: string;
    two: string;
    // [key: string]: string;
  };
  fees: FeeMap;
  rules: {
    one: RuleRow[]; // one-phase shows Phase 1 + Funded
    two: RuleRow[]; // two-phase shows Phase 1 + Phase 2 + Funded
  };
}
