"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    // Basic CSS smooth scroll for anchor links
    document.documentElement.style.scrollBehavior = "auto";
    
    // For a real production app in 2026, we'd use Lenis
    // Here we ensure global scroll aesthetic parameters are set
    const style = document.createElement("style");
    style.innerHTML = `
      html {
        scroll-behavior: smooth;
      }
      body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
      }
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: var(--background);
      }
      ::-webkit-scrollbar-thumb {
        background: var(--accent-primary);
        border-radius: 10px;
        border: 2px solid var(--background);
      }
      ::-webkit-scrollbar-thumb:hover {
        background: var(--accent-secondary);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
}
