import React from 'react';
import { BookOpen, Award, Terminal, Compass } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-[60px] md:py-[120px] px-4 md:px-6">
      <div className="mx-auto max-w-4xl">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#fafafa]">
            About Me<span className="text-blue-500">.</span>
          </h2>
          <p className="mt-3 text-lg text-[#a1a1aa]">Get to know my academic and tech focus</p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 items-center">
          
          {/* Left Column Profile Card Style */}
          <div className="aspect-square rounded-2xl bg-[#121214] border border-white/10 relative overflow-hidden group shadow-xl">
            {/* Ambient Blue background glow inside card */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-xl opacity-40 z-0"></div>
            
            {/* Profile Image (renders if profile.jpg is added in the public folder) */}
            <img 
              src={personalInfo.profileImg} 
              alt={personalInfo.name}
              className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            
            {/* Text Overlay (Dimmable on image hover) */}
            <div className="relative z-20 w-full h-full p-8 flex flex-col justify-between bg-black/40 backdrop-blur-[1px] group-hover:bg-black/70 group-hover:backdrop-blur-sm transition-all duration-350">
              <div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-2">Education // Focus</span>
                <h3 className="text-2xl font-bold text-white mb-4">
                  University of Moratuwa
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                  B.Sc. (Hons) in Information Technology and Management. Blending programming systems with business strategy, analytics, and operational workflows.
                </p>
              </div>

              {/* Status pill in card */}
              <div className="border border-white/10 bg-black/70 backdrop-blur-md px-3 py-2 rounded-xl text-center">
                <span className="text-[11px] font-mono text-blue-300">Third-Year Undergraduate</span>
              </div>
            </div>
          </div>

          {/* Right Column Bio & Highlights */}
          <div className="space-y-6">
            <p className="text-[#a1a1aa] leading-relaxed text-base font-light">
              {personalInfo.bio}
            </p>

            {/* Highlights Grid */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="glass rounded-lg p-4 text-center hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all">
                <BookOpen className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                <p className="text-xs text-[#a1a1aa] font-mono">B.Sc. (Hons) ITM</p>
              </div>

              <div className="glass rounded-lg p-4 text-center hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all">
                <Terminal className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                <p className="text-xs text-[#a1a1aa] font-mono">Software Eng.</p>
              </div>

              <div className="glass rounded-lg p-4 text-center hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all">
                <Award className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                <p className="text-xs text-[#a1a1aa] font-mono">Data Science</p>
              </div>

              <a 
                href="#projects" 
                className="glass rounded-lg p-4 text-center hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all flex flex-col items-center justify-center group/card"
              >
                <Compass className="w-5 h-5 text-blue-400 group-hover/card:rotate-12 transition-transform duration-300 mb-2" />
                <p className="text-xs text-[#a1a1aa] font-mono">Projects Showcase</p>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
