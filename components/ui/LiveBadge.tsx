'use client';

import { useEffect, useState } from 'react';

export function LiveBadge({ url }: { url: string }) {
  const [isUp, setIsUp] = useState<boolean | null>(null);

  useEffect(() => {
    fetch(`/api/status?url=${encodeURIComponent(url)}`)
      .then((res) => res.json())
      .then((data) => setIsUp(data.up))
      .catch(() => setIsUp(false));
  }, [url]);

  if (isUp === null) {
    // Skeleton state while checking
    return (
      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#111] border border-[#222] opacity-50">
        <span className="w-2 h-2 rounded-full bg-[#333] animate-pulse" />
        <span className="text-[10px] font-mono text-text-muted">Checking</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#111] border border-[#222] transition-colors">
      <span
        className={`w-2 h-2 rounded-full ${
          isUp ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-[pulse_2s_ease-in-out_infinite]' : 'bg-red-500'
        }`}
      />
      <span className={`text-[10px] font-mono ${isUp ? 'text-green-500' : 'text-red-500'}`}>
        {isUp ? 'Live' : 'Offline'}
      </span>
    </div>
  );
}
