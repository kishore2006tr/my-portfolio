'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function DataAnalyticsDashboard() {
  const [activeTab, setActiveTab] = useState<'kpi' | 'telemetry' | 'table'>('kpi');

  return (
    <section id="analytics" className="py-20 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-border pb-6">
          <div>
            <span className="font-mono text-xs font-bold tracking-widest text-red uppercase block mb-2">
              ANALYTICS ENGINE // 02
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-black uppercase">
              CODE → MODEL → PRODUCT
            </h2>
          </div>

          {/* Interactive Mode Tabs */}
          <div className="flex items-center gap-2 p-1 bg-light border border-border rounded-sm">
            <button
              className={`font-mono text-xs font-bold px-3 py-1.5 rounded-sm transition-all ${
                activeTab === 'kpi' ? 'bg-black text-white' : 'text-muted hover:text-black'
              }`}
              onClick={() => setActiveTab('kpi')}
            >
              KPI METRICS
            </button>
            <button
              className={`font-mono text-xs font-bold px-3 py-1.5 rounded-sm transition-all ${
                activeTab === 'telemetry' ? 'bg-black text-white' : 'text-muted hover:text-black'
              }`}
              onClick={() => setActiveTab('telemetry')}
            >
              DEVELOPMENT ACTIVITY
            </button>
            <button
              className={`font-mono text-xs font-bold px-3 py-1.5 rounded-sm transition-all ${
                activeTab === 'table' ? 'bg-black text-white' : 'text-muted hover:text-black'
              }`}
              onClick={() => setActiveTab('table')}
            >
              SYSTEM REGISTRY
            </button>
          </div>
        </div>

        {/* Dynamic Analytics View */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="border border-border rounded-sm bg-light p-6 sm:p-8"
        >
          {activeTab === 'kpi' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-white border border-border border-t-4 border-t-red rounded-sm flex flex-col justify-between hover:border-red transition-all">
                <span className="font-mono text-xs font-bold text-muted uppercase">PROJECTS</span>
                <div className="my-4">
                  <span className="font-display text-4xl sm:text-5xl font-bold text-black">10+</span>
                  <span className="font-mono text-xs text-red font-bold block mt-1">COMPLETED BUILDS</span>
                </div>
                <span className="font-mono text-[11px] text-muted leading-relaxed">
                  AI, ML, Data Analytics & Full-Stack Projects
                </span>
              </div>

              <div className="p-6 bg-white border border-border border-t-4 border-t-black rounded-sm flex flex-col justify-between hover:border-black transition-all">
                <span className="font-mono text-xs font-bold text-muted uppercase">TECHNOLOGIES</span>
                <div className="my-4">
                  <span className="font-display text-4xl sm:text-5xl font-bold text-black">15+</span>
                  <span className="font-mono text-xs text-black font-bold block mt-1">CORE TECH STACK</span>
                </div>
                <span className="font-mono text-[11px] text-muted leading-relaxed">
                  Programming Languages, Frameworks & Tools
                </span>
              </div>

              <div className="p-6 bg-white border border-border border-t-4 border-t-red rounded-sm flex flex-col justify-between hover:border-red transition-all">
                <span className="font-mono text-xs font-bold text-muted uppercase">AI / ML MODELS</span>
                <div className="my-4">
                  <span className="font-display text-4xl sm:text-5xl font-bold text-black">10+</span>
                  <span className="font-mono text-xs text-red font-bold block mt-1">TRAINED & EVALUATED</span>
                </div>
                <span className="font-mono text-[11px] text-muted leading-relaxed">
                  Classification, Prediction, NLP & Computer Vision Models
                </span>
              </div>

              <div className="p-6 bg-white border border-border border-t-4 border-t-black rounded-sm flex flex-col justify-between hover:border-black transition-all">
                <span className="font-mono text-xs font-bold text-muted uppercase">FULL-STACK APPLICATIONS</span>
                <div className="my-4">
                  <span className="font-display text-4xl sm:text-5xl font-bold text-black">5+</span>
                  <span className="font-mono text-xs text-black font-bold block mt-1">END-TO-END PLATFORMS</span>
                </div>
                <span className="font-mono text-[11px] text-muted leading-relaxed">
                  Frontend → Backend → Database Applications
                </span>
              </div>
            </div>
          )}

          {activeTab === 'telemetry' && (
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs">
                <span className="font-bold text-black">DEVELOPMENT VELOCITY // 12-CYCLE PROJECT CADENCE</span>
                <span className="text-red font-bold flex items-center gap-1.5">
                  <span className="status-dot-pulse"></span> ACTIVE LOCAL BUILDS & ITERATIONS
                </span>
              </div>

              {/* Bar Chart Visualizer */}
              <div className="h-64 flex items-end gap-2 sm:gap-3 pt-8 pb-4 px-4 bg-white border border-border rounded-sm">
                {[65, 80, 45, 90, 75, 95, 60, 85, 100, 70, 90, 80].map((val, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end gap-2 group">
                    <div
                      className={`w-full rounded-t-sm transition-all duration-500 group-hover:bg-red ${
                        idx % 3 === 0 ? 'bg-red' : 'bg-black'
                      }`}
                      style={{ height: `${val}%` }}
                    />
                    <span className="font-mono text-[10px] text-muted">C-{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                ))}
              </div>
              <p className="font-mono text-[11px] text-muted">
                Consistent sprint velocity across machine learning model evaluations, backend APIs, and responsive user interfaces.
              </p>
            </div>
          )}

          {activeTab === 'table' && (
            <div className="overflow-x-auto bg-white border border-border rounded-sm font-mono text-xs">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-border bg-light text-muted uppercase">
                    <th className="p-3">SYSTEM ID</th>
                    <th className="p-3">CAPABILITY DOMAIN</th>
                    <th className="p-3">CORE TECHNOLOGIES</th>
                    <th className="p-3">PRIMARY DELIVERABLES</th>
                    <th className="p-3">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3 font-bold text-black">SYS-01</td>
                    <td className="p-3 font-semibold text-black">AI & Machine Learning</td>
                    <td className="p-3 text-muted">Python • Scikit-learn • PyTorch • OpenCV</td>
                    <td className="p-3 text-red font-semibold">Classification & Vision Models</td>
                    <td className="p-3"><span className="px-2 py-0.5 bg-red-subtle text-red font-bold rounded-sm">ACTIVE</span></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-black">SYS-02</td>
                    <td className="p-3 font-semibold text-black">Generative AI & RAG</td>
                    <td className="p-3 text-muted">Gemini • OpenAI • LangChain • RAG</td>
                    <td className="p-3 font-semibold">Conversational LLMs & RAG</td>
                    <td className="p-3"><span className="px-2 py-0.5 bg-red-subtle text-red font-bold rounded-sm">ACTIVE</span></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-black">SYS-03</td>
                    <td className="p-3 font-semibold text-black">Web Applications</td>
                    <td className="p-3 text-muted">React • Next.js • Node.js • Supabase</td>
                    <td className="p-3 text-red font-semibold">Full-Stack Web Platforms</td>
                    <td className="p-3"><span className="px-2 py-0.5 bg-red-subtle text-red font-bold rounded-sm">ACTIVE</span></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-black">SYS-04</td>
                    <td className="p-3 font-semibold text-black">Data Analytics</td>
                    <td className="p-3 text-muted">Python • Pandas • NumPy • SQL • Power BI</td>
                    <td className="p-3 font-semibold">EDA & Interactive Dashboards</td>
                    <td className="p-3"><span className="px-2 py-0.5 bg-red-subtle text-red font-bold rounded-sm">ACTIVE</span></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-black">SYS-05</td>
                    <td className="p-3 font-semibold text-black">Cloud & Deployment</td>
                    <td className="p-3 text-muted">AWS • EC2 • S3 • IAM • Lambda</td>
                    <td className="p-3 text-red font-semibold">Cloud Infrastructure & Deployment</td>
                    <td className="p-3"><span className="px-2 py-0.5 bg-red-subtle text-red font-bold rounded-sm">ACTIVE</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}
