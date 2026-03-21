'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { certificates } from '@/lib/data';
import { Award, ExternalLink, Hash } from 'lucide-react';

const categoryColors: Record<string, string> = {
  Cloud: 'text-sky-400 bg-sky-400/10 border-sky-400/20',
  DevOps: 'text-green-400 bg-green-400/10 border-green-400/20',
  Frontend: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  Backend: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
  Database: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
  Security: 'text-red-400 bg-red-400/10 border-red-400/20',
  DSA: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  Languages: 'text-pink-400 bg-pink-400/10 border-pink-400/20',
};

const defaultColor = 'text-amber bg-amber/10 border-amber/20';

export default function CertificatesPage() {
  const grouped = certificates.reduce((acc, cert) => {
    if (!acc[cert.category]) acc[cert.category] = [];
    acc[cert.category].push(cert);
    return acc;
  }, {} as Record<string, typeof certificates>);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <PageHeader
          label="// certificates"
          title="Certifications"
          description="Professional certifications validating expertise across cloud, frontend, backend, and algorithms."
        />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-14">
          {Object.entries(grouped).map(([category, certs], i) => {
            const colorClass = categoryColors[category] || defaultColor;
            return (
              <AnimatedSection key={category} delay={0.1 * i} direction="none">
                <div className="glass-card p-4 text-center">
                  <p className={`text-2xl font-display font-bold ${colorClass.split(' ')[0]}`}>
                    {certs.length}
                  </p>
                  <p className="text-sm text-text-secondary mt-1">{category}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Certificate cards */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {certificates.map((cert, i) => {
            const colorClass = categoryColors[cert.category] || defaultColor;
            return (
              <AnimatedSection key={cert.id} delay={0.08 * i} direction="none">
                <div className="glass-card p-5 sm:p-6 group h-full">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center text-amber shrink-0 mt-0.5">
                      <Award size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="font-display text-sm sm:text-base font-semibold text-text-primary leading-snug group-hover:text-amber transition-colors">
                          {cert.title}
                        </h3>
                        {cert.credentialUrl && (
                          <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer"
                            className="text-text-muted hover:text-amber transition shrink-0 mt-0.5">
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                      <p className="text-amber/80 text-sm font-medium mb-1">{cert.issuer}</p>
                      <p className="text-text-muted text-xs mb-3">{cert.date}</p>

                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono border ${colorClass}`}>
                          {cert.category}
                        </span>
                        {cert.credentialId && (
                          <span className="flex items-center gap-1 font-mono text-xs text-text-muted">
                            <Hash size={10} />
                            {cert.credentialId}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </div>
  );
}
