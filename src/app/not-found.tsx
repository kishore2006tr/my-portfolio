import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, FileQuestion } from 'lucide-react';

export const metadata = {
  title: '404 - Page Not Found | Kishore',
  description: 'The requested telemetry route or page does not exist.',
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4 py-20">
      <div className="max-w-md w-full text-center">
        {/* Technical Status Tag */}
        <div className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-red bg-red-subtle border border-red-border px-3.5 py-1.5 rounded-sm mb-6">
          <span className="status-dot-pulse" />
          <span>ERROR // 404 — ROUTE NOT LOCATED</span>
        </div>

        <h1 className="font-display text-6xl sm:text-7xl font-bold tracking-tighter text-black uppercase mb-4">
          PAGE <span className="text-red">NOT FOUND</span>
        </h1>

        <p className="text-muted text-sm sm:text-base leading-relaxed mb-8">
          The requested path could not be resolved in the system registry. 
          It may have been relocated, or the URL address was entered incorrectly.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs">
          <Link
            href="/"
            className="font-bold tracking-wider text-white bg-red hover:bg-black border border-red hover:border-black px-6 py-3 rounded-sm inline-flex items-center gap-2 transition-colors shadow-md"
          >
            <Home size={15} />
            <span>RETURN HOME</span>
          </Link>

          <Link
            href="/projects"
            className="font-bold tracking-wider text-black bg-light hover:bg-black hover:text-white border border-border hover:border-black px-6 py-3 rounded-sm inline-flex items-center gap-2 transition-colors"
          >
            <ArrowLeft size={15} />
            <span>VIEW PROJECTS</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
