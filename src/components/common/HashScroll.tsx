"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function scrollToHash(hash: string) {
  const targetId = hash.replace(/^#/, "");
  if (!targetId) return;

  const element = document.getElementById(targetId);
  if (!element) return;

  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const handle = () => {
      if (typeof window === "undefined") return;
      if (!window.location.hash) return;

      requestAnimationFrame(() => {
        scrollToHash(window.location.hash);
      });
    };

    handle();
    window.addEventListener("hashchange", handle);

    return () => {
      window.removeEventListener("hashchange", handle);
    };
  }, [pathname]);

  return null;
}

