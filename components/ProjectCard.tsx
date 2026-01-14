import React from 'react';

interface ProjectCardProps {
  title: string;
  category: string;
  subtitle: string; // The "WalPress" or "Gradific" text
  description: string;
  logo: React.ReactNode;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  subtitle,
  description,
  logo,
}) => {
  return (
    <div className="flex flex-col gap-6 p-8 border border-[#27272a] border-dashed bg-[#09090b] hover:bg-zinc-900/20 transition-colors group h-full">
      
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center bg-zinc-800/50 rounded-full border border-zinc-700/50 group-hover:border-zinc-500 transition-colors">
            {logo}
        </div>
        <span className="font-doto text-xl text-white tracking-wide group-hover:text-zinc-200 transition-colors">{subtitle}</span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3">
        <span className="font-figtree text-sm font-medium text-zinc-500 uppercase tracking-wider">
            {category}
        </span>
        
        <h3 className="font-figtree text-2xl font-bold text-white leading-tight">
            {title}
        </h3>

        <p className="font-figtree text-zinc-400 text-md leading-relaxed">
            {description}
        </p>
      </div>

    </div>
  );
};
