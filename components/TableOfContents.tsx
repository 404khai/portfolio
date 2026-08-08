'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CaretRightFill, CaretDownFill, ArrowLeft } from 'react-bootstrap-icons';
import { isTocGroupActive, isTocItemActive, useTocScrollSpy } from '@/hooks/useTocScrollSpy';

interface TocItem {
  label: string;
  href: string;
  level: number;
}

interface TableOfContentsProps {
  items: TocItem[];
}

interface GroupedTocItem extends TocItem {
  children: TocItem[];
}

function TocLink({
  href,
  label,
  active,
  nested = false,
}: {
  href: string;
  label: string;
  active: boolean;
  nested?: boolean;
}) {
  return (
    <a
      href={href}
      className={`flex items-start gap-2 transition-colors flex-1 ${
        nested ? 'text-sm' : 'text-sm md:text-base'
      } ${active ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
    >
      <span
        className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
          active ? 'bg-white' : 'bg-zinc-600'
        }`}
      />
      <span>{label}</span>
    </a>
  );
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const activeId = useTocScrollSpy(items);

  const groupedItems: GroupedTocItem[] = [];
  items.forEach((item) => {
    if (item.level === 2) {
      groupedItems.push({ ...item, children: [] });
    } else if (item.level === 3 && groupedItems.length > 0) {
      groupedItems[groupedItems.length - 1].children.push(item);
    } else if (item.level === 3 && groupedItems.length === 0) {
      groupedItems.push({ ...item, children: [] });
    }
  });

  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(
    new Set(groupedItems.map((_, i) => i))
  );

  const toggleSection = (index: number) => {
    const newExpanded = new Set(expandedIndices);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedIndices(newExpanded);
  };

  return (
    <div className="hidden md:block">
      <div className="sticky top-24">
        <div className="border border-zinc-900 bg-[#0a0a0a]">
          <div className="px-5 py-4 border-b border-zinc-900">
            <span className="text-zinc-300 text-xl font-calistoga">Table of Contents</span>
          </div>
          <nav className="px-5 py-4 space-y-3">
            {groupedItems.map((item, index) => {
              const groupActive = isTocGroupActive(activeId, item);

              return (
                <div key={item.href}>
                  <div className="flex items-center justify-between group">
                    <TocLink
                      href={item.href}
                      label={item.label}
                      active={groupActive}
                    />
                    {item.children.length > 0 && (
                      <button
                        onClick={() => toggleSection(index)}
                        className="p-1 text-zinc-500 hover:text-zinc-300 transition-colors"
                        aria-label={expandedIndices.has(index) ? 'Collapse section' : 'Expand section'}
                      >
                        {expandedIndices.has(index) ? (
                          <CaretDownFill className="w-3 h-3" />
                        ) : (
                          <CaretRightFill className="w-3 h-3" />
                        )}
                      </button>
                    )}
                  </div>

                  {item.children.length > 0 && expandedIndices.has(index) && (
                    <div className="mt-2 ml-2 border-l border-zinc-800 pl-3 space-y-2">
                      {item.children.map((child) => (
                        <TocLink
                          key={child.href}
                          href={child.href}
                          label={child.label}
                          active={isTocItemActive(activeId, child.href)}
                          nested
                        />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mt-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to blog</span>
        </Link>
      </div>
    </div>
  );
}
