'use client';

import React from 'react';

interface WorkflowTool {
  imageSrc?: string;
  label: string;
}

interface WorkflowDiagramProps {
  tools: WorkflowTool[];
}

export const WorkflowDiagram: React.FC<WorkflowDiagramProps> = ({ tools }) => {
  return (
    <div className="w-full my-12 rounded-lg border border-zinc-800 bg-[#0e0e11] flex flex-col items-center overflow-hidden shadow-2xl">
      {/* Terminal Header */}
      <div className="w-full flex items-center justify-between px-4 py-2 bg-[#18181b] border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="text-zinc-500 text-xs font-mono">workflow-diagram</div>
        </div>
      </div>

      <div className="p-8 md:p-12 w-full flex flex-col items-center gap-16">
        {/* Main Pipeline */}
      <div className="flex items-center w-full justify-center max-w-4xl">
        {/* Input Node */}
        <div className="flex flex-col items-center gap-2 z-10">
            <div className="px-6 py-3 rounded-lg border-2 border-zinc-700 bg-zinc-900 text-zinc-300 font-mono text-sm">
                Input
            </div>
        </div>

        {/* Long Arrow Right */}
        <div className="flex-1 h-0.5 bg-zinc-700 relative mx-4">
            <svg className="absolute -right-1 -top-1.5 w-4 h-4 text-zinc-700" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>

        {/* LLM Node (Central Hub) */}
        <div className="relative flex flex-col items-center z-10">
            <div className="px-20 py-3 rounded-xl border-2 border-blue-500/30 bg-blue-500/10 text-blue-200 font-bold font-mono text-lg shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                LLM
            </div>
        </div>

        {/* Long Arrow Right */}
        <div className="flex-1 h-0.5 bg-zinc-700 relative mx-4">
            <svg className="absolute -right-1 -top-1.5 w-4 h-4 text-zinc-700" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>

        {/* Output Node */}
        <div className="flex flex-col items-center gap-2 z-10">
            <div className="px-6 py-3 rounded-lg border-2 border-zinc-700 bg-zinc-900 text-zinc-300 font-mono text-sm">
                Output
            </div>
        </div>
      </div>

      {/* Tools Section */}
      {tools.length > 0 && (
          <div className="flex gap-16 md:gap-8 relative mt-4">
             {/* Arrows pointing up to LLM */}
              {tools.map((tool, index) => (
                  <div key={index} className="flex flex-col items-center gap-4 relative group">
                      {/* Bidirectional Connection Lines */}
                      <div className="absolute -top-16 left-[40%] -translate-x-1/2 w-0.5 h-16 bg-zinc-700/50">
                        {/* Up Arrow */}
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 border-l-2 border-t-2 border-zinc-700/50 rotate-45 transform"></div>
                      </div>
                      <div className="absolute -top-16 left-[60%] -translate-x-1/2 w-0.5 h-16 bg-zinc-700/50">
                        {/* Down Arrow */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 border-r-2 border-b-2 border-zinc-700/50 rotate-45 transform"></div>
                      </div>

                      <div className="mt-3 w-20 h-20 rounded-2xl border border-zinc-700 bg-zinc-900 p-4 flex items-center justify-center transition-all hover:scale-105 hover:border-zinc-500 hover:shadow-xl hover:-translate-y-1">
                          {(tool.imageSrc || tool.image) ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img 
                                src={tool.imageSrc || tool.image} 
                                alt={tool.label} 
                                className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity" 
                              />
                          ) : (
                              <div className="text-3xl text-zinc-500 font-bold">?</div>
                          )}
                      </div>
                      <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider bg-[#0e0e11] px-2 py-1 rounded border border-zinc-800/50">{tool.label}</span>
                  </div>
              ))}
          </div>
      )}
      </div>
    </div>
  );
};
