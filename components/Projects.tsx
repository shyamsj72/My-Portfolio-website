"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";

const projects = [
  {
    title: "AI Bone Fracture Detection",
    category: "AI / Machine Learning",
    tech: "Python, YOLOv8, Fast R-CNN, VGG16, Flask",
    description: "An AI-powered medical diagnostic tool that uses YOLOv8, Fast R-CNN, and VGG16 to accurately detect and localize bone fractures in X-ray images through a modern web interface.",
    image: "/projects/medical.png",
    github: "https://github.com/shyamsj72/AI-bone-fracture-detection",
    demo: null,
  },
  {
    title: "WeatherNow",
    category: "Frontend / API",
    tech: "JavaScript, OpenWeather API, Voice Search",
    description: "WeatherNow is a real-time weather forecasting web app with built-in voice search and text-to-speech accessibility features.",
    image: "/projects/weather.png",
    github: "https://github.com/shyamsj72/WeatherNow",
    demo: "https://weathernow-topaz.vercel.app",
    isWeather: true
  },
  {
    title: "ShopSphere",
    category: "Salesforce Commerce",
    tech: "Salesforce, LWC, Apex, SOQL",
    description: "ShopSphere is an ecommerce platform built on Salesforce. Features a modern responsive UI, product catalog, cart & checkout flow, and custom CRM integration showcasing enterprise-level full-stack skills.",
    image: "/projects/ecommerce.png",
    github: "https://github.com/shyamsj72/shopsphere-salesforce-ecommerce",
    demo: null,
  },
  {
    title: "StakeX",
    category: "Web3 / DeFi",
    tech: "TypeScript, Solidity, React, Web3.js",
    description: "SCAI StakeX is a full-stack DeFi staking platform. Users can connect their wallets, stake ERC20 tokens into multi-tier pools, earn time-based rewards, and unstake seamlessly.",
    image: "/projects/stakex.png",
    github: "https://github.com/shyamsj72/StakeX",
    demo: "https://stake-x-nu.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#121212] px-8 py-32 md:px-24">
      <div className="mb-32">
        <h2 className="text-sm font-medium uppercase tracking-[0.4em] text-white/30">
          Selected Works
        </h2>
        <div className="h-px w-32 bg-white/10 mt-6" />
      </div>

      <div className="grid grid-cols-1 gap-24 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-[3rem] border border-white/5 bg-white/[0.02] p-8 backdrop-blur-2xl transition-all duration-700 hover:border-white/20 ${project.isWeather ? 'hover:shadow-[0_0_80px_-20px_rgba(59,130,246,0.3)]' : 'hover:shadow-[0_0_80px_-20px_rgba(255,255,255,0.05)]'}`}
          >
            {/* Project Image Container */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2rem]">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover grayscale transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-40" />
              
              {/* Specialized Weather Accents */}
              {project.isWeather && (
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute top-10 right-10 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
                  <div className="absolute bottom-10 left-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-[100px] animate-pulse" />
                </div>
              )}

              {/* Tech Pills */}
              <div className="absolute bottom-6 left-6 flex flex-wrap gap-2 transition-transform duration-700 group-hover:-translate-y-2">
                {project.tech.split(", ").map((t, i) => (
                  <span key={i} className="rounded-full bg-black/40 px-4 py-2 text-[10px] font-medium uppercase tracking-widest text-white/80 backdrop-blur-xl border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-12 flex flex-col px-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/40">
                {project.category}
              </p>
              <h3 className="mt-4 text-4xl font-bold tracking-tight text-white lg:text-5xl">
                {project.title}
              </h3>
              <p className="mt-6 text-lg font-light leading-relaxed text-white/50 max-w-lg">
                {project.description}
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-6">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    className="group/btn relative flex h-14 items-center gap-3 overflow-hidden rounded-full bg-white px-8 text-xs font-bold uppercase tracking-widest text-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition-opacity duration-500 group-hover/btn:opacity-100 group-hover/btn:animate-shine" />
                  </a>
                )}
                
                <a
                  href={project.github}
                  target="_blank"
                  className="group/btn relative flex h-14 items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-xl transition-all hover:bg-white/10 hover:border-white/40 active:scale-95"
                >
                  <GitBranch className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
            
            {/* Dynamic Glow Layer */}
            <div className="absolute -inset-px -z-10 rounded-[3rem] bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-1000 group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
