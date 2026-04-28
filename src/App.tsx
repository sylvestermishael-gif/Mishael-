/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  ArrowUpRight, 
  ChevronRight,
  Code2,
  Palette,
  Layers,
  Sparkles,
  Zap,
  Globe,
  Menu,
  X
} from 'lucide-react';
import { useState, useEffect, useRef, useMemo } from 'react';

// Refined Floating Bubbles Component
const FloatingBubbles = () => {
  const bubbles = useMemo(() => Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 10,
  })), []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full glass opacity-[0.03] border border-white/5"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
          }}
          animate={{
            y: [0, -200, 0],
            x: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            ease: "linear",
            delay: bubble.delay,
          }}
        />
      ))}
    </div>
  );
};

// Modern Text Reveal Component for Designed Writing
const DesignedText = ({ text, className = "", delay = 0, outline = false, transparent = false }: { text: string; className?: string; delay?: number; outline?: boolean; transparent?: boolean }) => {
  const words = text.split(" ");
  
  return (
    <span className={`inline-block overflow-hidden ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block whitespace-nowrap mr-[0.2em] relative">
          {Array.from(word).map((char, j) => (
            <motion.span
              key={j}
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: delay + (i * 0.1) + (j * 0.02)
              }}
              className={`inline-block hover:text-accent transition-colors duration-500 cursor-default ${outline ? 'text-outline hover:text-outline-hover' : ''} ${transparent ? 'text-transparent' : ''}`}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
};

// Animation Constants
const springTransition = { type: "spring", stiffness: 100, damping: 20 };
const easeTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: easeTransition 
  }
};

const PROJECTS = [
  {
    id: 1,
    title: "Ethereal System",
    category: "Product Architecture",
    description: "Multi-layered design structure focused on semantic clarity and visual rhythm.",
    tags: ["Core", "Atomic", "Motion"],
    visual: (
      <div className="relative w-full h-full flex items-center justify-center bg-zinc-900 group-hover:bg-zinc-800 transition-colors duration-700">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-48 h-48 border border-white/10 rounded-full flex items-center justify-center"
        >
          <div className="w-24 h-24 border border-white/30 rotate-45" />
        </motion.div>
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-[0.05]">
          {Array.from({ length: 36 }).map((_, i) => <div key={i} className="border border-white" />)}
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Chronos Portal",
    category: "Interface Engineering",
    description: "Highly technical dashboard interface for real-time temporal data analysis.",
    tags: ["React", "WebGL", "Rust"],
    visual: (
      <div className="relative w-full h-full flex items-center justify-center bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-[1px] bg-white/10"
              animate={{ rotate: i * 30 + 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </div>
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="w-40 h-40 glass rounded-full"
        />
      </div>
    )
  },
  {
    id: 3,
    title: "Solaris Hub",
    category: "Mobile Ecosystem",
    description: "Fragmented mobile application ecosystem built on dynamic modular constraints.",
    tags: ["Native", "Dart", "Unity"],
    visual: (
      <div className="relative w-full h-full p-16 grid grid-cols-2 grid-rows-2 gap-6 bg-black">
        {[1, 2, 3, 4].map(i => (
          <motion.div 
            key={i} 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
            className="border border-white/5 rounded-xl flex items-center justify-center text-white/10 font-display font-black uppercase text-sm"
          >
            S-{i}
          </motion.div>
        ))}
      </div>
    )
  },
  {
    id: 4,
    title: "Strategic Identity",
    category: "Institutional Branding",
    description: "Non-visual identity mapping for high-precision institutional ventures.",
    tags: ["Identity", "Systems", "Code"],
    visual: (
      <div className="relative w-full h-full flex items-center justify-center bg-zinc-900 overflow-hidden">
        <div className="flex gap-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 bg-white/20"
              animate={{ height: [40, 100, 40], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 1.5, delay: i * 0.15, repeat: Infinity }}
            />
          ))}
        </div>
      </div>
    )
  }
];

const SERVICES = [
  {
    icon: <Palette className="w-5 h-5" />,
    title: "Visual Architecture",
    description: "Developing robust visual frameworks that prioritize structural integrity and minimalist elegance."
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "Technical Execution",
    description: "Translating sophisticated designs into performant, production-ready codebases with zero friction."
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Product Strategy",
    description: "Defining the trajectory of digital products through data-driven insight and minimalist philosophy."
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-brand-bg selection:bg-white selection:text-black scroll-smooth relative overflow-x-hidden">
      <FloatingBubbles />
      {/* Structural Backdrop */}
      <div className="fixed inset-0 grid-lines opacity-[0.2] pointer-events-none z-0" />
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[0.16,1,0.3,1] ${isScrolled ? 'py-4 glass border-b' : 'py-12'}`}>
        <div className="container mx-auto px-8 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={easeTransition}
            className="text-white font-display text-xl font-black tracking-tighter flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 bg-white text-black flex items-center justify-center transform group-hover:rotate-0 -rotate-12 transition-transform duration-500">S</div>
            <span className="hidden sm:block">SOLSTICE</span>
          </motion.div>

          <div className="hidden md:flex gap-16 items-center">
            {['Projects', 'Services', 'About', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, ...easeTransition }}
                className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-all relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-white transition-all duration-700 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <motion.button
              whileHover={{ backgroundColor: "#fff", color: "#000", scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden md:block px-8 py-2.5 border border-white/20 text-[11px] font-bold uppercase tracking-widest transition-all"
            >
              Inquire
            </motion.button>

            <button 
              className="md:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-bg pt-40 px-8 md:hidden glass"
          >
            <div className="flex flex-col gap-10 text-4xl font-display font-black uppercase italic">
              {['Projects', 'Services', 'About', 'Contact'].map((item, i) => (
                <motion.a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        {/* Architectural Hero */}
        <section className="relative pt-64 pb-32 md:pt-80 md:pb-64">
          <div className="container mx-auto px-8">
            <div className="grid lg:grid-cols-12 gap-16 items-end">
              <div className="lg:col-span-1 border-r border-subtle hidden lg:block h-full min-h-[500px]">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, ...easeTransition }}
                  className="vertical-rail text-[10px] font-black uppercase tracking-[0.6em] text-gray-700 pl-4"
                >
                  SYSTEMS. 026 / DELHI. LAB
                </motion.div>
              </div>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="lg:col-span-8"
              >
                <motion.div 
                  variants={itemVariants}
                  className="text-[12px] font-black text-accent uppercase tracking-[0.4em] mb-10 flex items-center gap-6"
                >
                  <span className="w-16 h-[1px] bg-accent" /> CREATIVE ARCHITECT
                </motion.div>
                <motion.h1 
                  variants={itemVariants}
                  className="text-[14vw] lg:text-[10vw] font-black leading-[0.8] mb-16 uppercase italic -ml-2 selection:bg-white selection:text-black tracking-[-0.05em]"
                >
                  <DesignedText text="Precision" outline /> <br />
                  <span className="text-gradient"><DesignedText text="Logic." delay={0.4} transparent /></span>
                </motion.h1>
                <motion.p 
                  variants={itemVariants}
                  className="max-w-xl text-xl text-gray-500 font-light leading-relaxed mb-12"
                >
                  Exploring the threshold between structural rigidity and fluid aesthetic. 
                  Building high-fidelity digital systems that redefine performance limits.
                </motion.p>
                <motion.div variants={itemVariants} className="flex gap-8">
                  <button className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-white group">
                    View Portfolio <ChevronRight className="group-hover:translate-x-2 transition-transform duration-500" />
                  </button>
                </motion.div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, ...easeTransition }}
                className="lg:col-span-3 lg:text-right"
              >
                <div className="text-[10px] font-black text-gray-700 uppercase tracking-widest mb-6">Execution / 026</div>
                <ul className="space-y-4 text-[13px] font-black uppercase tracking-[0.2em] text-white/50 italic">
                  <motion.li whileHover={{ x: -10, color: "#fff" }} className="cursor-default">01. Intentionality</motion.li>
                  <motion.li whileHover={{ x: -10, color: "#fff" }} className="cursor-default">02. Sustainability</motion.li>
                  <motion.li whileHover={{ x: -10, color: "#fff" }} className="cursor-default">03. Scalability</motion.li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Projects - Mask reveal transitions */}
        <section id="projects" className="py-48 border-t border-subtle bg-black/40">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 border-subtle border-l">
              <div className="md:col-span-2 p-16 border-subtle border-r border-b">
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-600 mb-8 block"
                >
                  Case Studies / 2026
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={easeTransition}
                  className="text-6xl md:text-8xl font-black uppercase max-w-xs transition-all hover:italic tracking-tighter"
                >
                  <DesignedText text="Selected" /> <br />
                  <DesignedText text="Works." delay={0.2} />
                </motion.h2>
              </div>
              <div className="hidden lg:block lg:col-span-2 p-16 border-subtle border-r border-b relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/[0.02] transform translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-[0.16,1,0.3,1]" />
                <p className="text-gray-500 max-w-sm text-lg font-light leading-relaxed pt-20 relative z-10">
                  A collection of technical artifacts where logic dictates geometry. 
                  Every byte matters. Every pixel is intentional.
                </p>
              </div>
              
              {PROJECTS.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -10 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    delay: (i % 4) * 0.1, 
                    ...easeTransition,
                    y: { duration: 0.4, ease: "easeOut" }
                  }}
                  className="group p-10 border-subtle border-r border-b hover:bg-white/[0.04] transition-all cursor-pointer relative overflow-hidden"
                >
                  <motion.div 
                    initial={{ clipPath: "inset(100% 0 0 0)" }}
                    whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: (i % 4) * 0.15 }}
                    className="aspect-[4/5] mb-10 overflow-hidden rounded-sm grayscale transition-all duration-700 group-hover:grayscale-0 relative shadow-2xl"
                  >
                    {project.visual}
                  </motion.div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-700 group-hover:text-accent transition-colors duration-500">{project.category}</span>
                    <motion.div 
                      whileHover={{ scale: 1.3, x: 2, y: -2 }}
                      transition={springTransition}
                    >
                      <ArrowUpRight className="w-5 h-5 text-gray-700 group-hover:text-white transition-all" />
                    </motion.div>
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter transition-all group-hover:translate-x-3 mb-4 group-hover:text-white duration-700">{project.title}</h3>
                  <div className="flex flex-wrap gap-3 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-black uppercase tracking-widest text-gray-500 bg-white/5 px-2 py-1">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section - Immersive Editorial Stagger */}
        <section id="about" className="py-48 border-b border-subtle relative overflow-hidden">
          <div className="container mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-32 items-start">
              <div className="relative">
                <div className="sticky top-48">
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={easeTransition}
                    className="w-full aspect-[3/4] glass flex items-center justify-center relative overflow-hidden group border-subtle"
                  >
                    <div className="absolute inset-0 grid-lines opacity-10 group-hover:opacity-30 transition-all duration-1000" />
                    <motion.div 
                      animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                      className="text-[25vw] font-black text-white/5 select-none"
                    >
                      S
                    </motion.div>
                    <div className="absolute bottom-12 left-12 text-[10px] font-black uppercase tracking-[0.8em] text-white animate-pulse">SYSTEM. ARCH. 026</div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 flex justify-between text-[11px] font-black uppercase tracking-[0.4em] text-gray-700"
                  >
                    <span className="hover:text-accent transition-colors cursor-default">ENGINEER</span>
                    <span className="hover:text-accent transition-colors cursor-default">STRATEGIST</span>
                    <span className="hover:text-accent transition-colors cursor-default">VISIONARY</span>
                  </motion.div>
                </div>
              </div>
              <div className="relative z-10">
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-[11px] font-black uppercase tracking-[0.6em] text-accent mb-16 block"
                >
                  BIOGRAPHY / LOGIC.MAPPING
                </motion.span>
                <div className="max-w-xl space-y-16">
                  <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={easeTransition}
                    className="text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter"
                  >
                    <DesignedText text="The" /> <DesignedText text="Architecture" delay={0.1} /> <DesignedText text="of" delay={0.2} /> <span className="italic font-light text-white/40"><DesignedText text="Silence." delay={0.3} /></span>
                  </motion.h2>
                  <div className="space-y-10 text-gray-500 font-light leading-loose text-lg">
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      My practice is established on the principle that the most profound digital 
                      impact is often the most invisible. I specialize in the elimination of the redundant.
                    </motion.p>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      Inspired by the functionalism of the Bauhaus and the objective clarity 
                      of Modernism, I approach every codebase as a living structure. 
                      It must be rigid in its logic, but fluid in its execution.
                    </motion.p>
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                      className="origin-left p-12 border-l-4 border-accent bg-accent/5 italic text-white/80 font-display text-2xl tracking-tight leading-relaxed"
                    >
                      "True innovation is not the discovery of new fields, but the precise 
                      refinement of the fundamental."
                    </motion.div>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      From cross-platform neural interfaces to architectural design languages, 
                      I build at the bleeding edge of structural feasibility.
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services - Grid Hover Stagger */}
        <section id="services" className="py-48">
          <div className="container mx-auto px-8">
            <div className="grid lg:grid-cols-3 border-subtle border-t">
              {SERVICES.map((service, i) => (
                <motion.div 
                  key={service.title} 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1, duration: 1 }}
                  className="p-16 border-subtle border-r border-b group hover:bg-accent/[0.03] transition-all duration-700 cursor-default relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="text-[11px] font-black text-gray-800 mb-16 tracking-[0.3em] group-hover:text-accent transition-colors">0{i + 1} / CAPABILITY</div>
                  <motion.div 
                    whileHover={{ rotate: 180, scale: 1.15 }}
                    transition={springTransition}
                    className="w-16 h-16 flex items-center justify-center border border-subtle rounded-sm mb-12 group-hover:border-accent group-hover:text-accent transition-all duration-500 shadow-xl icon-glow"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 group-hover:translate-x-4 transition-transform duration-700">{service.title}</h3>
                  <p className="text-gray-500 text-lg font-light leading-relaxed max-w-sm relative z-10 transition-colors group-hover:text-gray-400">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact - Kinetic Finale */}
        <section id="contact" className="py-48 border-t border-subtle bg-gradient-to-b from-transparent to-accent/10">
          <div className="container mx-auto px-8 text-center max-w-6xl relative">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={easeTransition}
            >
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={easeTransition}
                className="text-7xl md:text-[10vw] font-black uppercase leading-[0.8] mb-24 italic tracking-tighter group"
              >
                <DesignedText text="Collaborate." /> <br />
                <span className="text-gradient">
                  <DesignedText text="Initiate." delay={0.2} transparent />
                </span>
              </motion.h2>
              <div className="flex flex-col md:flex-row gap-20 justify-center items-center">
                <motion.a 
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:contact@solstice.sys" 
                  className="px-16 py-8 bg-white text-black font-black uppercase tracking-[0.4em] text-sm hover:bg-accent hover:text-white transition-all transform shadow-2xl relative z-10"
                >
                  Deploy Project
                </motion.a>
                <div className="flex gap-12 border-l border-white/10 pl-16 py-4">
                  {['GH', 'LI', 'X'].map((social, i) => (
                    <motion.a 
                      key={social}
                      href="#" 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 + (i * 0.1) }}
                      className="text-[12px] font-black uppercase tracking-[0.3em] text-gray-600 hover:text-white transition-colors relative group"
                    >
                      {social}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-24 border-t border-subtle relative z-10 bg-brand-bg">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-4 gap-16 items-start">
            <div className="lg:col-span-2">
              <div className="text-white font-display text-3xl font-black tracking-tighter mb-6 uppercase italic flex items-center gap-4">
                <div className="w-12 h-12 bg-white text-black flex items-center justify-center">S</div>
                SOLSTICE.
              </div>
              <p className="text-[11px] text-gray-700 max-w-sm uppercase tracking-[0.3em] leading-loose">
                Specialized in the architectural logic of digital ecosystems. 
                Focusing on institutional precision and minimal technical debt.
              </p>
            </div>
            <div className="text-[11px] leading-relaxed">
              <div className="font-black text-gray-600 uppercase tracking-[0.4em] mb-6">Status / 026</div>
              <div className="text-white font-black uppercase tracking-[0.2em] relative inline-block group">
                Open for Q4 Partnerships
                <motion.span 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -right-6 top-1 w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_#3b82f6]"
                />
              </div>
            </div>
            <div className="text-[11px] lg:text-right">
              <div className="font-black text-gray-600 uppercase tracking-[0.4em] mb-6">Copyright Control</div>
              <div className="text-gray-700 uppercase tracking-[0.2em]">© 2026 Solstice Studio. Digital Architecture.</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
