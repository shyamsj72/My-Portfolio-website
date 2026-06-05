"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Salesforce",
    skills: ["Apex", "LWC", "OmniStudio", "Salesforce Flows", "SOQL", "Sales Cloud", "Service Cloud", "REST APIs"],
  },
  {
    category: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3", "JavaScript"],
  },
  {
    category: "Backend & AI",
    skills: ["Python", "Flask", "TensorFlow", "OpenCV", "PostgreSQL", "MySQL"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Postman"],
  },
];

export default function Skills() {
  return (
    <section className="relative bg-[#121212] px-8 py-32 md:px-24">
      <div className="mb-24">
        <h2 className="text-xs font-semibold uppercase tracking-[0.4em] text-white/30">
          Tech Stack
        </h2>
        <div className="h-px w-24 bg-white/10 mt-4" />
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={groupIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: groupIndex * 0.1 }}
            className="group"
          >
            <h3 className="mb-6 text-sm font-medium tracking-[0.2em] text-white/60 uppercase">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1.5 text-xs font-light text-white/80 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.08]"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
