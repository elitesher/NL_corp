"use client";

import type { IconGridSection } from "@/types/cms";
import Image from "next/image";
import { Leaf, HandHeart, Globe, type LucideIcon } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface IconGridProps {
  data: IconGridSection;
}

const columnsClasses = {
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
};

// Map of lucide icon names to components
const lucideIconMap: Record<string, LucideIcon> = {
  leaf: Leaf,
  "hand-heart": HandHeart,
  globe: Globe,
};

function getIconComponent(iconUrl: string): LucideIcon | null {
  if (iconUrl.startsWith("lucide:")) {
    const iconName = iconUrl.replace("lucide:", "");
    return lucideIconMap[iconName] || null;
  }
  return null;
}

export function IconGrid({ data }: IconGridProps) {
  const { columns, items } = data;
  const [sectionRef] = useScrollReveal();

  return (
    <section 
      id={data.id}
      className="bg-background py-10 md:py-14 scroll-mt-20" 
      ref={sectionRef}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className={`grid ${columnsClasses[columns]} gap-12 md:gap-8 lg:gap-16`}>
          {items.map((card, i) => {
            const LucideIcon = getIconComponent(card.icon.url);
            
            return (
              <div 
                key={card.title} 
                className="flex flex-col" 
                data-reveal 
                data-reveal-delay={String(i + 1)}
              >
                <div className="w-10 h-10 rounded-full border border-foreground/15 flex items-center justify-center mb-6 overflow-hidden">
                  {LucideIcon ? (
                    <LucideIcon className="w-4 h-4 text-foreground" strokeWidth={1.5} />
                  ) : (
                    <Image
                      src={card.icon.url}
                      alt={card.icon.alt || card.title}
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                  )}
                </div>
                <h3 className="font-heading font-bold text-title-s text-foreground mb-3">
                  {card.title}
                </h3>
                <p className="text-body-s text-muted-foreground leading-relaxed font-body">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
