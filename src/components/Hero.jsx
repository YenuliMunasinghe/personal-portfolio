import React, { useState } from 'react';
import {
  ArrowRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Code2,
  Terminal,
  ChevronDown,
  Layers,
  GraduationCap,
  FileText,
  Download
} from 'lucide-react';
import MediumIcon from './icons/MediumIcon';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center pt-24 pb-16 px-4 sm:px-6 md:px-8 overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="hero-grid absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* Dual Cosmic Ambient Glow Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Primary Blue Aura */}
        <div
          className="absolute w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] rounded-full opacity-25 blur-[130px] animate-pulse-subtle pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.35) 0%, rgba(37,99,235,0.18) 45%, transparent 70%)',
            left: '50%',
            top: '40%',
            transform: 'translateX(-50%) translateY(-50%)'
          }}
        />
        {/* Secondary Cyan Aura */}
        <div
          className="absolute w-[350px] h-[350px] rounded-full opacity-15 blur-[100px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)',
            left: '25%',
            top: '60%',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-14">

          {/* Left Column: Text Info, Badges, CTAs */}
          <div className="flex-1 text-center lg:text-left space-y-6">

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-xs font-mono text-blue-300 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.availability}</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-mono text-zinc-400 tracking-widest uppercase flex items-center justify-center lg:justify-start gap-2">
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                <span>Hello, World! I am</span>
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                {personalInfo.name}
                <span className="text-blue-500 animate-pulse">.</span>
              </h1>

              <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-sm sm:text-base font-mono">
                <span className="text-blue-400 font-semibold">{personalInfo.title}</span>
                <span className="text-zinc-600 hidden sm:inline">•</span>
                <span className="text-zinc-300 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-blue-400" />
                  University of Moratuwa
                </span>
              </div>
            </div>

            {/* Tagline / Pitch */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              Building robust <span className="text-white font-medium">full-stack web & mobile solutions</span>,
              scalable <span className="text-white font-medium">system architectures</span>, and bridging technology with core business strategy.
            </p>

            {/* Quick Stat & CV Cards */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-0.5">
              <div className="glass rounded-xl px-3.5 py-1.5 border border-white/10 hover:border-blue-500/30 transition-all inline-flex items-center gap-2.5 shadow-sm">
                <span className="text-xs sm:text-sm font-bold text-white font-mono">3rd Year</span>
              </div>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Yenuli_Munasinghe_CV.pdf"
                className="glass rounded-xl px-3.5 py-1.5 border border-blue-500/30 hover:border-blue-500/60 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 hover:text-white transition-all inline-flex items-center gap-2 shadow-sm group/cv cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-blue-400 group-hover/cv:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-bold font-mono">Download My CV</span>
                <Download className="w-3 h-3 text-zinc-400 group-hover/cv:text-blue-300 transition-colors" />
              </a>
            </div>

            {/* Buttons & Actions */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono uppercase tracking-wider transition-all duration-300 transform active:scale-95 shadow-lg shadow-blue-600/25 font-semibold group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-200 transition-all duration-300 active:scale-95"
              >
                <span>Let's Connect</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-700 transition-all cursor-pointer active:scale-95"
                title="Copy Email Address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-blue-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Icons Bar */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-zinc-400">
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">Connect //</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/10 border border-white/5 hover:border-blue-500/40 text-zinc-400 hover:text-white transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/10 border border-white/5 hover:border-blue-500/40 text-zinc-400 hover:text-blue-400 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/10 border border-white/5 hover:border-blue-500/40 text-zinc-400 hover:text-emerald-400 transition-all"
                aria-label="Medium Profile"
              >
                <MediumIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/10 border border-white/5 hover:border-blue-500/40 text-zinc-400 hover:text-blue-400 transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Profile Showcase */}
          <div className="shrink-0 relative flex items-center justify-center">

            {/* Outer Glow Ring */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-600/30 via-cyan-500/20 to-indigo-600/30 blur-2xl opacity-60 animate-pulse-subtle pointer-events-none" />

            {/* Rotating Decorative Border Ring */}
            <div
              className="absolute -inset-1 rounded-3xl opacity-50 animate-spin-slow pointer-events-none"
              style={{
                background: 'conic-gradient(from 0deg, #3b82f6, #06b6d4, #6366f1, #3b82f6)'
              }}
            />

            {/* Main Avatar Card Frame */}
            <div className="relative z-10 w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-3xl bg-[#0e111a] border border-white/10 p-2 shadow-2xl overflow-hidden group">

              {!imgError ? (
                <img
                  src={personalInfo.profileImg}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                  onError={() => setImgError(true)}
                />
              ) : (
                /* Fallback Tech Monogram if profile image is not found */
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-white/5 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 blur-md pointer-events-none" />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-3 text-blue-400">
                      <Terminal className="w-7 h-7" />
                    </div>
                    <span className="text-2xl font-bold font-mono tracking-wider text-white">YM</span>
                    <span className="text-[11px] font-mono text-zinc-400 mt-1">IT & Management</span>
                  </div>
                </div>
              )}

              {/* Glass Overlay on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-4">
                <span className="text-[10px] font-mono text-blue-300">Yenuli Munasinghe</span>
              </div>
            </div>

            {/* Floating Tech Chip: Top Right */}
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-20 animate-float-slow">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-blue-500/30 text-[11px] font-mono text-blue-300 shadow-xl backdrop-blur-md">
                <Code2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Full-Stack Dev</span>
              </div>
            </div>

            {/* Floating Tech Chip: Bottom Left */}
            <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 z-20 animate-float-delayed">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 shadow-xl backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span> Software Engineering </span>
              </div>
            </div>

          </div>

        </div>

        {/* Scroll Prompt Indicator */}
        <div className="pt-12 md:pt-16 flex flex-col items-center justify-center text-center">
          <a
            href="#about"
            className="group inline-flex flex-col items-center gap-1.5 text-zinc-500 hover:text-blue-400 transition-colors"
            aria-label="Scroll to About section"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors">
              Scroll to explore
            </span>
            <div className="w-5 h-8 rounded-full border border-zinc-700/80 flex items-start justify-center p-1 group-hover:border-blue-500/50 transition-colors">
              <div className="w-1 h-2 rounded-full bg-blue-500 animate-bounce" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
