'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  School, 
  Clock, 
  Brain, 
  Cpu, 
  Code2, 
  CheckCircle2, 
  Briefcase,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { educationData, internshipData } from '@/data/experience';

const INTERNSHIP_ICONS: Record<string, React.ElementType> = {
  'intern-01': Brain,
  'intern-02': Cpu,
  'intern-03': Code2,
};

export default function ExperiencePage() {
  return (
    <div className="py-16 md:py-24 bg-white border-b border-border select-none">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        {/* Page Header Meta Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="font-mono text-xs font-bold tracking-widest text-red bg-red-subtle border border-red-border px-3.5 py-1.5 rounded-sm inline-block shadow-sm">
            CAREER & EDUCATION // 04
          </span>
        </motion.div>

        {/* Page Heading */}
        <div className="mb-16">
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-black uppercase mb-4">
            EDUCATION & EXPERIENCE
          </h1>
          <p className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
            Academic background in Computer Science & Engineering paired with practical industry internship experience in Machine Learning, AI applications, and Data Analysis.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 1: INTERNSHIP EXPERIENCE (VERTICAL TIMELINE)                      */}
        {/* ========================================================================= */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs font-bold tracking-wider text-red uppercase">
              01 // INDUSTRY TRACK
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-black uppercase mb-3">
            INTERNSHIP EXPERIENCE
          </h2>
          <p className="text-sm text-muted max-w-xl mb-12">
            Practical machine learning engineering, data preprocessing, and model development internships.
          </p>

          {/* Vertical Timeline */}
          <div className="relative border-l-2 border-border ml-3 sm:ml-6 space-y-10 pl-6 sm:pl-10">
            {internshipData.map((item, idx) => {
              const IconComponent = INTERNSHIP_ICONS[item.id] || Briefcase;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Bullet Node */}
                  <div className="absolute -left-[31px] sm:-left-[47px] top-4 w-4 h-4 rounded-full bg-white border-2 border-red group-hover:bg-red group-hover:scale-125 transition-all shadow-sm" />

                  {/* Experience Card */}
                  <div className="p-6 sm:p-8 bg-light border border-border rounded-sm hover:border-red transition-all shadow-sm">
                    
                    {/* Top Metadata Row */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <span className="font-mono text-xs font-bold tracking-wider text-red bg-red-subtle border border-red-border px-3 py-1 rounded-sm inline-flex items-center gap-1.5">
                        <Sparkles size={12} />
                        {item.domain}
                      </span>

                      <div className="flex items-center gap-2 font-mono text-xs font-bold text-black bg-white border border-border px-3 py-1 rounded-sm shadow-2xs">
                        <Clock size={13} className="text-red" />
                        <span>DURATION: {item.duration.toUpperCase()}</span>
                      </div>
                    </div>

                    {/* Company Name & Icon */}
                    <div className="flex items-center gap-3 mb-1">
                      <div className="p-2 bg-white border border-border rounded-sm text-red group-hover:border-red transition-colors">
                        <IconComponent size={20} />
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-black group-hover:text-red transition-colors">
                        {item.company}
                      </h3>
                    </div>

                    {/* Role Title */}
                    <p className="font-mono text-xs sm:text-sm font-semibold text-muted uppercase tracking-wider mb-6 pl-11">
                      {item.role}
                    </p>

                    {/* Responsibilities & Achievements */}
                    <div className="space-y-2.5 border-t border-border pt-5">
                      {item.points.map((point) => (
                        <div key={point} className="flex items-start gap-3 font-mono text-xs sm:text-sm text-black">
                          <CheckCircle2 size={16} className="text-red flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{point}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 2: EDUCATION (ACADEMIC TIMELINE / CARDS)                          */}
        {/* ========================================================================= */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs font-bold tracking-wider text-red uppercase">
              02 // ACADEMIC RECORD
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-black uppercase mb-3">
            EDUCATION
          </h2>
          <p className="text-sm text-muted max-w-xl mb-12">
            Formal foundations in Computer Science & Engineering and secondary school education.
          </p>

          {/* Education Timeline */}
          <div className="relative border-l-2 border-border ml-3 sm:ml-6 space-y-10 pl-6 sm:pl-10">
            {educationData.map((edu, idx) => {
              const isCollege = idx === 0;
              const IconComponent = isCollege ? GraduationCap : School;

              return (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative group"
                >
                  {/* Timeline Bullet Node */}
                  <div className="absolute -left-[31px] sm:-left-[47px] top-4 w-4 h-4 rounded-full bg-white border-2 border-red group-hover:bg-red group-hover:scale-125 transition-all shadow-sm" />

                  {/* Education Card */}
                  <div className="p-6 sm:p-8 bg-light border border-border rounded-sm hover:border-red transition-all shadow-sm">
                    
                    {/* Top Metadata Row: Score Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <span className="font-mono text-xs font-bold tracking-wider text-muted bg-white border border-border px-3 py-1 rounded-sm uppercase">
                        {isCollege ? 'UNDERGRADUATE DEGREE' : 'HIGHER SECONDARY EDUCATION'}
                      </span>

                      {/* CGPA / Percentage Highlight Badge */}
                      <div className="flex items-center gap-2 font-mono text-xs font-bold bg-white border border-border px-3.5 py-1 rounded-sm shadow-2xs">
                        <span className="text-muted">{edu.scoreLabel}:</span>
                        <span className="text-red text-sm font-extrabold">{edu.scoreValue}</span>
                      </div>
                    </div>

                    {/* Institution Name & Icon */}
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-white border border-border rounded-sm text-red group-hover:border-red transition-colors">
                        <IconComponent size={22} />
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-black group-hover:text-red transition-colors">
                        {edu.institution}
                      </h3>
                    </div>

                    {/* Degree & Department Details */}
                    <div className="pl-11 space-y-1">
                      <p className="font-display text-lg sm:text-xl font-bold text-black">
                        {edu.degree}
                      </p>
                      {edu.department && (
                        <p className="font-mono text-xs sm:text-sm text-muted uppercase tracking-wider">
                          Department: <span className="text-black font-semibold">{edu.department}</span>
                        </p>
                      )}
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
