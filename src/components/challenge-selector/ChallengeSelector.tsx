
'use client';
import { useState } from 'react';
import PricingTable from './PricingTable';
import PlanSelectionHint from './PlanSelectionHint';
import PlanPhaseInfo from './PlanPhaseInfo';


export default function ChallengeSelector(){
  const [expandedLetter, setExpandedLetter] = useState<string | null>("L");

  const letters = [
    { letter: 'L', word: 'LEGACY', color: 'bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600' },
    { letter: 'O', word: 'ONE', color: 'bg-gradient-to-br from-orange-500 via-orange-600 to-red-500' },
    { letter: 'R', word: 'ROYAL', color: 'bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-500' },
    { letter: 'D', word: 'DYNAMIC', color: 'bg-gradient-to-br from-amber-600 via-yellow-600 to-amber-700' }
  ];

  const handleLetterClick = (letter: string) => {
    setExpandedLetter(expandedLetter === letter ? null : letter);
  };

  return(
    <section id='planes' className="py-6 sm:py-10 px-4">
      <h2 className="text-white text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-6 sm:mb-8">
        ELIGE EL MEJOR <span className="text-amber-500 font-bold">PLAN</span>
      </h2>
      
      <div className="mx-auto flex w-full max-w-[95%] flex-col gap-6 lg:max-w-[74.5rem] lg:flex-row lg:items-center lg:justify-between">
        <PlanSelectionHint />

  <div className="mx-auto font-bold flex flex-col md:flex-row md:flex-wrap justify-center items-stretch gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 py-4 sm:py-6 border-2 rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] border-black/50 backdrop-blur-sm bg-black/50 w-full md:w-fit max-w-full text-left md:text-center">
          {letters.map(({ letter, word, color }, index) => (
            <div
              key={letter}
              onClick={() => handleLetterClick(letter)}
              className={`
              relative cursor-pointer rounded-full transition-all duration-500 ease-in-out w-full md:w-auto min-w-0 ${expandedLetter === letter ? `px-8 py-4 sm:px-10 sm:py-4 md:px-8 lg:px-10 md:py-4 ${color} text-white shadow-2xl shadow-amber-500/40 scale-105 sm:scale-110 ring-2 ring-white/30` : 'px-8 py-4 sm:px-10 sm:py-4 md:px-0 md:py-0 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-black/80 text-amber-400 hover:bg-black/90 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20 border border-slate-600/50'} transform hover:-rotate-2 active:scale-95 `}
              style={{
                transitionDelay: `${index * 50}ms`
              }}
            >
              <div className="relative overflow-hidden flex items-center justify-start md:justify-center w-full h-full min-w-0">
                <h3
                  className={`font-extrabold text-xl sm:text-2xl md:text-3xl transition-all duration-500 ${expandedLetter === letter ? 'hidden md:hidden' : 'hidden md:block'} `}
                  style={{ fontFamily: '"Times New Roman", serif' }}
                >
                  {letter}
                </h3>

                <h3
                  className={`font-extrabold text-[clamp(1.75rem,7vw,2.25rem)] sm:text-3xl md:text-xl lg:text-2xl whitespace-nowrap leading-none text-white transition-all duration-500 tracking-wide sm:tracking-widest ${expandedLetter === letter ? 'block md:block' : 'block md:hidden'} flex items-baseline gap-1`}
                  style={{ fontFamily: '"Times New Roman", serif' }}
                >
                  <span className="text-white text-[clamp(2rem,9vw,2.5rem)] sm:text-4xl md:text-2xl lg:text-3xl md:pl-0 pl-4 [text-shadow:0_0_12px_rgba(255,255,255,0.7)]">
                    {word.slice(0, 1)}
                  </span>
                  {/* Mobile: allow custom text for R => ROYAL DIRECT; Desktop: keep original */}
                  <span className="md:hidden">
                    {letter === 'R' ? `${word.slice(1)} DIRECT` : word.slice(1)}
                  </span>
                  <span className="hidden md:inline">
                    {word.slice(1)}
                  </span>
                </h3>
              </div>

              {expandedLetter === letter && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 via-white/30 to-white/20 animate-pulse" />
              )}
            </div>
          ))}
        </div>

        <div className="hidden w-full max-w-sm lg:block">
          <PlanPhaseInfo selectedPlan={expandedLetter} />
        </div>
      </div>

      <div className="lg:hidden mt-6">
        <PlanPhaseInfo selectedPlan={expandedLetter} />
      </div>

      {expandedLetter && (
        <div className="mt-10 sm:mt-16 px-2 sm:px-4 animate-fade-in">
          <PricingTable selectedPlan={expandedLetter} />
        </div>
      )}
    </section>
  );
}

