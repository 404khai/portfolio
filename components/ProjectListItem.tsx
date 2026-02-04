import React from 'react';
import { RocketTakeoffFill, Hammer, PeopleFill, HourglassSplit, WifiOff, CheckCircleFill } from 'react-bootstrap-icons';

export type ProjectStatus = 'live' | 'construction' | 'users' | 'coming-soon' | 'not-live' | 'completed';

interface ProjectListItemProps {
  title: string;
  description: string;
  logo: string;
  href?: string;
  status?: ProjectStatus[];
}

const statusConfig: Record<ProjectStatus, { icon: React.ElementType, color: string, bg: string, border: string, label: string }> = {
  live: { 
    icon: RocketTakeoffFill, 
    color: 'text-emerald-400', 
    bg: 'bg-emerald-950', 
    border: 'border-emerald-800',
    label: 'Live'
  },
  construction: { 
    icon: Hammer, 
    color: 'text-yellow-400', 
    bg: 'bg-yellow-950', 
    border: 'border-yellow-800',
    label: 'Under Construction'
  },
  users: { 
    icon: PeopleFill, 
    color: 'text-blue-400', 
    bg: 'bg-blue-950', 
    border: 'border-blue-800',
    label: 'Has Users'
  },
  'coming-soon': { 
    icon: HourglassSplit, 
    color: 'text-rose-400', 
    bg: 'bg-rose-950', 
    border: 'border-rose-800',
    label: 'Coming Soon'
  },
  'not-live': { 
    icon: WifiOff, 
    color: 'text-zinc-400', 
    bg: 'bg-zinc-900', 
    border: 'border-zinc-700',
    label: 'Not Live'
  },
  completed: { 
    icon: CheckCircleFill, 
    color: 'text-lime-400', 
    bg: 'bg-lime-950', 
    border: 'border-lime-800',
    label: 'Completed'
  },
};

export const ProjectListItem: React.FC<ProjectListItemProps> = ({
  title,
  description,
  logo,
  href = "#",
  status = []
}) => {
  return (
    <a 
      href={href}
      className="group block w-full"
    >
        <div className="w-full p-4 md:p-5 flex items-center gap-4 md:gap-6 bg-[#09090b] border border-[#27272a] rounded-2xl hover:border-zinc-600 hover:bg-zinc-900/30 transition-all duration-200">
            {/* Logo Container */}
            <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl border border-[#1b1b1c] group-hover:border-zinc-600 transition-colors overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                    src={logo} 
                    alt={`${title} logo`} 
                    className="w-full h-full object-cover" 
                />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1 min-w-0 flex-1">
                <h3 className="font-figtree text-lg md:text-xl font-bold text-white line-clamp-1 group-hover:text-zinc-200 transition-colors">
                    {title}
                </h3>
                <p className="font-figtree text-zinc-500 text-sm md:text-base line-clamp-2">
                {description}
            </p>
            </div>

            {/* Status Icons (Overlapping) */}
            {status.length > 0 && (
              <div className="flex -space-x-3 md:-space-x-4 flex-shrink-0 pl-2">
                {status.map((s, index) => {
                  const config = statusConfig[s];
                  const Icon = config.icon;
                  return (
                    <div 
                      key={`${title}-status-${index}`}
                      className={`relative w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 border-[#09090b] ${config.bg} shadow-sm z-${status.length - index} group/icon`}
                      title={config.label}
                    >
                      <Icon className={`w-3.5 h-3.5 md:w-4 md:h-4 ${config.color}`} />
                      
                      {/* Tooltip */}
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-800 text-zinc-200 text-[10px] rounded opacity-0 group-hover/icon:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                        {config.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
        </div>
    </a>
  );
};
