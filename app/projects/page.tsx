'use client';

import { useState, useEffect } from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { LiveBadge } from '@/components/ui/LiveBadge';
import { projects } from '@/lib/data';
import { Github, ExternalLink, Star, GitCommit, Code } from 'lucide-react';
import type { Project } from '@/types';

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

function ProjectCard({ project, index, onTagClick }: { project: Project; index: number; onTagClick: (tag: string) => void }) {
  const [expanded, setExpanded] = useState(false);
  const [ghStats, setGhStats] = useState<{ stars: number; lastCommit: string; language: string } | null>(null);

  useEffect(() => {
    if (project.github) {
      fetch(`/api/github-repo?url=${encodeURIComponent(project.github)}`)
        .then((res) => res.json())
        .then((data) => {
          if (!data.error) setGhStats(data);
        })
        .catch(() => {});
    }
  }, [project.github]);

  const text = project.longDescription || project.description;
  const isLong = text.length > 150;

  return (
    <AnimatedSection delay={0.1 * index} direction="none">
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
            {project.live && <LiveBadge url={project.live} />}
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
          {expanded || !isLong ? text : `${text.slice(0, 150)}...`}
          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-amber-400 ml-1 hover:underline whitespace-nowrap"
            >
              {expanded ? 'Show less' : 'Read more'}
            </button>
          )}
        </p>

        {/* Tags & GitHub Stats */}
        <div className="pt-3 border-t border-[#2a2a2a] mt-auto">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                onClick={() => onTagClick(tag)}
                className="tag cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>

          {ghStats && (
            <div className="flex items-center gap-3 text-[10px] sm:text-xs font-mono text-[#57534e]">
              {ghStats.language && (
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-amber-500/50" />
                  {ghStats.language}
                </span>
              )}
              <span className="flex items-center gap-1">
                <Star size={12} className="text-amber-500/60" /> {ghStats.stars}
              </span>
              <span className="flex items-center gap-1">
                <GitCommit size={12} /> {new Date(ghStats.lastCommit).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onTagClick={setActiveTag} />
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
