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
             <h1 className="text-xl max-[525px]:text-sm text-zinc-300 font-figtree flex items-center max-[525px]:flex-wrap max-[525px]:gap-1">
              Hey it's me, <span className="font-unbounded font-black tracking-tighter text-4xl max-[525px]:text-2xl text-white ml-2 max-[525px]:ml-0">Khai</span>
             </h1>
             
             <a
               href="/Oghenefega_Omajene_Resume.pdf"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Download CV"
               className="flex items-center group shrink-0"
             >
               <div className="relative top-3 mr-1 w-20 h-11 flex-shrink-0">
                 <svg
                   className="absolute inset-0 h-full w-full text-white/45 group-hover:text-[#a8e64c]/70 transition-colors duration-300"
                   viewBox="0 0 260 92"
                   fill="none"
                   preserveAspectRatio="none"
                   aria-hidden="true"
                 >
                   <path
                     d="M4 60C42 28 76 74 110 48C132 31 98 5 84 26C67 52 112 72 160 38C190 20 223 30 254 22"
                     stroke="currentColor"
                     strokeWidth="3.2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                   />
                   <path
                     d="M226 10C239 12 249 17 254 22M254 22C243 31 232 44 226 56"
                     stroke="currentColor"
                     strokeWidth="3.2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                   />
                 </svg>
                 <span className="absolute right-23 top-5 font-figtree text-sm text-zinc-400 group-hover:text-[#a8e64c] transition-colors duration-300 whitespace-nowrap leading-none">
                   download cv
                 </span>
               </div>
               <FileEarmarkArrowDownFill className="w-6 h-6 flex-shrink-0 text-zinc-400 group-hover:text-[#a8e64c] transition-colors duration-300" />
             </a>
             
           </div>
           <p className="text-zinc-400 font-figtree text-lg max-w-2xl mt-4 leading-relaxed">
             Let's get straight to the point....
           </p>
        </div>
        
        <ul className="flex flex-col gap-4 text-zinc-300 font-figtree text-lg list-disc pl-5 marker:text-zinc-600">
           <li>
             I'm a <b className="text-[#a8e64c] font-calistoga">Software Engineer</b> who is intrigued by Operating Systems, Game Development, Animation and Interactive UI.
           </li>
           <li>
             <b>4+</b> years of experience working on ML Pipelines, Distributed Systems, Agentic AI & AI Applications, Backend Systems, Mobile Apps and 2D Platformer Games.
           </li>
           <li>
             Probably trying out new frameworks, or dabbling in <b className="text-white">Lua</b>, <b className="text-white">Go</b> or <b className="text-white">Rust</b>.
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
            <h2 className="font-unbounded text-5xl md:text-6xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="font-figtree text-zinc-400 text-lg">
              A selection of highlighted projects showcasing my work and expertise.
            </p>
        </div>

        {/* Hero Project */}
        <FeaturedProject 
          title="Agricultural intelligence system for farmers and agro-enterprises"
          subtitle="FarmIntel"
          description="FarmIntel is an agricultural intelligence system designed to help farmers and agro-enterprises make smarter data-driven decisions and optimize farming operations. It comes with ML pest and plant disease detection, as well as real-time weather and crop yield predictions, AI recommendations for optimal farming practices, and a community of farmers and agro-enterprises to share knowledge and best practices."
          linkText="Check it out"
          linkUrl="#"
          logo="/farmintel.png"
          imageUrl="/farmintelBanner.jpg" 
        />

        {/* <FeaturedProject 
          title="Agentic System Design"
          subtitle="Supabricx"
          description="Supabricx is a collaborative agentic system & architeture design assistant built for devs to design, validate, and deploy resilient systems with AI-guided architecture.."
          linkText="Try out Supabricx"
          linkUrl="#"
          logo="/supabricx.png"
          imageUrl="/supabricxBanner.png" 
        /> */}

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard 
            title="Domestic Service Marketplace."
            subtitle="Hirecraft"
            category="LIFESTYLE"
            description="HireCraft is a Springboot powered domestic service marketplace which provides a platform connecting service providers (e.g.plumbers, painters) to employers."
            logo="/hirecraft.jpeg"
          />
          <ProjectCard 
            title="Social manwha reader app"
            subtitle="Keihatsu"
            category="ENTERTAINMENT"
            description="The cross-platform social manwha reader app."
            logo="/keihatsu.png"
          />

          {/* <ProjectCard 
            title="AI-driven learning and exam practice for West Africa"
            subtitle="Revixor"
            category="EDTECH"
            description="Transforming your exam study sessions with intelligent prompts, AI-powered explanations & step-by-step solutions."
            logo="/revixor.png"
          /> */}
        </div>

      </div>

    </div>
  );
}
