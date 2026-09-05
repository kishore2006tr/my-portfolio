'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '@/data/socials';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ name: string; email: string; message: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please complete all required fields (Name, Email, and Message).');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    
    const recipient = SOCIAL_LINKS.email.address; // kishore2006r@gmail.com
    const subject = `Portfolio Inquiry from ${formData.name.trim()}`;
    const body = `Hi Kishore,\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}\n\n---\nSent via Kishore Portfolio Contact Form`;

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSubmittedData({ ...formData });

    // Open user's email client directly addressed to kishore2006r@gmail.com
    try {
      window.location.href = mailtoUrl;
    } catch {
      // Fallback
    }

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 400);
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

            {/* Direct Action Links (Small Logos) */}
            <div className="flex items-center gap-3 mb-8">
              <a
                href={SOCIAL_LINKS.email.mailto}
                className="w-10 h-10 bg-white border border-border rounded-sm flex items-center justify-center text-muted hover:text-red hover:border-red hover:bg-red-subtle transition-all group shadow-sm"
                title={`Email: ${SOCIAL_LINKS.email.address}`}
                aria-label={`Email: ${SOCIAL_LINKS.email.address}`}
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
              </a>

              <a
                href={SOCIAL_LINKS.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border border-border rounded-sm flex items-center justify-center text-muted hover:text-red hover:border-red hover:bg-red-subtle transition-all group shadow-sm"
                title={`LinkedIn: ${SOCIAL_LINKS.linkedin.profilePath}`}
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
              </a>

              <a
                href={SOCIAL_LINKS.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border border-border rounded-sm flex items-center justify-center text-muted hover:text-red hover:border-red hover:bg-red-subtle transition-all group shadow-sm"
                title={`GitHub: ${SOCIAL_LINKS.github.username} (${SOCIAL_LINKS.github.profilePath})`}
                aria-label={`GitHub: ${SOCIAL_LINKS.github.username}`}
              >
                <Github size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Validated Contact Form */}
          <div className="lg:col-span-6 p-8 bg-light border border-border rounded-sm">
            <h2 className="font-display text-2xl font-bold tracking-tight text-black mb-6 uppercase">
              SEND A MESSAGE
            </h2>

            {status === 'success' && submittedData ? (
              <div className="p-6 bg-white border border-border border-t-4 border-t-red rounded-sm text-left space-y-5">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={28} className="text-red" />
                  <div>
                    <h3 className="font-display font-bold text-xl text-black">MESSAGE TRANSMITTED</h3>
                    <span className="font-mono text-xs text-muted">TARGET RECIPIENT: {SOCIAL_LINKS.email.address}</span>
                  </div>
                </div>

                <p className="text-xs text-zinc-600 font-mono leading-relaxed bg-light p-3.5 rounded-sm border border-border">
                  Your message has been addressed directly to <strong className="text-black">{SOCIAL_LINKS.email.address}</strong>. 
                  If your mail app did not open automatically, choose an option below to deliver it:
                </p>

                {/* Direct Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${SOCIAL_LINKS.email.address}&su=${encodeURIComponent(`Portfolio Inquiry from ${submittedData.name}`)}&body=${encodeURIComponent(`Hi Kishore,\n\nName: ${submittedData.name}\nEmail: ${submittedData.email}\n\nMessage:\n${submittedData.message}\n\n---\nSent via Kishore Portfolio Contact Form`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 font-mono text-xs font-bold text-white bg-red hover:bg-black py-3 px-4 rounded-sm text-center transition-colors flex items-center justify-center gap-2"
                  >
                    <Mail size={15} />
                    <span>OPEN IN GMAIL</span>
                  </a>

                  <a
                    href={`mailto:${SOCIAL_LINKS.email.address}?subject=${encodeURIComponent(`Portfolio Inquiry from ${submittedData.name}`)}&body=${encodeURIComponent(`Hi Kishore,\n\nName: ${submittedData.name}\nEmail: ${submittedData.email}\n\nMessage:\n${submittedData.message}\n\n---\nSent via Kishore Portfolio Contact Form`)}`}
                    className="flex-1 font-mono text-xs font-bold text-black bg-light hover:bg-zinc-200 border border-border py-3 px-4 rounded-sm text-center transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={15} />
                    <span>OPEN DEFAULT MAIL</span>
                  </a>
                </div>

                {/* Summary Box */}
                <div className="bg-light p-3.5 border border-border rounded-sm text-xs font-mono">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-muted font-bold">MESSAGE SUMMARY</span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `To: ${SOCIAL_LINKS.email.address}\nFrom: ${submittedData.name} <${submittedData.email}>\n\nMessage:\n${submittedData.message}`
                        );
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                      }}
                      className="text-red hover:underline font-bold"
                    >
                      {copied ? "COPIED TO CLIPBOARD!" : "COPY MESSAGE"}
                    </button>
                  </div>
                  <div className="text-zinc-700 space-y-1">
                    <p><span className="text-muted">TO:</span> {SOCIAL_LINKS.email.address}</p>
                    <p><span className="text-muted">FROM:</span> {submittedData.name} ({submittedData.email})</p>
                    <p className="mt-2 text-zinc-900 border-t border-border pt-2 whitespace-pre-wrap">{submittedData.message}</p>
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    onClick={() => {
                      setStatus('idle');
                      setSubmittedData(null);
                    }}
                    className="font-mono text-xs font-bold text-muted hover:text-black transition-colors"
                  >
                    ← SEND ANOTHER MESSAGE
                  </button>
                </div>
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
