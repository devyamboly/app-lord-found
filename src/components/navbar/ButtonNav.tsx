import Link from "next/link"
import { cn } from "@/lib/utils"
import type { ButtonNav } from "@/types/navBar"


export default function ButtonNav({ href, children, className, colorClass }: ButtonNav) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center justify-center select-none",
        " px-3 py-1 no-underline",
        // base amarillo con degradado diagonal
        "bg-[linear-gradient(-30deg,#fbbf24_50%,#f59e0b_50%)] hover:bg-[linear-gradient(-30deg,#fbbf24_50%,#f59e0b_50%)]/90 text-white",
        `border-2 border-black shadow-xl/30 overflow-hidden`,
        "transition-colors duration-300",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/70 focus-visible:ring-offset-2",
        className
      )}
    >
      {/* Overlay en hover para oscurecer un poco (equivalente a ::before con opacity) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-200 group-hover:opacity-20"
      />

      {/* Líneas animadas en los bordes */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute left-0 top-0 h-[2px] w-full bg-gradient-to-l from-transparent to-black`}
        style={{ animation: "animateTop 2s linear infinite" }}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute right-0 top-0 h-full w-[2px] bg-gradient-to-t from-transparent to-black`}
        style={{ animation: "animateRight 2s linear infinite", animationDelay: "-1s" }}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent to-black`}
        style={{ animation: "animateBottom 2s linear infinite" }}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent to-black`}
        style={{ animation: "animateLeft 2s linear infinite", animationDelay: "-1s" }}
      />

      {/* Contenido */}
      <span className="relative z-10">{children}</span>
    </Link>
  )
}
