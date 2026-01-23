'use client';

import React, { useState } from 'react';
import { CaretDownFill, CaretUpFill } from 'react-bootstrap-icons';

interface MobileTOCProps {
  items: { label: string; href: string; level: number }[];
}

export default function MobileTOC({ items }: MobileTOCProps) {
  const [isTocOpen, setIsTocOpen] = useState(false);

  return (
    <div className="mb-10 md:hidden">
      <div className="border border-zinc-900 bg-[#0a0a0a]">
        <button
          type="button"
          onClick={() => setIsTocOpen(!isTocOpen)}
          className="w-full flex items-center justify-between px-5 py-4 text-left mb-3"
        >
          <span className="text-zinc-300 text-xl font-calistoga">Table of Contents</span>
          <span className="text-zinc-500 text-xs">
            {isTocOpen ? <CaretDownFill /> : <CaretUpFill className="rotate-180" />}
          </span>
        </button>
        {isTocOpen && (
          <div className="px-5 pb-5 space-y-3">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`block text-zinc-400 hover:text-white transition-colors ${
                  item.level === 3 ? 'pl-4 text-xs md:text-sm' : 'text-sm md:text-base'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
