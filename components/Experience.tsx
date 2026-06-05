"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, Layers3, PenTool, Palette, Sparkles, MonitorPlay } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "CRMantra Technologies Private Limited",
      role: "Software Engineer",
      duration: "May 2025 – Mar 2026",
      location: "Kochi, Kerala",
      type: "Full-Time",
      highlights: [
        "Developed reusable Lightning Web Components (LWC)",
        "Automated Salesforce workflows using Apex and Flows",
        "Built REST API integrations",
        "Designed scalable CRM architectures",
        "Worked in Agile/Scrum environments",
        "Created Figma UI/UX prototypes"
      ],
      icons: [Briefcase, Code2, Layers3],
      gradient: "from-blue-500/20 via-indigo-500/5 to-transparent",
      glow: "group-hover:shadow-[0_0_60px_-15px_rgba(59,130,246,0.3)] hover:border-blue-500/30",
    },
    {
      company: "GADS",
      role: "Digital Media Intern",
      duration: "May 2024 – Jan 2025",
      location: "Trivandrum, Kerala, India",
      type: "Remote • Freelance",
      description: "Worked on digital media design, content creation, branding visuals, and creative digital experiences while collaborating remotely on modern media workflows.",
      highlights: [],
      icons: [PenTool, Palette, Sparkles, MonitorPlay],
      gradient: "from-pink-500/10 via-rose-500/5 to-transparent",
      glow: "group-hover:shadow-[0_0_60px_-15px_rgba(244,63,94,0.2)] hover:border-pink-500/30",
    }
  ];

  return (
    <section id="experience" className="relative bg-[#121212] px-8 py-40 md:px-24">
      <div className="mb-32">
        <h2 className="text-sm font-medium uppercase tracking-[0.4em] text-white/30">
          Professional Timeline
        </h2>
        <div className="h-px w-32 bg-white/10 mt-6" />
      </div>

      <div className="mx-auto max-w-5xl relative">
        {/* Glow Line */}
        <div className="absolute left-[27px] md:left-[39px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-white/20 via-white/5 to-transparent" />
        
        <div className="space-y-24 w-full">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative pl-20 md:pl-28 w-full"
            >
              {/* Animated Timeline Node */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                className="absolute left-[20px] md:left-[32px] top-[40px] h-4 w-4 rounded-full border-[2px] border-[#121212] bg-white ring-4 ring-white/10 z-10"
              />

              {/* Glassmorphism Card */}
              <div 
                className={`group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 md:p-12 backdrop-blur-2xl transition-all duration-700 ${exp.glow}`}
              >
                {exp.company === "GADS" && (
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-pink-500/5 blur-[100px]"
                  />
                )}
                
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 mb-8">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-xl font-light text-white/60 flex flex-wrap items-center gap-3">
                      <span className="text-white/90 font-medium">{exp.company}</span>
                      <span className="hidden md:inline-block h-1 w-1 rounded-full bg-white/20" />
                      <span>{exp.location}</span>
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-2 xl:items-end">
                    <span className="text-sm font-semibold uppercase tracking-widest text-white/30 border border-white/10 rounded-full px-4 py-2 w-max xl:w-auto">
                      {exp.duration}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-2">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-10">
                  {exp.icons.map((Icon, i) => (
                    <div key={i} className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 transition-colors duration-500 group-hover:bg-white/10 group-hover:border-white/20">
                      <Icon className="h-5 w-5 text-white/70" strokeWidth={1.5} />
                    </div>
                  ))}
                </div>

                {exp.description && (
                  <p className="text-lg font-light leading-relaxed text-white/70">
                    {exp.description}
                  </p>
                )}

                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {exp.highlights.map((item, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                        className="flex items-start gap-3 text-base font-light leading-relaxed text-white/60"
                      >
                        <span className="mt-2.5 h-[3px] w-[3px] shrink-0 rounded-full bg-white/40 group-hover:bg-blue-400 group-hover:shadow-[0_0_8px_rgba(96,165,250,0.8)] transition-all duration-300" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                )}

                {/* Animated Inner Shine */}
                <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${exp.gradient} opacity-0 transition-opacity duration-1000 group-hover:opacity-100`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
