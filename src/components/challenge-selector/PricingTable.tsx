

'use client';
import { PRODUCTS, PlanType, AccountSize } from '@/mocks/products';
import { useState, useEffect } from 'react';

export default function PricingTable({ selectedPlan }: { selectedPlan: string }) {
    const currentPlan = PRODUCTS[selectedPlan as PlanType];
    
    if (!currentPlan) return null;
    
    const plans = currentPlan.sizes;
    const features = currentPlan.features;
    
    const [selectedSize, setSelectedSize] = useState<AccountSize>(plans[0]?.sizeValue || '5k');
    
    // Reset al primer tamaño cuando cambia el plan
    useEffect(() => {
      if (plans[0]?.sizeValue) {
        setSelectedSize(plans[0].sizeValue);
      }
    }, [selectedPlan, plans]);
    
    const filteredPlans = plans.filter(plan => plan.sizeValue === selectedSize);
    
    const sizes = plans.map(plan => ({
      value: plan.sizeValue,
      label: plan.size
    }));
  
    return (
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4">
        {/* Selector de tamaño de cuenta - Solo visible en móvil */}
        <div className="block lg:hidden mb-6">
          <h3 className="text-white text-base font-bold mb-4 text-center">
            Selecciona el tamaño de <span className="text-amber-500">cuenta</span>
          </h3>
          <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-3">
            <div className="flex flex-wrap justify-center gap-2">
              {sizes.map(({ value, label }) => (
                <button
                  key={value}
                  onClick={() => setSelectedSize(value)}
                  className={`
                    relative px-5 py-2.5 rounded-xl font-extrabold text-lg transition-all duration-300 min-w-[70px]
                    ${selectedSize === value
                      ? 'bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 text-white shadow-xl shadow-amber-500/50 scale-110 ring-2 ring-amber-400/50'
                      : 'bg-slate-800/90 text-amber-400/80 border border-slate-600/50 hover:bg-slate-700 hover:text-amber-400 hover:scale-105 hover:border-amber-500/30'
                    }
                  `}
                >
                  {selectedSize === value && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 via-white/10 to-transparent animate-pulse" />
                  )}
                  <span
                    className="relative"
                    style={{ fontFamily: '"Times New Roman", serif' }}
                  >
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto mx-auto inset-shadow-2xs shadow-amber-100 w-full lg:w-[95%]">
          {/* Tabla para móvil - Solo muestra el tamaño seleccionado */}
          <div className="lg:hidden border-2 border-amber-500/30 rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900/95 to-black/95 backdrop-blur-sm">
            {/* Header Row Mobile */}
            <div className="grid grid-cols-2 border-b border-amber-500/30">
              <div className="col-span-1 p-4 border-r border-amber-500/30 bg-black/50">
                <h3 className="text-white text-base font-bold">Características</h3>
              </div>
              {filteredPlans.map((plan) => (
                <div key={plan.sizeValue} className="p-4 flex flex-col items-center justify-center bg-black/30">
                  <h2 className="text-white text-3xl font-extrabold mb-2" style={{ fontFamily: '"Times New Roman", serif' }}>{plan.size}</h2>
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/30 text-sm">
                    Get Plan
                  </button>
                  <p className="text-white/70 text-xs mt-2">
                    Fee: <span className="text-amber-400 font-semibold" style={{ fontFamily: '"Times New Roman", serif' }}>{plan.fee}</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Feature Rows Mobile */}
            {features.map((feature, featureIdx) => (
              <div 
                key={featureIdx} 
                className={`grid grid-cols-2 border-b last:border-b-0 border-amber-500/20 hover:bg-amber-500/5 transition-colors ${
                  feature.type === 'header' ? 'bg-amber-500/10' : ''
                }`}
              >
                {/* Feature Label */}
                <div className="col-span-1 p-3 border-r border-amber-500/30 flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">{feature.label}</p>
                    {feature.subtitle && (
                      <p className="text-white/50 text-[10px] mt-0.5">{feature.subtitle}</p>
                    )}
                  </div>
                </div>

                {/* Feature Values Mobile */}
                {filteredPlans.map((plan) => {
                  const planIdx = plans.findIndex(p => p.sizeValue === plan.sizeValue);
                  let value;
                  const key = feature.key;
                  if (key === 'maxLoss') value = plan.maxLoss;
                  else if (key === 'dailyLoss') value = plan.dailyLoss;
                  else if (key === 'refund') value = plan.refund;
                  else if (key === 'profitPhase1') value = plan.profitPhase1;
                  else if (key === 'profitPhase2') value = plan.profitPhase2;
                  else if (feature.type === 'header') value = plan.reward;
                  else value = feature.values?.[planIdx];

                  return (
                    <div 
                      key={plan.sizeValue} 
                      className="p-3 flex items-center justify-center text-center"
                    >
                      {value === '✓' ? (
                        <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                      ) : (
                        <span className={`text-xs font-semibold ${
                          feature.type === 'header' ? 'text-amber-400 text-base' : 'text-white'
                        }`}>
                          {value}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Tabla para Desktop - Muestra todos los tamaños */}
          <div className="hidden lg:block min-w-[900px] border-2 border-amber-500/30 rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900/95 to-black/95 backdrop-blur-sm">
            {/* Header Row Desktop */}
            <div className="grid grid-cols-6 border-b border-amber-500/30">
            <div className="col-span-1 p-4 sm:p-6 border-r border-amber-500/30 bg-black/50">
              <h3 className="text-white text-base sm:text-lg font-bold">Tamaño de la cuenta</h3>
            </div>
            {plans.map((plan, idx) => (
              <div key={idx} className="p-3 sm:p-4 flex flex-col items-center justify-center border-r last:border-r-0 border-amber-500/30 bg-black/30">
                <h2 className="text-white text-2xl sm:text-3xl font-extrabold mb-2" style={{ fontFamily: '"Times New Roman", serif' }}>{plan.size}</h2>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/30 text-sm sm:text-base">
                  Get Plan
                </button>
                <p className="text-white/70 text-xs sm:text-sm mt-2">
                  Fee: <span className="text-amber-400 font-semibold" style={{ fontFamily: '"Times New Roman", serif' }}>{plan.fee}</span>
                </p>
              </div>
            ))}
          </div>
  
          {/* Feature Rows */}
          {features.map((feature, featureIdx) => (
            <div 
              key={featureIdx} 
              className={`grid grid-cols-6 border-b last:border-b-0 border-amber-500/20 hover:bg-amber-500/5 transition-colors ${
                feature.type === 'header' ? 'bg-amber-500/10' : ''
              }`}
            >
              {/* Feature Label */}
              <div className="col-span-1 p-3 sm:p-4 border-r border-amber-500/30 flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                </div>
                <div>
                  <p className="text-white text-xs sm:text-sm font-semibold">{feature.label}</p>
                  {feature.subtitle && (
                    <p className="text-white/50 text-[10px] sm:text-xs mt-0.5">{feature.subtitle}</p>
                  )}
                </div>
              </div>
  
              {/* Feature Values */}
              {plans.map((plan, planIdx) => {
                let value;
                const key = feature.key;
                if (key === 'maxLoss') value = plan.maxLoss;
                else if (key === 'dailyLoss') value = plan.dailyLoss;
                else if (key === 'refund') value = plan.refund;
                else if (key === 'profitPhase1') value = plan.profitPhase1;
                else if (key === 'profitPhase2') value = plan.profitPhase2;
                else if (feature.type === 'header') value = plan.reward;
                else value = feature.values?.[planIdx];

                return (
                  <div 
                    key={planIdx} 
                    className="p-3 sm:p-4 flex items-center justify-center border-r last:border-r-0 border-amber-500/30 text-center"
                  >
                    {value === '✓' ? (
                      <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                    ) : (
                      <span className={`text-xs sm:text-sm font-semibold ${
                        feature.type === 'header' ? 'text-amber-400 text-base sm:text-lg' : 'text-white'
                      }`}>
                        {value}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
          </div>
        </div>
      </div>
    );
  }
  