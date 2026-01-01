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
        <h1 className="text-5xl md:text-8xl font-serif font-black tracking-tighter mb-4">
          <span className="block text-accent-primary text-xl md:text-2xl font-sans font-bold tracking-[0.2em] uppercase mb-6 opacity-80">
            Prompted by Harshal 2.0
          </span>
          Harshal's <span className="text-white/40">Infinite</span> Forge
          <span className="block italic font-light text-accent-secondary/80 mt-6 text-2xl md:text-3xl selection:bg-accent-primary">
            + An Army of Autonomous Agents.
          </span>
        </h1>
        
        <p className="mt-12 text-sm md:text-base text-zinc-500 font-mono tracking-widest uppercase">
          // Orchestrating the latent space...
        </p>
      </motion.div>

    </section>
  );
}
