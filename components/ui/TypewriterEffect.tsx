'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roles = [
  'Full Stack Developer',
  'REST API Engineer',
  'AI Builder',
  'Next.js Developer',
  'Backend Architect',
];

export function TypewriterEffect() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];

    if (isPaused) {
      const pause = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(pause);
    }

    if (isDeleting) {
      if (charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }
      const timer = setTimeout(() => setCharIndex((prev) => prev - 1), 30);
      return () => clearTimeout(timer);
    }

    if (charIndex === current.length) {
      setIsPaused(true);
      return;
    }

    const timer = setTimeout(() => setCharIndex((prev) => prev + 1), 70);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, isPaused, roleIndex]);

  const displayText = roles[roleIndex].slice(0, charIndex);

  return (
    <span className="inline-flex items-baseline">
      <span className="text-text-secondary min-w-[20px]">
        {displayText}
      </span>
      <motion.span
        className="inline-block w-[2px] sm:w-[3px] h-[0.85em] bg-amber ml-0.5 relative top-[0.05em]"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
      />
    </span>
  );
}
