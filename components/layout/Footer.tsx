'use client';

import Link from 'next/link';
import { Github, Linkedin, Code2, Heart } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function Footer() {
  return (
    <AnimatedSection>
      <footer className="border-t border-[#2a2a2a] bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-7 h-7 rounded-md bg-amber-500 flex items-center justify-center group-hover:bg-amber-400 transition-colors">
                <Code2 size={14} className="text-black" />
              </div>
              <span className="font-display font-bold">
                {personalInfo.name.split(' ')[0]}
                <span className="text-amber-500">.</span>
              </span>
            </Link>

            <p className="text-[#57534e] text-sm flex items-center gap-1.5">
              Built with <Heart size={12} className="text-amber-500 fill-amber-500" /> using Next.js &amp; TypeScript
            </p>

            <div className="flex items-center gap-3">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="w-8 h-8 rounded-md border border-[#2a2a2a] flex items-center justify-center text-[#57534e] hover:text-amber-400 hover:border-amber-500/40 transition">
                <Github size={14} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="w-8 h-8 rounded-md border border-[#2a2a2a] flex items-center justify-center text-[#57534e] hover:text-amber-400 hover:border-amber-500/40 transition">
                <Linkedin size={14} />
              </a>
            </div>
          </div>
          <p className="text-center text-[#57534e] text-xs mt-6">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </AnimatedSection>
  );
}
