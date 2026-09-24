import React from 'react';
import { ExternalLink, BookOpen, Clock, Calendar, ArrowUpRight } from 'lucide-react';
import MediumIcon from './icons/MediumIcon';
import { articlesData, personalInfo } from '../data/portfolioData';

export default function Writing() {
  return (
    <section id="writing" className="py-[60px] md:py-[120px] px-4 md:px-6">
      <div className="mx-auto max-w-4xl">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300 uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Articles & Technical Thoughts</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#fafafa]">
            Writing & Thoughts<span className="text-blue-500">.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#a1a1aa] max-w-xl mx-auto">
            A space where I share technical articles, system architecture breakdowns, and thoughts on software engineering and development on Medium.
          </p>

          {/* Quick link to Medium profile */}
          <div className="mt-5 flex justify-center">
            <a
              href={personalInfo.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white hover:bg-white/10 hover:border-blue-500/40 transition-all duration-300 shadow-sm group"
            >
              <MediumIcon className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>Read on Medium (@yenulimunasinghe04)</span>
              <ExternalLink className="w-3 h-3 text-zinc-500 group-hover:text-blue-400 transition-colors" />
            </a>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {articlesData.map((article) => (
            <article
              key={article.id}
              className={`group rounded-xl glass p-6 transition-all duration-300 glass-hover hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col justify-between ${
                article.episodes ? 'md:col-span-2' : ''
              }`}
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 text-xs font-mono text-zinc-400 mb-3 pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-zinc-400">
                      <Calendar className="w-3.5 h-3.5 text-blue-400/80" />
                      {article.date}
                    </span>
                    {article.category && (
                      <span className="px-2 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-[10px] text-blue-300 font-mono">
                        {article.category}
                      </span>
                    )}
                  </div>
                  
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/5 text-[11px] text-zinc-300">
                    <Clock className="w-3 h-3 text-zinc-400" />
                    {article.readTime}
                  </span>
                </div>

                {/* Article Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus:outline-none focus:underline"
                  >
                    {article.title}
                  </a>
                </h3>

                {/* Excerpt */}
                <p className="mt-3 text-xs sm:text-sm text-[#a1a1aa] leading-relaxed font-light">
                  {article.description}
                </p>

                {/* Nested Daily Series Episodes (if any) */}
                {article.episodes && article.episodes.length > 0 && (
                  <div className="mt-5 pt-4 border-t border-white/5">
                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-2.5">
                      <span className="text-blue-300 font-semibold uppercase tracking-wider">
                        Daily DevLogs & Chapters
                      </span>
                      <span className="text-zinc-500">{article.episodes.length} Published Entries</span>
                    </div>

                    <div className="grid gap-2 sm:grid-cols-3">
                      {article.episodes.map((ep, idx) => (
                        <a
                          key={idx}
                          href={ep.link || article.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col justify-between p-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-blue-500/30 transition-all group/ep"
                        >
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono text-blue-300">
                              {ep.day}
                            </span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover/ep:text-blue-400 transition-transform group-hover/ep:translate-x-0.5 group-hover/ep:-translate-y-0.5" />
                          </div>
                          <p className="text-xs text-zinc-300 group-hover/ep:text-white font-medium line-clamp-2 leading-relaxed">
                            {ep.title}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Tags & Action Footer */}
              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-mono text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors group/link ml-auto"
                >
                  <span>{article.episodes ? 'View Full Series on Medium' : 'Read Article on Medium'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
