import React from 'react';

interface FeaturedProjectProps {
  title: string;
  subtitle: string;
  description: string;
  linkText: string;
  linkUrl: string;
  logo: React.ReactNode;
  imageUrl?: string; // Optional image URL
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  title,
  subtitle,
  description,
  linkText,
  linkUrl,
  logo,
  imageUrl,
}) => {
  return (
    <div className="relative w-full p-8 md:p-12 border border-[#27272a] border-dashed bg-[#09090b] flex flex-col md:flex-row gap-8 md:gap-12 items-center group overflow-hidden">
      
      {/* Content Side */}
      <div className="flex flex-col gap-6 flex-1 z-10">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-full border border-zinc-700">
               {logo}
            </div>
          <span className="font-doto text-xl text-white tracking-wide">{subtitle}</span>
        </div>

        <h2 className="font-figtree text-4xl md:text-5xl font-bold text-white leading-tight">
          {title}
        </h2>

        <p className="font-figtree text-zinc-400 text-lg leading-relaxed max-w-xl">
          {description}
        </p>

        <a 
          href={linkUrl}
          className="font-figtree text-white text-lg font-medium flex items-center gap-2 hover:gap-4 transition-all duration-300 w-fit"
        >
          {linkText} <span className="text-xl">→</span>
        </a>
      </div>

      {/* Image Side */}
      <div className="flex-1 w-full md:w-auto relative z-10">
          <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/50 aspect-video md:aspect-auto md:h-[300px] shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
             {/* Placeholder for image if no URL provided */}
             {imageUrl ? (
                 // eslint-disable-next-line @next/next/no-img-element
                 <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
             ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-950">
                    <span className="font-doto text-zinc-600 text-2xl">Project Preview</span>
                </div>
             )}
          </div>
      </div>
      
       {/* Decorative Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-zinc-900/20 blur-[100px] rounded-full -z-0 pointer-events-none" />

    </div>
  );
};
