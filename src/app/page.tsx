'use client';

import Navbar from '@/components/portfolio/navbar';
import Hero from '@/components/portfolio/hero';
import Skills from '@/components/portfolio/skills';
import Projects from '@/components/portfolio/projects';
import About from '@/components/portfolio/about';
import Experience from '@/components/portfolio/experience';
import Services from '@/components/portfolio/services';
import Contact from '@/components/portfolio/contact';
import Footer from '@/components/portfolio/footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-navy-deep">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Services />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
