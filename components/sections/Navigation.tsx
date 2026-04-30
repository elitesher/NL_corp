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

// New Look stacked text logo component
function NewLookLogo({ className }: { className?: string }) {
  return (
    <div className={`flex flex-col leading-none font-heading font-bold text-primary tracking-[0.25em] ${className || ""}`}>
      <span className="text-[14px] md:text-[16px]">NEW</span>
      <span className="text-[14px] md:text-[16px]">LOOK</span>
    </div>
  );
}

export function Navigation({ data }: NavigationProps) {
  const { links } = data;
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
      <nav className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-[72px]">
        <a href="/" className="flex-shrink-0" aria-label="New Look Home">
          <NewLookLogo />
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
