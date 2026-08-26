import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Card Content */}
      <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-zinc-800 rounded-lg shadow-2xl z-10 overflow-hidden my-auto max-h-[85vh] flex flex-col animate-scaleUp">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950/40">
          <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
            {project.category}
          </span>

          <button
            onClick={onClose}
            className="p-1 rounded text-slate-500 hover:text-white transition-colors focus:outline-none"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Title */}
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              {project.title}
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-[#a1a1aa] leading-relaxed font-light">
              {project.fullDescription || project.shortDescription}
            </p>
          </div>

          {/* Key Contributions Details */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
              Key Contributions Details
            </h4>
            <div className="space-y-2">
              {project.contributions.map((contrib, idx) => (
                <div key={idx} className="rounded-lg bg-white/[0.01] border border-zinc-900 p-3.5">
                  <p className="text-xs font-bold text-white font-mono">{contrib.title}</p>
                  <p className="mt-1 text-xs text-[#a1a1aa] font-light leading-relaxed">{contrib.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h4 className="text-[10px] font-mono uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Layers className="w-3 h-3 text-blue-400" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-zinc-800 bg-zinc-950/40">
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded text-xs font-mono text-slate-500 hover:text-white transition-colors"
          >
            Close
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded text-xs font-mono text-slate-400 hover:text-white bg-zinc-900 border border-zinc-800 flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Repository</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded text-xs font-mono text-white bg-blue-600 hover:bg-blue-500 flex items-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
