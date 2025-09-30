"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const logos = [
    "/cryptos/Etherum-150x75.png",
    "/cryptos/Logos-2.png",
    "/cryptos/Logos-5-150x75.png",
    "/cryptos/Neteller.png",
    "/cryptos/Payooner-150x75.png",
    "/cryptos/skrill-150x75.png",
    "/cryptos/Tether-150x75.png"
];

export default function CryptoCarousel() {
    const trackRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<gsap.core.Tween | null>(null);

    useEffect(() => {
        if (!trackRef.current) return;

        const track = trackRef.current;
        const firstSet = track.children[0] as HTMLElement;
        
        // Calculamos el ancho real del primer set de logos
        const trackWidth = firstSet.offsetWidth;

        // Creamos la animación infinita con GSAP
        animationRef.current = gsap.to(track, {
            x: -trackWidth,
            duration: 20,
            ease: "none",
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize((x) => parseFloat(x) % trackWidth)
            }
        });

        return () => {
            animationRef.current?.kill();
        };
    }, []);

    const handleMouseEnter = () => {
        animationRef.current?.pause();
    };

    const handleMouseLeave = () => {
        animationRef.current?.resume();
    };

    return (
        <section className="py-10 sm:py-12 w-screen" aria-label="Marcas aliadas">
            <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-8">
                <h2 className="text-slate-100 text-center text-base sm:text-lg md:text-2xl font-medium mb-6 sm:mb-8">
                    Opera con confianza y seguridad con los mejores
                </h2>

                <div 
                    className="relative overflow-hidden py-3 sm:py-4"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="w-full overflow-hidden px-4 sm:px-8 md:px-12">
                        <div 
                            ref={trackRef}
                            className="flex"
                        >
                            {/* Primer set de logos */}
                            <div className="flex gap-6 sm:gap-8 md:gap-10 sm:ml-4">
                                {logos.map((src, i) => (
                                    <div
                                        key={`first-${i}`}
                                        className="shrink-0 flex items-center justify-center w-[100px] h-12 sm:w-[120px] sm:h-14 md:w-[150px] md:h-16 px-2 sm:px-3"
                                    >
                                        <img
                                            src={src}
                                            alt="logo partner"
                                            className="max-h-full max-w-full object-contain brightness-125 saturate-[1.8] contrast-110"
                                        />
                                    </div>
                                ))}
                            </div>
                            {/* Segundo set de logos (duplicado para loop infinito) */}
                            <div className="flex gap-6 sm:gap-8 md:gap-10 sm:ml-4 ml-6 sm:ml-8 md:ml-10">
                                {logos.map((src, i) => (
                                    <div
                                        key={`second-${i}`}
                                        className="shrink-0 flex items-center justify-center w-[100px] h-12 sm:w-[120px] sm:h-14 md:w-[150px] md:h-16 px-2 sm:px-3"
                                    >
                                        <img
                                            src={src}
                                            alt="logo partner"
                                            className="max-h-full max-w-full object-contain brightness-125 saturate-[1.8] contrast-110"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}