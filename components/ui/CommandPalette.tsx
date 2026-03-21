'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FolderGit2, Code2, LineChart, FileText, Mail, Home, User, Command } from 'lucide-react';
import { projects, skills } from '@/lib/data';

type CommandItem = {
  id: string;
  type: 'page' | 'project' | 'skill';
  title: string;
  subtitle?: string;
  icon: React.ElementType;
  onSelect: () => void;
};

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  // Items generation
  const items: CommandItem[] = [
    // Pages
    { id: 'p-home', type: 'page', title: 'Home', icon: Home, onSelect: () => router.push('/') },
    { id: 'p-about', type: 'page', title: 'About', icon: User, onSelect: () => router.push('/about') },
    { id: 'p-projects', type: 'page', title: 'Projects', icon: FolderGit2, onSelect: () => router.push('/projects') },
    { id: 'p-skills', type: 'page', title: 'Skills', icon: Code2, onSelect: () => router.push('/skills') },
    { id: 'p-contact', type: 'page', title: 'Contact', icon: Mail, onSelect: () => router.push('/contact') },
    { id: 'p-resume', type: 'page', title: 'Resume', icon: FileText, onSelect: () => router.push('/resume') },
    // Projects
    ...projects.map((p) => ({
      id: `pr-${p.id}`,
      type: 'project' as const,
      title: p.title,
      subtitle: p.tags.slice(0, 3).join(', '),
      icon: LineChart,
      onSelect: () => {
        if (p.live) window.open(p.live, '_blank');
        else if (p.github) window.open(p.github, '_blank');
      },
    })),
    // Skills
    ...skills.map((s) => ({
      id: `sk-${s.name}`,
      type: 'skill' as const,
      title: s.name,
      subtitle: s.category,
      icon: Command,
      onSelect: () => {
        router.push('/skills');
      },
    })),
  ];

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.subtitle?.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      setQuery('');
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-[#111] border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Header/Input */}
          <div className="flex items-center px-4 border-b border-border">
            <Search className="w-5 h-5 text-text-secondary" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Escape') setIsOpen(false);
                if (e.key === 'ArrowDown') {
                  e.preventDefault();
                  setActiveIndex((prev) => (prev + 1) % filteredItems.length);
                }
                if (e.key === 'ArrowUp') {
                  e.preventDefault();
                  setActiveIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
                }
                if (e.key === 'Enter' && filteredItems[activeIndex]) {
                  e.preventDefault();
                  filteredItems[activeIndex].onSelect();
                  setIsOpen(false);
                }
              }}
              className="w-full bg-transparent border-none text-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-0 py-4 px-3"
              placeholder="Search projects, skills, or jump to pages..."
            />
            <div className="text-[10px] font-mono bg-[#222] text-text-secondary px-1.5 py-1 rounded border border-[#333]">
              ESC
            </div>
          </div>

          {/* Results List */}
          <div className="max-h-[60vh] overflow-y-auto p-2">
            {filteredItems.length === 0 ? (
              <p className="p-8 text-center text-text-muted text-sm">No results found for "{query}"</p>
            ) : (
              <div className="flex flex-col gap-1">
                {filteredItems.map((item, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        item.onSelect();
                        setIsOpen(false);
                      }}
                      onMouseEnter={() => setActiveIndex(i)}
                      className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                        isActive ? 'bg-amber/10 text-amber' : 'text-text-secondary hover:bg-[#1a1a1a]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="w-4 h-4" />
                        <span className="font-medium text-sm">{item.title}</span>
                      </div>
                      {item.subtitle && (
                        <span className={`text-xs font-mono capitalize ${isActive ? 'text-amber/60' : 'text-text-muted'}`}>
                          {item.type}: {item.subtitle}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          
          {/* Footer */}
          <div className="px-4 py-2 border-t border-border bg-bg-primary flex items-center gap-4 text-[10px] text-text-muted font-mono">
            <span className="flex items-center gap-1">
              <span className="bg-[#222] border border-[#333] rounded px-1">↵</span> to select
            </span>
            <span className="flex items-center gap-1">
              <span className="bg-[#222] border border-[#333] rounded px-1">↑↓</span> to navigate
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
