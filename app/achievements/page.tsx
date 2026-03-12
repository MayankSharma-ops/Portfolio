// app/achievements/page.tsx
import { PageHeader } from '@/components/ui/PageHeader';
import { achievements } from '@/lib/data';
import { ExternalLink } from 'lucide-react';

const categoryLabel: Record<string, { label: string; color: string }> = {
  award: { label: 'Award', color: 'text-amber-400 bg-amber-400/10 border-amber-400/20' },
  hackathon: { label: 'Hackathon', color: 'text-green-400 bg-green-400/10 border-green-400/20' },
  publication: { label: 'Publication', color: 'text-purple-400 bg-purple-400/10 border-purple-400/20' },
  'open-source': { label: 'Open Source', color: 'text-sky-400 bg-sky-400/10 border-sky-400/20' },
  other: { label: 'Other', color: 'text-[#a8a29e] bg-white/5 border-white/10' },
};

export default function AchievementsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <PageHeader
          label="// achievements"
          title="Milestones"
          description="Recognition, wins, and moments that mark the journey."
        />

        {/* Timeline */}
        <div className="relative pl-8 border-l border-[#2a2a2a] space-y-8">
          {achievements.map((item, i) => {
            const cat = categoryLabel[item.category];
            return (
              <div key={item.id} className="relative group">
                {/* Dot */}
                <div className="absolute -left-[33px] top-4 w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-amber-500 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                </div>

                <div className="glass-card p-6">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="text-3xl leading-none mt-1 w-10 shrink-0 text-center">
                      {item.icon}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="font-display text-lg font-semibold text-[#f5f0e8] group-hover:text-amber-400 transition-colors leading-snug">
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
            );
          })}

          {/* End of timeline */}
          <div className="absolute -left-[29px] bottom-0">
            <div className="w-2 h-2 rounded-full bg-[#2a2a2a]" />
          </div>
        </div>

        {/* Summary row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
          {Object.entries(categoryLabel).filter(([k]) => k !== 'other').map(([key, { label, color }]) => {
            const count = achievements.filter((a) => a.category === key).length;
            if (!count) return null;
            return (
              <div key={key} className="glass-card p-4 text-center">
                <p className={`font-display text-3xl font-bold ${color.split(' ')[0]}`}>{count}</p>
                <p className="text-sm text-[#a8a29e] mt-1">{label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
