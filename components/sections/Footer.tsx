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
    <svg viewBox="0 0 60 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* NEW */}
      <path d="M0 1.5H1.2V11.5L8.5 1.5H9.7V14H8.5V4L1.2 14H0V1.5Z" fill="currentColor"/>
      <path d="M12.5 1.5H20V2.8H13.7V7H19.5V8.3H13.7V12.7H20V14H12.5V1.5Z" fill="currentColor"/>
      <path d="M25.5 8.5L21.5 1.5H23L26.2 7L29.4 1.5H30.9L26.9 8.5L31 14H29.5L26.2 10L22.9 14H21.4L25.5 8.5Z" fill="currentColor"/>
      {/* LOOK */}
      <path d="M0 18.5H1.2V29.7H7V31H0V18.5Z" fill="currentColor"/>
      <path d="M8.5 24.75C8.5 21.3 11.2 18.3 14.8 18.3C18.4 18.3 21.1 21.3 21.1 24.75C21.1 28.2 18.4 31.2 14.8 31.2C11.2 31.2 8.5 28.2 8.5 24.75ZM19.9 24.75C19.9 21.9 17.7 19.5 14.8 19.5C11.9 19.5 9.7 21.9 9.7 24.75C9.7 27.6 11.9 30 14.8 30C17.7 30 19.9 27.6 19.9 24.75Z" fill="currentColor"/>
      <path d="M23 24.75C23 21.3 25.7 18.3 29.3 18.3C32.9 18.3 35.6 21.3 35.6 24.75C35.6 28.2 32.9 31.2 29.3 31.2C25.7 31.2 23 28.2 23 24.75ZM34.4 24.75C34.4 21.9 32.2 19.5 29.3 19.5C26.4 19.5 24.2 21.9 24.2 24.75C24.2 27.6 26.4 30 29.3 30C32.2 30 34.4 27.6 34.4 24.75Z" fill="currentColor"/>
      <path d="M38 18.5H39.2V24L45.5 18.5H47.2L41.5 23.5L47.5 31H45.8L40.5 24.5L39.2 25.6V31H38V18.5Z" fill="currentColor"/>
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
            <NewLookLogo className="w-[60px] h-auto text-primary" />
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
