'use client'

import React, { useState } from 'react';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: "Skills", href: "/skills" },
        { name: "Projects", href: "/projects" },
        { name: "Exp", href: "/experience" },
        { name: "Blog", href: "/blog" },
    ];

  return (
    <>
        <nav className='sticky top-0 z-50 bg-[#09090b]/80 backdrop-blur-md font-doto w-full max-w-5xl h-20 flex items-center justify-between border-b border-dashed border-[#27272a] md:border md:mx-auto md:w-[95%]'>
            {/* Logo */}
            <a href="/" className="px-6 h-full flex items-center hover:bg-zinc-900/50 transition-colors border-r border-[#27272a] border-dashed md:border-none">
                <h1 className="font-denk-one text-xl font-black tracking-tighter md:text-3xl text-white">404KHAI</h1>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 justify-end items-center px-6 gap-8 h-full">
                {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="font-irish-grover text-zinc-100 hover:text-white transition-colors duration-200 text-md font-medium uppercase tracking-wider"
                    >
                      /{item.name}
                    </a>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
                className="md:hidden px-6 h-full flex items-center justify-center text-zinc-400 hover:text-white border-l border-[#27272a] border-dashed"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 18"/></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                )}
            </button>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
            <div className="fixed inset-0 top-16 z-40 bg-[#09090b] md:hidden flex flex-col p-6 gap-4 animate-in slide-in-from-top-5 duration-200">
                {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="font-irish-grover text-zinc-300 hover:text-white text-2xl font-medium py-4 border-b border-dashed border-[#27272a]"
                    >
                      /{item.name}
                    </a>
                ))}
            </div>
        )}
    </>
  )
}
