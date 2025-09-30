"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function KingdomBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const magicParticles: HTMLDivElement[] = [];
    const floatingElements: HTMLDivElement[] = [];

    // Crear partículas mágicas (como polvo de hadas o chispas)
    for (let i = 0; i < 80; i++) {
      const particle = document.createElement("div");
      particle.className = "magic-particle absolute rounded-full";

      // Posición aleatoria
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;

      // Tamaño pequeño
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Colores mágicos (dorado, plateado, azulado)
      const colors = [
        "#fbbf24", // dorado
        "#e5e7eb", // plateado
        "#3b82f6", // azul mágico
        "#8b5cf6", // púrpura
        "#f59e0b", // ámbar
      ];
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.boxShadow = `0 0 ${size * 2}px ${colors[Math.floor(Math.random() * colors.length)]}`;

      container.appendChild(particle);
      magicParticles.push(particle);
    }

    // Animación de partículas mágicas
    magicParticles.forEach((particle, index) => {
      const delay = Math.random() * 8;
      const duration = Math.random() * 6 + 4;

      // Movimiento flotante
      gsap.to(particle, {
        y: `random(-20, 20)`,
        x: `random(-15, 15)`,
        rotation: 360,
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: delay,
      });

      // Cambio de opacidad para efecto de brillo
      gsap.fromTo(
        particle,
        {
          opacity: 0.3,
        },
        {
          opacity: 0.9,
          duration: duration * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: delay + 2,
        }
      );
    });

    // Crear elementos flotantes (escudos, coronas, pergaminos)
    const elementTypes = ["🛡️", "👑", "📜", "⚔️", "🏰"];
    for (let i = 0; i < 12; i++) {
      const element = document.createElement("div");
      element.className = "floating-element absolute text-2xl opacity-20";

      element.textContent = elementTypes[Math.floor(Math.random() * elementTypes.length)];

      element.style.left = `${Math.random() * 100}%`;
      element.style.top = `${Math.random() * 100}%`;

      container.appendChild(element);
      floatingElements.push(element);
    }

    // Animación de elementos flotantes
    floatingElements.forEach((element, index) => {
      const delay = Math.random() * 10;
      const duration = Math.random() * 15 + 10;

      // Movimiento lento y majestuoso
      gsap.to(element, {
        y: `random(-40, 40)`,
        x: `random(-30, 30)`,
        rotation: `random(-180, 180)`,
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: "none",
        delay: delay,
      });

      // Cambio sutil de opacidad
      gsap.fromTo(
        element,
        {
          opacity: 0.1,
        },
        {
          opacity: 0.3,
          duration: duration * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: delay + 3,
        }
      );
    });

    // Crear niebla mágica sutil
    for (let i = 0; i < 2; i++) {
      const mist = document.createElement("div");
      mist.className = "kingdom-mist absolute rounded-full opacity-5";

      const size = Math.random() * 400 + 300;
      mist.style.width = `${size}px`;
      mist.style.height = `${size}px`;

      mist.style.left = `${Math.random() * 100}%`;
      mist.style.top = `${Math.random() * 100}%`;

      // Gradiente de niebla mágica
      mist.style.background = `
        radial-gradient(circle,
          rgba(251, 191, 36, 0.15) 0%,
          rgba(245, 158, 11, 0.1) 30%,
          rgba(217, 119, 6, 0.05) 60%,
          transparent 70%
        )
      `;

      container.appendChild(mist);

      // Animación de pulso suave y movimiento
      gsap.to(mist, {
        scale: 1.2,
        opacity: 0.08,
        duration: Math.random() * 12 + 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 5,
      });

      gsap.to(mist, {
        x: `random(-50, 50)`,
        y: `random(-30, 30)`,
        duration: Math.random() * 20 + 15,
        repeat: -1,
        yoyo: true,
        ease: "none",
        delay: Math.random() * 8,
      });
    }

    // Cleanup
    return () => {
      magicParticles.forEach((particle) => {
        gsap.killTweensOf(particle);
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });

      floatingElements.forEach((element) => {
        gsap.killTweensOf(element);
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });

      const mists = container.querySelectorAll(".kingdom-mist");
      mists.forEach((mist) => {
        gsap.killTweensOf(mist);
        if (mist.parentNode) {
          mist.parentNode.removeChild(mist);
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
          radial-gradient(ellipse at 20% 80%, rgba(120, 53, 15, 0.3) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 20%, rgba(217, 119, 6, 0.2) 0%, transparent 50%),
          linear-gradient(135deg,
            rgba(31, 41, 55, 0.95) 0%,
            rgba(75, 85, 99, 0.9) 30%,
            rgba(107, 114, 128, 0.85) 60%,
            rgba(156, 163, 175, 0.8) 100%
          ),
          conic-gradient(from 45deg at 50% 50%,
            #1f2937 0deg,
            #374151 90deg,
            #4b5563 180deg,
            #6b7280 270deg,
            #1f2937 360deg
          )
        `,
      }}
    />
  );
}
