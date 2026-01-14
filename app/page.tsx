"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, Instagram, Twitter, Linkedin, ArrowRight } from "lucide-react";
import Head from "next/head";

// --- Real Data from her site ---
const FEATURED_POSTS = [
  {
    title: "Mt. Kilimanjaro",
    category: "Expedition",
    excerpt: "Sitting at the roof of Africa. Uhuru peak stands at 5,895m. We used the Machame route for 6 days of intensity and beauty.",
    img: "https://onyangobeatrice.com/wp-content/uploads/2023/03/summit-board.jpeg",
    link: "https://onyangobeatrice.com/2023/03/28/mt-kilimanjaro/"
  },
  {
    title: "What to Pack",
    category: "Guide",
    excerpt: "One of the most common challenges is knowing what you need. A general guide to help you figure it out.",
    img: "https://onyangobeatrice.com/wp-content/uploads/2023/03/img_0324-1.jpeg?strip=info&w=2000",
    link: "https://onyangobeatrice.com/2023/03/11/what-to-pack/"
  },
  {
    title: "Keep Doing It",
    category: "Mindset",
    excerpt: "Consistency is key. Unique stories and personal wisdom about hiking including what has worked for us.",
    img: "https://onyangobeatrice.com/wp-content/uploads/2023/03/fullsizerender-4.jpeg?strip=info&w=2000",
    link: "https://onyangobeatrice.com/2023/03/11/keep-doing-it/"
  },
  {
    title: "Why Do You Hike?",
    category: "Philosophy",
    excerpt: "Is it the view? The pain? The glory? We explore the deep reasons behind the trek.",
    img: "https://onyangobeatrice.com/wp-content/uploads/2023/03/fullsizerender-5.jpeg?strip=info&w=2000",
    link: "https://onyangobeatrice.com/2023/03/11/why-do-you-hike/"
  }
];

export default function Home() {
  return (
    <main className="bg-white text-black min-h-screen">
      {/* Navigation - Clean & Sticky */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-6 md:px-12 py-6 z-50 mix-blend-difference text-white">
        <div className="text-2xl font-bold tracking-tighter uppercase">BTH.</div>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          <a href="#" className="hover:text-yellow-400 transition-colors">Podcast</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Journal</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">About</a>
        </div>
        <button className="text-sm font-bold border-b border-white pb-1 hover:text-yellow-400 hover:border-yellow-400 transition-all">
          SUBSCRIBE
        </button>
      </nav>

      {/* HERO SECTION - Immersive & Bright */}
      <header className="relative h-screen w-full overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://onyangobeatrice.com/wp-content/uploads/2023/03/fullsizerender.jpeg?w=1024')",
            backgroundPosition: "center 30%" // Focus on her sitting
          }}
        >
          {/* Gradient overlay to make text pop but keep image bright */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/10" />
        </motion.div>

        <div className="absolute bottom-20 left-6 md:left-12 max-w-4xl z-10 text-white">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1 className="text-[12vw] md:text-[8vw] leading-[0.9] font-serif mb-4">
              Beyond The <br/><span className="italic font-light">Horizon</span>
            </h1>
            <p className="text-lg md:text-xl font-light max-w-xl leading-relaxed opacity-90 mb-8">
              Curated hiking stories, trail guides, and the relentless pursuit of the summit. Hosted by Beatrice Onyango.
            </p>
            <div className="flex gap-4">
               <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-sm tracking-widest hover:bg-yellow-400 transition-colors flex items-center gap-2">
                 <Play size={16} fill="black" /> LISTEN NOW
               </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* INTRO / ABOUT - Clean White Space */}
      <section className="py-24 px-6 md:px-24 bg-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">The Mission</span>
          <h2 className="text-3xl md:text-5xl font-serif leading-tight text-gray-900">
            "Whether you are a beginner or an experienced adventurer, we share unique stories and wisdom gleaned from the wild."
          </h2>
          <div className="flex justify-center gap-6 pt-8 text-sm font-bold text-gray-500 uppercase tracking-widest">
            <span>Spotify</span>
            <span>•</span>
            <span>Apple Podcasts</span>
            <span>•</span>
            <span>Google</span>
          </div>
        </div>
      </section>

      {/* MAGAZINE GRID - The "Poppy" Part */}
      <section className="py-12 px-6 md:px-12 bg-gray-50">
        <div className="flex justify-between items-end mb-16">
          <h3 className="text-4xl md:text-6xl font-serif text-gray-900">Latest<br/>Expeditions</h3>
          <a href="#" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:gap-4 transition-all">
            View All <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {FEATURED_POSTS.map((post, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden aspect-[4/3] rounded-sm mb-6 relative">
                 {/* Hover effect: Slight zoom, brighter */}
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                  {post.category}
                </div>
              </div>
              <h4 className="text-3xl font-serif mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h4>
              <p className="text-gray-500 leading-relaxed mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <span className="text-xs font-bold uppercase tracking-widest border-b border-gray-300 pb-1 group-hover:border-blue-600 transition-colors inline-flex items-center gap-1">
                Read Story <ArrowUpRight size={12} />
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER - Simple & Classy */}
      <footer className="bg-[#1a1a1a] text-white py-20 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6 max-w-md">
            <h2 className="text-4xl font-serif">BTH.</h2>
            <p className="text-gray-400">
              Join the newsletter. Get the "What to Pack" guide delivered to your inbox immediately.
            </p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email Address" className="bg-white/10 border border-white/20 px-4 py-3 rounded-sm w-full focus:outline-none focus:border-white transition" />
              <button className="bg-white text-black px-6 font-bold uppercase tracking-widest text-xs hover:bg-gray-200">Submit</button>
            </div>
          </div>
          <div className="flex gap-6">
            <Instagram className="text-gray-400 hover:text-white cursor-pointer" />
            <Twitter className="text-gray-400 hover:text-white cursor-pointer" />
            <Linkedin className="text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/10 text-xs text-gray-500 flex justify-between">
          <span>© 2024 Beatrice Onyango.</span>
          <span>Nairobi, Kenya</span>
        </div>
      </footer>
    </main>
  );
}