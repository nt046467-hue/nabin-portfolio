'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Heart } from 'lucide-react';
import { FiverrIcon, FreelancerIcon } from '@/components/ui/brand-icons';
import { SOCIAL_LINKS } from '@/lib/constants';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  fiverr: FiverrIcon,
  freelancer: FreelancerIcon,
};

const socialLinksWithIcons = SOCIAL_LINKS.map((link) => ({
  ...link,
  icon: iconMap[link.iconSlug],
}));

export default function Footer() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <footer className="bg-navy-deep border-t border-navy-accent/50 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-6">
          {/* Name & Tagline */}
          <div className="text-center">
            <h3 className="font-display text-xl font-bold text-text-primary">
              Nabin Thapa
            </h3>
            <p className="font-sans text-sm text-text-secondary mt-1">
              Full-Stack Developer
            </p>
          </div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.5,
            }}
            className="flex items-center gap-3"
          >
            {socialLinksWithIcons.map(({ name, icon: Icon, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="flex items-center justify-center w-9 h-9 rounded-full border border-navy-accent/60 text-text-secondary hover:text-accent hover:border-accent hover:bg-accent/10 transition-all duration-200"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="section-divider w-full max-w-xs" />

          {/* Copyright */}
          <p className="font-sans text-xs text-text-secondary text-center">
            © 2026 Nabin Thapa. Built with Next.js &{' '}
            <Heart className="inline-block size-3 text-accent fill-accent align-middle" />{' '}
          </p>

          {/* Freelance badge */}
          <div className="flex items-center gap-2 bg-navy-accent/40 rounded-full px-4 py-1.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="font-sans text-xs text-text-secondary">
              Available for Freelance
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
