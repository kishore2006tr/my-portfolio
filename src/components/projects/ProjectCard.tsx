'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  isActive?: boolean;
}

export default function ProjectCard({ project, isActive = true }: ProjectCardProps) {
  return (
    <motion.div
      layout
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`border rounded-sm bg-white overflow-hidden flex flex-col justify-between transition-all duration-300 ${
        isActive 
          ? 'border-red shadow-2xl shadow-red/10 scale-100 opacity-100 z-20' 
          : 'border-border opacity-50 scale-90 pointer-events-none z-10'
      }`}
    >
      {/* Card Header */}
      <div className="px-6 py-4 border-b border-border bg-light flex items-center justify-between font-mono text-xs">
        <span className="font-bold text-red">{project.number} // {project.category}</span>
        <span className="text-muted uppercase">{project.year || "2025"}</span>
      </div>

      {/* Card Image Frame */}
      <div className="relative h-56 sm:h-64 bg-black overflow-hidden group">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />

        {/* Hover Arrow Overlay */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-red text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
          <ArrowRight size={18} />
        </div>

        {/* Latency / Accuracy Telemetry Badge */}
        {project.metrics?.responseTime && (
          <div className="absolute bottom-4 left-4 font-mono text-[11px] font-bold text-white bg-black/90 border border-darkBorder px-2.5 py-1 rounded-sm">
            {project.metrics.responseTime} LATENCY
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-display text-2xl font-bold tracking-tight text-black mb-2 hover:text-red transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted line-clamp-3 mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex items-center gap-1.5 flex-wrap mb-6">
            {project.technologies.map((tech) => (
              <span key={tech} className="font-mono text-[10px] font-semibold text-muted bg-light border border-border px-2 py-0.5 rounded-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-4 border-t border-border flex items-center justify-between">
          <Link
            href={`/projects/${project.slug}`}
            className="font-mono text-xs font-bold tracking-wider text-black hover:text-red flex items-center gap-2 transition-colors group/link"
          >
            <span>VIEW CASE STUDY</span>
            <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>

          <div className="flex items-center gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="text-muted hover:text-red transition-colors">
                <Github size={16} />
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="text-muted hover:text-red transition-colors">
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>

    </motion.div>
  );
}
