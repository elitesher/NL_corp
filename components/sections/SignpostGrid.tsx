"use client";

import type { SignpostGridSection } from "@/types/cms";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

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
          <Card 
            key={item.title} 
            className="group relative overflow-hidden border-none rounded-none shadow-none" 
            data-reveal 
            data-reveal-delay={String(i + 1)}
          >
            <a href={item.url} className="block">
              <CardHeader className="p-0">
                <AspectRatio ratio={4/3} className="overflow-hidden">
                  <Image
                    src={item.image.url}
                    alt={item.image.alt || item.title}
                    fill
                    className="object-cover img-zoom"
                  />
                </AspectRatio>
              </CardHeader>
              <CardContent className="px-6 md:px-12 py-8 md:py-10 bg-background">
                <CardTitle className="font-heading font-bold text-title-m text-foreground">
                  {item.title}
                </CardTitle>
              </CardContent>
              <CardFooter className="px-6 md:px-12 pb-8 pt-0 bg-background">
                <Button variant="link" className="p-0 h-auto gap-2 text-body-s font-body font-medium text-foreground hover:text-primary">
                  {item.link_text}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}
