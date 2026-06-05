"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative bg-[#121212] px-8 py-32 md:px-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="group relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 md:p-16 backdrop-blur-3xl"
      >
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Text Content */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.4em] text-white/30 mb-8">
              Expertise
            </h2>
            <p className="text-2xl font-light leading-relaxed tracking-tight text-white/90 md:text-3xl">
              Salesforce Certified Platform Developer I and OmniStudio Developer with experience building 
              <span className="text-white font-normal block mt-2">scalable CRM systems, immersive interfaces, and AI-powered applications.</span>
            </p>
            <div className="mt-8 h-px w-24 bg-gradient-to-r from-white/20 to-transparent" />
          </div>

          {/* Sub Content */}
          <div className="space-y-6">
            <p className="text-lg font-light leading-relaxed text-white/50">
              I specialize in Salesforce development, full-stack engineering, UI/UX systems, and modern frontend 
              experiences using React, Next.js, Python, and AI technologies.
            </p>
            <div className="flex flex-wrap gap-3">
               <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-medium uppercase tracking-widest text-white/40 backdrop-blur-md">
                  Salesforce
               </div>
               <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-medium uppercase tracking-widest text-white/40 backdrop-blur-md">
                  Full-Stack
               </div>
               <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-medium uppercase tracking-widest text-white/40 backdrop-blur-md">
                  AI/ML
               </div>
            </div>
          </div>
        </div>

        {/* Animated Gradient Border Layer */}
        <div className="absolute -inset-px -z-10 bg-gradient-to-br from-white/20 via-transparent to-white/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      </motion.div>
    </section>
  );
}
