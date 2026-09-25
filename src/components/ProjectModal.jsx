import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  Layers, 
  Sparkles, 
  MapPin, 
  Database, 
  Zap, 
  Layout, 
  Cpu, 
  ShieldAlert,
  Radio,
  CheckCircle2,
  Users
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    
    // Prevent background scrolling while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  if (!project) return null;

  const getContribIcon = (title) => {
    const t = title.toLowerCase();
    if (t.includes('map') || t.includes('geospatial') || t.includes('location')) return <MapPin className="text-blue-400 w-4 h-4" />;
    if (t.includes('database') || t.includes('query') || t.includes('api') || t.includes('backend')) return <Database className="text-blue-400 w-4 h-4" />;
    if (t.includes('dispatch') || t.includes('real-time') || t.includes('telemetry') || t.includes('firmware') || t.includes('engine') || t.includes('ldr') || t.includes('sgp30') || t.includes('sensor')) return <Zap className="text-blue-400 w-4 h-4" />;
    if (t.includes('dashboard') || t.includes('visualization') || t.includes('ui') || t.includes('glassmorphic') || t.includes('hosting') || t.includes('front-end')) return <Layout className="text-blue-400 w-4 h-4" />;
    if (t.includes('embedded') || t.includes('fail-safe') || t.includes('hardware')) return <Cpu className="text-blue-400 w-4 h-4" />;
    if (t.includes('security') || t.includes('auth') || t.includes('hardening') || t.includes('permission') || t.includes('login') || t.includes('csrf')) return <ShieldAlert className="text-blue-400 w-4 h-4" />;
    if (t.includes('notification') || t.includes('push') || t.includes('alert')) return <Radio className="text-blue-400 w-4 h-4" />;
    if (t.includes('rescuer') || t.includes('case') || t.includes('adoption')) return <CheckCircle2 className="text-blue-400 w-4 h-4" />;
    return <Sparkles className="text-blue-400 w-4 h-4" />;
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Card Content */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[#0d0d0e] border border-zinc-800 rounded-2xl shadow-2xl z-10 overflow-hidden my-auto max-h-[90vh] flex flex-col animate-scaleUp"
      >
        {/* Modal Header Bar with Close Button */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-zinc-800/80 bg-zinc-950/60 z-20">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider font-semibold">
              {project.category}
            </span>
            {project.projectType && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-300">
                <Users className="w-2.5 h-2.5 text-zinc-400" />
                {project.projectType}
              </span>
            )}
            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono text-blue-300">
                <Sparkles className="w-2.5 h-2.5 text-blue-400" />
                Featured
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="overflow-y-auto flex-1">
          {/* Banner Image */}
          {project.image && (
            <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-zinc-900 shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0e] via-[#0d0d0e]/60 to-transparent" />
            </div>
          )}

          <div className="p-5 sm:p-6 space-y-6">
            {/* Title & Overview */}
            <div>
              <h3 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                {project.title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                {project.fullDescription || project.shortDescription}
              </p>
            </div>

            {/* My Contribution Summary Callout */}
            {project.myContributionSummary && (
              <div className="rounded-xl bg-blue-500/[0.04] border border-blue-500/20 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-mono font-semibold text-blue-300 uppercase tracking-wider">
                    My Core Contribution
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                  {project.myContributionSummary}
                </p>
              </div>
            )}

            {/* Detailed Contributions Grid */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-mono uppercase tracking-wider text-blue-400 flex items-center gap-1.5 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Key Architectural Contributions
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.contributions.map((contrib, idx) => (
                  <div 
                    key={idx} 
                    className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-3.5 transition-colors hover:bg-white/[0.04] flex items-start gap-3"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20 mt-0.5">
                      {getContribIcon(contrib.title)}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white font-mono">{contrib.title}</p>
                      <p className="mt-1 text-xs text-zinc-400 font-light leading-relaxed">{contrib.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div className="space-y-2.5">
              <h4 className="text-[11px] font-mono uppercase tracking-wider text-blue-400 flex items-center gap-1.5 font-semibold">
                <Layers className="w-3.5 h-3.5" />
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-white/5 border border-white/10 text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-t border-zinc-800/80 bg-zinc-950/60 z-20">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-mono text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 transition-colors"
          >
            Close
          </button>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-mono text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-2 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-mono text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-900/30 flex items-center gap-2 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
