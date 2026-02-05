"use client";
import { MotionValue, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Home, Folder, User, Mail, Github, Zap } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function FloatingDock() {
  const mouseX = useMotionValue(Infinity);

  return (
    <div 
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] flex h-20 items-end gap-3 rounded-3xl border border-white/5 bg-zinc-950/80 px-5 pb-4 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
    >
      {[
        { icon: Home, label: "Home", href: "#" },
        { icon: Folder, label: "Projects", href: "#projects" },
        { icon: Zap, label: "Arsenal", href: "#arsenal" },
        { icon: User, label: "About", href: "#about" },
        { icon: Github, label: "GitHub", href: "https://github.com" },
      ].map((item, i) => (
        <DockIcon key={i} mouseX={mouseX} icon={item.icon} href={item.href} label={item.label} />
      ))}
    </div>
  );
}

function DockIcon({ mouseX, icon: Icon, href, label }: { mouseX: MotionValue<number>; icon: any; href: string, label: string }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - (bounds.x + bounds.width / 2);
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [45, 85, 45]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 200, damping: 20 });

  return (
    <motion.a
      href={href}
      ref={ref}
      style={{ width, height: width }}
      className={cn(
        "aspect-square rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center relative group backdrop-blur-sm",
        "hover:bg-accent-primary/10 hover:border-accent-primary/50 transition-all duration-300"
      )}
    >
        <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-zinc-800 text-white text-[10px] uppercase font-black tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/5 shadow-xl whitespace-nowrap">
            {label}
        </span>
        <Icon className="w-1/2 h-1/2 text-zinc-400 group-hover:text-accent-primary transition-all duration-300" />
    </motion.a>
  );
}
