import { PageHeader } from '@/components/ui/PageHeader';
import { experiences, personalInfo } from '@/lib/data';
import { Briefcase, GraduationCap, Download, ArrowRight } from 'lucide-react';

export default function ResumePage() {
  const work = experiences.filter((e) => e.type === 'work');
  const education = experiences.filter((e) => e.type === 'education');

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <PageHeader
          label="// resume"
          title="Experience"
          description="My professional journey — training, projects, and academic background."
        />

        {/* Download button */}
        <div className="flex justify-center mb-14">
          <a
            href={personalInfo.resumeUrl}
            download="MayankSharma_CV.pdf"
            className="btn-primary flex items-center gap-2"
          >
            <Download size={15} /> Download Full Resume (PDF)
          </a>
        </div>

        {/* Training / Work Experience */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Briefcase size={16} />
            </div>
            <h2 className="font-display text-2xl font-bold">Training</h2>
          </div>

          <div className="relative pl-6 border-l border-[#2a2a2a] space-y-10">
            {work.map((exp) => (
              <div key={exp.id} className="relative">
                <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-amber-500 ring-4 ring-[#0a0a0a]" />
                <div className="glass-card p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-[#f5f0e8]">{exp.role}</h3>
                      <p className="text-amber-400 font-medium text-sm">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs text-[#57534e] bg-[#111111] px-2.5 py-1 rounded-md border border-[#2a2a2a] whitespace-nowrap">
                        {exp.startDate} — {exp.endDate}
                      </p>
                      <p className="text-[#57534e] text-xs mt-1">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((point, j) => (
                      <li key={j} className="flex gap-2.5 text-sm text-[#a8a29e] leading-relaxed">
                        <ArrowRight size={13} className="text-amber-500/60 mt-0.5 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#2a2a2a]">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tag">{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <GraduationCap size={16} />
            </div>
            <h2 className="font-display text-2xl font-bold">Education</h2>
          </div>

          <div className="relative pl-6 border-l border-[#2a2a2a] space-y-6">
            {education.map((exp) => (
              <div key={exp.id} className="relative">
                <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-amber-500/50 ring-4 ring-[#0a0a0a]" />
                <div className="glass-card p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-[#f5f0e8]">{exp.role}</h3>
                      <p className="text-amber-400 font-medium text-sm">{exp.company}</p>
                      <p className="text-[#57534e] text-xs mt-0.5">{exp.location}</p>
                    </div>
                    <p className="font-mono text-xs text-[#57534e] bg-[#111111] px-2.5 py-1 rounded-md border border-[#2a2a2a] h-fit whitespace-nowrap">
                      {exp.startDate} — {exp.endDate}
                    </p>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.description.map((point, j) => (
                      <li key={j} className="flex gap-2.5 text-sm text-[#a8a29e] leading-relaxed">
                        <ArrowRight size={13} className="text-amber-500/60 mt-0.5 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
