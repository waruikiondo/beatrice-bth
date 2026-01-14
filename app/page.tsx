"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Mic } from "lucide-react";

// Data
const POSTS = [
  {
    title: "Mt. Kilimanjaro",
    category: "Expedition",
    desc: "The roof of Africa. 5,895m of intensity and beauty via the Machame route.",
    img: "https://onyangobeatrice.com/wp-content/uploads/2023/03/summit-board.jpeg"
  },
  {
    title: "What to Pack",
    category: "Guide",
    desc: "Don't overpack. A curated guide on the essentials for the trail.",
    img: "https://onyangobeatrice.com/wp-content/uploads/2023/03/img_0324-1.jpeg?strip=info&w=2000"
  },
  {
    title: "Why We Hike",
    category: "Philosophy",
    desc: "Exploring the deep reasons behind the trek and the silence of the hills.",
    img: "https://onyangobeatrice.com/wp-content/uploads/2023/03/fullsizerender-5.jpeg?strip=info&w=2000"
  }
];

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      
      {/* 1. HERO SECTION - IMMERSIVE */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://onyangobeatrice.com/wp-content/uploads/2023/03/fullsizerender.jpeg?w=1024')" }}
        >
            <div className="absolute inset-0 bg-black/30"></div> {/* Slight dark tint for text pop */}
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-24 text-white">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
                <span className="bg-yellow-500 text-black font-bold px-3 py-1 text-xs uppercase tracking-widest rounded-sm mb-4 inline-block">
                    New Episode Out Now
                </span>
                <h1 className="font-serif text-6xl md:text-8xl font-bold leading-tight mb-6 drop-shadow-lg">
                    Beyond <br/> The Horizon
                </h1>
                <p className="max-w-md text-lg md:text-xl font-light opacity-90 mb-8 border-l-4 border-yellow-500 pl-4">
                    Curated hiking stories, trail guides, and the relentless pursuit of the summit.
                </p>
                
                <button className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-yellow-500 transition-colors flex items-center gap-3">
                    <Play size={18} fill="black" /> Listen to Podcast
                </button>
            </motion.div>
        </div>
      </section>

      {/* 2. INTRO SECTION - CLEAN & POPPY */}
      <section className="py-20 px-6 md:px-24 bg-slate-50">
        <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
                <img 
                    src="https://onyangobeatrice.com/wp-content/uploads/2023/03/fullsizerender-4.jpeg?strip=info&w=2000" 
                    className="rounded-lg shadow-2xl w-full object-cover h-[500px]"
                />
            </div>
            <div className="md:w-1/2 space-y-6">
                <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm">
                    <Mic size={18} /> The Host
                </div>
                <h2 className="font-serif text-5xl text-slate-900 leading-tight">
                    "We share unique stories and wisdom gleaned from the wild."
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                    Whether you are a beginner looking for your first trail or an experienced adventurer seeking the next peak, BTH brings you the unfiltered reality of the climb.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-slate-900 font-bold border-b-2 border-yellow-500 pb-1 hover:text-blue-600 transition-colors">
                    Read Biography <ArrowRight size={18} />
                </a>
            </div>
        </div>
      </section>

      {/* 3. LATEST ADVENTURES - GRID */}
      <section className="py-24 px-6 md:px-24 bg-white">
        <div className="flex justify-between items-end mb-12">
            <div>
                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Journal</span>
                <h3 className="font-serif text-5xl mt-2 text-slate-900">Latest Adventures</h3>
            </div>
            <button className="hidden md:block border border-slate-300 px-6 py-2 rounded-full text-sm uppercase font-bold hover:bg-slate-900 hover:text-white transition-colors">
                View All
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {POSTS.map((post, i) => (
                <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className="group cursor-pointer"
                >
                    <div className="overflow-hidden rounded-xl h-80 mb-6 relative shadow-lg">
                        <img 
                            src={post.img} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase rounded-sm">
                            {post.category}
                        </div>
                    </div>
                    <h4 className="font-serif text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                        {post.title}
                    </h4>
                    <p className="text-slate-500 leading-relaxed">
                        {post.desc}
                    </p>
                </motion.div>
            ))}
        </div>
      </section>

      {/* 4. NEWSLETTER - VIBRANT */}
      <section className="py-24 bg-blue-900 text-white text-center px-6">
        <h2 className="font-serif text-4xl md:text-6xl mb-6">Join the Adventure</h2>
        <p className="opacity-80 mb-8 max-w-lg mx-auto">Get the "What to Pack" guide and new episode alerts sent to your inbox.</p>
        <div className="flex justify-center gap-2 max-w-md mx-auto">
            <input className="px-6 py-4 rounded-l-full w-full text-black focus:outline-none" placeholder="Email Address" />
            <button className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-r-full uppercase tracking-widest hover:bg-yellow-400">
                Join
            </button>
        </div>
      </section>

    </main>
  );
}