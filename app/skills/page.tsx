'use client';

import { useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { PageHeader } from '@/components/ui/PageHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { skills } from '@/lib/data';
import type { Skill } from '@/types';

type Category = 'all' | Skill['category'];

const categories: { key: Category; label: string; emoji: string }[] = [
  { key: 'all', label: 'All', emoji: '✦' },
  { key: 'frontend', label: 'Frontend', emoji: '🎨' },
  { key: 'backend', label: 'Backend', emoji: '⚙️' },
  { key: 'devops', label: 'DevOps', emoji: '🚀' },
  { key: 'languages', label: 'Languages', emoji: '💻' },
  { key: 'tools', label: 'Tools', emoji: '🛠️' },
];

const levelLabel = (level: number) => {
  if (level >= 90) return { label: 'Expert', color: 'text-amber-400' };
  if (level >= 75) return { label: 'Advanced', color: 'text-green-400' };
  if (level >= 55) return { label: 'Intermediate', color: 'text-blue-400' };
  return { label: 'Learning', color: 'text-purple-400' };
};

function AnimatedSkillBar({ level, delay }: { level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div className="skill-bar mb-2" ref={ref}>
      <div
        className="skill-bar-fill"
        style={{
          width: isInView ? `${level}%` : '0%',
          transitionDelay: `${delay}ms`,
        }}
      />
    </div>
  );
}

export default function SkillsPage() {
  const [active, setActive] = useState<Category>('all');

  const filtered = active === 'all' ? skills : skills.filter((s) => s.category === active);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <PageHeader
          label="// skills"
          title="Tech Stack"
          description="Technologies and tools I use to build modern, performant applications."
        />

        {/* Filter Tabs — horizontal scroll on mobile */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 mb-12 overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map(({ key, label, emoji }) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all whitespace-nowrap shrink-0 ${
                  active === key
                    ? 'bg-amber-500 text-black border-amber-500'
                    : 'border-[#2a2a2a] text-[#a8a29e] hover:border-amber-500/40 hover:text-amber-400'
                }`}
              >
                <span>{emoji}</span>
                {label}
                <span className={`text-xs font-mono ${active === key ? 'text-black/60' : 'text-[#57534e]'}`}>
                  {key === 'all' ? skills.length : skills.filter((s) => s.category === key).length}
                </span>
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((skill, i) => {
            const { label, color } = levelLabel(skill.level);
            return (
              <AnimatedSection key={skill.name} delay={0.06 * i} direction="none">
                <div className="glass-card p-4 sm:p-5 group h-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium text-[#f5f0e8] group-hover:text-amber-400 transition-colors">
                      {skill.name}
                    </span>
                    <span className={`text-xs font-mono font-semibold ${color}`}>{label}</span>
                  </div>
                  <AnimatedSkillBar level={skill.level} delay={100 * i} />
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#57534e] capitalize">{skill.category}</span>
                    <span className="font-mono text-xs text-amber-400/80">{skill.level}%</span>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-14">
          {categories.slice(1).map(({ key, label, emoji }, i) => {
            const count = skills.filter((s) => s.category === key).length;
            const avg = Math.round(
              skills.filter((s) => s.category === key).reduce((a, s) => a + s.level, 0) / count
            );
            return (
              <AnimatedSection key={key} delay={0.1 * i} direction="none">
                <div className="glass-card p-4 text-center">
                  <span className="text-2xl">{emoji}</span>
                  <p className="font-semibold text-[#f5f0e8] mt-2 mb-1">{label}</p>
                  <p className="font-mono text-xs text-amber-400">{count} skills</p>
                  <p className="font-mono text-xs text-[#57534e]">avg {avg}%</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </div>
  );
}
