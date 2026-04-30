"use client";

import type { HeroSection } from "@/types/cms";
import Image from "next/image";

interface HeroProps {
  data: HeroSection;
}

export function Hero({ data }: HeroProps) {
  const { headline, subheading, media, overlay_theme, alignment, cta } = data;

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {media.kind === "video" && media.video ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-top"
        >
          <source src={media.video.url} type="video/mp4" />
        </video>
      ) : media.image ? (
        <Image
          src={media.image.url}
          alt={media.image.alt || headline}
          fill
          className="object-cover object-top"
          priority
        />
      ) : null}
      
      <div className={`absolute inset-0 ${overlay_theme === "dark" ? "bg-foreground/25" : "bg-background/25"}`} />
      
      <div className={`relative z-10 flex flex-col ${alignment === "center" ? "items-center text-center" : "items-start text-left"} justify-center h-full px-6 md:px-12 max-w-[1440px] mx-auto`}>
        <h1 
          className="font-heading font-bold text-title-l md:text-jumbo text-white leading-tight max-w-2xl reveal-up"
          dangerouslySetInnerHTML={{ __html: headline }}
        />
        {subheading && (
          <p className="mt-6 text-body-m md:text-title-s text-white/80 max-w-lg font-body reveal-up-delay font-normal">
            {subheading}
          </p>
        )}
        {cta && (
          <a
            href={cta.url}
            className={`mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-md font-body font-medium transition-colors duration-300 ${
              cta.style === "primary"
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {cta.label}
          </a>
        )}
      </div>
    </section>
  );
}
