"use client";

import type { SignpostGridSection } from "@/types/cms";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SignpostGridProps {
  data: SignpostGridSection;
}

export function SignpostGrid({ data }: SignpostGridProps) {
  const { items } = data;
  const [sectionRef] = useScrollReveal();

  return (
    <section 
      id={data.id}
      className="bg-primary-foreground scroll-mt-20" 
      ref={sectionRef}
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2">
        {items.map((item, i) => (
          <a 
            key={item.title} 
            href={item.url} 
            className="group block relative overflow-hidden" 
            data-reveal 
            data-reveal-delay={String(i + 1)}
          >
            <div className="overflow-hidden relative aspect-[4/3]">
              <Image
                src={item.image.url}
                alt={item.image.alt || item.title}
                fill
                className="object-cover img-zoom"
              />
            </div>
            <div className="px-6 md:px-12 py-8 md:py-10 bg-background">
              <h2 className="font-heading font-normal text-title-m text-foreground">
                {item.title}
              </h2>
              <span className="mt-4 link-slide text-body-s font-body font-medium text-foreground hover:text-primary">
                {item.link_text}
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
