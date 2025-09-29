"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SpaceBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const stars: HTMLDivElement[] = [];

    // Crear estrellas
    for (let i = 0; i < 150; i++) {
      const star = document.createElement("div");
      star.className = "star absolute w-1 h-1 bg-white rounded-full";

      // Posición aleatoria
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;

      // Tamaño aleatorio
      const size = Math.random() * 3 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      // Opacidad inicial aleatoria
      star.style.opacity = `${Math.random() * 0.8 + 0.2}`;

      container.appendChild(star);
      stars.push(star);
    }

    // Animación de parpadeo
    stars.forEach((star, index) => {
      const delay = Math.random() * 5;
      const duration = Math.random() * 3 + 2;

      gsap.fromTo(
        star,
        {
          opacity: Math.random() * 0.5 + 0.3,
        },
        {
          opacity: Math.random() * 0.8 + 0.2,
          duration: duration,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: delay,
        }
      );

      // Movimiento sutil para algunas estrellas (crear sensación de profundidad)
      if (Math.random() > 0.7) {
        gsap.to(star, {
          x: `random(-2, 2)`,
          y: `random(-2, 2)`,
          duration: Math.random() * 10 + 5,
          repeat: -1,
          yoyo: true,
          ease: "none",
        });
      }
    });

    // Crear nebulosas sutiles
    for (let i = 0; i < 3; i++) {
      const nebula = document.createElement("div");
      nebula.className = "nebula absolute rounded-full opacity-10";

      const size = Math.random() * 300 + 200;
      nebula.style.width = `${size}px`;
      nebula.style.height = `${size}px`;

      nebula.style.left = `${Math.random() * 100}%`;
      nebula.style.top = `${Math.random() * 100}%`;

      const colors = [
        "radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(147, 51, 234, 0) 70%)",
        "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0) 70%)",
        "radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(168, 85, 247, 0) 70%)",
      ];

      nebula.style.background = colors[i % colors.length];

      container.appendChild(nebula);

      // Animación de pulso suave
      gsap.to(nebula, {
        scale: 1.1,
        opacity: 0.15,
        duration: Math.random() * 8 + 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 5,
      });
    }

    // Cleanup
    return () => {
      stars.forEach((star) => {
        gsap.killTweensOf(star);
        if (star.parentNode) {
          star.parentNode.removeChild(star);
        }
      });

      const nebulas = container.querySelectorAll(".nebula");
      nebulas.forEach((nebula) => {
        gsap.killTweensOf(nebula);
        if (nebula.parentNode) {
          nebula.parentNode.removeChild(nebula);
        }
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background: `
          radial-gradient(ellipse at center, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 1) 100%),
          linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)
        `,
      }}
    />
  );
}
