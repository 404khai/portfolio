import React from 'react';

interface ProjectListItemProps {
  title: string;
  description: string;
  logo: React.ReactNode;
  href?: string;
}

export const ProjectListItem: React.FC<ProjectListItemProps> = ({
  title,
  description,
  logo,
  href = "#",
}) => {
  return (
    <a 
      href={href}
      className="group block w-full"
    >
        <div className="w-full p-4 md:p-5 flex items-center gap-4 md:gap-6 bg-[#09090b] border border-[#27272a] rounded-2xl hover:border-zinc-600 hover:bg-zinc-900/30 transition-all duration-200">
            {/* Logo Container */}
            <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-zinc-900 rounded-xl border border-[#27272a] group-hover:border-zinc-600 transition-colors">
                {logo}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1 min-w-0 flex-1">
                <h3 className="font-figtree text-lg md:text-xl font-bold text-white truncate group-hover:text-zinc-200 transition-colors">
                    {title}
                </h3>
                <p className="font-figtree text-zinc-500 text-sm md:text-base line-clamp-2 md:line-clamp-none">
                {description}
            </p>
            </div>
        </div>
    </a>
  );
};
