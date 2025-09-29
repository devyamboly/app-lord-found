"use client";


const logos = [
    "/cryptos/Etherum-150x75.png",
    "/cryptos/Logos-2.png",
    "/cryptos/Logos-5-150x75.png",
    "/cryptos/Neteller.png",
    "/cryptos/Payooner-150x75.png",
    "/cryptos/skrill-150x75.png",
    "/cryptos/Tether-150x75.png"
];

export default function CryptoCarousel(){
    // Construimos el array duplicado: en desktop triplicamos para un loop más suave.
    const duplicated = [...logos, ...logos, ...logos];
    return (
        <section className="py-10 sm:py-12 w-screen" aria-label="Marcas aliadas">
            <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-8">
                <h2 className="text-slate-100 text-center text-base sm:text-lg md:text-2xl font-medium mb-6 sm:mb-8">
                    Opera con confianza y seguridad con los mejores
                </h2>

                <div className="group relative overflow-hidden py-3 sm:py-4">
                    {/* Gradientes laterales responsivos (más finos en mobile) */}
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-6 sm:w-8 md:w-10 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/70 to-transparent z-10" />
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-6 sm:w-8 md:w-10 bg-gradient-to-l from-[#0f172a] via-[#0f172a]/70 to-transparent z-10" />

                    {/* Wrapper con padding lateral dinámico */}
                    <div className="w-full overflow-hidden px-4 sm:px-8 md:px-12">
                        {/* En mobile quitamos el offset para centrar mejor; desde sm añadimos leve separación */}
                        <div className="flex animate-marquee gap-6 sm:gap-8 md:gap-10 sm:ml-4">
                            {duplicated.map((src, i) => (
                                <div
                                    key={i}
                                    className="shrink-0 flex items-center justify-center w-[100px] h-12 sm:w-[120px] sm:h-14 md:w-[150px] md:h-16 px-2 sm:px-3"
                                >
                                    <img
                                        src={src}
                                        alt="logo partner"
                                        className="max-h-full max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity"/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}