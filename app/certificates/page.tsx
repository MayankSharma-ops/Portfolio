import { PageHeader } from '@/components/ui/PageHeader';
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

const defaultColor = 'text-amber-400 bg-amber-400/10 border-amber-400/20';

export default function CertificatesPage() {
  const grouped = certificates.reduce((acc, cert) => {
    if (!acc[cert.category]) acc[cert.category] = [];
    acc[cert.category].push(cert);
    return acc;
  }, {} as Record<string, typeof certificates>);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <PageHeader
          label="// certificates"
          title="Certifications"
          description="Professional certifications validating expertise across cloud, frontend, backend, and algorithms."
        />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {Object.entries(grouped).map(([category, certs]) => {
            const colorClass = categoryColors[category] || defaultColor;
            return (
              <div key={category} className="glass-card p-4 text-center">
                <p className={`text-2xl font-display font-bold ${colorClass.split(' ')[0]}`}>
                  {certs.length}
                </p>
                <p className="text-sm text-[#a8a29e] mt-1">{category}</p>
              </div>
            );
          })}
        </div>

        {/* Certificate cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {certificates.map((cert) => {
            const colorClass = categoryColors[cert.category] || defaultColor;
            return (
              <div key={cert.id} className="glass-card p-6 group">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <Award size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-display text-base font-semibold text-[#f5f0e8] leading-snug group-hover:text-amber-400 transition-colors">
                        {cert.title}
                      </h3>
                      {cert.credentialUrl && (
                        <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer"
                          className="text-[#57534e] hover:text-amber-400 transition shrink-0 mt-0.5">
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                    <p className="text-amber-400/80 text-sm font-medium mb-1">{cert.issuer}</p>
                    <p className="text-[#57534e] text-xs mb-3">{cert.date}</p>

                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono border ${colorClass}`}>
                        {cert.category}
                      </span>
                      {cert.credentialId && (
                        <span className="flex items-center gap-1 font-mono text-xs text-[#57534e]">
                          <Hash size={10} />
                          {cert.credentialId}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
