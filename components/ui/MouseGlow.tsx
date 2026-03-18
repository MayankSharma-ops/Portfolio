'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function MouseGlow() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (isTouch) return;

    const handleMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('mouseenter', handleEnter);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseenter', handleEnter);
    };
  }, [isTouch]);

  if (!visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30"
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          left: mouse.x - 250,
          top: mouse.y - 250,
          background:
            'radial-gradient(circle, rgba(245,158,11,0.06) 0%, rgba(245,158,11,0.02) 40%, transparent 70%)',
          transition: 'left 0.1s ease-out, top 0.1s ease-out',
        }}
      />
    </motion.div>
  );
}
