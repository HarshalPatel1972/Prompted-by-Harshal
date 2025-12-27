"use client";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="container mx-auto px-4 py-24 mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
              Man vs. Machine. <br/>
              <span className="text-zinc-500 italic">(Man is winning).</span>
            </h2>
            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed font-light">
               <p>
                 I don&apos;t just prompt; I orchestrate. My workflow starts with Gemini for the blueprint, moves to Antigravity for the heavy agentic lifting, and finishes in VS Code for the fine-tuning. This isn&apos;t just &apos;AI-generated&apos;—it&apos;s &apos;AI-Architected&apos;.
               </p>
               <p>
                 I believe the future isn&apos;t AI replacing developers—it&apos;s developers wielding AI like a superpower. This portfolio is a transparent experiment in that collaboration. Every project here was prompted by me, refined by me, and deployed by me. The robots just did the heavy lifting.
               </p>
            </div>
        </motion.div>

        {/* Right: Stats */}
        <div className="grid grid-cols-1 gap-6">
            <StatCard 
              label="Coffee Consumed" 
              value={412} 
              suffix="" 
              delay={0.2} 
              isInView={isInView}
            />
            <StatCard 
              label="AI Hallucinations Fixed" 
              value={84} 
              suffix="" 
              delay={0.4} 
              color="text-orange-400"
              isInView={isInView}

            />
            <StatCard 
              label="Human Logic" 
              value={100} 
              suffix="%" 
              delay={0.6} 
              color="text-green-400"
              isInView={isInView}
            />
        </div>
      </div>
    </section>
  );
}

function StatCard({ 
  label, 
  value, 
  suffix, 
  delay, 
  color = "text-white", 
  isInView 
}: { 
  label: string; 
  value: number; 
  suffix: string; 
  delay: number; 
  color?: string;
  isInView: boolean;
}) {
  return (
    <motion.div
       initial={{ opacity: 0, scale: 0.9 }}
       animate={isInView ? { opacity: 1, scale: 1 } : {}}
       transition={{ duration: 0.5, delay }}
       className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl flex items-center justify-between group hover:border-white/10 transition-colors"
    >
        <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest">{label}</span>
        <div className={`text-5xl font-bold font-serif ${color}`}>
           <Counter value={value} isInView={isInView} />{suffix}
        </div>
    </motion.div>
  );
}

function Counter({ value, isInView }: { value: number, isInView: boolean }) {
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
        spring.set(value);
    }
  }, [isInView, value, spring]);

  useEffect(() => {
    const unsubscribe = display.on("change", (latest) => {
        setDisplayValue(latest);
    });
    return () => unsubscribe();
  }, [display]);

  return <>{displayValue}</>;
}
