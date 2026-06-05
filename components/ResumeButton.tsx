"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function ResumeButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.8 }}
      className="fixed bottom-12 right-12 z-50 overflow-hidden rounded-full border border-white/20 bg-[#121212]/80 p-1 backdrop-blur-2xl transition-all hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
    >
      <a
        href="/resume/Shyamjith_K_Resume.pdf"
        download="Shyamjith_K_Resume.pdf"
        target="_blank"
        className="group relative flex h-16 items-center gap-4 px-10 text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black"
      >
        <span>Download Resume</span>
        <Download className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
      </a>
    </motion.div>
  );
}
