'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowDown, Cpu, Code2, Database } from 'lucide-react';
import { fadeUpVariant, staggerContainerVariant } from '@/lib/animations';

const FLOATING_BADGES = [
  { label: 'AI / ML', icon: Cpu, top: '15%', left: '-12%', delay: 0 },
  { label: 'FULL-STACK', icon: Code2, top: '25%', right: '-14%', delay: 1.2 },
  { label: 'DATA', icon: Database, top: '65%', left: '-14%', delay: 0.6 },
  { label: 'PYTHON', top: '75%', right: '-10%', delay: 1.8 },
  { label: 'REACT', top: '45%', right: '-16%', delay: 0.9 },
];

export default function Hero() {
  // Scroll-linked motion: Photo positioned ABOVE heading vanishes (opacity 1 -> 0) as user scrolls down
  const { scrollY } = useScroll();
  const photoOpacity = useTransform(scrollY, [0, 260], [1, 0]);
  const photoScale = useTransform(scrollY, [0, 260], [1, 0.85]);
  const photoY = useTransform(scrollY, [0, 260], [0, -40]);

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between py-12 lg:py-16 bg-white overflow-hidden border-b border-border select-none">
      
      {/* Background Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full my-auto relative z-10">
        
        {/* Top System Status Bar */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-8 text-xs font-mono"
        >
          <div className="flex items-center gap-2 px-3 py-1 bg-light border border-border rounded-sm">
            <span className="status-dot-pulse"></span>
            <span className="font-bold text-black">SYSTEM STATUS</span>
            <span className="text-muted">• ONLINE</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-light border border-border rounded-sm text-muted">
            <span className="text-black font-bold">CURRENT FOCUS:</span>
            <span>AI + SOFTWARE + DATA</span>
          </div>
        </motion.div>

        {/* HERO CONTAINER: Centered Layout with Photo ABOVE Heading */}
        <motion.div 
          variants={staggerContainerVariant}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          
          {/* Technical Tag */}
          <motion.div variants={fadeUpVariant} className="mb-6">
            <span className="font-mono text-xs font-bold tracking-widest text-red bg-red-subtle border border-red-border px-3.5 py-1.5 rounded-sm inline-block shadow-sm">
              CSE / AI-ML / FULL-STACK / DATA
            </span>
          </motion.div>

          {/* 1. PROFESSIONAL PORTRAIT PHOTO (POSITIONED DIRECTLY ABOVE THE HEADING WORDS) */}
          <motion.div variants={fadeUpVariant} className="relative w-full max-w-[340px] sm:max-w-[380px] mb-10">
            <motion.div
              style={{
                opacity: photoOpacity,
                scale: photoScale,
                y: photoY,
              }}
              className="relative w-full aspect-[4/5]"
            >
              {/* Red Backing Offset Accent */}
              <div className="absolute inset-0 bg-red/10 border-2 border-red/30 rounded-sm transform translate-x-3 translate-y-3 -z-10" />

              {/* 100% Crisp Visible Photo Frame */}
              <div className="relative w-full h-full bg-light border border-border rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src="/images/kishore.png"
                  alt="Kishore - Professional Portrait in White Shirt and Black Tie"
                  fill
                  priority
                  className="object-cover object-center filter grayscale-[5%] hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Photo Overlay Telemetry */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/90 text-white p-3 rounded-sm border border-darkBorder backdrop-blur-md font-mono text-xs flex justify-between items-center">
                  <span>KISHORE // PORTRAIT</span>
                  <span className="text-red font-bold">CSE • AI/ML</span>
                </div>
              </div>

              {/* Floating Tech Badges */}
              {FLOATING_BADGES.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <motion.div
                    key={badge.label}
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3 + idx * 0.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: badge.delay,
                    }}
                    className="hidden md:flex items-center gap-1.5 font-mono text-[11px] font-bold text-black bg-white/95 border border-border px-3 py-1.5 rounded-sm shadow-md backdrop-blur-sm absolute z-20"
                    style={{
                      top: badge.top,
                      left: badge.left,
                      right: badge.right,
                    }}
                  >
                    {Icon && <Icon size={12} className="text-red" />}
                    <span>{badge.label}</span>
                  </motion.div>
                );
              })}

            </motion.div>
          </motion.div>

          {/* 2. HEADING WORDS (POSITIONED DIRECTLY BELOW THE PHOTO) */}
          <motion.div variants={fadeUpVariant} className="mb-6">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter text-black leading-[0.95] uppercase">
              BUILDING <span className="text-red">INTELLIGENT</span> <br />
              DIGITAL EXPERIENCES.
            </h1>
          </motion.div>

          {/* Name Banner */}
          <motion.div variants={fadeUpVariant} className="mb-6">
            <div className="flex items-center justify-center gap-4">
              <span className="h-[2px] w-12 bg-red"></span>
              <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-black">
                KISHORE
              </span>
              <span className="h-[2px] w-12 bg-red"></span>
            </div>
          </motion.div>

          {/* Narrative Description */}
          <motion.p variants={fadeUpVariant} className="text-base sm:text-lg text-muted max-w-2xl mb-8 leading-relaxed">
            I build intelligent applications by combining Artificial Intelligence, Machine Learning, 
            Full-Stack Development, and Data Analytics. Focused on scalable algorithms, 
            clean code architecture, and high-impact digital experiences.
          </motion.p>

          {/* Action CTA Buttons */}
          <motion.div variants={fadeUpVariant} className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="/projects" 
              className="font-mono text-xs sm:text-sm font-bold tracking-wider text-white bg-red hover:bg-black border border-red hover:border-black px-6 py-3.5 rounded-sm inline-flex items-center gap-3 transition-colors shadow-md group"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link 
              href="/contact" 
              className="font-mono text-xs sm:text-sm font-bold tracking-wider text-black bg-light hover:bg-black hover:text-white border border-border hover:border-black px-6 py-3.5 rounded-sm transition-colors"
            >
              CONTACT ME →
            </Link>
          </motion.div>

        </motion.div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full flex justify-center pt-8">
        <Link href="#analytics" className="group flex flex-col items-center gap-1 font-mono text-[11px] font-bold text-muted hover:text-red transition-colors">
          <span>SCROLL TO EXPLORE</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={14} className="text-red" />
          </motion.div>
        </Link>
      </div>

    </section>
  );
}
