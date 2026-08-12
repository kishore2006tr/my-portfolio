'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TECHNICAL_STATUSES = [
  "INITIALIZING",
  "LOADING AI MODULES",
  "LOADING PROJECTS",
  "ANALYZING DATA",
  "BUILDING EXPERIENCE",
  "SYSTEM READY"
];

export default function CinematicLoading() {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    // 2.2 second progress timer
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoadingComplete(true), 300);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Rotate technical status text based on progress
    const nextIndex = Math.min(
      Math.floor((progress / 100) * TECHNICAL_STATUSES.length),
      TECHNICAL_STATUSES.length - 1
    );
    setStatusIndex(nextIndex);
  }, [progress]);

  return (
    <AnimatePresence>
      {!isLoadingComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-between p-8 md:p-12 select-none"
        >
          {/* Top Status */}
          <div className="w-full flex justify-between items-center font-mono text-xs font-semibold tracking-widest text-muted">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red animate-pulse"></span>
              KISHORE // PORTFOLIO 2026
            </span>
            <span>{progress}%</span>
          </div>

          {/* Center Monogram VK & Technical Status */}
          <div className="flex flex-col items-center text-center">
            {/* VK Monogram */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-7xl md:text-9xl font-bold tracking-tighter text-black flex items-center mb-6"
            >
              <span className="text-red">V</span>
              <span>K</span>
            </motion.div>

            {/* Dynamic Status Text */}
            <div className="h-6 overflow-hidden">
              <motion.span
                key={statusIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="font-mono text-xs font-bold tracking-widest text-black block uppercase"
              >
                {TECHNICAL_STATUSES[statusIndex]}
              </motion.span>
            </div>
          </div>

          {/* Bottom Progress Line */}
          <div className="w-full max-w-md">
            <div className="w-full h-[2px] bg-border relative overflow-hidden rounded-full">
              <motion.div
                className="absolute top-0 left-0 bottom-0 bg-red shadow-[0_0_12px_rgba(225,6,0,0.8)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
