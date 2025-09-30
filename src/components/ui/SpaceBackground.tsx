"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function KingdomBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const goldenParticles: HTMLDivElement[] = [];
    const kingdomElements: HTMLDivElement[] = [];
    const lightRays: HTMLDivElement[] = [];
    const mists: HTMLDivElement[] = [];

    // Estado del scroll para parallax
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    // Crear partículas doradas brillantes
    for (let i = 0; i < 60; i++) {
      const particle = document.createElement("div");
      particle.className = "golden-particle absolute rounded-full";

      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;

      const size = Math.random() * 6 + 3;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      const goldenColors = [
        "#fbbf24", "#f59e0b", "#d97706",
        "#ffd700", "#ffed4e", "#ff6b35"
      ];

      const particleColor = goldenColors[Math.floor(Math.random() * goldenColors.length)];
      particle.style.backgroundColor = particleColor;
      particle.style.boxShadow = `0 0 ${size * 3}px ${particleColor}, 0 0 ${size * 6}px rgba(251, 191, 36, 0.3)`;

      container.appendChild(particle);
      goldenParticles.push(particle);
    }

    // Animación de partículas doradas con parallax
    goldenParticles.forEach((particle, index) => {
      const delay = Math.random() * 5;
      const duration = Math.random() * 4 + 3;
      const parallaxMultiplier = 0.2 + (Math.random() * 0.3);

      gsap.to(particle, {
        y: () => `calc(random(-30, 30) + ${scrollY * parallaxMultiplier}px)`,
        x: `random(-20, 20)`,
        rotation: `random(-180, 180)`,
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: delay,
      });

      gsap.fromTo(particle, {
        opacity: 0.4,
        scale: 0.8,
      }, {
        opacity: 1,
        scale: 1.2,
        duration: duration * 0.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: delay + 1,
      });

      const updateParallax = () => {
        const currentScrollY = window.scrollY;
        const yOffset = currentScrollY * parallaxMultiplier;
        gsap.set(particle, { y: yOffset });
      };

      window.addEventListener('scroll', updateParallax);
    });

    // Crear elementos del reino con temática específica
    const kingdomElementsData = [
      { emoji: "👑", size: "text-2xl", weight: 3 },
      { emoji: "🪙", size: "text-xl", weight: 4 },
      { emoji: "💰", size: "text-xl", weight: 3 },
      { emoji: "💎", size: "text-lg", weight: 2 },
      { emoji: "🏆", size: "text-lg", weight: 2 },
      { emoji: "⚔️", size: "text-lg", weight: 1 },
      { emoji: "🛡️", size: "text-lg", weight: 1 },
      { emoji: "✨", size: "text-base", weight: 2 },
    ];

    for (let i = 0; i < 25; i++) {
      const element = document.createElement("div");
      element.className = "kingdom-element absolute opacity-40";

      const random = Math.random();
      let selectedElement = kingdomElementsData[0];
      let weightSum = 0;

      for (const elementData of kingdomElementsData) {
        weightSum += elementData.weight;
        if (random <= weightSum / 15) {
          selectedElement = elementData;
          break;
        }
      }

      element.textContent = selectedElement.emoji;
      element.classList.add(selectedElement.size);

      element.style.left = `${Math.random() * 100}%`;
      element.style.top = `${Math.random() * 100}%`;

      if (Math.random() > 0.5) {
        element.style.filter = "drop-shadow(0 0 8px #fbbf24)";
      }

      if (Math.random() > 0.7) {
        element.style.filter += " drop-shadow(0 0 15px rgba(251, 191, 36, 0.6))";
      }

      container.appendChild(element);
      kingdomElements.push(element);
    }

    // Animación de elementos del reino con parallax
    kingdomElements.forEach((element, index) => {
      const delay = Math.random() * 8;
      const duration = Math.random() * 12 + 8;
      const parallaxMultiplier = 0.3 + (Math.random() * 0.4);

      gsap.to(element, {
        y: () => `calc(random(-50, 50) + ${scrollY * parallaxMultiplier}px)`,
        x: `random(-40, 40)`,
        rotation: `random(-360, 360)`,
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: "none",
        delay: delay,
      });

      gsap.fromTo(element, {
        opacity: 0.2,
      }, {
        opacity: 0.5,
        duration: duration * 0.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: delay + 2,
      });

      const updateParallax = () => {
        const currentScrollY = window.scrollY;
        const yOffset = currentScrollY * parallaxMultiplier;
        gsap.set(element, { y: yOffset });
      };

      window.addEventListener('scroll', updateParallax);
    });

    // Crear rayos de luz dorados
    for (let i = 0; i < 3; i++) {
      const ray = document.createElement("div");
      ray.className = "light-ray absolute opacity-10";

      const size = Math.random() * 300 + 200;
      ray.style.width = `${size}px`;
      ray.style.height = `${size * 0.3}px`;

      ray.style.left = `${Math.random() * 100}%`;
      ray.style.top = `${Math.random() * 100}%`;

      ray.style.background = `
        linear-gradient(45deg,
          transparent 0%,
          rgba(251, 191, 36, 0.4) 20%,
          rgba(245, 158, 11, 0.6) 50%,
          rgba(251, 191, 36, 0.4) 80%,
          transparent 100%
        )
      `;

      ray.style.transform = `rotate(${Math.random() * 360}deg)`;
      ray.style.borderRadius = "50%";

      container.appendChild(ray);
      lightRays.push(ray);

      const parallaxMultiplier = 0.1 + (Math.random() * 0.2);

      gsap.to(ray, {
        rotation: 360,
        scale: 1.1,
        opacity: 0.15,
        duration: Math.random() * 15 + 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 5,
      });

      gsap.to(ray, {
        x: `random(-60, 60)`,
        y: () => `calc(random(-40, 40) + ${scrollY * parallaxMultiplier}px)`,
        duration: Math.random() * 20 + 15,
        repeat: -1,
        yoyo: true,
        ease: "none",
        delay: Math.random() * 8,
      });

      const updateParallax = () => {
        const currentScrollY = window.scrollY;
        const yOffset = currentScrollY * parallaxMultiplier;
        gsap.set(ray, { y: yOffset });
      };

      window.addEventListener('scroll', updateParallax);
    }

    // Crear niebla dorada sutil en el fondo
    for (let i = 0; i < 2; i++) {
      const mist = document.createElement("div");
      mist.className = "kingdom-mist absolute rounded-full opacity-8";

      const size = Math.random() * 500 + 400;
      mist.style.width = `${size}px`;
      mist.style.height = `${size}px`;

      mist.style.left = `${Math.random() * 100}%`;
      mist.style.top = `${Math.random() * 100}%`;

      mist.style.background = `
        radial-gradient(circle,
          rgba(251, 191, 36, 0.12) 0%,
          rgba(245, 158, 11, 0.08) 40%,
          rgba(217, 119, 6, 0.04) 70%,
          transparent 100%
        )
      `;

      container.appendChild(mist);
      mists.push(mist);

      const parallaxMultiplier = 0.05 + (Math.random() * 0.1);

      gsap.to(mist, {
        scale: 1.15,
        opacity: 0.12,
        duration: Math.random() * 18 + 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 6,
      });

      gsap.to(mist, {
        x: `random(-80, 80)`,
        y: () => `calc(random(-60, 60) + ${scrollY * parallaxMultiplier}px)`,
        duration: Math.random() * 25 + 20,
        repeat: -1,
        yoyo: true,
        ease: "none",
        delay: Math.random() * 10,
      });

      const updateParallax = () => {
        const currentScrollY = window.scrollY;
        const yOffset = currentScrollY * parallaxMultiplier;
        gsap.set(mist, { y: yOffset });
      };

      window.addEventListener('scroll', updateParallax);
    }

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);

      goldenParticles.forEach((particle) => {
        gsap.killTweensOf(particle);
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });

      kingdomElements.forEach((element) => {
        gsap.killTweensOf(element);
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });

      lightRays.forEach((ray) => {
        gsap.killTweensOf(ray);
        if (ray.parentNode) {
          ray.parentNode.removeChild(ray);
        }
      });

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
          radial-gradient(ellipse at 30% 70%, rgba(251, 191, 36, 0.15) 0%, transparent 40%),
          radial-gradient(ellipse at 70% 30%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
          linear-gradient(135deg,
            #000000 0%,
            #0a0a0a 30%,
            #1a1a1a 60%,
            #000000 100%
          ),
          radial-gradient(circle at 50% 50%,
            rgba(251, 191, 36, 0.03) 0%,
            rgba(0, 0, 0, 0.8) 70%,
            #000000 100%
          )
        `,
      }}
    />
  );
}
