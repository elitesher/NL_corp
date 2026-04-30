"use client";

import type { ImageOverlaySection } from "@/types/cms";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";

interface ImageOverlayProps {
  data: ImageOverlaySection;
}

export function ImageOverlay({ data }: ImageOverlayProps) {
  const { heading, body, image, overlay_theme, cta } = data;
  const [sectionRef] = useScrollReveal();

  return (
    <section 
      id={data.id}
      className="relative overflow-hidden scroll-mt-20" 
      ref={sectionRef}
    >
      <div className="relative w-full min-h-[75vh]">
        <Image
          src={image.url}
          alt={image.alt || heading}
          fill
          className="object-cover"
        />
        <div className={`absolute inset-0 ${overlay_theme === "dark" ? "bg-foreground/45" : "bg-background/45"}`} />
        <div className="relative z-10 min-h-[75vh] px-6 md:px-12 pb-16 md:pb-24 max-w-[1440px] mx-auto items-start justify-end flex flex-col">
          <div className="max-w-3xl">
            <h2 
              className="font-heading font-bold text-title-l text-white leading-snug" 
              data-reveal
              dangerouslySetInnerHTML={{ __html: heading }}
            />
            {body && (
              <p 
                className="mt-6 text-body-m text-white/80 max-w-xl font-body" 
                data-reveal 
                data-reveal-delay="1"
              >
                {body}
              </p>
            )}
            {cta && (
              <Button 
                variant="link" 
                asChild 
                className="mt-8 p-0 h-auto gap-2 text-body-s font-body font-medium text-white hover:text-primary"
                data-reveal
                data-reveal-delay="2"
              >
                <a href={cta.url}>
                  {cta.label}
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
