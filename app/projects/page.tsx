'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { projects } from '@/lib/data';
import { Github, ExternalLink, Star } from 'lucide-react';

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState<string>('All');
  const [showAll, setShowAll] = useState(false);

  const filtered =
    activeTag === 'All' ? projects : projects.filter((p) => p.tags.includes(activeTag));

  const visibleTags = ['All', ...allTags.slice(0, showAll ? allTags.length : 10)];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <PageHeader
          label="// projects"
          title="My Work"
          description="A collection of projects I've built — from open-source tools to production applications."
        />

        {/* Tag filter — horizontal scroll on mobile */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 mb-12 overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
            {visibleTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-3 py-1.5 rounded-md text-xs font-mono border transition-all whitespace-nowrap shrink-0 ${
                  activeTag === tag
                    ? 'bg-amber-500 text-black border-amber-500'
                    : 'border-[#2a2a2a] text-[#a8a29e] hover:border-amber-500/40 hover:text-amber-400'
                }`}
              >
                {tag}
              </button>
            ))}
            {!showAll && allTags.length > 10 && (
              <button
                onClick={() => setShowAll(true)}
                className="px-3 py-1.5 rounded-md text-xs font-mono border border-dashed border-[#2a2a2a] text-[#57534e] hover:border-amber-500/40 hover:text-amber-400 transition whitespace-nowrap shrink-0"
              >
                +{allTags.length - 10} more
              </button>
            )}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <AnimatedSection key={project.id} delay={0.1 * i} direction="none">
              <div className="glass-card p-5 sm:p-6 flex flex-col group h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <Star size={13} className="text-amber-400 fill-amber-400" />
                    )}
                    <span className="font-mono text-xs text-[#57534e]">{project.year}</span>
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="text-[#57534e] hover:text-amber-400 transition" aria-label="GitHub">
                        <Github size={16} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                        className="text-[#57534e] hover:text-amber-400 transition" aria-label="Live">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-lg sm:text-xl font-semibold mb-2 group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#a8a29e] leading-relaxed flex-1 mb-4">
                  {project.longDescription || project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#2a2a2a]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      onClick={() => setActiveTag(tag)}
                      className="tag cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#57534e]">No projects found for &ldquo;{activeTag}&rdquo;</p>
            <button onClick={() => setActiveTag('All')} className="mt-4 text-amber-400 text-sm hover:underline">
              Clear filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
