import { Search, ArrowRight, Leaf, HandHeart, Globe, Mail } from "lucide-react";
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram, FaPinterestP, FaYoutube, FaTiktok } from "react-icons/fa6";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import heroImg from "@/assets/hero-fashion.jpg";
import esgForestImg from "@/assets/esg-forest.jpg";
import peopleImg from "@/assets/people-inclusion.jpg";
import careersImg from "@/assets/careers-portrait.jpg";
import financialsImg from "@/assets/financials-card.jpg";
import mediaImg from "@/assets/media-card.jpg";

const navLinks = [
  "About Us",
  "ESG & Sustainability",
  "Media",
  "Careers",
  "Financial & Business Reporting",
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
  { icon: FaLinkedinIn, label: "LinkedIn" },
  { icon: FaTwitter, label: "Twitter" },
  { icon: FaFacebookF, label: "Facebook" },
  { icon: FaInstagram, label: "Instagram" },
  { icon: FaPinterestP, label: "Pinterest" },
  { icon: FaYoutube, label: "YouTube" },
  { icon: FaTiktok, label: "TikTok" },
];

const footerNav = [
  "About Us",
  "ESG & Sustainability",
  "Media",
  "Careers",
  "Financial & Business Reporting",
  "Contact Us",
];

const footerLegal = [
  "T&Cs",
  "Accessibility",
  "Cookies",
  "Modern Slavery",
  "Sitemap",
];

const Index = () => {
  const missionRef = useScrollReveal();
  const ambitionRef = useScrollReveal();
  const esgRef = useScrollReveal();
  const esgCardsRef = useScrollReveal();
  const peopleRef = useScrollReveal();
  const careersRef = useScrollReveal();
  const signpostsRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* ===== NAVIGATION ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
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

          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-body-s text-foreground/80 hover:text-foreground transition-colors duration-300 tracking-[0.01em] font-body"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-0.5">
            <button aria-label="Search" className="p-3 text-foreground/70 hover:text-foreground transition-colors duration-300">
              <Search className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </button>
            <button aria-label="Contact" className="p-3 text-foreground/70 hover:text-foreground transition-colors duration-300">
              <Mail className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </header>

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
              We're dedicated to inspiring
              <br />
              <em className="not-italic text-primary-foreground">"that New Look feeling"</em>
            </h1>
            <p className="mt-6 text-body-m md:text-title-s text-white/80 max-w-lg font-body reveal-up-delay font-normal">
              We are the feel-good fashion brand making style accessible and fun so that everyone can experience that New Look feeling.
            </p>
          </div>
        </section>

        {/* ===== OUR MISSION ===== */}
        <section className="py-20 md:py-20 bg-background relative overflow-hidden" ref={missionRef}>
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-20 items-start">
          <div className="lg:col-span-4" data-reveal="left">
                <h2 className="font-heading font-normal text-title-l md:text-jumbo text-foreground leading-[1.1]">
                  Our Mission
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6 flex flex-col justify-center" data-reveal="right">
                <p className="text-body-m text-muted-foreground font-body font-normal leading-relaxed">
                  As one of the original feel-good fashion brands, our goal is to transform shopping with a digital-first omnichannel experience that stays true to the high street stores our customers first fell in love with.
                </p>
                <a
                  href="#"
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
        <section className="pt-0 pb-20 md:pb-28 bg-primary-foreground relative overflow-hidden" ref={ambitionRef}>
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 text-center">
            <h2 className="font-heading font-normal text-title-l md:text-jumbo text-foreground leading-snug max-w-4xl mx-auto" data-reveal>
              Our ambition is to be the no.1<br />fashion destination for every body.
            </h2>
            <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-0">
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
                  <span className={`font-heading text-display ${stat.color} font-normal`} style={{ fontFamily: "'New Look Supreme', Georgia, serif" }}>
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
        <section className="relative overflow-hidden" ref={esgRef}>
          <div className="relative w-full min-h-[75vh]">
            <img
              src={esgForestImg}
              alt="Aerial view of a lush green forest"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              width={1280}
              height={720}
            />
            <div className="absolute inset-0 bg-foreground/45" />
            <div className="relative z-10 min-h-[75vh] px-6 md:px-12 pb-16 md:pb-24 max-w-[1440px] mx-auto items-start justify-end flex flex-col">
              <div className="max-w-3xl">
                <h2 className="font-heading font-bold text-title-l text-white leading-snug" data-reveal>
                  Kind to Our Core
                </h2>
                <p className="mt-6 text-body-m text-white/80 max-w-xl font-body" data-reveal data-reveal-delay="1">
                  We want to make as little impact as possible on our planet and we're committed to achieving this through transparent goals that balance demand for our products with our environmental and social responsibility. We call it being "Kind to Our Core".
                </p>
                <a
                  href="#"
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
          <div className="bg-background py-10 md:py-14" ref={esgCardsRef}>
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
        <section className="bg-background" ref={peopleRef}>
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-10 lg:gap-x-16 px-6 md:px-12 lg:px-16 xl:px-24 py-10 md:py-14 items-center">
            <div className="overflow-hidden" data-reveal="scale">
              <img
                src={peopleImg}
                alt="Our approach to equality, diversity and inclusivity in action"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
                width={960}
                height={720}
              />
            </div>
            <div className="flex flex-col justify-center pt-10 lg:pt-0">
              <h2 className="font-heading font-normal text-title-l text-foreground leading-tight" data-reveal="right">
                We're fostering an inspiring, inclusive culture built on a shared purpose and shared values.
              </h2>
              <p className="mt-6 text-body-m text-muted-foreground max-w-body font-body leading-relaxed" data-reveal="right" data-reveal-delay="1">
                With over 6,500 highly talented team members pulling together for our customers and each other, we're on a mission to spread that New Look feeling far and wide.
              </p>
              <a
                href="#"
                className="mt-8 link-slide text-body-s font-body font-medium text-foreground hover:text-primary self-start"
                data-reveal="right"
                data-reveal-delay="2"
              >
                Meet our people
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* ===== CAREERS ===== */}
        <section className="bg-background" ref={careersRef}>
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-10 lg:gap-x-16 px-6 md:px-12 lg:px-16 xl:px-24 py-10 md:py-14 items-center">
            <div className="flex flex-col justify-center order-2 lg:order-1 pt-8 lg:pt-0">
              <h2 className="font-heading font-normal text-title-l text-foreground leading-tight" data-reveal="left">
                Careers at New Look
              </h2>
              <p className="mt-6 text-body-m text-muted-foreground max-w-body font-body leading-relaxed" data-reveal="left" data-reveal-delay="1">
                Channel that New Look feeling into a bold new career opportunity. Start your next adventure in retail, digital, distribution and beyond.
              </p>
              <a
                href="#"
                className="mt-8 link-slide text-body-s font-body font-medium text-foreground hover:text-primary self-start"
                data-reveal="left"
                data-reveal-delay="2"
              >
                Join us
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="overflow-hidden order-1 lg:order-2" data-reveal="scale">
              <img
                src={careersImg}
                alt="Working at New Look"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
                width={960}
                height={720}
              />
            </div>
          </div>
        </section>

        {/* ===== FINANCIALS & MEDIA SIGNPOSTS ===== */}
        <section className="bg-nl-ice-white bg-primary-foreground" ref={signpostsRef}>
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2">
            {/* Financials */}
            <a href="#" className="group block relative overflow-hidden" data-reveal data-reveal-delay="1">
              <div className="overflow-hidden">
                <img
                  src={financialsImg}
                  alt="Financials and business reporting"
                  className="w-full aspect-[4/3] object-cover img-zoom"
                  loading="lazy"
                  width={640}
                  height={360}
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
            <a href="#" className="group block relative overflow-hidden" data-reveal data-reveal-delay="2">
              <div className="overflow-hidden">
                <img
                  src={mediaImg}
                  alt="Media"
                  className="w-full aspect-[4/3] object-cover img-zoom"
                  loading="lazy"
                  width={640}
                  height={360}
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
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-muted">
        <div className="border-t border-foreground/10" />
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-6">
            {/* Brand + shop link */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              <svg width="120" height="24" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 md:h-12 w-auto text-foreground self-start">
                <path d="M84.3501 118.337H89.1733V79.7514H84.3501V111.343L55.411 79.7514H50.5878V118.337H55.411V86.745L84.3501 118.337Z" fill="currentColor"/>
                <path d="M218.676 137.63H211.2L183.226 159.093V137.63H178.402V176.215H183.226V164.881L193.354 156.922L213.612 176.215H220.605L197.213 154.029L218.676 137.63Z" fill="currentColor"/>
                <path d="M145.846 137.147C134.994 137.147 126.071 146.07 126.071 156.922C126.071 167.775 134.994 176.697 145.846 176.697C156.698 176.697 165.621 167.775 165.621 156.922C165.621 145.829 156.698 137.147 145.846 137.147ZM161.039 156.681C161.039 164.881 154.286 171.633 146.087 171.633C137.888 171.633 131.135 164.881 131.135 156.681C131.135 148.482 137.888 141.729 146.087 141.729C154.286 141.729 161.039 148.482 161.039 156.681Z" fill="currentColor"/>
                <path d="M95.6846 137.147C84.8325 137.147 75.9096 146.07 75.9096 156.922C75.9096 167.775 84.8325 176.697 95.6846 176.697C106.537 176.697 115.46 167.775 115.46 156.922C115.46 145.829 106.537 137.147 95.6846 137.147ZM110.637 156.681C110.637 164.881 103.884 171.633 95.6846 171.633C87.4852 171.633 80.7327 164.881 80.7327 156.681C80.7327 148.482 87.4852 141.729 95.6846 141.729C103.884 141.729 110.637 148.482 110.637 156.681Z" fill="currentColor"/>
                <path d="M69.3983 171.392H41.1826V137.63H36.3594V176.215H69.3983V171.392Z" fill="currentColor"/>
                <path d="M193.113 109.655C191.184 104.832 181.055 79.7514 181.055 79.7514H177.679L165.621 109.655L153.804 79.7514H148.74L164.174 118.337H167.55L179.367 88.4331L191.425 118.337H194.801L210.235 79.7514H205.171L193.113 109.655Z" fill="currentColor"/>
                <path d="M110.395 101.456H133.064V96.6326H110.395V84.5746H138.611V79.7514H105.813V118.337H109.672H138.611V113.514H110.395V101.456Z" fill="currentColor"/>
              </svg>
              <a
                href="https://www.newlook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-micro font-body font-medium uppercase tracking-[0.15em] text-foreground/60 hover:text-primary transition-colors duration-300 flex items-center gap-2"
              >
                Newlook.com Shop
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Company links */}
            <div className="lg:col-span-3 lg:col-start-5">
              <h3 className="text-micro font-body font-medium uppercase tracking-[0.2em] mb-6 text-foreground/40">
                Company
              </h3>
              <ul className="flex flex-col gap-3">
                {footerNav.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-body-s font-body text-foreground/70 hover:text-primary transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Download the App + Follow Us */}
            <div className="lg:col-span-4 lg:col-start-8 flex flex-col gap-8">
              <div>
                <h3 className="text-micro font-body font-medium uppercase tracking-[0.2em] mb-6 text-foreground/40">
                  Download the App
                </h3>
                <div className="flex items-center gap-3">
                  <a href="#" className="inline-block transition-opacity hover:opacity-80">
                    <div className="bg-foreground text-primary-foreground rounded-lg px-4 py-2.5 flex items-center gap-2.5 min-w-[140px]">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current flex-shrink-0">
                        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.86 9.28 4.84C10.56 4.81 11.78 5.72 12.57 5.72C13.36 5.72 14.83 4.62 16.4 4.8C17.07 4.83 18.89 5.08 20.05 6.79C19.93 6.87 17.58 8.21 17.61 11.04C17.64 14.37 20.5 15.49 20.53 15.5C20.5 15.57 20.08 17.05 19.03 18.57L18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                      </svg>
                      <div className="flex flex-col">
                        <span className="text-[9px] leading-tight font-body">Download on the</span>
                        <span className="text-sm font-semibold leading-tight font-body">App Store</span>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="inline-block transition-opacity hover:opacity-80">
                    <div className="bg-foreground text-primary-foreground rounded-lg px-4 py-2.5 flex items-center gap-2.5 min-w-[140px]">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" fill="#34A853"/>
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5Z" fill="#4285F4"/>
                        <path d="M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" fill="#EA4335"/>
                        <path d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12Z" fill="#FBBC05"/>
                      </svg>
                      <div className="flex flex-col">
                        <span className="text-[9px] leading-tight font-body uppercase tracking-wider">Get it on</span>
                        <span className="text-sm font-semibold leading-tight font-body">Google Play</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-micro font-body font-medium uppercase tracking-[0.2em] mb-6 text-foreground/40">
                  Follow Us
                </h3>
                <div className="flex items-center gap-5">
                  {socialLinks.map(({ icon: Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="text-foreground/50 hover:text-primary transition-colors duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Legal bar */}
          <div className="mt-16 pt-8 border-t border-foreground/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6">
              {footerLegal.map((link) => (
                <a key={link} href="#" className="text-micro font-body text-foreground/40 hover:text-primary transition-colors duration-300">
                  {link}
                </a>
              ))}
            </div>
            <p className="text-micro text-foreground/30 font-body">
              © {new Date().getFullYear()} New Look Retailers Limited
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
