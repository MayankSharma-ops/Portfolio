'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Code2, Download } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Resume', href: '/resume' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Certificates', href: '/certificates' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#2a2a2a]'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center group-hover:bg-amber-400 transition-colors">
            <Code2 size={16} className="text-black" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
            {personalInfo.name.split(' ')[0]}
            <span className="text-amber-500">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (pathname === '/' && link.href === '/about');
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'text-amber-400 bg-amber-500/10'
                      : 'text-[#a8a29e] hover:text-[#f5f0e8] hover:bg-white/5'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="ml-3">
            <a
              href={personalInfo.resumeUrl}
              download="MayankSharma_CV.pdf"
              className="btn-primary text-sm py-2 px-4 flex items-center gap-1.5"
            >
              <Download size={13} /> CV
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-md text-[#a8a29e] hover:text-[#f5f0e8] hover:bg-white/5 transition"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#111111] border-b border-[#2a2a2a] px-6 py-4">
          <ul className="space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'block px-4 py-2.5 rounded-lg text-sm font-medium transition',
                      isActive
                        ? 'text-amber-400 bg-amber-500/10'
                        : 'text-[#a8a29e] hover:text-[#f5f0e8] hover:bg-white/5'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <a
                href={personalInfo.resumeUrl}
                download="MayankSharma_CV.pdf"
                className="btn-primary w-full justify-center text-sm flex items-center gap-2"
              >
                <Download size={13} /> Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
