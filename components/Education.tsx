"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, School } from "lucide-react";

const educationData = [
  {
    institution: "Government Engineering College, Barton Hill",
    degree: "B.Tech in Information Technology",
    duration: "Dec 2021 – Apr 2025",
    result: "CGPA: 7.34",
    icon: GraduationCap,
  },
  {
    institution: "Pandallur Higher Secondary School",
    degree: "Plus Two (Class XII)",
    duration: "2018 – 2020",
    result: "Score: 94.9%",
    icon: BookOpen,
  },
  {
    institution: "Pandallur Higher Secondary School",
    degree: "SSLC (Class X)",
    duration: "2015 – 2018",
    result: "Score: 100%",
    icon: School,
  },
];

export default function Education() {
  return (
    <section className="relative bg-[#121212] px-8 py-32 md:px-24">
      <div className="mb-24">
        <h2 className="text-sm font-medium uppercase tracking-[0.4em] text-white/30">
          Academic Foundation
        </h2>
        <div className="h-px w-32 bg-white/10 mt-6" />
      </div>

      <div className="mx-auto max-w-5xl space-y-12">
        {educationData.map((edu, index) => {
          const Icon = edu.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-10 backdrop-blur-2xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04] md:flex-row md:items-center shadow-2xl shadow-black/50"
            >
              <div className="flex items-center gap-8">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.5rem] bg-white/5 text-white/60 group-hover:bg-white group-hover:text-black transition-all duration-500 group-hover:scale-110">
                  <Icon strokeWidth={1.5} className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold tracking-tight text-white">
                    {edu.institution}
                  </h3>
                  <p className="mt-2 text-xl font-light text-white/60 group-hover:text-white/80 transition-colors">
                    {edu.degree}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col md:mt-0 md:text-right">
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/40">
                  {edu.duration}
                </span>
                <span className="mt-3 text-2xl font-semibold tracking-tight text-white/90">
                  {edu.result}
                </span>
              </div>

              {/* Glowing Node Animation */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -inset-px -z-10 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
