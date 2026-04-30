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

export function Navigation({ data }: NavigationProps) {
  const { links } = data;
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
      <nav className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-[72px]">
        <a href="/" className="flex-shrink-0" aria-label="New Look Home">
          <NewLookLogo className="w-[50px] md:w-[60px] h-auto text-primary" />
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
