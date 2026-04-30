import { Page } from "@/components/Page";
import { homepageData } from "@/lib/mock-data/homepage";
import type { Metadata } from "next";

/**
 * Homepage using CMS-driven architecture.
 * 
 * This page:
 * - Fetches page data (currently from mock, later from Contentstack)
 * - Passes data to the generic Page component
 * - Page component renders sections via SectionRenderer
 * 
 * The same pattern applies to ALL pages in the site.
 * No page-specific components or layouts are needed.
 */

export const metadata: Metadata = {
  title: homepageData.seo.title,
  description: homepageData.seo.description,
  openGraph: {
    title: homepageData.seo.title,
    description: homepageData.seo.description,
    images: homepageData.seo.og_image ? [homepageData.seo.og_image.url] : [],
  },
};

export default function HomePage() {
  // In production, this would be:
  // const pageData = await getPageBySlug("home");
  const pageData = homepageData;

  return <Page page={pageData} />;
}
