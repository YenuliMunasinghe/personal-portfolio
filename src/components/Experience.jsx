import React from 'react';
import { BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="education" className="py-[60px] md:py-[120px] px-4 md:px-6">
      <div className="mx-auto max-w-4xl">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#fafafa]">
            Education<span className="text-blue-500">.</span>
          </h2>
          <p className="mt-3 text-lg text-[#a1a1aa]">My academic foundation and qualifications</p>
        </div>

        {/* Timeline container */}
        <div className="relative space-y-8 max-w-3xl mx-auto">
          
          {/* Vertical line matching Abhay's style, but in blue */}
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] timeline-line pointer-events-none" />

          {educationData.map((item, idx) => (
            <div key={idx} className="relative pl-10 group">
              
              {/* Timeline marker dot */}
              <div className="absolute left-0 top-3 h-[16px] w-[16px] rounded-full border-2 border-blue-500 bg-[#0a0a0a] timeline-dot transition-transform duration-300 group-hover:scale-110" />

              {/* Glass Card */}
              <div className="glass glass-hover rounded-xl p-6 shadow-sm">
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="text-lg font-bold text-[#fafafa] group-hover:text-blue-400 transition-colors">
                    {item.degree}
                  </h3>
                  <span className="text-xs font-mono text-[#a1a1aa]/60 shrink-0">
                    {item.period}
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-1.5 text-xs text-blue-400 font-mono">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{item.institution}</span>
                </div>

                {item.details && (
                  <p className="mt-3 text-xs sm:text-sm text-[#a1a1aa] leading-relaxed font-light">
                    {item.details}
                  </p>
                )}

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
