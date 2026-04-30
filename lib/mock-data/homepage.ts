import type { Page } from "@/types/cms";

/**
 * Mock homepage data simulating a Contentstack response.
 * In production, this would be fetched from the CMS.
 * 
 * The structure follows the content model exactly:
 * - Page with sections array
 * - Each section has a type that determines which component renders it
 * - CMS controls section order and content
 */
export const homepageData: Page = {
  title: "New Look Group - Home",
  slug: "home",
  page_type: "home",
  seo: {
    title: "New Look Group | Feel-Good Fashion",
    description: "We are the feel-good fashion brand making style accessible and fun so that everyone can experience that New Look feeling.",
    og_image: {
      url: "/images/og-image.jpg",
      alt: "New Look Group",
    },
  },
  published: true,
  sections: [
    // Navigation
    {
      id: "nav-main",
      type: "navigation",
      logo: {
        url: "/images/logo.svg",
        alt: "New Look",
      },
      links: [
        { label: "About Us", href: "#about" },
        { label: "ESG & Sustainability", href: "#esg" },
        { label: "Media", href: "#media" },
        { label: "Careers", href: "#careers" },
        { label: "Financial & Business Reporting", href: "#financials" },
      ],
    },

    // Hero Section
    {
      id: "hero-main",
      type: "hero",
      headline: "We're dedicated to inspiring<br /><em class=\"not-italic text-primary-foreground\">\"that New Look feeling\"</em>",
      subheading: "We are the feel-good fashion brand making style accessible and fun so that everyone can experience that New Look feeling.",
      media: {
        kind: "video",
        video: {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NEW%20LOOK%20NEW%20AW24%20BANNER%20VIDEO%201536%20X%20384%20CORE-Yt5Ar83afmPZ8RstKxVpkvHT3KDkVE.mp4",
          alt: "New Look AW24 Banner Video",
        },
        fallback_image: {
          url: "/images/hero-fallback.jpg",
          alt: "Fashion hero image",
        },
      },
      overlay_theme: "dark",
      alignment: "center",
    },

    // Our Mission - Two Column Text
    {
      id: "about",
      type: "two_column_text",
      left_column: {
        heading: "Our Mission",
      },
      right_column: {
        body: "<p>As one of the original feel-good fashion brands, our goal is to transform shopping with a digital-first omnichannel experience that stays true to the high street stores our customers first fell in love with.</p>",
        cta: {
          label: "About us",
          url: "/about",
          style: "secondary",
        },
      },
    },

    // Stats Section
    {
      id: "stats-main",
      type: "stats",
      heading: "Our ambition is to be the no.1<br />fashion destination for every body.",
      items: [
        { value: "338", label: "UK Store Count" },
        { value: "10m+", label: "Loyal Customers" },
        { value: "£769.2m", label: "Total Revenue" },
      ],
      background_style: "light",
    },

    // Kind to Our Core - Image Overlay Section
    {
      id: "esg",
      type: "image_overlay",
      heading: "Kind to Our Core",
      body: "We want to make as little impact as possible on our planet and we're committed to achieving this through transparent goals that balance demand for our products with our environmental and social responsibility. We call it being \"Kind to Our Core\".",
      image: {
        url: "/images/esg-forest.jpg",
        alt: "Aerial view of a lush green forest",
      },
      overlay_theme: "dark",
      cta: {
        label: "ESG at New Look",
        url: "/esg",
        style: "secondary",
      },
    },

    // ESG Icon Grid
    {
      id: "esg-cards",
      type: "icon_grid",
      columns: 3,
      items: [
        {
          icon: { url: "lucide:leaf", alt: "Leaf icon" },
          title: "Kind by Design",
          description: "Our more sustainable products range from denim that relies on less water and chemicals, to knitwear that uses recycled fibres.",
        },
        {
          icon: { url: "lucide:hand-heart", alt: "Hand heart icon" },
          title: "Charitable Giving",
          description: "We make charitable donations to causes we care about, and organise programmes that help our customers donate their clothing rather than sending it to landfill.",
        },
        {
          icon: { url: "lucide:globe", alt: "Globe icon" },
          title: "Better Retail Better World",
          description: "We're proud to be a part of the British Retail Consortium's Better Retail Better World initiative, which aims to help retailers address some of the biggest global challenges to come.",
        },
      ],
    },

    // People & Inclusion - Image/Text
    {
      id: "people",
      type: "image_text",
      layout: "image_left",
      image: {
        asset: {
          url: "/images/people-inclusion.jpg",
          alt: "Our approach to equality, diversity and inclusivity in action",
        },
        alt: "Our approach to equality, diversity and inclusivity in action",
      },
      content: {
        heading: "We're fostering an inspiring, inclusive culture built on a shared purpose and shared values.",
        body: "<p>With over 6,500 highly talented team members pulling together for our customers and each other, we're on a mission to spread that New Look feeling far and wide.</p>",
        cta: {
          label: "Meet our people",
          url: "/people",
          style: "secondary",
        },
      },
    },

    // Careers - Image/Text (reversed)
    {
      id: "careers",
      type: "image_text",
      layout: "image_right",
      image: {
        asset: {
          url: "/images/careers-portrait.jpg",
          alt: "Working at New Look",
        },
        alt: "Working at New Look",
      },
      content: {
        heading: "Careers at New Look",
        body: "<p>Channel that New Look feeling into a bold new career opportunity. Start your next adventure in retail, digital, distribution and beyond.</p>",
        cta: {
          label: "Join us",
          url: "/careers",
          style: "secondary",
        },
      },
    },

    // Financials & Media Signposts
    {
      id: "financials",
      type: "signpost_grid",
      items: [
        {
          title: "Financials and business reporting",
          link_text: "Download our reports",
          url: "/financials",
          image: {
            url: "/images/financials-card.jpg",
            alt: "Financials and business reporting",
          },
        },
        {
          title: "Media",
          link_text: "All the latest news",
          url: "/media",
          image: {
            url: "/images/media-card.jpg",
            alt: "Media",
          },
        },
      ],
    },

    // Footer
    {
      id: "footer-main",
      type: "footer",
      logo: {
        url: "/images/logo.svg",
        alt: "New Look",
      },
      shop_url: "https://www.newlook.com",
      company_links: [
        { label: "About Us", href: "/about" },
        { label: "ESG & Sustainability", href: "/esg" },
        { label: "Media", href: "/media" },
        { label: "Careers", href: "/careers" },
        { label: "Financial & Business Reporting", href: "/financials" },
        { label: "Contact Us", href: "/contact" },
      ],
      social_links: [
        { platform: "LinkedIn", url: "#" },
        { platform: "Twitter", url: "#" },
        { platform: "Facebook", url: "#" },
        { platform: "Instagram", url: "#" },
        { platform: "Pinterest", url: "#" },
        { platform: "YouTube", url: "#" },
        { platform: "TikTok", url: "#" },
      ],
      app_store_url: "#",
      google_play_url: "#",
      legal_links: [
        { label: "T&Cs", href: "/terms" },
        { label: "Accessibility", href: "/accessibility" },
        { label: "Cookies", href: "/cookies" },
        { label: "Modern Slavery", href: "/modern-slavery" },
        { label: "Sitemap", href: "/sitemap" },
      ],
    },
  ],
};
