"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-[60vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Subtle background gradient or noise can go here */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 max-w-4xl"
      >
        <h1 className="text-4xl md:text-7xl font-serif font-bold tracking-tight mb-4">
          <span className="block text-foreground/80 text-xl md:text-2xl font-sans font-normal tracking-widest uppercase mb-4 opacity-70">
            The Meta-Portfolio
          </span>
          Built by Harshal
          <span className="block italic font-light text-foreground/70 mt-2">
            + An Army of Robots.
          </span>
        </h1>
        
        <p className="mt-8 text-sm md:text-base text-zinc-500 font-mono">
          // Convincing the AI to behave...
        </p>
      </motion.div>
    </section>
  );
}
