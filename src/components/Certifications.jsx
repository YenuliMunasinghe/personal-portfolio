import React, { useState, useEffect } from 'react';
import { Award, Eye, X, Maximize2 } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  // Close modal on Escape key and prevent background scroll
  useEffect(() => {
    if (!selectedCert) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedCert]);

  return (
    <section id="certifications" className="py-[60px] md:py-[120px] px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300 uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#fafafa]">
            Certifications<span className="text-blue-500">.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#a1a1aa] max-w-xl mx-auto">
            Professional certifications and verified course completions
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {certificationsData.map((cert, idx) => (
            <div 
              key={idx}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedCert(cert)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedCert(cert);
                }
              }}
              className="group rounded-2xl glass p-5 transition-all duration-300 glass-hover hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.18)] flex flex-col justify-between cursor-pointer border border-white/[0.08] hover:border-blue-500/40 text-left focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              <div>
                {/* Certificate Preview Image Thumbnail */}
                {cert.image && (
                  <div className="relative h-44 w-full overflow-hidden rounded-xl bg-zinc-900 border border-white/[0.06] mb-4">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Hover badge */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-600/90 text-white text-xs font-medium shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Eye className="w-3.5 h-3.5" />
                        View Certificate
                      </span>
                    </div>

                    <span className="absolute bottom-2.5 left-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-zinc-300">
                      {cert.provider}
                    </span>
                  </div>
                )}
                
                <h3 className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                  {cert.title}
                </h3>
                
                <p className="mt-2 text-xs text-[#a1a1aa] font-mono">
                  {cert.date}
                </p>
              </div>

              {/* Card Action Footer */}
              <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs text-blue-400 font-medium">
                <span className="inline-flex items-center gap-1.5 group-hover:text-blue-300 transition-colors">
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Certificate</span>
                </span>
                <Maximize2 className="w-3 h-3 text-zinc-500 group-hover:text-blue-400 transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Certificate Viewer Lightbox Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label={selectedCert.title}
        >
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" 
            onClick={() => setSelectedCert(null)}
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-4xl rounded-2xl glass bg-[#0a0a0a]/95 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] z-10 overflow-hidden flex flex-col my-auto animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.08] bg-zinc-900/50">
              <div className="pr-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono text-blue-300 uppercase tracking-wider">
                    {selectedCert.provider}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">
                    {selectedCert.date}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {selectedCert.title}
                </h3>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/50 shrink-0"
                aria-label="Close certificate viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="p-4 sm:p-6 flex items-center justify-center bg-black/40 overflow-y-auto max-h-[75vh]">
              <img
                src={selectedCert.image}
                alt={`${selectedCert.title} - ${selectedCert.provider}`}
                className="w-auto max-w-full max-h-[70vh] object-contain rounded-lg border border-white/10 shadow-2xl"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-white/[0.08] bg-zinc-900/50 text-xs">
              <span className="text-zinc-400 font-mono">
                Awarded to <span className="text-zinc-200">Yenuli Munasinghe</span>
              </span>
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

