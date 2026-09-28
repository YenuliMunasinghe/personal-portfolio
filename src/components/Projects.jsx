import React, { useState } from 'react';
import { Github, Sparkles, ArrowRight, FolderGit2, Users, User } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="projects" className="py-[60px] md:py-[120px] px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300 uppercase tracking-wider mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#fafafa]">
            Projects<span className="text-blue-500">.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#a1a1aa] max-w-xl mx-auto">
            A detailed look at my systems projects and contributions
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              role="button"
              tabIndex={0}
              onClick={() => setActiveModalProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveModalProject(project);
                }
              }}
              className="group relative flex flex-col justify-between rounded-2xl glass p-5 sm:p-6 transition-all duration-300 glass-hover hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(59,130,246,0.18)] cursor-pointer border border-white/[0.08] hover:border-blue-500/40 text-left focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              <div>
                {/* Project Image Banner */}
                {project.image && (
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-xl bg-zinc-900 mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent" />
                    
                    {/* Category Tag */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono text-blue-300 uppercase tracking-wider font-medium">
                      {project.category}
                    </span>

                    {/* Featured Tag */}
                    {project.featured && (
                      <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/25 backdrop-blur-md border border-blue-500/35 text-[10px] font-mono text-blue-300 font-medium">
                        <Sparkles className="w-2.5 h-2.5 text-blue-400" />
                        Featured
                      </span>
                    )}

                    {/* Project Type Badge */}
                    {project.projectType && (
                      <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/85 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300">
                        {project.projectType.toLowerCase().includes('team') ? (
                          <>
                            <Users className="w-3 h-3 text-blue-400" />
                            <span>Team Project</span>
                          </>
                        ) : (
                          <>
                            <User className="w-3 h-3 text-emerald-400" />
                            <span>Individual Project</span>
                          </>
                        )}
                      </span>
                    )}
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-snug line-clamp-2">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="mt-2.5 text-xs sm:text-sm text-[#a1a1aa] font-light leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Architectural Highlights Pill */}
                {project.contributions && project.contributions.length > 0 && (
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>
                      {project.contributions.length}{' '}
                      {project.projectType?.toLowerCase().includes('team')
                        ? 'architectural contributions'
                        : 'key system capabilities'}
                    </span>
                  </div>
                )}

                {/* Technology Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-mono text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="rounded-full border border-white/5 bg-white/[0.03] px-2 py-0.5 text-[10px] font-mono text-zinc-500">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveModalProject(project);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors cursor-pointer"
                  aria-label={`View more details about ${project.title}`}
                >
                  <span>View more</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                    title="View GitHub Repository"
                    aria-label={`GitHub Repository for ${project.title}`}
                  >
                    <Github className="w-4 h-4" />
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
