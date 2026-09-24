import React, { useState } from 'react';
import { Trophy, HeartHandshake, Award, Calendar, ExternalLink, Sparkles, Users } from 'lucide-react';
import { competitionsData, volunteeringData } from '../data/portfolioData';

export default function Involvement() {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'competitions' | 'volunteering'

  return (
    <section id="activities" className="py-[60px] md:py-[120px] px-4 md:px-6">
      <div className="mx-auto max-w-4xl">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300 uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Beyond Academics</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#fafafa]">
            Competitions & Volunteering<span className="text-blue-500">.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#a1a1aa] max-w-xl mx-auto">
            Hackathons, collaborative problem-solving sprints, and community leadership initiatives
          </p>

          {/* Interactive Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30'
                  : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              All Activities ({competitionsData.length + volunteeringData.length})
            </button>

            <button
              onClick={() => setActiveTab('competitions')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 ${
                activeTab === 'competitions'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30'
                  : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>Competitions & Hackathons ({competitionsData.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('volunteering')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 ${
                activeTab === 'volunteering'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30'
                  : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Volunteering & Leadership ({volunteeringData.length})</span>
            </button>
          </div>
        </div>

        {/* Content Container */}
        <div className="space-y-12">
          
          {/* Competitions Section */}
          {(activeTab === 'all' || activeTab === 'competitions') && (
            <div>
              {activeTab === 'all' && (
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Competitions & Hackathons</h3>
                </div>
              )}

              <div className="grid gap-6 sm:grid-cols-2">
                {competitionsData.map((item) => (
                  <div
                    key={item.id || item.title}
                    className="group rounded-xl glass p-6 transition-all duration-300 glass-hover hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Meta Row */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        {item.award ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/25 text-[11px] font-mono text-blue-300 font-medium">
                            <Award className="w-3.5 h-3.5 text-blue-400" />
                            {item.award}
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/25 text-[11px] font-mono text-blue-300 font-medium">
                            <Trophy className="w-3.5 h-3.5 text-blue-400" />
                            Competitor
                          </span>
                        )}

                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-400 shrink-0">
                          <Calendar className="w-3 h-3 text-zinc-500" />
                          {item.period}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                        {item.title}
                      </h4>

                      {/* Organizer */}
                      <p className="mt-1 text-xs font-mono text-blue-400/90">
                        {item.organizer}
                      </p>

                      {/* Description */}
                      <p className="mt-3 text-xs sm:text-sm text-[#a1a1aa] leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>

                    {/* Footer Tags & Link */}
                    <div className="mt-5 pt-3 border-t border-zinc-800/60 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags?.map((tag, idx) => (
                          <span
                            key={idx}
                            className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-mono text-zinc-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {item.link && item.link.trim() !== '' && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-blue-400 font-mono transition-colors"
                        >
                          <span>Details</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Volunteering Section */}
          {(activeTab === 'all' || activeTab === 'volunteering') && (
            <div>
              {activeTab === 'all' && (
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Volunteering & Leadership</h3>
                </div>
              )}

              <div className="grid gap-6 sm:grid-cols-2">
                {volunteeringData.map((item) => (
                  <div
                    key={item.id || item.role}
                    className="group rounded-xl glass p-6 transition-all duration-300 glass-hover hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Meta Row */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/25 text-[11px] font-mono text-blue-300 font-medium">
                          <Users className="w-3.5 h-3.5 text-blue-400" />
                          {item.role}
                        </span>

                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-400 shrink-0">
                          <Calendar className="w-3 h-3 text-zinc-500" />
                          {item.period}
                        </span>
                      </div>

                      {/* Organization Name */}
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                        {item.organization}
                      </h4>

                      {/* Description */}
                      <p className="mt-3 text-xs sm:text-sm text-[#a1a1aa] leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>

                    {/* Footer Tags */}
                    <div className="mt-5 pt-3 border-t border-zinc-800/60">
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags?.map((tag, idx) => (
                          <span
                            key={idx}
                            className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-mono text-zinc-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
