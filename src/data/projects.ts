export type Project = {
  id: number;
  title: string;
  tagline: string;
  description: string;
  image: string;
  badges: string[];
  challenge: string;
  prompt: string;
  stats: {
    human_percentage: number;
    ai_percentage: number;
    hallucinations_fixed: number;
  };
  link: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Anime Tracker",
    tagline: "I watched 400 hours of anime to test this. Worth it.",
    description: "A comprehensive tracking tool for anime enthusiasts that automatically syncs with your viewing habits. It uses advanced algorithms to predict what you'll enjoy next, even if you won't admit it.",
    image: "https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=600&auto=format&fit=crop", 
    badges: ["Copilot", "React", "Gemini"],
    challenge: "Copilot refused to acknowledge 'isekai' as a legitimate genre and kept trying to autocorrect it to 'ikea'.",
    prompt: "Create a user schema that tracks 'emotional_damage' after watching sad anime endings.",
    stats: {
      human_percentage: 60,
      ai_percentage: 40,
      hallucinations_fixed: 12
    },
    link: "https://your-anime-site.com"
  },
  {
    id: 2,
    title: "3D Portfolio",
    tagline: "Making the browser cry with WebGL.",
    description: "An immersive 3D experience that pushes the limits of browser rendering. It features a fully interactive world where users can navigate through my projects as if they were art exhibits.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
    badges: ["Three.js", "Antigravity", "ChatGPT"],
    challenge: "The AI tried to render 10,000 spheres without instancing, turning my laptop into a localized heat source.",
    prompt: "Write a GLSL shader that looks like liquid mercury but runs at 60fps on a toaster.",
    stats: {
      human_percentage: 20,
      ai_percentage: 80,
      hallucinations_fixed: 5
    },
    link: "https://your-3d-site.com"
  },
  {
    id: 3,
    title: "AI Chatbot",
    tagline: "It only lies to you 10% of the time, guaranteed.",
    description: "A conversational agent designed to be helpful, witty, and occasionally sarcastic. It's built on a custom fine-tuned model that prioritizes personality over pure factual density.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop",
    badges: ["OpenAI", "Next.js", "Vercel"],
    challenge: "The bot started answering every question with 'As a large language model...' until I specifically told it to have an identity crisis.",
    prompt: "You are a depressed robot from the year 3000. Explain how to bake cookies.",
    stats: {
      human_percentage: 10,
      ai_percentage: 90,
      hallucinations_fixed: 142
    },
    link: "https://your-chatbot-site.com"
  },
   {
    id: 4,
    title: "E-commerce Dashboard",
    tagline: "Finally, a chart that goes up.",
    description: "A data visualization dashboard for e-commerce store owners. It transforms boring Excel sheets into beautiful, interactive graphs that make you feel like a Wall Street broker.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    badges: ["Tailwind", "Recharts", "Supabase"],
    challenge: "The AI generated a sales projection algorithm that predicted infinite profit by the year 2025. I had to manually nerf it to reality.",
    prompt: "Generate a Recharts component that animates like a heartbeat when sales go up.",
    stats: {
      human_percentage: 50,
      ai_percentage: 50,
      hallucinations_fixed: 2
    },
    link: "https://your-dashboard-site.com"
  }
];
