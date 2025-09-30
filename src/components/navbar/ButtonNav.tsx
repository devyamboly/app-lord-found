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
        // base amarillo oscuro con degradado diagonal para mejor contraste con texto blanco     
        "bg-[linear-gradient(-30deg,#d97706_50%,#A85A1B_50%)] text-zinc-200",
        "border border-amber-900/10 shadow-xl/30 overflow-hidden",
        "transition-colors duration-300",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/70 focus-visible:ring-offset-2",
        className
      )}
    >
      {/* Overlay en hover para oscurecer un poco (equivalente a ::before con opacity) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-amber-700/20 opacity-0 transition-opacity duration-200 group-hover:opacity-20"
      />

      {/* Líneas animadas en los bordes */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute left-0 top-0 h-[2px] w-full bg-gradient-to-l from-transparent to-amber-200`}
        style={{ animation: "animateTop 2s linear infinite" }}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute right-0 top-0 h-full w-[2px] bg-gradient-to-t from-transparent to-amber-200`}
        style={{ animation: "animateRight 2s linear infinite", animationDelay: "-1s" }}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent to-amber-200`}
        style={{ animation: "animateBottom 2s linear infinite" }}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent to-amber-200`}
        style={{ animation: "animateLeft 2s linear infinite", animationDelay: "-1s" }}
      />

      {/* Contenido */}
      <span className="relative z-10">{children}</span>
    </Link>
  )
}
