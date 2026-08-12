'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Database, BarChart3, Wrench, CheckCircle2 } from 'lucide-react';
import { skillsCategories } from '@/data/skills';
import { fadeUpVariant, staggerContainerVariant } from '@/lib/animations';

const CATEGORY_ICONS = [Cpu, Code2, Database, BarChart3, Wrench];

export default function SkillsPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');

  const filteredCategories = skillsCategories.filter((cat) => {
    if (selectedFilter === 'ALL') return true;
    return cat.title.includes(selectedFilter);
  });

  return (
    <div className="py-16 md:py-24 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="font-mono text-xs font-bold tracking-widest text-red bg-red-subtle border border-red-border px-3 py-1 rounded-sm inline-block">
            TECHNICAL MATRIX // 02
          </span>
        </motion.div>

        {/* Large Heading */}
        <div className="mb-12">
          <h1 className="font-display text-5xl sm:text-7xl font-bold tracking-tighter text-black uppercase mb-4">
            SKILLS & INVENTORY
          </h1>
          <p className="text-base sm:text-lg text-muted max-w-2xl">
            A comprehensive overview of programming languages, machine learning frameworks, web technologies, database engines, and cloud tools.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 border-b border-border">
          {['ALL', 'AI / ML', 'FULL-STACK', 'DATABASE', 'ANALYTICS', 'TOOLS'].map((filter) => {
            const isActive = selectedFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`font-mono text-xs font-bold tracking-wider px-4 py-2 rounded-sm border transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-black text-white border-black shadow-sm'
                    : 'bg-light text-muted border-border hover:border-black hover:text-black'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Skills Categories Grid */}
        <div className="space-y-12">
          {filteredCategories.map((cat, catIdx) => {
            const Icon = CATEGORY_ICONS[catIdx % CATEGORY_ICONS.length];
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border border-border rounded-sm bg-light p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 border-b border-border pb-4 mb-6">
                  <Icon size={22} className="text-red" />
                  <h2 className="font-display text-2xl font-bold tracking-tight text-black uppercase">
                    {cat.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {cat.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -3 }}
                      className="p-4 bg-white border border-border rounded-sm flex items-center justify-between hover:border-red transition-all group shadow-sm"
                    >
                      <span className="font-display font-bold text-sm text-black group-hover:text-red transition-colors">
                        {skill.name}
                      </span>

                      <span
                        className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-sm border ${
                          skill.level === 'ADVANCED'
                            ? 'bg-red-subtle text-red border-red-border'
                            : skill.level === 'INTERMEDIATE'
                            ? 'bg-black text-white border-black'
                            : 'bg-light text-muted border-border'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
