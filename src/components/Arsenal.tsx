"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Zap, MessageSquare, Rocket, Box } from "lucide-react";
import { MouseEvent } from "react";

const tools = [
  {
    name: "GitHub Copilot",
    role: "The Speedster",
    desc: "Predicts my next move before I do. Sometimes wrong, usually fast.",
    icon: Zap,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "ChatGPT / Gemini",
    role: "The Consultant",
    desc: "My rubber duck for debugging and complex logic planning.",
    icon: MessageSquare,
    color: "from-emerald-500 to-green-500"
  },
  {
    name: "Antigravity",
    role: "The Specialist",
    desc: "For when standard physics don't apply to the DOM.",
    icon: Rocket,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "V0 / Cursor",
    role: "The Architect",
    desc: "Drafts the blueprints so I can focus on the interior design.",
    icon: Box,
    color: "from-orange-500 to-red-500"
  }
];

export function Arsenal() {
  return (
    <section id="arsenal" className="container mx-auto px-4 py-24 mb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">The AI Arsenal</h2>
        <p className="text-zinc-400 font-mono text-sm max-w-2xl mx-auto">
          // The tools that make me look smarter than I actually am.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((tool, i) => (
          <ToolCard key={tool.name} tool={tool} index={i} />
        ))}
      </div>
    </section>
  );
}

function ToolCard({ tool, index }: { tool: typeof tools[0]; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-3xl border border-white/10 bg-zinc-900/50 p-6 overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${tool.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
        <tool.icon className="text-white" size={24} />
      </div>

      <h3 className="text-xl font-bold mb-1 font-serif text-zinc-100">{tool.name}</h3>
      <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">{tool.role}</p>
      <p className="text-sm text-zinc-400 leading-relaxed">
        {tool.desc}
      </p>
    </motion.div>
  );
}
