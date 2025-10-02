import Link from "next/link"
import { cn } from "@/lib/utils"
import type { ButtonNav } from "@/types/navBar"


export default function ButtonNav({ href, children, className, colorClass }: ButtonNav) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center justify-center select-none",
        "px-3 sm:px-4 md:px-7 py-1.5 sm:py-2 no-underline text-sm sm:text-base font-medium", 
        "bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-white font-semibold",
        "border border-amber-300/30 overflow-hidden rounded-xl",
        "shadow-[0_0_4px_rgba(251,191,36,0.2)] hover:shadow-[0_0_8px_rgba(251,191,36,0.3)]",
        "transition-all duration-300 hover:scale-105 hover:brightness-110",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/70 focus-visible:ring-offset-2",
        "animate-glow-pulse",
        className
      )}
    >
      {/* Efecto de brillo que cruza el botón */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl"
      >
        <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine-fast" />
      </span>

      {/* Overlay en hover para oscurecer un poco */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-amber-700/20 opacity-0 transition-opacity duration-200 group-hover:opacity-10 rounded-xl"
      />

      {/* Líneas animadas en los bordes */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute left-0 top-0 h-[2px] w-full bg-gradient-to-l from-transparent via-white/80 to-transparent`}
        style={{ animation: "animateTop 2s linear infinite" }}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-white/80 to-transparent`}
        style={{ animation: "animateBottom 2s linear infinite" }}
      />

      {/* Contenido */}
      <span className="relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">{children}</span>
    </Link>
  )
}
