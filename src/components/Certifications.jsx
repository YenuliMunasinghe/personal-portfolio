import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-[60px] md:py-[120px] px-4 md:px-6">
      <div className="mx-auto max-w-4xl">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#fafafa]">
            Certifications<span className="text-blue-500">.</span>
          </h2>
          <p className="mt-3 text-lg text-[#a1a1aa]">Professional credentials and analytical courses</p>
        </div>

        {/* Certifications Grid */}
        <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
          {certificationsData.map((cert, idx) => (
            <div 
              key={idx}
              className="group rounded-xl glass p-5 transition-all duration-300 glass-hover hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] flex flex-col justify-between"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 mb-4 text-blue-400 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-colors">
                  <Award className="w-5 h-5" />
                </div>
                
                <h3 className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                
                <p className="mt-2 text-xs text-[#a1a1aa] font-mono">
                  {cert.provider} // {cert.date}
                </p>
              </div>

              {cert.link && (
                <div className="mt-4 pt-3 border-t border-zinc-800/60">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-blue-400 transition-colors font-mono"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
