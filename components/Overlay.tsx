"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Download, ArrowRight, Mail } from "lucide-react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1: 0% - 15% (Hero)
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.15], [0, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [20, -100]); // Smooth vertical exit

  // Section 2: 20% - 35%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.25, 0.35], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.35], [50, -50]);

  // Section 3: 40% - 55%
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.45, 0.55], [0, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.4, 0.55], [50, -50]);

  // Section 4: 60% - 75%
  const opacity4 = useTransform(scrollYProgress, [0.6, 0.65, 0.75], [0, 1, 0]);
  const y4 = useTransform(scrollYProgress, [0.6, 0.75], [50, -50]);

  return (
    <div ref={containerRef} className="pointer-events-none relative h-[500vh] w-full">
      {/* Section 1: Redesigned Hero */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="sticky top-0 flex h-screen w-full flex-col justify-center px-8 md:px-24"
      >
        <div className="flex max-w-7xl flex-col items-start gap-12 pt-20">
          <div>
            <h1 className="text-6xl font-bold tracking-tight text-white md:text-[8rem] lg:text-[10rem] leading-none drop-shadow-2xl">
              SHYAMJITH K
            </h1>
            <h2 className="mt-8 text-xl font-medium uppercase tracking-[0.4em] text-white/50 md:mt-12 md:text-3xl">
              SOFTWARE ENGINEER
            </h2>
          </div>

          <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed tracking-wide text-white/70 md:mt-16 md:text-2xl">
            Salesforce Developer &bull; Full-Stack Engineer &bull; AI Engineer
          </p>

          {/* Premium Hero CTAs */}
          <div className="pointer-events-auto mt-16 flex flex-wrap items-center gap-6 md:mt-24">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: window.innerHeight * 5.2, behavior: 'smooth' }); // Approximate scroll to projects
              }}
              className="group relative flex h-14 items-center gap-3 overflow-hidden rounded-full bg-white px-8 text-xs font-bold uppercase tracking-widest text-[#121212] transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
            >
              <span>View Projects</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/0 via-white/50 to-white/0 opacity-0 group-hover:animate-shine" />
            </a>

            <a
              href="/resume/Shyamjith_K_Resume.pdf"
              download="Shyamjith_K_Resume.pdf"
              target="_blank"
              className="group relative flex h-14 items-center gap-3 overflow-hidden rounded-full border border-white/20 bg-white/5 px-8 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-xl transition-all hover:bg-white/10 hover:border-white/40 active:scale-95"
            >
              <Download className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                 e.preventDefault();
                 window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
              }}
              className="group relative flex h-14 items-center justify-center rounded-full border border-transparent px-8 text-xs font-bold uppercase tracking-widest text-white/70 transition-all hover:border-white/10 hover:bg-white/5 hover:text-white"
            >
              <Mail className="h-4 w-4 mr-3" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="sticky top-0 flex h-screen w-full flex-col justify-center px-8 md:px-24"
      >
        <h2 className="max-w-4xl text-4xl font-semibold leading-tight md:text-7xl">
          Building scalable <br />
          <span className="text-white/40">digital experiences.</span>
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="sticky top-0 flex h-screen w-full flex-col items-end justify-center px-8 text-right md:px-24"
      >
        <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-7xl uppercase tracking-tighter">
          Salesforce. <br />
          Full-Stack. <br />
          <span className="text-white/40">AI / ML.</span>
        </h2>
      </motion.div>

      {/* Section 4 */}
      <motion.div
        style={{ opacity: opacity4, y: y4 }}
        className="sticky top-0 flex h-screen w-full flex-col items-center justify-center px-8 text-center"
      >
        <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-7xl">
          "Bridging design <br />
          <span className="text-white/40">and engineering."</span>
        </h2>
      </motion.div>
    </div>
  );
}
