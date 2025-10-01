import { PhaseKind } from "@/types/challenges";
import { RuleRow } from "@/types/challenges";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function RulesTable({
  phase,
  rows,
}: {
  phase: PhaseKind;
  rows: RuleRow[];
}) {
  const headers =
    phase === "one"
      ? ["", "Phase 1", "Funded"]
      : ["", "Phase 1", "Phase 2", "Funded"];

  const maxColumns = 4;
  const currentColumns = headers.length;
  // IVÁN PINGA
  //-- hecho con el autocompletado de github copilot

  return (
    <div className="rounded-xl border border-zinc-700/70">
      <Table className="w-full table-auto">
        <TableHeader>
          <TableRow>
            {headers.map((h, index) => (
              <TableHead
                key={h}
                className={cn(
                  "text-zinc-300 text-xs sm:text-sm whitespace-normal",
                  index === 0 && "w-[55%] sm:w-[40%]",
                   index > 0 && phase === "one" && "w-[30%]", // 2 columnas restantes: 30% cada una
                   index > 0 && phase === "two" && "w-[20%]" // 3 columnas restantes: 20% cada una
                )}
              >
                {h}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((r) => (
            <TableRow key={r.label}>
              <TableCell className="font-medium text-zinc-200 flex items-start gap-2 text-xs sm:text-sm leading-tight">
                {r.icon && <r.icon className="w-4 shrink-0 mt-0.5" />}
                <span className="whitespace-normal break-words leading-tight">{r.label}</span>
               </TableCell>
              <TableCell className="text-zinc-100 text-xs sm:text-sm leading-tight">
                 {r.values.phase1 ?? "—"}
               </TableCell>
               {phase === "two" && (
                <TableCell className="text-zinc-100 text-xs sm:text-sm leading-tight">
                   {r.values.phase2 ?? "—"}
                 </TableCell>
               )}
              <TableCell className="text-zinc-100 text-xs sm:text-sm leading-tight">
                 {r.values.funded ?? "—"}
               </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
