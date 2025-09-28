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
        <section className=" w-full md:flex md:items-center md:justify-between mt-32 md:mt-0 md:pl-28">

            <div className="w-full md:w-[50%] mx-auto pl-6 md:pl-0">
                <h2 className="uppercase text-amber-400 text-md font-medium md:text-lg ">
                    Quédate con hasta el 90 % de tus ganancias.
                </h2>
                <div className="text-white text-3xl md:text-5xl font-bold pt-2">
                    <p>Fondea tu trading</p>
                    <p>
                        <span className="text-amber-400 font-semibold">multiplica</span> tus resultados.
                    </p>
                </div>

                <p className="text-white text-md md:text-xl my-6 w-3/4">
                    Pagos rápidos y sin complicaciones.
                </p>

                <ButtonNav className="w-[50%] md:w-[30%] py-1 hover:scale-105 hover:ease-in-out hover:transition-all hover:duration-500 mx-auto" href="https://users.lordfound.com/register">Fondeate Ahora</ButtonNav>
            </div>

            <div className="w-full md:w-[50%] mb-4 flex justify-center items-center md:mr-32 mr-12">
                <img className={`h-[27rem] scale-x-110 md:scale-x-100 w-screen md:h-[35rem]  transform transition-all duration-1000 ${rotate ? "rotate-[4deg]" : "-rotate-[4deg]"}`} src="./icono-destellos.png" alt="" />
            </div>

        </section>
    );

}