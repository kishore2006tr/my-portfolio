'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Bot, Globe, BarChart3, Cloud } from 'lucide-react';
import { fadeUpVariant } from '@/lib/animations';

const CAPABILITIES = [
  {
    engine: "01 // AI ENGINE",
    title: "AI / MACHINE LEARNING",
    tech: "Python • Scikit-learn • PyTorch • OpenCV",
    desc: "Developing machine learning solutions for classification, prediction, computer vision, and intelligent automation.",
    icon: Brain,
  },
  {
    engine: "02 // GEN AI ENGINE",
    title: "GENERATIVE AI & RAG",
    tech: "Gemini • OpenAI • LangChain • RAG",
    desc: "Building AI-powered applications with LLMs, document analysis, AI chatbots, summarization, and retrieval-augmented generation.",
    icon: Bot,
  },
  {
    engine: "03 // FULL-STACK ENGINE",
    title: "WEB APPLICATIONS",
    tech: "React • Next.js • Node.js • Express • MongoDB • Supabase",
    desc: "Building responsive full-stack applications with authentication, REST APIs, databases, real-time functionality, and modern user interfaces.",
    icon: Globe,
  },
  {
    engine: "04 // DATA ENGINE",
    title: "DATA ANALYTICS",
    tech: "Python • Pandas • NumPy • SQL • Power BI",
    desc: "Transforming datasets into meaningful insights through data cleaning, exploratory data analysis, visualization, dashboards, and predictive analytics.",
    icon: BarChart3,
  },
  {
    engine: "05 // CLOUD ENGINE",
    title: "CLOUD & DEPLOYMENT",
    tech: "AWS • EC2 • S3 • IAM • Lambda",
    desc: "Deploying and managing modern applications using cloud infrastructure, storage, serverless computing, and secure cloud services.",
    icon: Cloud,
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
              INTELLIGENCE + APPLICATION ENGINE
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Building practical AI/ML solutions, Generative AI applications, full-stack web platforms, data-driven systems, and cloud deployments.
          </p>
        </div>

        {/* 5-Card Intelligence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`p-8 bg-darkSurface border border-darkBorder rounded-sm hover:border-red transition-all group flex flex-col justify-between ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-red">{cap.engine}</span>
                    <Icon size={20} className="text-zinc-500 group-hover:text-red transition-colors" />
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
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
