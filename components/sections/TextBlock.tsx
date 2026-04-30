"use client";

import type { TextBlockSection } from "@/types/cms";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface TextBlockProps {
  data: TextBlockSection;
}

const maxWidthClasses = {
  narrow: "max-w-2xl",
  standard: "max-w-4xl",
  wide: "max-w-6xl",
};

export function TextBlock({ data }: TextBlockProps) {
  const { eyebrow, heading, body, max_width, cta } = data;
  const [sectionRef] = useScrollReveal();

  return (
    <section 
      id={data.id}
      className="py-20 md:py-28 bg-background relative overflow-hidden scroll-mt-20" 
      ref={sectionRef}
    >
      <div className={`${maxWidthClasses[max_width]} mx-auto px-6 md:px-12 relative z-10`}>
        {eyebrow && (
          <p className="text-micro font-body font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4" data-reveal>
            {eyebrow}
          </p>
        )}
        {heading && (
          <h2 
            className="font-heading font-bold text-title-l md:text-jumbo text-foreground leading-snug" 
            data-reveal
            dangerouslySetInnerHTML={{ __html: heading }}
          />
        )}
        {body && (
          <div 
            className="mt-6 text-body-m text-muted-foreground font-body font-normal leading-relaxed"
            data-reveal
            data-reveal-delay="1"
            dangerouslySetInnerHTML={{ __html: body }}
          />
        )}
        {cta && (
          <a
            href={cta.url}
            className="mt-10 link-slide text-body-s font-body font-medium text-foreground hover:text-primary"
            data-reveal
            data-reveal-delay="2"
          >
            {cta.label}
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </section>
  );
}
