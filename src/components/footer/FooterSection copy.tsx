import { Instagram } from "lucide-react";

export default function FooterSection(){

    const year = new Date().getFullYear();

    return(
        <footer className="py-14 px-16">
            
            <div className="border-y border-gray-700 pt-10 px-8">
                <div className="md:flex md:justify-between w-full ">
                    <div className="flex md:block justify-center md:justify-start pb-4">
                        <img className="w-[60%] md:w-[25%]" src="/logo-4-versiones_Mesa-de-trabajo-1-copia-scaled-e1755857831135-2048x457.png" alt="Logo" />
                    </div>

                    <div className="flex space-x-10 md:w-[40%] w-full justify-between ">
                        <div>
                            <h3 className="text-white">Mapa de sitio</h3>
                            <ul className="text-white space-y-2 mt-4">
                                <li>
                                    <a className=" hover:text-amber-500 hover:border-b hover:border-amber-500 transition ease-in-out duration-300" href="#">Inicio</a>
                                </li>
                                <li>
                                    <a className="hover:text-amber-500 hover:border-b hover:border-amber-500 transition ease-in-out duration-300" href="#">FAQ</a>
                                </li>
                                <li>
                                    <a className="hover:text-amber-500 hover:border-b hover:border-amber-500 transition ease-in-out duration-300" href="#">Afiliado</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white">Redes sociales</h3>
                            <div className="pt-4">
                                <Instagram className="text-white text-6xl" />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="pt-4 pb-2 md:flex w-full text-center justify-between pr-4">
                    <p className="text-gray-200 text-xs pt-4">© {year} LordFound. Todos los derechos reservados.</p>
                    <div className="text-gray-200 text-xs pt-4 flex justify-center space-x-4 md:ml-4">
                        <p className="hover:underline hover:cursor-pointer">Privacy Policy</p>
                        <p className="border-l pl-4 hover:underline hover:cursor-pointer">Terms of Service</p>
                    </div>
                </div>
            </div>
            
            <div>
                <p className="text-gray-500 text-[10px] pt-4">
                    Divulgación de riesgos de LordFound: LordFound NO es un bróker. No manejamos fondos de clientes. Somos una plataforma educativa que ofrece desafíos que sirven como prueba para los operadores que desean aprender a operar. Todas las operaciones se realizan en un entorno de demostración simulado. DIVULGACIÓN DE RENDIMIENTO HIPOTÉTICO: Los resultados de rendimiento hipotético tienen muchas limitaciones significativas de rendimiento y de otro tipo, algunas de las cuales se describen a continuación. No se realiza ninguna declaración de que alguna cuenta logrará o es probable que logre ganancias o pérdidas similares a las que se muestran en el sitio web o en cualquier material promocional. Norma 4.41 de la CFTC: Los resultados de rendimiento hipotético o simulado tienen ciertas limitaciones. A diferencia de un registro de rendimiento real, los resultados simulados no representan operaciones reales. Además, debido a que las operaciones no se han ejecutado realmente, los resultados pueden haber compensado de forma insuficiente o excesiva el impacto, si lo hubiera, de ciertos factores del mercado, como la falta de liquidez. Los programas de operaciones simuladas, en general, también están sujetos al hecho de que están diseñados con el beneficio de la retrospectiva. No se garantiza que ninguna cuenta obtenga o pueda obtener ganancias o pérdidas similares a las que se muestran. Los testimonios que aparecen en este sitio web pueden no ser representativos de otros clientes y no son una garantía de rendimiento o éxito futuros. No se garantiza que ninguna cuenta de evaluación obtenga ganancias o pérdidas similares a las que se muestran aquí.
                </p>
            </div>

        </footer>
    )
}