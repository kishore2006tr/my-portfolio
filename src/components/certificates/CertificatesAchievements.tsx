'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  Search, 
  X, 
  ExternalLink, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  ShieldCheck, 
  Eye, 
  Maximize2, 
  Minimize2,
  GraduationCap, 
  Briefcase, 
  Code2, 
  Cloud, 
  Brain,
  Layers,
  Sparkles
} from 'lucide-react';
import { 
  certificatesData, 
  achievementsData, 
  certificateStats, 
  Certificate, 
  Achievement,
  FilterCategory 
} from '@/data/certificates';
import { fadeUpVariant } from '@/lib/animations';

export default function CertificatesAchievements() {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalCert, setActiveModalCert] = useState<Certificate | null>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullScreen) {
          setIsFullScreen(false);
        } else {
          setActiveModalCert(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullScreen]);

  // Filter certificates
  const filteredCertificates = useMemo(() => {
    if (selectedCategory === 'ACHIEVEMENTS') return [];

    return certificatesData.filter((cert) => {
      const matchesCategory = 
        selectedCategory === 'ALL' || cert.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch = 
        cert.title.toLowerCase().includes(query) ||
        cert.issuer.toLowerCase().includes(query) ||
        cert.description.toLowerCase().includes(query) ||
        cert.skills.some(s => s.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Filter achievements
  const filteredAchievements = useMemo(() => {
    if (selectedCategory !== 'ALL' && selectedCategory !== 'ACHIEVEMENTS') return [];

    return achievementsData.filter((achieve) => {
      const query = searchQuery.toLowerCase().trim();
      if (!query) return true;

      return (
        achieve.title.toLowerCase().includes(query) ||
        (achieve.organization && achieve.organization.toLowerCase().includes(query)) ||
        achieve.description.toLowerCase().includes(query) ||
        achieve.category.toLowerCase().includes(query)
      );
    });
  }, [selectedCategory, searchQuery]);

  // Category Icon helper
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI-ML':
        return <Brain size={14} className="text-red" />;
      case 'CLOUD':
        return <Cloud size={14} className="text-red" />;
      case 'PROGRAMMING':
        return <Code2 size={14} className="text-red" />;
      case 'INTERNSHIPS':
        return <Briefcase size={14} className="text-red" />;
      default:
        return <Award size={14} className="text-red" />;
    }
  };

  const getAchievementCategoryBadge = (category: string) => {
    switch (category) {
      case 'Academic':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Project':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Internship':
        return 'bg-red/10 text-red border-red/20';
      case 'Technical':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      default:
        return 'bg-zinc-100 text-zinc-700 border-zinc-200';
    }
  };

  return (
    <section id="certificates" className="py-20 bg-light border-b border-border relative">
      {/* Anchor for credentials */}
      <span id="credentials" className="absolute -top-12" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* 1. Statistics Row */}
        <motion.div 
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          <div className="p-5 bg-white border border-border border-t-4 border-t-red rounded-sm flex flex-col justify-between hover:border-red transition-all">
            <span className="font-mono text-[11px] font-bold text-muted uppercase">CERTIFICATES</span>
            <div className="my-2">
              <span className="font-display text-3xl sm:text-4xl font-bold text-black">{certificateStats.certificates}</span>
            </div>
            <span className="font-mono text-[10px] text-red font-semibold">VERIFIED CREDENTIALS</span>
          </div>

          <div className="p-5 bg-white border border-border border-t-4 border-t-black rounded-sm flex flex-col justify-between hover:border-black transition-all">
            <span className="font-mono text-[11px] font-bold text-muted uppercase">INTERNSHIPS</span>
            <div className="my-2">
              <span className="font-display text-3xl sm:text-4xl font-bold text-black">{certificateStats.internships}</span>
            </div>
            <span className="font-mono text-[10px] text-zinc-600 font-semibold">HANDS-ON INDUSTRY ROLES</span>
          </div>

          <div className="p-5 bg-white border border-border border-t-4 border-t-red rounded-sm flex flex-col justify-between hover:border-red transition-all">
            <span className="font-mono text-[11px] font-bold text-muted uppercase">TECHNOLOGIES</span>
            <div className="my-2">
              <span className="font-display text-3xl sm:text-4xl font-bold text-black">{certificateStats.technologies}</span>
            </div>
            <span className="font-mono text-[10px] text-red font-semibold">LANGUAGES & TOOLKITS</span>
          </div>

          <div className="p-5 bg-white border border-border border-t-4 border-t-black rounded-sm flex flex-col justify-between hover:border-black transition-all">
            <span className="font-mono text-[11px] font-bold text-muted uppercase">PROJECTS</span>
            <div className="my-2">
              <span className="font-display text-3xl sm:text-4xl font-bold text-black">{certificateStats.projects}</span>
            </div>
            <span className="font-mono text-[10px] text-zinc-600 font-semibold">DEPLOYED ARCHITECTURES</span>
          </div>
        </motion.div>

        {/* 2. Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-border pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold tracking-widest text-red uppercase">
                CERTIFICATES & ACHIEVEMENTS // 03
              </span>
              <span className="text-zinc-300">•</span>
              <span className="font-mono text-[10px] font-bold text-muted uppercase tracking-wider">
                PROOF OF LEARNING
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-black uppercase">
              PROOF OF LEARNING
            </h2>
          </div>
          <p className="text-sm text-zinc-600 max-w-md">
            Documented certifications, structured internships, and technical milestones validating hands-on engineering capabilities.
          </p>
        </div>

        {/* 3. Interactive Filter & Search Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-border rounded-sm">
            {(['ALL', 'AI-ML', 'CLOUD', 'PROGRAMMING', 'INTERNSHIPS', 'ACHIEVEMENTS'] as FilterCategory[]).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`font-mono text-xs font-bold px-3 py-1.5 rounded-sm transition-all flex items-center gap-1.5 ${
                  selectedCategory === category
                    ? 'bg-black text-white shadow-sm'
                    : 'text-muted hover:text-black hover:bg-light'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Real-time Search Input */}
          <div className="relative w-full lg:w-72">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search credentials or skills..."
              className="w-full pl-9 pr-8 py-2 bg-white border border-border rounded-sm text-xs font-mono text-black placeholder:text-muted focus:outline-none focus:border-red transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted hover:text-black transition-colors"
                title="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* 4. Certificates Grid */}
        {selectedCategory !== 'ACHIEVEMENTS' && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red inline-block"></span>
                CERTIFICATES // 01 — CREDENTIAL SHOWCASE ({filteredCertificates.length})
              </span>
            </div>

            {filteredCertificates.length === 0 ? (
              <div className="p-12 text-center bg-white border border-border rounded-sm">
                <Award size={32} className="mx-auto text-zinc-400 mb-3" />
                <p className="font-mono text-sm text-muted">No certificates found matching your filter or query.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCertificates.map((cert) => (
                  <motion.div
                    key={cert.id}
                    variants={fadeUpVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="bg-white border border-border rounded-sm flex flex-col justify-between hover:border-red hover:shadow-lg transition-all duration-300 group overflow-hidden"
                  >
                    {/* Visual Certificate Mockup Preview */}
                    <div 
                      onClick={() => setActiveModalCert(cert)}
                      className="p-5 bg-[#121212] text-white border-b border-border/40 relative cursor-pointer group-hover:bg-black transition-colors"
                    >
                      {/* Top Bar of Certificate Card */}
                      <div className="flex items-center justify-between mb-3 relative z-10">
                        <span className="font-mono text-[10px] font-bold text-red bg-red/10 border border-red/30 px-2 py-0.5 rounded-sm flex items-center gap-1">
                          {getCategoryIcon(cert.category)}
                          {cert.category}
                        </span>
                        <span className="font-mono text-[10px] text-zinc-400 flex items-center gap-1">
                          <Calendar size={12} />
                          {cert.date}
                        </span>
                      </div>

                      {/* Certificate Mockup Stamp */}
                      <div className="py-4 border border-zinc-800 rounded bg-[#181818]/60 p-3 relative z-10">
                        <div className="flex items-center gap-2 mb-1 text-zinc-400 font-mono text-[9px] uppercase tracking-widest">
                          <ShieldCheck size={12} className="text-red" />
                          VERIFIED TECHNICAL CREDENTIAL
                        </div>
                        <h4 className="font-display text-sm font-bold text-white group-hover:text-red transition-colors line-clamp-1">
                          {cert.title}
                        </h4>
                        <p className="font-mono text-[11px] text-zinc-400 flex items-center gap-1 mt-1">
                          <Building2 size={12} />
                          {cert.issuer}
                        </p>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 transition-opacity z-20 backdrop-blur-[1px]">
                        <span className="font-mono text-xs text-white font-bold bg-red px-3 py-1.5 rounded-sm flex items-center gap-1.5 shadow-md">
                          <Eye size={14} /> VIEW CERTIFICATE
                        </span>
                      </div>
                    </div>

                    {/* Card Content & Details */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-display text-base font-bold text-black mb-1 group-hover:text-red transition-colors">
                          {cert.title}
                        </h3>

                        <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                          {cert.description}
                        </p>

                        {/* Skills / Tech Pills */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {cert.skills.map((skill) => (
                            <span 
                              key={skill}
                              className="font-mono text-[10px] font-semibold text-zinc-700 bg-light border border-border px-2 py-0.5 rounded-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Action Buttons */}
                      <div className="pt-4 border-t border-border flex items-center justify-between gap-2">
                        <button
                          onClick={() => setActiveModalCert(cert)}
                          className="flex-1 font-mono text-xs font-bold text-black bg-light hover:bg-black hover:text-white border border-border py-2 px-3 rounded-sm transition-all flex items-center justify-center gap-1.5 group/btn"
                        >
                          <Eye size={13} className="text-red group-hover/btn:text-white transition-colors" />
                          VIEW CERTIFICATE
                        </button>

                        {cert.credentialUrl && (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs font-bold text-red hover:bg-red hover:text-white border border-red/30 py-2 px-3 rounded-sm transition-all flex items-center justify-center gap-1"
                            title="Verify credential online"
                          >
                            <ExternalLink size={13} />
                          </a>
                        )}
                      </div>
                    </div>

                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 5. Achievements Timeline */}
        {(selectedCategory === 'ALL' || selectedCategory === 'ACHIEVEMENTS') && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red inline-block"></span>
                ACHIEVEMENTS // 02 — MILESTONES & RECOGNITION ({filteredAchievements.length})
              </span>
            </div>

            {filteredAchievements.length === 0 ? (
              <div className="p-12 text-center bg-white border border-border rounded-sm">
                <Award size={32} className="mx-auto text-zinc-400 mb-3" />
                <p className="font-mono text-sm text-muted">No achievements found matching your search query.</p>
              </div>
            ) : (
              <div className="relative pl-6 md:pl-8 border-l-2 border-border space-y-6">
                {filteredAchievements.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    variants={fadeUpVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    {/* Timeline Node */}
                    <div className="absolute -left-[31px] md:-left-[39px] top-4 w-4 h-4 rounded-full bg-white border-2 border-black group-hover:border-red group-hover:scale-125 transition-all flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-red"></div>
                    </div>

                    {/* Achievement Card */}
                    <div className="p-6 bg-white border border-border rounded-sm hover:border-red hover:shadow-sm transition-all">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-sm border ${getAchievementCategoryBadge(item.category)}`}>
                            {item.category.toUpperCase()}
                          </span>
                          {item.organization && (
                            <span className="font-mono text-xs text-muted">
                              • {item.organization}
                            </span>
                          )}
                        </div>
                        <span className="font-mono text-xs font-bold text-red bg-red/10 border border-red/20 px-2 py-0.5 rounded-sm">
                          {item.year}
                        </span>
                      </div>

                      <h3 className="font-display text-lg font-bold text-black mb-1.5 group-hover:text-red transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs text-zinc-600 leading-relaxed">
                        {item.description}
                      </p>

                      {item.link && (
                        <div className="mt-3">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-mono text-xs font-bold text-red hover:underline"
                          >
                            <span>VIEW DETAILS</span>
                            <ExternalLink size={12} />
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>

      {/* 6. Polished Certificate Preview Modal */}
      <AnimatePresence>
        {activeModalCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.25 }}
              className={`bg-white border border-border rounded-sm shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
                isFullScreen ? 'w-full h-full max-w-none max-h-none m-0' : 'max-w-3xl w-full max-h-[90vh]'
              }`}
            >
              {/* Modal Header */}
              <div className="px-6 py-4 bg-light border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-red bg-red/10 border border-red/20 px-2 py-0.5 rounded-sm flex items-center gap-1">
                    {getCategoryIcon(activeModalCert.category)}
                    {activeModalCert.category}
                  </span>
                  <span className="font-mono text-xs text-muted font-bold">
                    // CERTIFICATE INSPECTOR
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsFullScreen(!isFullScreen)}
                    className="p-1.5 text-muted hover:text-black hover:bg-zinc-200 rounded-sm transition-colors"
                    title={isFullScreen ? "Exit Fullscreen" : "Fullscreen Preview"}
                  >
                    {isFullScreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                  </button>
                  <button
                    onClick={() => {
                      setActiveModalCert(null);
                      setIsFullScreen(false);
                    }}
                    className="p-1.5 text-muted hover:text-red hover:bg-red/10 rounded-sm transition-colors"
                    title="Close (Esc)"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Modal Scrollable Body */}
              <div className="p-6 overflow-y-auto space-y-6 flex-1">
                {/* Full Visual Certificate Card */}
                <div className="relative bg-[#0d0d0d] text-white p-8 sm:p-12 rounded-sm border-2 border-zinc-800 shadow-inner overflow-hidden">
                  {/* Decorative Corner Accents */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-red"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-red"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-red"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-red"></div>

                  <div className="text-center relative z-10">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-red/10 border border-red/30 flex items-center justify-center text-red">
                      <Award size={24} />
                    </div>

                    <span className="font-mono text-xs text-red uppercase font-bold tracking-widest block mb-1">
                      CERTIFICATE OF COMPLETION
                    </span>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                      {activeModalCert.title}
                    </h3>

                    <div className="w-16 h-[2px] bg-red mx-auto my-3"></div>

                    <p className="font-mono text-xs text-zinc-400">
                      OFFICIALLY ISSUED BY <span className="text-white font-bold">{activeModalCert.issuer.toUpperCase()}</span>
                    </p>

                    <p className="font-mono text-[11px] text-zinc-500 mt-1">
                      PROGRAM PERIOD / YEAR: {activeModalCert.date}
                    </p>

                    <div className="mt-6 pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-center gap-4 text-zinc-400 font-mono text-[10px]">
                      <span className="flex items-center gap-1">
                        <ShieldCheck size={12} className="text-red" />
                        TECHNICAL CREDENTIAL
                      </span>
                      <span>•</span>
                      <span>DOCUMENT REFERENCE: {activeModalCert.id.toUpperCase()}</span>
                      <span>•</span>
                      <span>STATUS: VERIFIED</span>
                    </div>
                  </div>
                </div>

                {/* Metadata & Description */}
                <div className="bg-light p-5 border border-border rounded-sm space-y-4">
                  <div>
                    <span className="font-mono text-[11px] font-bold text-muted uppercase block mb-1">DESCRIPTION</span>
                    <p className="text-sm text-zinc-700 leading-relaxed">
                      {activeModalCert.description}
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[11px] font-bold text-muted uppercase block mb-2">VALIDATED SKILLS & TOOLSETS</span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeModalCert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="font-mono text-xs font-semibold text-black bg-white border border-border px-2.5 py-1 rounded-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 bg-light border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="font-mono text-[11px] text-muted">
                  Press <kbd className="px-1.5 py-0.5 bg-white border border-border rounded text-black font-bold">Esc</kbd> or click outside to dismiss
                </span>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  {activeModalCert.credentialUrl ? (
                    <a
                      href={activeModalCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none font-mono text-xs font-bold text-white bg-red hover:bg-red-hover px-4 py-2 rounded-sm transition-colors flex items-center justify-center gap-1.5"
                    >
                      <ExternalLink size={14} /> VERIFY CREDENTIAL
                    </a>
                  ) : (
                    <span className="font-mono text-[11px] text-zinc-500 italic">
                      Direct verification link can be configured in data
                    </span>
                  )}
                  <button
                    onClick={() => {
                      setActiveModalCert(null);
                      setIsFullScreen(false);
                    }}
                    className="font-mono text-xs font-bold text-black bg-white hover:bg-zinc-100 border border-border px-4 py-2 rounded-sm transition-colors"
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
