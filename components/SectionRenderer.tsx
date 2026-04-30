"use client";

import type { Section } from "@/types/cms";
import {
  Hero,
  TextBlock,
  ImageText,
  Stats,
  IconGrid,
  ImageOverlay,
  SignpostGrid,
  TwoColumnText,
  Navigation,
  Footer,
} from "./sections";

interface SectionRendererProps {
  section: Section;
}

/**
 * SectionRenderer dynamically renders a section based on its type.
 * This is the core component that enables CMS-driven page composition.
 * 
 * To add a new section type:
 * 1. Add the type definition to types/cms.ts
 * 2. Create the component in components/sections/
 * 3. Add the case to the switch statement below
 */
export function SectionRenderer({ section }: SectionRendererProps) {
  switch (section.type) {
    case "hero":
      return <Hero data={section} />;
    case "text":
      return <TextBlock data={section} />;
    case "image_text":
      return <ImageText data={section} />;
    case "stats":
      return <Stats data={section} />;
    case "icon_grid":
      return <IconGrid data={section} />;
    case "image_overlay":
      return <ImageOverlay data={section} />;
    case "signpost_grid":
      return <SignpostGrid data={section} />;
    case "two_column_text":
      return <TwoColumnText data={section} />;
    case "navigation":
      return <Navigation data={section} />;
    case "footer":
      return <Footer data={section} />;
    default:
      // Log unknown section types in development
      if (process.env.NODE_ENV === "development") {
        console.warn(`[SectionRenderer] Unknown section type: ${(section as Section).type}`);
      }
      return null;
  }
}
