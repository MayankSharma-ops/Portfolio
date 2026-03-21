'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Download, MapPin, Sparkles } from 'lucide-react';
import { personalInfo, projects, skills } from '@/lib/data';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { ParticleField } from '@/components/ui/ParticleField';
import { TypewriterEffect } from '@/components/ui/TypewriterEffect';
import { LiveBadge } from '@/components/ui/LiveBadge';

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const topSkills = skills.filter((s) => s.level >= 85).slice(0, 8);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen dot-grid flex items-center pt-16 overflow-hidden">
        {/* Animated glow orb */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-amber/5 rounded-full blur-[120px] pointer-events-none glow-pulse" />

        <ParticleField count={18} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 w-full">
          <div className="max-w-3xl">
            {/* Status Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber/30 bg-amber/5 mb-6 sm:mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-mono text-amber">
                {personalInfo.availableForWork ? 'Available for new opportunities' : 'Currently unavailable'}
              </span>
            </motion.div>

            <motion.h1
              className="page-heading mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Hi, I&apos;m{' '}
              <span className="text-shimmer">{personalInfo.name}</span>
              <span className="block text-[0.65em] sm:text-[0.9em] mt-1">
                <TypewriterEffect />
              </span>
            </motion.h1>

            <motion.p
              className="text-text-secondary text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              className="flex items-center gap-2 text-text-muted text-sm mb-8 sm:mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <MapPin size={14} className="text-amber/60" />
              {personalInfo.location}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <Link href="/projects" className="btn-primary justify-center sm:justify-start">
                View Projects <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-outline justify-center sm:justify-start">
                Get in Touch
              </Link>
              <a
                href={personalInfo.resumeUrl}
                download="MayankSharma_CV.pdf"
                className="btn-outline justify-center sm:justify-start"
              >
                <Download size={15} /> Resume
              </a>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 mt-8 sm:mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                className="text-text-muted hover:text-amber transition hover:scale-110 transform">
                <Github size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                className="text-text-muted hover:text-amber transition hover:scale-110 transform">
                <Linkedin size={20} />
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 scroll-bounce hidden sm:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <div className="w-px h-10 bg-gradient-to-b from-amber/50 to-transparent" />
          <span className="text-text-muted text-xs font-mono">scroll</span>
        </motion.div>
      </section>

      {/* ── Stats strip ── */}
      <AnimatedSection>
        <section className="border-y border-border bg-bg-secondary">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {[
                { value: '4+', label: 'Projects Shipped' },
                { value: '300+', label: 'DSA Problems Solved' },
                { value: '5+', label: 'HackerRank Stars' },
                { value: '8', label: 'Certifications' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <AnimatedCounter
                    value={value}
                    className="font-display text-3xl font-bold text-amber"
                  />
                  <p className="text-text-muted text-xs sm:text-sm mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Featured Projects ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <AnimatedSection>
          <div className="flex items-center justify-between mb-10 sm:mb-12">
            <div>
              <p className="section-label mb-2">Selected Work</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold">Featured Projects</h2>
            </div>
            <Link href="/projects" className="btn-outline hidden md:flex text-sm">
              All Projects <ArrowRight size={14} />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-5">
          {featuredProjects.map((project, i) => (
            <AnimatedSection key={project.id} delay={0.15 * i}>
              <div className="glass-card p-5 sm:p-6 flex flex-col group h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber/10 border border-amber/20 flex items-center justify-center text-amber">
                    <Sparkles size={18} />
                  </div>
                  <div className="flex items-center gap-3">
                    {project.live && <LiveBadge url={project.live} />}
                    <span className="font-mono text-xs text-text-muted">{project.year}</span>
                  </div>
                </div>
                <h3 className="font-display text-lg sm:text-xl font-semibold mb-2 group-hover:text-amber transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-3 pt-3 border-t border-border">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-text-muted hover:text-amber transition">
                      <Github size={13} /> Code
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-text-muted hover:text-amber transition">
                      <ArrowRight size={13} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/projects" className="btn-outline inline-flex text-sm">
            All Projects <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── Top Skills ── */}
      <AnimatedSection>
        <section className="bg-bg-secondary border-y border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
            <div className="mb-10 sm:mb-12">
              <p className="section-label mb-2">Expertise</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold">Top Skills</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {topSkills.map((skill, i) => (
                <AnimatedSection key={skill.name} delay={0.08 * i} direction="none">
                  <div className="glass-card p-3 sm:p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs sm:text-sm font-medium text-text-primary">{skill.name}</span>
                      <span className="font-mono text-xs text-amber">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-bar-fill" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/skills" className="btn-outline inline-flex">
                View All Skills <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── CTA ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <AnimatedSection>
          <div className="glass-card gradient-border p-8 sm:p-12 text-center amber-glow">
            <p className="section-label mb-4">Let&apos;s Work Together</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Have a project in mind?
            </h2>
            <p className="text-text-secondary max-w-md mx-auto mb-8 px-4">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to collaborate.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-primary inline-flex justify-center">
                Start a Conversation <ArrowRight size={16} />
              </Link>
              <a
                href={personalInfo.resumeUrl}
                download="MayankSharma_CV.pdf"
                className="btn-outline inline-flex justify-center"
              >
                <Download size={15} /> Download CV
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
