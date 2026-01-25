"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollMeter() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-accent-primary to-accent-secondary z-[100] origin-left shadow-[0_2px_10px_rgba(59,130,246,0.3)]"
      style={{ scaleX }}
    />

  );
}
