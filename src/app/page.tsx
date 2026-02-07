"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { FloatingDock } from "@/components/FloatingDock";
import { Arsenal } from "@/components/Arsenal";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { StatusBadge } from "@/components/StatusBadge";

export default function Home() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="min-h-screen bg-background relative selection:bg-accent-primary/20 pb-32"
    >
        <Hero />
        <div id="projects">
            <BentoGrid />
        </div>
        <Arsenal />
        <About />
        <Footer />
        <StatusBadge />
        <FloatingDock />
    </motion.main>
  );
}
