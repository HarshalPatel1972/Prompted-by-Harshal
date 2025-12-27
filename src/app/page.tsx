import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { FloatingDock } from "@/components/FloatingDock";
import { Arsenal } from "@/components/Arsenal";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-purple-500/30 pb-32">
        <Hero />
        <div id="projects">
            <BentoGrid />
        </div>
        <Arsenal />
        <About />
        <Footer />
        <FloatingDock />
    </main>
  );
}
