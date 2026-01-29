"use client";
import { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectModal } from "./ProjectModal";
import { Search, X as CloseIcon } from "lucide-react";

export function BentoGrid() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredProjects = projects.filter((p) => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.badges.some(b => b.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <section className="container mx-auto px-4 py-12">
      {/* Search Interface */}
      <div className="max-w-md mx-auto mb-16 relative group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-accent-primary transition-colors">
          <Search size={18} />
        </div>
        <input 
          type="text"
          placeholder="Filter by tech or project name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-zinc-900/50 border border-white/5 rounded-2xl py-4 pl-12 pr-12 text-sm font-sans focus:outline-none focus:border-accent-primary/50 transition-all backdrop-blur-md placeholder:text-zinc-600"
        />
        {searchQuery && (
          <button 
            onClick={() => setSearchQuery("")}
            className="absolute inset-y-0 right-4 flex items-center text-zinc-500 hover:text-white transition-colors"
          >
            <CloseIcon size={18} />
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className={cn(
                i === 0 || i === 3 ? "md:col-span-2" : "md:col-span-1"
              )}
            >
              <ProjectCard
                project={project}
                layoutId={`card-${project.id}`}
                onClick={() => setSelectedId(project.id)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedId(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}

