'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please complete all required fields.');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 800);
  };

  return (
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
            GET IN TOUCH // 05
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Narrative & Social Action Buttons */}
          <div className="lg:col-span-6">
            <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tighter text-black uppercase leading-tight mb-6">
              LET'S BUILD <br />
              SOMETHING <br />
              <span className="text-red">INTELLIGENT.</span>
            </h1>

            <p className="text-base sm:text-lg text-muted leading-relaxed mb-8">
              Have an idea, high-throughput software project, AI machine learning problem, 
              or data analytics initiative worth solving? Let's connect.
            </p>

            {/* Direct Action Links */}
            <div className="space-y-3 font-mono text-xs font-bold mb-8">
              <a
                href="mailto:kishore@example.com"
                className="w-full sm:w-auto p-4 bg-light border border-border rounded-sm flex items-center justify-between hover:border-red hover:text-red transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-red" />
                  <span>EMAIL ME → kishore@example.com</span>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto p-4 bg-light border border-border rounded-sm flex items-center justify-between hover:border-red hover:text-red transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin size={18} className="text-red" />
                  <span>LINKEDIN PROFILE → linkedin.com/in/kishore</span>
                </div>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto p-4 bg-light border border-border rounded-sm flex items-center justify-between hover:border-red hover:text-red transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Github size={18} className="text-red" />
                  <span>GITHUB REPOSITORIES → github.com/kishore</span>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Validated Contact Form */}
          <div className="lg:col-span-6 p-8 bg-light border border-border rounded-sm">
            <h2 className="font-display text-2xl font-bold tracking-tight text-black mb-6 uppercase">
              SEND A MESSAGE
            </h2>

            {status === 'success' ? (
              <div className="p-6 bg-white border border-green-500 rounded-sm text-center">
                <CheckCircle2 size={36} className="text-green-600 mx-auto mb-3" />
                <h3 className="font-display font-bold text-xl text-black mb-2">MESSAGE SENT SUCCESSFULLY</h3>
                <p className="text-xs font-mono text-muted">Thank you for reaching out! Kishore will respond within 24 hours.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 font-mono text-xs font-bold text-white bg-black px-4 py-2 rounded-sm"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {status === 'error' && (
                  <div className="p-3 bg-red-subtle border border-red-border text-red font-mono text-xs flex items-center gap-2 rounded-sm">
                    <AlertCircle size={16} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div>
                  <label className="font-mono text-xs font-bold text-black block mb-2">YOUR NAME</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full p-3 font-mono text-xs bg-white border border-border rounded-sm text-black outline-none focus:border-red transition-colors"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs font-bold text-black block mb-2">YOUR EMAIL</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full p-3 font-mono text-xs bg-white border border-border rounded-sm text-black outline-none focus:border-red transition-colors"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs font-bold text-black block mb-2">YOUR MESSAGE</label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, initiative, or inquiry..."
                    className="w-full p-3 font-mono text-xs bg-white border border-border rounded-sm text-black outline-none focus:border-red transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full font-mono text-xs font-bold tracking-wider text-white bg-red hover:bg-black p-4 rounded-sm flex items-center justify-center gap-2 transition-colors"
                >
                  {status === 'submitting' ? (
                    <span>SENDING MESSAGE...</span>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>SEND MESSAGE</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
