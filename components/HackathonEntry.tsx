import React from 'react'; 
import type { Hackathon } from '@/lib/hackathon'; 

interface HackathonEntryProps { 
    entry: Hackathon; 
} 

export function HackathonEntry({ entry }: HackathonEntryProps) { 
    return ( 
        <article className="py-6 border-b border-[#27272a]/80"> 
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1"> 
                <h3 className="font-figtree text-lg text-white tracking-wide"> 
                    {entry.name} 
                </h3> 
                <span className="font-figtree text-xs text-zinc-600 shrink-0"> 
                    {entry.date} 
                </span> 
            </div> 
            
            <p className="font-figtree text-sm text-zinc-500 mt-2 leading-relaxed max-w-2xl"> 
                {entry.description} 
            </p> 
        </article> 
    ); 
}