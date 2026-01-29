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

      <div className="p-8 md:p-12 w-full flex flex-col items-center gap-12">
        {/* Main Pipeline */}
      <div className="flex items-center gap-4 md:gap-8 w-full justify-center">
        {/* Input Node */}
        <div className="flex flex-col items-center gap-2">
            <div className="px-6 py-3 rounded-lg border-2 border-zinc-700 bg-zinc-900 text-zinc-300 font-mono text-sm">
                Input
            </div>
        </div>

        {/* Arrow Right */}
        <svg className="w-6 h-6 md:w-12 md:h-6 text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        {/* LLM Node (Central Hub) */}
        <div className="relative flex flex-col items-center">
            <div className="px-8 py-4 rounded-xl border-2 border-blue-500/30 bg-blue-500/10 text-blue-200 font-bold font-mono shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                LLM
            </div>
            
            {/* Vertical Connector to Tools */}
            {tools.length > 0 && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 flex flex-col items-center h-12">
                    <div className="w-0.5 h-full bg-zinc-700"></div>
                    {/* Horizontal bar connecting tools if multiple */}
                    {tools.length > 1 && (
                        <div className="absolute bottom-0 w-[120%] h-0.5 bg-zinc-700"></div>
                    )}
                </div>
            )}
        </div>

        {/* Arrow Right */}
        <svg className="w-6 h-6 md:w-12 md:h-6 text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        {/* Output Node */}
        <div className="flex flex-col items-center gap-2">
            <div className="px-6 py-3 rounded-lg border-2 border-zinc-700 bg-zinc-900 text-zinc-300 font-mono text-sm">
                Output
            </div>
        </div>
      </div>

      {/* Tools Section */}
      {tools.length > 0 && (
          <div className="flex gap-8 md:gap-12 mt-4 relative">
             {/* Arrows pointing up to LLM */}
              {tools.map((tool, index) => (
                  <div key={index} className="flex flex-col items-center gap-3 relative group">
                      {/* Connection Line */}
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-zinc-700"></div>
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-2 h-2 border-l-2 border-t-2 border-zinc-700 rotate-45 transform bg-[#0e0e11]"></div>
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-2 h-2 border-r-2 border-b-2 border-zinc-700 rotate-45 transform bg-[#0e0e11]"></div>

                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl border border-zinc-700 bg-zinc-900 p-3 flex items-center justify-center transition-transform hover:scale-105 hover:border-zinc-500 hover:shadow-lg">
                          {tool.imageSrc ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img src={tool.imageSrc} alt={tool.label} className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                          ) : (
                              <div className="text-2xl text-zinc-500 font-bold">?</div>
                          )}
                      </div>
                      <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">{tool.label}</span>
                  </div>
              ))}
          </div>
      )}
      </div>
    </div>
  );
};
