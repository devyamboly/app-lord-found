"use client";
import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      
      // Solo aplicar a links internos que empiecen con #
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        
        const href = target.getAttribute('href');
        if (!href) return;
        
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Calcular la altura del navbar
          const navbar = document.querySelector('[role="navigation"]') as HTMLElement;
          const navbarHeight = navbar ? navbar.offsetHeight : 80;
          
          // Calcular la posición considerando el offset del navbar
          const elementTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
          const targetPosition = elementTop - navbarHeight - 20; // 20px extra de padding
          
          window.scrollTo({
            top: Math.max(0, targetPosition), // Asegurar que no sea negativo
            behavior: 'smooth'
          });
        }
      }
    };

    // Agregar el event listener
    document.addEventListener('click', handleSmoothScroll);
    
    // Cleanup
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);
};
