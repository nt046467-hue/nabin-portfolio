'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
] as const;

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Track scroll position for navbar background opacity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for active section highlighting
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    NAV_LINKS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        });
      }, observerOptions);

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 border-b border-navy-accent/50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-deep/90 backdrop-blur-md shadow-lg shadow-navy-deep/50'
          : 'bg-navy-deep/80 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 group"
            aria-label="Go to home"
          >
            <span className="font-display text-2xl font-bold text-accent transition-colors group-hover:text-accent-hover">
              Nabin
            </span>
            <span className="font-display text-2xl font-light text-text-secondary transition-colors group-hover:text-text-primary">
              .
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeSection === id
                    ? 'text-accent'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {label}
                {activeSection === id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-accent rounded-full"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-text-secondary hover:text-text-primary hover:bg-navy-accent/50"
                  aria-label="Open menu"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-navy-deep border-navy-accent/50 w-72"
              >
                <SheetHeader>
                  <SheetTitle className="font-display text-xl font-bold text-accent text-left">
                    Nabin<span className="font-light text-text-secondary">.</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-1 px-4 mt-4">
                  {NAV_LINKS.map(({ id, label }) => (
                    <SheetClose asChild key={id}>
                      <button
                        onClick={() => scrollToSection(id)}
                        className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 text-left ${
                          activeSection === id
                            ? 'bg-accent/10 text-accent'
                            : 'text-text-secondary hover:text-text-primary hover:bg-navy-accent/30'
                        }`}
                      >
                        {label}
                      </button>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
