import React from 'react';
import { FileEarmarkArrowDownFill } from 'react-bootstrap-icons';
import { FeaturedProject } from '@/components/FeaturedProject';
import { ProjectCard } from '@/components/ProjectCard';


export default function Home() {
  return (
    <div className="w-full max-w-5xl flex flex-col items-center gap-20 py-16 px-4 md:px-8">
      
      {/* Intro Section */}
      <div className="w-full flex flex-col gap-8 border border-dashed border-[#27272a] p-8 md:p-12 bg-[#09090b]">
        <div className="flex flex-col gap-2">
           <div className="flex items-center justify-between w-full">
             <h1 className="text-xl text-zinc-300 font-figtree flex items-center">
              Hey it's me, <span className="font-irish-grover font-black tracking-tighter text-4xl text-white ml-2">Khai</span>
             </h1>
             
             <div className="group relative">
               <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download CV">
                 <FileEarmarkArrowDownFill className="w-6 h-6 text-zinc-400 hover:text-[#a8e64c] transition-colors duration-300 cursor-pointer" />
               </a>
               <div className="absolute -top-12 -left-10 w-max px-3 py-1.5 bg-zinc-800 border border-zinc-700 text-zinc-200 text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-xl transform translate-y-2 group-hover:translate-y-0 z-10">
                 Download CV
               </div>
             </div>
           </div>
           <p className="text-zinc-400 font-figtree text-lg max-w-2xl mt-4 leading-relaxed">
             Let's get straight to the point....
           </p>
        </div>
        
        <ul className="flex flex-col gap-4 text-zinc-300 font-figtree text-lg list-disc pl-5 marker:text-zinc-600">
           <li>
             I'm a <b className="text-[#a8e64c] font-calistoga">Creative Systems Engineer</b> who is intrigued by Operating Systems, Game Development, Animation and Interactive UI.
           </li>
           <li>
             <b>4+</b> years of experience in the industry, with specialty across Agentic AI, Backend Development and Game Development.
           </li>
           <li>
             Probably trying out new frameworks, or dabbling in <b className="text-white">Lua</b>, <b className="text-white">Rust</b> or <b className="text-white">ArkTs</b>.
           </li>
        </ul>
      </div>

      {/* Socials Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-px bg-[#27272a] border border-[#27272a]">
        <a 
          href="https://github.com/404khai" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group relative flex items-center justify-between p-6 bg-[#09090b] hover:bg-zinc-900/80 transition-all duration-300"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden group-hover:border-zinc-700 transition-colors">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/github.png" alt="GitHub" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-figtree text-white font-bold text-xl tracking-tight">GitHub</span>
              <span className="font-figtree text-zinc-500 text-sm font-medium">404khai</span>
            </div>
          </div>
          <div className="text-zinc-600 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </div>
        </a>

        <a 
          href="https://x.com/404kha1" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group relative flex items-center justify-between p-6 bg-[#09090b] hover:bg-zinc-900/80 transition-all duration-300"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden group-hover:border-zinc-700 transition-colors">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/x.png" alt="X" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-figtree text-white font-bold text-xl tracking-tight">X</span>
              <span className="font-figtree text-zinc-500 text-sm font-medium">@404kha1</span>
            </div>
          </div>
          <div className="text-zinc-600 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </div>
        </a>

        <a 
          href="https://www.tiktok.com/@404khai" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group relative flex items-center justify-between p-6 bg-[#09090b] hover:bg-zinc-900/80 transition-all duration-300"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden group-hover:border-zinc-700 transition-colors">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/tiktok.png" alt="X" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-figtree text-white font-bold text-xl tracking-tight">Tiktok</span>
              <span className="font-figtree text-zinc-500 text-sm font-medium">404khai</span>
            </div>
          </div>
          <div className="text-zinc-600 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </div>
        </a>

        <a 
          href="https://www.youtube.com/@404khai" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group relative flex items-center justify-between p-6 bg-[#09090b] hover:bg-zinc-900/80 transition-all duration-300"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden group-hover:border-zinc-700 transition-colors">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/youtube.png" alt="X" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="font-figtree text-white font-bold text-xl tracking-tight">Youtube</span>
              <span className="font-figtree text-zinc-500 text-sm font-medium">@404khai</span>
            </div>
          </div>
          <div className="text-zinc-600 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </div>
        </a>
      </div>

      {/* Featured Projects Section */}
      <div className="w-full flex flex-col gap-12" id="features">
        <div className="flex flex-col gap-2">
            <h2 className="font-irish-grover text-5xl md:text-6xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="font-figtree text-zinc-400 text-lg">
              A selection of highlighted projects showcasing my work and expertise.
            </p>
        </div>

        {/* Hero Project */}
        <FeaturedProject 
          title="Agentic Game Developer"
          subtitle="Atlas"
          description="Atlas is a semi-autonomous agentic AI where 2D game mechanics, systems and worlds are shaped"
          linkText="Try out Atlas"
          linkUrl="#"
          logo="/atlas.png"
          // Using a colored placeholder since we don't have the image
          imageUrl="/atlasUI.png" 
        />

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard 
            title="Social manwha / manga reader app"
            subtitle="Keihatsu"
            category="ENTERTAINMET"
            description="A social manwha reader app with over 2k users and a vibrant community."
            logo="/keihatsu.png"
          />
          <ProjectCard 
            title="AI-driven learning and exam practice for West Africa"
            subtitle="Revixor"
            category="EDTECH"
            description="Transforming your exam study sessions with intelligent prompts, AI-powered explanations & step-by-step solutions."
            logo="/revixor.png"
          />
        </div>

      </div>

    </div>
  );
}
