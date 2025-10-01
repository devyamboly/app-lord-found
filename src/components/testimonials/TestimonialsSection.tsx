"use client";
import React from "react";
import TestimonialCarousel from "@/components/testimonials/TestimonialCarousel";

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header with enhanced styling */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-4 backdrop-blur-sm">
            <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
              Historias de Éxito
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Testimonios y <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500">Resultados</span>
          </h2>
          
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
            Conoce las historias reales de traders que han alcanzado sus objetivos con nosotros
          </p>
        </div>

        {/* Carousel personalizado con efecto de centro destacado */}
        <TestimonialCarousel />

        {/* Stats or trust indicators */}
        <div className="mt-16 pt-12 border-t border-amber-500/20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                $500K+
              </div>
              <div className="text-zinc-400 text-sm sm:text-base">
                Total en Payouts
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                1,000+
              </div>
              <div className="text-zinc-400 text-sm sm:text-base">
                Traders Satisfechos
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                95%
              </div>
              <div className="text-zinc-400 text-sm sm:text-base">
                Satisfacción
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}