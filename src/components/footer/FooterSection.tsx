import { Instagram, Facebook,  } from "lucide-react";
import { FaTiktok } from 'react-icons/fa';

export default function FooterSection(){

    const year = new Date().getFullYear();

    return(
        <footer className="bg-transparent pt-14 sm:pt-16 px-4 sm:px-6 md:px-12 lg:px-16">
            
            <div className="max-w-7xl mx-auto border-t border-l border-r rounded-t-3xl sm:rounded-t-4xl border-gray-700 pb-10 sm:pb-12">
                <div className="pt-10  sm:pt-12 px-6 sm:px-8 md:px-10 border-b border-gray-700 pb-10 sm:pb-12">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start w-full space-y-8 md:space-y-0 md:space-x-8">
                        <div className="flex flex-col md:block justify-center md:justify-cente items-center md:items-start pb-4 md:pr-6 w-full md:w-[40%]">
                            <img className="w-40 sm:w-48 md:w-52 lg:w-56 mx-auto" src="/logo-4-versiones_Mesa-de-trabajo-1-copia-scaled-e1755857831135-2048x457.png" alt="Logo" />
                            <div>
                                <div className="pt-4 space-x-4 sm:space-x-6 flex items-center justify-center">
                                    <a target="_blank" rel="noopener noreferrer" aria-label="Instagram de LordFound" href="https://www.instagram.com/lordfound.fx">
                                        <Instagram className="text-white size-6 sm:size-7 hover:text-red-500" />
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" aria-label="Facebook de LordFound" href="https://www.facebook.com/profile.php?id=61577216593314">
                                        <Facebook className="text-white size-6 sm:size-7 hover:text-blue-500" />
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" aria-label="TikTok de LordFound" href="https://www.tiktok.com/@lordfound.fx">
                                        <FaTiktok className="text-white text-base sm:text-xl " />
                                    </a>
                                </div>
                                <p className="text-gray-200 text-xs text-center  pt-4 hidden md:block">© {year} LordFound. Todos los derechos reservados.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 w-full justify-between mt-2 md:mt-0">
                            <div className="pl-6 md:pl-0">
                                <h3 className="text-slate-200 uppercase tracking-wide text-sm md:text-sm font-semibold">Contactos</h3>
                                <ul className="text-slate-300 text-sm sm:text-base space-y-2 mt-3 sm:mt-4">
                                    <li>
                                        <a className=" hover:text-amber-500 hover:border-b hover:border-amber-500 transition ease-in-out duration-300" href="#">Soporte</a>
                                    </li>
                                    <li>
                                        <a className="hover:text-amber-500 hover:border-b hover:border-amber-500 transition ease-in-out duration-300" href="#">Chat en vivo</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="pl-6 md:pl-0">
                                <h3 className="text-slate-200 uppercase tracking-wide text-sm md:text-sm font-semibold">Links importantes</h3>
                                <ul className="text-slate-300 text-sm sm:text-base space-y-2 mt-3 sm:mt-4">
                                    <li>
                                        <a className=" hover:text-amber-500 hover:border-b hover:border-amber-500 transition ease-in-out duration-300" href="#inicio">Inicio</a>
                                    </li>
                                    <li>
                                        <a className=" hover:text-amber-500 hover:border-b hover:border-amber-500 transition ease-in-out duration-300" href="#beneficios">Beneficios</a>
                                    </li>
                                    <li>
                                        <a className="hover:text-amber-500 hover:border-b hover:border-amber-500 transition ease-in-out duration-300" href="#planes">Planes</a>
                                    </li>
                                    <li>
                                        <a className="hover:text-amber-500 hover:border-b hover:border-amber-500 transition ease-in-out duration-300" href="#testimonios">Testimonios</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="pl-6 md:pl-0">
                                <h3 className="text-slate-200 uppercase tracking-wide text-sm md:text-sm font-semibold ">Comunidad</h3>
                                <ul className="text-slate-300 text-sm sm:text-base space-y-2 mt-3 sm:mt-4">
                                    <li>
                                        <a className=" hover:text-amber-500 hover:border-b hover:border-amber-500 transition ease-in-out duration-300" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/lordfound.fx">Instagram</a>
                                    </li>
                                    <li>
                                        <a className="hover:text-amber-500 hover:border-b hover:border-amber-500 transition ease-in-out duration-300" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@lordfound.fx">TikTok</a>
                                    </li>
                                    <li>
                                        <a className="hover:text-amber-500 hover:border-b hover:border-amber-500 transition ease-in-out duration-300" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=61577216593314">Facebook</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="pl-6 md:pl-0">
                                <h3 className="text-slate-200 uppercase tracking-wide text-sm md:text-sm font-semibold">Documentos</h3>
                                <ul className="text-slate-300 text-sm sm:text-base space-y-2 mt-3 sm:mt-4">
                                    <li>
                                        <a className=" hover:text-amber-500 hover:border-b hover:border-amber-500 transition ease-in-out duration-300" href="#">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a className="hover:text-amber-500 hover:border-b hover:border-amber-500 transition ease-in-out duration-300" href="#">Terms of Service</a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <p className="text-gray-200 text-xs text-center pt-4 block md:hidden">© {year} LordFound. Todos los derechos reservados.</p> 
                    
                    </div>
                    
                </div>
                
                <div className="px-6 sm:px-8 md:px-10">
                    <p className="text-gray-500 text-[11px] leading-relaxed pt-4">
                        {/* Divulgación de riesgos de LordFound: LordFound NO es un bróker. No manejamos fondos de clientes. Somos una plataforma educativa que ofrece desafíos que sirven como prueba para los operadores que desean aprender a operar. Todas las operaciones se realizan en un entorno de demostración y no implican inversión real. Los resultados de rendimiento pasado no garantizan resultados futuros. El trading conlleva riesgos significativos y puede no ser adecuado para todos. Antes de participar, asegúrese de comprender los riesgos involucrados y operar de manera responsable. */}
                        Divulgación de riesgos de LordFound: LordFound NO es un bróker. No manejamos fondos de clientes. Somos una plataforma educativa que ofrece desafíos que sirven como prueba para los operadores que desean aprender a operar. Todas las operaciones se realizan en un entorno de demostración simulado. DIVULGACIÓN DE RENDIMIENTO HIPOTÉTICO: Los resultados de rendimiento hipotético tienen muchas limitaciones significativas de rendimiento y de otro tipo, algunas de las cuales se describen a continuación. No se realiza ninguna declaración de que alguna cuenta logrará o es probable que logre ganancias o pérdidas similares a las que se muestran en el sitio web o en cualquier material promocional. Norma 4.41 de la CFTC: Los resultados de rendimiento hipotético o simulado tienen ciertas limitaciones. A diferencia de un registro de rendimiento real, los resultados simulados no representan operaciones reales. Además, debido a que las operaciones no se han ejecutado realmente, los resultados pueden haber compensado de forma insuficiente o excesiva el impacto, si lo hubiera, de ciertos factores del mercado, como la falta de liquidez. Los programas de operaciones simuladas, en general, también están sujetos al hecho de que están diseñados con el beneficio de la retrospectiva. No se garantiza que ninguna cuenta obtenga o pueda obtener ganancias o pérdidas similares a las que se muestran. Los testimonios que aparecen en este sitio web pueden no ser representativos de otros clientes y no son una garantía de rendimiento o éxito futuros. No se garantiza que ninguna cuenta de evaluación obtenga ganancias o pérdidas similares a las que se muestran aquí.
                    </p>
                </div>
            </div>

        </footer>
    )
 }