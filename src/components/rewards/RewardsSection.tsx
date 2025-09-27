"use client";
import React from "react";
import Carousel from "@/components/common/Carousel";
import RewardChip from "@/components/rewards/RewardChip";

const REWARD_SETS: Array<[number, number]> = [
  [8978, 4758],
  [2412, 1336],
  [478, 1295],
];

export default function RewardsSection() {
  return (
    <section className="py-16 px-4 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Comienza hoy mismo.
            <br />
            No pongas en pausa tu <span className="text-amber-500">futuro.</span>
          </h2>
        </div>

        <div className="relative rounded-2xl border border-amber-500/30 bg-gradient-to-br from-zinc-900/60 to-zinc-900/30 p-5 sm:p-6 md:p-8">
          {/* Destello superior (simulación con gradiente) */}
          <div className="absolute left-0 right-0 top-0 h-1 sm:h-2 bg-gradient-to-r from-transparent via-amber-400/80 to-transparent blur-sm" />

          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-8 items-start md:items-center">
            {/* Izquierda: carrusel de chips */}
            <div className="w-full md:w-[380px]">
              <Carousel slidesToShow={1} slidesToScroll={1} autoplay={true} autoplaySpeed={5000} dots={false}>
                {REWARD_SETS.map(([a1, a2], idx) => (
                  <div key={idx} className="space-y-3 sm:space-y-4">
                    <RewardChip amount={a1} />
                    <RewardChip amount={a2} />
                  </div>
                ))}
              </Carousel>
            </div>

            {/* Derecha: texto fijo (debajo en mobile, al lado en md+) */}
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-semibold text-white">Retiro rápido</h3>
              <p className="text-zinc-300 text-sm sm:text-base max-w-prose">
                Procesamos tus pagos de forma ágil y segura para que disfrutes tus beneficios sin esperas innecesarias.
              </p>
            </div>
          </div>

          {/* Destello inferior (simulación con gradiente) */}
          <div className="absolute left-0 right-0 bottom-0 h-1 sm:h-2 bg-gradient-to-r from-transparent via-amber-400/80 to-transparent blur-sm" />
        </div>
      </div>
    </section>
  );
}