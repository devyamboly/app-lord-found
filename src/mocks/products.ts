export type PlanType = 'L' | 'O' | 'R' | 'D';
export type AccountSize = '5k' | '10k' | '25k' | '50k' | '100k';

export interface PlanFeature {
  label: string;
  subtitle?: string;
  type?: 'header';
  key?: 'maxLoss' | 'dailyLoss' | 'refund' | 'reward' | 'profitPhase1' | 'profitPhase2';
  values?: string[];
}

export interface PlanSize {
  size: string;
  sizeValue: AccountSize;
  fee: string;
  reward: string;
  maxLoss: string;
  dailyLoss: string;
  refund: string;
  profitPhase1?: string;
  profitPhase2?: string;
}

export interface ProductPlan {
  id: PlanType;
  name: string;
  description: string;
  color: string;
  sizes: PlanSize[];
  features: PlanFeature[];
}

export const PRODUCTS: Record<PlanType, ProductPlan> = {
  L: {
    id: 'L',
    name: 'LEGACY',
    description: '2 Fases Challenge - Plan Clásico',
    color: 'bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600',
    sizes: [
      { 
        size: '$5k', 
        sizeValue: '5k',
        fee: '$39', 
        reward: '$117', 
        maxLoss: '10% ($500)', 
        dailyLoss: '5% ($250)', 
        refund: '$39',
        profitPhase1: '8%',
        profitPhase2: '5%'
      },
      { 
        size: '$10k', 
        sizeValue: '10k',
        fee: '$79', 
        reward: '$292.50', 
        maxLoss: '10% ($1,000)', 
        dailyLoss: '5% ($500)', 
        refund: '$79',
        profitPhase1: '8%',
        profitPhase2: '5%'
      },
      { 
        size: '$25k', 
        sizeValue: '25k',
        fee: '$179', 
        reward: '$487.50', 
        maxLoss: '10% ($2,500)', 
        dailyLoss: '5% ($1,250)', 
        refund: '$179',
        profitPhase1: '8%',
        profitPhase2: '5%'
      },
      { 
        size: '$50k', 
        sizeValue: '50k',
        fee: '$319', 
        reward: '$975', 
        maxLoss: '10% ($5,000)', 
        dailyLoss: '5% ($2,500)', 
        refund: '$319',
        profitPhase1: '8%',
        profitPhase2: '5%'
      },
      { 
        size: '$100k', 
        sizeValue: '100k',
        fee: '$589', 
        reward: '$1,950', 
        maxLoss: '10% ($10,000)', 
        dailyLoss: '5% ($5,000)', 
        refund: '$589',
        profitPhase1: '8%',
        profitPhase2: '5%'
      }
    ],
    features: [
      { label: '15% Performance Reward', type: 'header' },
      { label: 'Fase 1 Objetivo de beneficios', key: 'profitPhase1' as any, values: ['8%', '8%', '8%', '8%', '8%'] },
      { label: 'Fase 2 Objetivo de beneficios', key: 'profitPhase2' as any, values: ['5%', '5%', '5%', '5%', '5%'] },
      { label: 'Límite máximo de pérdidas', key: 'maxLoss' },
      { label: 'Límite de pérdidas diarias', key: 'dailyLoss' },
      { label: 'Días mínimos de negociación', values: ['5 Days', '5 Days', '5 Days', '5 Days', '5 Days'] },
      { label: 'Primera retirada', values: ['21 Days', '21 Days', '21 Days', '21 Days', '21 Days'] },
    ]
  },
  O: {
    id: 'O',
    name: 'ONE',
    description: '1 Fase Challenge - Rápido y Directo',
    color: 'bg-gradient-to-br from-orange-500 via-orange-600 to-red-500',
    sizes: [
      { 
        size: '$5k', 
        sizeValue: '5k',
        fee: '$89', 
        reward: '$150', 
        maxLoss: '8% ($400)', 
        dailyLoss: '4% ($200)', 
        refund: '$89',
        profitPhase1: '12%'
      },
      { 
        size: '$10k', 
        sizeValue: '10k',
        fee: '$109', 
        reward: '$300', 
        maxLoss: '8% ($800)', 
        dailyLoss: '4% ($400)', 
        refund: '$109',
        profitPhase1: '12%'
      },
      { 
        size: '$25k', 
        sizeValue: '25k',
        fee: '$219', 
        reward: '$750', 
        maxLoss: '8% ($2,000)', 
        dailyLoss: '4% ($1,000)', 
        refund: '$219',
        profitPhase1: '12%'
      },
      { 
        size: '$50k', 
        sizeValue: '50k',
        fee: '$349', 
        reward: '$1,500', 
        maxLoss: '8% ($4,000)', 
        dailyLoss: '4% ($2,000)', 
        refund: '$349',
        profitPhase1: '12%'
      },
      { 
        size: '$100k', 
        sizeValue: '100k',
        fee: '$609', 
        reward: '$3,000', 
        maxLoss: '8% ($8,000)', 
        dailyLoss: '4% ($4,000)', 
        refund: '$609',
        profitPhase1: '12%'
      }
    ],
    features: [
      { label: '20% Performance Reward', type: 'header' },
      { label: 'Fase 1 Objetivo de beneficios', key: 'profitPhase1' as any, values: ['12%', '12%', '12%', '12%', '12%'] },
      { label: 'Límite máximo de pérdidas', key: 'maxLoss' },
      { label: 'Límite de pérdidas diarias', key: 'dailyLoss' },
      { label: 'Días mínimos de negociación', values: ['3 Days', '3 Days', '3 Days', '3 Days', '3 Days'] },
      { label: 'Primera retirada', values: ['14 Days', '14 Days', '14 Days', '14 Days', '14 Days'] },
    ]
  },
  R: {
    id: 'R',
    name: 'ROYAL',
    description: 'Plan Premium - Máximas Recompensas',
    color: 'bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-500',
    sizes: [
      { 
        size: '$5k', 
        sizeValue: '5k',
        fee: '$59', 
        reward: '$187.50', 
        maxLoss: '10% ($500)', 
        dailyLoss: '5% ($250)', 
        refund: '$59',
        profitPhase1: '10%',
        profitPhase2: '5%'
      },
      { 
        size: '$10k', 
        sizeValue: '10k',
        fee: '$119', 
        reward: '$375', 
        maxLoss: '10% ($1,000)', 
        dailyLoss: '5% ($500)', 
        refund: '$119',
        profitPhase1: '10%',
        profitPhase2: '5%'
      },
      { 
        size: '$25k', 
        sizeValue: '25k',
        fee: '$249', 
        reward: '$937.50', 
        maxLoss: '10% ($2,500)', 
        dailyLoss: '5% ($1,250)', 
        refund: '$249',
        profitPhase1: '10%',
        profitPhase2: '5%'
      },
      { 
        size: '$50k', 
        sizeValue: '50k',
        fee: '$399', 
        reward: '$1,875', 
        maxLoss: '10% ($5,000)', 
        dailyLoss: '5% ($2,500)', 
        refund: '$399',
        profitPhase1: '10%',
        profitPhase2: '5%'
      },
      { 
        size: '$100k', 
        sizeValue: '100k',
        fee: '$699', 
        reward: '$3,750', 
        maxLoss: '10% ($10,000)', 
        dailyLoss: '5% ($5,000)', 
        refund: '$699',
        profitPhase1: '10%',
        profitPhase2: '5%'
      }
    ],
    features: [
      { label: '25% Performance Reward', type: 'header' },
      { label: 'Fase 1 Objetivo de beneficios', key: 'profitPhase1' as any, values: ['10%', '10%', '10%', '10%', '10%'] },
      { label: 'Fase 2 Objetivo de beneficios', key: 'profitPhase2' as any, values: ['5%', '5%', '5%', '5%', '5%'] },
      { label: 'Límite máximo de pérdidas', key: 'maxLoss' },
      { label: 'Límite de pérdidas diarias', key: 'dailyLoss' },
      { label: 'Días mínimos de negociación', values: ['5 Days', '5 Days', '5 Days', '5 Days', '5 Days'] },
      { label: 'Primera retirada', values: ['14 Days', '14 Days', '14 Days', '14 Days', '14 Days'] },
    ]
  },
  D: {
    id: 'D',
    name: 'DYNAMIC',
    description: 'Drawdown Dinámico - Máxima Flexibilidad',
    color: 'bg-gradient-to-br from-amber-600 via-yellow-600 to-amber-700',
    sizes: [
      { 
        size: '$5k', 
        sizeValue: '5k',
        fee: '$69', 
        reward: '$150', 
        maxLoss: 'Dynamic (12%)', 
        dailyLoss: '5% ($250)', 
        refund: '$69',
        profitPhase1: '10%',
        profitPhase2: '6%'
      },
      { 
        size: '$10k', 
        sizeValue: '10k',
        fee: '$139', 
        reward: '$300', 
        maxLoss: 'Dynamic (12%)', 
        dailyLoss: '5% ($500)', 
        refund: '$139',
        profitPhase1: '10%',
        profitPhase2: '6%'
      },
      { 
        size: '$25k', 
        sizeValue: '25k',
        fee: '$289', 
        reward: '$750', 
        maxLoss: 'Dynamic (12%)', 
        dailyLoss: '5% ($1,250)', 
        refund: '$289',
        profitPhase1: '10%',
        profitPhase2: '6%'
      },
      { 
        size: '$50k', 
        sizeValue: '50k',
        fee: '$449', 
        reward: '$1,500', 
        maxLoss: 'Dynamic (12%)', 
        dailyLoss: '5% ($2,500)', 
        refund: '$449',
        profitPhase1: '10%',
        profitPhase2: '6%'
      },
      { 
        size: '$100k', 
        sizeValue: '100k',
        fee: '$799', 
        reward: '$3,000', 
        maxLoss: 'Dynamic (12%)', 
        dailyLoss: '5% ($5,000)', 
        refund: '$799',
        profitPhase1: '10%',
        profitPhase2: '6%'
      }
    ],
    features: [
      { label: '20% Performance Reward', type: 'header' },
      { label: 'Fase 1 Objetivo de beneficios', key: 'profitPhase1' as any, values: ['10%', '10%', '10%', '10%', '10%'] },
      { label: 'Fase 2 Objetivo de beneficios', key: 'profitPhase2' as any, values: ['6%', '6%', '6%', '6%', '6%'] },
      { label: 'Límite máximo de pérdidas', key: 'maxLoss' },
      { label: 'Límite de pérdidas diarias', key: 'dailyLoss' },
      { label: 'Tipo de Drawdown', values: ['Dynamic', 'Dynamic', 'Dynamic', 'Dynamic', 'Dynamic'] },
      { label: 'Días mínimos de negociación', values: ['4 Days', '4 Days', '4 Days', '4 Days', '4 Days'] },
      { label: 'Primera retirada', values: ['14 Days', '14 Days', '14 Days', '14 Days', '14 Days'] },
    ]
  }
};
