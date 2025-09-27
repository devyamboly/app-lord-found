"use client";
import React from "react";
import Carousel from "@/components/common/Carousel";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import { TESTIMONIALS } from "@/mocks/testimonials";

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-8 sm:mb-10">
          Testimonios y <span className="text-amber-500">Resultados</span>
        </h2>

        {/* Lista apilada en mobile */}
        <div className="sm:hidden">
          <div className="grid grid-cols-1 gap-4">
            {TESTIMONIALS.map((t, idx) => (
              <TestimonialCard key={idx} name={t.name} payout={t.payout} quote={t.quote} imageSrc={(t as any).imageSrc} />
            ))}
          </div>
        </div>

        {/* Carrusel en sm y mayores */}
        <div className="hidden sm:block">
          <Carousel
            slidesToShow={3}
            slidesToScroll={1}
            infinite={true}
            autoplay={true}
            autoplaySpeed={5000}
            dots={true}
            customArrows={true}
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
              { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            ]}
          >
            {TESTIMONIALS.map((t, idx) => (
              <TestimonialCard key={idx} name={t.name} payout={t.payout} quote={t.quote} imageSrc={(t as any).imageSrc} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}