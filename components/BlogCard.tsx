import React from 'react';

interface BlogCardProps {
  date: string;
  readTime: string;
  title: string;
  description: string;
  tags: string[];
}

export const BlogCard: React.FC<BlogCardProps> = ({
  date,
  readTime,
  title,
  description,
  tags,
}) => {
  return (
    <div className="relative p-8 bg-[#09090b] border border-[#27272a] group transition-all duration-300 hover:border-zinc-600">
      {/* Corner Borders */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white transition-all duration-300 group-hover:w-4 group-hover:h-4" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white transition-all duration-300 group-hover:w-4 group-hover:h-4" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white transition-all duration-300 group-hover:w-4 group-hover:h-4" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white transition-all duration-300 group-hover:w-4 group-hover:h-4" />

      {/* Content */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-zinc-400 text-sm font-figtree">
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>

        <h3 className="text-2xl font-bold text-white font-figtree leading-tight group-hover:text-zinc-200 transition-colors">
          {title}
        </h3>

        <p className="text-zinc-400 font-figtree leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/50 rounded-md border border-zinc-700/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
