import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Download, MapPin, Sparkles } from 'lucide-react';
import { personalInfo, projects, skills } from '@/lib/data';

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const topSkills = skills.filter((s) => s.level >= 85).slice(0, 8);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen dot-grid flex items-center pt-16 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="max-w-3xl">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/5 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-mono text-amber-400">
                {personalInfo.availableForWork ? 'Available for new opportunities' : 'Currently unavailable'}
              </span>
            </div>

            <h1 className="page-heading mb-6 animate-fade-up opacity-0 delay-100">
              Hi, I&apos;m{' '}
              <span className="text-amber-400">{personalInfo.name}</span>
              <span className="block text-[#a8a29e] text-[0.9em] mt-1">
                {personalInfo.title}
              </span>
            </h1>

            <p className="text-[#a8a29e] text-lg leading-relaxed mb-8 max-w-xl animate-fade-up opacity-0 delay-200">
              {personalInfo.tagline}
            </p>

            <div className="flex items-center gap-2 text-[#57534e] text-sm mb-10 animate-fade-up opacity-0 delay-300">
              <MapPin size={14} className="text-amber-500/60" />
              {personalInfo.location}
            </div>

            <div className="flex flex-wrap gap-3 animate-fade-up opacity-0 delay-400">
              <Link href="/projects" className="btn-primary">
                View Projects <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-outline">
                Get in Touch
              </Link>
              <a
                href={personalInfo.resumeUrl}
                download="MayankSharma_CV.pdf"
                className="btn-outline"
              >
                <Download size={15} /> Resume
              </a>
            </div>

            <div className="flex items-center gap-4 mt-10 animate-fade-up opacity-0 delay-500">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                className="text-[#57534e] hover:text-amber-400 transition">
                <Github size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                className="text-[#57534e] hover:text-amber-400 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-bounce">
          <div className="w-px h-10 bg-gradient-to-b from-amber-500/50 to-transparent" />
          <span className="text-[#57534e] text-xs font-mono">scroll</span>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="border-y border-[#2a2a2a] bg-[#111111]">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '2+', label: 'Projects Shipped' },
              { value: '300+', label: 'DSA Problems Solved' },
              { value: '5★', label: 'HackerRank C++ & Python' },
              { value: '6', label: 'Certifications' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="font-display text-3xl font-bold text-amber-400">{value}</p>
                <p className="text-[#57534e] text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="section-label mb-2">Selected Work</p>
            <h2 className="font-display text-3xl font-bold">Featured Projects</h2>
          </div>
          <Link href="/projects" className="btn-outline hidden md:flex text-sm">
            All Projects <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {featuredProjects.map((project, i) => (
            <div key={project.id} className="glass-card p-6 flex flex-col group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Sparkles size={18} />
                </div>
                <span className="font-mono text-xs text-[#57534e]">{project.year}</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-amber-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-[#a8a29e] text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className="flex gap-3 pt-3 border-t border-[#2a2a2a]">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-[#57534e] hover:text-amber-400 transition">
                    <Github size={13} /> Code
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-[#57534e] hover:text-amber-400 transition">
                    <ArrowRight size={13} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Top Skills ── */}
      <section className="bg-[#111111] border-y border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="mb-12">
            <p className="section-label mb-2">Expertise</p>
            <h2 className="font-display text-3xl font-bold">Top Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {topSkills.map((skill) => (
              <div key={skill.name} className="glass-card p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-[#f5f0e8]">{skill.name}</span>
                  <span className="font-mono text-xs text-amber-400">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-bar-fill" style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/skills" className="btn-outline inline-flex">
              View All Skills <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="glass-card gradient-border p-12 text-center amber-glow">
          <p className="section-label mb-4">Let&apos;s Work Together</p>
          <h2 className="font-display text-4xl font-bold mb-4">
            Have a project in mind?
          </h2>
          <p className="text-[#a8a29e] max-w-md mx-auto mb-8">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to collaborate.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary inline-flex">
              Start a Conversation <ArrowRight size={16} />
            </Link>
            <a
              href={personalInfo.resumeUrl}
              download="MayankSharma_CV.pdf"
              className="btn-outline inline-flex"
            >
              <Download size={15} /> Download CV
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
