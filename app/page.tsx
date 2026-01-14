"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Instagram, Twitter, Linkedin } from "lucide-react";

// --- Components ---

const Navbar = () => (
  <motion.nav 
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
    className="fixed top-0 w-full flex justify-between items-center px-8 py-6 z-50 mix-blend-difference text-white"
  >
    <div className="text-xl font-bold tracking-tighter">BTH.</div>
    <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest">
      {['Episodes', 'Journal', 'Expeditions', 'Contact'].map((item) => (
        <a key={item} href="#" className="hover:text-gray-400 transition-colors relative group">
          {item}
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
        </a>
      ))}
    </div>
    <div className="text-xs font-bold border border-white/30 px-4 py-2 rounded-full cursor-pointer hover:bg-white hover:text-black transition-all">
      SUBSCRIBE
    </div>
  </motion.nav>
);

const Hero = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden bg-[#0a0a0a] text-[#f0f0f0]">
      <motion.div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      />
      
      <div className="z-10 text-center space-y-4">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-xs uppercase tracking-[0.3em] text-yellow-500/80"
        >
          The Podcast & Journal
        </motion.p>
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="text-[12vw] leading-none font-serif tracking-tighter"
          >
            BEYOND
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
            className="text-[12vw] leading-none font-serif tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600"
          >
            THE HORIZON
          </motion.h1>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-10 flex items-center gap-4"
      >
        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/10 transition">
          <Play size={16} fill="white" />
        </div>
        <div className="text-xs uppercase tracking-widest">
          Latest: The Kilimanjaro Diaries
          <br/>
          <span className="text-gray-500 normal-case tracking-normal">Ep. 42 • 52 min listen</span>
        </div>
      </motion.div>
    </section>
  );
};

const ContentSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={container} className="min-h-screen bg-[#0f0f0f] text-white py-24 px-8 md:px-24">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3 space-y-8 sticky top-32 h-fit">
          <h2 className="text-5xl font-serif">Curated<br/>Adventures.</h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            From the peaks of Kilimanjaro to the depths of personal resilience. Beatrice Onyango explores what it means to push past the limits.
          </p>
          <button className="flex items-center gap-2 text-xs uppercase tracking-widest border-b border-white/20 pb-2 hover:border-white transition-colors">
            View All Expeditions <ArrowRight size={14} />
          </button>
        </div>

        <div className="md:w-2/3 flex flex-col gap-24">
          <ParallaxCard 
            title="THE ROOF OF AFRICA" 
            category="Expedition"
            img="https://images.unsplash.com/photo-1650668302197-7f556c34cb91?q=80&w=2070"
            desc="Uhuru Peak stands at 5,895m. We took the Machame route for 6 days of intensity and beauty."
          />
          <ParallaxCard 
            title="ESSENTIAL GEAR GUIDE" 
            category="Curated"
            img="https://images.unsplash.com/photo-1601226071478-f7396c214c77?q=80"
            desc="The challenge isn't just the hike, it's the preparation. A curated guide on what you need."
          />
           <ParallaxCard 
            title="LESSONS FROM THE TRAIL" 
            category="Philosophy"
            img="https://images.unsplash.com/photo-1533240332313-0dbdd31c16ca?q=80&w=2070"
            desc="Hiking is more than walking. It is a classroom for life."
          />
        </div>
      </div>
    </section>
  );
};

const ParallaxCard = ({ title, category, img, desc }: any) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8 }}
      className="group cursor-pointer"
    >
      <div className="overflow-hidden mb-6 relative h-[400px] w-full">
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          src={img} 
          alt={title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">{category}</span>
        <h3 className="text-3xl font-serif group-hover:translate-x-2 transition-transform duration-300">{title}</h3>
        <p className="text-gray-500 text-sm max-w-md">{desc}</p>
      </div>
    </motion.div>
  );
};

const Footer = () => (
  <footer className="bg-black text-white py-24 px-8 border-t border-white/10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
      <div>
        <h2 className="text-[10vw] md:text-[5vw] font-serif leading-none text-white/20">BTH.</h2>
      </div>
      <div className="flex gap-6 mt-8 md:mt-0">
        <Instagram className="text-gray-500 hover:text-white transition-colors cursor-pointer" />
        <Twitter className="text-gray-500 hover:text-white transition-colors cursor-pointer" />
        <Linkedin className="text-gray-500 hover:text-white transition-colors cursor-pointer" />
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <Hero />
      <ContentSection />
      <Footer />
    </main>
  );
}