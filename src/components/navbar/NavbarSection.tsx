"use client";
import { useState, useEffect } from "react";
import ButtonMovil from "./ButtonMovil";
import ButtonNav from "./ButtonNav";
import {ITEMNAV} from "../../mocks/itemNav";    
import ButtonLogin from "./ButtonLogin";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";

export default function NavbarSection(){
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Hook para smooth scrolling
    useSmoothScroll();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav role="navigation" className={`font-sans md:text-lg flex md:bg-transparent backdrop-blur h-20 sm:h-20 w-full justify-between items-center px-4 sm:px-6 md:px-12 lg:px-28 fixed top-0 z-[90] mx-auto transition-all duration-500 ${
            scrolled 
                ? 'md:backdrop-blur-md md:bg-black/40 md:border-b md:border-white/10 md:shadow-lg md:shadow-black/20' 
                : ' md:bg-black/20 md:border-b-0 md:border-white/5'
        } bg-black`}>
            <img className="w-50 sm:w-40 md:w-44 lg:w-48" src="/logo-4-versiones_Mesa-de-trabajo-1-copia-scaled-e1755857831135-2048x457.png" alt="Logo" />

            <div className="hidden text-white text-sm lg:text-base md:flex space-x-4 lg:space-x-8 xl:space-x-10 items-center">
                
                {ITEMNAV.map((item:any) => (
                    <a key={item.id} className="hover:text-amber-500 hover:border-b hover:border-amber-500 transition ease-in-out duration-300" href={item.href}>{item.label}</a>
                ))}

                <ButtonLogin className="text-white" href="https://users.lordfound.com/register">Login</ButtonLogin>

                <ButtonNav className="hover:scale-105 transition-transform duration-300" href="https://users.lordfound.com/register">Fondéate Ahora</ButtonNav>
            </div>

            <ButtonMovil 
                size="md" 
                isOpen={open} 
                onToggle={() => setOpen(prev => !prev)} 
                className="md:hidden" 
                colorClass="text-white"
            />

            <div onClick={() => setOpen(false)} className={`fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-black/70 transition-opacity duration-300 z-20 md:hidden ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} />

            <div className={`fixed top-16 sm:top-20 bottom-0 right-0 w-64 sm:w-72 h-screen bg-black text-white z-30 transform transition-transform duration-300 md:hidden ${open ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-6 flex flex-col gap-4">
                    
                    {ITEMNAV.map((item:any) => (
                        <a key={item.id} onClick={() => setOpen(false)} className="hover:text-amber-500 hover:border-b hover:border-amber-500 transition ease-in-out duration-300" href={item.href}>{item.label}</a>
                    ))}

                    <ButtonLogin className="text-white " href="https://users.lordfound.com/register">Login</ButtonLogin>
                    <ButtonNav className="mt-2 font-semibold" href="https://users.lordfound.com/register">Fondéate Ahora</ButtonNav>
                
                </div>
            </div>
        </nav>
    );

}