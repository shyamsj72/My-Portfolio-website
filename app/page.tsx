import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import ResumeButton from "@/components/ResumeButton";

export default function Home() {
  return (
    <main className="relative bg-[#121212] text-white selection:bg-white selection:text-black">
      {/* Infrastructure & UI Layers */}
      <CustomCursor />
      <ScrollProgress />
      <ResumeButton />
      
      {/* Noise Texture Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03] grayscale bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Scrollytelling Hero Section */}
      <section className="relative px-0">
        <ScrollyCanvas />
        <div className="absolute inset-0">
          <Overlay />
        </div>
      </section>

      {/* Narrative Flow */}
      <div className="relative z-20">
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Certifications />
        <Contact />
      </div>

      {/* Footer */}
      <footer className="flex flex-col items-center justify-between gap-12 border-t border-white/5 bg-[#121212] px-8 py-24 md:flex-row md:px-24">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold tracking-tighter">SHYAMJITH K.</h2>
          <p className="max-w-[320px] text-[10px] font-medium uppercase tracking-[0.3em] text-white/30 leading-relaxed">
            Salesforce Developer + Creative Full-Stack Engineer <br />
            Designed & Developed by Shyamjith K © 2026.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-x-12 gap-y-6 text-[10px] font-bold uppercase tracking-[0.4em] text-white/50">
          <a href="https://linkedin.com/in/shyamjith-k/" target="_blank" className="transition-all hover:text-white hover:tracking-[0.5em]">LinkedIn</a>
          <a href="https://github.com/shyamsj72" target="_blank" className="transition-all hover:text-white hover:tracking-[0.5em]">GitHub</a>
          <a href="mailto:shyamjith2302@gmail.com" className="transition-all hover:text-white hover:tracking-[0.5em]">Email</a>
        </div>
      </footer>

      {/* Global Mesh Backgrounds */}
      <div className="fixed bottom-0 right-0 -z-10 h-[50vw] w-[50vw] rounded-full bg-blue-500/5 blur-[150px]" />
      <div className="fixed top-0 left-0 -z-10 h-[50vw] w-[50vw] rounded-full bg-white/5 blur-[150px]" />
    </main>
  );
}
