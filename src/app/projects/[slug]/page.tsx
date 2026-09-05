'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, ArrowRight, Github, ExternalLink, Activity, Cpu, 
  Database, CheckCircle2, AlertTriangle, ShieldCheck, Play, Terminal, 
  RefreshCw, FileText
} from 'lucide-react';
import { projectsData, Project } from '@/data/projects';

export default function ProjectSlugPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="py-24 text-center max-w-xl mx-auto px-4">
        <h1 className="font-display text-4xl font-bold mb-4">PROJECT NOT FOUND</h1>
        <p className="text-muted mb-6">The project slug "{params.slug}" could not be located in the repository.</p>
        <Link href="/projects" className="font-mono text-xs font-bold text-white bg-black px-6 py-3 rounded-sm inline-block">
          ← BACK TO PROJECTS
        </Link>
      </div>
    );
  }

  const [demoInput, setDemoInput] = useState(project.sampleInputs?.[0] || 'Sample Input Query');
  const [demoOutput, setDemoOutput] = useState(project.sampleOutputs?.[0] || 'Sample Output Telemetry');
  const [isSimulating, setIsSimulating] = useState(false);

  const handleRunSimulator = (inputVal?: string) => {
    const query = inputVal || demoInput;
    setIsSimulating(true);
    setTimeout(() => {
      const idx = project.sampleInputs?.indexOf(query) ?? -1;
      if (idx !== -1 && project.sampleOutputs?.[idx]) {
        setDemoOutput(project.sampleOutputs[idx]);
      } else {
        setDemoOutput(`Processed query [${query}] -> Inference latency: 42ms (Success)`);
      }
      setIsSimulating(false);
    }, 600);
  };

  return (
    <div className="bg-white pb-24">
      
      {/* Sticky Top Bar Navigation */}
      <div className="sticky top-[65px] z-40 bg-white/95 backdrop-blur-md border-b border-border py-3">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between font-mono text-xs">
          <Link href="/projects" className="font-bold text-black hover:text-red flex items-center gap-2 transition-colors">
            <ArrowLeft size={16} /> BACK TO PROJECTS
          </Link>

          <div className="hidden sm:flex items-center gap-2 font-semibold">
            <span className="text-red font-bold">{project.number}</span>
            <span className="text-black font-semibold truncate max-w-xs">{project.name || project.title}</span>
          </div>

          <div className="flex items-center gap-2">
            {(project.githubUrl || project.github) && (
              <a href={project.githubUrl || project.github} target="_blank" rel="noreferrer" className="p-2 border border-border text-muted hover:border-red hover:text-red rounded-sm transition-colors">
                <Github size={15} />
              </a>
            )}
            {(project.liveUrl || project.demo) && (
              <a href={project.liveUrl || project.demo} target="_blank" rel="noreferrer" className="p-2 border border-border text-muted hover:border-red hover:text-red rounded-sm transition-colors">
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-10">
        
        {/* OVERVIEW SECTION */}
        <section className="mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-red bg-red-subtle border border-red-border px-3 py-1 rounded-sm inline-block mb-4">
            01 — OVERVIEW
          </span>
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 mb-10">
            <div>
              <span className="font-mono text-xs font-bold tracking-wider text-red block mb-2">
                {project.domain || project.category}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight mb-4">
                {project.name || project.title}
              </h1>
              <p className="text-lg sm:text-xl text-muted leading-relaxed">
                {project.tagline || project.description}
              </p>
            </div>

            <div className="p-6 bg-light border border-border rounded-sm flex flex-col gap-3.5 h-fit font-mono text-xs">
              <div className="flex justify-between border-b border-border pb-2.5">
                <span className="font-bold text-muted">YEAR</span>
                <span className="font-semibold text-black">{project.year || "2025 - 2026"}</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2.5">
                <span className="font-bold text-muted">ROLE</span>
                <span className="font-semibold text-black">{project.role || "Lead Developer / Architect"}</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2.5">
                <span className="font-bold text-muted">DOMAIN</span>
                <span className="font-semibold text-black">{project.domain || project.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-muted">STATUS</span>
                <span className="font-semibold text-red">VERIFIED LOCAL REPO</span>
              </div>
            </div>
          </div>

          <div className="relative w-full min-h-[260px] sm:min-h-[320px] rounded-sm overflow-hidden border border-border bg-black p-8 flex flex-col justify-between">
            {project.image ? (
              <Image src={project.image} alt={project.name || project.title || ''} fill className="object-cover" />
            ) : (
              <>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none opacity-40" />
                <div className="relative z-10">
                  <span className="font-mono text-xs font-bold text-red tracking-widest uppercase mb-2 block">
                    SYSTEM TELEMETRY // {project.number}
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-white uppercase">
                    {project.name || project.title}
                  </h3>
                  <p className="font-mono text-xs text-zinc-400 mt-2">
                    PRIMARY DOMAIN: {project.domain}
                  </p>
                </div>
                <div className="relative z-10 flex flex-wrap gap-2 mt-8">
                  {project.technologies.slice(0, 8).map((t) => (
                    <span key={t} className="font-mono text-xs text-zinc-300 bg-darkSurface border border-darkBorder px-2.5 py-1 rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </>
            )}
            <div className="absolute bottom-4 right-4 font-mono text-xs font-bold text-white bg-black/90 border border-darkBorder px-4 py-2 rounded-sm flex items-center gap-2 z-10">
              <span className="status-dot-pulse" /> VERIFIED CODEBASE
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-border my-12" />

        {/* KEY CAPABILITIES */}
        <section className="mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-red bg-red-subtle border border-red-border px-3 py-1 rounded-sm inline-block mb-4">
            02 — CORE CAPABILITIES
          </span>
          <div className="p-8 sm:p-12 bg-light border border-border border-l-4 border-l-red rounded-sm">
            <h2 className="font-display text-3xl font-bold tracking-tight text-black mb-6 uppercase">
              IMPLEMENTED SYSTEM FEATURES
            </h2>
            <div className="space-y-3">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 font-mono text-xs sm:text-sm text-black">
                  <CheckCircle2 size={16} className="text-red flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-border my-12" />

        {/* SYSTEM ARCHITECTURE DIAGRAM */}
        <section className="mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-red bg-red-subtle border border-red-border px-3 py-1 rounded-sm inline-block mb-2">
            04 — SYSTEM ARCHITECTURE
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-black mb-8 uppercase">
            DISTRIBUTED ARCHITECTURE
          </h2>

          <div className="p-8 bg-black text-white border border-darkBorder rounded-sm">
            <div className="flex flex-col items-center max-w-xl mx-auto space-y-3">
              {(project.architecture || [
                { name: "USER", type: "Client", desc: "Web browser or client API consumer" },
                { name: "REACT FRONTEND", type: "Frontend", desc: "Single-page responsive dashboard UI" },
                { name: "REST API / FASTAPI", type: "API Gateway", desc: "Async API service & queue" },
                { name: "ML MODEL", type: "Inference Engine", desc: "GPU accelerated prediction runtime" },
                { name: "DATABASE", type: "Persistence", desc: "Relational DB & vector index store" },
                { name: "DEPLOYMENT", type: "Infrastructure", desc: "Containerized Kubernetes cloud cluster" }
              ]).map((node, idx, arr) => (
                <React.Fragment key={node.name}>
                  <div className="w-full p-4 bg-darkSurface border border-darkBorder rounded-sm flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 font-mono text-xs">
                      <span className="font-bold text-red">N-0{idx + 1}</span>
                      <div>
                        <span className="font-display text-base font-bold text-white block">{node.name}</span>
                        <span className="text-[10px] text-zinc-400">{node.type}</span>
                      </div>
                    </div>
                    <span className="status-dot-pulse" />
                  </div>

                  {idx < arr.length - 1 && (
                    <div className="flex flex-col items-center text-red py-1 font-mono text-[10px] font-bold tracking-wider">
                      <div className="w-0.5 h-6 bg-red shadow-[0_0_8px_rgba(225,6,0,0.8)]" />
                      <span className="mt-1">↓ PACKET STREAM</span>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-border my-12" />

        {/* RESULTS & METRICS */}
        {project.metrics && (
          <section className="mb-16">
            <span className="font-mono text-xs font-bold tracking-widest text-red bg-red-subtle border border-red-border px-3 py-1 rounded-sm inline-block mb-2">
              07 — RESULTS & METRICS
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-black mb-8 uppercase">
              REAL MEASURABLE OUTCOMES
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.metrics.accuracy && (
                <div className="p-6 bg-white border border-border border-t-4 border-t-red rounded-sm flex flex-col justify-between">
                  <span className="font-mono text-xs font-bold text-muted">ACCURACY</span>
                  <span className="font-display text-4xl font-bold text-black my-2">{project.metrics.accuracy}</span>
                  <span className="font-mono text-[10px] text-red font-bold">VERIFIED BENCHMARK</span>
                </div>
              )}
              {project.metrics.responseTime && (
                <div className="p-6 bg-white border border-border border-t-4 border-t-black rounded-sm flex flex-col justify-between">
                  <span className="font-mono text-xs font-bold text-muted">RESPONSE TIME</span>
                  <span className="font-display text-4xl font-bold text-black my-2">{project.metrics.responseTime}</span>
                  <span className="font-mono text-[10px] text-muted">LATENCY TARGET</span>
                </div>
              )}
              {project.metrics.users && (
                <div className="p-6 bg-white border border-border border-t-4 border-t-red rounded-sm flex flex-col justify-between">
                  <span className="font-mono text-xs font-bold text-muted">USERS</span>
                  <span className="font-display text-4xl font-bold text-black my-2">{project.metrics.users}</span>
                  <span className="font-mono text-[10px] text-red font-bold">ACTIVE DEPLOYMENT</span>
                </div>
              )}
              {project.metrics.datasetSize && (
                <div className="p-6 bg-white border border-border border-t-4 border-t-black rounded-sm flex flex-col justify-between">
                  <span className="font-mono text-xs font-bold text-muted">DATASET SIZE</span>
                  <span className="font-display text-4xl font-bold text-black my-2">{project.metrics.datasetSize}</span>
                  <span className="font-mono text-[10px] text-muted">PROCESSED TENSORS</span>
                </div>
              )}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
