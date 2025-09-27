import { Card, CardContent } from "@/components/ui/card";
import { currency } from "@/helpers/challenge-sizes";

interface TestimonialCardProps {
  name: string;
  payout: number;
  quote: string;
  imageSrc?: string;
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts[parts.length - 1]?.[0] ?? "";
  return (first + last).toUpperCase();
}

export default function TestimonialCard({ name, payout, quote, imageSrc }: TestimonialCardProps) {
  return (
    <div className="px-1 sm:px-2">
      <Card className="h-full bg-gradient-to-br from-amber-500/20 to-amber-600/10 border-amber-500/30 backdrop-blur-sm">
        <CardContent className="p-4 sm:p-6 h-full flex flex-col items-center text-center gap-3 sm:gap-4">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={`Foto de ${name}`}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border border-amber-500/40"
              loading="lazy"
            />
          ) : (
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold">
              {getInitials(name)}
            </div>
          )}

          <p className="text-zinc-100 text-sm sm:text-base leading-relaxed italic max-w-[30ch] sm:max-w-[26ch]">
            {quote}
          </p>
          <div className="mt-auto space-y-0.5 sm:space-y-1">
            <div className="text-white font-semibold text-sm sm:text-base">{name}</div>
            <div className="text-amber-400 font-medium text-sm sm:text-base">Payout {currency(payout)}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}