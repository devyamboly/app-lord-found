"use client";
import React from "react";
import BenefitsCarousel from "./BenefictsCarrousel";

export default function BenefitsSection() {
  return (
    <section id="beneficios" className=" py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 pl-[1.2rem] md:pl-0">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Beneficios
              <br className="hidden md:block"/>
              <span className="text-amber-500"> Clave</span>
            </h2>
            <div className="space-y-4 text-zinc-300">
              <p>
                En Lord Found no buscamos traders perfectos, buscamos traders
                consistentes
              </p>
              <p>
                Creemos en tu potencial y te damos las herramientas para crecer
              </p>
            </div>
          </div>

          {/* Right side - Carousel */}
          <div className="relative">
            <BenefitsCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
