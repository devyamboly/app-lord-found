"use client";
import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Importar CSS de slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps {
  children: React.ReactNode;
  slidesToShow?: number;
  slidesToScroll?: number;
  infinite?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
  dots?: boolean;
  arrows?: boolean;
  customArrows?: boolean;
  responsive?: Array<{
    breakpoint: number;
    settings: {
      slidesToShow: number;
      slidesToScroll: number;
    };
  }>;
  className?: string;
}

// Componentes de flechas personalizadas
const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 transition-colors flex items-center justify-center"
  >
    <ChevronLeft className="w-5 h-5 text-amber-500" />
  </button>
);

const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 transition-colors flex items-center justify-center"
  >
    <ChevronRight className="w-5 h-5 text-amber-500" />
  </button>
);

export default function Carousel({
  children,
  slidesToShow = 3,
  slidesToScroll = 1,
  infinite = true,
  autoplay = false,
  autoplaySpeed = 3000,
  dots = false,
  arrows = true,
  customArrows = true,
  responsive,
  className,
}: CarouselProps) {
  const settings = {
    dots,
    infinite,
    speed: 500,
    cssEase: "linear",
    slidesToShow,
    slidesToScroll,
    autoplay,
    autoplaySpeed,
    arrows: arrows && !customArrows,
    prevArrow: customArrows ? <CustomPrevArrow /> : undefined,
    nextArrow: customArrows ? <CustomNextArrow /> : undefined,
    responsive: responsive || [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(2, slidesToShow),
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
    ],
  };

  return (
    <div className={cn("relative", className)}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}
