"use client";

import { motion } from "framer-motion";
import { BrainCircuit, CloudCog, Cpu, BadgeCheck, ShieldCheck, CodeXml, Bot, FileCode2, Terminal, Database, Table2, Brush, FileJson, BrainCog, Brain, Network, Sparkles, Layers3, Palette } from "lucide-react";

export default function Certifications() {
  // ✦ FEATURED: Salesforce Professional Certifications
  const featured = [
    {
      title: "Salesforce Certified Platform Developer I",
      issuer: "Salesforce",
      issued: "May 2025",
      credentialID: "6214436",
      skills: ["Salesforce", "Apex", "HTML", "LWC"],
      description: "Demonstrates expertise in developing custom applications on the Salesforce platform using Apex and Lightning Web Components.",
      theme: "from-sky-500/20 via-blue-500/10 to-transparent",
      borderGlow: "border-sky-500/30 shadow-[0_0_80px_-20px_rgba(56,189,248,0.35)]",
      iconColor: "text-sky-400",
      badge: "bg-sky-400/10 text-sky-300 border-sky-400/20",
      icons: [ShieldCheck, CodeXml],
    },
    {
      title: "Salesforce Certified OmniStudio Developer",
      issuer: "Salesforce",
      issued: "Aug 2025",
      credentialID: "6635754",
      skills: ["OmniStudio", "Salesforce", "FlexCards", "DataRaptors"],
      description: "Validates expertise in building guided digital experiences using OmniStudio tools — OmniScripts, FlexCards, DataRaptors, and Integration Procedures.",
      theme: "from-cyan-500/20 via-teal-500/10 to-transparent",
      borderGlow: "border-cyan-500/30 shadow-[0_0_80px_-20px_rgba(34,211,238,0.35)]",
      iconColor: "text-cyan-400",
      badge: "bg-cyan-400/10 text-cyan-300 border-cyan-400/20",
      icons: [BadgeCheck, Layers3],
    },
  ];

  const certs = [
    { title: "Google AI Fundamentals", issuer: "Coursera", issued: "May 2026", skills: ["AI", "ML"], theme: "from-blue-500/10 to-transparent", borderGlow: "group-hover:border-blue-400/30 group-hover:shadow-[0_0_40px_-10px_rgba(96,165,250,0.2)]", iconColor: "text-blue-400", icons: [Brain, Sparkles] },
    { title: "AI Fluency: Framework & Foundation", issuer: "Anthropic Claude", issued: "Apr 2026", skills: ["AI Fluency", "LLMs", "Prompt Engineering"], description: "4D AI Fluency Framework: Delegation, Description, Discernment, Diligence.", theme: "from-orange-500/10 to-transparent", borderGlow: "group-hover:border-orange-400/30 group-hover:shadow-[0_0_40px_-10px_rgba(251,146,60,0.2)]", iconColor: "text-orange-400", icons: [BrainCircuit, Sparkles] },
    { title: "Generative AI — Art of the Possible", issuer: "AWS", issued: "Apr 2026", skills: ["Generative AI", "AI"], theme: "from-amber-500/10 to-transparent", borderGlow: "group-hover:border-amber-400/30 group-hover:shadow-[0_0_40px_-10px_rgba(251,191,36,0.2)]", iconColor: "text-amber-400", icons: [CloudCog, Cpu] },
    { title: "Google AI Essentials", issuer: "Coursera", issued: "Jan 2025", theme: "from-blue-400/10 to-transparent", borderGlow: "group-hover:border-blue-300/30 group-hover:shadow-[0_0_40px_-10px_rgba(147,197,253,0.2)]", iconColor: "text-blue-300", icons: [Bot, Sparkles] },
    { title: "JavaScript (Basic)", issuer: "HackerRank", issued: "Jan 2025", credentialID: "23E9D53D1521", skills: ["JavaScript"], theme: "from-yellow-500/10 to-transparent", borderGlow: "group-hover:border-yellow-400/30 group-hover:shadow-[0_0_40px_-10px_rgba(250,204,21,0.2)]", iconColor: "text-yellow-400", icons: [FileCode2, Terminal] },
    { title: "SQL (Basic)", issuer: "HackerRank", issued: "Jan 2025", credentialID: "984B7B0130CC", skills: ["SQL", "MySQL"], theme: "from-emerald-500/10 to-transparent", borderGlow: "group-hover:border-emerald-400/30 group-hover:shadow-[0_0_40px_-10px_rgba(52,211,153,0.2)]", iconColor: "text-emerald-400", icons: [Database, Table2] },
    { title: "CSS (Basic) Certificate", issuer: "HackerRank", issued: "Aug 2024", skills: ["CSS"], theme: "from-fuchsia-500/10 to-transparent", borderGlow: "group-hover:border-fuchsia-400/30 group-hover:shadow-[0_0_40px_-10px_rgba(232,121,249,0.2)]", iconColor: "text-fuchsia-400", icons: [Palette, Brush] },
    { title: "Programming Fundamentals using Python", issuer: "Infosys", issued: "Aug 2024", skills: ["Python"], theme: "from-indigo-500/10 to-transparent", borderGlow: "group-hover:border-indigo-400/30 group-hover:shadow-[0_0_40px_-10px_rgba(129,140,248,0.2)]", iconColor: "text-indigo-400", icons: [FileJson, BrainCog] },
    { title: "Artificial Intelligence Internship", issuer: "IBM", issued: "Jul 2024", skills: ["AI", "Neural Networks"], theme: "from-violet-500/10 to-transparent", borderGlow: "group-hover:border-violet-400/30 group-hover:shadow-[0_0_40px_-10px_rgba(167,139,250,0.2)]", iconColor: "text-violet-400", icons: [Brain, Network] },
  ];

  return (
    <section className="relative bg-[#121212] px-8 py-40 md:px-24">
      <div className="mb-24">
        <h2 className="text-sm font-medium uppercase tracking-[0.4em] text-white/30">
          Certifications &amp; Accolades
        </h2>
        <div className="h-px w-32 bg-white/10 mt-6" />
      </div>

      {/* ── FEATURED: Salesforce ──────────────────────────────────── */}
      <div className="mb-20">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/25 mb-8">
          ✦ &nbsp;Professional Credentials
        </p>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {featured.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`group relative overflow-hidden rounded-[3rem] border bg-white/[0.03] p-10 md:p-14 backdrop-blur-2xl transition-all duration-700 hover:-translate-y-3 hover:bg-white/[0.05] ${cert.borderGlow}`}
            >
              {/* Issuer Pill Badge */}
              <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 ${cert.badge}`}>
                <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
                {cert.issuer}
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                {cert.icons.map((Icon, i) => (
                  <div key={i} className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 transition-colors duration-500 group-hover:bg-white/10">
                    <Icon strokeWidth={1.5} className={`h-7 w-7 transition-transform duration-500 group-hover:scale-110 ${cert.iconColor}`} />
                  </div>
                ))}
              </div>

              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
                {cert.title}
              </h3>
              <p className="text-base font-light leading-relaxed text-white/60 mb-8">{cert.description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {cert.skills.map((skill, i) => (
                  <span key={i} className="rounded-full bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-widest text-white/60 border border-white/10">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/5">
                <span className="text-xs font-semibold uppercase tracking-widest text-white/30">Issued: {cert.issued}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/20 font-mono">ID: {cert.credentialID}</span>
              </div>

              <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${cert.theme}`} />
              <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-all duration-1000 group-hover:translate-x-[100%] group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── OTHER CREDENTIALS ──────────────────────────────────────── */}
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 mb-8">
          ✦ &nbsp;Other Credentials
        </p>
        <div className="columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
              className={`group relative overflow-hidden break-inside-avoid rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 md:p-10 backdrop-blur-2xl transition-all duration-500 ${cert.borderGlow} hover:-translate-y-2`}
            >
              <div className="flex flex-wrap items-center gap-4 mb-8">
                {cert.icons.map((Icon, i) => (
                  <div key={i} className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 transition-colors group-hover:bg-white/10">
                    <Icon strokeWidth={1.5} className={`h-6 w-6 transition-transform duration-500 group-hover:scale-110 ${cert.iconColor}`} />
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-white mb-2 leading-tight">{cert.title}</h3>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="text-sm font-medium text-white/70">{cert.issuer}</span>
                <span className="h-1 w-1 rounded-full bg-white/20" />
                <span className="text-xs font-semibold uppercase tracking-widest text-white/40">{cert.issued}</span>
              </div>

              {cert.description && <p className="text-sm font-light leading-relaxed text-white/60 mb-6">{cert.description}</p>}
              {cert.credentialID && <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-6 font-mono">ID: {cert.credentialID}</p>}

              {cert.skills && cert.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="rounded-full bg-white/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-widest text-white/50 border border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${cert.theme} opacity-0 transition-opacity duration-700 group-hover:opacity-100`} />
              <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-all duration-1000 group-hover:translate-x-[100%] group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
