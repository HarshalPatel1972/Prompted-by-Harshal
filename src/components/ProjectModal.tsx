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
                className="text-3xl md:text-4xl font-bold font-serif text-white mb-2"
              >
                {project.title}
              </motion.h2>
              <motion.p 
                layoutId={`tagline-${project.id}`}
                className="text-sm text-zinc-300 font-sans italic opacity-90 border-l-2 border-purple-500 pl-3"
              >
                {project.tagline}
              </motion.p>
           </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex-1 p-6 md:p-8 overflow-y-auto custom-scrollbar bg-zinc-900/95">
          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xs uppercase tracking-widest text-zinc-500 mb-2 font-bold">The Vision</h3>
            <p className="text-zinc-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Hallucination Box */}
          <div className="mb-8 p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-200 text-sm">
             <div className="flex items-center gap-2 mb-2 text-orange-400 font-bold uppercase text-xs tracking-wider">
               <AlertTriangle size={14} />
               Man vs Machine Moment
             </div>
             <p className="italic">"{project.challenge}"</p>
          </div>

          {/* Honesty Meter */}
          <div className="mb-8">
            <h3 className="text-xs uppercase tracking-widest text-zinc-500 mb-4 font-bold">Honesty Meter</h3>
            <div className="bg-zinc-800 rounded-full h-4 w-full flex overflow-hidden relative">
               <div 
                 className="h-full bg-purple-500 flex items-center justify-center text-[10px] font-bold text-white relative group"
                 style={{ width: `${project.stats.human_percentage}%` }}
               >
                 <span className="opacity-0 group-hover:opacity-100 absolute transition-opacity">Human {project.stats.human_percentage}%</span>
               </div>
               <div 
                 className="h-full bg-blue-500 flex items-center justify-center text-[10px] font-bold text-white relative group"
                 style={{ width: `${project.stats.ai_percentage}%` }}
               >
                  <span className="opacity-0 group-hover:opacity-100 absolute transition-opacity">AI {project.stats.ai_percentage}%</span>
               </div>
            </div>
            <div className="flex justify-between text-xs text-zinc-500 mt-2 font-mono">
               <span>🧠 Strategy: {project.stats.human_percentage}%</span>
               <span>🤖 Execution: {project.stats.ai_percentage}%</span>
            </div>
             <div className="mt-2 text-xs text-zinc-600">
               <span className="font-bold text-green-500">{project.stats.hallucinations_fixed}</span> hallucinations fixed manually.
             </div>
          </div>

          {/* Prompt Block */}
          <div className="mb-8">
             <h3 className="text-xs uppercase tracking-widest text-zinc-500 mb-2 font-bold flex items-center gap-2">
               <Terminal size={12} />
               Key Prompt
             </h3>
             <div className="bg-black/50 p-4 rounded-lg border border-white/5 font-mono text-xs text-green-400 overflow-x-auto">
               <span className="text-purple-400">user@harshal:~$</span> {project.prompt}
             </div>
          </div>

           {/* Actions */}
           <div className="flex gap-4 mt-auto">
             <a 
               href={project.link} 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex-1 flex items-center justify-center gap-2 bg-white text-black font-bold py-3 px-6 rounded-xl hover:bg-zinc-200 transition-colors"
             >
               Visit Live Site <ExternalLink size={16} />
             </a>
           </div>

        </div>
      </motion.div>
    </>
  );
}
