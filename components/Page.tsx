"use client";

import type { Page as PageType, Section } from "@/types/cms";
import { SectionRenderer } from "./SectionRenderer";

interface PageProps {
  page: PageType;
}

/**
 * Generic Page component that renders any page from the CMS.
 * 
 * This component:
 * - Iterates over page.sections and renders each via SectionRenderer
 * - Does NOT branch on page_type - all pages use the same rendering logic
 * - The CMS controls section order and content
 * 
 * Usage:
 * ```tsx
 * const pageData = await getPageBySlug("home");
 * return <Page page={pageData} />;
 * ```
 */
export function Page({ page }: PageProps) {
  // Separate navigation and footer from content sections
  const navigation = page.sections.find((s): s is Section & { type: "navigation" } => s.type === "navigation");
  const footer = page.sections.find((s): s is Section & { type: "footer" } => s.type === "footer");
  const contentSections = page.sections.filter((s) => s.type !== "navigation" && s.type !== "footer");

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Navigation - rendered outside main */}
      {navigation && <SectionRenderer section={navigation} />}

      {/* Main content */}
      <main>
        {contentSections.map((section) => (
          <SectionRenderer key={section.id} section={section} />
        ))}
      </main>

      {/* Footer - rendered outside main */}
      {footer && <SectionRenderer section={footer} />}
    </div>
  );
}
