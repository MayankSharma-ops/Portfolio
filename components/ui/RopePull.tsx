'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/components/providers/ThemeProvider';
import { Sun, Moon } from 'lucide-react';

export function RopePull() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative flex items-start h-full">
      {/* We use -mt-4 to make the rope look like it originates from above the navbar edge */}
      <div className="relative flex flex-col items-center group -mt-4">
        <motion.div
          className="flex flex-col items-center cursor-grab active:cursor-grabbing"
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }} /* Enforces snappy return to origin */
          dragElastic={{ top: 0, bottom: 0.6 }} /* Only stretches downwards */
          onDragEnd={(e, info) => {
            if (info.offset.y > 20) {
              toggleTheme();
            }
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          role="button"
          tabIndex={0}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleTheme();
            }
          }}
        >
          {/* The rope line - heavily elongated to look like a pull string */}
          <div className="w-[3px] h-20 bg-gradient-to-b from-transparent via-text-muted/40 to-amber rounded-full" />

          {/* Knot */}
          <div className="w-2 h-2 rounded-full bg-amber/90 z-10 -mt-1 shadow-md" />

          {/* The bulb/handle */}
          <div
            className="-mt-1 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 pointer-events-none"
            style={{
              background: theme === 'dark'
                ? 'radial-gradient(circle, rgba(var(--amber-rgb), 0.25) 0%, rgba(var(--amber-rgb), 0.05) 100%)'
                : 'radial-gradient(circle, rgba(var(--amber-rgb), 0.35) 0%, rgba(var(--amber-rgb), 0.1) 100%)',
              border: '2px solid rgba(var(--amber-rgb), 0.5)',
              boxShadow: theme === 'dark'
                ? '0 0 16px rgba(var(--amber-rgb), 0.2)'
                : '0 0 24px rgba(var(--amber-rgb), 0.3)',
            }}
          >
            {theme === 'dark' ? (
              <Sun size={15} className="text-amber" />
            ) : (
              <Moon size={15} className="text-amber" />
            )}
          </div>
        </motion.div>

        {/* Tooltip */}
        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded text-[10px] font-mono bg-bg-card text-text-secondary border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
          Pull down to switch
        </div>
      </div>
    </div>
  );
}
