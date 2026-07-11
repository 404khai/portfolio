'use client';

import { useEffect, useState } from 'react';

interface TocItem {
  label: string;
  href: string;
  level: number;
}

export function useTocScrollSpy(items: TocItem[]) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const sectionIds = items.map((item) => item.href.slice(1));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (sections.length === 0) return;

    const updateActiveSection = () => {
      const offset = 120;
      let currentId = sectionIds[0];

      for (const section of sections) {
        const top = section.getBoundingClientRect().top;
        if (top - offset <= 0) {
          currentId = section.id;
        }
      }

      setActiveId(currentId);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [items]);

  return activeId;
}

export function isTocItemActive(activeId: string, href: string) {
  return activeId === href.slice(1);
}

export function isTocGroupActive(
  activeId: string,
  group: { href: string; children: { href: string }[] }
) {
  if (isTocItemActive(activeId, group.href)) return true;
  return group.children.some((child) => isTocItemActive(activeId, child.href));
}
