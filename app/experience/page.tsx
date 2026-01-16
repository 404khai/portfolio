'use client';

import React from 'react';
import { ExperienceItem } from '@/components/ExperienceItem';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white p-8 md:p-16 flex flex-col items-center">
      <div className="max-w-4xl w-full flex flex-col gap-12">
        
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h1 className="font-irish-grover text-6xl md:text-8xl font-bold tracking-tight text-white">
            Experience
          </h1>
          <p className="font-figtree text-zinc-400 text-xl md:text-2xl max-w-2xl">
            A timeline of my professional journey and key contributions.
          </p>
        </div>

        {/* Experience List */}
        <div className="flex flex-col gap-0 border-t border-[#27272a] border-dashed">
            <ExperienceItem 
                company="HNG Tech"
                role="Backend Developer"
                type="Remote"
                period="Oct 2025 - Dec 2025"
                logo="/hng.jpeg"
                contributions={[
                    "Led a team of 3 engineers in developing a distributed microservices notification system ",
                    "Contributed to Legal WatchDog, an AI-powered regulatory intelligence platform for enterprises that reduces manual compliance efforts by 50%.",
                    "Integrated two A2A-compliant AI agents (a riddle agent and a real-time news update agent) into Telex.im",
                    "Created an AI agent slack bot that helped interns for task deliverables summarization.",
                    "Developed RESTful API projects with Django and FastAPI implementing NLP search.",
                    "Built a document analyzer & summarization tool with OpenRouter."
                ]}
                skills={["Team Leadership & Management", "Prompt engineering", "Collaboration", "AI Agents", "Mastra", "Python", "Nest.js", "Microservices", "Distributed Systems", "TypeScript", "Docker", "Minio", "Redis"]}
            />
            <ExperienceItem 
                company="SnapiLabs"
                role="Frontend Developer"
                type="Remote"
                period="Aug 2024 - Nov 2024"
                logo="/snapilabs.jpeg"
                contributions={[
                    "Developed a landing page for a concept design for an AI workspace for notes and tasks called SupaNote.",
                    "Built a clone of the Krea AI website from scratch using an image reference",
                    "Collaborated with UX designers to implement a responsive, mobile-first design system using Tailwind CSS."
                ]}
                skills={["Next.js", "Tailwind CSS", "Javascript"]}
            />
        </div>

      </div>
    </div>
  );
}
