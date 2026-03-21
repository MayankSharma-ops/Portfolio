'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyEmailProps {
  email: string;
  className?: string;
}

export function CopyEmail({ email, className = '' }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <span className={`inline-flex items-center gap-2 group ${className}`}>
      <a href={`mailto:${email}`} className="text-sm text-text-secondary hover:text-amber transition break-all">
        {email}
      </a>
      <button
        onClick={handleCopy}
        className="relative p-1 rounded-md text-text-muted hover:text-amber hover:bg-amber/10 transition shrink-0"
        aria-label="Copy email address"
        title={copied ? 'Copied!' : 'Copy email'}
      >
        {copied ? (
          <Check size={13} className="text-green-400" />
        ) : (
          <Copy size={13} />
        )}
        {copied && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-mono bg-bg-hover border border-border rounded text-green-400 whitespace-nowrap">
            Copied!
          </span>
        )}
      </button>
    </span>
  );
}
