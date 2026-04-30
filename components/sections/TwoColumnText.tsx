"use client";

import type { TwoColumnTextSection } from "@/types/cms";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";

interface TwoColumnTextProps {
  data: TwoColumnTextSection;
}

export function TwoColumnText({ data }: TwoColumnTextProps) {
  const { left_column, right_column } = data;
  const [sectionRef] = useScrollReveal();

  return (
    <section 
      id={data.id}
      className="py-20 md:py-20 bg-background relative overflow-hidden scroll-mt-20" 
      ref={sectionRef}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-20 items-start">
          <div className="lg:col-span-4" data-reveal="left">
            {left_column.heading && (
              <h2 
                className="font-heading font-bold text-title-l md:text-jumbo text-foreground leading-[1.1]"
                dangerouslySetInnerHTML={{ __html: left_column.heading }}
              />
            )}
            {left_column.body && (
              <div 
                className="mt-4 text-body-m text-muted-foreground font-body"
                dangerouslySetInnerHTML={{ __html: left_column.body }}
              />
            )}
          </div>
          <div className="lg:col-span-7 lg:col-start-6 flex flex-col justify-center" data-reveal="right">
            {right_column.heading && (
              <h3 
                className="font-heading font-bold text-title-m text-foreground"
                dangerouslySetInnerHTML={{ __html: right_column.heading }}
              />
            )}
            {right_column.body && (
              <div 
                className="text-body-m text-muted-foreground font-body font-normal leading-relaxed"
                dangerouslySetInnerHTML={{ __html: right_column.body }}
              />
            )}
            {right_column.cta && (
              <Button 
                variant="link" 
                asChild 
                className="mt-10 p-0 h-auto text-body-s font-body font-medium text-foreground hover:text-primary self-start gap-2"
              >
                <a href={right_column.cta.url}>
                  {right_column.cta.label}
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
