import { Trophy, HandCoins,Crosshair} from "lucide-react";

export const STEPS = [
    {
        step: 1,
        title: 'Acepta el reto',
        description: 'Elige el plan que mejor se adapte a tu estilo de trading. Opera en un entorno realista, con spreads bajos y sin costos ocultos. Demuestra tu consistencia y disciplina.',
        icon: <Crosshair className="text-slate-200" />,
        highlight: true
    },
    {
        step: 2,
        title: 'Obtener cuenta LordFound',
        description: 'Supera el reto y consigue una cuenta con fondos simulados.',
        icon: <Trophy className="text-slate-200"/>,
        highlight: true
    },
    {
        step: 3,
        title: 'Escala y gana más',
        description: 'Aumenta tu cuenta con nuestro plan de crecimiento. Llega hasta los $3 millones USD y recibe un porcentaje mayor de beneficios.',
        icon: <HandCoins className="text-slate-200"/>,
        highlight: true
    }
]