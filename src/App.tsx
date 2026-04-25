/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Mail, 
  Menu, 
  X, 
  ExternalLink,
  ChevronRight,
  Code2,
  Palette,
  Layers,
  Sparkles
} from 'lucide-react';
import { useState, useEffect } from 'react';

const PROJECTS = [
  {
    id: 1,
    title: "Ethereal Design System",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    link: "#",
    tags: ["UI/UX", "System", "Design"]
  },
  {
    id: 2,
    title: "Chronos Dashboard",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1551288049-bbda4e32f71d?q=80&w=2670&auto=format&fit=crop",
    link: "#",
    tags: ["React", "D3.js", "Analytics"]
  },
  {
    id: 3,
    title: "Solaris Mobile App",
    category: "Mobile Interface",
    image: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?q=80&w=2670&auto=format&fit=crop",
    link: "#",
    tags: ["React Native", "Expo", "Fitness"]
  },
  {
    id: 4,
    title: "Abstract Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop",
    link: "#",
    tags: ["Branding", "Logo", "Strategy"]
  }
];

const SERVICES = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Visual Design",
    description: "Creating stunning, memorable visual identities and user interfaces that resonate with users."
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Development",
    description: "Building fast, accessible, and performant web applications using modern web technologies."
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "UX Strategy",
    description: "Developing comprehensive user experience strategies based on deep research and data."
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass shadow-2xl' : 'py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white font-display text-2xl font-bold tracking-tighter"
          >
            SOLSTICE<span className="text-gray-500">.</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10 items-center">
            {['Projects', 'Services', 'About', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-medium hover:text-white transition-colors"
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-white text-black rounded-full text-sm font-bold shadow-lg shadow-white/10"
            >
              Let's talk
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-bg pt-32 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 text-4xl font-display font-bold">
              {['Projects', 'Services', 'About', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)}>
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative pt-48 pb-32 md:pt-64 md:pb-48 overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-bg bg-gray-800" />
                  ))}
                </div>
                <p className="text-sm font-medium text-gray-400">Trusted by modern companies</p>
              </div>
              <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9] mb-8 text-white">
                CRAFTING <br />
                <span className="text-gradient">DIGITAL</span> HARMONY
              </h1>
              <p className="max-w-xl text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-10">
                Independent Designer & Developer focused on creating minimal, 
                high-performance digital experiences that bridge the gap between 
                functionality and aesthetic.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-2 group">
                  View Works <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border border-brand-border rounded-full font-bold hover:bg-white/5 transition-colors">
                  Our Story
                </button>
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-brand-border/20 rounded-full blur-[120px] pointer-events-none" />
        </section>

        {/* Featured Projects */}
        <section id="projects" className="py-32 bg-zinc-950/50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div>
                <span className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 block">Selected Works</span>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight">FEATURED PROJECTS</h2>
              </div>
              <button className="text-sm font-bold flex items-center gap-2 group border-b border-gray-700 pb-2 hover:border-white transition-colors">
                View All Case Studies <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-32">
              {PROJECTS.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i % 2 === 0 ? 0 : 0.2 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-gray-900 border border-brand-border/30">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
                        <ArrowUpRight className="text-black w-8 h-8" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">{project.category}</span>
                      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                      <div className="flex gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[10px] border border-brand-border px-2 py-0.5 rounded-full text-gray-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mb-20">
              <span className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 block">Expertise</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">SERVICES I PROVIDE</h2>
              <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                I help companies across various industries to build meaningful digital products 
                that stand out in the crowded marketplace.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {SERVICES.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 glass rounded-3xl hover:bg-brand-card transition-colors duration-500 group"
                >
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-white group-hover:bg-white group-hover:text-black transition-all duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-light">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Bar */}
        <section className="py-20 border-y border-brand-border">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-between items-center gap-12 opacity-30 invert hover:opacity-100 transition-opacity grayscale">
              {['Google', 'Nike', 'Apple', 'Meta', 'Tesla'].map(brand => (
                <span key={brand} className="text-2xl font-display font-black tracking-tighter uppercase italic">{brand}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact/CTA */}
        <section id="contact" className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="glass rounded-[3rem] p-12 md:p-24 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8">
                <Sparkles className="w-12 h-12 text-white/20 animate-pulse" />
              </div>
              
              <div className="max-w-3xl">
                <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
                  HAVE A PROJECT <br /> <span className="text-gradient font-black">IN MIND?</span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 font-light">
                  I'm always open to new opportunities and collaborations. 
                  Reach out and let's create something extraordinary together.
                </p>
                
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                  <a 
                    href="mailto:hello@solstice.design" 
                    className="text-2xl md:text-4xl font-bold hover:text-white transition-colors border-b-2 border-brand-border hover:border-white pb-2 flex items-center gap-4 group"
                  >
                    hello@solstice.design <ArrowUpRight className="w-8 h-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                  </a>
                  
                  <div className="flex gap-4">
                    <button className="p-4 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all">
                      <Github className="w-6 h-6" />
                    </button>
                    <button className="p-4 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all">
                      <Linkedin className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
      </main>

      <footer className="py-12 border-t border-brand-border">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white font-display text-xl font-bold tracking-tighter">
            SOLSTICE<span className="text-gray-500">.</span>
          </div>
          <p className="text-sm text-gray-500">
            © 2026 Solstice Design Studio. All rights reserved. Built with passion and precision.
          </p>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>

      {/* Floating Gradient Circle following cursor (Desktop only) */}
      <motion.div 
        className="hidden lg:block fixed top-0 left-0 w-[400px] h-[400px] border border-white/10 rounded-full blur-[100px] pointer-events-none z-0"
        animate={{
          x: [-100, 100, -50, 50],
          y: [-100, 50, 100, -50],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
