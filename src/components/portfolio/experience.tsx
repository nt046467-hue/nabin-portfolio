'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    period: '2025–Present',
    title: 'Freelance Full-Stack Developer',
    company: 'Freelancer.com & Fiverr',
    description:
      'Building custom web applications for international clients. Specializing in Next.js, AI API integration, and production deployment.',
  },
  {
    period: '2025',
    title: 'Sole Founder & Developer',
    company: 'EduBoost Nepal',
    description:
      'Built an AI-powered NEB exam prep platform with Gemini chat, SVG diagrams, KaTeX math rendering, and Firebase Auth. Production-deployed and serving students.',
  },
  {
    period: '2024–2025',
    title: 'Independent Developer',
    company: 'Multiple Projects',
    description:
      'Designed and shipped ShopFlow, FitTrack, SocialSnap, GifZone, LinkForge, and Nepal Tourism — 6 production-deployed apps from concept to live URL.',
  },
  {
    period: '2025',
    title: 'NEB Class 12 Graduate',
    company: 'Paramount Academy, Kathmandu',
    description:
      'Completed higher secondary education in Science while simultaneously building production applications and freelancing.',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
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
            Experience
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-navy-accent" />

          <div className="space-y-8 md:space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-6.5 top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-navy-deep shadow-lg shadow-accent/30" />

                {/* Period */}
                <span className="font-mono text-xs md:text-sm text-accent mb-1 block">
                  {exp.period}
                </span>

                {/* Content card */}
                <div className="rounded-lg bg-navy-card border border-navy-accent p-4 md:p-5 card-glow">
                  <h3 className="font-display text-lg md:text-xl font-bold text-text-primary mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-text-secondary text-sm font-medium mb-2">
                    {exp.company}
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
