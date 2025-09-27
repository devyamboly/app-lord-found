"use client";
import SparksButton from "../ui/sparks-button";
import { CardStepProps } from "@/types/steps";

export default function CardStep({
    step = 2,
    title = 'Obtener cuenta Neocapital',
    description = 'Supera el reto y consigue una cuenta con fondos simulados.',
    icon,
    highlight = true
}: CardStepProps){

    return (
        <div
            className={`relative group rounded-2xl p-[1px] transition-all duration-500
                        ${highlight ? 'shadow-[0_0_0_1px_#F8D55555] bg-gradient-to-br from-[#F8D555] via-[#F8D55522] to-[#F8D55544]' : 'bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a]'}`}>
            {/* Halo animado (solo visible al hover) */}
            <div className="pointer-events-none absolute -inset-[40%] opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700 bg-[radial-gradient(circle_at_center,#F8D55555,transparent_60%)]" />

            {/* Badge número centrado y sobresaliente */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-30">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center 
                               shadow-[0_0_0_3px_#B45309,0_0_0_4px_rgba(245,158,11,0.3),0_4px_12px_rgba(245,158,11,0.4)]
                               group-hover:shadow-[0_0_0_3px_#B45309,0_0_0_4px_rgba(245,158,11,0.6),0_6px_18px_rgba(245,158,11,0.6)]
                               transition-all duration-300">
                    <span className="text-black text-lg font-bold drop-shadow-sm">{step}</span>
                    {/* Brillo interno */}
                    <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/30 to-transparent pointer-events-none" />
                </div>
            </div>

            {/* Inner content */}
            <div className="relative z-10 rounded-2xl bg-[#111]/90 backdrop-blur-sm px-7 pt-14 pb-10 flex flex-col items-center text-center gap-6 h-full">

                <div className="relative">
                    <span className="absolute inset-0 animate-ping-slow rounded-full bg-yellow-400/10" />
                    <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-yellow-500/15 to-yellow-400/5 border border-yellow-400/40 shadow-[0_0_0_1px_#F8D55533,0_4px_18px_-2px_rgba(248,213,85,0.25)] relative">
                        {icon}
                        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-yellow-300 shadow-[0_0_8px_2px_#F8D555AA] animate-pulse" />
                        <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 rounded-full bg-yellow-200 shadow-[0_0_6px_2px_#F8D555AA] animate-pulse [animation-delay:400ms]" />
                    </div>
                </div>

                

                {/* Título */}
                <h3 className="text-white text-xl sm:text-2xl font-semibold leading-snug max-w-[22ch]">
                    {title}
                </h3>

                {/* Descripción */}
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-[40ch]">
                    {description}
                </p>

                {/* CTA */}
                <div className="pt-2">
                    {/* <button
                        className="relative px-7 py-3 rounded-md font-semibold text-sm sm:text-base text-black
                                             bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500
                                             shadow-[0_0_0_1px_#F8D55555,0_4px_16px_-2px_rgba(248,213,85,0.55)]
                                             hover:shadow-[0_0_0_1px_#F8D555AA,0_6px_22px_-2px_rgba(248,213,85,0.75)]
                                             active:translate-y-[1px] transition-all duration-300 overflow-hidden group/btn"
                    >
                        <span className="relative z-10">¿Cómo funciona?</span>
                        
                        <span className="pointer-events-none absolute inset-0 before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/50 before:to-transparent before:animate-[shine_2s_linear_infinite]" />
                    </button> */}
                    <SparksButton
                        
                        className="mt-2 w-full sm:w-fit"
                    >
                        ¿Cómo funciona?
                    </SparksButton>
                </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl border border-yellow-500/20 group-hover:border-yellow-400/60 transition-colors duration-500" />
        </div>
    );
}
