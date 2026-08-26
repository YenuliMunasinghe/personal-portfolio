import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="bg-[#05070d]/50 border-t border-zinc-900 py-12 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-zinc-900">
          {/* Logo Name */}
          <span className="font-mono text-xs text-zinc-500 tracking-tight">
            {personalInfo.name}
          </span>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-zinc-500 hover:text-blue-400 transition-colors"
              aria-label="Gmail"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[10px] text-zinc-600 font-mono gap-3">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p>
            Vite // React // Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
