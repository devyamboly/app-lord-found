'use client'

import { useEffect, useState } from "react";
import ButtonNav from "../navbar/ButtonNav";


export default function PortadaSection(){

    const [rotate, setRotate] = useState(false);

    useEffect(() => {
        const id = setInterval(() => setRotate(r => !r), 1000);
        return () => clearInterval(id);
    }, []);

    return(
        <section id="inicio" className="w-full max-w-7xl mx-auto md:flex md:items-center md:justify-between mt-24 sm:mt-32 md:mt-0 px-4 sm:px-6 md:px-12 lg:px-16 pt-20 overflow-hidden">

            <div className="w-full md:w-[50%]">
                <h2 className="uppercase text-amber-400 text-sm sm:text-base md:text-lg font-medium">
                    Quédate con hasta el 90 % de tus ganancias.
                </h2>
                <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pt-2">
                    <p>Fondea tu trading</p>
                    <p>
                        <span className="text-amber-400 font-semibold">multiplica</span> tus resultados.
                    </p>
                </div>

                <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl my-4 sm:my-6 max-w-md">
                    Pagos rápidos y sin complicaciones.
                </p>

                <ButtonNav className="w-auto mx-auto md:mx-0 px-20 sm:px-8 md:px-14 py-2 hover:scale-105 hover:ease-in-out hover:transition-all hover:duration-500" href="https://users.lordfound.com/register">Fondéate Ahora</ButtonNav>
            </div>

            <div className="w-full md:w-[50%] mt-8 md:mt-0 mb-4 md:flex justify-center items-center">
                <img className={`brightness-75 h-64 sm:h-80 md:h-96 lg:h-[30rem] w-auto object-contain mx-auto md:mx-0 transform transition-all duration-1000 ${rotate ? "rotate-[4deg]" : "-rotate-[4deg]"}`} src="./icono-destellos.png" alt="Lord Found" />
            </div>

        </section>
    );

}