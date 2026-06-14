'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    name: 'ShopFlow',
    url: 'https://shopflow-green-five.vercel.app',
    github: null,
    category: 'E-Commerce',
    featured: true,
    description:
      'Full e-commerce platform: product catalog, category filters, cart with Stripe test checkout. Clean minimal UI with animated product grid.',
    stack: ['Next.js', 'Tailwind', 'Stripe', 'Cart'],
    screenshot: '/projects/shopflow.png',
  },
  {
    name: 'FitTrack',
    url: 'https://fittrackmobile.up.railway.app',
    github: null,
    category: 'Fitness',
    featured: true,
    description:
      'Cross-platform fitness tracker with workout logging, dashboard stats, and Railway backend. Solved real deployment pipeline challenges.',
    stack: ['Next.js', 'Prisma', 'SQLite', 'Railway'],
    screenshot: '/projects/fittrack.png',
  },
  {
    name: 'Nepal Tourism',
    url: 'https://nepal-tourism-nep.vercel.app',
    github: null,
    category: 'Travel',
    featured: false,
    description:
      'Visually rich tourism showcase for Nepal — destinations, culture, and travel guide. Demonstrates UI/UX skill with real-world content.',
    stack: ['Next.js', 'Tailwind CSS'],
    screenshot: '/projects/nepal-tourism.png',
  },
  {
    name: 'LinkForge',
    url: 'https://linkforge-p33m.vercel.app',
    github: null,
    category: 'Tools',
    featured: false,
    description:
      'Bio link tool for creators and businesses — a Linktree alternative. Clean URL management with a shareable profile page.',
    stack: ['Next.js', 'Tailwind CSS'],
    screenshot: '/projects/linkforge.png',
  },
  {
    name: 'EduBoost Nepal',
    url: 'https://eduboostnepal.nabint.com.np',
    github: null,
    category: 'AI',
    featured: true,
    description:
      'AI-powered NEB exam prep platform. Custom AI chat, SVG diagram generation, KaTeX math rendering, Firebase Auth. Production-deployed.',
    stack: ['Next.js', 'Firebase', 'Gemini AI'],
    screenshot: '/projects/eduboost.png',
  },
  {
    name: 'SocialSnap',
    url: 'https://socialsnap.nabint.com.np',
    github: null,
    category: 'AI',
    featured: false,
    description:
      'Multi-model AI caption generator for social media. Integrates Gemini and Groq with image analysis. Demonstrates AI API orchestration.',
    stack: ['Next.js', 'Gemini API', 'Groq'],
    screenshot: '/projects/socialsnap.png',
  },
  {
    name: 'GifZone',
    url: 'https://gifzone.nabint.com.np',
    github: null,
    category: 'Tools',
    featured: false,
    description:
      'Interactive virtual gift experience platform with tap-based animations: gift boxes, love letters, party effects. Creative UX & motion design.',
    stack: ['Next.js', 'Animation', 'Firebase'],
    screenshot: '/projects/gifzone.png',
  },
];

const filters = ['All', 'E-Commerce', 'AI', 'Fitness', 'Travel', 'Tools'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary mb-4">
            Projects I&apos;ve Shipped
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-accent text-white shadow-lg shadow-accent/25'
                  : 'bg-navy-accent text-text-secondary hover:text-white hover:bg-navy-accent/80'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.name}
                variants={cardVariants}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{
                  y: -4,
                  boxShadow:
                    '0 0 20px rgba(233, 69, 96, 0.15), 0 8px 32px rgba(15, 52, 96, 0.3)',
                }}
                className="group bg-[#16213E] border border-[#0F3460] rounded-xl overflow-hidden card-glow flex flex-col"
              >
                {/* Screenshot Header */}
                <div className="relative h-44 overflow-hidden bg-navy-card">
                  <img
                    src={project.screenshot}
                    alt={`${project.name} screenshot`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16213E]/80 to-transparent" />
                  {project.featured && (
                    <span className="absolute top-3 right-3 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Project Name */}
                  <h3 className="font-display font-bold text-xl text-text-primary mb-2">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary text-sm line-clamp-2 mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs bg-navy-accent text-white rounded-full px-2 py-0.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover transition-colors font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-white transition-colors font-medium"
                      >
                        <Github className="w-4 h-4" />
                        Source
                      </a>
                    ) : (
                      <span className="flex items-center gap-1.5 text-sm text-text-secondary/40 font-medium cursor-default">
                        <Github className="w-4 h-4" />
                        Private
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
