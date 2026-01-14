"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Play, Mic, ArrowRight, MapPin, Compass } from "lucide-react";

const POSTS = [
  {
    title: "Mt. Kilimanjaro: The Roof of Africa",
    category: "Expedition",
    img: "https://onyangobeatrice.com/wp-content/uploads/2023/03/summit-board.jpeg",
    size: "large" // Special tag for layout
  },
  {
    title: "Essential Gear Guide",
    category: "Handbook",
    img: "https://onyangobeatrice.com/wp-content/uploads/2023/03/img_0324-1.jpeg?strip=info&w=2000",
    size: "small"
  },
  {
    title: "The Philosophy of the Climb",
    category: "Mindset",
    img: "https://onyangobeatrice.com/wp-content/uploads/2023/03/fullsizerender-5.jpeg?strip=info&w=2000",
    size: "small"
  }
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects for hero text
  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="bg-white selection:bg-gold-500 selection:text-white">
      
      {/* NAVIGATION - Clear & Classy */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-6 md:px-12 py-6 z-50 text-white mix-blend-difference">
        <div className="text-2xl font-bold tracking-tighter uppercase font-serif">BTH.</div>
        <div className="flex gap-4">
             <button className="text-sm font-bold border border-white/50 px-4 py-2 rounded-full hover:bg-white hover:text-sky-900 transition-all">
              SUBSCRIBE
            </button>
        </div>
      </nav>

      {/* 1. THE "ALIVE" HERO SECTION */}
      <section ref={heroRef} className="relative h-[110vh] w-full overflow-hidden">
        {/* Ken Burns Background Effect (Slow Zoom) */}
        <motion.div 
            animate={{ scale: [1.1, 1] }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://onyangobeatrice.com/wp-content/uploads/2023/03/fullsizerender.jpeg?w=1024')" }}
        >
            {/* Gradient Overlay for text readability and color pop */}
            <div className="absolute inset-0 bg-gradient-to-b from-sky-900/30 via-transparent to-sky-900/50"></div>
        </motion.div>

        {/* Hero Content with Parallax */}
        <motion.div 
            style={{ y: textY, opacity: textOpacity }}
            className="relative z-10 h-full flex flex-col justify-end pb-32 px-6 md:px-24 text-white"
        >
            <div className="flex items-center gap-2 text-gold-500 font-bold uppercase tracking-widest mb-4">
                <Compass size={20} />
                <span>Est. 2023 • Nairobi</span>
            </div>
            {/* Massive Editorial Headline */}
            <h1 className="font-serif text-7xl md:text-[9rem] leading-[0.85] font-bold mb-8 drop-shadow-xl">
                Beyond <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gold-500 italic pr-4">
                    The Horizon
                </span>
            </h1>
            
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <p className="max-w-md text-lg leading-relaxed opacity-90 border-l-2 border-gold-500 pl-4">
                    Curated hiking stories, trail guides, and the relentless pursuit of the summit.
                </p>
                 <motion.button 
                    whileHover={{ scale: 1.05 }}
                    className="bg-gold-500 text-sky-900 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm flex items-center gap-3 shadow-lg shadow-gold-500/30 hover:shadow-xl transition-all"
                >
                    <Play size={18} className="fill-current" /> Start The Journey
                </motion.button>
            </div>
        </motion.div>
      </section>

      {/* 2. CREATIVE OVERLAP LAYOUT (About) */}
      <section className="py-24 bg-nature-100 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 text-nature-800 opacity-5 text-[20rem] font-serif leading-none -translate-y-1/2 translate-x-1/4">
            BTH
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid md:grid-cols-12 gap-12 items-center">
                {/* Image Side */}
                <div className="md:col-span-5 relative">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative z-10"
                    >
                        <img 
                            src="https://onyangobeatrice.com/wp-content/uploads/2023/03/fullsizerender-4.jpeg?strip=info&w=2000" 
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                    {/* Offset Accent Box */}
                    <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-gold-500 rounded-2xl z-0 hidden md:block"></div>
                </div>

                {/* Text Side - Overlapping style */}
                <div className="md:col-span-7 md:-ml-12 lg:-ml-24 relative z-20 bg-white p-8 md:p-16 rounded-r-2xl shadow-xl">
                    <div className="flex items-center gap-2 text-gold-500 font-bold uppercase tracking-widest mb-6">
                        <Mic size={20} /> The Voice of Adventure
                    </div>
                    <h2 className="font-serif text-4xl md:text-6xl text-sky-900 leading-tight mb-6">
                        "We share unique stories and wisdom from the wild."
                    </h2>
                    <p className="text-sky-900/70 text-lg leading-relaxed mb-8">
                        Whether you are a beginner looking for your first trail or an experienced adventurer seeking the next peak, BTH brings you the unfiltered reality of the climb.
                    </p>
                    <a href="#" className="inline-flex items-center gap-2 text-sky-900 font-bold border-b-2 border-gold-500 pb-1 hover:text-gold-500 transition-colors">
                        Read Full Biography <ArrowRight size={20} />
                    </a>
                </div>
            </div>
        </div>
      </section>

      {/* 3. VIBRANT JOURNAL GRID (Asymmetrical) */}
      <section className="py-24 px-6 md:px-24 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
                <span className="text-gold-500 font-bold uppercase tracking-widest text-sm">The Journal</span>
                <h3 className="font-serif text-5xl md:text-7xl mt-2 text-sky-900">Latest Expeditions</h3>
            </div>
             <button className="border-2 border-sky-900 text-sky-900 px-8 py-3 rounded-full text-sm uppercase font-bold hover:bg-sky-900 hover:text-white transition-colors">
                View All Archive
            </button>
        </div>

        {/* Asymmetrical Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {POSTS.map((post, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    // The first item spans 2 columns on medium screens for a "feature" look
                    className={`group cursor-pointer ${post.size === 'large' ? 'md:col-span-2' : ''}`}
                >
                    <div className={`overflow-hidden rounded-2xl mb-6 relative shadow-lg ${post.size === 'large' ? 'h-[500px]' : 'h-[350px]'}`}>
                        <img 
                            src={post.img} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Colorful overlay on hover */}
                        <div className="absolute inset-0 bg-sky-900/0 group-hover:bg-sky-900/40 transition-all duration-500"></div>
                        <div className="absolute top-6 left-6 bg-gold-500 text-sky-900 px-4 py-2 text-sm font-bold uppercase rounded-full">
                            {post.category}
                        </div>
                         <div className="absolute bottom-6 right-6 bg-white text-sky-900 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                            <ArrowUpRight size={24} />
                        </div>
                    </div>
                    <h4 className={`font-serif font-bold text-sky-900 group-hover:text-gold-500 transition-colors ${post.size === 'large' ? 'text-4xl' : 'text-2xl'}`}>
                        {post.title}
                    </h4>
                </motion.div>
            ))}
        </div>
      </section>

      {/* FOOTER - Simple & Bold */}
      <footer className="bg-sky-900 text-white py-24 px-6 md:px-12 text-center">
         <h2 className="font-serif text-8xl md:text-[12rem] font-bold opacity-10 leading-none">BTH.</h2>
         <div className="-mt-12 md:-mt-24 relative z-10">
             <h3 className="text-3xl md:text-5xl font-serif mb-8">Join the Adventure</h3>
              <div className="flex flex-col md:flex-row justify-center gap-4 max-w-lg mx-auto">
                <input className="px-6 py-4 rounded-full w-full text-sky-900 focus:outline-none focus:ring-2 focus:ring-gold-500" placeholder="Email Address" />
                <button className="bg-gold-500 text-sky-900 font-bold px-10 py-4 rounded-full uppercase tracking-widest hover:bg-white transition-colors">
                    Subscribe
                </button>
            </div>
         </div>
      </footer>
    </main>
  );
}