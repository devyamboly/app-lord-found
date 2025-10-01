"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import clsx from "clsx";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  mobileRootMargin?: string;
}

export default function SectionReveal({
  children,
  className,
  threshold = 0.05,
  rootMargin = "0px 0px -2% 0px",
  mobileRootMargin = "0px 0px 5% 0px",
}: SectionRevealProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = (event?: MediaQueryListEvent) => {
      setShouldReduceMotion(event ? event.matches : mediaQuery.matches);
    };

    updatePreference();

    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) {
      setIsVisible(true);
      return;
    }

    const node = containerRef.current;
    if (!node) return;

    const isMobileViewport = window.matchMedia("(max-width: 767px)").matches;
    const computedRootMargin = isMobileViewport ? mobileRootMargin : rootMargin;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry) return;
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin: computedRootMargin,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, shouldReduceMotion]);

  return (
    <div
      ref={containerRef}
      className={clsx(
        shouldReduceMotion
          ? "opacity-100 translate-y-0"
          : "transition-all duration-700 ease-out will-change-transform",
        "[&_*]:will-change-transform",
        !shouldReduceMotion && !isVisible && "opacity-0 translate-y-10",
        !shouldReduceMotion && isVisible && "opacity-100 translate-y-0",
        className
      )}
    >
      {children}
    </div>
  );
}
