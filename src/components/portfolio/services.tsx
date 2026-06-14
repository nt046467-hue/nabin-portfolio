'use client';

import { motion } from 'framer-motion';
import { Globe, Sparkles, ShoppingCart, Layout } from 'lucide-react';

const services = [
  {
    title: 'Full-Stack Web App',
    description:
      'Custom Next.js application with database integration (Prisma/Firebase), authentication, and Vercel deployment.',
    price: 'From $150',
    priceNpr: 'Rs.20,000',
    icon: 'Globe',
  },
  {
    title: 'AI Feature Integration',
    description:
      'Add Gemini, Groq, or Claude AI APIs to your existing app — chatbots, content generation, image analysis.',
    price: 'From $80',
    priceNpr: 'Rs.10,000',
    icon: 'Sparkles',
  },
  {
    title: 'E-Commerce Store',
    description:
      'Next.js storefront with product catalog, filters, cart, and payment integration (Stripe or Khalti).',
    price: 'From $200',
    priceNpr: 'Rs.27,000',
    icon: 'ShoppingCart',
  },
  {
    title: 'Landing Page / Portfolio',
    description:
      'High-conversion landing page or personal portfolio — fast, mobile-first, SEO-optimized, deployed same week.',
    price: 'From $50',
    priceNpr: 'Rs.7,000',
    icon: 'Layout',
  },
];

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Globe,
  Sparkles,
  ShoppingCart,
  Layout,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
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
            What I Can Build For You
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{
                  y: -4,
                  boxShadow:
                    '0 0 20px rgba(233, 69, 96, 0.15), 0 8px 32px rgba(15, 52, 96, 0.3)',
                }}
                className="bg-[#16213E] border border-[#0F3460] rounded-xl p-6 card-glow flex flex-col"
              >
                {/* Icon */}
                <div className="bg-accent/10 text-accent w-12 h-12 rounded-full flex items-center justify-center mb-5">
                  {IconComponent && <IconComponent className="w-6 h-6" />}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-text-primary mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-sm mb-5 flex-1">
                  {service.description}
                </p>

                {/* Price */}
                <div className="mb-5">
                  <span className="text-accent font-display font-bold text-2xl block">
                    {service.price}
                  </span>
                  <span className="text-text-secondary text-sm">
                    {service.priceNpr}
                  </span>
                </div>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-accent text-accent text-sm font-semibold hover:bg-accent hover:text-white transition-all duration-300 cursor-pointer"
                >
                  Get Started
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
