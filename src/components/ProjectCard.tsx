"use client";
import { useRef, MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { Project } from "@/data/projects";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ROTATION_RANGE = 15; // Decreased for subtlety

export function ProjectCard({ project, className }: { project: Project; className?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);

  // Tilt State
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // Smooth out the motion
  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });
  const transform = useMotionTemplate`perspective(1000px) rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  // Spotlight State
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to card for spotlight
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    mouseX.set(clientX);
    mouseY.set(clientY);

    // Calculate rotation for tilt
    const rX = (e.clientY / height - 0.5) * ROTATION_RANGE * -1; // Invert tilt
    const rY = (e.clientX / width - 0.5) * ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={project.link}
      target="_blank" 
      rel="noopener noreferrer"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className={cn(
        "relative group block h-80 w-full rounded-2xl bg-zinc-900/40 border border-white/10 overflow-hidden",
        "hover:shadow-2xl hover:shadow-purple-500/10 transition-shadow duration-500",
        className
      )}
    >
      {/* Spotlight Effect Layer */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-30"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Background Image with Parallax-like feel */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105"
        style={{ transform: "translateZ(-50px)" }} // Push back
      >
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-500 grayscale group-hover:grayscale-0" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      </div>

      <div className="relative z-20 h-full flex flex-col justify-between p-6">
        {/* Top Right Badges */}
        <div className="flex flex-wrap justify-end gap-2" style={{ transform: "translateZ(50px)" }}>
            {project.badges.map((badge) => (
              <span key={badge} className="px-3 py-1 text-[10px] uppercase font-bold tracking-wider text-white/80 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
                {badge}
              </span>
            ))}
        </div>

        {/* Bottom Left Text */}
        <div style={{ transform: "translateZ(75px)" }}> 
          <h3 className="text-3xl font-bold text-white font-serif mb-2 group-hover:text-purple-200 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm md:text-base text-zinc-300 font-sans font-light italic opacity-90 leading-relaxed border-l-2 border-purple-500/50 pl-3">
             {project.tagline}
          </p>
        </div>
      </div>
    </motion.a>
  );
}
