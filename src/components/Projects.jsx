import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, MapPin, Database, Zap, Layout, Cpu, ShieldAlert, Radio } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  const getContribIcon = (title) => {
    const t = title.toLowerCase();
    if (t.includes('map') || t.includes('geospatial')) return <MapPin className="text-blue-400 w-4 h-4" />;
    if (t.includes('database') || t.includes('query') || t.includes('api')) return <Database className="text-blue-400 w-4 h-4" />;
    if (t.includes('dispatch') || t.includes('real-time') || t.includes('telemetry') || t.includes('firmware')) return <Zap className="text-blue-400 w-4 h-4" />;
    if (t.includes('dashboard') || t.includes('visualization')) return <Layout className="text-blue-400 w-4 h-4" />;
    if (t.includes('embedded') || t.includes('fail-safe')) return <Cpu className="text-blue-400 w-4 h-4" />;
    return <Sparkles className="text-blue-400 w-4 h-4" />;
  };

  return (
    <section id="projects" className="py-[60px] md:py-[120px] px-4 md:px-6">
      <div className="mx-auto max-w-4xl">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#fafafa]">
            Projects<span className="text-blue-500">.</span>
          </h2>
          <p className="mt-3 text-lg text-[#a1a1aa]">A detailed look at my systems projects and contributions</p>
        </div>

        {/* Projects Grid Stack */}
        <div className="space-y-12">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="group rounded-xl glass p-6 transition-all duration-300 glass-hover hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] w-full"
            >
              
              {/* Title & Header */}
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-bold text-[#fafafa] group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono text-blue-300 uppercase tracking-wide">
                      <Sparkles className="w-2.5 h-2.5" /> Featured
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#a1a1aa] font-light">
                  {project.shortDescription}
                </p>
              </div>

              {/* Contributions Details Grid */}
              <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.contributions.map((contrib, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-3 rounded-lg bg-white/[0.02] border border-white/[0.05] p-4 transition-colors hover:bg-white/[0.04]"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-500/10">
                      {getContribIcon(contrib.title)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#fafafa]">{contrib.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-[#a1a1aa] font-light">{contrib.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="rounded-full border px-3 py-1 text-xs font-mono border-white/10 bg-white/5 text-[#a1a1aa]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 border-t border-zinc-800/80 pt-4">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="flex items-center gap-1.5 text-sm text-[#a1a1aa] hover:text-blue-400 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Full Details & Contributions</span>
                </button>
                
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-[#a1a1aa] hover:text-blue-400 transition-colors ml-4"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Repository</span>
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Modal Detail view */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
