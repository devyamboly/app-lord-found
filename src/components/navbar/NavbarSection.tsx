"use client";
import { useState, useEffect } from "react";
import ButtonMovil from "./ButtonMovil";
import ButtonNav from "./ButtonNav";
import {ITEMNAV} from "../../mocks/itemNav";    
import ButtonLogin from "./ButtonLogin";

export default function NavbarSection(){
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div role="navigation" className={`font-sans md:text-lg flex pb-10 pt-10 h-16 w-full justify-between items-center px-6 md:px-28  fixed md:sticky top-0 z-[90] mx-auto transition-all duration-500 ${
            scrolled 
                ? 'shadow-lg shadow-gray-800/30 bg-gray-700/30 backdrop-blur-2xl border-b border-slate-800' 
                : 'md:bg-transparent border-b border-transparent'
        } bg-slate-900 md:bg-transparent`}>
            <img className="w-[50%] md:w-1/6" src="/logo-4-versiones_Mesa-de-trabajo-1-copia-scaled-e1755857831135-2048x457.png" alt="Logo" />

            <div className="hidden text-white text-md md:flex space-x-10 items-center">
                
                {ITEMNAV.map((item:any) => (
                    <a key={item.id} className="hover:text-amber-500 hover:border-b hover:border-amber-500 transition ease-in-out duration-300" href={item.href}>{item.label}</a>
                ))}

                <ButtonLogin className="text-white" href="https://users.lordfound.com/register">Login</ButtonLogin>

                <ButtonNav className="font-semibold  hover:scale-105 transition-transform duration-300" href="https://users.lordfound.com/register">Fondéate Ahora</ButtonNav>
            </div>

            <ButtonMovil 
                size="md" 
                isOpen={open} 
                onToggle={() => setOpen(prev => !prev)} 
                className="md:hidden" 
                colorClass="text-white"
            />

            <div onClick={() => setOpen(false)} className={`fixed inset-x-0 top-16 bottom-0 bg-slate-900/70 transition-opacity duration-300 z-20 md:hidden ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} />

            <div className={`fixed top-14 bottom-0 right-0 w-64 h-screen bg-slate-900 text-white z-30 transform transition-transform duration-300 md:hidden ${open ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-6 flex flex-col gap-4">
                    
                    {ITEMNAV.map((item:any) => (
                        <a key={item.id} onClick={() => setOpen(false)} className="hover:text-amber-500 hover:border-b hover:border-amber-500 transition ease-in-out duration-300" href={item.href}>{item.label}</a>
                    ))}

                    <ButtonLogin className="text-white " href="https://users.lordfound.com/register">Login</ButtonLogin>
                    <ButtonNav className="mt-2 font-semibold" href="https://users.lordfound.com/register">Fondéate Ahora</ButtonNav>
                
                </div>
            </div>
        </div>
    );

}