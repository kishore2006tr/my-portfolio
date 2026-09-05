'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Cpu, Code2, Database, Github, Linkedin, Mail, Cloud } from 'lucide-react';
import { fadeUpVariant, staggerContainerVariant } from '@/lib/animations';
import { SOCIAL_LINKS } from '@/data/socials';
import { getAssetPath } from '@/lib/basePath';

const FLOATING_BADGES = [
  { label: 'AI / ML', icon: Cpu, top: '8%', left: '-6%', delay: 0 },
  { label: 'FULL-STACK', icon: Code2, top: '22%', right: '-6%', delay: 1.2 },
  { label: 'CLOUD', icon: Cloud, top: '44%', right: '-7%', delay: 0.9 },
  { label: 'DATA', icon: Database, top: '64%', left: '-6%', delay: 0.6 },
  { label: 'PYTHON', top: '82%', right: '-4%', delay: 1.8 },
];

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between py-10 lg:py-16 bg-white overflow-hidden border-b border-border select-none">
      
      {/* Background Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full my-auto relative z-10">
        
        {/* Top System Status Bar */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-8 lg:mb-12 text-xs font-mono"
        >
          <div className="flex items-center gap-2 px-3 py-1 bg-light border border-border rounded-sm">
            <span className="status-dot-pulse"></span>
            <span className="font-bold text-black">SYSTEM STATUS</span>
            <span className="text-muted">• ONLINE</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-light border border-border rounded-sm text-muted">
            <span className="text-black font-bold">CURRENT FOCUS:</span>
            <span>AI + FULL-STACK + DATA + CLOUD</span>
          </div>
        </motion.div>

        {/* HERO TWO-COLUMN CONTAINER */}
        <motion.div 
          variants={staggerContainerVariant}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
        >
          
          {/* LEFT COLUMN: All Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
            
            {/* Technical Category Tag */}
            <motion.div variants={fadeUpVariant} className="mb-4">
              <span className="font-mono text-xs font-bold tracking-widest text-red bg-red-subtle border border-red-border px-3.5 py-1.5 rounded-sm inline-block shadow-sm">
                CSE / AI-ML / FULL-STACK / DATA / CLOUD
              </span>
            </motion.div>

            {/* Greeting & Name */}
            <motion.div variants={fadeUpVariant} className="mb-2">
              <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-muted tracking-wider uppercase mb-1">
                <span>HELLO, I&apos;M</span>
                <span className="h-[2px] w-8 bg-red"></span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-black leading-[0.95] uppercase">
                KISHORE
              </h1>
            </motion.div>

            {/* Job Title / Role */}
            <motion.div variants={fadeUpVariant} className="mb-6 space-y-1.5">
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-black leading-tight uppercase">
                BUILDING <span className="text-red">INTELLIGENT</span> DIGITAL EXPERIENCES.
              </h2>
              <p className="font-mono text-xs sm:text-sm font-semibold text-red tracking-wider uppercase">
                AI ENGINEER // FULL-STACK DEVELOPER // CLOUD & DATA
              </p>
            </motion.div>

            {/* Narrative Description */}
            <motion.p variants={fadeUpVariant} className="text-base sm:text-lg text-muted max-w-xl mb-8 leading-relaxed">
              I build intelligent applications by combining Artificial Intelligence, Machine Learning, 
              Full-Stack Development, Data Analytics, and Cloud Engineering. Focused on scalable systems, 
              clean code architecture, and high-impact digital experiences.
            </motion.p>

            {/* Action CTA Buttons */}
            <motion.div variants={fadeUpVariant} className="flex flex-wrap items-center gap-4 mb-8">
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

            {/* Social Media Links / Icons */}
            <motion.div variants={fadeUpVariant} className="flex flex-wrap items-center gap-6 pt-6 border-t border-border font-mono text-xs text-muted w-full max-w-xl">
              <span className="font-bold text-black">CONNECT:</span>
              <a
                href={SOCIAL_LINKS.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-red transition-colors"
                title={`GitHub: ${SOCIAL_LINKS.github.username}`}
              >
                <Github size={15} /> {SOCIAL_LINKS.github.username}
              </a>
              <a
                href={SOCIAL_LINKS.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-red transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin size={15} /> LINKEDIN
              </a>
              <a
                href={SOCIAL_LINKS.email.mailto}
                className="flex items-center gap-1.5 hover:text-red transition-colors"
                title={`Send email to ${SOCIAL_LINKS.email.address}`}
              >
                <Mail size={15} /> EMAIL
              </a>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Personal Profile Image (Vertically Centered) */}
          <motion.div 
            variants={fadeUpVariant}
            className="lg:col-span-5 flex justify-center lg:justify-end items-center order-1 lg:order-2 w-full"
          >
            <div className="relative w-full max-w-[290px] sm:max-w-[340px] lg:max-w-[380px]">
              
              {/* Red Backing Offset Accent */}
              <div className="absolute inset-0 bg-red/10 border-2 border-red/30 rounded-sm transform translate-x-3 translate-y-3 -z-10" />

              {/* 100% Crisp Visible Photo Frame */}
              <div className="relative w-full aspect-[4/5] bg-light border border-border rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src={getAssetPath('/images/kishore.png')}
                  alt="Kishore - Professional Portrait in White Shirt and Black Tie"
                  fill
                  priority
                  sizes="(max-width: 768px) 290px, (max-width: 1024px) 340px, 380px"
                  className="object-cover object-center filter grayscale-[5%] hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Photo Overlay Telemetry */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/90 text-white p-3 rounded-sm border border-darkBorder backdrop-blur-md font-mono text-xs flex justify-between items-center z-10">
                  <span>KISHORE // PORTRAIT</span>
                  <span className="text-red font-bold">CSE • AI/ML • CLOUD</span>
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
                    className="hidden md:flex items-center gap-1.5 font-mono text-[11px] font-bold text-black bg-white/95 border border-border px-3 py-1.5 rounded-sm shadow-md backdrop-blur-sm absolute z-20 pointer-events-none"
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

            </div>
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
