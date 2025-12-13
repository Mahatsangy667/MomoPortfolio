"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      
      // Afficher l'indicateur seulement après un certain défilement
      setIsVisible(window.scrollY > 100);
    };

    // Délai pour éviter les calculs trop fréquents
    const throttledScroll = () => {
      let ticking = false;
      return () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
          });
          ticking = true;
        }
      };
    };

    const throttledHandler = throttledScroll();
    
    window.addEventListener("scroll", throttledHandler);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener("scroll", throttledHandler);
  }, []);

  return (
    <div className={cn(
      "fixed top-0 left-0 w-full h-1 z-[60] transition-opacity duration-300",
      isVisible ? "opacity-100" : "opacity-0"
    )}>
      {/* Barre de progression principale */}
      <div
        className="h-full bg-gradient-to-r from-primary via-secondary to-primary transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Effet de glow */}
      <div 
        className="absolute top-0 h-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-sm transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Point indicateur */}
      {isVisible && scrollProgress > 0 && (
        <div 
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/50 transition-all duration-150 ease-out"
          style={{ left: `calc(${scrollProgress}% - 6px)` }}
        >
          {/* Animation de pulse */}
          <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
        </div>
      )}
    </div>
  );
};