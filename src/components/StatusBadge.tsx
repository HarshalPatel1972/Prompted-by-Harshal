"use client";

import { motion } from "framer-motion";

export function StatusBadge() {
  return (
    <div className="fixed bottom-10 right-10 z-40 hidden md:block select-none pointer-events-none">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="relative w-32 h-32"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <defs>
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text className="text-[9px] font-black uppercase tracking-[0.2em] fill-zinc-500/50">
            <textPath xlinkHref="#circlePath">
              Forging Digital Entities • Orchestrating Latent Space • 
            </textPath>
          </text>
        </svg>
        <div className="absolute inset-0 m-auto w-2 h-2 bg-accent-primary rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] animate-pulse" />
      </motion.div>
    </div>
  );
}
