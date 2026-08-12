'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, Brain, Zap, GitBranch, Terminal } from 'lucide-react';
import { fadeUpVariant } from '@/lib/animations';

const AI_CAPABILITIES = [
  {
    title: "COMPUTER VISION",
    tech: "YOLOv8 • PyTorch • TensorRT • OpenCV",
    desc: "Real-time DICOM pathology detection & urban traffic tracking operating under 50ms latencies with INT8 quantization."
  },
  {
    title: "GENERATIVE AI & RAG",
    tech: "Llama 3 • LangChain • Pinecone • vLLM",
    desc: "Enterprise retrieval augmented generation platforms combining hybrid dense/sparse vector search with zero hallucination."
  },
  {
    title: "NLP & CODE SYNTHESIS",
    tech: "Whisper • Tree-Sitter AST • SpaCy",
    desc: "Voice-driven AST code generators translating natural speech into verified syntax trees and executable functions."
  },
  {
    title: "GRAPH MACHINE LEARNING",
    tech: "PyTorch Geometric • Neo4j • R-GCN",
    desc: "Relational graph neural networks spotting syndicate financial fraud loops and anomaly networks across millions of nodes."
  }
];

export default function IntelligenceEngine() {
  return (
    <section className="py-20 bg-black text-white border-b border-darkBorder">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-darkBorder pb-8">
          <div>
            <span className="font-mono text-xs font-bold tracking-widest text-red uppercase block mb-2">
              SYSTEM CAPABILITIES // 01
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white uppercase">
              INTELLIGENCE ENGINE
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Architecting low-latency deep learning models, generative AI workflows, and multi-tenant vector pipelines.
          </p>
        </div>

        {/* 4-Card Intelligence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {AI_CAPABILITIES.map((cap, idx) => (
            <motion.div
              key={cap.title}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 bg-darkSurface border border-darkBorder rounded-sm hover:border-red transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-red">0{idx + 1} // MODEL ENGINE</span>
                <Cpu size={18} className="text-zinc-500 group-hover:text-red transition-colors" />
              </div>

              <h3 className="font-display text-2xl font-bold tracking-tight text-white mb-2 group-hover:text-red transition-colors">
                {cap.title}
              </h3>

              <div className="font-mono text-xs text-red font-semibold mb-4 bg-red/10 border border-red/20 px-2.5 py-1 rounded-sm w-fit">
                {cap.tech}
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed">
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
