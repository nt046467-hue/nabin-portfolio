"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FiverrIcon, FreelancerIcon } from "@/components/ui/brand-icons";
import { SOCIAL_LINKS } from "@/lib/constants";

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

const ROLES = [
  "Full-Stack Developer",
  "Next.js Developer",
  "AI Integration Specialist",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Typewriter effect
  useEffect(() => {
    const currentRole = ROLES[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));

          if (displayText.length === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(currentRole.slice(0, displayText.length - 1));

          if (displayText.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % ROLES.length);
          }
        }
      },
      isDeleting ? 40 : 80,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
        delayChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{ paddingTop: "5rem" }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(233, 69, 96, 0.1) 0%, transparent 50%), linear-gradient(180deg, #1A1A2E 0%, #16213E 100%)",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center w-full max-w-3xl mx-auto px-5 sm:px-6 py-6"
      >
        {/* Profile photo - PROMINENT display */}
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
          <div className="relative inline-block">
            {/* Glow behind photo */}
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-50"
              style={{
                background:
                  "radial-gradient(circle, rgba(233, 69, 96, 0.5) 0%, transparent 70%)",
                transform: "scale(1.3)",
              }}
            />
            {/* Photo container */}
            <div
              className="relative rounded-full border-4 border-accent overflow-hidden shadow-2xl shadow-accent/30"
              style={{
                width: "clamp(140px, 35vw, 220px)",
                height: "clamp(140px, 35vw, 220px)",
              }}
            >
              <img
                src="/profile.png"
                alt="Nabin Thapa"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-3 sm:mb-4"
        >
          Nabin Thapa
        </motion.h1>

        {/* Typewriter tagline */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center min-h-[2rem] md:min-h-[2.5rem] mb-4 sm:mb-5"
        >
          <span className="font-mono text-base sm:text-lg md:text-xl text-accent">
            {displayText}
          </span>
          <span className="typewriter-cursor ml-0.5 h-5 md:h-7 inline-block" />
        </motion.div>

        {/* Location badge */}
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
          <span className="inline-flex items-center gap-2 bg-navy-accent/70 text-text-secondary text-xs sm:text-sm rounded-full px-4 py-2 font-sans border border-navy-accent">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
            Nepal · Available for Freelance
          </span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto max-w-md sm:max-w-none"
        >
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-accent hover:bg-accent-hover text-white rounded-lg px-7 sm:px-8 py-3.5 h-auto text-sm sm:text-base font-semibold shadow-lg shadow-accent/30 transition-all duration-200 hover:shadow-accent/50 hover:scale-105 w-full sm:w-auto"
          >
            Hire Me
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("projects")}
            className="border-2 border-accent text-accent hover:bg-accent/10 rounded-lg px-7 sm:px-8 py-3.5 h-auto text-sm sm:text-base font-semibold transition-all duration-200 hover:scale-105 w-full sm:w-auto"
          >
            View My Work
          </Button>
        </motion.div>

        {/* Social links - larger with labels on desktop */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-4 sm:gap-5"
        >
          {socialLinksWithIcons.map(({ name, icon: Icon, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-navy-accent/80 text-text-secondary hover:text-accent hover:border-accent hover:bg-accent/10 transition-all duration-200 hover:scale-110"
            >
              <Icon className="size-5 sm:size-5" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: prefersReducedMotion ? 0 : 2.5, duration: 1 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection("skills")}
          className="flex flex-col items-center gap-1 text-text-secondary hover:text-accent transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-[10px] sm:text-xs font-sans uppercase tracking-widest">
            Scroll
          </span>
          <ChevronDown className="size-4 sm:size-5 animate-bounce-down" />
        </button>
      </motion.div>
    </section>
  );
}
