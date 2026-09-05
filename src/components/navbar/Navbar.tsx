'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'SKILLS', href: '/skills' },
  { label: 'PROJECTS', href: '/projects' },
  { label: 'EXPERIENCE', href: '/experience' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-border shadow-sm py-3.5' 
          : 'bg-white border-b border-border/50 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* Brand VK Monogram */}
        <Link href="/" className="group flex items-center gap-3 select-none">
          <motion.div 
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25 }}
            className="relative font-display text-2xl md:text-3xl font-bold tracking-tighter text-black flex items-center"
          >
            <span className="text-red">V</span>
            <span>K</span>
            {/* Red Underline Effect on Hover */}
            <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </motion.div>
          
          <div className="hidden sm:flex flex-col">
            <span className="font-display font-bold text-xs tracking-wider text-black">KISHORE</span>
            <span className="font-mono text-[10px] text-muted tracking-widest">CSE • AI/ML • CLOUD</span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-mono text-xs font-bold tracking-widest transition-colors py-1 ${
                  isActive ? 'text-black' : 'text-muted hover:text-black'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-red"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs font-bold tracking-wider text-white bg-black hover:bg-red border border-black hover:border-red px-3.5 py-2 rounded-sm transition-colors shadow-sm"
          >
            <FileText size={14} />
            <span>RESUME</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-sm border border-border text-black hover:border-black transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-border shadow-2xl p-6 flex flex-col gap-5 z-40"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-display text-xl font-bold tracking-tight flex items-center justify-between py-2 border-b border-border/50 ${
                    isActive ? 'text-red' : 'text-black'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={18} className={isActive ? 'text-red' : 'text-muted'} />
                </Link>
              );
            })}

            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full font-mono text-xs font-bold tracking-wider text-white bg-red hover:bg-black p-3.5 rounded-sm text-center flex items-center justify-center gap-2 transition-colors"
            >
              <FileText size={16} />
              <span>VIEW RESUME</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
