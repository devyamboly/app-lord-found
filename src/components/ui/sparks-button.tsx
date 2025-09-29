"use client";
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import gsap from "gsap";

type Props = {
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  size?: "sm" | "default" | "lg" | "icon";
};

/**
 * SparksButton
 * Botón con overlay de partículas (sparkles + dots) animadas con GSAP.
 * Los cometas salen desde abajo hacia arriba en hover, con fondo espacial de dots.
 */
export default function SparksButton({
  icon,
  children,
  onClick,
  disabled = false,
  className,
  size = "lg",
}: Props) {
  const rootRef = useRef<HTMLButtonElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const vignetteRef = useRef<HTMLDivElement | null>(null);
  const sparkleTimelines = useRef<gsap.core.Timeline[]>([]);

  useEffect(() => {
    if (!overlayRef.current || !rootRef.current) return;

    const ctx = gsap.context(() => {
      const overlay = overlayRef.current!;
      const button = rootRef.current!;
      const vignette = vignetteRef.current!;
      const sparkles = overlay.querySelectorAll(".sparkle");
      const dots = overlay.querySelectorAll(".dot");

      // Dots: fondo espacial con pulso sutil
      dots.forEach((dt) => {
        const width = overlay.clientWidth;
        const height = overlay.clientHeight;
        gsap.set(dt, {
          x: gsap.utils.random(4, width - 4),
          y: gsap.utils.random(4, height - 4),
          scale: gsap.utils.random(0.3, 0.8),
          opacity: gsap.utils.random(0.1, 0.4),
        });

        // Pulso muy sutil para el fondo espacial
        const tl = gsap.timeline({ repeat: -1, yoyo: true });
        tl.to(dt, {
          scale: `*=${gsap.utils.random(0.8, 1.2)}`,
          opacity: gsap.utils.random(0.2, 0.6),
          duration: gsap.utils.random(2, 4),
          ease: "sine.inOut",
        });
      });

      // Sparkles: cometas que salen desde abajo hacia arriba
      sparkles.forEach((sp, i) => {
        const width = overlay.clientWidth;
        const height = overlay.clientHeight;
        
        // Posición inicial: debajo del botón (ocultos)
        const startX = gsap.utils.random(10, width - 10);
        const startY = height + 20; // Debajo del botón
        const endY = -30; // Arriba del botón
        
        gsap.set(sp, {
          x: startX,
          y: startY,
          rotation: 0, // Sin rotación, vertical por defecto
          opacity: 0,
          scale: 0.5,
        });
    
        // Timeline para cada cometa (pausado inicialmente)
        const tl = gsap.timeline({ 
          repeat: -1, 
          repeatDelay: gsap.utils.random(0.2, 2.0),
          paused: true 
        });
        
        tl.to(sp, {
          y: endY,
          opacity: 1,
          scale: 1,
           duration: gsap.utils.random(1.0, 2.0),
          ease: "none",
        })
        .to(sp, {
          opacity: 0,
          scale: 0.3,
          duration: 0.3,
          ease: "power2.out",
        }, "-=0.3");
    
        sparkleTimelines.current.push(tl);
      });
    
      // Hover effects
      const handleMouseEnter = () => {
        // Oscurecer el fondo del botón
        gsap.to(button, {
          backgroundColor: "#d97706", // amber-600 (más oscuro)
          borderColor: "rgba(252, 211, 77, 0.9)", // amber-300 brillante
          duration: 0.3,
          ease: "power2.out"
        });
        
        // Mostrar efecto de viñeta
        gsap.to(vignette, {
          opacity: 0.6,
          duration: 0.3,
          ease: "power2.out"
        });
        
        // Mostrar dots con más opacidad
        gsap.to(dots, {
          opacity: 0.8,
          duration: 0.3,
        });
        
        // Activar cometas con delays random
        sparkleTimelines.current.forEach((tl) => {
          gsap.delayedCall(gsap.utils.random(0, 1.5), () => tl.restart(true));
        });
      };

      const handleMouseLeave = () => {
        // Restaurar color original
        gsap.to(button, {
          backgroundColor: "#f59e0b", // amber-500 (original)
          borderColor: "rgba(251, 191, 36, 0.4)", // amber-400 sutil
          duration: 0.3,
          ease: "power2.out"
        });
        
        // Ocultar efecto de viñeta
        gsap.to(vignette, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out"
        });
        
        // Ocultar dots
        gsap.to(dots, {
          opacity: 0.3,
          duration: 0.3,
        });
        
        // Pausar y resetear cometas para permitir re-hover
        sparkleTimelines.current.forEach((tl) => tl.pause(0));
        const sparkles = overlay.querySelectorAll('.sparkle');
        gsap.set(sparkles, { opacity: 0, y: overlay.clientHeight + 20, scale: 0.5 });
      };

      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);

      // Estado inicial
      gsap.set(overlay, { opacity: 1 });
      gsap.set(dots, { opacity: 0.3 });
      gsap.set(vignette, { opacity: 0 });

      // Cleanup
      return () => {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseleave", handleMouseLeave);
        sparkleTimelines.current.forEach(tl => tl.kill());
        sparkleTimelines.current = [];
      };
    }, overlayRef);

    return () => ctx.revert();
  }, []);

  return (
    <Button
      ref={rootRef}
      size={size}
      className={cn(
        "relative h-14 w-fit rounded-xl bg-amber-500 text-white font-semibold transition-all duration-200 border-2 border-amber-400/40 hover:cursor-pointer overflow-hidden",
        // accesibilidad de foco
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        className
      )}
      style={{
        boxShadow: "0 0 20px 3px rgba(245, 158, 11, 0.35)",
        transition: "box-shadow 0.3s ease-in-out"
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 25px 5px rgba(251, 191, 36, 0.45)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px 3px rgba(245, 158, 11, 0.35)";
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {/* Contenido (icono + texto) */}
      <span className="relative z-10 inline-flex items-center gap-2">
        {icon}
        {children}
      </span>

      {/* Efecto de viñeta (oscurecimiento en bordes) */}
      <div
        ref={vignetteRef}
        className="pointer-events-none absolute inset-0 z-[5]"
        style={{
          borderRadius: "inherit",
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.7) 100%)",
        }}
      />

      {/* Overlay de efectos */}
      <div
        ref={overlayRef}
        className="pointer-events-none absolute inset-0 z-0"
        style={{ borderRadius: "inherit" }}
      >
        <div className="effect-container absolute inset-0">
          {/* Sparkles (cometas verticales) */}
          {Array.from({ length: 6 }).map((_, i) => (
          <div key={`sp-${i}`} className={`sparkle sp-${i + 1} absolute w-1 h-12`}>
              <div className="s__blur absolute inset-0 bg-white/40 blur-sm" />
              <div className="s__line absolute inset-0 bg-gradient-to-b from-white via-white/90 to-transparent" />
              
              {/* Destello brillante en la cabeza del cometa */}
              <div className="s__sparkle absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2">
                {/* Núcleo blanco brillante */}
                <div className="absolute inset-0 bg-white rounded-full" />
                {/* Contorno iluminado con blur */}
                <div className="absolute inset-0 bg-white rounded-full blur-[2px] scale-150" />
                {/* Halo exterior más amplio */}
                <div className="absolute inset-0 bg-amber-200 rounded-full blur-[4px] scale-[2.5] opacity-80" />
                {/* Resplandor suave exterior */}
                <div className="absolute inset-0 bg-amber-100 rounded-full blur-[6px] scale-[3.5] opacity-50" />
              </div>
            </div>
          ))}

          {/* Dots (fondo espacial) */}
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={`dt-${i}`}
              className={`dot dt-${i + 1} absolute w-[3px] h-[3px] rounded-full`}
            >
              <div className="absolute inset-0 bg-white/60" />
              <div className="absolute inset-0 bg-white/30 blur-[1px]" />
            </div>
          ))}
        </div>
      </div>
    </Button>
  );
}