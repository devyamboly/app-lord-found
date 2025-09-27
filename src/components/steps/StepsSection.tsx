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
        title: 'Obtener cuenta Neocapital',
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

        <section className="pl-8 text-3xl md:text-6xl font-bold text-center">
            <h2 className="text-slate-100 mb-14">Evalúa. Fondea. <span className="text-amber-400">Gana.</span></h2>
            <div className="md:flex md:justify-center space-y-14 md:space-y-0 md:space-x-8 mt-6 mx-auto w-full pr-8 md:pr-0 ">
                {
                    steps.map((step,index) =>(
                        <CardStep key={index} {...step} />
                    ))
                }
            </div>
        </section>

    );

}