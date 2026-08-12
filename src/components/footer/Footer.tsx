'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-16 border-t border-darkBorder">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Top Footer Section */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12">
          <div className="max-w-md">
            {/* VK Monogram */}
            <div className="font-display text-4xl font-bold tracking-tighter text-white flex items-center mb-3">
              <span className="text-red">V</span>
              <span>K</span>
            </div>

            <h3 className="font-display text-xl font-bold tracking-tight text-white mb-1">
              KISHORE
            </h3>

            <p className="font-mono text-xs font-semibold text-red tracking-widest uppercase mb-3">
              CSE • AI/ML • FULL-STACK • DATA
            </p>

            <p className="text-sm text-zinc-400 leading-relaxed">
              Building intelligent digital experiences through code, AI, and data.
            </p>
          </div>

          {/* Quick Nav & Scroll Top */}
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="font-mono text-xs font-bold tracking-wider text-white border border-darkBorder hover:border-red hover:text-red px-4 py-2.5 rounded-sm flex items-center gap-2 transition-colors"
            >
              <span>TOP</span>
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        <div className="w-full h-px bg-darkBorder my-8" />

        {/* Bottom Socials & Copyright */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-zinc-400">
          <div>
            © 2026 Kishore. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-red transition-colors"
            >
              <Github size={15} /> GITHUB
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-red transition-colors"
            >
              <Linkedin size={15} /> LINKEDIN
            </a>
            <a
              href="mailto:kishore@example.com"
              className="flex items-center gap-1.5 hover:text-red transition-colors"
            >
              <Mail size={15} /> EMAIL
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
