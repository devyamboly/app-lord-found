"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "./TestimonialCard";
import { TESTIMONIALS } from "@/mocks/testimonials";

// Importar CSS de slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Componente de flecha personalizada - Izquierda
const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="group absolute -left-8 sm:-left-10 lg:-left-12 top-1/2 -translate-y-1/2 z-[30] flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center transition-all duration-300 hover:scale-110 hover:text-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
    aria-label="Testimonio anterior"
  >
    <ChevronLeft className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-amber-300 transition-all duration-300 group-hover:text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.9)]" />
  </button>
);

// Componente de flecha personalizada - Derecha
const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="group absolute -right-8 sm:-right-10 lg:-right-12 top-1/2 -translate-y-1/2 z-[30] flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center transition-all duration-300 hover:scale-110 hover:text-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
    aria-label="Siguiente testimonio"
  >
    <ChevronRight className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-amber-300 transition-all duration-300 group-hover:text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.9)]" />
  </button>
);

export default function TestimonialCarousel() {
  const sliderRef = useRef<Slider>(null);

  // Configuración para desktop - carousel normal con cards más grandes y pegados
  const desktopSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: false,
    swipeToSlide: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    dotsClass: "slick-dots !bottom-[-50px]",
    customPaging: () => (
      <div className="w-2 h-2 rounded-full bg-amber-500/30 hover:bg-amber-500/60 transition-all duration-300" />
    ),
  };

  // Configuración para móvil - muestra 1 con peek pequeño
  const mobileSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    cssEase: "ease-in-out",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "30px", // Pequeño peek del siguiente card
    swipeToSlide: true,
    arrows: false, // Sin flechas en móvil para no obstruir
    dotsClass: "slick-dots !bottom-[-40px]",
    customPaging: () => (
      <div className="w-2 h-2 rounded-full bg-amber-500/30 hover:bg-amber-500/60 transition-all duration-300" />
    ),
  };

  return (
    <div className="w-full">
      {/* Carousel para Desktop (sm y mayores) */}
      <div className="hidden sm:block relative pb-16">
        <style jsx global>{`
          .testimonial-carousel .slick-slide {
            transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), 
                        opacity 0.5s ease;
          }
          
          .testimonial-carousel .slick-slide > div {
            padding: 0 6px;
          }
          
          .testimonial-carousel .slick-dots li button:before {
            content: '';
          }
          
          .testimonial-carousel .slick-dots li.slick-active div {
            background: rgb(251 191 36);
            width: 24px;
            border-radius: 4px;
          }
          
          /* Hacer los cards más grandes */
          .testimonial-carousel .slick-track {
            display: flex !important;
            gap: 0;
          }
        `}</style>
        
        {/* Contenedor para Desktop - Sin peek, solo botones */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8">
          <div className="relative py-3 sm:py-4">
            <div className="relative overflow-hidden px-2 sm:px-4 md:px-10">
              <div className="testimonial-carousel relative">
                <Slider ref={sliderRef} {...desktopSettings}>
                  {TESTIMONIALS.map((testimonial, idx) => (
                    <div key={idx} className="testimonial-slide">
                      <TestimonialCard
                        name={testimonial.name}
                        payout={testimonial.payout}
                        quote={testimonial.quote}
                        imageSrc={testimonial.imageSrc}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel para Móvil - Con peek y blur para mostrar continuación */}
      <div className="sm:hidden relative pb-14">
        <style jsx global>{`
          .testimonial-carousel-mobile {
            position: relative;
          }
          
          .testimonial-carousel-mobile .slick-slide {
            transition: all 0.4s ease;
          }
          
          .testimonial-carousel-mobile .slick-slide > div {
            padding: 0 4px;
          }
          
          .testimonial-carousel-mobile .slick-dots li button:before {
            content: '';
          }
          
          .testimonial-carousel-mobile .slick-dots li.slick-active div {
            background: rgb(251 191 36);
            width: 20px;
            border-radius: 4px;
          }
        `}</style>
        
        {/* Contenedor para móvil con peek effect */}
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <div className="relative py-3 sm:py-4">
            <div className="relative overflow-hidden px-1 sm:px-2">
              {/* Gradiente blur izquierdo - móvil */}
              <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-8 backdrop-blur-[1px] bg-gradient-to-r  to-transparent z-[15] pointer-events-none" />
              
              {/* Gradiente blur derecho - móvil */}
              <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-8 backdrop-blur-[1px] bg-gradient-to-l to-transparent z-[15] pointer-events-none" />
              
              <div className="testimonial-carousel-mobile relative z-0">
                <Slider {...mobileSettings}>
                  {TESTIMONIALS.map((testimonial, idx) => (
                    <div key={idx}>
                      <TestimonialCard
                        name={testimonial.name}
                        payout={testimonial.payout}
                        quote={testimonial.quote}
                        imageSrc={testimonial.imageSrc}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

