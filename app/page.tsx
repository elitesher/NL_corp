"use client";

import { useState } from "react";
import { Search, ArrowRight, Leaf, HandHeart, Globe, Mail, ChevronDown, Menu, X } from "lucide-react";
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram, FaPinterestP, FaYoutube, FaTiktok } from "react-icons/fa6";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Image from "next/image";

// Navigation data with submenus matching the original site
const navLinks = [
  {
    label: "About Us",
    href: "#about",
    columns: [
      [
        { label: "Our mission", href: "/about/mission", featured: true },
        { label: "Meet our team", href: "/about/team" },
      ],
      [
        { label: "Our customers", href: "/about/customers" },
        { label: "Our people", href: "/about/people" },
      ],
      [
        { label: "Corporate governance", href: "/about/governance" },
      ],
    ],
  },
  {
    label: "ESG & Sustainability",
    href: "#esg",
    columns: [
      [
        { label: "Sustainability Reports", href: "/esg/reports" },
        { label: "Our Partners", href: "/esg/partners" },
      ],
      [
        { label: "Responsible Business", href: "/esg/responsible-business", featured: true },
        { label: "Positive Local Impact", href: "/esg/local-impact", featured: true },
      ],
      [
        { label: "Responsible & Circular Product", href: "/esg/circular-product", featured: true },
        { label: "Governance", href: "/esg/governance", featured: true },
      ],
    ],
  },
  {
    label: "Media",
    href: "#media",
    columns: [
      [
        { label: "Newsroom", href: "/media/newsroom", featured: true },
      ],
      [
        { label: "Multimedia library", href: "/media/library" },
      ],
    ],
  },
  {
    label: "Careers",
    href: "#careers",
    columns: [
      [
        { label: "Our locations", href: "/careers/locations" },
      ],
      [
        { label: "Careers FAQs", href: "/careers/faqs" },
      ],
    ],
  },
  {
    label: "Financials and Business Reporting",
    href: "#financials",
    columns: [
      [
        { label: "Financial highlights", href: "/financials/highlights" },
      ],
      [
        { label: "Reports and publications", href: "/financials/reports" },
      ],
    ],
  },
];

const stats = [
  { value: "338", label: "UK Store Count", color: "text-primary" },
  { value: "10m+", label: "Loyal Customers", color: "text-primary" },
  { value: "£769.2m", label: "Total Revenue", color: "text-primary" },
];

const esgCards = [
  {
    icon: Leaf,
    title: "Kind by Design",
    text: "Our more sustainable products range from denim that relies on less water and chemicals, to knitwear that uses recycled fibres.",
  },
  {
    icon: HandHeart,
    title: "Charitable Giving",
    text: "We make charitable donations to causes we care about, and organise programmes that help our customers donate their clothing rather than sending it to landfill.",
  },
  {
    icon: Globe,
    title: "Better Retail Better World",
    text: "We're proud to be a part of the British Retail Consortium's Better Retail Better World initiative, which aims to help retailers address some of the biggest global challenges to come.",
  },
];

const socialLinks = [
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
  { icon: FaTwitter, label: "Twitter", href: "#" },
  { icon: FaFacebookF, label: "Facebook", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaPinterestP, label: "Pinterest", href: "#" },
  { icon: FaYoutube, label: "YouTube", href: "#" },
  { icon: FaTiktok, label: "TikTok", href: "#" },
];

const footerNav = [
  { label: "About Us", href: "/about" },
  { label: "ESG & Sustainability", href: "/esg" },
  { label: "Media", href: "/media" },
  { label: "Careers", href: "/careers" },
  { label: "Financials and Business Reporting", href: "/financials" },
  { label: "Contact Us", href: "/contact" },
];

const footerLegal = [
  { label: "Terms & conditions", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Cookies", href: "/cookies" },
  { label: "Modern slavery statement", href: "/modern-slavery" },
  { label: "Sitemap", href: "/sitemap" },
];

// NavDropdown component for desktop
function NavDropdown({ item, isOpen, onMouseEnter, onMouseLeave }: {
  item: typeof navLinks[0];
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <li
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        className="flex items-center gap-1 text-body-s text-foreground/80 hover:text-foreground transition-colors duration-300 tracking-[0.01em] font-body py-2"
      >
        {item.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {/* Dropdown menu */}
      <div
        className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}
      >
        <div className="bg-background border border-foreground/10 shadow-lg min-w-[280px] p-6">
          <div className="flex gap-8">
            {item.columns.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-3">
                {column.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-2 text-body-s text-foreground/70 hover:text-foreground transition-colors duration-200 whitespace-nowrap"
                  >
                    {link.label}
                    {link.featured && (
                      <ArrowRight className="w-3 h-3" />
                    )}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}

// Mobile menu component
function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-foreground/50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-background overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-foreground/10">
          <span className="font-heading text-title-s">Menu</span>
          <button onClick={onClose} className="p-2 -mr-2">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="p-6">
          {navLinks.map((item) => (
            <div key={item.label} className="border-b border-foreground/10">
              <button
                onClick={() => setExpandedItem(expandedItem === item.label ? null : item.label)}
                className="flex items-center justify-between w-full py-4 text-body-m font-body"
              >
                {item.label}
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expandedItem === item.label ? 'rotate-180' : ''}`} />
              </button>
              {expandedItem === item.label && (
                <div className="pb-4 pl-4 flex flex-col gap-3">
                  {item.columns.flat().map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-body-s text-foreground/70 hover:text-foreground transition-colors"
                      onClick={onClose}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [missionRef] = useScrollReveal();
  const [ambitionRef] = useScrollReveal();
  const [esgRef] = useScrollReveal();
  const [esgCardsRef] = useScrollReveal();
  const [peopleRef] = useScrollReveal();
  const [careersRef] = useScrollReveal();
  const [signpostsRef] = useScrollReveal();

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* ===== NAVIGATION ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md">
        <nav className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-[72px]">
          <a href="/" className="flex-shrink-0" aria-label="New Look Home">
            <svg width="120" height="24" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9 md:h-11 w-auto">
              <path d="M84.3501 118.337H89.1733V79.7514H84.3501V111.343L55.411 79.7514H50.5878V118.337H55.411V86.745L84.3501 118.337Z" fill="currentColor"/>
              <path d="M218.676 137.63H211.2L183.226 159.093V137.63H178.402V176.215H183.226V164.881L193.354 156.922L213.612 176.215H220.605L197.213 154.029L218.676 137.63Z" fill="currentColor"/>
              <path d="M145.846 137.147C134.994 137.147 126.071 146.07 126.071 156.922C126.071 167.775 134.994 176.697 145.846 176.697C156.698 176.697 165.621 167.775 165.621 156.922C165.621 145.829 156.698 137.147 145.846 137.147ZM161.039 156.681C161.039 164.881 154.286 171.633 146.087 171.633C137.888 171.633 131.135 164.881 131.135 156.681C131.135 148.482 137.888 141.729 146.087 141.729C154.286 141.729 161.039 148.482 161.039 156.681Z" fill="currentColor"/>
              <path d="M95.6846 137.147C84.8325 137.147 75.9096 146.07 75.9096 156.922C75.9096 167.775 84.8325 176.697 95.6846 176.697C106.537 176.697 115.46 167.775 115.46 156.922C115.46 145.829 106.537 137.147 95.6846 137.147ZM110.637 156.681C110.637 164.881 103.884 171.633 95.6846 171.633C87.4852 171.633 80.7327 164.881 80.7327 156.681C80.7327 148.482 87.4852 141.729 95.6846 141.729C103.884 141.729 110.637 148.482 110.637 156.681Z" fill="currentColor"/>
              <path d="M69.3983 171.392H41.1826V137.63H36.3594V176.215H69.3983V171.392Z" fill="currentColor"/>
              <path d="M193.113 109.655C191.184 104.832 181.055 79.7514 181.055 79.7514H177.679L165.621 109.655L153.804 79.7514H148.74L164.174 118.337H167.55L179.367 88.4331L191.425 118.337H194.801L210.235 79.7514H205.171L193.113 109.655Z" fill="currentColor"/>
              <path d="M110.395 101.456H133.064V96.6326H110.395V84.5746H138.611V79.7514H105.813V118.337H109.672H138.611V113.514H110.395V101.456Z" fill="currentColor"/>
            </svg>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <NavDropdown
                key={item.label}
                item={item}
                isOpen={openDropdown === item.label}
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              />
            ))}
          </ul>

          <div className="flex items-center gap-1">
            <a href="/search" aria-label="Search" className="p-3 text-foreground/70 hover:text-foreground transition-colors duration-300">
              <Search className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </a>
            <a href="/contact" aria-label="Contact" className="hidden md:flex p-3 text-foreground/70 hover:text-foreground transition-colors duration-300">
              <Mail className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </a>
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-3 text-foreground/70 hover:text-foreground transition-colors duration-300"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <main>
        {/* ===== HERO SECTION ===== */}
        <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-top"
          >
            <source src="/videos/hero-fashion.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-foreground/25" />
          <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 md:px-12 max-w-[1440px] mx-auto">
            <h1 className="font-heading font-bold text-title-l md:text-jumbo text-white leading-tight max-w-2xl reveal-up">
              We&apos;re dedicated to inspiring
              <br />
              <em className="not-italic text-primary-foreground">&quot;that New Look feeling&quot;</em>
            </h1>
          </div>
        </section>

        {/* ===== TAGLINE ===== */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
            <h2 className="font-heading font-normal text-title-m md:text-title-l text-foreground leading-relaxed max-w-4xl mx-auto">
              We are the feel-good fashion brand making style accessible and fun so that everyone can experience that New Look feeling.
            </h2>
          </div>
        </section>

        {/* ===== OUR MISSION ===== */}
        <section id="about" className="py-16 md:py-24 bg-background relative overflow-hidden scroll-mt-20" ref={missionRef}>
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-start">
              {/* Image */}
              <div className="lg:col-span-5 relative aspect-[4/5] overflow-hidden" data-reveal="scale">
                <Image
                  src="/images/mission-fashion.jpg"
                  alt="About Us"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Content */}
              <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center" data-reveal="right">
                <h2 className="font-heading font-normal text-title-l md:text-jumbo text-foreground leading-[1.1]">
                  Our Mission
                </h2>
                <p className="mt-8 text-body-m text-muted-foreground font-body font-normal leading-relaxed">
                  As one of the original feel-good fashion brands, our goal is to transform shopping with a digital-first omnichannel experience that stays true to the high street stores our customers first fell in love with.
                </p>
                <a
                  href="/about"
                  className="mt-10 link-slide text-body-s font-body font-medium text-foreground hover:text-primary self-start"
                >
                  About us
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== OUR AMBITION / STATS ===== */}
        <section className="py-16 md:py-24 bg-background relative overflow-hidden" ref={ambitionRef}>
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-start">
              {/* Image */}
              <div className="lg:col-span-5 relative aspect-[4/5] overflow-hidden order-2 lg:order-1" data-reveal="scale">
                <Image
                  src="/images/hero-fashion.jpg"
                  alt="Our Vision"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Content */}
              <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center order-1 lg:order-2" data-reveal="right">
                <h2 className="font-heading font-normal text-title-l md:text-jumbo text-foreground leading-snug">
                  Our ambition is to be the no.1 fashion destination for every body.
                </h2>
              </div>
            </div>
            
            {/* Stats */}
            <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-0">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  data-reveal="counter"
                  data-reveal-delay={String(i + 1)}
                  className={`flex flex-col items-center gap-4 py-10 md:py-0 ${
                    i < stats.length - 1
                      ? "border-b md:border-b-0 md:border-r border-foreground/15"
                      : ""
                  } ${i > 0 ? "md:pl-14" : ""} ${i < stats.length - 1 ? "md:pr-14" : ""}`}
                >
                  <span className={`font-heading text-display ${stat.color} font-normal`}>
                    {stat.value}
                  </span>
                  <span className="text-micro text-muted-foreground font-body font-medium uppercase tracking-[0.2em]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== KIND TO OUR CORE ===== */}
        <section id="esg" className="relative overflow-hidden scroll-mt-20" ref={esgRef}>
          <div className="relative w-full min-h-[75vh]">
            <Image
              src="/images/esg-forest.jpg"
              alt="Lush Green Forest"
              fill
              className="object-cover"
              priority={false}
            />
            <div className="absolute inset-0 bg-foreground/45" />
            <div className="relative z-10 min-h-[75vh] px-6 md:px-12 pb-16 md:pb-24 max-w-[1440px] mx-auto items-start justify-end flex flex-col">
              <div className="max-w-3xl">
                <h3 className="font-heading font-bold text-title-l text-white leading-snug" data-reveal>
                  Kind to Our Core
                </h3>
                <p className="mt-6 text-body-m text-white/90 max-w-xl font-body" data-reveal data-reveal-delay="1">
                  We want to make as little impact as possible on our planet and we&apos;re committed to achieving this through transparent goals that balance demand for our products with our environmental and social responsibility. We call it being &quot;Kind to Our Core&quot;.
                </p>
                <a
                  href="/esg"
                  className="mt-8 link-slide text-body-s font-body font-medium text-white hover:text-primary"
                  data-reveal
                  data-reveal-delay="2"
                >
                  ESG at New Look
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* 3 icon cards */}
          <div className="bg-background py-12 md:py-16" ref={esgCardsRef}>
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
                {esgCards.map((card, i) => {
                  const IconComp = card.icon;
                  return (
                    <div key={card.title} className="flex flex-col" data-reveal data-reveal-delay={String(i + 1)}>
                      <div className="w-10 h-10 rounded-full border border-foreground/15 flex items-center justify-center mb-6">
                        <IconComp className="w-4 h-4 text-foreground" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-heading font-bold text-title-s text-foreground mb-3">
                        {card.title}
                      </h3>
                      <p className="text-body-s text-muted-foreground leading-relaxed font-body">
                        {card.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ===== PEOPLE & INCLUSION ===== */}
        <section className="bg-background py-16 md:py-24" ref={peopleRef}>
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center">
              {/* Image */}
              <div className="lg:col-span-6 relative aspect-[4/3] overflow-hidden" data-reveal="scale">
                <Image
                  src="/images/people-inclusion.jpg"
                  alt="Our approach to equality, diversity and inclusivity in action"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Content */}
              <div className="lg:col-span-5 lg:col-start-8 flex flex-col justify-center">
                <h3 className="font-heading font-normal text-title-l text-foreground leading-tight" data-reveal="right">
                  We&apos;re fostering an inspiring, inclusive culture built on a shared purpose and shared values.
                </h3>
                <p className="mt-6 text-body-m text-muted-foreground max-w-body font-body leading-relaxed" data-reveal="right" data-reveal-delay="1">
                  With over 6,500 highly talented team members pulling together for our customers and each other, we&apos;re on a mission to spread that New Look feeling far and wide.
                </p>
                <a
                  href="/about/people"
                  className="mt-8 link-slide text-body-s font-body font-medium text-foreground hover:text-primary self-start"
                  data-reveal="right"
                  data-reveal-delay="2"
                >
                  Meet our people
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CAREERS ===== */}
        <section id="careers" className="bg-background py-16 md:py-24 scroll-mt-20" ref={careersRef}>
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center">
              {/* Content */}
              <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
                <h2 className="font-heading font-normal text-title-l text-foreground leading-tight" data-reveal="left">
                  Careers at New Look
                </h2>
                <p className="mt-6 text-body-m text-muted-foreground max-w-body font-body leading-relaxed" data-reveal="left" data-reveal-delay="1">
                  Channel that New Look feeling into a bold new career opportunity. Start your next adventure in retail, digital, distribution and beyond.
                </p>
                <a
                  href="/careers"
                  className="mt-8 link-slide text-body-s font-body font-medium text-foreground hover:text-primary self-start"
                  data-reveal="left"
                  data-reveal-delay="2"
                >
                  Join us
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
              {/* Image */}
              <div className="lg:col-span-6 lg:col-start-7 relative aspect-[4/3] overflow-hidden order-1 lg:order-2" data-reveal="scale">
                <Image
                  src="/images/careers-portrait.jpg"
                  alt="Working at New Look"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== FINANCIALS & MEDIA SIGNPOSTS ===== */}
        <section id="financials" className="bg-primary-foreground scroll-mt-20" ref={signpostsRef}>
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2">
            {/* Financials */}
            <a href="/financials" className="group block relative overflow-hidden" data-reveal data-reveal-delay="1">
              <div className="overflow-hidden relative aspect-[4/3]">
                <Image
                  src="/images/financials-card.jpg"
                  alt="Financials and business reporting"
                  fill
                  className="object-cover img-zoom"
                />
              </div>
              <div className="px-6 md:px-12 py-8 md:py-10 bg-background">
                <h2 className="font-heading font-normal text-title-m text-foreground">
                  Financials and business reporting
                </h2>
                <span className="mt-4 link-slide text-body-s font-body font-medium text-foreground hover:text-primary">
                  Download our reports
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </a>
            {/* Media */}
            <div id="media" className="scroll-mt-20">
              <a href="/media" className="group block relative overflow-hidden" data-reveal data-reveal-delay="2">
                <div className="overflow-hidden relative aspect-[4/3]">
                  <Image
                    src="/images/media-card.jpg"
                    alt="Media"
                    fill
                    className="object-cover img-zoom"
                  />
                </div>
                <div className="px-6 md:px-12 py-8 md:py-10 bg-background">
                  <h2 className="font-heading font-normal text-title-m text-foreground">
                    Media
                  </h2>
                  <span className="mt-4 link-slide text-body-s font-body font-medium text-foreground hover:text-primary">
                    All the latest news
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-muted">
        <div className="border-t border-foreground/10" />
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-6">
            {/* Nav links */}
            <nav className="lg:col-span-6 flex flex-wrap gap-x-8 gap-y-3">
              {footerNav.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-body-s text-foreground/70 hover:text-foreground transition-colors font-body"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Shop link */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              <p className="text-body-s text-foreground/70 font-body">
                Shop online at{" "}
                <a
                  href="https://www.newlook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground transition-colors"
                >
                  newlook.com
                </a>
              </p>
            </div>

            {/* Social icons */}
            <div className="lg:col-span-3 flex gap-4 items-start">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full border border-foreground/15 flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-foreground/30 transition-colors duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Legal */}
          <div className="mt-16 pt-8 border-t border-foreground/10">
            <p className="text-micro text-foreground/50 font-body mb-4">
              New Look Retail Holdings Limited, a company registered in Jersey (No. 128640) is the holding company of New Look Retailers Limited
            </p>
            <div className="flex flex-wrap items-center gap-x-1 text-micro text-foreground/50 font-body">
              <span>&copy; {new Date().getFullYear()} New Look Retailers Limited</span>
              {footerLegal.map((link) => (
                <span key={link.label}>
                  <span className="mx-1">.</span>
                  <a href={link.href} className="hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
