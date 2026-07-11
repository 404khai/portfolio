'use client';

import React, { useState } from 'react';
import { CaretDownFill, CaretUpFill } from 'react-bootstrap-icons';
import { isTocGroupActive, isTocItemActive, useTocScrollSpy } from '@/hooks/useTocScrollSpy';

interface TocItem {
  label: string;
  href: string;
  level: number;
}

interface MobileTOCProps {
  items: TocItem[];
}

export default function MobileTOC({ items }: MobileTOCProps) {
  const [isTocOpen, setIsTocOpen] = useState(false);
  const activeId = useTocScrollSpy(items);

  const groupedItems: { item: TocItem; children: TocItem[] }[] = [];
  items.forEach((item) => {
    if (item.level === 2) {
      groupedItems.push({ item, children: [] });
    } else if (item.level === 3 && groupedItems.length > 0) {
      groupedItems[groupedItems.length - 1].children.push(item);
    } else if (item.level === 3) {
      groupedItems.push({ item, children: [] });
    }
  });

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
            {groupedItems.map(({ item, children }) => {
              const groupActive = isTocGroupActive(activeId, { href: item.href, children });

              return (
                <div key={item.href} className="space-y-2">
                  <a
                    href={item.href}
                    className={`flex items-start gap-2 transition-colors text-sm md:text-base ${
                      groupActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <span
                      className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        groupActive ? 'bg-white' : 'bg-zinc-600'
                      }`}
                    />
                    <span>{item.label}</span>
                  </a>
                  {children.map((child) => {
                    const childActive = isTocItemActive(activeId, child.href);
                    return (
                      <a
                        key={child.href}
                        href={child.href}
                        className={`flex items-start gap-2 pl-4 transition-colors text-xs ${
                          childActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        <span
                          className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                            childActive ? 'bg-white' : 'bg-zinc-600'
                          }`}
                        />
                        <span>{child.label}</span>
                      </a>
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
