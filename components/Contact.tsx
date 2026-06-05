"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#121212] px-8 py-40 md:px-24">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-24 lg:grid-cols-2">
          
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-6xl font-bold tracking-tight text-white md:text-[5.5rem] leading-none drop-shadow-lg">
              Let’s build <br />
              <span className="text-white/40">something <br /> exceptional.</span>
            </h2>
            <p className="mt-12 max-w-md text-xl font-light leading-relaxed tracking-wide text-white/50">
              Available for Salesforce Development, Full-Stack Engineering, and Creative Frontend Projects.
            </p>

            <div className="mt-20 space-y-10">
               <div className="flex items-center gap-8 group">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[1.2rem] bg-white/5 border border-white/10 group-hover:bg-white group-hover:text-black transition-all shadow-[0_0_20px_-10px_rgba(255,255,255,0.1)]">
                    <Mail className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <a href="mailto:shyamjith2302@gmail.com" className="text-2xl font-light tracking-tight hover:text-white transition-colors group-hover:tracking-wider">shyamjith2302@gmail.com</a>
               </div>

               <div className="flex items-center gap-8 group">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[1.2rem] bg-white/5 border border-white/10 group-hover:bg-white group-hover:text-black transition-all shadow-[0_0_20px_-10px_rgba(255,255,255,0.1)]">
                    <Phone className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <a href="tel:+919539553727" className="text-2xl font-light tracking-tight hover:text-white transition-colors group-hover:tracking-wider">+91 9539553727</a>
               </div>

               <div className="flex items-center gap-8 group text-white/50">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[1.2rem] bg-white/5 border border-white/10 group-hover:bg-white group-hover:text-black transition-all shadow-[0_0_20px_-10px_rgba(255,255,255,0.1)]">
                    <MapPin className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <span className="text-2xl font-light tracking-tight group-hover:tracking-wider transition-all">Malappuram, Kerala, India</span>
               </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[3rem] border border-white/5 bg-white/[0.02] p-10 backdrop-blur-3xl md:p-14 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="space-y-3">
                <label className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/40">Your Name</label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-[1.5rem] border border-white/5 bg-[#121212]/50 px-8 py-5 text-lg text-white placeholder:text-white/20 focus:border-white/20 focus:bg-white/5 focus:outline-none focus:ring-0 transition-all font-light"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/40">Email Address</label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-[1.5rem] border border-white/5 bg-[#121212]/50 px-8 py-5 text-lg text-white placeholder:text-white/20 focus:border-white/20 focus:bg-white/5 focus:outline-none focus:ring-0 transition-all font-light"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/40">Subject</label>
                <input
                  required
                  name="subject"
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full rounded-[1.5rem] border border-white/5 bg-[#121212]/50 px-8 py-5 text-lg text-white placeholder:text-white/20 focus:border-white/20 focus:bg-white/5 focus:outline-none focus:ring-0 transition-all font-light"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/40">Message</label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Hello Shyam, I'd like to talk about..."
                  className="w-full rounded-[1.5rem] border border-white/5 bg-[#121212]/50 px-8 py-5 text-lg text-white placeholder:text-white/20 focus:border-white/20 focus:bg-white/5 focus:outline-none focus:ring-0 transition-all font-light resize-none"
                />
              </div>

              <button
                disabled={status === "loading"}
                className="group relative h-16 w-full mt-4 overflow-hidden rounded-[1.2rem] bg-white text-xs font-bold uppercase tracking-[0.3em] text-black transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)]"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
                </span>
                <div className="absolute inset-0 -z-0 translate-y-full bg-[#121212] transition-transform duration-500 group-hover:translate-y-0" />
              </button>
              
              {status === "error" && (
                <p className="text-center text-xs font-bold uppercase tracking-widest text-red-500">
                  Failed to send. Please try again.
                </p>
              )}
            </form>
            
            {/* Form Glow */}
            <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-50" />
          </motion.div>
        </div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute -bottom-64 -right-64 -z-10 h-[800px] w-[800px] rounded-full bg-blue-500/10 blur-[150px]" />
      <div className="absolute top-0 -left-64 -z-10 h-[600px] w-[600px] rounded-full bg-white/5 blur-[150px]" />
    </section>
  );
}
