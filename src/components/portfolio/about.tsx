'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const stats = [
  { value: '7+', label: 'Projects Shipped' },
  { value: '3', label: 'AI-Powered Apps' },
  { value: '1yr+', label: 'Production Experience' },
];

const terminalLines = [
  { prompt: true, command: 'whoami', output: 'Nabin Thapa' },
  { prompt: true, command: 'cat skills.txt', output: 'Full-Stack Dev | AI Integration' },
  { prompt: true, command: 'location', output: 'Kathmandu, Nepal' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-3">
            About Me
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full" />
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left Column - Terminal Card */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
          >
            <div className="rounded-xl border border-navy-accent bg-navy-card overflow-hidden h-full">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-navy-accent/50 border-b border-navy-accent">
                <div className="w-3 h-3 rounded-full bg-accent/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 font-mono text-xs text-text-secondary">
                  nabin@portfolio:~
                </span>
              </div>

              {/* Terminal Body */}
              <div className="p-5 md:p-6 font-mono text-sm md:text-base space-y-3">
                {terminalLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.4 }}
                  >
                    <div className="flex items-start gap-2">
                      <span className="text-accent font-bold shrink-0">{'>'}</span>
                      <span className="text-text-secondary">{line.command}</span>
                    </div>
                    <div className="text-text-primary ml-4 mt-1">{line.output}</div>
                  </motion.div>
                ))}

                {/* Blinking cursor line */}
                <div className="flex items-center gap-2 mt-4">
                  <span className="text-accent font-bold">{'>'}</span>
                  <span className="typewriter-cursor inline-block h-5" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Bio Text */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
            className="flex flex-col justify-center"
          >
            <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-5">
              I&apos;m Nabin — a full-stack developer based in Kathmandu, Nepal. I build web apps
              that are fast, functional, and production-ready. From AI-powered ed-tech platforms to
              e-commerce stores, I care about shipping real products that work, not just demos.
            </p>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-8">
              I&apos;m available for freelance projects globally — if you need a reliable developer
              who communicates clearly and delivers on time, let&apos;s work together.
            </p>

            {/* Download CV Button */}
            <div>
              <a
                href="/nabin-thapa-cv.pdf"
                download="Nabin-Thapa-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-accent text-accent font-display font-semibold text-sm md:text-base hover:bg-accent hover:text-white transition-colors duration-200"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats Counters */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="flex flex-col items-center p-6 rounded-xl bg-navy-card border border-navy-accent card-glow transition-shadow duration-300"
            >
              <span className="font-display text-3xl md:text-4xl font-bold text-accent">
                {stat.value}
              </span>
              <span className="font-sans text-sm md:text-base text-text-secondary mt-2 text-center">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
