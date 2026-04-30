"use client";

import type { ImageTextSection } from "@/types/cms";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ImageTextProps {
  data: ImageTextSection;
}

export function ImageText({ data }: ImageTextProps) {
  const { layout, image, content } = data;
  const [sectionRef] = useScrollReveal();
  const isImageLeft = layout === "image_left";
  const revealDirection = isImageLeft ? "right" : "left";

  return (
    <section 
      id={data.id}
      className="bg-background scroll-mt-20" 
      ref={sectionRef}
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-10 lg:gap-x-16 px-6 md:px-12 lg:px-16 xl:px-24 py-10 md:py-14 items-center">
        <div 
          className={`overflow-hidden relative aspect-[4/3] ${!isImageLeft ? "order-1 lg:order-2" : ""}`}
          data-reveal="scale"
        >
          <Image
            src={image.asset.url}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>
        <div className={`flex flex-col justify-center pt-10 lg:pt-0 ${!isImageLeft ? "order-2 lg:order-1" : ""}`}>
          {content.heading && (
            <h2 
              className="font-heading font-normal text-title-l text-foreground leading-tight" 
              data-reveal={revealDirection}
              dangerouslySetInnerHTML={{ __html: content.heading }}
            />
          )}
          {content.body && (
            <div 
              className="mt-6 text-body-m text-muted-foreground max-w-body font-body leading-relaxed" 
              data-reveal={revealDirection} 
              data-reveal-delay="1"
              dangerouslySetInnerHTML={{ __html: content.body }}
            />
          )}
          {content.cta && (
            <a
              href={content.cta.url}
              className="mt-8 link-slide text-body-s font-body font-medium text-foreground hover:text-primary self-start"
              data-reveal={revealDirection}
              data-reveal-delay="2"
            >
              {content.cta.label}
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
