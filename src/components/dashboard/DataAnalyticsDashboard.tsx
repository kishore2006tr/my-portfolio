'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Activity, PieChart, Database, ArrowUpRight } from 'lucide-react';
import { fadeUpVariant } from '@/lib/animations';

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
              DATA → INSIGHT → DECISION
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
              STREAM TELEMETRY
            </button>
            <button
              className={`font-mono text-xs font-bold px-3 py-1.5 rounded-sm transition-all ${
                activeTab === 'table' ? 'bg-black text-white' : 'text-muted hover:text-black'
              }`}
              onClick={() => setActiveTab('table')}
            >
              LOG TABLES
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
              <div className="p-6 bg-white border border-border border-t-4 border-t-red rounded-sm flex flex-col justify-between">
                <span className="font-mono text-xs font-bold text-muted">MODEL PRECISION</span>
                <div className="my-4">
                  <span className="font-display text-4xl font-bold text-black">98.4%</span>
                  <span className="font-mono text-xs text-red font-bold block mt-1">+4.2% OVER BASELINE</span>
                </div>
                <span className="font-mono text-[10px] text-muted">VALIDATED DICOM SCANS</span>
              </div>

              <div className="p-6 bg-white border border-border border-t-4 border-t-black rounded-sm flex flex-col justify-between">
                <span className="font-mono text-xs font-bold text-muted">INFERENCE LATENCY</span>
                <div className="my-4">
                  <span className="font-display text-4xl font-bold text-black">42ms</span>
                  <span className="font-mono text-xs text-black font-bold block mt-1">INT8 TENSORRT</span>
                </div>
                <span className="font-mono text-[10px] text-muted">GPU ACCELERATED</span>
              </div>

              <div className="p-6 bg-white border border-border border-t-4 border-t-red rounded-sm flex flex-col justify-between">
                <span className="font-mono text-xs font-bold text-muted">DATA THROUGHPUT</span>
                <div className="my-4">
                  <span className="font-display text-4xl font-bold text-black">100K</span>
                  <span className="font-mono text-xs text-red font-bold block mt-1">TICKS / SECOND</span>
                </div>
                <span className="font-mono text-[10px] text-muted">RUST ZERO-COPY PIPELINE</span>
              </div>

              <div className="p-6 bg-white border border-border border-t-4 border-t-black rounded-sm flex flex-col justify-between">
                <span className="font-mono text-xs font-bold text-muted">ACTIVE USERS</span>
                <div className="my-4">
                  <span className="font-display text-4xl font-bold text-black">35,000+</span>
                  <span className="font-mono text-xs text-muted block mt-1">GLOBAL USERS</span>
                </div>
                <span className="font-mono text-[10px] text-muted">ENTERPRISE ADOPTION</span>
              </div>
            </div>
          )}

          {activeTab === 'telemetry' && (
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="font-bold text-black">LIVE STREAM TELEMETRY // CLICKHOUSE COLUMNS</span>
                <span className="text-red font-bold flex items-center gap-1">
                  <span className="status-dot-pulse"></span> STREAMING 100K TICKS/SEC
                </span>
              </div>

              {/* Bar Chart Visualizer */}
              <div className="h-64 flex items-end gap-3 pt-8 pb-4 px-4 bg-white border border-border rounded-sm">
                {[65, 80, 45, 90, 75, 95, 60, 85, 100, 70, 90, 80].map((val, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end gap-2 group">
                    <div
                      className={`w-full rounded-t-sm transition-all duration-500 group-hover:bg-red ${
                        idx % 3 === 0 ? 'bg-red' : 'bg-black'
                      }`}
                      style={{ height: `${val}%` }}
                    />
                    <span className="font-mono text-[10px] text-muted">{idx + 1}h</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'table' && (
            <div className="overflow-x-auto bg-white border border-border rounded-sm font-mono text-xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border bg-light text-muted uppercase">
                    <th className="p-3">SYSTEM ID</th>
                    <th className="p-3">PIPELINE DOMAIN</th>
                    <th className="p-3">METRIC VALUE</th>
                    <th className="p-3">LATENCY</th>
                    <th className="p-3">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3 font-bold text-black">SYS-01</td>
                    <td className="p-3">VisionAI Pathology</td>
                    <td className="p-3 text-red font-bold">98.4% Accuracy</td>
                    <td className="p-3">42ms</td>
                    <td className="p-3"><span className="px-2 py-0.5 bg-red-subtle text-red font-bold rounded-sm">ONLINE</span></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-black">SYS-02</td>
                    <td className="p-3">Nexus RAG LLM</td>
                    <td className="p-3 font-bold">1.5M Docs Indexed</td>
                    <td className="p-3">115ms</td>
                    <td className="p-3"><span className="px-2 py-0.5 bg-red-subtle text-red font-bold rounded-sm">ONLINE</span></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-black">SYS-03</td>
                    <td className="p-3">Algo Risk Stream</td>
                    <td className="p-3 text-red font-bold">100k Ticks/Sec</td>
                    <td className="p-3">18ms</td>
                    <td className="p-3"><span className="px-2 py-0.5 bg-red-subtle text-red font-bold rounded-sm">ONLINE</span></td>
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
