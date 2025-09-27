"use client";
import React from "react";
import Carousel from "@/components/common/Carousel";
import { BENEFITS } from "@/mocks/benefits";
import { BenefitCard } from "@/components/Beneficts/BenefitCard";

export default function BenefitsCarousel() {
  return (
    <div className="w-full">
      {/* Lista apilada en mobile (sin carrusel) */}
      <div className="sm:hidden flex flex-col gap-4">
        {BENEFITS.map((benefit) => (
          <BenefitCard key={benefit.id} benefit={benefit} />
        ))}
      </div>

      {/* Carrusel sólo en sm y superiores */}
      <div className="hidden sm:block w-full overflow-hidden sm:overflow-visible">
        <Carousel
          slidesToShow={3}
          slidesToScroll={1}
          infinite={true}
          autoplay={true}
          autoplaySpeed={5000}
          dots={false}
          customArrows={true}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
          className="benefits-carousel"
        >
          {BENEFITS.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
