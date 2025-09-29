

import { PRODUCTS, PlanType } from '@/mocks/products';

export default function PricingTable({ selectedPlan }: { selectedPlan: string }) {

    const currentPlan = PRODUCTS[selectedPlan as PlanType];
    
    if (!currentPlan) return null;
    
    const plans = currentPlan.sizes;
    const features = currentPlan.features;
  
    return (

      <div className="overflow-x-auto mx-auto inset-shadow-2xs shadow-amber-100 w-[85%]">
        <div className="min-w-[900px] border-2 border-amber-500/30 rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900/95 to-black/95 backdrop-blur-sm">
          {/* Header Row */}
          <div className="grid grid-cols-6 border-b border-amber-500/30">
            <div className="col-span-1 p-4 sm:p-6 border-r border-amber-500/30 bg-black/50">
              <h3 className="text-white text-base sm:text-lg font-bold">Tamaño de la cuenta</h3>
            </div>
            {plans.map((plan, idx) => (
              <div key={idx} className="p-3 sm:p-4 flex flex-col items-center justify-center border-r last:border-r-0 border-amber-500/30 bg-black/30">
                <h2 className="text-white text-2xl sm:text-3xl font-extrabold mb-2">{plan.size}</h2>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/30 text-sm sm:text-base">
                  Get Plan
                </button>
                <p className="text-white/70 text-xs sm:text-sm mt-2">
                  Fee: <span className="text-amber-400 font-semibold">{plan.fee}</span>
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
    );
  }
  