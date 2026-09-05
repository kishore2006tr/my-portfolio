'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles, CheckCircle2, Terminal } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasLinks = Boolean(project.githubUrl || project.liveUrl);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white border border-border rounded-sm hover:border-red transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group h-full"
    >
      <div>
        {/* Card Header Top Row */}
        <div className="p-5 sm:p-6 border-b border-border bg-light/50 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-red">
              {project.number} //
            </span>
            <span className="font-mono text-xs font-bold tracking-wider text-black uppercase">
              {project.domain}
            </span>
          </div>

          {project.featured && (
            <span className="font-mono text-[10px] font-bold text-white bg-black px-2 py-0.5 rounded-xs tracking-widest uppercase flex items-center gap-1">
              <Sparkles size={11} className="text-red" />
              FEATURED
            </span>
          )}
        </div>

        {/* Card Main Body */}
        <div className="p-5 sm:p-6">
          <h3 className="font-display text-2xl font-bold tracking-tight text-black mb-2 group-hover:text-red transition-colors">
            {project.name}
          </h3>

          <p className="text-sm text-muted leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Tech Stack Badges */}
          <div className="mb-6">
            <span className="font-mono text-[11px] font-bold text-black uppercase tracking-wider block mb-2">
              TECHNOLOGIES:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] font-semibold text-muted bg-light border border-border px-2.5 py-0.5 rounded-sm hover:border-black hover:text-black transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <span className="font-mono text-[11px] font-bold text-black uppercase tracking-wider block mb-2.5">
              KEY CAPABILITIES:
            </span>
            <div className="space-y-2">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 font-mono text-xs text-black leading-snug"
                >
                  <CheckCircle2
                    size={14}
                    className="text-red flex-shrink-0 mt-0.5"
                  />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer / Links (Only renders when links exist) */}
      <div className="px-5 sm:px-6 py-4 border-t border-border bg-light/30">
        {hasLinks ? (
          <div className="flex items-center gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs font-bold text-black hover:text-red inline-flex items-center gap-1.5 transition-colors"
              >
                <Github size={15} /> GITHUB
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs font-bold text-white bg-red hover:bg-black px-3.5 py-1.5 rounded-sm inline-flex items-center gap-1.5 transition-colors"
              >
                <ExternalLink size={14} /> LIVE DEMO
              </a>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-between font-mono text-[11px] text-muted">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red animate-pulse" />
              <span>LOCAL REPOSITORY</span>
            </span>
            <span className="text-[10px] tracking-wider uppercase text-muted">
              ARCHITECTED // VERIFIED
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
