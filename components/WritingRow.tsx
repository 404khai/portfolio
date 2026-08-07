import React from 'react';
import Link from 'next/link';

interface WritingRowProps {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  description: string;
}

export function WritingRow({
  slug,
  title,
  date,
  readTime,
  description,
}: WritingRowProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group grid grid-cols-1 sm:grid-cols-[7rem_1fr] gap-2 sm:gap-8 py-6 border-b border-[#27272a]/80 transition-colors hover:border-zinc-600"
    >
      <div className="flex flex-col gap-0.5 sm:pt-0.5">
        <span className="font-figtree text-xs text-zinc-600">{date}</span>
        <span className="font-figtree text-xs text-zinc-700">{readTime}</span>
      </div>
      <div className="flex flex-col gap-1.5 min-w-0">
        <h3 className="font-figtree text-base text-white group-hover:text-[#a8e64c] transition-colors duration-200">
          {title}
        </h3>
        <p className="font-figtree text-sm text-zinc-500 leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
}
