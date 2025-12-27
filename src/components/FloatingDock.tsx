"use client";
import { MotionValue, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Home, Folder, User, Mail, Github } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function FloatingDock() {
  const mouseX = useMotionValue(Infinity);

  return (
    <div 
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex h-16 items-end gap-3 rounded-2xl border border-white/10 bg-neutral-900/50 px-4 pb-3 backdrop-blur-md shadow-2xl"
    >
      {[
        { icon: Home, label: "Home", href: "#" },
        { icon: Folder, label: "Projects", href: "#projects" },
        { icon: User, label: "About", href: "#about" },
        { icon: Github, label: "GitHub", href: "https://github.com" },
        { icon: Mail, label: "Contact", href: "mailto:hello@example.com" },
      ].map((item, i) => (
        <DockIcon key={i} mouseX={mouseX} icon={item.icon} href={item.href} />
      ))}
    </div>
  );
}

function DockIcon({ mouseX, icon: Icon, href }: { mouseX: MotionValue<number>; icon: any; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    // Get center of element (viewport relative if fixed)
    const scrollX = typeof window !== "undefined" ? window.scrollX : 0;
    
    return val - (bounds.x + scrollX + bounds.width / 2);
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 70, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.a
      href={href}
      ref={ref}
      style={{ width, height: width }}
      className={cn(
        "aspect-square rounded-full bg-white/5 border border-white/10 flex items-center justify-center relative group backdrop-blur-sm",
        "hover:bg-white/10 hover:border-white/20 transition-colors"
      )}
    >
        <Icon className="w-1/2 h-1/2 text-white/80 group-hover:text-white transition-colors" />
    </motion.a>
  );
}
