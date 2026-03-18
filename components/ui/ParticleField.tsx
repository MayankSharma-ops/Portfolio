'use client';

import { useMemo, useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: string;
  top: string;
  size: string;
  delay: string;
  duration: string;
  opacity: number;
}

export function ParticleField({ count = 20 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${(Math.random() * 100).toFixed(4)}%`,
      top: `${(Math.random() * 100).toFixed(4)}%`,
      size: `${(Math.random() * 3 + 1).toFixed(4)}px`,
      delay: `${(Math.random() * 5).toFixed(4)}s`,
      duration: `${(Math.random() * 4 + 4).toFixed(4)}s`,
      opacity: Math.random() * 0.4 + 0.1,
    }));
  }, [count]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-float"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            backgroundColor: `rgba(245, 158, 11, ${p.opacity})`,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}