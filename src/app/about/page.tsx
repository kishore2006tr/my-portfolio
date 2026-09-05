'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cpu, Code2, Database, Lightbulb, ArrowRight, ShieldCheck, Cloud } from 'lucide-react';
import { fadeUpVariant, staggerContainerVariant } from '@/lib/animations';
import CertificatesAchievements from '@/components/certificates/CertificatesAchievements';

const PILLARS = [
  {
    icon: Cpu,
    title: "AI / ML ENGINEERING",
    desc: "Developing practical machine learning models, computer vision systems, and intelligent applications using Python, Scikit-learn, and PyTorch."
  },
  {
    icon: Code2,
    title: "FULL-STACK ARCHITECTURE",
    desc: "Building responsive, modern full-stack web platforms with Next.js, React, Node.js, Express, MongoDB, and Supabase."
  },
  {
    icon: Database,
    title: "DATA ANALYTICS",
    desc: "Transforming datasets into actionable insights through data preprocessing, visualization, and interactive dashboards with Python, SQL, and Power BI."
  },
  {
    icon: Cloud,
    title: "CLOUD & DEPLOYMENT",
    desc: "Deploying and managing modern applications using cloud infrastructure, storage, and serverless computing with AWS (EC2, S3, IAM, Lambda)."
  },
  {
    icon: Lightbulb,
    title: "PROBLEM SOLVING",
    desc: "Approaching technical challenges with analytical problem-solving, clean code architecture, and a commitment to continuous learning."
  }
];

export default function AboutPage() {
  return (
    <>
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
            ABOUT / 01
          </span>
        </motion.div>

        {/* Large Statement Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black uppercase leading-tight">
            ENGINEER. <span className="text-red">ANALYST.</span> BUILDER.
          </h1>
        </motion.div>

        {/* 2-Column About Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-muted leading-relaxed">
            <p className="text-black font-semibold text-xl leading-normal">
              I am Kishore, a Computer Science student focused on Artificial Intelligence, 
              Machine Learning, Full-Stack Development, Data Analytics, and Cloud Engineering.
            </p>
            <p>
              I enjoy turning complex technical problems into practical digital solutions 
              through clean code, data pipelines, and intelligent AI models. My engineering 
              philosophy centers on performance, architectural modularity, and quantifiable outcomes.
            </p>
            <p>
              Whether developing machine learning models for classification and prediction, 
              building conversational Generative AI applications with LangChain, architecting 
              responsive full-stack platforms, or deploying cloud infrastructure on AWS, 
              I focus on delivering practical, well-engineered software.
            </p>

            <div className="pt-4">
              <Link 
                href="/projects" 
                className="font-mono text-xs font-bold tracking-wider text-white bg-black hover:bg-red px-6 py-3.5 rounded-sm inline-flex items-center gap-2 transition-colors"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Photo Frame Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] bg-light border border-border rounded-sm overflow-hidden shadow-xl">
              <Image
                src="/images/kishore.png"
                alt="Kishore - Professional Photograph in white shirt and black tie"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/90 text-white p-3 rounded-sm border border-darkBorder font-mono text-xs flex justify-between items-center">
                <span>KISHORE // CSE</span>
                <span className="text-red font-bold">AI • FULL-STACK • CLOUD</span>
              </div>
            </div>
          </div>

        </div>

        {/* Core Pillars Grid */}
        <div className="border-t border-border pt-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-black mb-8 uppercase">
            CORE ENGINEERING PILLARS
          </h2>

          <motion.div 
            variants={staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  variants={fadeUpVariant}
                  className={`p-6 bg-light border border-border rounded-sm hover:border-red transition-all group flex flex-col justify-between ${
                    idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-red">0{idx + 1}</span>
                      <Icon size={20} className="text-muted group-hover:text-red transition-colors" />
                    </div>

                    <h3 className="font-display text-lg font-bold tracking-tight text-black mb-3 group-hover:text-red transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-xs text-muted leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </div>

    {/* Certificates & Achievements Section */}
    <CertificatesAchievements />
    </>
  );
}
