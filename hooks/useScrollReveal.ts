"use client";

import { useEffect, useRef, RefObject } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {}
): [RefObject<T | null>] {
  const { threshold = 0.15, rootMargin = "0px 0px -50px 0px", triggerOnce = true } = options;

  const ref = useRef<T | null>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    // Get all elements with data-reveal attribute within this container
    const revealElements = container.querySelectorAll("[data-reveal]");
    
    // Also check if the container itself has data-reveal
    const allElements = container.hasAttribute("data-reveal") 
      ? [container, ...Array.from(revealElements)] 
      : Array.from(revealElements);

    if (allElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold, rootMargin }
    );

    allElements.forEach((el) => observer.observe(el));

    return () => {
      allElements.forEach((el) => observer.unobserve(el));
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref];
}
