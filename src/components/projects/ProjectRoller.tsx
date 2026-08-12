'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Layers, SlidersHorizontal } from 'lucide-react';
import { projectsData, filterCategories, Project } from '@/data/projects';
import ProjectCard from './ProjectCard';

interface ProjectRollerProps {
  showTitle?: boolean;
}

export default function ProjectRoller({ showTitle = true }: ProjectRollerProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Filter projects by active category
  const filteredProjects = useMemo(() => {
    return projectsData.filter((p) => {
      if (selectedCategory === 'ALL') return true;
      if (p.category === selectedCategory) return true;
      if (p.allCategories && p.allCategories.includes(selectedCategory)) return true;
      return false;
    });
  }, [selectedCategory]);

  // Ensure activeIndex is within bounds when filter changes
  const safeIndex = Math.min(activeIndex, Math.max(0, filteredProjects.length - 1));
  const activeProject = filteredProjects[safeIndex] || filteredProjects[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : filteredProjects.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < filteredProjects.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-20 bg-white border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Optional Header Banner */}
        {showTitle && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-border pb-6">
            <div>
              <span className="font-mono text-xs font-bold tracking-widest text-red uppercase block mb-2">
                CINEMATIC SHOWCASE // 03
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-black uppercase">
                PROJECT ROLLER
              </h2>
            </div>
            <p className="text-sm text-muted max-w-md">
              Horizontal interactive showcase featuring low-latency AI diagnostics, multi-tenant RAG engines, and high-frequency quant analytics.
            </p>
          </div>
        )}

        {/* Category Filters Bar */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-10 pb-4 border-b border-border/50">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {filterCategories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setActiveIndex(0);
                  }}
                  className={`font-mono text-xs font-bold tracking-wider px-4 py-2 rounded-sm border transition-all whitespace-nowrap flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-black text-white border-black shadow-sm'
                      : 'bg-white text-muted border-border hover:border-black hover:text-black'
                  }`}
                >
                  <span>{cat}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-red" />}
                </button>
              );
            })}
          </div>

          {/* Dynamic Counter */}
          <div className="font-mono text-xs font-bold text-black flex items-center gap-2">
            <Layers size={15} className="text-red" />
            <span>{filteredProjects.length} PROJECTS FILTERED</span>
          </div>
        </div>

        {/* Roller Navigation Controls Header */}
        <div className="flex items-center justify-between mb-8 font-mono text-xs">
          <button
            onClick={handlePrev}
            className="flex items-center gap-2 font-bold text-black hover:text-red transition-colors"
          >
            <ArrowLeft size={16} /> PREVIOUS
          </button>

          <div className="flex items-center gap-2 font-bold text-red bg-red-subtle border border-red-border px-3 py-1 rounded-sm">
            <span>FEATURED PROJECT {safeIndex + 1} / {filteredProjects.length}</span>
          </div>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 font-bold text-black hover:text-red transition-colors"
          >
            NEXT <ArrowRight size={16} />
          </button>
        </div>

        {/* HORIZONTAL ROLLER CAROUSEL CONTAINER */}
        <div className="relative min-h-[520px] flex items-center justify-center py-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject?.slug || 'project-roller'}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="w-full max-w-3xl"
            >
              {activeProject && (
                <ProjectCard project={activeProject} isActive={true} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Roller Dots Navigation */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {filteredProjects.map((p, idx) => (
            <button
              key={p.slug}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === safeIndex ? 'w-8 bg-red' : 'w-2 bg-border hover:bg-black'
              }`}
              aria-label={`Go to project ${p.title}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
