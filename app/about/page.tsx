'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { CopyEmail } from '@/components/ui/CopyEmail';
import { GitHubStats } from '@/components/ui/GitHubStats';
import { personalInfo } from '@/lib/data';
import { MapPin, Phone, Github, Linkedin, Download, CheckCircle2 } from 'lucide-react';

const values = [
  { icon: '⚡', title: 'Performance First', description: 'I obsess over query efficiency in PostgreSQL, API response times, and bundle sizes in Next.js for production-grade applications.' },
  { icon: '🏗️', title: 'Scalable Architecture', description: 'Designing normalized schemas, indexed queries, and RESTful APIs that hold up under real-world load and high-frequency operations.' },
  { icon: '🤖', title: 'AI-Augmented', description: 'Integrating LLMs with controlled prompt logic and structured outputs to build genuinely useful, production-ready AI features.' },
  { icon: '🤝', title: 'Clean Code', description: 'Readable, typed, and well-structured code that the next developer (or future me) can understand and maintain immediately.' },
];

const interests = ['Full Stack Development', 'AI & LLMs', 'DSA & Problem Solving', 'REST API Design', 'Next.js', 'PostgreSQL', 'System Design', 'Chess'];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <PageHeader
          label="// about me"
          title="Who I Am"
          description="A full-stack developer driven by curiosity, precision, and the craft of building great software."
        />

        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
          {/* Left column */}
          <AnimatedSection className="md:col-span-2 space-y-6" direction="left">
            {/* Avatar */}
            <div className="glass-card gradient-border p-1">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-amber-500/20 via-[#161616] to-[#111111] flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-5xl sm:text-6xl font-bold text-shimmer mb-2">
                    MS
                  </div>
                  <p className="text-[#57534e] font-mono text-xs">Full Stack Web Developer</p>
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="glass-card p-5 space-y-3">
              {/* Email with copy */}
              <div className="flex items-center gap-3">
                <CopyEmail email={personalInfo.email} />
              </div>

              <a href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-3 text-sm text-[#a8a29e] hover:text-amber-400 transition group">
                <Phone size={14} className="text-amber-500/60 group-hover:text-amber-400 transition" />
                <span>{personalInfo.phone}</span>
              </a>

              <div className="flex items-center gap-3 text-sm text-[#a8a29e]">
                <MapPin size={14} className="text-amber-500/60" />
                <span>{personalInfo.location}</span>
              </div>
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

            <a href={personalInfo.resumeUrl}
              download="MayankSharma_CV.pdf"
              className="btn-primary w-full justify-center flex items-center gap-2"
            >
              <Download size={15} /> Download Resume
            </a>

            <div className="glass-card p-4 flex items-center gap-3">
              <CheckCircle2 size={16} className="text-green-400 shrink-0" />
              <div>
                <p className="text-sm font-medium text-[#f5f0e8]">Open to Work</p>
                <p className="text-xs text-[#57534e]">Full Stack Web Developer Internship</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right column */}
          <div className="md:col-span-3 space-y-10">
            <AnimatedSection delay={0.1}>
              <h2 className="font-display text-2xl font-bold mb-5">The Story</h2>
              <div className="space-y-4 text-[#a8a29e] leading-relaxed">
                <p>
                  I&apos;m a Computer Science undergrad at <span className="text-amber-400">Lovely Professional University</span>, building production-grade full-stack web applications using modern technologies like Next.js, Node.js, and PostgreSQL.
                </p>
                <p>
                  I built <span className="text-amber-400">NexChat</span> — a production-grade real-time chat platform with a friend system, JWT-secured REST API with 15+ endpoints, polling-based live messaging, and Jitsi Meet video calling. Every layer — from PostgreSQL schema design to frontend UI — was engineered from scratch.
                </p>
                <p>
                  I also independently engineered an <span className="text-amber-400">AI Email Automation SaaS</span> — integrating OpenAI, SendGrid, Clerk auth, and PostgreSQL with Prisma. That experience sharpened my understanding of full-stack architecture, async job queues, and production-grade API design.
                </p>
                <p>
                  Outside of projects, I&apos;ve solved 300+ DSA problems on LeetCode and GFG, earned 5-star ratings in C++ and Python on HackerRank, and hold certifications from HackerRank, NPTEL, and Cipher Schools.
                </p>
              </div>
            </AnimatedSection>

            {/* GitHub Stats */}
            <GitHubStats />

            <AnimatedSection delay={0.2}>
              <h2 className="font-display text-2xl font-bold mb-5">What I Value</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {values.map(({ icon, title, description }, i) => (
                  <AnimatedSection key={title} delay={0.1 * i} direction="none">
                    <div className="glass-card p-5 h-full">
                      <span className="text-2xl mb-3 block">{icon}</span>
                      <h3 className="font-semibold text-[#f5f0e8] mb-1.5">{title}</h3>
                      <p className="text-sm text-[#a8a29e] leading-relaxed">{description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h2 className="font-display text-2xl font-bold mb-5">Interests</h2>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span key={interest} className="px-3 py-1.5 rounded-full border border-[#2a2a2a] text-sm text-[#a8a29e] hover:border-amber-500/40 hover:text-amber-400 transition cursor-default">
                    {interest}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}