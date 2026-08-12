'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop devices
    if (typeof window === 'undefined' || window.innerWidth < 1024) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target?.closest('a, button, [data-cursor]')) {
        setIsHovered(true);
        const customText = target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');
        setCursorText(customText || '');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
      animate={{
        x: mousePosition.x - (isHovered ? 24 : 6),
        y: mousePosition.y - (isHovered ? 24 : 6),
        scale: isHovered ? 1.5 : 1,
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
    >
      <div
        className={`rounded-full flex items-center justify-center transition-all ${
          isHovered
            ? 'w-12 h-12 bg-red text-white font-mono text-[9px] font-bold shadow-lg shadow-red/30'
            : 'w-3 h-3 bg-red shadow-sm'
        }`}
      >
        {cursorText && <span className="uppercase text-center leading-none">{cursorText}</span>}
      </div>
    </motion.div>
  );
}
