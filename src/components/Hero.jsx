import React, { useState } from 'react';
import { ArrowRight, Mail, Check, Copy, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center px-4 md:px-6 overflow-hidden">
      
      {/* Background radial gradient orbs matching Abhay's warm-glow style, but with Blue accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none" 
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, rgba(37,99,235,0.15) 40%, transparent 70%)',
            left: '50%',
            top: '50%',
            transform: 'translateX(-50%) translateY(-50%)'
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
          
          {/* Left Column: Profile Photo */}
          <div className="shrink-0 relative group">
            {/* Glowing background aura */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20 blur-md group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
            
            <img
              src={personalInfo.profileImg}
              alt={personalInfo.name}
              className="relative z-10 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover border border-zinc-800 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
              onError={(e) => {
                // Fail-safe fallback: if image fails, hide container gracefully
                e.target.style.display = 'none';
              }}
            />
          </div>

          {/* Right Column: Title & Text Info */}
          <div className="flex-1 text-center md:text-left space-y-5">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono uppercase tracking-wider text-slate-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.availability}</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <p className="text-sm font-mono text-[#a1a1aa] tracking-widest uppercase">
                Hey, I'm
              </p>
              <h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]"
                style={{ textShadow: '0 0 40px rgba(59, 130, 246, 0.1)' }}
              >
                {personalInfo.name}
              </h1>
              <p className="text-base sm:text-lg text-blue-400 font-mono">
                {personalInfo.title}
              </p>
            </div>

            {/* Tagline / Interests */}
            <p className="text-sm sm:text-base text-slate-350 leading-relaxed max-w-xl font-light">
              Interested in{' '}
              <span className="font-serif italic text-accent-gradient">
                {personalInfo.tagline}
              </span>
            </p>

            {/* Buttons & Contact links */}
            <div className="pt-4 flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono uppercase tracking-wider transition-all duration-300 transform active:scale-95 shadow-md shadow-blue-900/10"
              >
                Let's Connect
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-[#a1a1aa] hover:text-[#fafafa] hover:bg-white/10 transition-all cursor-pointer active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-blue-400" />
                    <span>Gmail</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
