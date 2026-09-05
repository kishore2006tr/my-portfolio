'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Sparkles, SlidersHorizontal } from 'lucide-react';
import { projectsData, filterCategories, Project, FilterCategory } from '@/data/projects';
import ProjectCard from './ProjectCard';

interface ProjectRollerProps {
  showTitle?: boolean;
}

export default function ProjectRoller({ showTitle = true }: ProjectRollerProps) {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('ALL');

  // Filter projects by domain category
  const filteredProjects = useMemo(() => {
    let list = projectsData.filter((p) => {
      if (selectedCategory === 'ALL') return true;
      if (selectedCategory === 'AI / ML') {
        return p.domain.includes('AI') || p.domain.includes('Machine Learning') || p.secondaryDomains.includes('AI / ML');
      }
      if (selectedCategory === 'DATA ANALYTICS') {
        return p.domain.includes('Data Analytics') || p.secondaryDomains.includes('Data Analytics');
      }
      if (selectedCategory === 'FULL STACK') {
        return p.domain.includes('Full Stack') || p.secondaryDomains.includes('Full Stack');
      }
      return true;
    });

    // Sort with Featured projects first
    return [...list].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-20 bg-white border-b border-border overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        {showTitle && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-border pb-8">
            <div>
              <span className="font-mono text-xs font-bold tracking-widest text-red uppercase block mb-2">
                PROJECT PORTFOLIO // 03
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-black uppercase">
                FEATURED WORK
              </h2>
            </div>
            <p className="text-sm text-muted max-w-md leading-relaxed">
              Production systems, autonomous AI agents, and full-stack platforms built with modern architectures and verified implementations.
            </p>
          </div>
        )}

        {/* Domain Filters Navigation Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-border/60">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {filterCategories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`font-mono text-xs font-bold tracking-wider px-4 py-2.5 rounded-sm border transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
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

          {/* Telemetry Counter */}
          <div className="font-mono text-xs font-bold text-black flex items-center gap-2">
            <Layers size={15} className="text-red" />
            <span>
              {filteredProjects.length} {filteredProjects.length === 1 ? 'PROJECT' : 'PROJECTS'}
            </span>
          </div>
        </div>

        {/* RESPONSIVE PROJECTS GRID (Desktop: 3 per row, Tablet: 2 per row, Mobile: 1 per row) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
