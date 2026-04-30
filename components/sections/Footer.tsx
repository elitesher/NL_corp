"use client";

import type { FooterSection } from "@/types/cms";
import { ArrowRight } from "lucide-react";
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram, FaPinterestP, FaYoutube, FaTiktok } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface FooterProps {
  data: FooterSection;
}

// New Look SVG Logo component - stacked layout
function NewLookLogo({ className }: { className?: string }) {
  return (
    <svg width="120" height="100" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* NEW - top row, repositioned */}
      <g transform="translate(0, -40)">
        <path d="M84.3501 118.337H89.1733V79.7514H84.3501V111.343L55.411 79.7514H50.5878V118.337H55.411V86.745L84.3501 118.337Z" fill="currentColor"/>
        <path d="M110.395 101.456H133.064V96.6326H110.395V84.5746H138.611V79.7514H105.813V118.337H109.672H138.611V113.514H110.395V101.456Z" fill="currentColor"/>
        <path d="M193.113 109.655C191.184 104.832 181.055 79.7514 181.055 79.7514H177.679L165.621 109.655L153.804 79.7514H148.74L164.174 118.337H167.55L179.367 88.4331L191.425 118.337H194.801L210.235 79.7514H205.171L193.113 109.655Z" fill="currentColor"/>
      </g>
      {/* LOOK - bottom row */}
      <path d="M69.3983 171.392H41.1826V137.63H36.3594V176.215H69.3983V171.392Z" fill="currentColor"/>
      <path d="M95.6846 137.147C84.8325 137.147 75.9096 146.07 75.9096 156.922C75.9096 167.775 84.8325 176.697 95.6846 176.697C106.537 176.697 115.46 167.775 115.46 156.922C115.46 145.829 106.537 137.147 95.6846 137.147ZM110.637 156.681C110.637 164.881 103.884 171.633 95.6846 171.633C87.4852 171.633 80.7327 164.881 80.7327 156.681C80.7327 148.482 87.4852 141.729 95.6846 141.729C103.884 141.729 110.637 148.482 110.637 156.681Z" fill="currentColor"/>
      <path d="M145.846 137.147C134.994 137.147 126.071 146.07 126.071 156.922C126.071 167.775 134.994 176.697 145.846 176.697C156.698 176.697 165.621 167.775 165.621 156.922C165.621 145.829 156.698 137.147 145.846 137.147ZM161.039 156.681C161.039 164.881 154.286 171.633 146.087 171.633C137.888 171.633 131.135 164.881 131.135 156.681C131.135 148.482 137.888 141.729 146.087 141.729C154.286 141.729 161.039 148.482 161.039 156.681Z" fill="currentColor"/>
      <path d="M218.676 137.63H211.2L183.226 159.093V137.63H178.402V176.215H183.226V164.881L193.354 156.922L213.612 176.215H220.605L197.213 154.029L218.676 137.63Z" fill="currentColor"/>
    </svg>
  );
}

const socialIconMap: Record<string, React.ElementType> = {
  linkedin: FaLinkedinIn,
  twitter: FaTwitter,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  pinterest: FaPinterestP,
  youtube: FaYoutube,
  tiktok: FaTiktok,
};

export function Footer({ data }: FooterProps) {
  const { shop_url, company_links, social_links, app_store_url, google_play_url, legal_links } = data;

  return (
    <footer className="bg-muted">
      <Separator className="bg-foreground/10" />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-6">
          {/* Brand + shop link */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <NewLookLogo className="w-[50px] h-auto text-primary" />
            <Button
              variant="link"
              asChild
              className="p-0 h-auto text-micro font-body font-medium uppercase tracking-[0.15em] text-foreground/60 hover:text-primary gap-2"
            >
              <a href={shop_url} target="_blank" rel="noopener noreferrer">
                Newlook.com Shop
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </Button>
          </div>

          {/* Company links */}
          <div className="lg:col-span-3 lg:col-start-5">
            <h3 className="text-micro font-body font-medium uppercase tracking-[0.2em] mb-6 text-foreground/40">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {company_links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-body-s font-body text-foreground/70 hover:text-primary transition-colors duration-300">
                    {link.label}
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
                {app_store_url && (
                  <a href={app_store_url} className="inline-block transition-opacity hover:opacity-80">
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
                )}
                {google_play_url && (
                  <a href={google_play_url} className="inline-block transition-opacity hover:opacity-80">
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
                )}
              </div>
            </div>
            <div>
              <h3 className="text-micro font-body font-medium uppercase tracking-[0.2em] mb-6 text-foreground/40">
                Follow Us
              </h3>
              <div className="flex items-center gap-5">
                {social_links.map(({ platform, url }) => {
                  const Icon = socialIconMap[platform.toLowerCase()];
                  if (!Icon) return null;
                  return (
                    <Button
                      key={platform}
                      variant="ghost"
                      size="icon"
                      asChild
                      className="h-auto w-auto p-0 text-foreground/50 hover:text-primary hover:bg-transparent"
                    >
                      <a href={url} aria-label={platform}>
                        <Icon className="w-5 h-5" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Legal bar */}
        <Separator className="mt-16 bg-foreground/10" />
        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6">
            {legal_links.map((link) => (
              <a key={link.label} href={link.href} className="text-micro font-body text-foreground/40 hover:text-primary transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-micro text-foreground/30 font-body">
            © {new Date().getFullYear()} New Look Retailers Limited
          </p>
        </div>
      </div>
    </footer>
  );
}
