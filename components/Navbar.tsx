'use client';

import React, { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { name: 'About', href: '#about' },
  { name: 'OSS', href: '#open-source' },
  { name: 'Work', href: '#work' },
  { name: 'Exp', href: '#experience' },
  { name: 'Blog', href: '#blog' },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: [0, 0.25, 0.5] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-[#09090b]/90 backdrop-blur-sm border-b border-[#27272a]/60">
        <div className="max-w-2xl mx-auto px-5 sm:px-6 md:px-8 h-14 flex items-center justify-between">
          <a
            href="#intro"
            className="font-unbounded text-sm sm:text-base font-black tracking-tighter text-white hover:text-[#a8e64c] transition-colors duration-200"
          >
            404KHAI
          </a>

          <div className="hidden sm:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-doto font-extrabold text-md uppercase tracking-[0.15em] transition-colors duration-200 ${
                  activeSection === item.href.slice(1)
                    ? 'text-[#a8e64c]'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="sm:hidden text-zinc-500 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 18"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 top-14 z-40 bg-[#09090b] sm:hidden flex flex-col px-5 py-6 gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={handleNavClick}
              className="font-unbounded text-lg text-zinc-400 hover:text-white py-3 border-b border-[#27272a]/60 transition-colors"
            >
              /{item.name}
            </a>
          ))}
        </div>
      )}
    </>
  );
};
