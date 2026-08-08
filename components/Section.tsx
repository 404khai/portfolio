import React from 'react';

interface SectionProps {
  id: string;
  label: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, label, title, children, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-16 md:py-20 border-t border-[#27272a]/60 first:border-t-0 first:pt-0 ${className}`}
    >
      <div className="flex flex-col gap-8 md:gap-10">
        <header className="flex flex-col gap-2">
          <span className="font-doto text-xs text-zinc-400 uppercase tracking-[0.2em]">
            {label}
          </span>
          {title && (
            <h2 className="font-unbounded text-2xl md:text-3xl font-bold text-white tracking-tight">
              {title}
            </h2>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

export function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-figtree text-sm text-zinc-500 hover:text-[#a8e64c] transition-colors duration-200 underline-offset-4 hover:underline"
    >
      {children}
    </a>
  );
}

interface InlineLinkProps {
  href: string;
  children: React.ReactNode;
}

export function InlineLink({ href, children }: InlineLinkProps) {
  return (
    <a
      href={href}
      className="text-zinc-400 hover:text-[#a8e64c] transition-colors duration-200 underline-offset-4 hover:underline"
    >
      {children}
    </a>
  );
}
