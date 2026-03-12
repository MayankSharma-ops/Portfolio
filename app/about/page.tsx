import { PageHeader } from '@/components/ui/PageHeader';
import { personalInfo } from '@/lib/data';
import { MapPin, Mail, Phone, Github, Linkedin, Download, CheckCircle2 } from 'lucide-react';

const values = [
  { icon: '⚡', title: 'Performance First', description: 'I obsess over gas costs in Solidity, query efficiency in PostgreSQL, and bundle sizes in Next.js.' },
  { icon: '🔗', title: 'Web3 Native', description: 'Building fully on-chain systems without centralized infrastructure — trustless and transparent by design.' },
  { icon: '🤖', title: 'AI-Augmented', description: 'Integrating LLMs with controlled prompt logic and structured outputs to build genuinely useful AI features.' },
  { icon: '🤝', title: 'Clean Code', description: 'Readable, typed, and well-structured code that the next developer (or future me) can understand immediately.' },
];

const interests = ['Web3 / DApps', 'AI & LLMs', 'DSA & Problem Solving', 'Open Source', 'Next.js', 'Solidity', 'System Design', 'Chess'];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <PageHeader
          label="// about me"
          title="Who I Am"
          description="A developer driven by curiosity, precision, and the craft of building great software."
        />

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Left column */}
          <div className="md:col-span-2 space-y-6">
            {/* Avatar */}
            <div className="glass-card gradient-border p-1">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-amber-500/20 via-[#161616] to-[#111111] flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-6xl font-bold text-amber-400 mb-2">
                    MS
                  </div>
                  <p className="text-[#57534e] font-mono text-xs">{personalInfo.title}</p>
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="glass-card p-5 space-y-3">
              {[
                { icon: Mail, value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: Phone, value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                { icon: MapPin, value: personalInfo.location, href: '#' },
              ].map(({ icon: Icon, value, href }) => (
                <a key={value} href={href}
                  className="flex items-center gap-3 text-sm text-[#a8a29e] hover:text-amber-400 transition group">
                  <Icon size={14} className="text-amber-500/60 group-hover:text-amber-400 transition" />
                  {value}
                </a>
              ))}
              <div className="pt-3 border-t border-[#2a2a2a] flex gap-3">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                  className="text-[#57534e] hover:text-amber-400 transition">
                  <Github size={18} />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                  className="text-[#57534e] hover:text-amber-400 transition">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            <a
              href={personalInfo.resumeUrl}
              download="MayankSharma_CV.pdf"
              className="btn-primary w-full justify-center flex items-center gap-2"
            >
              <Download size={15} /> Download Resume
            </a>

            <div className="glass-card p-4 flex items-center gap-3">
              <CheckCircle2 size={16} className="text-green-400 shrink-0" />
              <div>
                <p className="text-sm font-medium text-[#f5f0e8]">Open to Work</p>
                <p className="text-xs text-[#57534e]">Full-time & internship roles</p>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="md:col-span-3 space-y-10">
            <div>
              <h2 className="font-display text-2xl font-bold mb-5">The Story</h2>
              <div className="space-y-4 text-[#a8a29e] leading-relaxed">
                <p>
                  I&apos;m a Computer Science undergrad at <span className="text-amber-400">Lovely Professional University</span>, building at the intersection of full-stack web development, Web3, and AI.
                </p>
                <p>
                  I built a fully on-chain <span className="text-amber-400">decentralized messaging DApp</span> on Ethereum — no backend, no centralized server, just smart contracts and a Next.js frontend. I obsessed over gas optimization, deterministic conversation IDs with keccak256, and wallet UX.
                </p>
                <p>
                  I also independently engineered an <span className="text-amber-400">AI Email Automation SaaS</span> — integrating OpenAI, SendGrid, Clerk auth, and PostgreSQL with Prisma. That experience sharpened my understanding of full-stack architecture, async job queues, and production-grade API design.
                </p>
                <p>
                  Outside of projects, I&apos;ve solved 300+ DSA problems on LeetCode and GFG, earned 5-star ratings in C++ and Python on HackerRank, and hold certifications from HackerRank, NPTEL, and Cipher Schools.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-5">What I Value</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {values.map(({ icon, title, description }) => (
                  <div key={title} className="glass-card p-5">
                    <span className="text-2xl mb-3 block">{icon}</span>
                    <h3 className="font-semibold text-[#f5f0e8] mb-1.5">{title}</h3>
                    <p className="text-sm text-[#a8a29e] leading-relaxed">{description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-5">Interests</h2>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span key={interest} className="px-3 py-1.5 rounded-full border border-[#2a2a2a] text-sm text-[#a8a29e] hover:border-amber-500/40 hover:text-amber-400 transition cursor-default">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
