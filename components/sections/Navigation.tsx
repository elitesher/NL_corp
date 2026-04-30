"use client";

import { useState } from "react";
import type { NavigationSection } from "@/types/cms";
import { Search, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

interface NavigationProps {
  data: NavigationSection;
}

// New Look SVG Logo component for inline rendering
function NewLookLogo({ className }: { className?: string }) {
  return (
    <svg width="120" height="24" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M84.3501 118.337H89.1733V79.7514H84.3501V111.343L55.411 79.7514H50.5878V118.337H55.411V86.745L84.3501 118.337Z" fill="currentColor"/>
      <path d="M218.676 137.63H211.2L183.226 159.093V137.63H178.402V176.215H183.226V164.881L193.354 156.922L213.612 176.215H220.605L197.213 154.029L218.676 137.63Z" fill="currentColor"/>
      <path d="M145.846 137.147C134.994 137.147 126.071 146.07 126.071 156.922C126.071 167.775 134.994 176.697 145.846 176.697C156.698 176.697 165.621 167.775 165.621 156.922C165.621 145.829 156.698 137.147 145.846 137.147ZM161.039 156.681C161.039 164.881 154.286 171.633 146.087 171.633C137.888 171.633 131.135 164.881 131.135 156.681C131.135 148.482 137.888 141.729 146.087 141.729C154.286 141.729 161.039 148.482 161.039 156.681Z" fill="currentColor"/>
      <path d="M95.6846 137.147C84.8325 137.147 75.9096 146.07 75.9096 156.922C75.9096 167.775 84.8325 176.697 95.6846 176.697C106.537 176.697 115.46 167.775 115.46 156.922C115.46 145.829 106.537 137.147 95.6846 137.147ZM110.637 156.681C110.637 164.881 103.884 171.633 95.6846 171.633C87.4852 171.633 80.7327 164.881 80.7327 156.681C80.7327 148.482 87.4852 141.729 95.6846 141.729C103.884 141.729 110.637 148.482 110.637 156.681Z" fill="currentColor"/>
      <path d="M69.3983 171.392H41.1826V137.63H36.3594V176.215H69.3983V171.392Z" fill="currentColor"/>
      <path d="M193.113 109.655C191.184 104.832 181.055 79.7514 181.055 79.7514H177.679L165.621 109.655L153.804 79.7514H148.74L164.174 118.337H167.55L179.367 88.4331L191.425 118.337H194.801L210.235 79.7514H205.171L193.113 109.655Z" fill="currentColor"/>
      <path d="M110.395 101.456H133.064V96.6326H110.395V84.5746H138.611V79.7514H105.813V118.337H109.672H138.611V113.514H110.395V101.456Z" fill="currentColor"/>
    </svg>
  );
}

export function Navigation({ data }: NavigationProps) {
  const { links } = data;
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
      <nav className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-[72px]">
        <a href="/" className="flex-shrink-0" aria-label="New Look Home">
          <NewLookLogo className="h-9 md:h-11 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-10">
            {links.map((link) => (
              <NavigationMenuItem key={link.label}>
                <NavigationMenuLink
                  href={link.href}
                  className="text-body-s text-foreground/80 hover:text-foreground transition-colors duration-300 tracking-[0.01em] font-body bg-transparent"
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-0.5">
          <Button variant="ghost" size="icon" aria-label="Search" className="text-foreground/70 hover:text-foreground hover:bg-transparent">
            <Search className="w-[18px] h-[18px]" strokeWidth={1.5} />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Contact" className="text-foreground/70 hover:text-foreground hover:bg-transparent">
            <Mail className="w-[18px] h-[18px]" strokeWidth={1.5} />
          </Button>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-foreground/70 hover:text-foreground hover:bg-transparent" aria-label="Open menu">
                <Menu className="w-5 h-5" strokeWidth={1.5} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80">
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {links.map((link) => (
                  <SheetClose key={link.label} asChild>
                    <a
                      href={link.href}
                      className="text-body-m text-foreground/80 hover:text-foreground transition-colors duration-300 py-2 font-body"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
