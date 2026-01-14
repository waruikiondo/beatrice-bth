"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Play, Instagram, Twitter, Linkedin, ArrowRight, MapPin } from "lucide-react";

// --- Real Data ---
const POSTS = [
  {
    title: "Mt. Kilimanjaro",
    category: "Expedition",
    excerpt: "The roof of Africa. 5,895m of intensity and beauty via the Machame route.",
    img: "https://onyangobeatrice.com/wp-content/uploads/2023/03/summit-board.jpeg",
    link: "https://onyangobeatrice.com/2023/03/28/mt-kilimanjaro/"
  },
  {
    title: "What to Pack",
    category: "Essential Guide",
    excerpt: "Don't overpack. A curated guide on the essentials for the trail.",
    img: "https://onyangobeatrice.com/wp-content/uploads/2023/03/img_0324-1.jpeg?strip=info&w=2000",
    link: "https://onyangobeatrice.com/2023/03/11/what-to-pack/"
  },
  {
    title: "Why We Hike",
    category: "Philosophy",
    excerpt: "Exploring the deep reasons behind the trek and the silence of the hills.",
    img: "https://onyangobeatrice.com/wp-content/uploads/2023/03/fullsizerender-5.jpeg?strip=info&w=2000",
    link: "https://onyangobeatrice.com/2023/03/11/why-do-you-hike/"
  }
];

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <main className="bg-white text-slate-900 selection:bg-yellow-200">
      
      {/* 1. HERO SECTION (Parallax) */}
      <section ref={targetRef} className="relative h-screen w-full overflow-hidden">
        <motion.div 
          style={{ scale, opacity, y }}
          className="absolute inset-0 bg-cover bg-center"
        >
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://onyangobeatrice.com/wp-content/uploads/2023/03/fullsizerender.jpeg?w=1024')" }}
            />
            <div className="absolute inset-0 bg-black/20" /> {/* Subtle tint */}
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
                <div className="mb-6 flex items-center justify-center gap-2 text-xs font-bold tracking-[0.3em] uppercase opacity-80">
                    <span className="w-8 h-[1px] bg-white"></span>
                    Est. 2023 • Kenya
                    <span className="w-8 h-[1px] bg-white"></span>
                </div>
                <h1 className="font-serif text-7xl md:text-9xl leading-[0.9] mb-8">
                    Beyond <br/> <span className="italic font-light">The Horizon</span>
                </h1>
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    className="group bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-white hover:text-black transition-all"
                >
                    <Play size={14} className="fill-current" /> Start Listening
                </motion.button>
            </motion.div>
        </div>
      </section>

      {/* 2. MAGAZINE INTRO */}
      <section className="relative z-20 bg-white py-24 px-6 md:px-24 -mt-20 rounded-t-[3rem]">
        <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
                <div className="relative">
                    <img 
                        src="https://onyangobeatrice.com/wp-content/uploads/2023/03/fullsizerender-4.jpeg?strip=info&w=2000" 
                        className="rounded-lg w-full object-cover h-[600px] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-yellow-400 p-8 rounded-full shadow-xl hidden md:block">
                        <ArrowRight size={32} className="text-black -rotate-45" />
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 space-y-8">
                <h2 className="font-serif text-5xl md:text-6xl leading-tight">
                    "The climb is tough,<br/> but the view is <span className="text-yellow-600 italic">worth it.</span>"
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed font-light">
                    Whether you are a beginner looking for your first trail or an experienced adventurer seeking the next peak, BTH brings you unique stories and wisdom gleaned from the wild.
                </p>
                
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                    <div>
                        <h4 className="font-bold text-3xl font-serif">5.8k</h4>
                        <p className="text-xs uppercase tracking-widest text-slate-400 mt-1">Meters Climbed</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-3xl font-serif">40+</h4>
                        <p className="text-xs uppercase tracking-widest text-slate-400 mt-1">Episodes Aired</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. LATEST STORIES (Horizontal Scroll Feel) */}
      <section className="bg-slate-50 py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16 px-4">
                <h3 className="font-serif text-5xl md:text-7xl text-slate-900 opacity-90">
                    Latest <br/> <span className="italic text-slate-400">Expeditions</span>
                </h3>
                <a href="#" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-yellow-600 transition-colors">
                    View Archive <ArrowUpRight size={18} />
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {POSTS.map((post, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="group relative cursor-pointer"
                    >
                        <div className="overflow-hidden h-[450px] mb-6 relative">
                            <img 
                                src={post.img} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                        </div>
                        <div className="flex flex-col gap-3 px-2">
                            <span className="text-yellow-600 text-xs font-bold uppercase tracking-widest">{post.category}</span>
                            <h4 className="font-serif text-3xl leading-none group-hover:underline underline-offset-4 decoration-1">{post.title}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">{post.excerpt}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* 4. FOOTER (Minimalist) */}
      <footer className="bg-[#111] text-white py-20 px-6 md:px-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 max-w-7xl mx-auto">
          <div>
            <h2 className="text-4xl font-serif mb-6">BTH.</h2>
            <div className="flex gap-6 text-slate-400">
                <Instagram className="hover:text-white cursor-pointer transition-colors" />
                <Twitter className="hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          <div className="text-right">
            <p className="text-slate-500 text-sm mb-4">Subscribe to the newsletter</p>
            <div className="flex border-b border-white/20 pb-2">
                <input type="email" placeholder="Email Address" className="bg-transparent focus:outline-none w-64 text-white placeholder:text-slate-700" />
                <button className="text-xs font-bold uppercase tracking-widest hover:text-yellow-500">Submit</button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}