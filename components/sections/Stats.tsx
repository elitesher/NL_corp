"use client";

import type { StatsSection } from "@/types/cms";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

interface StatsProps {
  data: StatsSection;
}

const backgroundClasses = {
  default: "bg-background",
  light: "bg-primary-foreground",
  brand: "bg-primary",
};

export function Stats({ data }: StatsProps) {
  const { heading, items, background_style } = data;
  const [sectionRef] = useScrollReveal();

  return (
    <section 
      id={data.id}
      className={`pt-0 pb-20 md:pb-28 ${backgroundClasses[background_style]} relative overflow-hidden scroll-mt-20`} 
      ref={sectionRef}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 text-center">
        {heading && (
          <h2 
            className="font-heading font-bold text-title-l md:text-jumbo text-foreground leading-snug max-w-4xl mx-auto" 
            data-reveal
            dangerouslySetInnerHTML={{ __html: heading }}
          />
        )}
        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-0">
          {items.map((stat, i) => (
            <Card
              key={stat.label}
              data-reveal="counter"
              data-reveal-delay={String(i + 1)}
              className={`flex flex-col items-center border-none shadow-none bg-transparent rounded-none py-10 md:py-0 ${
                i < items.length - 1
                  ? "border-b md:border-b-0 md:border-r border-foreground/15"
                  : ""
              } ${i > 0 ? "md:pl-14" : ""} ${i < items.length - 1 ? "md:pr-14" : ""}`}
            >
              <CardContent className="flex flex-col items-center gap-4 p-0">
                <span 
                  className="font-heading text-display text-primary font-bold" 
                  style={{ fontFamily: "'New Look Supreme', Georgia, serif" }}
                >
                  {stat.value}
                </span>
                <span className="text-micro text-muted-foreground font-body font-medium uppercase tracking-[0.2em]">
                  {stat.label}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
