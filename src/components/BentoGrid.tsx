"use client";
import { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import { ProjectModal } from "./ProjectModal";

export function BentoGrid() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            layoutId={`card-${project.id}`}
            onClick={() => setSelectedId(project.id)}
            className={cn(
              // Simple bento logic: First item spans 2 cols, fourth item spans 2 cols
              i === 0 || i === 3 ? "md:col-span-2" : "md:col-span-1"
            )}
          />
        ))}
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
