import CardStep from "./CardStep";
import { Trophy, HandCoins,Crosshair} from "lucide-react";

const steps = [
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

export default function StepsSection(){

    return(

        <section className="px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-center py-8 sm:py-12">
            <h2 className="text-slate-100 mb-8 sm:mb-10 md:mb-14">Evalúa. Fondea. <span className="text-amber-400">Gana.</span></h2>
            <div className="md:flex md:justify-center space-y-8 sm:space-y-10 md:space-y-0 md:space-x-6 lg:space-x-8 mt-6 mx-auto w-full">
                {
                    steps.map((step,index) =>(
                        <CardStep key={index} {...step} />
                    ))
                }
            </div>
        </section>

    );

}