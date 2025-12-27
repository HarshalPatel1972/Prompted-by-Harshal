import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/utils";

export function BentoGrid() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            className={cn(
               // Simple bento logic: First item spans 2 cols, fourth item spans 2 cols
              i === 0 || i === 3 ? "md:col-span-2" : "md:col-span-1"
            )}
          />
        ))}
      </div>
    </section>
  );
}
