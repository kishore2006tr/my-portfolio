'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { experienceData } from '@/data/experience';

export default function ExperiencePage() {
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
            CAREER & EDUCATION // 04
          </span>
        </motion.div>

        {/* Heading */}
        <div className="mb-16">
          <h1 className="font-display text-5xl sm:text-7xl font-bold tracking-tighter text-black uppercase mb-4">
            EXPERIENCE & TIMELINE
          </h1>
          <p className="text-base sm:text-lg text-muted max-w-2xl">
            A chronological timeline of computer science education, AI engineering internships, quantitative research, and hackathon achievements.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative border-l-2 border-border ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {experienceData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Red Bullet */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-red group-hover:bg-red transition-colors" />

              <div className="p-6 sm:p-8 bg-light border border-border rounded-sm hover:border-red transition-all shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs font-bold tracking-wider text-red bg-red-subtle border border-red-border px-2.5 py-1 rounded-sm">
                    {item.category}
                  </span>
                  <span className="font-mono text-xs font-bold text-muted">
                    {item.period}
                  </span>
                </div>

                <h2 className="font-display text-2xl font-bold tracking-tight text-black mb-1 group-hover:text-red transition-colors">
                  {item.title}
                </h2>

                <h3 className="font-mono text-xs font-semibold text-muted mb-4">
                  {item.organization}
                </h3>

                <p className="text-sm text-muted leading-relaxed mb-4">
                  {item.description}
                </p>

                {item.highlights && item.highlights.length > 0 && (
                  <div className="space-y-1.5 border-t border-border pt-4 mt-4">
                    {item.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 font-mono text-xs text-black">
                        <CheckCircle2 size={13} className="text-red flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
