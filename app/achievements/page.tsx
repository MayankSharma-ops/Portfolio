'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { achievements } from '@/lib/data';
import { ExternalLink } from 'lucide-react';

const categories: Record<string, { label: string; color: string }> = {
  award:         { label: 'Award',         color: 'border-amber-500/30 text-amber-400 bg-amber-500/10' },
  hackathon:     { label: 'Hackathon',     color: 'border-purple-500/30 text-purple-400 bg-purple-500/10' },
  publication:   { label: 'Publication',   color: 'border-blue-500/30 text-blue-400 bg-blue-500/10' },
  'open-source': { label: 'Open Source',   color: 'border-green-500/30 text-green-400 bg-green-500/10' },
  project:       { label: 'Project',       color: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10' },
  coding:        { label: 'Coding',        color: 'border-rose-500/30 text-rose-400 bg-rose-500/10' },
  certification: { label: 'Certification', color: 'border-indigo-500/30 text-indigo-400 bg-indigo-500/10' },
  other:         { label: 'Other',         color: 'border-[#2a2a2a] text-[#a8a29e] bg-white/5' },
};

export default function AchievementsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <PageHeader
          label="// achievements"
          title="Milestones"
          description="Recognition, wins, and moments that mark the journey."
        />

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-[#2a2a2a] space-y-6 sm:space-y-8">
          {achievements.map((item, i) => {
            const cat = categories[item.category] ?? categories['other'];
            return (
              <AnimatedSection key={item.id} delay={0.12 * i} direction="left">
                <div className="relative group">
                  {/* Dot */}
                  <div className="absolute -left-[27px] sm:-left-[33px] top-4 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#0a0a0a] border-2 border-amber-500 flex items-center justify-center">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-amber-500" />
                  </div>

                  <div className="glass-card p-4 sm:p-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      {/* Icon */}
                      <div className="text-2xl sm:text-3xl leading-none mt-1 w-8 sm:w-10 shrink-0 text-center">
                        {item.icon}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 sm:gap-3 mb-2">
                          <h3 className="font-display text-base sm:text-lg font-semibold text-[#f5f0e8] group-hover:text-amber-400 transition-colors leading-snug">
                            {item.title}
                          </h3>
                          {item.link && (
                            <a href={item.link} target="_blank" rel="noopener noreferrer"
                              className="text-[#57534e] hover:text-amber-400 transition shrink-0 mt-0.5">
                              <ExternalLink size={14} />
                            </a>
                          )}
                        </div>

                        <p className="text-[#a8a29e] text-sm leading-relaxed mb-3">
                          {item.description}
                        </p>

                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono border ${cat.color}`}>
                            {cat.label}
                          </span>
                          <span className="font-mono text-xs text-[#57534e]">{item.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}

          {/* End of timeline */}
          <div className="absolute -left-[23px] sm:-left-[29px] bottom-0">
            <div className="w-2 h-2 rounded-full bg-[#2a2a2a]" />
          </div>
        </div>

        {/* Summary row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-14">
          {Object.entries(categories).filter(([k]) => k !== 'other').map(([key, { label, color }], i) => {
            const count = achievements.filter((a) => a.category === key).length;
            if (!count) return null;
            return (
              <AnimatedSection key={key} delay={0.1 * i} direction="none">
                <div className="glass-card p-4 text-center">
                  <p className={`font-display text-3xl font-bold ${color.split(' ')[1]}`}>{count}</p>
                  <p className="text-sm text-[#a8a29e] mt-1">{label}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </div>
  );
}