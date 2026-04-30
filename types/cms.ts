// ========================
// BASE TYPES
// ========================

export interface Asset {
  url: string;
  alt?: string;
}

export interface SEO {
  title: string;
  description: string;
  og_image?: Asset;
}

export interface Person {
  name: string;
  role: string;
  image: Asset;
  bio?: string; // richtext
}

export interface MediaItem {
  title: string;
  image: Asset;
  url: string;
  category?: string;
}

export interface Report {
  title: string;
  year: number;
  cover_image: Asset;
  file: Asset;
}

export interface CTA {
  label: string;
  url: string;
  style?: "primary" | "secondary";
}

// ========================
// SECTION TYPES
// ========================

export interface BaseSection {
  id: string;
  type: string;
}

export interface HeroSection extends BaseSection {
  type: "hero";
  headline: string;
  subheading?: string;
  media: {
    kind: "image" | "video";
    image?: Asset;
    video?: Asset;
    fallback_image?: Asset;
  };
  overlay_theme: "light" | "dark";
  alignment: "left" | "center";
  cta?: CTA;
}

export interface TextBlockSection extends BaseSection {
  type: "text";
  eyebrow?: string;
  heading?: string;
  body: string; // richtext
  max_width: "narrow" | "standard" | "wide";
  cta?: CTA;
}

export interface ImageTextSection extends BaseSection {
  type: "image_text";
  layout: "image_left" | "image_right";
  image: {
    asset: Asset;
    alt: string;
  };
  content: {
    heading?: string;
    body: string; // richtext
    cta?: CTA;
  };
}

export interface StatsSection extends BaseSection {
  type: "stats";
  heading?: string;
  items: {
    label: string;
    value: string;
  }[];
  background_style: "default" | "light" | "brand";
}

export interface IconGridSection extends BaseSection {
  type: "icon_grid";
  columns: 2 | 3 | 4;
  items: {
    icon: Asset;
    title: string;
    description: string;
  }[];
}

export interface PeopleGridSection extends BaseSection {
  type: "people_grid";
  people: Person[];
  display: "grid" | "carousel";
}

export interface TestimonialSection extends BaseSection {
  type: "testimonials";
  testimonials: {
    quote: string;
    person: Person;
  }[];
}

export interface MediaGridSection extends BaseSection {
  type: "media_grid";
  items: MediaItem[];
}

export interface ReportListSection extends BaseSection {
  type: "reports";
  reports: Report[];
}

export interface CTASection extends BaseSection {
  type: "cta";
  headline: string;
  body?: string;
  cta: CTA;
  theme: "brand" | "light" | "dark";
}

// Additional section types for the existing homepage design
export interface ImageOverlaySection extends BaseSection {
  type: "image_overlay";
  heading: string;
  body?: string;
  image: Asset;
  overlay_theme: "light" | "dark";
  cta?: CTA;
}

export interface SignpostGridSection extends BaseSection {
  type: "signpost_grid";
  items: {
    title: string;
    link_text: string;
    url: string;
    image: Asset;
  }[];
}

export interface TwoColumnTextSection extends BaseSection {
  type: "two_column_text";
  left_column: {
    heading?: string;
    body?: string;
  };
  right_column: {
    heading?: string;
    body?: string;
    cta?: CTA;
  };
}

export interface NavigationSection extends BaseSection {
  type: "navigation";
  logo: Asset;
  links: {
    label: string;
    href: string;
  }[];
}

export interface FooterSection extends BaseSection {
  type: "footer";
  logo: Asset;
  shop_url: string;
  company_links: {
    label: string;
    href: string;
  }[];
  social_links: {
    platform: string;
    url: string;
  }[];
  app_store_url?: string;
  google_play_url?: string;
  legal_links: {
    label: string;
    href: string;
  }[];
}

// ========================
// UNION TYPE FOR ALL SECTIONS
// ========================

export type Section =
  | HeroSection
  | TextBlockSection
  | ImageTextSection
  | StatsSection
  | IconGridSection
  | PeopleGridSection
  | TestimonialSection
  | MediaGridSection
  | ReportListSection
  | CTASection
  | ImageOverlaySection
  | SignpostGridSection
  | TwoColumnTextSection
  | NavigationSection
  | FooterSection;

// ========================
// PAGE TYPE
// ========================

export type PageType =
  | "home"
  | "about"
  | "mission"
  | "esg"
  | "careers"
  | "media"
  | "financials"
  | "contact"
  | "generic";

export interface Page {
  title: string;
  slug: string;
  page_type: PageType;
  seo: SEO;
  sections: Section[];
  published: boolean;
}
