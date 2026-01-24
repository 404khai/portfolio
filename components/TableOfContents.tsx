'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CaretRightFill, CaretDownFill, ArrowLeft } from 'react-bootstrap-icons';

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

export default function TableOfContents({ items }: TableOfContentsProps) {
  // Group items by H2
  const groupedItems: GroupedTocItem[] = [];
  items.forEach((item) => {
    if (item.level === 2) {
      groupedItems.push({ ...item, children: [] });
    } else if (item.level === 3 && groupedItems.length > 0) {
      groupedItems[groupedItems.length - 1].children.push(item);
    } else if (item.level === 3 && groupedItems.length === 0) {
        // Handle case where H3 appears before any H2
        // Just treat as H2 or ignore? Better to treat as H2-like at root or wrap in dummy.
        // For now, let's just push it as a root item without children to ensure it appears.
        groupedItems.push({ ...item, children: [] });
    }
  });

  // State for expanded sections (default to all expanded)
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
            {groupedItems.map((item, index) => (
              <div key={item.href}>
                <div className="flex items-center justify-between group">
                  <a
                    href={item.href}
                    className="block text-sm md:text-base text-zinc-400 hover:text-white transition-colors flex-1"
                  >
                    {item.label}
                  </a>
                  {item.children.length > 0 && (
                    <button
                      onClick={() => toggleSection(index)}
                      className="p-1 text-zinc-500 hover:text-zinc-300 transition-colors"
                      aria-label={expandedIndices.has(index) ? "Collapse section" : "Expand section"}
                    >
                      {expandedIndices.has(index) ? (
                        <CaretDownFill className="w-3 h-3" />
                      ) : (
                        <CaretRightFill className="w-3 h-3" />
                      )}
                    </button>
                  )}
                </div>
                
                {/* Nested Items */}
                {item.children.length > 0 && expandedIndices.has(index) && (
                  <div className="mt-2 ml-2 border-l border-zinc-800 pl-3 space-y-2">
                    {item.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        className="block text-sm text-zinc-400 hover:text-white transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mt-8"
        >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to blog</span>
        </Link>
      </div>
    </div>
  );
}
