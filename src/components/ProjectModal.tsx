"use client";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { X, ExternalLink, AlertTriangle, Terminal } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
      />
      <motion.div
        layoutId={`card-${project.id}`}
        className="fixed inset-0 m-auto w-full max-w-4xl h-[90vh] md:h-auto md:max-h-[85vh] bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden z-[60] flex flex-col md:flex-row shadow-2xl"
      >
        <button
          onClick={(e) => {
             e.stopPropagation();
             onClose();
          }}
          className="absolute top-4 right-4 z-50 p-2 bg-black/50 rounded-full text-white/70 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Left Side: Visuals */}
        <div className="w-full md:w-2/5 h-64 md:h-auto relative">
           <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent md:bg-gradient-to-r" />
           
             <div className="absolute bottom-4 left-4 right-4">
              <motion.h2 
                layoutId={`title-${project.id}`}
                className="text-3xl md:text-5xl font-black font-serif text-white mb-2 tracking-tighter"
              >
                {project.title}
              </motion.h2>
              <motion.p 
                layoutId={`tagline-${project.id}`}
                className="text-sm md:text-base text-zinc-300 font-sans italic opacity-90 border-l-2 border-accent-primary pl-3"
              >
                {project.tagline}
              </motion.p>
           </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex-1 p-6 md:p-10 overflow-y-auto custom-scrollbar bg-zinc-900/98">
          {/* Description */}
          <div className="mb-10">
            <h3 className="text-xs uppercase tracking-[0.3em] text-accent-primary mb-3 font-black">The Vision</h3>
            <p className="text-zinc-300 leading-relaxed text-lg font-light">
              {project.description}
            </p>
          </div>

          {/* Hallucination Box */}
          <div className="mb-10 p-5 rounded-2xl bg-accent-secondary/5 border border-accent-secondary/20 text-accent-secondary/90 text-sm leading-relaxed">
             <div className="flex items-center gap-2 mb-3 text-accent-secondary font-black uppercase text-[10px] tracking-widest">
               <AlertTriangle size={14} />
               Man vs Machine Moment
             </div>
             <p className="italic font-medium">"{project.challenge}"</p>
          </div>

          {/* Honesty Meter */}
          <div className="mb-10">
            <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-6 font-black">Architecture Stats</h3>
            <div className="bg-zinc-800/50 rounded-full h-6 w-full flex overflow-hidden relative border border-white/5 shadow-inner">
               <div 
                 className="h-full bg-accent-primary flex items-center justify-center text-[10px] font-black text-white relative group transition-all duration-700"
                 style={{ width: `${project.stats.human_percentage}%` }}
               >
                 <span className="opacity-0 group-hover:opacity-100 absolute transition-opacity uppercase tracking-widest whitespace-nowrap">Human Intuition</span>
               </div>
               <div 
                 className="h-full bg-zinc-600 flex items-center justify-center text-[10px] font-black text-zinc-300 relative group transition-all duration-700"
                 style={{ width: `${project.stats.ai_percentage}%` }}
               >
                  <span className="opacity-0 group-hover:opacity-100 absolute transition-opacity uppercase tracking-widest whitespace-nowrap">AI Execution</span>
               </div>
            </div>
            <div className="flex justify-between text-[11px] text-zinc-500 mt-4 font-mono uppercase tracking-widest">
               <span className="flex items-center gap-2"><div className="size-2 rounded-full bg-accent-primary" /> Strategy: {project.stats.human_percentage}%</span>
               <span className="flex items-center gap-2"><div className="size-2 rounded-full bg-zinc-600" /> Synthesis: {project.stats.ai_percentage}%</span>
            </div>
          </div>

          {/* Prompt Block */}
          <div className="mb-10">
             <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-3 font-black flex items-center gap-2">
               <Terminal size={14} className="text-accent-primary" />
               Seed Prompt
             </h3>
             <div className="bg-black/80 p-5 rounded-2xl border border-white/5 font-mono text-sm text-green-400 overflow-x-auto shadow-2xl">
               <span className="text-accent-primary">forge@harshal:~$</span> {project.prompt}
             </div>
          </div>

           {/* Actions */}
           <div className="flex gap-4 mt-auto">
             <a 
               href={project.link} 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex-1 flex items-center justify-center gap-3 bg-white text-black font-black py-4 px-8 rounded-2xl hover:bg-accent-primary hover:text-white transition-all duration-300 group shadow-lg shadow-white/5"
             >
               Explore Forge <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </a>
           </div>

        </div>
      </motion.div>
    </>
  );
}
