


export default function PricingTable({ selectedPlan }: { selectedPlan: string }) {
    const plans = [
      { size: '$6k', fee: '$59.99', reward: '$117', maxLoss: '10% ($600)', dailyLoss: '5% ($300)', refund: '$59.99' },
      { size: '$15k', fee: '$119.99', reward: '$292.50', maxLoss: '10% ($1,500)', dailyLoss: '5% ($750)', refund: '$119.99' },
      { size: '$25k', fee: '$199.99', reward: '$487.50', maxLoss: '10% ($2,500)', dailyLoss: '5% ($1,250)', refund: '$199.99' },
      { size: '$50k', fee: '$299.99', reward: '$975', maxLoss: '10% ($5,000)', dailyLoss: '5% ($2,500)', refund: '$299.99' },
      { size: '$100k', fee: '$549.99', reward: '$1,950', maxLoss: '10% ($10,000)', dailyLoss: '5% ($5,000)', refund: '$549.99' },
      { size: '$200k', fee: '$1,099.99', reward: '$3,900', maxLoss: '10% ($20,000)', dailyLoss: '5% ($10,000)', refund: '$1,099.99' }
    ];
  
    const features = [
      { label: '15% Performance Reward', subtitle: 'From Challenge Phase', type: 'header' },
      { label: 'Objetivo de beneficios de la Fase 1', values: ['8%', '8%', '8%', '8%', '8%', '8%'] },
      { label: 'Fase 2 Objetivo de beneficios', values: ['5%', '5%', '5%', '5%', '5%', '5%'] },
      { label: 'Límite máximo de pérdidas', key: 'maxLoss' },
      { label: 'Límite de pérdidas diarias', key: 'dailyLoss' },
      { label: 'Trading de noticias', values: ['✓', '✓', '✓', '✓', '✓', '✓'] },
      { label: 'Recompensa por rendimiento Hasta', values: ['95%', '95%', '95%', '95%', '95%', '95%'] },
      { label: 'Días mínimos de negociación', values: ['5 Days', '5 Days', '5 Days', '5 Days', '5 Days', '5 Days'] },
      { label: 'Primera retirada', values: ['21 Days', '21 Days', '21 Days', '21 Days', '21 Days', '21 Days'] },
      { label: 'Refundable Fee', subtitle: 'We refund the full price', key: 'refund' }
    ];
  
    return (

      <div className="overflow-x-auto mx-auto inset-shadow-2xs shadow-amber-100 w-[85%]">
        <div className="min-w-[900px] border-2 border-amber-500/30 rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900/95 to-black/95 backdrop-blur-sm">
          {/* Header Row */}
          <div className="grid grid-cols-7 border-b border-amber-500/30">
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
              className={`grid grid-cols-7 border-b last:border-b-0 border-amber-500/20 hover:bg-amber-500/5 transition-colors ${
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
                if (feature.key === 'maxLoss') value = plan.maxLoss;
                else if (feature.key === 'dailyLoss') value = plan.dailyLoss;
                else if (feature.key === 'refund') value = plan.refund;
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
  