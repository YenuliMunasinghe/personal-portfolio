import React from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-[60px] md:py-[120px] px-4 md:px-6">
      <div className="mx-auto max-w-4xl">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#fafafa]">
            Skills & Expertise<span className="text-blue-500">.</span>
          </h2>
          <p className="mt-3 text-lg text-[#a1a1aa]">
            A compilation of tools, platforms, and methodologies I work with
          </p>
        </div>

        {/* Categories Stack */}
        <div className="space-y-10">
          {skillsData.map((category) => (
            <div key={category.category}>
              <h3 className="mb-4 text-base font-semibold text-zinc-200 uppercase tracking-wider font-mono">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3.5 py-2.5 transition-colors hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                  >
                    {/* Minimalist dot indicator */}
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-xs sm:text-sm font-medium text-zinc-200">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
