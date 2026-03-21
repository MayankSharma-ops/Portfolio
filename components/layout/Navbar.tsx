'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Code2, Download, ChevronDown, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { cn } from '@/lib/utils';
import { RopePull } from '@/components/ui/RopePull';
import { useTheme } from '@/components/providers/ThemeProvider';

type NavItem =
  | { label: string; href: string; children?: never }
  | { label: string; href?: never; children: { label: string; href: string }[] };

const navItems: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Resume', href: '/resume' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  {
    label: 'Credentials',
    children: [
      { label: 'Certificates', href: '/certificates' },
      { label: 'Achievements', href: '/achievements' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileCredentials, setMobileCredentials] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    setMobileCredentials(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Close dropdown on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDropdownOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  const handleDropdownEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  const isCredentialActive = pathname === '/certificates' || pathname === '/achievements';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border)]'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <motion.div
            className="w-8 h-8 rounded-lg bg-amber flex items-center justify-center group-hover:bg-amber transition-colors"
            whileHover={{ rotate: 12, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code2 size={16} className="text-black" />
          </motion.div>
          <span className="font-display font-bold text-lg tracking-tight">
            {personalInfo.name.split(' ')[0]}
            <span className="text-amber">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            // Dropdown item
            if (item.children) {
              return (
                <li
                  key={item.label}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setDropdownOpen(!dropdownOpen); } }}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                    className={cn(
                      'relative flex items-center gap-1 px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-200',
                      isCredentialActive
                        ? 'text-amber'
                        : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                    )}
                  >
                    {item.label}
                    <ChevronDown size={13} className={cn('transition-transform duration-200', dropdownOpen && 'rotate-180')} />
                    {isCredentialActive && (
                      <motion.span
                        layoutId="navbar-active"
                        className="absolute inset-0 rounded-md bg-amber/10 -z-10"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.ul
                        className="absolute top-full left-0 mt-1 w-44 py-1.5 rounded-lg border border-border bg-bg-secondary/95 backdrop-blur-xl shadow-xl"
                        initial={{ opacity: 0, y: -8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        role="menu"
                      >
                        {item.children.map((child) => {
                          const isChildActive = pathname === child.href;
                          return (
                            <li key={child.href} role="menuitem">
                              <Link
                                href={child.href}
                                className={cn(
                                  'block px-4 py-2.5 text-sm transition-colors',
                                  isChildActive
                                    ? 'text-amber bg-amber/10'
                                    : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                                )}
                              >
                                {child.label}
                              </Link>
                            </li>
                          );
                        })}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              );
            }

            // Regular link
            const isActive = pathname === item.href || (pathname === '/' && item.href === '/about');
            return (
              <li key={item.href}>
                <Link
                  href={item.href!}
                  className={cn(
                    'relative px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'text-amber'
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                  )}
                >
                  {item.label}
                  {isActive && !isCredentialActive && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute inset-0 rounded-md bg-amber/10 -z-10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
          <li className="ml-3">
            <motion.a
              href={personalInfo.resumeUrl}
              download="MayankSharma_CV.pdf"
              className="btn-primary text-sm py-2 px-4 flex items-center gap-1.5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={13} /> CV
            </motion.a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        {/* Mobile theme toggle */}
        <motion.button
          className="lg:hidden p-2 rounded-md text-[var(--text-secondary)] hover:text-amber transition"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          whileTap={{ scale: 0.9 }}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </motion.button>
        <motion.button
          className="lg:hidden p-2 rounded-md text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5 transition"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="lg:hidden fixed inset-0 top-16 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              className="lg:hidden fixed top-16 left-0 right-0 bg-[var(--bg-secondary)]/95 backdrop-blur-xl border-b border-[var(--border)] px-4 sm:px-6 py-5 z-50 max-h-[calc(100vh-4rem)] overflow-y-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <ul className="space-y-1">
                {(() => {
                  let idx = 0;
                  return navItems.map((item) => {
                    if (item.children) {
                      const currentIdx = idx++;
                      return (
                        <motion.li
                          key={item.label}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.05 * currentIdx, duration: 0.3 }}
                        >
                          <button
                            onClick={() => setMobileCredentials(!mobileCredentials)}
                            className={cn(
                              'w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition',
                              isCredentialActive
                                ? 'text-amber bg-amber/10'
                                : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                            )}
                          >
                            {item.label}
                            <ChevronDown size={14} className={cn('transition-transform', mobileCredentials && 'rotate-180')} />
                          </button>
                          <AnimatePresence>
                            {mobileCredentials && (
                              <motion.ul
                                className="ml-4 mt-1 space-y-1 border-l border-border pl-3"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                {item.children.map((child) => (
                                  <li key={child.href}>
                                    <Link
                                      href={child.href}
                                      className={cn(
                                        'block px-4 py-2.5 rounded-lg text-sm transition',
                                        pathname === child.href
                                          ? 'text-amber bg-amber/10'
                                          : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                                      )}
                                    >
                                      {child.label}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </motion.li>
                      );
                    }

                    const currentIdx = idx++;
                    const isActive = pathname === item.href;
                    return (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * currentIdx, duration: 0.3 }}
                      >
                        <Link
                          href={item.href!}
                          className={cn(
                            'block px-4 py-3 rounded-lg text-sm font-medium transition',
                            isActive
                              ? 'text-amber bg-amber/10'
                              : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                          )}
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    );
                  });
                })()}
                <motion.li
                  className="pt-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * navItems.length, duration: 0.3 }}
                >
                  <a
                    href={personalInfo.resumeUrl}
                    download="MayankSharma_CV.pdf"
                    className="btn-primary w-full justify-center text-sm flex items-center gap-2"
                  >
                    <Download size={13} /> Download CV
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Theme Toggle positioned independently on the far right */}
      <div className="hidden lg:block absolute top-0 right-2 sm:right-4 lg:right-5 h-16 pointer-events-none [&>*]:pointer-events-auto z-50">
        <RopePull />
      </div>
    </header>
  );
}
