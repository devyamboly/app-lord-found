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
    <div className="px-2 sm:px-3 py-2 h-full">
      <div className="group relative h-full min-h-[420px] sm:min-h-[460px]">
        {/* Card */}
        <Card className="relative h-full bg-zinc-900/70 backdrop-blur-lg border border-amber-500/20 rounded-3xl overflow-hidden transition-all duration-500 group-hover:border-amber-400/60 group-hover:shadow-2xl group-hover:shadow-amber-500/30 group-hover:bg-zinc-900/80 group-hover:scale-[1.02]">
          {/* Glow effect on hover */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-amber-500/20 blur-3xl transition-opacity duration-300 group-hover:opacity-70" aria-hidden></div>
          
          {/* Inner border effect */}
          <div className="pointer-events-none absolute inset-0 border border-white/5" aria-hidden></div>
          
          {/* Quote icon background */}
          <div className="absolute top-4 right-4 text-amber-500/10 group-hover:text-amber-500/20 transition-colors duration-300">
            <svg className="w-16 h-16 sm:w-20 sm:h-20" fill="currentColor" viewBox="0 0 32 32">
              <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z"/>
            </svg>
          </div>

          <CardContent className="relative p-5 sm:p-7 h-full flex flex-col items-center text-center gap-4 sm:gap-5">
            {/* Avatar with ring effect */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-orange-500 rounded-full animate-pulse opacity-50 blur-md"></div>
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt={`Foto de ${name}`}
                  className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-amber-500/60 ring-4 ring-amber-500/20 shadow-xl shadow-amber-500/30 group-hover:border-amber-400 group-hover:ring-amber-400/30 transition-all duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-amber-500/30 to-orange-500/20 border-4 border-amber-500/60 ring-4 ring-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-xl shadow-xl shadow-amber-500/30 group-hover:border-amber-400 group-hover:ring-amber-400/30 transition-all duration-300 group-hover:scale-105">
                  {getInitials(name)}
                </div>
              )}
            </div>

            {/* Quote text with better typography */}
            <div className="relative flex-1 flex items-center">
              <p className="text-zinc-100/90 text-sm sm:text-base leading-relaxed italic max-w-[32ch] sm:max-w-[28ch] font-light tracking-wide">
                "{quote}"
              </p>
            </div>

            {/* Divider */}
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>

            {/* Author info with enhanced styling */}
            <div className="mt-auto space-y-2">
              <div className="text-white font-bold text-base sm:text-lg tracking-wide">
                {name}
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 via-amber-600/20 to-orange-500/20 border border-amber-500/40 rounded-full backdrop-blur-sm">
                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                </svg>
                <span className="text-amber-400 font-bold text-sm sm:text-base">
                  {currency(payout)}
                </span>
              </div>
            </div>
          </CardContent>

          {/* Bottom shine effect */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
        </Card>
      </div>
    </div>
  );
}