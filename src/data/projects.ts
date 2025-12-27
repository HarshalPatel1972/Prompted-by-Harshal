export type Project = {
  id: number;
  title: string;
  tagline: string;
  image: string;
  badges: string[];
  stats: {
    human_effort: string;
    ai_assistance: string;
    hallucinations_fixed: number;
  };
  link: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Anime Tracker",
    // The funny/honest description
    tagline: "I watched 400 hours of anime to test this. Worth it.",
    // The visual asset
    image: "https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=600&auto=format&fit=crop", 
    // The "Collaboration Stack"
    badges: ["Copilot", "React", "Gemini"],
    // Stats for the "Detail Modal" later
    stats: {
      human_effort: "60%",
      ai_assistance: "40%",
      hallucinations_fixed: 12
    },
    link: "https://your-anime-site.com"
  },
  {
    id: 2,
    title: "3D Portfolio",
    tagline: "Making the browser cry with WebGL.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
    badges: ["Three.js", "Antigravity", "ChatGPT"],
    stats: {
      human_effort: "20%",
      ai_assistance: "80%",
      hallucinations_fixed: 5
    },
    link: "https://your-3d-site.com"
  },
  {
    id: 3,
    title: "AI Chatbot",
    tagline: "It only lies to you 10% of the time, guaranteed.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop",
    badges: ["OpenAI", "Next.js", "Vercel"],
    stats: {
      human_effort: "10%",
      ai_assistance: "90%",
      hallucinations_fixed: 142
    },
    link: "https://your-chatbot-site.com"
  },
   {
    id: 4,
    title: "E-commerce Dashboard",
    tagline: "Finally, a chart that goes up.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    badges: ["Tailwind", "Recharts", "Supabase"],
    stats: {
      human_effort: "50%",
      ai_assistance: "50%",
      hallucinations_fixed: 2
    },
    link: "https://your-dashboard-site.com"
  }
];
