
'use client';
import { useState } from 'react';
import PricingTable from './PricingTable';


export default function ChallengeSelector(){
  const [expandedLetter, setExpandedLetter] = useState<string | null>(null);

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
    <section className="py-6 sm:py-10 px-4">
      <h2 className="text-white text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-6 sm:mb-8">
        ELIGE EL MEJOR <span className="text-amber-500 font-bold">PLAN</span>
      </h2>
      
      <div className="mx-auto text-center font-bold flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6 px-4 sm:px-6 md:px-8 py-4 sm:py-6 border-2 rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] border-slate-600/50 backdrop-blur-sm bg-slate-900/20 w-fit max-w-[95%] md:max-w-[90%] lg:max-w-[70%]">
        {letters.map(({ letter, word, color }, index) => (

          <div key={letter} onClick={() => handleLetterClick(letter)}
              className={`
              relative cursor-pointer rounded-full transition-all duration-500 ease-in-out px-4 py-3 sm:px-5 sm:py-3 md:px-6 md:py-4 ${expandedLetter === letter ? `${color} text-white shadow-2xl shadow-amber-500/40 scale-105 sm:scale-110 md:px-8 lg:px-10 ring-2 ring-white/30` : 'bg-slate-800/80 text-amber-400 hover:bg-slate-700/90 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20 border border-slate-600/50'} transform hover:-rotate-2 active:scale-95 `}
            style={{
              transitionDelay: `${index * 50}ms`
            }}
          >
            <div className="relative overflow-hidden flex items-center justify-center min-h-[2rem] sm:min-h-[2.5rem]">
              {/* Letra inicial */}
              <h3 className={`font-extrabold text-xl sm:text-2xl md:text-3xl transition-all duration-500 ${expandedLetter === letter ? 'opacity-0 absolute scale-0' : 'opacity-100 scale-100'}`}>
                {letter}
              </h3>
              
              {/* Palabra completa */}
              <h3 className={`font-extrabold text-base sm:text-lg md:text-xl lg:text-2xl whitespace-nowrap transition-all duration-500 ${expandedLetter === letter ? 'opacity-100 scale-100 translate-x-0':'opacity-0 scale-50 absolute translate-x-4'}`}>
                {word}
              </h3>
            </div>

            {/* Efecto de brillo al expandir */}
            {expandedLetter === letter && (
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 via-white/30 to-white/20 animate-pulse" />
            )}
          </div>
        ))}
      </div>

      {/* Pricing Table */}
      {expandedLetter && (
        <div className="mt-10 sm:mt-16 px-2 sm:px-4 animate-fade-in">
          <PricingTable selectedPlan={expandedLetter} />
        </div>
      )}
    </section>
  );
}

