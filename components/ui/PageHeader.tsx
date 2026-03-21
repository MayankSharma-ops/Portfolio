'use client';

import { motion } from 'framer-motion';

interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <div className="text-center mb-12 sm:mb-16">
      <motion.p
        className="section-label mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {label}
      </motion.p>
      <motion.h1
        className="page-heading text-text-primary mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {title}
      </motion.h1>
      {description && (
        <motion.p
          className="text-text-secondary max-w-xl mx-auto text-base leading-relaxed px-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          {description}
        </motion.p>
      )}
      <motion.div
        className="mt-6 flex justify-center"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber to-transparent" />
      </motion.div>
    </div>
  );
}
